'use client';

import React, { useState } from 'react';
import { SlideData } from '@/types/slide';
import { X, Search, BookOpen, Layers } from 'lucide-react';

interface ThumbnailDrawerProps {
  isOpen: boolean;
  slides: SlideData[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export const ThumbnailDrawer: React.FC<ThumbnailDrawerProps> = ({
  isOpen,
  slides,
  currentIndex,
  onSelectSlide,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredSlides = slides.map((slide, index) => ({ slide, originalIndex: index }))
    .filter(({ slide }) => {
      const query = searchTerm.toLowerCase();
      return (
        (slide.title && slide.title.toLowerCase().includes(query)) ||
        (slide.moduleTag && slide.moduleTag.toLowerCase().includes(query)) ||
        (slide.topicTitle && slide.topicTitle.toLowerCase().includes(query)) ||
        `slide ${slide.slideNum}`.includes(query)
      );
    });

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-xl bg-white border-l border-slate-200 h-full flex flex-col p-6 overflow-hidden shadow-2xl">
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-600" />
            <h3 className="font-lexend text-lg font-bold text-slate-800">Slide Overview ({slides.length} Slides)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative my-4">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search slides by title, module, or topic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500"
          />
        </div>

        {/* Slides Grid List */}
        <div className="flex-grow overflow-y-auto pr-1 space-y-3">
          {filteredSlides.map(({ slide, originalIndex }) => {
            const isActive = originalIndex === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(originalIndex);
                  onClose();
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition flex items-start justify-between gap-3 ${
                  isActive
                    ? 'bg-sky-500/10 border-sky-400 shadow-sm'
                    : 'bg-slate-50/50 border-slate-200 hover:bg-slate-50 hover:border-slate-350'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      #{slide.slideNum}
                    </span>
                    {slide.moduleTag && (
                      <span className="text-[11px] font-semibold text-slate-400">
                        {slide.moduleTag}
                      </span>
                    )}
                  </div>
                  <h4 className={`text-sm font-semibold ${isActive ? 'text-sky-700' : 'text-slate-800'}`}>
                    {slide.title || slide.topicTitle || `Slide ${slide.slideNum}`}
                  </h4>
                </div>

                <BookOpen className={`w-4 h-4 mt-1 flex-shrink-0 ${isActive ? 'text-sky-650' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
