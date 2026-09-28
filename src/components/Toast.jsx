import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <div
        className={`px-5 py-4 rounded-2xl shadow-2xl border flex items-center gap-3 text-sm font-medium ${
          type === 'success'
            ? 'bg-emerald-900 text-emerald-100 border-emerald-700'
            : 'bg-rose-900 text-rose-100 border-rose-700'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
        ) : (
          <AlertCircle size={18} className="text-rose-400 shrink-0" />
        )}
        <span>{message}</span>
        {onClose && (
          <button onClick={onClose} className="p-1 hover:opacity-75">
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
