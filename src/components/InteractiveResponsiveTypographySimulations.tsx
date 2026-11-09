'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  Sliders,
  Type,
  Layout,
  Eye,
  Grid,
  Info,
  CheckCircle2,
  AlertTriangle,
  ZoomIn,
  Sparkles,
  ArrowRight,
  Layers,
  Search,
  Menu,
  ChevronRight,
  Compass
} from 'lucide-react';
import { SlideData } from '../types/slide';

// ============================================================================
// 1. RESPONSIVE VIEWPORT REFLOW LAB (Mobile <-> Desktop)
// ============================================================================
export const ResponsiveViewportReflowLab: React.FC<{ slide?: SlideData }> = () => {
  const [viewportMode, setViewportMode] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [directionMode, setDirectionMode] = useState<'mobile-first' | 'desktop-first'>('mobile-first');
  const [customWidth, setCustomWidth] = useState<number>(375);

  const handleModeChange = (mode: 'mobile' | 'tablet' | 'desktop') => {
    setViewportMode(mode);
    if (mode === 'mobile') setCustomWidth(375);
    if (mode === 'tablet') setCustomWidth(768);
    if (mode === 'desktop') setCustomWidth(1200);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      {/* Title Bar */}
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-sky-400" />
          <span className="font-mono text-xs font-bold text-slate-200">
            Cross-Platform Responsive Viewport &amp; Reflow Lab
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            Width: {customWidth}px
          </span>
        </div>
      </div>

      {/* Control Knobs */}
      <div className="p-3 bg-slate-950/70 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Viewport Presets */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">Viewport:</span>
          <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
            <button
              onClick={() => handleModeChange('mobile')}
              className={`px-3 py-1 rounded text-[11px] font-semibold flex items-center gap-1.5 transition ${viewportMode === 'mobile' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <Smartphone className="w-3.5 h-3.5" /> Mobile (375px)
            </button>
            <button
              onClick={() => handleModeChange('tablet')}
              className={`px-3 py-1 rounded text-[11px] font-semibold flex items-center gap-1.5 transition ${viewportMode === 'tablet' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <Tablet className="w-3.5 h-3.5" /> Tablet (768px)
            </button>
            <button
              onClick={() => handleModeChange('desktop')}
              className={`px-3 py-1 rounded text-[11px] font-semibold flex items-center gap-1.5 transition ${viewportMode === 'desktop' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <Monitor className="w-3.5 h-3.5" /> Desktop (1200px)
            </button>
          </div>
        </div>

        {/* Direction Strategy */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">HCI Paradigm:</span>
          <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
            <button
              onClick={() => setDirectionMode('mobile-first')}
              className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold transition ${directionMode === 'mobile-first' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Mobile &rarr; Desktop (Progressive)
            </button>
            <button
              onClick={() => setDirectionMode('desktop-first')}
              className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold transition ${directionMode === 'desktop-first' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Desktop &rarr; Mobile (Degradation)
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Device Frame Container */}
      <div className="p-4 bg-slate-950 flex flex-col items-center justify-center min-h-[360px] overflow-x-auto">
        <div
          style={{ width: `${Math.min(customWidth, 900)}px` }}
          className="bg-white rounded-2xl border-4 border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 text-slate-800 flex flex-col"
        >
          {/* Simulated App Header */}
          <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="font-extrabold text-xs tracking-tight">CampusVibe Portal</span>
            </div>
            {viewportMode === 'mobile' ? (
              <Menu className="w-4 h-4 text-slate-400" />
            ) : (
              <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-300">
                <span className="text-white">Feed</span>
                <span className="hover:text-white">Courses</span>
                <span className="hover:text-white">Messages</span>
                <button className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-bold">Sign In</button>
              </div>
            )}
          </div>

          {/* Simulated Body Content */}
          <div className="p-4 flex gap-4">
            {/* Desktop Left Sidebar */}
            {viewportMode === 'desktop' && (
              <aside className="w-48 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 shrink-0">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">Navigation</span>
                <div className="space-y-1 text-xs font-semibold text-slate-700">
                  <div className="p-1.5 rounded bg-indigo-50 text-indigo-700 font-bold">&bull; Main Feed</div>
                  <div className="p-1.5 rounded hover:bg-slate-100">&bull; Announcements</div>
                  <div className="p-1.5 rounded hover:bg-slate-100">&bull; Faculty Directory</div>
                  <div className="p-1.5 rounded hover:bg-slate-100">&bull; Academic Calendar</div>
                </div>
              </aside>
            )}

            {/* Main Content Area */}
            <div className="flex-1 space-y-3">
              <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {viewportMode === 'mobile' ? 'Mobile Feed (1 Column)' : viewportMode === 'tablet' ? 'Tablet Feed (2 Columns)' : 'Desktop Dashboard (3 Columns + Sidebar)'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {directionMode === 'mobile-first'
                      ? 'Mobile-First: 100% of essential content loaded; layout gracefully expands to fill wider viewports.'
                      : 'Desktop-First: Complex multi-column grid collapsed into single-column stack on compact screens.'}
                  </p>
                </div>
              </div>

              {/* Dynamic Content Grid */}
              <div className={`grid gap-3 ${viewportMode === 'mobile' ? 'grid-cols-1' : viewportMode === 'tablet' ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-3'}`}>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-indigo-600">Lecture Notice</span>
                  <h4 className="font-bold text-xs text-slate-900">IT-HCI1: Mobile Ergonomics</h4>
                  <p className="text-[11px] text-slate-600">Steven Hoober&apos;s Thumb Zone reachability and 48px touch targets.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-emerald-600">Assignment</span>
                  <h4 className="font-bold text-xs text-slate-900">Responsive Heuristic Audit</h4>
                  <p className="text-[11px] text-slate-600">Evaluate 16px font scaling and 8-point grid consistency.</p>
                </div>

                {viewportMode !== 'mobile' && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] font-bold uppercase text-purple-600">Lab Schedule</span>
                    <h4 className="font-bold text-xs text-slate-900">Arctic Fox Kotlin Lab</h4>
                    <p className="text-[11px] text-slate-600">Multi-screen Android intent routing without database.</p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <button className={`py-2 px-4 rounded-xl bg-indigo-600 text-white font-bold text-xs transition ${viewportMode === 'mobile' ? 'w-full h-12 text-sm flex items-center justify-center' : 'inline-block'}`}>
                  {viewportMode === 'mobile' ? 'Submit Lab Activity (48px Hitbox)' : 'Submit Lab Activity'}
                </button>
              </div>
            </div>
          </div>

          {/* Simulated Mobile Bottom Navigation Bar */}
          {viewportMode === 'mobile' && (
            <div className="bg-slate-900 border-t border-slate-800 px-6 py-2.5 flex items-center justify-between text-slate-400 text-[10px] font-mono">
              <span className="text-sky-400 font-bold">&bull; Feed</span>
              <span>&bull; Search</span>
              <span>&bull; Alerts</span>
              <span>&bull; Profile</span>
            </div>
          )}
        </div>
      </div>

      {/* Explanatory Footer */}
      <div className="p-3 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-300 font-mono flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {viewportMode === 'mobile'
            ? 'Mobile: Bottom navigation placed in Natural Thumb Zone &bull; 48px full-width tap target &bull; 0 horizontal scroll'
            : viewportMode === 'tablet'
            ? 'Tablet: 2-column card reflow &bull; Top app bar &bull; Generous reading margins'
            : 'Desktop: Persistent 240px sidebar &bull; Multi-column dashboard &bull; Hover state micro-interactions'}
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// 2. FONT HISTORY & MODULAR SCALE STUDIO (Why 16px?)
// ============================================================================
export const FontHistoryModularScaleStudio: React.FC<{ slide?: SlideData }> = () => {
  const [activeTab, setActiveTab] = useState<'history' | 'ios-zoom' | 'modular-scale'>('history');
  const [fontSizeInput, setFontSizeInput] = useState<number>(14);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [scaleRatio, setScaleRatio] = useState<number>(1.25); // Major Third

  const ratios = [
    { label: 'Major Second (1.125)', val: 1.125 },
    { label: 'Major Third (1.250)', val: 1.250 },
    { label: 'Perfect Fourth (1.333)', val: 1.333 },
    { label: 'Golden Ratio (1.618)', val: 1.618 }
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Type className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs font-bold text-slate-200">
            Typography Architecture: The History of 16px &amp; Modular Scales
          </span>
        </div>
        <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
          <button
            onClick={() => setActiveTab('history')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition ${activeTab === 'history' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Why 16px? (History)
          </button>
          <button
            onClick={() => setActiveTab('ios-zoom')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition ${activeTab === 'ios-zoom' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            iOS Auto-Zoom Penalty
          </button>
          <button
            onClick={() => setActiveTab('modular-scale')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition ${activeTab === 'modular-scale' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Modular Type Scale
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* TAB 1: HISTORY & MATH OF 16PX */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CRT Math Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">1993 NCSA Mosaic &amp; CRT Math</span>
                <h4 className="text-sm font-bold text-white">Why 16 Pixels Became the Global Standard</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  When Marc Andreessen and the NCSA Mosaic team created the graphical web browser in 1993, standard book typography used <strong>12pt Times Roman</strong> print.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 font-mono text-[11px] text-amber-300 space-y-1">
                  <div>1 Point (pt) = 1/72 inch</div>
                  <div>12 Points = 12/72 = 1/6 inch</div>
                  <div>Standard 1990s CRT Monitors = 96 Dots Per Inch (DPI)</div>
                  <div className="text-emerald-400 font-bold pt-1 border-t border-slate-800">
                    &rarr; (1/6 inch) &times; 96 DPI = Exactly 16 Pixels (px)
                  </div>
                </div>
                <p className="text-[11px] text-slate-400">
                  Thus, <code>16px = 1rem = 100%</code> was hardcoded into Netscape Navigator, Internet Explorer, Chrome, Safari, and Firefox as the eternal browser default.
                </p>
              </div>

              {/* Visual Angle Distance Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                <span className="text-[10px] font-mono font-bold text-sky-400 uppercase">Ergonomics &amp; Human Vision</span>
                <h4 className="text-sm font-bold text-white">Visual Angle: Book (12&quot;) vs Screen (24&quot;)</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  In ophthalmology and HCI ergonomics, legibility is governed by the <strong>visual angle</strong> subtended on the human retina, not physical ink size alone.
                </p>
                <div className="space-y-2 font-mono text-[11px]">
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between text-slate-300">
                    <span>Paper Book held at 12 to 14 inches:</span>
                    <span className="text-sky-300 font-bold">10pt &ndash; 12pt (0.3&deg; angle)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between text-slate-300">
                    <span>Desktop Screen viewed at 20 to 28 inches:</span>
                    <span className="text-emerald-300 font-bold">16px (0.3&deg; angle)</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Because computer monitors are situated twice as far from the human eye as handheld books, text must be physically larger on screen to project the exact same retinal image size!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: IOS ZOOM PENALTY */}
        {activeTab === 'ios-zoom' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">Apple WebKit Accessibility Enforcement</span>
                <h4 className="text-sm font-bold text-white">The iOS 16px Form Field Auto-Zoom Penalty</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  On mobile devices running iOS (iPhone Safari, Chrome for iOS), tapping into an <code>&lt;input&gt;</code> with a font size smaller than <strong>16px</strong> triggers an aggressive automated camera zoom. This causes broken layouts, horizontal overflow, and user disorientation.
                </p>
              </div>

              {/* Interactive Knob */}
              <div className="w-full md:w-56 bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between font-mono text-xs text-slate-300">
                  <span>Input Font Size:</span>
                  <span className="font-bold text-amber-400">{fontSizeInput}px</span>
                </div>
                <input
                  type="range"
                  min="11"
                  max="20"
                  value={fontSizeInput}
                  onChange={(e) => setFontSizeInput(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>11px</span>
                  <span className="text-emerald-400 font-bold">16px (Safe)</span>
                  <span>20px</span>
                </div>
              </div>
            </div>

            {/* Simulated Mobile Form Frame */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
              <div
                style={{
                  transform: isFocused && fontSizeInput < 16 ? 'scale(1.25)' : 'scale(1)',
                  transition: 'transform 0.25s ease-out'
                }}
                className="w-72 bg-white rounded-xl p-4 shadow-xl border border-slate-300 space-y-2 text-slate-800"
              >
                <label className="text-[11px] font-bold text-slate-700 block">Student Username:</label>
                <input
                  type="text"
                  placeholder="Tap to focus..."
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  style={{ fontSize: `${fontSizeInput}px` }}
                  className="w-full p-2 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span className="text-[10px] text-slate-400 block font-mono">Current Style: font-size: {fontSizeInput}px;</span>
              </div>

              <div className="mt-4 text-center">
                {fontSizeInput < 16 ? (
                  <div className="text-rose-400 font-mono text-xs flex items-center justify-center gap-1.5 font-bold">
                    <AlertTriangle className="w-4 h-4 text-rose-400 animate-bounce" />
                    <span>PENALTY TRIGGERED: Input &lt; 16px! iOS Safari forcefully zooms camera to 125%, breaking layout!</span>
                  </div>
                ) : (
                  <div className="text-emerald-400 font-mono text-xs flex items-center justify-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>PERFECT HCI COMPLIANCE: Input &ge; 16px. Viewport remains perfectly stable at 100% scale.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MODULAR TYPE SCALE */}
        {activeTab === 'modular-scale' && (
          <div className="space-y-4">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">Select Musical Scale Ratio:</span>
              <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
                {ratios.map(r => (
                  <button
                    key={r.val}
                    onClick={() => setScaleRatio(r.val)}
                    className={`px-3 py-1 rounded text-[11px] font-mono font-bold transition ${scaleRatio === r.val ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Scale Ladder */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono">
              <div className="flex items-baseline justify-between border-b border-slate-800 pb-2">
                <span style={{ fontSize: `${(16 * Math.pow(scaleRatio, 3)).toFixed(1)}px` }} className="text-white font-extrabold font-sans">
                  H1 Hero Display Heading
                </span>
                <span className="text-indigo-400 text-xs font-bold">{(16 * Math.pow(scaleRatio, 3)).toFixed(1)}px (rem: {Math.pow(scaleRatio, 3).toFixed(2)})</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-slate-800 pb-2">
                <span style={{ fontSize: `${(16 * Math.pow(scaleRatio, 2)).toFixed(1)}px` }} className="text-white font-bold font-sans">
                  H2 Section Title
                </span>
                <span className="text-indigo-400 text-xs font-bold">{(16 * Math.pow(scaleRatio, 2)).toFixed(1)}px (rem: {Math.pow(scaleRatio, 2).toFixed(2)})</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-slate-800 pb-2">
                <span style={{ fontSize: `${(16 * scaleRatio).toFixed(1)}px` }} className="text-white font-semibold font-sans">
                  H3 Sub-Heading
                </span>
                <span className="text-indigo-400 text-xs font-bold">{(16 * scaleRatio).toFixed(1)}px (rem: {scaleRatio.toFixed(2)})</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-slate-800 pb-2">
                <span style={{ fontSize: '16px' }} className="text-slate-300 font-sans">
                  Body Default Text: Robert Bringhurst 45 to 75 characters optimal measure per line.
                </span>
                <span className="text-emerald-400 text-xs font-bold">16.0px (1.00rem baseline)</span>
              </div>

              <div className="flex items-baseline justify-between">
                <span style={{ fontSize: `${(16 / scaleRatio).toFixed(1)}px` }} className="text-slate-500 font-sans">
                  Caption / Microcopy / Status Badges
                </span>
                <span className="text-slate-400 text-xs font-bold">{(16 / scaleRatio).toFixed(1)}px</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 3. LAYOUT GRID, GESTALT & EYE-TRACKING INSPECTOR
// ============================================================================
export const LayoutGridGestaltInspector: React.FC<{ slide?: SlideData }> = () => {
  const [activeTab, setActiveTab] = useState<'8pt-grid' | 'eye-tracking' | 'gestalt'>('8pt-grid');
  const [eyePattern, setEyePattern] = useState<'f-pattern' | 'z-pattern'>('f-pattern');

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans text-xs">
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Grid className="w-4 h-4 text-purple-400" />
          <span className="font-mono text-xs font-bold text-slate-200">
            HCI Layout Architecture: 8-Point Grid, Eye-Tracking &amp; Gestalt Laws
          </span>
        </div>
        <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
          <button
            onClick={() => setActiveTab('8pt-grid')}
            className={`px-3 py-1 rounded text-[11px] font-semibold transition ${activeTab === '8pt-grid' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            The 8-Point Grid
          </button>
          <button
            onClick={() => setActiveTab('eye-tracking')}
            className={`px-3 py-1 rounded text-[11px] font-semibold transition ${activeTab === 'eye-tracking' ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            F vs Z Pattern
          </button>
          <button
            onClick={() => setActiveTab('gestalt')}
            className={`px-3 py-1 rounded text-[11px] font-semibold transition ${activeTab === 'gestalt' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Gestalt Laws
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* TAB 1: 8-POINT GRID & SUB-PIXEL RENDERING */}
        {activeTab === '8pt-grid' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">Hardware Divisibility</span>
                <h4 className="text-sm font-bold text-white">Why 8pt? Why Not 7pt or 10pt?</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Virtually every modern display resolution (1920&times;1080, 1440&times;900, 1280&times;720, 360&times;800) is evenly divisible by <strong>8</strong>.
                </p>
                <div className="space-y-1.5 font-mono text-[11px] pt-1">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-emerald-300">
                    &bull; 8pt &times; 1.5x Scaling = <strong>12.0px</strong> (Crisp, sharp pixel-aligned boundary!)
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-rose-300">
                    &bull; 7pt &times; 1.5x Scaling = <strong>10.5px</strong> (Half-pixel rendering &rarr; Fuzzy anti-aliasing blur!)
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase">Universal Spacing Ladder</span>
                <h4 className="text-sm font-bold text-white">Consistent Rhythm Across Micro &amp; Macro Layouts</h4>
                <div className="grid grid-cols-2 gap-2 text-slate-300 font-mono text-[11px]">
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">4px: Micro-icon padding</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">8px: Compact card gap</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">16px: Standard container pad</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">24px: Related group spacing</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">32px: Section margins</div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">48px: Touch target height</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EYE-TRACKING F VS Z PATTERNS */}
        {activeTab === 'eye-tracking' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">Select Eye-Tracking Gaze Model:</span>
              <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
                <button
                  onClick={() => setEyePattern('f-pattern')}
                  className={`px-3 py-1 rounded text-[11px] font-bold transition ${eyePattern === 'f-pattern' ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                >
                  F-Pattern (Text-Heavy Scanning)
                </button>
                <button
                  onClick={() => setEyePattern('z-pattern')}
                  className={`px-3 py-1 rounded text-[11px] font-bold transition ${eyePattern === 'z-pattern' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                >
                  Z-Pattern (Landing Pages &amp; Ads)
                </button>
              </div>
            </div>

            {/* Wireframe with Eye-tracking Overlay */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 relative overflow-hidden text-slate-800">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 space-y-3 relative">
                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-extrabold text-sm text-indigo-700">1. BRAND LOGO</span>
                  <div className="flex gap-2 text-xs font-semibold text-slate-500">
                    <span>2. Navigation Link</span>
                    <span className="text-indigo-600 font-bold">3. Call to Action</span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-sm text-slate-900">4. Front-Loaded Headline Keywords</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    5. Users scan the first 2 words of a sentence. If relevance is not detected immediately, their gaze drops vertically down the left edge rather than reading full horizontal paragraphs.
                  </p>
                </div>

                {/* Gaze Overlay Indicator */}
                <div className="p-2 rounded bg-indigo-50 border border-indigo-200 text-[11px] font-mono text-indigo-800 font-bold">
                  {eyePattern === 'f-pattern'
                    ? 'NN/g F-Pattern Gaze: Horizontal Sweep 1 (Top Bar) &rarr; Horizontal Sweep 2 (Subhead) &rarr; Vertical Downward Scan (Left Margin).'
                    : 'Z-Pattern Gaze: Top-Left (Logo) &rarr; Top-Right (Nav) &rarr; Diagonal Drop &rarr; Bottom-Right (Primary Conversion CTA).'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GESTALT PRINCIPLES */}
        {activeTab === 'gestalt' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase">1. Law of Proximity</span>
              <h4 className="font-bold text-xs text-white">Distance Communicates Relation</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Elements placed close together are instinctively perceived as a single conceptual group. A form label should sit 4px from its input, but 24px from the next field!
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">2. Law of Common Region</span>
              <h4 className="font-bold text-xs text-white">Container Bounding Boxes</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Placing items inside a visible border or background card unites disparate text, icons, and buttons into an unambiguous functional object (card-based UI architecture).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">3. Law of Similarity</span>
              <h4 className="font-bold text-xs text-white">Uniform Visual Affordances</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Elements sharing the same color, shape, and typography are assumed to perform the same action. All primary destructive buttons must share the same visual signal.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

