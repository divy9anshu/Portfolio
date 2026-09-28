import React from 'react';
import { Download, GraduationCap, Award, Briefcase, CheckCircle2 } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      company: "Maryamurti",
      role: "Full Stack Developer Intern",
      period: "Internship",
      tech: "React.js • Node.js • MongoDB • JWT",
      point: "Built full-stack modules & optimized MongoDB queries by 30%"
    },
    {
      company: "AndroWebsTech",
      role: "Web Developer Intern",
      period: "Internship",
      tech: "React.js • Tailwind CSS • REST APIs",
      point: "Engineered responsive UIs with ~25% faster page load speed"
    },
    {
      company: "SmartBridge / Salesforce",
      role: "Salesforce Developer Intern",
      period: "Virtual",
      tech: "Apex • SOQL • Cloud Architecture",
      point: "Developed custom Apex triggers and relational database schemas"
    },
    {
      company: "Intellio Intern",
      role: "Software Developer Intern",
      period: "Internship",
      tech: "JavaScript • Node.js • REST APIs",
      point: "Built backend integration endpoints and Postman test suites"
    }
  ];

  const certifications = [
    { title: "DSA in Java (400+ Problems)", issuer: "Apna College" },
    { title: "Full Stack MERN Web Development", issuer: "Apna College" },
    { title: "Salesforce Developer Virtual Internship", issuer: "SmartBridge / Salesforce" }
  ];

  const handleDownloadResume = () => {
    const resumeText = `DIVYANSHU KUMAR
Full Stack Web Developer (MERN)
Phone: +91-9334805955 | Email: divy9anshu@gmail.com
GitHub: https://github.com/divy9anshu | LinkedIn: https://www.linkedin.com/in/divyanshu-kumar-86736a257/

EDUCATION
- B.Tech in Computer Science & Engineering
  Sitamarhi Institute of Technology (SIT) | 2022 – 2026

WORK EXPERIENCE
1. Maryamurti — Full Stack Web Developer Intern
   - Built MERN features with React, Node.js, Express, and MongoDB.
   - Optimized MongoDB queries and indexing, cutting latency by 30%.
   - Implemented JWT authentication and role-based access control.

2. AndroWebsTech — Web Developer Intern
   - Built responsive React interfaces with ~25% faster load times.
   - Developed modular REST API endpoints in Express.js.

3. SmartBridge / Salesforce — Developer Virtual Intern
   - Developed custom Apex triggers, SOQL queries, and data models.

4. Intellio Intern — Software Developer Intern
   - Engineered backend integration services and Postman test suites.

SKILLS
- Languages: JavaScript (ES6+), Java, SQL, HTML5, CSS3
- Frontend: React.js, Tailwind CSS, Context API, Hooks, Responsive UI
- Backend: Node.js, Express.js, RESTful APIs, JWT Auth, Middleware
- Databases: MongoDB (Mongoose), MySQL, Schema Design, Optimization
- Tools: Git, GitHub, Postman, Vercel, Render, AWS (Basics)

CERTIFICATIONS
- Apna College: DSA with Java (400+ problems solved)
- Apna College: Complete MERN Stack Web Development
- Salesforce Developer Virtual Internship
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Divyanshu_Kumar_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
              Full Stack Web Developer (MERN) and B.Tech Computer Science student at <strong>Sitamarhi Institute of Technology (2022–2026)</strong> with hands-on internship experience building scalable web applications using React.js, Node.js, Express.js, MongoDB, and MySQL. Experienced in REST APIs, authentication, Git/GitHub, CI/CD, Agile development, and cloud deployment. Passionate about building secure, reliable, and user-focused web products.
            </p>

            {/* Education Box */}
            <div className="p-5 rounded-2xl bg-canva-sand/60 dark:bg-canva-green/25 border border-canva-green/15 dark:border-canva-sand/15 space-y-1.5">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="text-canva-green dark:text-canva-sand" size={22} />
                <h3 className="font-migra text-xl font-bold text-canva-green dark:text-canva-sand">
                  B.Tech in Computer Science & Engineering
                </h3>
              </div>
              <p className="text-xs font-semibold text-canva-muted dark:text-canva-sand/80 font-hoves">
                Sitamarhi Institute of Technology (SIT) • 2022 – 2026
              </p>
            </div>

            {/* Core Competencies Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 font-hoves text-xs font-semibold text-canva-green dark:text-canva-sand">
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                MERN Stack
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                REST APIs
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                MongoDB & MySQL
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                JWT Auth & RBAC
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                Git & CI/CD
              </div>
              <div className="p-3 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 text-center">
                Cloud Deployment
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleDownloadResume}
                className="btn-pill-solid px-7 py-3 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-md"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="btn-pill px-7 py-3 text-xs uppercase tracking-wider font-semibold"
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
