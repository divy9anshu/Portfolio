import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsAndServices from './components/SkillsAndServices';
import ProjectsPRD from './components/ProjectsPRD';
import PRDModal from './components/PRDModal';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import InquiriesDrawer from './components/InquiriesDrawer';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [messages, setMessages] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [selectedPRDProject, setSelectedPRDProject] = useState(null);
  const [inquiriesOpen, setInquiriesOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Fetch initial data from API
  const fetchData = async () => {
    try {
      // Projects
      const projRes = await fetch('/api/projects');
      if (projRes.ok) {
        const data = await projRes.json();
        setProjects(data.projects || []);
      }

      // Testimonials
      const testRes = await fetch('/api/testimonials');
      if (testRes.ok) {
        const data = await testRes.json();
        setTestimonials(data.testimonials || []);
      }

      // Inquiries / Messages
      const msgRes = await fetch('/api/contact/messages');
      if (msgRes.ok) {
        const data = await msgRes.json();
        setMessages(data.messages || []);
        setUnreadCount(data.unread || 0);
      }
    } catch (e) {
      console.warn('API fetch notice (fallback loaded):', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: '', type: 'success' });
    }, 4000);
  };

  // Submit Contact Inquiry
  const handleInquirySubmit = async (formData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to submit message');
    }
    showToast('Inquiry sent successfully! Divyanshu will get back to you soon.');
    fetchData(); // refresh inbox
    return data;
  };

  // Add Testimonial Review
  const handleAddFeedback = async (feedbackData) => {
    const res = await fetch('/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData)
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Failed to post review');
    }
    showToast('Thank you! Your testimonial has been posted.');
    fetchData();
    return data;
  };

  // Mark Message Read
  const handleMarkRead = async (id) => {
    try {
      await fetch(`/api/contact/messages/${id}/read`, { method: 'PATCH' });
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  // Delete Message
  const handleDeleteMessage = async (id) => {
    try {
      await fetch(`/api/contact/messages/${id}`, { method: 'DELETE' });
      showToast('Message deleted', 'success');
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-hoves selection:bg-canva-green selection:text-canva-cream">
      {/* Header & Navigation */}
      <Navbar
        onOpenInquiries={() => setInquiriesOpen(true)}
        unreadCount={unreadCount}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Home / Hero (Pastel Blue) */}
        <Hero onEmailClick={() => {}} />

        {/* Section 2: About (Ivory / Soft Cream) */}
        <About />

        {/* Section 3: Skills & Services (Warm Sand) */}
        <SkillsAndServices onSelectService={() => {}} />

        {/* Section 4: PRD Projects (Curated Full Stack Suite) */}
        <ProjectsPRD
          projects={projects}
          onSelectProject={(p) => setSelectedPRDProject(p)}
        />

        {/* Section 5: Feedback / Testimonials (Pastel Blue) */}
        <Feedback
          testimonials={testimonials}
          onAddFeedback={handleAddFeedback}
        />

        {/* Section 6: Let's Work Together / Contact (Ivory) */}
        <Contact onSubmitInquiry={handleInquirySubmit} />
      </main>

      {/* Footer */}
      <Footer />

      {/* PRD Detailed Requirements Modal */}
      {selectedPRDProject && (
        <PRDModal
          project={selectedPRDProject}
          onClose={() => setSelectedPRDProject(null)}
        />
      )}

      {/* Received Inquiries Drawer */}
      <InquiriesDrawer
        isOpen={inquiriesOpen}
        onClose={() => setInquiriesOpen(false)}
        messages={messages}
        onMarkRead={handleMarkRead}
        onDeleteMessage={handleDeleteMessage}
        onRefresh={fetchData}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />
    </div>
  );
}
