'use client';

import React from 'react';
import { SlideData } from '@/types/slide';
import { SlideContent } from './SlideContent';

interface SlideViewerProps {
  slide: SlideData;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ slide }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-2 flex items-center justify-center">
      <div className="w-full aspect-widescreen bg-gradient-to-br from-white via-slate-50 to-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden relative group">
        {/* Decorative Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        {/* Render Slide Content */}
        <SlideContent slide={slide} />
      </div>
    </div>
  );
};
