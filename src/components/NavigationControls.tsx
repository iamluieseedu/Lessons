'use client';

import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  Maximize, 
  Play, 
  Pause, 
  HelpCircle, 
  RotateCcw 
} from 'lucide-react';

interface NavigationControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
  onToggleDrawer: () => void;
  onToggleFullscreen: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onOpenHelp: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onReset,
  onToggleDrawer,
  onToggleFullscreen,
  isPlaying,
  onTogglePlay,
  onOpenHelp
}) => {
  const progressPercent = Math.round(((currentIndex + 1) / totalSlides) * 100);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-3 flex flex-col gap-2 relative z-10">
      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden border border-slate-350/20">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 to-rose-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Control Toolbar */}
      <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-md text-slate-700">
        {/* Left: Index & Reset */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleDrawer}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-sky-600 border border-slate-200 text-xs font-semibold transition"
            title="Slide Index Drawer"
          >
            <Grid className="w-4 h-4 text-sky-500" />
            <span className="hidden sm:inline">Thumbnails</span>
          </button>

          <span className="text-xs font-medium text-slate-500">
            Slide <strong className="text-sky-600 font-bold">{currentIndex + 1}</strong> / {totalSlides}
          </span>
        </div>

        {/* Center: Previous / Play / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-slate-100 text-slate-700 transition border border-slate-200"
            title="Previous Slide (←)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={onTogglePlay}
            className={`p-2 rounded-lg transition border ${
              isPlaying 
                ? 'bg-amber-500/10 text-amber-600 border-amber-500/30 hover:bg-amber-500/20' 
                : 'bg-sky-500/10 text-sky-650 border-sky-500/20 hover:bg-sky-500/20'
            }`}
            title={isPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
          </button>

          <button
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-slate-100 text-slate-700 transition border border-slate-200"
            title="Next Slide (→)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Fullscreen, Reset, Help */}
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition border border-slate-200"
            title="Restart Presentation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenHelp}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-sky-600 transition border border-slate-200"
            title="Keyboard Shortcuts"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-sky-600 transition border border-slate-200"
            title="Fullscreen Mode (F)"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
