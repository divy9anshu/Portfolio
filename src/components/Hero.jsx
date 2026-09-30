import React from 'react';
import { Mail, FileCode2, Download, ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero({ onDownloadResume }) {
  return (
    <section
      id="home"
      className="section-hero min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 px-6 sm:px-8 flex flex-col justify-center relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-white/20 dark:bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-canva-green/10 dark:bg-canva-sand/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Essential Editorial Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7 z-10">
          
          {/* Main Titles */}
          <div className="space-y-2">
            <h1 className="font-migra text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extralight text-canva-green dark:text-canva-sand leading-[1.08] tracking-tight">
              Hi, my name is <span className="font-normal text-canva-green dark:text-canva-sand">Divyanshu Kumar</span>
            </h1>
            <p className="font-migra text-2xl sm:text-3xl md:text-4xl text-canva-green/90 dark:text-canva-sand/90 font-light tracking-wide pt-1">
              Full Stack Web Developer
            </p>
          </div>

          {/* Core Focus Badges */}
          <div className="flex flex-wrap gap-2 pt-1 font-hoves text-xs font-semibold text-canva-green dark:text-canva-sand">
            <span className="px-3 py-1 rounded-full bg-white/40 dark:bg-black/20 border border-canva-green/15 dark:border-canva-sand/15">React.js & Redux</span>
            <span className="px-3 py-1 rounded-full bg-white/40 dark:bg-black/20 border border-canva-green/15 dark:border-canva-sand/15">Node.js & Express</span>
            <span className="px-3 py-1 rounded-full bg-white/40 dark:bg-black/20 border border-canva-green/15 dark:border-canva-sand/15">MongoDB & MySQL</span>
            <span className="px-3 py-1 rounded-full bg-white/40 dark:bg-black/20 border border-canva-green/15 dark:border-canva-sand/15">TypeScript</span>
            <span className="px-3 py-1 rounded-full bg-white/40 dark:bg-black/20 border border-canva-green/15 dark:border-canva-sand/15">AWS (EC2, S3)</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="/Divyanshu_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-solid px-7 py-3.5 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <Download size={15} />
              <span>View Resume</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="#projects"
              className="btn-pill px-7 py-3.5 text-xs uppercase tracking-wider font-semibold border-2 border-canva-green dark:border-canva-sand shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <FileCode2 size={15} />
              <span>View Projects</span>
            </a>

            <a
              href="mailto:divy9anshu@gmail.com?subject=Project%20Inquiry%20from%20Portfolio"
              className="btn-pill px-6 py-3.5 text-xs uppercase tracking-wider font-semibold border border-canva-green/40 dark:border-canva-sand/40 flex items-center gap-2"
            >
              <Mail size={15} />
              <span>Email Me</span>
            </a>

            <a
              href="#contact"
              className="p-3 rounded-full border border-canva-green/30 dark:border-canva-sand/30 text-canva-green dark:text-canva-sand hover:bg-white/40 dark:hover:bg-white/10 transition-colors"
              title="Contact"
            >
              <ArrowDown size={16} />
            </a>
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-canva-green/20 dark:border-canva-sand/20">
            <div>
              <div className="font-migra text-2xl sm:text-3xl font-light text-canva-green dark:text-canva-sand">9+ Mos</div>
              <div className="text-xs uppercase tracking-wider text-canva-green/70 dark:text-canva-sand/70 font-medium">Internship Exp</div>
            </div>
            <div>
              <div className="font-migra text-2xl sm:text-3xl font-light text-canva-green dark:text-canva-sand">B.Tech</div>
              <div className="text-xs uppercase tracking-wider text-canva-green/70 dark:text-canva-sand/70 font-medium">CSE Graduate</div>
            </div>
            <div>
              <div className="font-migra text-2xl sm:text-3xl font-light text-canva-green dark:text-canva-sand">Full Stack</div>
              <div className="text-xs uppercase tracking-wider text-canva-green/70 dark:text-canva-sand/70 font-medium">MERN + Cloud</div>
            </div>
          </div>
        </div>

        {/* Right Column: Sharp Clean Portrait Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            
            <div className="absolute -inset-2.5 rounded-[38px] bg-canva-sand/60 dark:bg-canva-green-dark/60 border border-canva-green/20 dark:border-canva-sand/20 transform -rotate-1"></div>
            
            <div className="relative z-10 rounded-[32px] overflow-hidden border-2 border-canva-green/30 dark:border-canva-sand/30 shadow-2xl bg-canva-cream dark:bg-canva-green-dark group">
              <img
                src="/images/hero-portrait.jpg"
                alt="Divyanshu Kumar"
                className="w-full h-[400px] sm:h-[460px] object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-700"
              />
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-canva-green/85 via-canva-green/40 to-transparent p-5 pt-10">
                <h3 className="font-migra text-lg font-bold text-canva-cream">
                  Divyanshu Kumar
                </h3>
                <p className="text-xs text-canva-cream/90 font-hoves">
                  Full Stack Engineer • React • Node • MongoDB • MySQL
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
