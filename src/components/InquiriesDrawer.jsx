import React from 'react';
import { X, Inbox, Mail, Phone, Check, Trash2, RefreshCw, MessageSquare } from 'lucide-react';

export default function InquiriesDrawer({
  isOpen,
  onClose,
  messages = [],
  onMarkRead,
  onDeleteMessage,
  onRefresh
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-xl bg-canva-cream dark:bg-canva-green-dark h-full shadow-2xl flex flex-col border-l-2 border-canva-green/20 dark:border-canva-sand/20">
        
        {/* Header */}
        <div className="p-6 bg-canva-sand dark:bg-canva-green/40 border-b border-canva-green/15 dark:border-canva-sand/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-canva-green text-canva-cream dark:bg-canva-sand dark:text-canva-green-dark">
              <Inbox size={20} />
            </div>
            <div>
              <h3 className="font-migra text-2xl font-bold text-canva-green dark:text-canva-sand">
                Inquiries Inbox
              </h3>
              <p className="text-xs text-canva-muted dark:text-canva-sand/70 font-hoves">
                {messages.length} total messages received
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRefresh}
              className="p-2 rounded-full hover:bg-canva-green/10 dark:hover:bg-canva-sand/10 text-canva-green dark:text-canva-sand"
              title="Refresh inbox"
            >
              <RefreshCw size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-canva-green/10 dark:hover:bg-canva-sand/10 text-canva-green dark:text-canva-sand"
              aria-label="Close inbox"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center space-y-3">
              <MessageSquare size={40} className="text-canva-muted/40 dark:text-canva-sand/40" />
              <p className="text-sm font-medium text-canva-green/70 dark:text-canva-sand/70">
                No messages yet.
              </p>
              <p className="text-xs text-canva-muted dark:text-canva-sand/50 max-w-xs font-hoves">
                Inquiries submitted through the contact form will appear here.
              </p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-5 rounded-2xl border transition-all ${
                  msg.read
                    ? 'bg-canva-sand/30 dark:bg-canva-green/20 border-canva-green/10 dark:border-canva-sand/10'
                    : 'bg-white dark:bg-canva-green-dark border-canva-green/30 dark:border-canva-sand/30 shadow-md ring-1 ring-canva-green/20'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-migra text-lg font-bold text-canva-green dark:text-canva-sand">
                        {msg.name}
                      </span>
                      {!msg.read && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-bold">
                          NEW
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-canva-muted dark:text-canva-sand/70 font-hoves">
                      {msg.subject}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {!msg.read && (
                      <button
                        onClick={() => onMarkRead(msg.id)}
                        className="p-1.5 rounded-lg border border-canva-green/20 dark:border-canva-sand/20 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-canva-green dark:text-canva-sand text-xs"
                        title="Mark as Read"
                      >
                        <Check size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => onDeleteMessage(msg.id)}
                      className="p-1.5 rounded-lg border border-canva-green/20 dark:border-canva-sand/20 hover:bg-rose-100 dark:hover:bg-rose-900 text-rose-700 dark:text-rose-400 text-xs"
                      title="Delete message"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-canva-green/90 dark:text-canva-sand/90 my-3 leading-relaxed whitespace-pre-wrap font-hoves">
                  {msg.message}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-canva-green/10 dark:border-canva-sand/10 text-xs text-canva-muted dark:text-canva-sand/70 font-hoves">
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${msg.email}`}
                      className="flex items-center gap-1 hover:text-canva-green dark:hover:text-white"
                    >
                      <Mail size={12} />
                      <span>{msg.email}</span>
                    </a>
                    {msg.phone && (
                      <a
                        href={`tel:${msg.phone}`}
                        className="flex items-center gap-1 hover:text-canva-green dark:hover:text-white"
                      >
                        <Phone size={12} />
                        <span>{msg.phone}</span>
                      </a>
                    )}
                  </div>
                  <span className="text-[11px] opacity-75">
                    {new Date(msg.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-canva-sand dark:bg-canva-green/30 border-t border-canva-green/15 dark:border-canva-sand/15 text-center text-xs text-canva-muted dark:text-canva-sand/60 font-hoves">
          Inquiries Management
        </div>

      </div>
    </div>
  );
}
