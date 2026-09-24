'use client';

import React from 'react';
import { SlideData } from '@/types/slide';
import { SlideContent } from './SlideContent';
import { MonitorPlay, Sparkles } from 'lucide-react';

interface SlideViewerProps {
  slide: SlideData;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ slide }) => {
  const isLaravel = slide.id?.startsWith('laravel') || slide.id?.startsWith('webdev3');

  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-1 sm:px-3 py-1 flex items-center justify-center transition-all duration-300">
      <div className="w-full min-h-[620px] lg:min-h-[670px] xl:min-h-[710px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden relative group flex flex-col justify-between transition-all duration-300">
        
        {/* Top Deck Presentation Bar */}
        <div className="w-full bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-lexend border-b border-slate-800 select-none z-20">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] font-bold">
              <MonitorPlay className="w-3.5 h-3.5 text-indigo-400" />
              <span>PRESENTATION DECK</span>
            </span>
            {slide.moduleTag && (
              <span className="hidden sm:inline text-slate-400 font-medium text-[11px] truncate max-w-xs">
                {slide.moduleTag}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-400">
              SLIDE <strong className="text-white font-bold">{String(slide.slideNum).padStart(2, '0')}</strong> / {String(slide.totalSlides).padStart(2, '0')}
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Presentation Active" />
          </div>
        </div>

        {/* Ambient Presentation Backdrop Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/[0.04] rounded-full blur-3xl pointer-events-none" />

        {/* Render Slide Content */}
        <div className="flex-grow w-full h-full flex flex-col justify-between overflow-y-auto relative z-10">
          <SlideContent slide={slide} />
        </div>
      </div>
    </div>
  );
};
