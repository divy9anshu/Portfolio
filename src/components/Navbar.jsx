import React, { useState, useEffect } from 'react';
import { Mail, Phone, Moon, Sun, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects & PRDs', href: '#projects' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-canva-cream/90 dark:bg-canva-green-dark/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="text-canva-green dark:text-canva-sand font-migra text-2xl sm:text-3xl font-bold tracking-tight"
        >
          <span>Divyanshu Kumar</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-canva-green/80 dark:text-canva-sand/80 hover:text-canva-green dark:hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-canva-green dark:after:bg-canva-sand hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* View Resume Button */}
          <a
            href="/Divyanshu_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume PDF"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider py-1.5 px-3.5 rounded-full border border-canva-green/30 dark:border-canva-sand/30 text-canva-green dark:text-canva-sand hover:bg-canva-green hover:text-canva-cream dark:hover:bg-canva-sand dark:hover:text-canva-green-dark transition-all"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full border border-canva-green/20 dark:border-canva-sand/20 text-canva-green dark:text-canva-sand hover:bg-canva-green/5 dark:hover:bg-canva-sand/10 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 btn-pill text-xs uppercase tracking-wider font-semibold py-2 px-5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-canva-green/20 dark:border-canva-sand/20 text-canva-green dark:text-canva-sand"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canva-cream dark:bg-canva-green-dark border-b border-canva-green/10 dark:border-canva-sand/10 px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-canva-green dark:text-canva-sand hover:translate-x-2 transition-transform"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Divyanshu_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-canva-green dark:text-canva-sand hover:translate-x-2 transition-transform"
          >
            📄 View Resume (PDF) ↗
          </a>
          <div className="pt-4 border-t border-canva-green/10 dark:border-canva-sand/10 flex items-center justify-between">
            <a
              href="mailto:divy9anshu@gmail.com"
              className="text-xs text-canva-muted dark:text-canva-sand/70 flex items-center gap-1"
            >
              <Mail size={14} /> divy9anshu@gmail.com
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-pill text-xs py-1.5 px-4"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
