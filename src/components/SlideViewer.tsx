'use client';

import React from 'react';
import { SlideData } from '@/types/slide';
import { SlideContent } from './SlideContent';

interface SlideViewerProps {
  slide: SlideData;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ slide }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-2 flex items-center justify-center transition-all duration-300 transform scale-[1.002]">
      <div className="w-full min-h-[520px] bg-gradient-to-br from-white via-slate-50/50 to-white rounded-3xl shadow-2xl border-2 border-slate-100 overflow-hidden relative group flex flex-col justify-between">
        {/* Creative Glow Bubbles (Pulsing background) */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-4000" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-400/5 rounded-full blur-3xl pointer-events-none animate-pulse duration-6000" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-400/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        {/* Premium Top Border Highlight */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-rose-400 opacity-80" />

        {/* Render Slide Content */}
        <div className="flex-grow w-full h-full flex flex-col justify-between overflow-y-auto">
          <SlideContent slide={slide} />
        </div>
      </div>
    </div>
  );
};
