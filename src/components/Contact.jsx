import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ onSubmitInquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Web Development Project',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    try {
      await onSubmitInquiry(formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Web Development Project',
        message: ''
      });
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.message || 'Failed to submit inquiry.'
      });
    }
  };

  return (
    <section
      id="contact"
      className="section-contact py-24 sm:py-32 px-6 sm:px-8 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Header */}
        <div className="space-y-2 max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-canva-muted dark:text-canva-sand/70">
            Contact
          </span>
          <h2 className="font-migra text-5xl sm:text-6xl lg:text-[72px] font-extralight text-canva-green dark:text-canva-sand leading-tight">
            Let's work together
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards & Sharp Photo */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              {/* Phone Card */}
              <a
                href="tel:+919334805955"
                className="p-5 rounded-[22px] bg-canva-sand/60 dark:bg-canva-green/30 border border-canva-green/20 dark:border-canva-sand/20 flex items-center gap-4 hover:border-canva-green dark:hover:border-canva-sand transition-all group"
              >
                <div className="p-3 rounded-2xl bg-canva-cream dark:bg-canva-green-dark text-canva-green dark:text-canva-sand shadow-sm group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-canva-muted dark:text-canva-sand/70 font-hoves">
                    Phone / WhatsApp
                  </p>
                  <p className="font-migra text-xl font-bold text-canva-green dark:text-canva-sand">
                    +91-9334805955
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:divy9anshu@gmail.com"
                className="p-5 rounded-[22px] bg-canva-sand/60 dark:bg-canva-green/30 border border-canva-green/20 dark:border-canva-sand/20 flex items-center gap-4 hover:border-canva-green dark:hover:border-canva-sand transition-all group"
              >
                <div className="p-3 rounded-2xl bg-canva-cream dark:bg-canva-green-dark text-canva-green dark:text-canva-sand shadow-sm group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-canva-muted dark:text-canva-sand/70 font-hoves">
                    Email
                  </p>
                  <p className="font-migra text-xl font-bold text-canva-green dark:text-canva-sand">
                    divy9anshu@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Sharp Workspace Photo */}
            <div className="relative rounded-[28px] overflow-hidden border border-canva-green/20 dark:border-canva-sand/20 shadow-md bg-canva-sand group">
              <img
                src="/images/contact-bg.jpg"
                alt="Workspace"
                className="w-full h-52 object-cover object-center filter contrast-[1.03]"
              />
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-[32px] bg-canva-sand/50 dark:bg-canva-green-dark border-2 border-canva-green/20 dark:border-canva-sand/20 shadow-lg space-y-5">
              
              <h3 className="font-migra text-2xl font-bold text-canva-green dark:text-canva-sand leading-snug">
                Send a Message
              </h3>

              {status.success && (
                <div className="p-3.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-400 text-emerald-900 dark:text-emerald-100 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {status.error && (
                <div className="p-3.5 rounded-xl bg-rose-100 dark:bg-rose-900/50 border border-rose-400 text-rose-900 text-xs font-semibold">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-hoves">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-canva-green dark:text-canva-sand mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-canva-cream dark:bg-canva-green/30 border border-canva-green/20 dark:border-canva-sand/20 text-canva-green dark:text-canva-sand text-xs focus:outline-none focus:ring-2 focus:ring-canva-green"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-canva-green dark:text-canva-sand mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-canva-cream dark:bg-canva-green/30 border border-canva-green/20 dark:border-canva-sand/20 text-canva-green dark:text-canva-sand text-xs focus:outline-none focus:ring-2 focus:ring-canva-green"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-canva-green dark:text-canva-sand mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91-XXXXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-canva-cream dark:bg-canva-green/30 border border-canva-green/20 dark:border-canva-sand/20 text-canva-green dark:text-canva-sand text-xs focus:outline-none focus:ring-2 focus:ring-canva-green"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-canva-green dark:text-canva-sand mb-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-canva-cream dark:bg-canva-green/30 border border-canva-green/20 dark:border-canva-sand/20 text-canva-green dark:text-canva-sand text-xs focus:outline-none focus:ring-2 focus:ring-canva-green"
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="REST API Development">REST API Development</option>
                      <option value="Developer Role Inquiry">Developer Role Inquiry</option>
                      <option value="Contract / Freelance">Contract / Freelance</option>
                      <option value="General Discussion">General Discussion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-canva-green dark:text-canva-sand mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canva-cream dark:bg-canva-green/30 border border-canva-green/20 dark:border-canva-sand/20 text-canva-green dark:text-canva-sand text-xs focus:outline-none focus:ring-2 focus:ring-canva-green"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="btn-pill-solid w-full sm:w-auto px-7 py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send size={14} />
                    <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
