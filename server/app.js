import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { readDB, writeDB, addMessage, addTestimonial } from './database.js';
import { sendContactEmail } from './emailService.js';
import { verifyGoogleToken } from './googleAuth.js';

const app = express();

app.use(cors());
app.use(express.json());

// API health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    time: new Date().toISOString(),
    developer: 'Divyanshu Kumar',
    emailServiceConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
    googleAuthAvailable: true
  });
});

// Profile & Metadata
app.get('/api/profile', (req, res) => {
  const db = readDB();
  res.json({ profile: db.profile, skills: db.skills, services: db.services });
});

// Projects & PRD details
app.get('/api/projects', (req, res) => {
  const db = readDB();
  res.json({ projects: db.projects });
});

app.get('/api/projects/:id', (req, res) => {
  const db = readDB();
  const project = db.projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json({ project });
});

// Testimonials / Feedback API
app.get('/api/testimonials', (req, res) => {
  const db = readDB();
  res.json({ testimonials: db.testimonials });
});

// Testimonial Post with Google Token Authentication & Passkey Fallback
app.post('/api/testimonials', async (req, res) => {
  const { name, company, role, content, rating, googleToken, passkey } = req.body;

  let verifiedUser = null;
  let authMethod = 'none';

  // 1. Authenticate with Google ID Token
  if (googleToken) {
    try {
      verifiedUser = await verifyGoogleToken(googleToken);
      authMethod = 'google';
    } catch (gErr) {
      return res.status(401).json({
        error: `Google Authentication Failed: ${gErr.message}`
      });
    }
  } 
  // 2. Or authenticate with Client Access Passkey
  else if (passkey) {
    const expectedPasskey = process.env.REVIEW_PASSKEY || 'divy2026';
    if (passkey.trim() === expectedPasskey) {
      authMethod = 'passkey';
    } else {
      return res.status(401).json({
        error: 'Authentication failed: Invalid client access passkey.'
      });
    }
  } 
  // 3. Reject unauthenticated requests
  else {
    return res.status(401).json({
      error: 'Authentication required: Please authenticate with Google or provide a valid client passkey to post a review.'
    });
  }

  const reviewerName = (verifiedUser && verifiedUser.name) || name;
  if (!reviewerName || !content) {
    return res.status(400).json({ error: 'Reviewer name and review content are required' });
  }

  const created = addTestimonial({
    name: reviewerName,
    email: verifiedUser ? verifiedUser.email : undefined,
    company: company || (verifiedUser ? 'Google Verified Reviewer' : 'Client'),
    role: role || 'Client',
    avatar: (verifiedUser && verifiedUser.picture) || '/images/client-1.jpg',
    content,
    rating,
    verifiedWithGoogle: authMethod === 'google',
    authMethod
  });

  console.log(`[AUTHENTICATED REVIEW POSTED] Author: ${reviewerName} (${authMethod.toUpperCase()}) | Email: ${verifiedUser ? verifiedUser.email : 'N/A'}`);
  res.status(201).json({ success: true, testimonial: created });
});

// Google Token Verification Endpoint
app.post('/api/auth/google/verify', async (req, res) => {
  const { credentialToken } = req.body;
  if (!credentialToken) {
    return res.status(400).json({ error: 'Credential token is required' });
  }
  try {
    const user = await verifyGoogleToken(credentialToken);
    res.json({ success: true, user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

// Contact Inquiries API - Saves to DB and sends direct email to inbox
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and a message' });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address' });
  }

  // 1. Save locally in persistent store / inbox
  const savedMessage = addMessage({ name, email, phone, subject, message });
  console.log(`[INQUIRY RECEIVED] From: ${name} <${email}> | Subject: ${subject || 'General'}`);

  // 2. Send direct email to Divyanshu's email inbox via Nodemailer
  let emailDelivery = { sent: false };
  try {
    emailDelivery = await sendContactEmail({ name, email, phone, subject, message });
  } catch (emailErr) {
    console.error('Failed to trigger email delivery:', emailErr.message);
    emailDelivery = { sent: false, error: emailErr.message };
  }
  
  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out! Divyanshu will get back to you shortly.',
    data: savedMessage,
    emailDelivery: {
      sent: emailDelivery.sent || false,
      status: emailDelivery.sent ? 'Delivered directly to inbox' : (emailDelivery.reason || 'Stored in inbox')
    }
  });
});

// Admin Inquiries Retrieval
app.get('/api/contact/messages', (req, res) => {
  const db = readDB();
  res.json({
    total: db.messages.length,
    unread: db.messages.filter(m => !m.read).length,
    messages: db.messages
  });
});

// Mark message as read
app.patch('/api/contact/messages/:id/read', (req, res) => {
  const db = readDB();
  const msg = db.messages.find(m => m.id === req.params.id);
  if (!msg) {
    return res.status(404).json({ error: 'Message not found' });
  }
  msg.read = true;
  writeDB(db);
  res.json({ success: true, message: msg });
});

// Delete message
app.delete('/api/contact/messages/:id', (req, res) => {
  const db = readDB();
  const initialCount = db.messages.length;
  db.messages = db.messages.filter(m => m.id !== req.params.id);
  if (db.messages.length === initialCount) {
    return res.status(404).json({ error: 'Message not found' });
  }
  writeDB(db);
  res.json({ success: true, message: 'Deleted successfully' });
});

export default app;
