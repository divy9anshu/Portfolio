import React, { useState } from 'react';
import { FileCode2, ExternalLink, Github, ArrowRight, Zap } from 'lucide-react';

export default function ProjectsPRD({ projects = [], onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend & APIs'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-6 sm:px-8 bg-canva-cream dark:bg-canva-green-dark/40 relative transition-colors duration-300 border-y border-canva-green/10 dark:border-canva-sand/10"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-canva-muted dark:text-canva-sand/70">
              PRD Case Studies
            </span>
            <h2 className="font-migra text-5xl sm:text-6xl font-extralight text-canva-green dark:text-canva-sand leading-tight">
              Featured Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-canva-green text-canva-cream dark:bg-canva-sand dark:text-canva-green-dark shadow-md'
                    : 'bg-canva-sand/70 dark:bg-canva-green/30 text-canva-green dark:text-canva-sand hover:bg-canva-sand dark:hover:bg-canva-green/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="editorial-card rounded-[32px] overflow-hidden bg-canva-sand/50 dark:bg-canva-green/30 border-2 border-canva-green/20 dark:border-canva-sand/20 shadow-lg flex flex-col justify-between group hover:border-canva-green/60 dark:hover:border-canva-sand/60 transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-canva-cream dark:bg-canva-green-dark">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canva-green-dark/85 via-canva-green-dark/20 to-transparent"></div>
                
                {/* Badge Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-canva-cream/95 text-canva-green dark:bg-canva-green-dark/95 dark:text-canva-sand shadow-sm">
                    {project.category}
                  </span>
                  {project.prd?.version && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-canva-green text-canva-cream dark:bg-canva-sand dark:text-canva-green-dark shadow-sm">
                      PRD {project.prd.version}
                    </span>
                  )}
                </div>

                {/* External Links */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-canva-cream/95 hover:bg-white text-canva-green shadow-md transition-transform hover:scale-110"
                      title="Live Demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-canva-cream/95 hover:bg-white text-canva-green shadow-md transition-transform hover:scale-110"
                      title="GitHub"
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-migra text-2xl sm:text-3xl font-bold text-canva-green dark:text-canva-sand leading-snug">
                    {project.title}
                  </h3>

                  {/* Impact Metric Tag */}
                  {project.metric && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 text-xs font-bold font-hoves">
                      <Zap size={13} className="text-emerald-700 dark:text-emerald-400" />
                      <span>{project.metric}</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-canva-cream dark:bg-canva-green-dark text-canva-green/90 dark:text-canva-sand/90 border border-canva-green/10 dark:border-canva-sand/10 font-hoves"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PRD Action Button */}
                <div className="pt-4 border-t border-canva-green/15 dark:border-canva-sand/15 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn-pill-solid w-full sm:w-auto text-xs uppercase tracking-wider font-semibold py-3 px-6 flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <FileCode2 size={15} />
                    <span>View PRD Specs</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
