import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  ShieldCheck,
  GitBranch,
  Cloud,
  CheckCircle,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function SkillsAndServices() {
  const [activeTab, setActiveTab] = useState('all');

  const skillsList = [
    { title: "React.js", category: "frontend", icon: <Layout size={18} />, level: "Advanced" },
    { title: "JavaScript (ES6+)", category: "frontend", icon: <Code2 size={18} />, level: "Advanced" },
    { title: "Tailwind CSS", category: "frontend", icon: <Layout size={18} />, level: "Advanced" },
    { title: "Node.js & Express.js", category: "backend", icon: <Server size={18} />, level: "Advanced" },
    { title: "REST API Design", category: "backend", icon: <Cpu size={18} />, level: "Advanced" },
    { title: "JWT & Security", category: "security", icon: <ShieldCheck size={18} />, level: "Advanced" },
    { title: "MongoDB (Mongoose)", category: "database", icon: <Database size={18} />, level: "Advanced" },
    { title: "MySQL & Relational", category: "database", icon: <Layers size={18} />, level: "Intermediate" },
    { title: "Git & GitHub", category: "devops", icon: <GitBranch size={18} />, level: "Advanced" },
    { title: "CI/CD & Cloud Deploy", category: "devops", icon: <Cloud size={18} />, level: "Intermediate" }
  ];

  const servicesList = [
    {
      title: "Full Stack Web Development",
      icon: <Code2 size={22} />,
      features: [
        "MERN Stack Architecture",
        "React.js & Node.js Applications",
        "Responsive Client & Admin Portals"
      ]
    },
    {
      title: "REST API Development",
      icon: <Cpu size={22} />,
      features: [
        "Secure Token Auth (JWT)",
        "Stripe & Third-Party APIs",
        "Fast Query Endpoints"
      ]
    },
    {
      title: "Database Design & Tuning",
      icon: <Database size={22} />,
      features: [
        "MongoDB & MySQL Schemas",
        "Indexing & Query Optimization",
        "Transactional Data Integrity"
      ]
    },
    {
      title: "Responsive Frontend Engineering",
      icon: <Layout size={22} />,
      features: [
        "Mobile-First Tailwind Design",
        "Sub-2s Page Load Speed",
        "Clean Modern UX"
      ]
    }
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsList
    : skillsList.filter(s => s.category === activeTab);

  return (
    <section
      id="services"
      className="section-services py-24 sm:py-32 px-6 sm:px-8 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-left space-y-2 max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-canva-muted dark:text-canva-sand/70">
            Competencies
          </span>
          <h2 className="font-migra text-5xl sm:text-6xl font-extralight text-canva-green dark:text-canva-sand leading-tight">
            Skills and Services
          </h2>
        </div>

        {/* 1. Skills Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-canva-green/20 dark:border-canva-sand/20 pb-4">
            <h3 className="font-migra italic text-2xl sm:text-3xl font-extralight text-canva-green dark:text-canva-sand">
              Skills
            </h3>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['all', 'frontend', 'backend', 'database', 'devops', 'security'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeTab === tab
                      ? 'bg-canva-green text-canva-cream dark:bg-canva-sand dark:text-canva-green-dark shadow-sm'
                      : 'bg-white/60 dark:bg-canva-green-dark/60 text-canva-green dark:text-canva-sand hover:bg-white dark:hover:bg-canva-green-dark'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-canva-cream/90 dark:bg-canva-green-dark/70 border border-canva-green/15 dark:border-canva-sand/15 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-between gap-2 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-canva-sand dark:bg-canva-green/40 text-canva-green dark:text-canva-sand shrink-0">
                    {skill.icon}
                  </div>
                  <h4 className="font-migra text-base font-bold text-canva-green dark:text-canva-sand leading-tight">
                    {skill.title}
                  </h4>
                </div>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-canva-green/10 dark:bg-canva-sand/10 text-canva-green dark:text-canva-sand shrink-0">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Services Grid */}
        <div className="space-y-6 pt-2">
          <div className="border-b border-canva-green/20 dark:border-canva-sand/20 pb-4">
            <h3 className="font-migra italic text-2xl sm:text-3xl font-extralight text-canva-green dark:text-canva-sand">
              Services
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[28px] bg-canva-cream dark:bg-canva-green-dark border-2 border-canva-green/20 dark:border-canva-sand/20 shadow-md hover:shadow-xl hover:border-canva-green/50 dark:hover:border-canva-sand/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-2xl bg-canva-sand/80 dark:bg-canva-green/50 text-canva-green dark:text-canva-sand w-fit">
                    {service.icon}
                  </div>
                  <h4 className="font-migra text-xl font-bold text-canva-green dark:text-canva-sand leading-snug">
                    {service.title}
                  </h4>

                  <ul className="space-y-2 pt-1">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-canva-green/90 dark:text-canva-sand/90 font-medium font-hoves">
                        <CheckCircle size={13} className="text-emerald-700 dark:text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-canva-green/10 dark:border-canva-sand/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-canva-green dark:text-canva-sand group-hover:underline"
                  >
                    <span>Inquire</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
