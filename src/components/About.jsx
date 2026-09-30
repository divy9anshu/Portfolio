import React from 'react';
import { Download, Eye, GraduationCap, Award, Briefcase, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      company: "Maryamurti Pvt. Ltd.",
      role: "Full Stack Developer Intern",
      period: "Jun 2025 – Nov 2025",
      tech: "React.js • Redux • Node.js • Express.js • MongoDB • JWT",
      point: "Developed ManoIndia frontend modules with RBAC; hardened REST APIs and cut MongoDB query response times by 30%."
    },
    {
      company: "Intellio Intern",
      role: "Machine Learning Intern",
      period: "Jan 2026 – Mar 2026",
      tech: "Python • Flask REST APIs • Random Forest • SVM",
      point: "Built ML classification pipelines achieving up to 94% accuracy and deployed secure model-serving REST API endpoints (Grade: A+ 95%)."
    },
    {
      company: "AndroWebsTech Pvt. Ltd.",
      role: "Software Developer Intern",
      period: "Mar 2025 – Apr 2025",
      tech: "HTML5 • CSS3 • Bootstrap • JavaScript • PHP",
      point: "Built a 10+ page Zerodha-clone real-time trading platform interface with responsive layouts and cross-browser support."
    }
  ];

  const certifications = [
    { title: "Career Essentials in Cybersecurity", issuer: "Microsoft & LinkedIn (Aug 2026)" },
    { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy (Mar 2025)" },
    { title: "CCNA: Switching, Routing & Wireless", issuer: "Cisco Networking Academy (Apr 2025)" },
    { title: "DSA with Java (400+ Problems)", issuer: "Apna College" },
    { title: "Full Stack Web Development (MERN)", issuer: "Apna College" }
  ];

  return (
    <section
      id="about"
      className="section-about py-24 sm:py-32 px-6 sm:px-8 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top: Portrait + Essential Education & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Portrait: Full Image Displayed */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-[32px] overflow-hidden border-2 border-canva-green/25 dark:border-canva-sand/25 shadow-xl bg-canva-sand/40 dark:bg-canva-green/20 group">
                <img
                  src="/images/about-portrait.png"
                  alt="Divyanshu Kumar"
                  className="w-full h-[480px] sm:h-[520px] object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-canva-green/90 via-canva-green/40 to-transparent p-5 pt-12">
                  <div className="text-canva-cream text-xs space-y-0.5">
                    <p className="font-migra text-xl font-bold">Divyanshu Kumar</p>
                    <p className="opacity-90 font-hoves">B.Tech CSE • Sitamarhi Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Bio & Education */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-canva-muted dark:text-canva-sand/70">
                Background
              </span>
              <h2 className="font-migra text-5xl sm:text-6xl font-extralight text-canva-green dark:text-canva-sand leading-tight mt-1">
                About
              </h2>
            </div>

            {/* Description Narrative */}
            <p className="font-hoves text-sm sm:text-base text-canva-green/90 dark:text-canva-sand/90 font-normal leading-relaxed text-justify sm:text-left">
              Software Developer with <strong>9+ months of full-stack internship experience</strong> building secure, scalable web applications using <strong>JavaScript, TypeScript, React.js, Redux, Node.js, Express.js, and MongoDB</strong>. Skilled in REST API design, authentication & RBAC, MySQL/MongoDB optimization, Git/GitHub, CI/CD, and AWS (EC2, S3) cloud deployment. Strong foundation in Data Structures & Algorithms, OOP, DBMS, OS, and Computer Networks (CCNA-certified), with hands-on unit testing (Jest) and OWASP-aligned secure coding.
            </p>

            {/* Education Box */}
            <div className="p-5 rounded-2xl bg-canva-sand/60 dark:bg-canva-green/25 border border-canva-green/15 dark:border-canva-sand/15 space-y-1.5">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="text-canva-green dark:text-canva-sand" size={22} />
                <h3 className="font-migra text-xl font-bold text-canva-green dark:text-canva-sand">
                  B.Tech in Computer Science & Engineering (Graduated)
                </h3>
              </div>
              <p className="text-xs font-semibold text-canva-muted dark:text-canva-sand/80 font-hoves">
                Sitamarhi Institute of Technology (SIT), Bihar • 2022 – 2026
              </p>
            </div>

            {/* Core Competencies Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 font-hoves text-xs font-semibold text-canva-green dark:text-canva-sand">
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                React.js & Redux
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                Node.js & Express
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                MongoDB & MySQL
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                TypeScript & REST
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                AWS (EC2, S3) & Docker
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                CCNA & Cybersecurity
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="/Divyanshu_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-solid px-7 py-3 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Eye size={15} />
                <span>View Resume (PDF)</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="/Divyanshu_Kumar_Resume.pdf"
                download="Divyanshu_Kumar_Resume.pdf"
                className="btn-pill px-6 py-3 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 border border-canva-green/40 dark:border-canva-sand/40"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>

              <a
                href="#projects"
                className="btn-pill px-6 py-3 text-xs uppercase tracking-wider font-semibold"
              >
                <span>View Projects</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom: Experience Timeline & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6 border-t border-canva-green/15 dark:border-canva-sand/15">
          
          {/* Work Experience */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <Briefcase className="text-canva-green dark:text-canva-sand" size={20} />
              <h3 className="font-migra text-2xl sm:text-3xl font-bold text-canva-green dark:text-canva-sand">
                Experience
              </h3>
            </div>

            <div className="space-y-3">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 dark:border-canva-sand/15 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-migra text-lg font-bold text-canva-green dark:text-canva-sand">
                      {exp.company}
                    </h4>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-canva-green/10 dark:bg-canva-sand/20 text-canva-green dark:text-canva-sand">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-canva-muted dark:text-canva-sand/80 font-hoves">
                    {exp.role} • <span className="opacity-80 font-normal">{exp.tech}</span>
                  </p>
                  <p className="text-xs text-canva-green/80 dark:text-canva-sand/80 font-hoves pt-0.5">
                    • {exp.point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <Award className="text-canva-green dark:text-canva-sand" size={20} />
              <h3 className="font-migra text-2xl sm:text-3xl font-bold text-canva-green dark:text-canva-sand">
                Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 dark:border-canva-sand/15 space-y-1"
                >
                  <h4 className="font-migra text-base font-bold text-canva-green dark:text-canva-sand">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-canva-muted dark:text-canva-sand/80 font-hoves">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
