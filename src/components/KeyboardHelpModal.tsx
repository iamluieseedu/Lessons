'use client';

import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface KeyboardHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardHelpModal: React.FC<KeyboardHelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space', desc: 'Go to Next Slide' },
    { key: '← / Backspace', desc: 'Go to Previous Slide' },
    { key: 'F', desc: 'Toggle Fullscreen Presentation Mode' },
    { key: 'Esc', desc: 'Close Thumbnail Drawer / Modals' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-sky-600" />
            <h3 className="font-lexend text-lg font-bold text-slate-800">Keyboard Shortcuts</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-2.5">
          {shortcuts.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-600">{item.desc}</span>
              <kbd className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-100 text-sky-700 rounded border border-slate-250 shadow-sm">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
