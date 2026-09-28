import React from 'react';
import { ArrowUp, Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canva-sand dark:bg-canva-green-dark border-t-2 border-canva-green/20 dark:border-canva-sand/20 py-12 px-6 sm:px-8 text-canva-green dark:text-canva-sand transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="space-y-1">
            <h3 className="font-migra text-2xl sm:text-3xl font-normal tracking-tight">
              Divyanshu Kumar
            </h3>
            <p className="text-xs text-canva-muted dark:text-canva-sand/80 font-hoves">
              Full Stack Web Developer (MERN) • Sitamarhi Institute of Technology
            </p>
          </div>

          {/* Social / Contact Icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:divy9anshu@gmail.com"
              className="p-2 rounded-full border border-canva-green/30 dark:border-canva-sand/30 hover:bg-canva-green hover:text-canva-cream dark:hover:bg-canva-sand dark:hover:text-canva-green-dark transition-all"
              title="Email"
            >
              <Mail size={15} />
            </a>
            <a
              href="tel:+919334805955"
              className="p-2 rounded-full border border-canva-green/30 dark:border-canva-sand/30 hover:bg-canva-green hover:text-canva-cream dark:hover:bg-canva-sand dark:hover:text-canva-green-dark transition-all"
              title="Phone"
            >
              <Phone size={15} />
            </a>
            <a
              href="https://github.com/divy9anshu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-canva-green/30 dark:border-canva-sand/30 hover:bg-canva-green hover:text-canva-cream dark:hover:bg-canva-sand dark:hover:text-canva-green-dark transition-all"
              title="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/divyanshu-kumar-86736a257/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-canva-green/30 dark:border-canva-sand/30 hover:bg-canva-green hover:text-canva-cream dark:hover:bg-canva-sand dark:hover:text-canva-green-dark transition-all"
              title="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-canva-green/15 dark:border-canva-sand/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-canva-muted dark:text-canva-sand/70 font-hoves">
          <div>
            © {new Date().getFullYear()} Divyanshu Kumar.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 font-semibold text-canva-green dark:text-canva-sand hover:underline"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
