import React from 'react';
import { Star } from 'lucide-react';

export default function Feedback({ testimonials = [] }) {
  return (
    <section
      id="feedback"
      className="section-feedback py-24 sm:py-32 px-6 sm:px-8 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs uppercase tracking-widest font-semibold text-canva-green/80 dark:text-canva-sand/80">
            Endorsements
          </span>
          <h2 className="font-migra text-5xl sm:text-6xl font-extralight text-canva-green dark:text-canva-sand leading-tight">
            Client Feedback
          </h2>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id || idx}
              className="p-7 rounded-[28px] bg-canva-cream dark:bg-canva-green-dark border-2 border-canva-green/20 dark:border-canva-sand/20 shadow-md flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                {/* Avatar & Name */}
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-canva-green/30 dark:border-canva-sand/30 shadow-sm bg-canva-sand shrink-0">
                    <img
                      src={t.avatar || `/images/client-${(idx % 3) + 1}.jpg`}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `/images/client-${(idx % 3) + 1}.jpg`;
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-migra text-lg font-bold text-canva-green dark:text-canva-sand leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs font-semibold text-canva-muted dark:text-canva-sand/80 font-hoves">
                      {t.company} {t.role && t.role !== 'Client' && `• ${t.role}`}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                  {[...Array(t.rating || 5)].map((_, sIdx) => (
                    <Star key={sIdx} size={13} fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-hoves text-sm text-canva-green/90 dark:text-canva-sand/90 font-normal leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {t.date && (
                <div className="pt-3 mt-4 border-t border-canva-green/10 dark:border-canva-sand/10 text-right text-[11px] text-canva-muted dark:text-canva-sand/60 font-medium">
                  {t.date}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
