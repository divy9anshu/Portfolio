import React, { useState } from 'react';
import {
  X,
  Layers,
  CheckSquare,
  BarChart3,
  ExternalLink,
  Github,
  Terminal,
  ShieldAlert,
  Users,
  Copy,
  Check,
  CheckCircle2
} from 'lucide-react';

export default function PRDModal({ project, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const prd = project.prd || {};

  const handleCopyEndpoint = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-canva-cream dark:bg-canva-green-dark border-2 border-canva-green/30 dark:border-canva-sand/30 rounded-[32px] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 bg-canva-sand dark:bg-canva-green/40 border-b border-canva-green/20 dark:border-canva-sand/20 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-canva-green text-canva-cream dark:bg-canva-sand dark:text-canva-green-dark text-[11px] font-bold uppercase tracking-wider">
                PRD {prd.version || 'v1.0'}
              </span>
            </div>
            <h3 className="font-migra text-2xl sm:text-3xl font-bold text-canva-green dark:text-canva-sand leading-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-canva-green/30 dark:border-canva-sand/30 hover:bg-canva-green/10 dark:hover:bg-canva-sand/10 text-canva-green dark:text-canva-sand transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 divide-y divide-canva-green/15 dark:divide-canva-sand/15 font-hoves">
          
          {/* Problem & Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-2xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 space-y-1">
              <h4 className="font-migra text-base font-bold text-canva-green dark:text-canva-sand flex items-center gap-1.5">
                <ShieldAlert size={16} className="text-amber-700 dark:text-amber-400" />
                Problem
              </h4>
              <p className="text-xs text-canva-green/85 dark:text-canva-sand/85 leading-relaxed">
                {prd.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/15 space-y-1">
              <h4 className="font-migra text-base font-bold text-canva-green dark:text-canva-sand flex items-center gap-1.5">
                <Users size={16} className="text-emerald-700 dark:text-emerald-400" />
                Audience
              </h4>
              <p className="text-xs text-canva-green/85 dark:text-canva-sand/85 leading-relaxed">
                {prd.targetAudience}
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div className="pt-5 space-y-2.5">
            <h4 className="font-migra text-lg font-bold text-canva-green dark:text-canva-sand flex items-center gap-2">
              <Layers size={18} className="text-canva-green dark:text-canva-sand" />
              Architecture
            </h4>
            <div className="p-4 rounded-2xl bg-canva-sand/30 dark:bg-canva-green/30 border border-canva-green/15">
              <p className="text-xs text-canva-green/90 dark:text-canva-sand/90 leading-relaxed">
                {prd.technicalArchitecture}
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-canva-green/10 dark:border-canva-sand/10">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-canva-cream dark:bg-canva-green-dark text-canva-green dark:text-canva-sand border border-canva-green/20 dark:border-canva-sand/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* User Stories */}
          {prd.userStories && (
            <div className="pt-5 space-y-2">
              <h4 className="font-migra text-lg font-bold text-canva-green dark:text-canva-sand flex items-center gap-2">
                <CheckSquare size={18} className="text-canva-green dark:text-canva-sand" />
                User Stories
              </h4>
              <div className="space-y-2">
                {prd.userStories.map((story, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/70 dark:bg-black/25 border border-canva-green/10 text-xs text-canva-green/90 dark:text-canva-sand/90"
                  >
                    <span className="w-4 h-4 rounded-full bg-canva-green/10 dark:bg-canva-sand/10 text-canva-green dark:text-canva-sand flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{story}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {prd.keyFeatures && (
            <div className="pt-5 space-y-2">
              <h4 className="font-migra text-lg font-bold text-canva-green dark:text-canva-sand flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-700 dark:text-emerald-400" />
                Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {prd.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-canva-sand/40 dark:bg-canva-green/20 border border-canva-green/10 text-xs font-medium text-canva-green/90 dark:text-canva-sand/90 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REST API Endpoints */}
          {prd.apiEndpoints && (
            <div className="pt-5 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-migra text-lg font-bold text-canva-green dark:text-canva-sand flex items-center gap-2">
                  <Terminal size={18} className="text-canva-green dark:text-canva-sand" />
                  REST APIs
                </h4>
                {copied && (
                  <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Check size={13} /> Copied
                  </span>
                )}
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                {prd.apiEndpoints.map((ep, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/80 dark:bg-black/40 border border-canva-green/15 flex items-center justify-between gap-2"
                  >
                    <span className="font-bold text-canva-green dark:text-canva-sand text-[11px]">{ep}</span>
                    <button
                      onClick={() => handleCopyEndpoint(ep)}
                      className="p-1 rounded border border-canva-green/20 text-canva-green dark:text-canva-sand hover:bg-canva-sand opacity-75"
                    >
                      <Copy size={11} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics */}
          {prd.metrics && (
            <div className="pt-5 space-y-2">
              <h4 className="font-migra text-lg font-bold text-canva-green dark:text-canva-sand flex items-center gap-2">
                <BarChart3 size={18} className="text-canva-green dark:text-canva-sand" />
                Metrics
              </h4>
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
                {prd.metrics}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-canva-sand dark:bg-canva-green/50 border-t border-canva-green/20 dark:border-canva-sand/20 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-solid text-xs py-2 px-4 flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill text-xs py-2 px-4 flex items-center gap-1.5"
              >
                <Github size={13} />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="btn-pill text-xs py-1.5 px-3.5"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
