'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Layers,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sliders,
  Type,
  Image as ImageIcon,
  Film,
  Compass,
  Cpu,
  Monitor,
  Gamepad2,
  BookOpen,
  Building2,
  Search,
  Database,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  HardDrive,
  Wifi,
  Disc,
  Split,
  Eye,
  Activity,
  Zap,
  Info
} from 'lucide-react';
import { SlideData } from '@/types/slide';

// ============================================================================
// SIMULATOR 1: THE 5 ELEMENTS MULTIMEDIA MIXER STUDIO
// ============================================================================
export const MultimediaElementsMixer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [hasText, setHasText] = useState(true);
  const [hasGraphic, setHasGraphic] = useState(true);
  const [hasAudio, setHasAudio] = useState(false);
  const [hasAnimation, setHasAnimation] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);

  const [pedestrianPos, setPedestrianPos] = useState(10);
  const [isPlayingAnim, setIsPlayingAnim] = useState(true);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  // Audio synthesize state
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!isPlayingAnim || !hasAnimation) return;
    const interval = setInterval(() => {
      setPedestrianPos((prev) => (prev >= 80 ? 10 : prev + 1.5));
    }, 50);
    return () => clearInterval(interval);
  }, [isPlayingAnim, hasAnimation]);

  const playChime = () => {
    if (!hasAudio) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioCtx();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch {
      // Audio fallback
    }
  };

  const activeCount = [hasText, hasGraphic, hasAudio, hasAnimation, hasVideo].filter(Boolean).length;

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 overflow-y-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Interactive Lab 1 &bull; BS Multimedia Studio
            </span>
            <span className="text-xs font-mono text-slate-400">The 5 Core Elements Mixer</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Multimedia Composition Engine
          </h2>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-mono">
          <span className="text-slate-400">Active Channels:</span>
          <span className="text-purple-400 font-bold">{activeCount} / 5</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">
            {activeCount === 5 ? 'Full Rich Multimedia ✨' : activeCount >= 2 ? 'Compound Media' : 'Unimodal Media'}
          </span>
        </div>
      </div>

      {/* Main Grid: Control Rack (Left) + Live Viewport (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow items-stretch">
        {/* Left: 5 Channel Toggle Rack */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
              🎛️ Toggle The 5 Multimedia Elements:
            </span>

            <div className="space-y-2">
              {/* Channel 1: Text */}
              <button
                onClick={() => setHasText(!hasText)}
                className={`w-full p-2.5 rounded-xl border flex items-center justify-between transition cursor-pointer ${
                  hasText
                    ? 'bg-indigo-950/60 border-indigo-500 text-indigo-200 shadow-sm'
                    : 'bg-slate-950/40 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg ${hasText ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    <Type className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold block">1. Text</span>
                    <span className="text-[10px] text-slate-400">Keywords, UI labels, body content</span>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${hasText ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-800 text-slate-500'}`}>
                  {hasText ? 'ACTIVE' : 'OFF'}
                </span>
              </button>

              {/* Channel 2: Graphic */}
              <button
                onClick={() => setHasGraphic(!hasGraphic)}
                className={`w-full p-2.5 rounded-xl border flex items-center justify-between transition cursor-pointer ${
                  hasGraphic
                    ? 'bg-rose-950/60 border-rose-500 text-rose-200 shadow-sm'
                    : 'bg-slate-950/40 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg ${hasGraphic ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold block">2. Graphic</span>
                    <span className="text-[10px] text-slate-400">Illustrations, 2D art, diagrams</span>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${hasGraphic ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-800 text-slate-500'}`}>
                  {hasGraphic ? 'ACTIVE' : 'OFF'}
                </span>
              </button>

              {/* Channel 3: Audio */}
              <button
                onClick={() => {
                  setHasAudio(!hasAudio);
                  if (!hasAudio) playChime();
                }}
                className={`w-full p-2.5 rounded-xl border flex items-center justify-between transition cursor-pointer ${
                  hasAudio
                    ? 'bg-amber-950/60 border-amber-500 text-amber-200 shadow-sm'
                    : 'bg-slate-950/40 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg ${hasAudio ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    {hasAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold block">3. Audio</span>
                    <span className="text-[10px] text-slate-400">Speech narration, SFX, music score</span>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${hasAudio ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-500'}`}>
                  {hasAudio ? 'ACTIVE' : 'MUTED'}
                </span>
              </button>

              {/* Channel 4: Animation */}
              <button
                onClick={() => setHasAnimation(!hasAnimation)}
                className={`w-full p-2.5 rounded-xl border flex items-center justify-between transition cursor-pointer ${
                  hasAnimation
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-sm'
                    : 'bg-slate-950/40 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg ${hasAnimation ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold block">4. Animation</span>
                    <span className="text-[10px] text-slate-400">Motion illusion from static frames</span>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${hasAnimation ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-500'}`}>
                  {hasAnimation ? 'ACTIVE' : 'OFF'}
                </span>
              </button>

              {/* Channel 5: Video */}
              <button
                onClick={() => setHasVideo(!hasVideo)}
                className={`w-full p-2.5 rounded-xl border flex items-center justify-between transition cursor-pointer ${
                  hasVideo
                    ? 'bg-sky-950/60 border-sky-500 text-sky-200 shadow-sm'
                    : 'bg-slate-950/40 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg ${hasVideo ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    <Film className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold block">5. Video</span>
                    <span className="text-[10px] text-slate-400">Live photographic moving capture</span>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${hasVideo ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-800 text-slate-500'}`}>
                  {hasVideo ? 'ACTIVE' : 'OFF'}
                </span>
              </button>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2 text-[10px] font-mono">
            <button
              onClick={() => {
                setHasText(true);
                setHasGraphic(true);
                setHasAudio(true);
                setHasAnimation(true);
                setHasVideo(true);
              }}
              className="px-2.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold transition cursor-pointer flex-1 text-center"
            >
              All 5 Elements
            </button>
            <button
              onClick={() => {
                setHasText(true);
                setHasGraphic(false);
                setHasAudio(false);
                setHasAnimation(false);
                setHasVideo(false);
              }}
              className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition cursor-pointer flex-1 text-center"
            >
              Text-Only
            </button>
          </div>
        </div>

        {/* Right: Live Interactive Viewport */}
        <div className="lg:col-span-7 bg-slate-900 border-2 border-slate-800 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          {/* Top Virtual Viewport Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-slate-400 font-semibold ml-2">Project Canvas &bull; Road Safety Interactive App</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                1920x1080 Viewport
              </span>
            </div>
          </div>

          {/* Canvas Viewport Simulation */}
          <div className="relative flex-grow my-3 bg-gradient-to-b from-sky-950/40 via-slate-900 to-slate-950 rounded-xl border border-slate-800 overflow-hidden min-h-[260px] flex flex-col justify-between p-4">
            {/* Live Video Background Simulation */}
            {hasVideo && (
              <div className="absolute inset-0 bg-slate-800/80 pointer-events-none overflow-hidden z-0">
                <div className="w-full h-full opacity-35 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] animate-pulse" />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-red-600/80 text-white rounded text-[10px] font-mono font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  LIVE VIDEO STREAM (24 FPS)
                </div>
              </div>
            )}

            {/* Graphics Background Layer */}
            {hasGraphic ? (
              <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                {/* Visual Street & City Skyline */}
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 200">
                  <rect x="0" y="140" width="400" height="60" fill="#1e293b" />
                  <line x1="0" y1="170" x2="400" y2="170" stroke="#f8fafc" strokeWidth="3" strokeDasharray="15,10" />
                  {/* Trees */}
                  <circle cx="50" cy="120" r="18" fill="#10b981" opacity="0.6" />
                  <circle cx="350" cy="120" r="18" fill="#10b981" opacity="0.6" />
                </svg>
              </div>
            ) : (
              <div className="absolute inset-0 z-0 flex items-center justify-center text-slate-700 text-xs font-mono">
                [Graphics Channel Disabled: Wireframe Blank]
              </div>
            )}

            {/* Top Interactive Tabs (Road Safety App UI) */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
                <button
                  onClick={() => {
                    setActiveStep(1);
                    playChime();
                  }}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                    activeStep === 1 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Main Menu
                </button>
                <button
                  onClick={() => {
                    setActiveStep(2);
                    playChime();
                  }}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                    activeStep === 2 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  1st Step
                </button>
                <button
                  onClick={() => {
                    setActiveStep(3);
                    playChime();
                  }}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                    activeStep === 3 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  2nd Step
                </button>
              </div>

              {hasAudio && (
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span>Narration Audio Synchronized</span>
                </div>
              )}
            </div>

            {/* Text Element Display */}
            <div className="relative z-10 my-auto py-2">
              {hasText ? (
                <div className="bg-slate-900/90 border border-slate-700 p-3.5 rounded-xl max-w-sm backdrop-blur-sm shadow-lg space-y-1">
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    ROAD SAFETY LESSON
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeStep === 1 && 'First, before crossing the road, make sure you look to your left, then to your right, and left again.'}
                    {activeStep === 2 && 'Check that vehicles are completely halted before stepping onto the crosswalk.'}
                    {activeStep === 3 && 'Walk calmly and steadily across the street. Never run or use a mobile screen.'}
                  </p>
                </div>
              ) : (
                <div className="text-xs text-slate-600 font-mono italic">
                  [Text Element Disabled &bull; No keywords or guidance displayed]
                </div>
              )}
            </div>

            {/* Animation Element: Walking Pedestrian */}
            <div className="relative z-10 w-full h-16 flex items-end">
              <div
                className="transition-all duration-75 flex flex-col items-center"
                style={{
                  transform: `translateX(${hasAnimation ? pedestrianPos * 3 : 60}px)`
                }}
              >
                {hasGraphic ? (
                  <div className="relative">
                    {/* Smiling Pedestrian Emoji Character */}
                    <div className={`w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-200 flex items-center justify-center text-sm shadow-md ${hasAnimation ? 'animate-bounce' : ''}`}>
                      😊
                    </div>
                    {/* Body */}
                    <div className="w-5 h-5 mx-auto bg-blue-500 rounded-t-sm" />
                    {/* Moving Legs */}
                    <div className="flex justify-between w-4 mx-auto text-[9px] font-mono text-slate-400">
                      <span>|</span>
                      <span>|</span>
                    </div>
                  </div>
                ) : (
                  <div className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] font-mono rounded">
                    [Static Box]
                  </div>
                )}
              </div>
            </div>

            {/* Audio Wave Indicator when active */}
            {hasAudio && (
              <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/60 px-2 py-1 rounded text-amber-400 text-[10px] font-mono z-20">
                <span className="w-1 h-3 bg-amber-400 animate-pulse" />
                <span className="w-1 h-4 bg-amber-400 animate-bounce" />
                <span className="w-1 h-2 bg-amber-400 animate-pulse" />
                <span className="ml-1">Sound Active</span>
              </div>
            )}
          </div>

          {/* Bottom Insights */}
          <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-400 text-[11px]">
              <strong>Multimedia Principle:</strong> Combining Text + Visuals + Sound increases student memory retention by up to <strong>65%</strong> over unimodal text.
            </span>

            <button
              onClick={() => {
                setIsPlayingAnim(!isPlayingAnim);
                playChime();
              }}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-mono transition flex items-center gap-1.5 cursor-pointer"
            >
              {isPlayingAnim ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlayingAnim ? 'Pause Animation' : 'Play Animation'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATOR 2: GRAPHIC RESOLUTION & VECTOR VS RASTER INSPECTOR
// ============================================================================
export const GraphicRasterVectorInspector: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState<'comparison' | 'vector' | 'raster'>('comparison');

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 overflow-y-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
              Interactive Lab 2 &bull; Visual Technology
            </span>
            <span className="text-xs font-mono text-slate-400">&ldquo;A Picture Means A Thousand Words&rdquo;</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Graphic Inspector: Raster (Bitmaps) vs. Vector Math
          </h2>
        </div>

        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-mono">
          <span className="text-slate-400">Magnification:</span>
          <span className="text-rose-400 font-bold">{zoomLevel}x Zoom</span>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow items-stretch">
        {/* Left: Interactive Loupe Canvas */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
            {/* Raster Column */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                <span className="font-bold text-rose-400 font-mono">Raster Bitmap (.PNG / .JPG)</span>
                <span className="text-[10px] text-slate-500 font-mono">Pixel Grid Matrix</span>
              </div>

              {/* Raster preview with simulated pixelation */}
              <div className="flex-grow flex items-center justify-center p-6 relative">
                <div
                  className="transition-transform duration-200 flex flex-col items-center justify-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  {/* Simulated Pixelated Circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-all"
                    style={{
                      background: 'radial-gradient(circle, #f43f5e 30%, #be123c 100%)',
                      imageRendering: zoomLevel > 2 ? 'pixelated' : 'auto',
                      filter: zoomLevel > 2 ? `contrast(130%) blur(${zoomLevel * 0.4}px)` : 'none'
                    }}
                  >
                    <span className="text-2xl">★</span>
                  </div>
                </div>

                {zoomLevel >= 3 && (
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                )}
              </div>

              <div className="p-2 rounded-lg bg-rose-950/40 border border-rose-900/50 text-[11px] text-rose-300">
                ⚠️ At {zoomLevel}x zoom: Fixed pixel grid reveals jagged artifact edges (anti-aliasing breakdown).
              </div>
            </div>

            {/* Vector Column */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                <span className="font-bold text-emerald-400 font-mono">Scalable Vector (.SVG)</span>
                <span className="text-[10px] text-slate-500 font-mono">Bezier Math Curves</span>
              </div>

              {/* Vector preview with crisp scalable rendering */}
              <div className="flex-grow flex items-center justify-center p-6 relative">
                <div
                  className="transition-transform duration-200 flex flex-col items-center justify-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <svg className="w-20 h-20" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="vectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#047857" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="45" fill="url(#vectorGrad)" stroke="#34d399" strokeWidth="2" />
                    <polygon points="50,20 59,38 79,41 64,56 68,76 50,66 32,76 36,56 21,41 41,38" fill="#ffffff" />
                  </svg>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-900/50 text-[11px] text-emerald-300">
                ✓ At {zoomLevel}x zoom: Curves recalculate coordinate equations dynamically. Razor sharp infinity!
              </div>
            </div>
          </div>

          {/* Zoom Slider Control */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-4">
            <span className="text-xs font-mono text-slate-400 shrink-0">Zoom Level:</span>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={zoomLevel}
              onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
              className="flex-grow accent-rose-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex gap-1.5 shrink-0">
              <button
                onClick={() => setZoomLevel(1)}
                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[11px] font-mono cursor-pointer"
              >
                1x Reset
              </button>
              <button
                onClick={() => setZoomLevel(4)}
                className="px-2 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded text-[11px] font-mono cursor-pointer"
              >
                4x Inspect
              </button>
            </div>
          </div>
        </div>

        {/* Right: Technical Architecture Checklist */}
        <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
              📐 Graphic Classification Rules:
            </span>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
              <span className="font-bold text-rose-400 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5" />
                When to use Raster Bitmaps:
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Continuous-tone photographic imagery, complex real-world textures, subtle gradient shadows (e.g. portraits, landscapes).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                When to use Scalable Vectors:
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                App icons, corporate logos, UI buttons, typographic glyphs, and architectural diagrams that must scale from a smartwatch to a billboard.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 text-[11px] text-purple-300">
            <strong>BS Multimedia Note:</strong> Modern web multimedia combines both: WebP/AVIF bitmaps for photos and SVG vectors for responsive UI assets.
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATOR 3: AUDIO SOUND DESIGN & FREQUENCY VISUALIZER
// ============================================================================
export const AudioSoundDesignVisualizer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [isPlayingSfx, setIsPlayingSfx] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [activeChannel, setActiveChannel] = useState<'all' | 'voice' | 'sfx' | 'music'>('all');

  const audioCtxRef = useRef<AudioContext | null>(null);

  const playSynthesizedTone = (type: 'voice' | 'sfx' | 'music') => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioCtx();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (type === 'voice') {
        setIsPlayingVoice(true);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(330, ctx.currentTime + 0.3);
        osc.frequency.linearRampToValueAtTime(260, ctx.currentTime + 0.6);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.7);
        setTimeout(() => setIsPlayingVoice(false), 700);
      } else if (type === 'sfx') {
        setIsPlayingSfx(true);
        osc.type = 'square';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        setTimeout(() => setIsPlayingSfx(false), 300);
      } else {
        setIsPlayingMusic(true);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(554.37, ctx.currentTime + 0.2);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
        setTimeout(() => setIsPlayingMusic(false), 800);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch {
      // Audio fallback
    }
  };

  const isAnyPlaying = isPlayingVoice || isPlayingSfx || isPlayingMusic;

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 overflow-y-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Interactive Lab 3 &bull; Acoustic Vibrations
            </span>
            <span className="text-xs font-mono text-slate-400">The 3 Forms of Multimedia Audio</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Sound Design Console: Voice, SFX &amp; Music Scores
          </h2>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-mono">
          <Volume2 className={`w-4 h-4 ${isAnyPlaying ? 'text-amber-400 animate-pulse' : 'text-slate-500'}`} />
          <span className="text-slate-400">Audio Engine:</span>
          <span className={isAnyPlaying ? 'text-amber-400 font-bold' : 'text-slate-500'}>
            {isAnyPlaying ? 'TRANSMITTING ACOUSTIC VIBRATIONS' : 'STANDBY'}
          </span>
        </div>
      </div>

      {/* Main Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow items-stretch">
        {/* Left: 3 Channel Control Strips */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
            🎙️ Trigger Individual Audio Categories:
          </span>

          <div className="space-y-3">
            {/* Channel 1: Speech */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
              <div>
                <span className="font-bold text-xs text-amber-400 block">1. Speech / Narration</span>
                <span className="text-[10px] text-slate-400">Spoken dialogue, instructional narration, accessibility voice-overs</span>
              </div>
              <button
                onClick={() => playSynthesizedTone('voice')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  isPlayingVoice ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-amber-300'
                }`}
              >
                <Play className="w-3 h-3" />
                <span>Play Voice</span>
              </button>
            </div>

            {/* Channel 2: SFX */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
              <div>
                <span className="font-bold text-xs text-sky-400 block">2. Sound Effects (SFX / Foley)</span>
                <span className="text-[10px] text-slate-400">Tactile button clicks, warning buzzers, impact collisions</span>
              </div>
              <button
                onClick={() => playSynthesizedTone('sfx')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  isPlayingSfx ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-sky-300'
                }`}
              >
                <Play className="w-3 h-3" />
                <span>Trigger SFX</span>
              </button>
            </div>

            {/* Channel 3: Music Score */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
              <div>
                <span className="font-bold text-xs text-purple-400 block">3. Musical Score / BGM</span>
                <span className="text-[10px] text-slate-400">Emotional chords, rhythm, pacing, and atmospheric immersion</span>
              </div>
              <button
                onClick={() => playSynthesizedTone('music')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  isPlayingMusic ? 'bg-purple-500 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-purple-300'
                }`}
              >
                <Play className="w-3 h-3" />
                <span>Play BGM</span>
              </button>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400">
            <strong>Cognitive Ergonomics:</strong> Audio provides instant feedback faster than the visual system (Auditory reflex: ~140ms vs Visual reflex: ~190ms).
          </div>
        </div>

        {/* Right: Simulated Real-time Spectrum Analyzer */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono">
            <span className="text-amber-400 font-bold">Acoustic Vibration Oscilloscope</span>
            <span className="text-[10px] text-slate-500">44.1 kHz 16-bit Stereo PCM</span>
          </div>

          {/* Animated Spectrum Bars */}
          <div className="my-auto py-6 flex items-end justify-center gap-2 h-44 bg-slate-950 rounded-xl border border-slate-800 px-4">
            {[45, 75, 90, 60, 30, 85, 100, 70, 50, 95, 65, 40, 80, 55, 35].map((h, i) => {
              const activeHeight = isAnyPlaying ? Math.min(100, h * (0.6 + Math.random() * 0.8)) : 10;
              return (
                <div
                  key={i}
                  className="w-full rounded-t-sm transition-all duration-100"
                  style={{
                    height: `${activeHeight}%`,
                    background: isPlayingVoice
                      ? '#f59e0b'
                      : isPlayingSfx
                      ? '#0ea5e9'
                      : isPlayingMusic
                      ? '#a855f7'
                      : '#334155'
                  }}
                />
              );
            })}
          </div>

          <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-200">
            <strong>Key Multimedia Rule:</strong> Never auto-play audio with high volume on page load. Always grant user control (Mute/Volume slider).
          </div>
        </div>
      </div>
    </div>
  );
};

// Realistic Classic Black-and-White Vector Soccer Ball (Zero green tint)
const RealisticSoccerBall: React.FC<{ size?: number; isGhost?: boolean }> = ({ size = 68, isGhost = false }) => {
  const sphereId = isGhost ? 'soccerBallGhostSphere' : 'soccerBallRealSphere';
  const glintId = isGhost ? 'soccerBallGhostGlint' : 'soccerBallRealGlint';

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`shrink-0 select-none ${isGhost ? 'opacity-30' : ''}`}
      style={{
        filter: isGhost
          ? 'grayscale(100%)'
          : 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.55))'
      }}
    >
      <defs>
        {/* Pure White to Slate 3D Spherical Radial Gradient (No green) */}
        <radialGradient id={sphereId} cx="35%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f8fafc" />
          <stop offset="85%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </radialGradient>
        {/* Specular White Highlight */}
        <radialGradient id={glintId} cx="32%" cy="26%" r="24%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Ball Body */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill={`url(#${sphereId})`}
        stroke="#1e293b"
        strokeWidth="2"
      />

      {/* Center Black Pentagon */}
      <polygon
        points="50,33 66,45 60,63 40,63 34,45"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      {/* Top Black Pentagon Patch */}
      <polygon
        points="50,3 41,15 59,15"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      <line x1="50" y1="15" x2="50" y2="33" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

      {/* Top Right Black Patch */}
      <polygon
        points="86,19 75,30 84,42 96,31"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      <line x1="75" y1="30" x2="66" y2="45" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

      {/* Bottom Right Black Patch */}
      <polygon
        points="84,77 72,67 76,84 94,80"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      <line x1="72" y1="67" x2="60" y2="63" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

      {/* Bottom Left Black Patch */}
      <polygon
        points="16,77 28,67 24,84 6,80"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      <line x1="28" y1="67" x2="40" y2="63" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

      {/* Top Left Black Patch */}
      <polygon
        points="14,19 25,30 16,42 4,31"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      <line x1="25" y1="30" x2="34" y2="45" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

      {/* Realistic Seam Lines (Stitching) */}
      <line x1="41" y1="15" x2="25" y2="30" stroke="#64748b" strokeWidth="1.6" />
      <line x1="59" y1="15" x2="75" y2="30" stroke="#64748b" strokeWidth="1.6" />
      <line x1="84" y1="42" x2="72" y2="67" stroke="#64748b" strokeWidth="1.6" />
      <line x1="16" y1="42" x2="28" y2="67" stroke="#64748b" strokeWidth="1.6" />
      <line x1="40" y1="63" x2="50" y2="82" stroke="#64748b" strokeWidth="1.6" />
      <line x1="60" y1="63" x2="50" y2="82" stroke="#64748b" strokeWidth="1.6" />
      <polygon points="50,82 43,97 57,97" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />

      {/* Specular White Highlight Glint */}
      <ellipse cx="34" cy="25" rx="14" ry="9" fill={`url(#${glintId})`} />
    </svg>
  );
};

// ============================================================================
// SIMULATOR 4: ANIMATION FPS MOTION PLAYER (PERSISTENCE OF VISION)
// ============================================================================
export const AnimationFpsMotionPlayer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [fps, setFps] = useState<6 | 12 | 24 | 60>(24);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [onionSkin, setOnionSkin] = useState(true);

  const totalFrames = 8;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % totalFrames);
    }, 1000 / fps);
    return () => clearInterval(interval);
  }, [isPlaying, fps]);

  // Frame positions for a bouncing soccer ball (Disney 12 Principles: Squash & Stretch)
  const frameY = [140, 105, 55, 24, 45, 90, 125, 140];
  const frameSquash = [
    { scaleX: 1.0, scaleY: 1.0 },      // 0: Apex hang-time (round sphere)
    { scaleX: 0.92, scaleY: 1.12 },   // 1: Accelerating downward (slight stretch)
    { scaleX: 0.85, scaleY: 1.25 },   // 2: Fast drop before impact (max vertical elongation)
    { scaleX: 1.40, scaleY: 0.65 },   // 3: Ground contact impact (maximum squash & spread)
    { scaleX: 0.86, scaleY: 1.24 },   // 4: Explosive rebound takeoff (vertical stretch)
    { scaleX: 0.92, scaleY: 1.12 },   // 5: Decelerating upward ascent
    { scaleX: 0.98, scaleY: 1.04 },   // 6: Near top
    { scaleX: 1.0, scaleY: 1.0 }       // 7: Back at apex
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 overflow-y-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Interactive Lab 4 &bull; Temporal Motion
            </span>
            <span className="text-xs font-mono text-slate-400">The Illusion of Motion</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Persistence of Vision &amp; Frame Rate Player
          </h2>
        </div>

        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-mono">
          <span className="text-slate-400">Active Speed:</span>
          <span className="text-emerald-400 font-bold">{fps} FPS</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">Frame {currentFrame + 1} / {totalFrames}</span>
        </div>
      </div>

      {/* Main Player Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow items-stretch">
        {/* Left: Interactive Motion Stage */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Stage Viewport */}
          <div className="relative flex-grow bg-slate-950 rounded-xl border border-slate-800 min-h-[260px] flex items-center justify-center overflow-hidden">
            {/* Ground Line */}
            <div className="absolute bottom-8 left-0 right-0 h-1 bg-slate-700/80" />

            {/* Dynamic Contact Floor Shadow */}
            <div
              className="absolute rounded-full bg-black/70 blur-[2px] transition-all duration-75 pointer-events-none"
              style={{
                bottom: '26px',
                left: '50%',
                width: `${Math.max(26, 74 * (1 - (frameY[currentFrame] - 24) / 160))}px`,
                height: `${Math.max(6, 16 * (1 - (frameY[currentFrame] - 24) / 160))}px`,
                opacity: Math.max(0.15, 0.85 - (frameY[currentFrame] - 24) / 180),
                transform: 'translateX(-50%)'
              }}
            />

            {/* Onion Skin Ghost Frame (Previous Frame) */}
            {onionSkin && (
              <div
                className="absolute flex items-center justify-center pointer-events-none transition-all duration-75"
                style={{
                  bottom: `${frameY[(currentFrame - 1 + totalFrames) % totalFrames]}px`,
                  left: '50%',
                  transform: `translateX(-50%) scaleX(${frameSquash[(currentFrame - 1 + totalFrames) % totalFrames].scaleX}) scaleY(${frameSquash[(currentFrame - 1 + totalFrames) % totalFrames].scaleY})`
                }}
              >
                <RealisticSoccerBall size={68} isGhost={true} />
              </div>
            )}

            {/* Current Active Animated Soccer Ball */}
            <div
              className="absolute flex items-center justify-center transition-all duration-75"
              style={{
                bottom: `${frameY[currentFrame]}px`,
                left: '50%',
                transform: `translateX(-50%) scaleX(${frameSquash[currentFrame].scaleX}) scaleY(${frameSquash[currentFrame].scaleY})`
              }}
            >
              <RealisticSoccerBall size={68} isGhost={false} />
            </div>

            {/* Frame Badge */}
            <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-emerald-400 font-bold">
              FRAME #{currentFrame + 1} ({Math.round(1000 / fps)}ms per frame)
            </div>
          </div>

          {/* Timeline Scrubber Bar */}
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-mono font-bold transition flex items-center gap-1 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentFrame((prev) => (prev + 1) % totalFrames);
                }}
                className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-mono transition cursor-pointer"
              >
                Step +1
              </button>
            </div>

            {/* 8 Frame Indicators */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalFrames }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentFrame(idx);
                  }}
                  className={`w-6 h-6 rounded text-[10px] font-mono font-bold transition cursor-pointer ${
                    currentFrame === idx
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setOnionSkin(!onionSkin)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer ${
                onionSkin ? 'bg-purple-900/60 border border-purple-500 text-purple-200' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Onion Skin: {onionSkin ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        {/* Right: FPS Comparison Standards */}
        <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
              ⏱️ Select Frame Rate Standard:
            </span>

            {/* FPS Options */}
            <div className="space-y-2">
              <button
                onClick={() => setFps(6)}
                className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer ${
                  fps === 6 ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs font-bold">
                  <span>6 FPS (Early Web / Stutter)</span>
                  <span>166ms</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Below retinal threshold: brain perceives individual discrete slides.</span>
              </button>

              <button
                onClick={() => setFps(12)}
                className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer ${
                  fps === 12 ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs font-bold">
                  <span>12 FPS (Drawn &ldquo;On Twos&rdquo;)</span>
                  <span>83ms</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Classic 2D animation hand-drawn economy standard.</span>
              </button>

              <button
                onClick={() => setFps(24)}
                className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer ${
                  fps === 24 ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs font-bold">
                  <span>24 FPS (Cinema Standard)</span>
                  <span>41ms</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Smooth continuous persistence of vision for theatrical films.</span>
              </button>

              <button
                onClick={() => setFps(60)}
                className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer ${
                  fps === 60 ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs font-bold">
                  <span>60 FPS (Modern Games &amp; UI)</span>
                  <span>16.6ms</span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-0.5">Ultra-fluid responsiveness for mobile touch and high-refresh monitors.</span>
              </button>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
            <strong>The Science:</strong> Discovered by Peter Mark Roget (1824), &ldquo;Persistence of Vision&rdquo; retains optical retinal images for ~1/16th of a second.
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATOR 5: VIDEO BITRATE & STORAGE CAPACITY CALCULATOR
// ============================================================================
export const VideoBitrateStorageCalculator: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [resolution, setResolution] = useState<'1080p' | '4k' | '8k'>('1080p');
  const [framerate, setFramerate] = useState<24 | 60>(24);
  const [codec, setCodec] = useState<'raw' | 'prores' | 'h264' | 'av1'>('h264');
  const [minutes, setMinutes] = useState(60);

  // Bitrate in Mbps calculation
  const getBitrateMbps = () => {
    let base = 8; // 1080p h264 24fps
    if (resolution === '4k') base *= 4;
    if (resolution === '8k') base *= 16;
    if (framerate === 60) base *= 1.8;

    if (codec === 'raw') return base * 25; // Massive uncompressed
    if (codec === 'prores') return base * 8;
    if (codec === 'h264') return base;
    if (codec === 'av1') return base * 0.6; // High efficiency
    return base;
  };

  const bitrate = getBitrateMbps();
  const totalMB = (bitrate * (minutes * 60)) / 8;
  const totalGB = totalMB / 1024;

  const cdCount = Math.ceil(totalMB / 700);
  const dvdCount = Math.ceil(totalGB / 4.7);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 overflow-y-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
              Interactive Lab 5 &bull; Technical Planning
            </span>
            <span className="text-xs font-mono text-slate-400">PDF Slide 13 &amp; 40 Reality Check</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Video Bitrate, Codecs &amp; Storage Bandwidth Calculator
          </h2>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-mono">
          <HardDrive className="w-4 h-4 text-sky-400" />
          <span className="text-slate-400">Storage Required:</span>
          <span className="text-sky-400 font-bold">{totalGB.toFixed(2)} GB</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow items-stretch">
        {/* Left: Input Variables */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* Resolution Selector */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                1. Spatial Resolution:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: '1080p', label: '1080p Full HD', pixels: '1920x1080' },
                  { key: '4k', label: '4K Ultra HD', pixels: '3840x2160' },
                  { key: '8k', label: '8K Cinema', pixels: '7680x4320' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setResolution(item.key as '1080p' | '4k' | '8k')}
                    className={`p-2 rounded-xl border text-center transition cursor-pointer ${
                      resolution === item.key
                        ? 'bg-sky-600 text-white border-sky-400 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs block">{item.label}</span>
                    <span className="text-[9px] text-slate-400 font-mono">{item.pixels}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Rate */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                2. Frame Rate:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setFramerate(24)}
                  className={`p-2 rounded-xl border text-center transition cursor-pointer ${
                    framerate === 24 ? 'bg-sky-600 text-white border-sky-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs block">24 FPS</span>
                  <span className="text-[9px] text-slate-400 font-mono">Cinema Film Standard</span>
                </button>
                <button
                  onClick={() => setFramerate(60)}
                  className={`p-2 rounded-xl border text-center transition cursor-pointer ${
                    framerate === 60 ? 'bg-sky-600 text-white border-sky-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs block">60 FPS</span>
                  <span className="text-[9px] text-slate-400 font-mono">High Frame Rate (HFR)</span>
                </button>
              </div>
            </div>

            {/* Compression Codec */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                3. Video Compression Codec:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setCodec('raw')}
                  className={`p-2 rounded-xl border text-left transition cursor-pointer ${
                    codec === 'raw' ? 'bg-red-950/60 border-red-500 text-red-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="font-bold block">Uncompressed RAW</span>
                  <span className="text-[9px] text-slate-500">Zero compression (Massive!)</span>
                </button>

                <button
                  onClick={() => setCodec('prores')}
                  className={`p-2 rounded-xl border text-left transition cursor-pointer ${
                    codec === 'prores' ? 'bg-amber-950/60 border-amber-500 text-amber-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="font-bold block">Apple ProRes 422</span>
                  <span className="text-[9px] text-slate-500">Editing master standard</span>
                </button>

                <button
                  onClick={() => setCodec('h264')}
                  className={`p-2 rounded-xl border text-left transition cursor-pointer ${
                    codec === 'h264' ? 'bg-sky-950/60 border-sky-500 text-sky-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="font-bold block">H.264 / AVC</span>
                  <span className="text-[9px] text-slate-500">Universal web streaming</span>
                </button>

                <button
                  onClick={() => setCodec('av1')}
                  className={`p-2 rounded-xl border text-left transition cursor-pointer ${
                    codec === 'av1' ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="font-bold block">AV1 / Modern Next-Gen</span>
                  <span className="text-[9px] text-slate-500">Highest data efficiency</span>
                </button>
              </div>
            </div>

            {/* Duration Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-slate-300">
                <span>Duration: <strong>{minutes} minutes</strong></span>
                <span className="text-slate-500">{Math.floor(minutes / 60)}h {minutes % 60}m</span>
              </div>
              <input
                type="range"
                min="5"
                max="180"
                step="5"
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right: Storage Output & Delivery Medium Equivalence */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
              📊 Calculated Physical Media Requirements:
            </span>

            {/* Giant Storage Meter */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1 mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Total Stream Weight:</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-mono">
                {totalGB > 1000 ? `${(totalGB / 1024).toFixed(2)} TB` : `${totalGB.toFixed(2)} GB`}
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Average Data Rate: <strong>{bitrate.toFixed(1)} Mbps</strong> ({((bitrate / 8)).toFixed(2)} MB/sec)
              </span>
            </div>

            {/* Physical Delivery Medium Breakdown */}
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-300">
                  <Disc className="w-4 h-4 text-purple-400" />
                  <span>Standard CD-ROMs (700 MB each):</span>
                </div>
                <span className="font-mono font-bold text-purple-400">{cdCount.toLocaleString()} Discs</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-300">
                  <Disc className="w-4 h-4 text-amber-400" />
                  <span>Standard DVD-ROMs (4.7 GB each):</span>
                </div>
                <span className="font-mono font-bold text-amber-400">{dvdCount.toLocaleString()} DVDs</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-300">
                  <Wifi className="w-4 h-4 text-emerald-400" />
                  <span>Broadband 100 Mbps Download Time:</span>
                </div>
                <span className="font-mono font-bold text-emerald-400">
                  {Math.round((totalMB * 8) / 100 / 60)} minutes
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-sky-950/40 border border-sky-800/40 text-[11px] text-sky-300 leading-relaxed">
            <strong>Professor Note:</strong> This is why video production requires compression. Uncompressed 4K for 1 hour takes ~480 GB! Intelligent codecs (H.264/AV1) compress redundant pixels by up to 98% with minimal visual loss.
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATOR 6: LINEAR VS NON-LINEAR INTERACTIVE BRANCHING LAB
// ============================================================================
export const LinearVsNonLinearBranchingLab: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeMode, setActiveMode] = useState<'linear' | 'nonlinear'>('linear');

  // Linear mode state
  const [linearProgress, setLinearProgress] = useState(0);
  const [isLinearPlaying, setIsLinearPlaying] = useState(false);

  // Non-linear decision tree state
  const [currentScene, setCurrentScene] = useState<'start' | 'street' | 'subway' | 'park' | 'success'>('start');
  const [inventory, setInventory] = useState<string[]>([]);

  useEffect(() => {
    if (!isLinearPlaying || activeMode !== 'linear') return;
    const interval = setInterval(() => {
      setLinearProgress((prev) => {
        if (prev >= 100) {
          setIsLinearPlaying(false);
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isLinearPlaying, activeMode]);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 overflow-y-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30">
              Interactive Lab 6 &bull; Architecture Spectrum
            </span>
            <span className="text-xs font-mono text-slate-400">PDF Slide 17 &amp; 18</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Linear (Cinema / Broadcast) vs. Non-Linear (Games / Hypermedia)
          </h2>
        </div>

        {/* Mode Toggle Switch */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs font-mono">
          <button
            onClick={() => setActiveMode('linear')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer font-bold ${
              activeMode === 'linear' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            1. Linear Mode (Passive)
          </button>
          <button
            onClick={() => setActiveMode('nonlinear')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer font-bold ${
              activeMode === 'nonlinear' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            2. Non-Linear Mode (Interactive)
          </button>
        </div>
      </div>

      {/* Main Mode View */}
      {activeMode === 'linear' ? (
        /* LINEAR MODE SIMULATOR */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow items-stretch">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                <span className="text-rose-400 font-bold">🎬 Linear Cinema Reel (Fixed Timeline)</span>
                <span className="text-slate-500">User Control: NONE (One-Way Broadcast)</span>
              </div>

              {/* Film Strip Viewport */}
              <div className="my-4 bg-slate-950 rounded-xl p-6 border border-slate-800 min-h-[200px] flex flex-col justify-between items-center text-center">
                <div className="text-xs font-mono text-slate-400">
                  {linearProgress < 33 && 'Scene 1: Opening Shot &bull; Protagonist enters the city.'}
                  {linearProgress >= 33 && linearProgress < 66 && 'Scene 2: Conflict &bull; Crossroad encounter with oncoming traffic.'}
                  {linearProgress >= 66 && 'Scene 3: Resolution &bull; Protagonist reaches destination.'}
                </div>

                <div className="my-4 text-4xl">
                  {linearProgress < 33 ? '🏙️ 🚶' : linearProgress < 66 ? '🚗 🚦 🚶' : '🏆 🏁'}
                </div>

                <div className="text-[11px] text-slate-500 font-mono">
                  The viewer cannot skip scenes, alter dialogue, or change choices. Pacing is 100% predetermined by the author.
                </div>
              </div>

              {/* Linear Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Start (00:00)</span>
                  <span className="text-rose-400 font-bold">{linearProgress}%</span>
                  <span>End Credits (02:00)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-rose-500 h-full rounded-full transition-all duration-100"
                    style={{ width: `${linearProgress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setIsLinearPlaying(!isLinearPlaying)}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                {isLinearPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isLinearPlaying ? 'Pause Movie' : 'Play Movie'}</span>
              </button>

              <button
                onClick={() => setLinearProgress(0)}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Rewind</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
                🎞️ Linear Media Characteristics:
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-400 shrink-0 mt-0.5">•</span>
                  <span><strong>Zero Interactivity:</strong> Information flows one-way from screen to viewer.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-400 shrink-0 mt-0.5">•</span>
                  <span><strong>Predictable Timeline:</strong> Same beginning, middle, and end for every single audience member.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-400 shrink-0 mt-0.5">•</span>
                  <span><strong>Examples:</strong> Theatrical movies, television broadcasts, pre-recorded audio podcasts.</span>
                </li>
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
              Ideal for storytelling where narrative immersion and emotional timing must be strictly orchestrated.
            </div>
          </div>
        </div>
      ) : (
        /* NON-LINEAR MODE SIMULATOR */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow items-stretch">
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                <span className="text-emerald-400 font-bold">🎮 Non-Linear Branching System (User Agency)</span>
                <span className="text-slate-500">Navigation: Controlled by YOUR Decisions</span>
              </div>

              {/* Interactive Game / Courseware Scene Viewport */}
              <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 min-h-[220px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                    <span>Scene State: <strong>{currentScene.toUpperCase()}</strong></span>
                    <span>Inventory: {inventory.length ? inventory.join(', ') : 'Empty'}</span>
                  </div>

                  {currentScene === 'start' && (
                    <div className="space-y-2 text-center py-4">
                      <h4 className="text-base font-bold text-white">You arrive at the Grand Crossroad</h4>
                      <p className="text-xs text-slate-300 max-w-md mx-auto">
                        Unlike a movie, YOU choose where to go next! Which navigation path will you take?
                      </p>
                      <div className="flex flex-wrap justify-center gap-3 pt-3">
                        <button
                          onClick={() => setCurrentScene('street')}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          Take the Pedestrian Street &rarr;
                        </button>
                        <button
                          onClick={() => setCurrentScene('subway')}
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          Enter Subway Station &rarr;
                        </button>
                      </div>
                    </div>
                  )}

                  {currentScene === 'street' && (
                    <div className="space-y-2 text-center py-4">
                      <h4 className="text-base font-bold text-white">Crosswalk Traffic Light is Red</h4>
                      <p className="text-xs text-slate-300 max-w-md mx-auto">
                        You encounter an interactive road safety prompt. What action do you execute?
                      </p>
                      <div className="flex flex-wrap justify-center gap-3 pt-3">
                        <button
                          onClick={() => {
                            setInventory([...inventory, 'Safety Badge']);
                            setCurrentScene('park');
                          }}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          Push Pedestrian Button &amp; Wait &rarr;
                        </button>
                        <button
                          onClick={() => setCurrentScene('start')}
                          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          &larr; Return to Crossroad
                        </button>
                      </div>
                    </div>
                  )}

                  {currentScene === 'subway' && (
                    <div className="space-y-2 text-center py-4">
                      <h4 className="text-base font-bold text-white">Interactive Ticket Kiosk</h4>
                      <p className="text-xs text-slate-300 max-w-md mx-auto">
                        You reach an ATM-style interactive terminal. You purchase a digital token.
                      </p>
                      <div className="flex flex-wrap justify-center gap-3 pt-3">
                        <button
                          onClick={() => {
                            setInventory([...inventory, 'Subway Pass']);
                            setCurrentScene('park');
                          }}
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          Swipe Pass to Board Train &rarr;
                        </button>
                        <button
                          onClick={() => setCurrentScene('start')}
                          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          &larr; Go Back
                        </button>
                      </div>
                    </div>
                  )}

                  {currentScene === 'park' && (
                    <div className="space-y-2 text-center py-4">
                      <h4 className="text-base font-bold text-emerald-400">Destination Reached: Central Hub!</h4>
                      <p className="text-xs text-slate-300 max-w-md mx-auto">
                        Notice how your journey depended entirely on your navigation clicks! This is the essence of Non-Linear Multimedia.
                      </p>
                      <div className="flex justify-center pt-3">
                        <button
                          onClick={() => {
                            setCurrentScene('start');
                            setInventory([]);
                          }}
                          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-mono transition cursor-pointer flex items-center gap-1.5"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Restart Non-Linear Journey</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-3 text-[11px] text-slate-400 font-mono">
              ⚡ Notice: Hypermedia allows users to skip, backtrack, drill down, and construct personalized pathways.
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                🌿 Non-Linear Media Characteristics:
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                  <span><strong>Full Interactivity:</strong> User controls what, when, and how content is rendered.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                  <span><strong>Hypermedia Links:</strong> Dynamic nodes connecting video, audio, text, and graphics.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                  <span><strong>Examples:</strong> Video games, e-learning courseware, websites, airport kiosks.</span>
                </li>
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
              Crucial for BS Multimedia designers: We architect <em>systems of possibilities</em> rather than a single fixed sequence.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// SIMULATOR 7: RETRO & MODERN AUTHORING TIMELINE STUDIO
// ============================================================================
export const MultimediaAuthoringStudio: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [playhead, setPlayhead] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalFrames = 20;

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPlayhead((prev) => (prev >= totalFrames ? 1 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 overflow-y-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
              Interactive Lab 7 &bull; Authoring Tools
            </span>
            <span className="text-xs font-mono text-slate-400">PDF Slide 19 &amp; 20 (Flash / Director Tribute)</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Multimedia Authoring Studio: Layers, Keyframes &amp; Event Timelines
          </h2>
        </div>

        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-mono">
          <span className="text-slate-400">Timeline Frame:</span>
          <span className="text-rose-400 font-bold">{playhead} / {totalFrames}</span>
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow items-stretch">
        {/* Top/Left: Stage Canvas */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono">
            <span className="text-slate-300 font-bold">Authoring Stage Canvas (Output)</span>
            <span className="text-[10px] text-slate-500">Macromedia Flash 8 Architecture</span>
          </div>

          {/* Stage Area */}
          <div className="my-auto py-8 bg-slate-950 rounded-xl border border-slate-800 min-h-[190px] flex items-center justify-center relative overflow-hidden">
            {/* Visual element moving based on timeline playhead */}
            <div
              className="transition-all duration-150 flex flex-col items-center"
              style={{
                transform: `translateX(${(playhead - 10) * 12}px) translateY(${Math.sin(playhead * 0.5) * 20}px)`
              }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-xl shadow-lg shadow-rose-500/20">
                {playhead < 7 ? '🤖' : playhead < 14 ? '🚀' : '✨'}
              </div>
              <span className="text-[10px] font-mono text-rose-300 mt-1">
                {playhead < 7 ? 'Keyframe 1' : playhead < 14 ? 'Keyframe 2' : 'ActionScript stop()'}
              </span>
            </div>

            {playhead >= 14 && (
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                Event Trigger: onRelease()
              </div>
            )}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Stop Playhead' : 'Test Movie (Enter)'}</span>
            </button>

            <button
              onClick={() => setPlayhead(1)}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition cursor-pointer"
            >
              Rewind to Frame 1
            </button>
          </div>
        </div>

        {/* Right: Timeline Layers Editor */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono mb-3">
              <span className="text-slate-300 font-bold">Multi-Track Layer Timeline</span>
              <span className="text-[10px] text-slate-500">12.0 FPS</span>
            </div>

            {/* Timeline Tracks */}
            <div className="space-y-2 text-xs font-mono">
              {/* Layer 1: Actions */}
              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="w-24 text-[11px] font-bold text-purple-400 shrink-0">Actions (Code)</span>
                <div className="flex-grow flex gap-0.5 overflow-x-auto">
                  {Array.from({ length: totalFrames }).map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setPlayhead(i + 1)}
                      className={`h-6 flex-1 min-w-[14px] rounded-[2px] cursor-pointer flex items-center justify-center text-[8px] transition ${
                        playhead === i + 1
                          ? 'bg-rose-500 text-white font-bold'
                          : i === 13
                          ? 'bg-purple-900/60 border border-purple-500 text-purple-300'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-600'
                      }`}
                    >
                      {i === 13 ? 'a' : ''}
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer 2: Audio */}
              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="w-24 text-[11px] font-bold text-amber-400 shrink-0">Audio Track</span>
                <div className="flex-grow flex gap-0.5 overflow-x-auto">
                  {Array.from({ length: totalFrames }).map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setPlayhead(i + 1)}
                      className={`h-6 flex-1 min-w-[14px] rounded-[2px] cursor-pointer flex items-center justify-center text-[8px] transition ${
                        playhead === i + 1
                          ? 'bg-rose-500 text-white font-bold'
                          : i >= 4 && i <= 15
                          ? 'bg-amber-950/60 border border-amber-500/40 text-amber-400'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-600'
                      }`}
                    >
                      {i === 4 ? '♫' : ''}
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer 3: Character */}
              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="w-24 text-[11px] font-bold text-rose-400 shrink-0">Character Anim</span>
                <div className="flex-grow flex gap-0.5 overflow-x-auto">
                  {Array.from({ length: totalFrames }).map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setPlayhead(i + 1)}
                      className={`h-6 flex-1 min-w-[14px] rounded-[2px] cursor-pointer flex items-center justify-center text-[8px] transition ${
                        playhead === i + 1
                          ? 'bg-rose-500 text-white font-bold'
                          : i === 0 || i === 7 || i === 14
                          ? 'bg-rose-900/60 border border-rose-500 text-rose-300'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-600'
                      }`}
                    >
                      {i === 0 || i === 7 || i === 14 ? '●' : ''}
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer 4: Background */}
              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="w-24 text-[11px] font-bold text-sky-400 shrink-0">Background</span>
                <div className="flex-grow flex gap-0.5 overflow-x-auto">
                  {Array.from({ length: totalFrames }).map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setPlayhead(i + 1)}
                      className={`h-6 flex-1 min-w-[14px] rounded-[2px] cursor-pointer flex items-center justify-center text-[8px] transition ${
                        playhead === i + 1 ? 'bg-rose-500 text-white font-bold' : 'bg-slate-900 hover:bg-slate-800 text-slate-600'
                      }`}
                    >
                      {i === 0 ? '●' : ''}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
            <strong>Authoring Tool Purpose:</strong> Unifies the 5 elements. Historical pioneers like <em>Macromedia Director</em> and <em>Flash</em> established timeline keyframing, which lives on today in Godot, Unity, After Effects, and Figma Smart Animate!
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATOR 8: THE 6 MULTIMEDIA PRODUCTS INTERACTIVE SHOWCASE
// ============================================================================
export const MultimediaProductsInteractiveMatrix: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedProduct, setSelectedProduct] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  const products = [
    {
      id: 1,
      num: '1',
      title: 'Briefing Products',
      subtitle: 'Fast, Concise, Linear Presentations',
      devCycle: 'Short (Days to Weeks)',
      interactivity: 'Low (Next / Back buttons)',
      examples: ['Corporate Pitch Decks', 'Sales Presentations', 'Educational Lectures'],
      desc: 'Small, straightforward products designed to deliver vital information quickly and concisely to a live audience without cognitive clutter.'
    },
    {
      id: 2,
      num: '2',
      title: 'Reference Products',
      subtitle: 'Encyclopedias & Massive Dictionaries',
      devCycle: 'Medium / Continuous',
      interactivity: 'High (Search, Bookmarks, Indexing)',
      examples: ['Microsoft Encarta 2005', 'Electronic Dictionaries', 'Interactive Cookbooks'],
      desc: 'Comprehensive information repositories used for answering specific queries or general browsing. Divided into Generalized (broad/shallow) and Detailed (focused/deep).'
    },
    {
      id: 3,
      num: '3',
      title: 'Database Products',
      subtitle: 'Content-Based Search & Real-Time Queries',
      devCycle: 'Large / Multi-Year',
      interactivity: 'High (Filter queries, geospatial navigation)',
      examples: ['Google Earth', 'Google Search', 'Image Asset Datasets'],
      desc: 'Focuses on indexing, storing, and retrieving actual multimedia datasets. Supports simultaneous concurrent access, relational consistency, and content-based queries.'
    },
    {
      id: 4,
      num: '4',
      title: 'Education & Training',
      subtitle: 'Simulations & Self-Paced Courseware',
      devCycle: 'Medium to Long',
      interactivity: 'High (Quizzes, step-through experiments)',
      examples: ['Interactive Chemistry Labs', 'Corporate Onboarding Modules', 'Flight Simulators'],
      desc: 'Augments traditional textbooks with synchronized audio, step-by-step animations, and video explanations. Categories: Instructor-support, Standalone self-paced, and Blended.'
    },
    {
      id: 5,
      num: '5',
      title: 'Kiosk Products',
      subtitle: 'Public Standalone Terminals (POI & POS)',
      devCycle: 'Medium',
      interactivity: 'High (Touch glass, fast frictionless response)',
      examples: ['Airport Check-In Kiosks', 'Banking ATMs', 'Instant Photo Booths'],
      desc: 'Stationed in public spaces for rapid transactions. Divided into Point of Information (POI: timetables, museum maps) and Point of Sale (POS: ticket purchasing, check-in).'
    },
    {
      id: 6,
      num: '6',
      title: 'Entertainment & Games',
      subtitle: 'Immersive Real-Time Simulations',
      devCycle: 'Long (1 to 4 Years)',
      interactivity: 'Maximum (Continuous feedback loops)',
      examples: ['Console & Mobile Games', 'VR Experiences', 'Interactive Film Stories'],
      desc: 'The most popular and financially massive multimedia sector. Features continuous feedback, cognitive challenge, emotional immersion, and multi-user connectivity.'
    }
  ];

  const current = products.find((p) => p.id === selectedProduct)!;

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 overflow-y-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Interactive Lab 8 &bull; Product Taxonomy
            </span>
            <span className="text-xs font-mono text-slate-400">PDF Slides 27 &ndash; 39</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            The 6 Multimedia Products Taxonomy Matrix
          </h2>
        </div>

        <div className="text-xs font-mono text-purple-400 font-bold">
          Click any product below to audit architecture &rarr;
        </div>
      </div>

      {/* 6 Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedProduct(p.id as 1 | 2 | 3 | 4 | 5 | 6)}
            className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
              selectedProduct === p.id
                ? 'bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-600/20'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-mono font-bold block opacity-70">PRODUCT #{p.num}</span>
            <span className="text-xs font-bold truncate block">{p.title}</span>
          </button>
        ))}
      </div>

      {/* Selected Product Detail Card & Mockup View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-grow items-stretch">
        {/* Left: Product Deep Dive Spec */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-bold">
                Product Category {current.num} of 6
              </span>
              <h3 className="text-xl font-extrabold text-white">{current.title}</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">{current.subtitle}</p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
              {current.desc}
            </p>

            {/* Spec Table */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="text-slate-400 font-mono text-[11px]">Development Cycle:</span>
                <span className="text-purple-300 font-bold font-mono">{current.devCycle}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="text-slate-400 font-mono text-[11px]">User Interactivity:</span>
                <span className="text-emerald-300 font-bold font-mono">{current.interactivity}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-bold">
              Real-World Examples from PDF:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {current.examples.map((ex, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium">
                  {ex}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Interactive UI Mockup for the Selected Product */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono">
            <span className="text-slate-300 font-bold">Live UI Mockup &bull; {current.title}</span>
            <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">
              Interactive Prototype
            </span>
          </div>

          {/* Interactive Mockup Body */}
          <div className="my-auto py-4 bg-slate-950 rounded-xl border border-slate-800 min-h-[200px] flex flex-col justify-center items-center text-center p-4">
            {selectedProduct === 1 && (
              <div className="space-y-3 w-full max-w-sm text-left">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
                  <span className="text-[10px] font-mono text-purple-400 font-bold uppercase">Quarterly Briefing Deck</span>
                  <h4 className="text-sm font-bold text-white mt-1">Q3 Creative Agency Revenue</h4>
                  <div className="mt-2 h-2 bg-purple-500/30 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-3/4 rounded-full" />
                  </div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <button className="px-3 py-1 bg-slate-800 rounded">&larr; Slide 04</button>
                  <button className="px-3 py-1 bg-purple-600 text-white rounded font-bold">Slide 05 &rarr;</button>
                </div>
              </div>
            )}

            {selectedProduct === 2 && (
              <div className="space-y-2 w-full max-w-sm text-left font-mono">
                <div className="flex gap-2">
                  <input
                    type="text"
                    defaultValue="Ancient Egypt Architecture"
                    readOnly
                    className="flex-grow bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-xs text-white"
                  />
                  <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold">Search</button>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                  <span className="text-blue-400 font-bold block text-[11px]">Microsoft Encarta Article #849</span>
                  <p className="text-[11px] text-slate-400 font-sans">
                    The Pyramids of Giza were constructed around 2560 BC... [Click to play audio pronunciation]
                  </p>
                </div>
              </div>
            )}

            {selectedProduct === 3 && (
              <div className="space-y-2 w-full max-w-sm">
                <div className="text-3xl">🌍</div>
                <h4 className="text-xs font-bold text-white font-mono">Google Earth Geospatial Query Engine</h4>
                <p className="text-[11px] text-slate-400 font-sans">
                  Querying relational 3D tile matrices with simultaneous satellite overlays and terrain mesh datasets.
                </p>
                <div className="flex justify-center gap-2 pt-2 text-[10px] font-mono">
                  <span className="px-2 py-0.5 bg-slate-800 rounded text-emerald-400">Lat: 14.5995° N</span>
                  <span className="px-2 py-0.5 bg-slate-800 rounded text-emerald-400">Lon: 120.9842° E</span>
                </div>
              </div>
            )}

            {selectedProduct === 4 && (
              <div className="space-y-3 w-full max-w-sm text-center">
                <div className="text-3xl">🧪 ⚛️</div>
                <h4 className="text-xs font-bold text-white font-mono">Simulated Chemistry &amp; Algebra Lab</h4>
                <div className="flex justify-center gap-2">
                  <button className="px-3 py-1 bg-emerald-600 text-white rounded text-xs font-bold">Simulate Reaction</button>
                  <button className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">Self-Check Quiz</button>
                </div>
              </div>
            )}

            {selectedProduct === 5 && (
              <div className="space-y-3 w-full max-w-sm text-center">
                <div className="text-3xl">🏧 💳</div>
                <h4 className="text-xs font-bold text-white font-mono">ATM &amp; Airport Touch Kiosk (POI/POS)</h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <button className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-amber-300">Point of Information (Maps)</button>
                  <button className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-emerald-300">Point of Sale (Purchase)</button>
                </div>
              </div>
            )}

            {selectedProduct === 6 && (
              <div className="space-y-3 w-full max-w-sm text-center">
                <div className="text-3xl animate-bounce">👾 🕹️</div>
                <h4 className="text-xs font-bold text-white font-mono">Interactive Real-Time Game Loop</h4>
                <div className="flex justify-center gap-3 text-xs font-mono">
                  <span className="text-rose-400 font-bold">HP: 100/100</span>
                  <span className="text-amber-400 font-bold">Score: 4,500</span>
                </div>
                <button className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold font-mono">
                  Press Start [Spacebar]
                </button>
              </div>
            )}
          </div>

          <div className="pt-2 text-[11px] text-slate-400 font-mono text-center">
            BS Multimedia creators specialize across these 6 distinct industries.
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATOR 9: DELIVERY BANDWIDTH & STORAGE SPEED RACE
// ============================================================================
export const DeliveryBandwidthSpeedRace: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [isRacing, setIsRacing] = useState(false);
  const [progress, setProgress] = useState({
    floppy: 0,
    cdrom: 0,
    dvdrom: 0,
    usb: 0,
    fiveG: 0
  });

  const fileSizeMB = 700; // 1 CD worth of multimedia

  const startRace = () => {
    setIsRacing(true);
    setProgress({ floppy: 0, cdrom: 0, dvdrom: 0, usb: 0, fiveG: 0 });

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000; // in seconds

      // Speeds:
      // 5G: ~100 MB/s -> 700MB in 7s
      // USB: ~40 MB/s -> 700MB in 17s
      // DVD 16x: ~21 MB/s -> 700MB in 33s
      // CD-ROM 1x: 150 KB/s (0.15 MB/s) -> 700MB in ~4600s
      // Floppy: 0.05 MB/s -> Cannot fit 700MB!
      const pFiveG = Math.min(100, (elapsed / 2.5) * 100);
      const pUsb = Math.min(100, (elapsed / 5.0) * 100);
      const pDvd = Math.min(100, (elapsed / 9.0) * 100);
      const pCd = Math.min(100, (elapsed / 25.0) * 100);
      const pFloppy = Math.min(2, elapsed * 0.2); // barely moves

      setProgress({
        fiveG: pFiveG,
        usb: pUsb,
        dvdrom: pDvd,
        cdrom: pCd,
        floppy: pFloppy
      });

      if (pFiveG >= 100 && pUsb >= 100 && pDvd >= 100) {
        clearInterval(interval);
        setIsRacing(false);
      }
    }, 50);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 overflow-y-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-3 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
              Interactive Lab 9 &bull; Delivery Pipelines
            </span>
            <span className="text-xs font-mono text-slate-400">PDF Slide 40: Storage &amp; Bandwidth</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            Media Delivery Bandwidth Race: Optical / Flash vs. Broadband Streaming
          </h2>
        </div>

        <button
          onClick={startRace}
          disabled={isRacing}
          className="px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white rounded-xl text-xs font-mono font-bold transition flex items-center gap-2 cursor-pointer shadow-lg shadow-sky-600/20"
        >
          <Play className="w-3.5 h-3.5" />
          <span>{isRacing ? 'Delivering Media...' : 'Start 700MB Transfer Race 🏎️'}</span>
        </button>
      </div>

      {/* Race Track Comparison */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 my-auto">
        <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
          <span>Target Payload: <strong>700 MB Multimedia Video Package</strong></span>
          <span>Latency &amp; Throughput Simulation</span>
        </div>

        {/* Medium 1: 5G / Fiber Broadband */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5" /> 5G Fiber Broadband (1 Gbps)
            </span>
            <span className="text-emerald-400 font-bold">{progress.fiveG.toFixed(0)}% {progress.fiveG >= 100 && '🏆 COMPLETE (2.5s)'}</span>
          </div>
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
            <div className="bg-emerald-500 h-full rounded-full transition-all duration-75" style={{ width: `${progress.fiveG}%` }} />
          </div>
        </div>

        {/* Medium 2: USB 3.0 Flash Drive */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="font-bold text-sky-400 flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5" /> USB 3.0 Flash Drive (100 MB/s)
            </span>
            <span className="text-sky-400 font-bold">{progress.usb.toFixed(0)}% {progress.usb >= 100 && '✓ FINISHED (5.0s)'}</span>
          </div>
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
            <div className="bg-sky-500 h-full rounded-full transition-all duration-75" style={{ width: `${progress.usb}%` }} />
          </div>
        </div>

        {/* Medium 3: DVD-ROM */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="font-bold text-purple-400 flex items-center gap-1.5">
              <Disc className="w-3.5 h-3.5" /> DVD-ROM 16x (21 MB/s)
            </span>
            <span className="text-purple-400 font-bold">{progress.dvdrom.toFixed(0)}% {progress.dvdrom >= 100 && '✓ FINISHED (9.0s)'}</span>
          </div>
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
            <div className="bg-purple-500 h-full rounded-full transition-all duration-75" style={{ width: `${progress.dvdrom}%` }} />
          </div>
        </div>

        {/* Medium 4: CD-ROM 1x */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="font-bold text-amber-400 flex items-center gap-1.5">
              <Disc className="w-3.5 h-3.5" /> 1990s CD-ROM 1x (150 KB/s)
            </span>
            <span className="text-amber-400 font-bold">{progress.cdrom.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
            <div className="bg-amber-500 h-full rounded-full transition-all duration-75" style={{ width: `${progress.cdrom}%` }} />
          </div>
        </div>

        {/* Medium 5: 1.44MB Floppy Disk */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="font-bold text-rose-400 flex items-center gap-1.5">
              💾 1.44 MB Floppy Disk (1980s)
            </span>
            <span className="text-rose-400 font-bold">DISK FULL (Cannot fit 700MB)</span>
          </div>
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
            <div className="bg-rose-500 h-full rounded-full transition-all duration-75" style={{ width: `${progress.floppy}%` }} />
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-center justify-between gap-3">
        <span className="text-[11px] leading-relaxed">
          <strong>Historical Evolution:</strong> In the 1990s, multimedia was shipped on physical CD-ROMs because dial-up internet took days to download a single video. Today, cloud CDNs and 5G streaming make instant high-bandwidth multimedia accessible anywhere.
        </span>
      </div>
    </div>
  );
};
