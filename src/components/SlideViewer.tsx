'use client';

import React from 'react';
import { SlideData } from '@/types/slide';
import { SlideContent } from './SlideContent';
import { MonitorPlay, Sparkles } from 'lucide-react';

interface SlideViewerProps {
  slide: SlideData;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ slide }) => {
  const isSimulatorSlide = 
    slide.type === 'multimedia_elements_mixer' ||
    slide.type === 'graphic_raster_vector_inspector' ||
    slide.type === 'audio_sound_design_visualizer' ||
    slide.type === 'animation_fps_motion_player' ||
    slide.type === 'video_bitrate_storage_calculator' ||
    slide.type === 'linear_vs_nonlinear_branching_lab' ||
    slide.type === 'multimedia_authoring_studio' ||
    slide.type === 'multimedia_products_interactive_matrix' ||
    slide.type === 'delivery_bandwidth_speed_race' ||
    slide.type === 'cpp_compiler' ||
    slide.type === 'cpp_exercise';

  return (
    <div className="w-full max-w-[1920px] 2xl:max-w-[2400px] mx-auto px-1 sm:px-2 flex items-center justify-center transition-all duration-300 flex-grow">
      <div className={`w-full h-[calc(100vh-140px)] min-h-[660px] ${
        isSimulatorSlide
          ? 'bg-slate-950 border-slate-800 text-slate-100 shadow-indigo-950/40'
          : 'bg-white border-slate-200/90 text-slate-900 shadow-slate-300/40'
      } rounded-2xl sm:rounded-3xl shadow-2xl border overflow-hidden relative group flex flex-col justify-between transition-all duration-300`}>
        
        {/* Top Deck Presentation Bar */}
        <div className="w-full bg-slate-900 text-white px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs font-lexend border-b border-slate-800 select-none z-20 shrink-0">
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
        <div className="flex-grow w-full h-[calc(100%-44px)] flex flex-col justify-between overflow-y-auto relative z-10">
          <SlideContent slide={slide} />
        </div>
      </div>
    </div>
  );
};
