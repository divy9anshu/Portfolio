import React, { useState } from 'react';
import { Quote, Star, PlusCircle, Check, X } from 'lucide-react';

export default function Feedback({ testimonials = [], onAddFeedback }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    role: '',
    content: '',
    rating: 5
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.content) return;
    setSubmitting(true);
    try {
      await onAddFeedback(form);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setModalOpen(false);
        setForm({ name: '', company: '', role: '', content: '', rating: 5 });
      }, 1500);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="feedback"
      className="section-feedback py-24 sm:py-32 px-6 sm:px-8 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-canva-green/80 dark:text-canva-sand/80">
              Endorsements
            </span>
            <h2 className="font-migra text-5xl sm:text-6xl font-extralight text-canva-green dark:text-canva-sand leading-tight">
              Client Feedback
            </h2>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="btn-pill-solid text-xs uppercase tracking-wider font-semibold py-3 px-6 flex items-center justify-center gap-2 self-center sm:self-auto shadow-md"
          >
            <PlusCircle size={14} />
            <span>Leave a Review</span>
          </button>
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
                      {t.company}
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

      {/* Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-canva-cream dark:bg-canva-green-dark border-2 border-canva-green/30 dark:border-canva-sand/30 rounded-[32px] shadow-2xl p-6 sm:p-8 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-canva-green/15">
              <h3 className="font-migra text-2xl font-bold text-canva-green dark:text-canva-sand">
                Leave a Review
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-canva-green/10 text-canva-green dark:text-canva-sand"
              >
                <X size={18} />
              </button>
            </div>

            {success ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <Check size={20} />
                </div>
                <h4 className="font-migra text-xl text-canva-green dark:text-canva-sand">
                  Thank You!
                </h4>
                <p className="text-xs text-canva-muted dark:text-canva-sand/70">
                  Your feedback has been saved.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-3 font-hoves">
                <div>
                  <label className="block text-xs uppercase font-semibold text-canva-green dark:text-canva-sand mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Amrita Sekhon"
                    className="w-full px-4 py-2 rounded-xl bg-canva-sand/50 dark:bg-canva-green/30 border border-canva-green/20 text-canva-green dark:text-canva-sand text-sm focus:outline-none focus:ring-2 focus:ring-canva-green"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-canva-green dark:text-canva-sand mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. Sekhon Unlimited"
                      className="w-full px-4 py-2 rounded-xl bg-canva-sand/50 dark:bg-canva-green/30 border border-canva-green/20 text-canva-green dark:text-canva-sand text-sm focus:outline-none focus:ring-2 focus:ring-canva-green"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-canva-green dark:text-canva-sand mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      placeholder="e.g. VP of Product"
                      className="w-full px-4 py-2 rounded-xl bg-canva-sand/50 dark:bg-canva-green/30 border border-canva-green/20 text-canva-green dark:text-canva-sand text-sm focus:outline-none focus:ring-2 focus:ring-canva-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-canva-green dark:text-canva-sand mb-1">
                    Rating
                  </label>
                  <select
                    value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                    className="w-full px-4 py-2 rounded-xl bg-canva-sand/50 dark:bg-canva-green/30 border border-canva-green/20 text-canva-green dark:text-canva-sand text-sm focus:outline-none focus:ring-2 focus:ring-canva-green"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                    <option value={3}>⭐⭐⭐ (3 Stars)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-canva-green dark:text-canva-sand mb-1">
                    Review *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="Your review..."
                    className="w-full px-4 py-2 rounded-xl bg-canva-sand/50 dark:bg-canva-green/30 border border-canva-green/20 text-canva-green dark:text-canva-sand text-sm focus:outline-none focus:ring-2 focus:ring-canva-green"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="btn-pill text-xs py-2 px-4"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-pill-solid text-xs py-2 px-5"
                  >
                    {submitting ? 'Submitting...' : 'Post'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
