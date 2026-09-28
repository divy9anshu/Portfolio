import express from 'express';
import cors from 'cors';
import { readDB, writeDB, addMessage, addTestimonial } from './database.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString(), developer: 'Divyanshu Kumar' });
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

// Testimonials / Feedback
app.get('/api/testimonials', (req, res) => {
  const db = readDB();
  res.json({ testimonials: db.testimonials });
});

app.post('/api/testimonials', (req, res) => {
  const { name, company, role, content, rating } = req.body;
  if (!name || !content) {
    return res.status(400).json({ error: 'Name and testimonial content are required' });
  }
  const created = addTestimonial({ name, company, role, content, rating });
  res.status(201).json({ success: true, testimonial: created });
});

// Contact Inquiries API
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and a message' });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address' });
  }

  const savedMessage = addMessage({ name, email, phone, subject, message });
  console.log(`[INQUIRY RECEIVED] From: ${name} <${email}> | Subject: ${subject || 'General'}`);
  
  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out! Divyanshu will get back to you shortly.',
    data: savedMessage
  });
});

// Admin Inquiries Retrieval (for in-browser message viewer)
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

const server = app.listen(PORT, () => {
  console.log(`\n🚀 Backend REST API running on http://localhost:${PORT}`);
  console.log(`📡 Endpoints available at: http://localhost:${PORT}/api/profile, /api/projects, /api/testimonials, /api/contact\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n⚠️  Port ${PORT} is already in use by another process.`);
    console.error(`👉 Run this in PowerShell to free port ${PORT}:`);
    console.error(`   Get-NetTCPConnection -LocalPort ${PORT} | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }\n`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
  }
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed gracefully');
    process.exit(0);
  });
});
