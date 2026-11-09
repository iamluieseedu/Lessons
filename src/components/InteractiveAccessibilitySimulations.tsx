'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SlideData } from '@/types/slide';
import { 
  Sparkles, 
  Eye, 
  EyeOff, 
  Sliders, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Check, 
  X, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Smartphone, 
  MousePointer, 
  Hand, 
  Keyboard, 
  ShieldCheck, 
  AlertCircle, 
  Zap, 
  Play, 
  Pause, 
  Terminal, 
  Layers, 
  Maximize2, 
  Type, 
  HelpCircle,
  Activity,
  ArrowRight,
  Info
} from 'lucide-react';

// ============================================================================
// SIMULATION 1: WCAG 2.1 CONTRAST RATIO MATRIX & LUMINANCE CALCULATOR
// ============================================================================
export const WcagContrastMatrixSimulator: React.FC<{ slide: SlideData }> = () => {
  const [fgColor, setFgColor] = useState<string>('#64748b'); // Slate-500
  const [bgColor, setBgColor] = useState<string>('#ffffff'); // White
  const [fontSize, setFontSize] = useState<number>(16);
  const [isBold, setIsBold] = useState<boolean>(false);

  // Helper: Hex to RGB
  const hexToRgb = (hex: string) => {
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map(c => c + c).join('');
    }
    const num = parseInt(cleanHex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  };

  // Helper: Relative Luminance (WCAG formula)
  const getLuminance = (hex: string) => {
    try {
      const { r, g, b } = hexToRgb(hex);
      const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    } catch {
      return 0.5;
    }
  };

  // Helper: Calculate Contrast Ratio
  const lum1 = getLuminance(fgColor);
  const lum2 = getLuminance(bgColor);
  const ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
  const roundedRatio = Math.round(ratio * 100) / 100;

  // WCAG Compliance Criteria
  const isLargeText = fontSize >= 24 || (fontSize >= 18 && isBold);
  const passAANormal = ratio >= 4.5;
  const passAALarge = ratio >= 3.0;
  const passAAANormal = ratio >= 7.0;
  const passAAALarge = ratio >= 4.5;
  const passUIComponents = ratio >= 3.0;

  // Preset Palettes
  const presets = [
    { label: 'Failing Gray on White', fg: '#94a3b8', bg: '#ffffff', tag: 'Fail (2.3:1)' },
    { label: 'Subtle Slate on White', fg: '#64748b', bg: '#ffffff', tag: 'Borderline (4.6:1)' },
    { label: 'High Contrast Ink', fg: '#0f172a', bg: '#ffffff', tag: 'AAA Pass (16.2:1)' },
    { label: 'Golden Yellow on White', fg: '#eab308', bg: '#ffffff', tag: 'Severe Fail (1.9:1)' },
    { label: 'Emerald on Dark Slate', fg: '#34d399', bg: '#090d16', tag: 'AAA Pass (10.8:1)' },
    { label: 'Accessible Primary Blue', fg: '#ffffff', bg: '#2563eb', tag: 'AA Pass (4.6:1)' },
  ];

  // Auto-Fix function to adjust foreground lightness to pass 4.5:1
  const handleAutoFix = () => {
    const bgLum = getLuminance(bgColor);
    if (bgLum > 0.5) {
      setFgColor('#0f172a'); // Pick dark ink
    } else {
      setFgColor('#ffffff'); // Pick white
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 text-slate-100 font-sans">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>WCAG 2.1 Luminance Contrast Analyzer</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Level AA / AAA
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Interactive mathematical test of text readability under international accessibility standards.
            </p>
          </div>
        </div>

        {/* Live Ratio Pill */}
        <div className={`px-4 py-1.5 rounded-xl border flex items-center gap-2 font-mono text-sm font-bold shadow-lg ${
          passAANormal 
            ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300' 
            : passAALarge 
              ? 'bg-amber-950/80 border-amber-500/50 text-amber-300' 
              : 'bg-rose-950/80 border-rose-500/50 text-rose-300'
        }`}>
          <span className="text-xs text-slate-400">Ratio:</span>
          <span className="text-base">{roundedRatio.toFixed(2)}:1</span>
        </div>
      </div>

      {/* Main Grid: Controls Left, Live Scoreboard Center, Preview Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto pt-3">
        {/* Left Column: Controls & Presets (4 cols) */}
        <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Color Controls</span>
            <button 
              onClick={handleAutoFix}
              className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition"
            >
              <Sparkles className="w-3 h-3" />
              <span>Auto-Fix for AA</span>
            </button>
          </div>

          <div className="space-y-3">
            {/* Foreground Input */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-2">
                <input 
                  type="color" 
                  value={fgColor} 
                  onChange={(e) => setFgColor(e.target.value)}
                  className="w-7 h-7 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <div>
                  <div className="text-[11px] font-semibold text-slate-300">Foreground (Text)</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{fgColor}</div>
                </div>
              </div>
              <input 
                type="text" 
                value={fgColor} 
                onChange={(e) => setFgColor(e.target.value)}
                className="w-20 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-white text-center"
              />
            </div>

            {/* Background Input */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-2">
                <input 
                  type="color" 
                  value={bgColor} 
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-7 h-7 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <div>
                  <div className="text-[11px] font-semibold text-slate-300">Background (Canvas)</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{bgColor}</div>
                </div>
              </div>
              <input 
                type="text" 
                value={bgColor} 
                onChange={(e) => setBgColor(e.target.value)}
                className="w-20 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-white text-center"
              />
            </div>
          </div>

          {/* Quick Presets */}
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1.5">Common Studio Presets:</span>
            <div className="grid grid-cols-2 gap-1.5">
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => { setFgColor(p.fg); setBgColor(p.bg); }}
                  className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-left transition flex flex-col justify-between"
                >
                  <span className="text-[11px] font-medium text-slate-300 truncate">{p.label}</span>
                  <span className="text-[9px] font-mono text-slate-500 mt-0.5">{p.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Typography Adjuster */}
          <div className="pt-1 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-400 text-[11px]">Size: <strong>{fontSize}px</strong></span>
            <input 
              type="range" 
              min={12} 
              max={36} 
              value={fontSize} 
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-28 accent-indigo-500"
            />
            <button
              onClick={() => setIsBold(!isBold)}
              className={`px-2 py-1 rounded text-[11px] font-bold border transition ${
                isBold ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
            >
              Bold
            </button>
          </div>
        </div>

        {/* Center Column: Live Compliance Badges (3 cols) */}
        <div className="lg:col-span-3 bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            WCAG 2.1 Scorecard
          </div>

          <div className="space-y-2.5 text-xs">
            {/* Normal Text AA */}
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-200">Normal Body Text</div>
                <div className="text-[10px] text-slate-500 font-mono">Requires &ge; 4.5:1 (AA)</div>
              </div>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono ${
                passAANormal ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
              }`}>
                {passAANormal ? 'PASS' : 'FAIL'}
              </span>
            </div>

            {/* Large Text AA */}
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-200">Large Heading (&ge;18pt)</div>
                <div className="text-[10px] text-slate-500 font-mono">Requires &ge; 3.0:1 (AA)</div>
              </div>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono ${
                passAALarge ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
              }`}>
                {passAALarge ? 'PASS' : 'FAIL'}
              </span>
            </div>

            {/* UI Components & Icons */}
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-200">UI Controls &amp; Borders</div>
                <div className="text-[10px] text-slate-500 font-mono">Requires &ge; 3.0:1 (AA)</div>
              </div>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono ${
                passUIComponents ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
              }`}>
                {passUIComponents ? 'PASS' : 'FAIL'}
              </span>
            </div>

            {/* Enhanced AAA */}
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-200">Enhanced Contrast (AAA)</div>
                <div className="text-[10px] text-slate-500 font-mono">Requires &ge; 7.0:1 (AAA)</div>
              </div>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono ${
                passAAANormal ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-slate-800 text-slate-500'
              }`}>
                {passAAANormal ? 'AAA PASS' : 'NO'}
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-900/50 text-[11px] text-indigo-300">
            <strong>Designer Rule:</strong> Subtle low-contrast gray text looks trendy on retina screens, but completely fades away for 250M+ low-vision users.
          </div>
        </div>

        {/* Right Column: Live Render Canvas (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Real-Time Interface Simulation Preview
          </div>

          {/* Canvas Box using fg and bg colors directly */}
          <div 
            className="flex-grow rounded-xl p-5 border border-slate-700/60 shadow-inner flex flex-col justify-between transition-colors min-h-[220px]"
            style={{ backgroundColor: bgColor, color: fgColor }}
          >
            <div>
              <span 
                className="text-[10px] uppercase font-mono tracking-wider font-bold block mb-1 opacity-80"
                style={{ color: fgColor }}
              >
                Category &bull; Interactive Systems
              </span>
              <h4 
                className="leading-tight mb-2 tracking-tight"
                style={{ 
                  fontSize: `${Math.max(fontSize + 6, 20)}px`, 
                  fontWeight: isBold ? 800 : 700, 
                  color: fgColor 
                }}
              >
                Human-Centered Inclusivity
              </h4>
              <p 
                className="leading-relaxed mb-3"
                style={{ 
                  fontSize: `${fontSize}px`, 
                  fontWeight: isBold ? 600 : 400,
                  color: fgColor 
                }}
              >
                Interactive digital media must remain fully readable across varied ambient lighting, display brightness levels, and visual acuity ranges.
              </p>
            </div>

            {/* Mock button inside preview */}
            <div className="pt-2 flex items-center gap-2">
              <button 
                type="button"
                className="px-4 py-2 rounded-lg font-bold text-xs shadow-md transition"
                style={{ 
                  backgroundColor: fgColor, 
                  color: bgColor 
                }}
              >
                Accessible Action Target
              </button>
              <span 
                className="text-[11px] font-mono opacity-70"
                style={{ color: fgColor }}
              >
                Focal UI Anchor
              </span>
            </div>
          </div>

          <div className="mt-2 text-[10px] text-slate-500 font-mono text-center">
            Calculated via relative luminance CIE 1931: L = 0.2126R + 0.7152G + 0.0722B
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 2: COLOR BLINDNESS LENS & MULTIMODAL REDUNDANCY FIXER
// ============================================================================
export const ColorBlindnessLensSimulator: React.FC<{ slide: SlideData }> = () => {
  const [lensMode, setLensMode] = useState<'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia'>('normal');
  const [useMultimodalFix, setUseMultimodalFix] = useState<boolean>(false);

  // SVG Filter definitions for authentic color-blindness simulation matrices
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 text-slate-100 font-sans">
      {/* Hidden SVG matrix filters */}
      <svg className="hidden">
        <defs>
          {/* Protanopia (Red-Blind) */}
          <filter id="protanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.567, 0.433, 0, 0, 0
                      0.558, 0.442, 0, 0, 0
                      0, 0.242, 0.758, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          {/* Deuteranopia (Green-Blind) */}
          <filter id="deuteranopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.625, 0.375, 0, 0, 0
                      0.7, 0.3, 0, 0, 0
                      0, 0.3, 0.7, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          {/* Tritanopia (Blue-Blind) */}
          <filter id="tritanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.95, 0.05, 0, 0, 0
                      0, 0.433, 0.567, 0, 0
                      0, 0.475, 0.525, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          {/* Achromatopsia (Monochromacy) */}
          <filter id="achromatopsia-filter">
            <feColorMatrix
              type="matrix"
              values="0.299, 0.587, 0.114, 0, 0
                      0.299, 0.587, 0.114, 0, 0
                      0.299, 0.587, 0.114, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Color Vision Deficiency (CVD) Simulation Lens</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                1 in 12 Men &bull; 1 in 200 Women
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Observe how critical UI signals break when designers rely solely on color, and how multimodal redundancy fixes it.
            </p>
          </div>
        </div>

        {/* Multimodal Fix Toggle */}
        <button
          onClick={() => setUseMultimodalFix(!useMultimodalFix)}
          className={`px-3.5 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition shadow-lg ${
            useMultimodalFix 
              ? 'bg-emerald-600 border-emerald-400 text-white' 
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span>Multimodal Redundancy: <strong>{useMultimodalFix ? 'ACTIVE (Icon + Text)' : 'OFF (Color Only)'}</strong></span>
        </button>
      </div>

      {/* CVD Filter Switcher Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-3">
        {[
          { id: 'normal', label: 'Trichromat (Normal)', desc: 'Full Color Spectrum' },
          { id: 'protanopia', label: 'Protanopia (Red-Blind)', desc: '1% of males (No L-cones)' },
          { id: 'deuteranopia', label: 'Deuteranopia (Green-Blind)', desc: '6% of males (No M-cones)' },
          { id: 'tritanopia', label: 'Tritanopia (Blue-Blind)', desc: 'Rare blue/yellow deficiency' },
          { id: 'achromatopsia', label: 'Achromatopsia', desc: 'Complete Color Absence' }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setLensMode(item.id as any)}
            className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
              lensMode === item.id 
                ? 'bg-indigo-600/30 border-indigo-400 text-white ring-1 ring-indigo-400/50 shadow-md' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
            }`}
          >
            <span className="text-xs font-bold text-white">{item.label}</span>
            <span className="text-[10px] text-slate-400 mt-1">{item.desc}</span>
          </button>
        ))}
      </div>

      {/* Filtered Interactive Product Canvas */}
      <div 
        className="my-3 flex-grow rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-5 transition-all overflow-hidden relative shadow-2xl"
        style={{
          filter: lensMode === 'protanopia' ? 'url(#protanopia-filter)' :
                  lensMode === 'deuteranopia' ? 'url(#deuteranopia-filter)' :
                  lensMode === 'tritanopia' ? 'url(#tritanopia-filter)' :
                  lensMode === 'achromatopsia' ? 'url(#achromatopsia-filter)' : 'none'
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Header of Mock Dashboard */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400">Media System Monitor</span>
              <h4 className="text-base font-bold text-white">Live Asset Pipeline &amp; Server Cluster</h4>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300">
              Node #MD1-ASIA
            </span>
          </div>

          {/* 3 Status Indicator Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Tile 1: Success / Active (Green) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">Video Transcoder</span>
                {/* Status Indicator */}
                <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                  useMultimodalFix ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-emerald-500 text-slate-950'
                }`}>
                  {useMultimodalFix && <CheckCircle2 className="w-3.5 h-3.5" />}
                  <span>{useMultimodalFix ? 'Operational' : ' '}</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">All 1080p and 4K adaptive video bitrates compiling smoothly.</p>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-full" />
              </div>
            </div>

            {/* Tile 2: Warning / Capacity (Amber) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">CDN Edge Cache</span>
                {/* Status Indicator */}
                <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                  useMultimodalFix ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-amber-500 text-slate-950'
                }`}>
                  {useMultimodalFix && <AlertTriangle className="w-3.5 h-3.5" />}
                  <span>{useMultimodalFix ? 'High Load (89%)' : ' '}</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">Bandwidth throughput peaking near maximum capacity threshold.</p>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[89%]" />
              </div>
            </div>

            {/* Tile 3: Critical Error (Red) */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">Database Replica</span>
                {/* Status Indicator */}
                <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                  useMultimodalFix ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' : 'bg-rose-500 text-white'
                }`}>
                  {useMultimodalFix && <XCircle className="w-3.5 h-3.5" />}
                  <span>{useMultimodalFix ? 'Cluster Offline' : ' '}</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">Connection timeout during high-frequency asset indexing.</p>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 w-[20%]" />
              </div>
            </div>
          </div>

          {/* Form with Error State */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-slate-200">User Asset Upload Authorization</div>
              <div className="text-[11px] text-slate-400">
                {useMultimodalFix 
                  ? 'Input highlighted with red stroke, exclamation icon, and explicit error message: "File exceeds 50MB quota."' 
                  : 'Input is only marked with a thin red outline—invisible to green/red-blind students!'}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <input 
                  type="text" 
                  readOnly 
                  value="student_final_render.mov (142MB)" 
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border text-slate-300 ${
                    useMultimodalFix ? 'border-rose-500 pr-8' : 'border-rose-500'
                  }`}
                />
                {useMultimodalFix && (
                  <AlertCircle className="w-4 h-4 text-rose-400 absolute right-2.5 top-2" />
                )}
              </div>
              <button 
                type="button"
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white border border-slate-700"
              >
                Re-upload
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Educational Callout */}
      <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-purple-400 shrink-0" />
          <span>
            {lensMode === 'normal' 
              ? 'Switch to Protanopia or Deuteranopia above. Notice how Green and Red badges look identical when "Multimodal" is OFF!'
              : 'With Multimodal Redundancy ACTIVE, the interface remains 100% understandable even in pure grayscale (Achromatopsia)!'}
          </span>
        </div>
        <span className="font-mono text-[10px] text-indigo-400 hidden sm:inline">WCAG 1.4.1: Use of Color</span>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 3: TOUCH TARGET & FITTS'S LAW HITBOX TESTER
// ============================================================================
export const TouchTargetHitboxLab: React.FC<{ slide: SlideData }> = () => {
  const [targetMode, setTargetMode] = useState<'bad_24px' | 'good_48px'>('bad_24px');
  const [activeTargetIndex, setActiveTargetIndex] = useState<number>(0);
  const [score, setScore] = useState<{ hits: number; misses: number }>({ hits: 0, misses: 0 });
  const [reactionLog, setReactionLog] = useState<number[]>([]);
  const [lastClickTime, setLastClickTime] = useState<number>(Date.now());
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  const targets = [
    { label: 'Save', icon: Check },
    { label: 'Delete', icon: X },
    { label: 'Mute', icon: VolumeX },
    { label: 'Share', icon: Zap },
    { label: 'Settings', icon: Sliders },
    { label: 'Expand', icon: Maximize2 },
  ];

  const handleContainerClick = (e: React.MouseEvent) => {
    // Registered a miss
    setScore(prev => ({ ...prev, misses: prev.misses + 1 }));
    setFeedbackToast('❌ Miss! Click landed outside active touch target.');
    setTimeout(() => setFeedbackToast(null), 1200);
  };

  const handleTargetClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    if (index === activeTargetIndex) {
      const now = Date.now();
      const elapsed = now - lastClickTime;
      setReactionLog(prev => [...prev.slice(-4), elapsed]);
      setLastClickTime(now);

      setScore(prev => ({ ...prev, hits: prev.hits + 1 }));
      setFeedbackToast('🎯 Direct Hit! Accurate touch registration.');
      setTimeout(() => setFeedbackToast(null), 1000);

      // Pick next random target
      let nextIndex = Math.floor(Math.random() * targets.length);
      while (nextIndex === activeTargetIndex && targets.length > 1) {
        nextIndex = Math.floor(Math.random() * targets.length);
      }
      setActiveTargetIndex(nextIndex);
    } else {
      setScore(prev => ({ ...prev, misses: prev.misses + 1 }));
      setFeedbackToast('⚠️ Tapped wrong button! Motor dexterity friction.');
      setTimeout(() => setFeedbackToast(null), 1200);
    }
  };

  const totalClicks = score.hits + score.misses;
  const accuracy = totalClicks > 0 ? Math.round((score.hits / totalClicks) * 100) : 100;
  const avgReaction = reactionLog.length > 0 ? Math.round(reactionLog.reduce((a, b) => a + b, 0) / reactionLog.length) : 0;

  const handleReset = () => {
    setScore({ hits: 0, misses: 0 });
    setReactionLog([]);
    setLastClickTime(Date.now());
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 text-slate-100 font-sans">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Hand className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Fitts&apos;s Law Touch Target &amp; Hitbox Lab</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                WCAG 2.5.5 / 2.5.8 (48&times;48px)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Test how button dimensions and hit padding impact motor dexterity, tremors, and smartphone tap accuracy.
            </p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => { setTargetMode('bad_24px'); handleReset(); }}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
              targetMode === 'bad_24px' 
                ? 'bg-rose-600 text-white shadow' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Poor (24&times;24px Micro-Targets)
          </button>
          <button
            onClick={() => { setTargetMode('good_48px'); handleReset(); }}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
              targetMode === 'good_48px' 
                ? 'bg-emerald-600 text-white shadow' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            WCAG Compliant (48&times;48px Hitbox)
          </button>
        </div>
      </div>

      {/* Main Testing Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto pt-3">
        {/* Left Stats Console (4 cols) */}
        <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Motor Accuracy Telemetry
            </span>
            <button 
              onClick={handleReset}
              className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Hits</span>
              <span className="text-2xl font-bold font-mono text-emerald-400">{score.hits}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Missed Clicks</span>
              <span className="text-2xl font-bold font-mono text-rose-400">{score.misses}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Accuracy</span>
              <span className={`text-2xl font-bold font-mono ${accuracy >= 80 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {accuracy}%
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Avg Latency</span>
              <span className="text-2xl font-bold font-mono text-indigo-400">
                {avgReaction > 0 ? `${avgReaction}ms` : '--'}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>Fitts&apos;s Law Formula: MT = a + b &times; log₂(2D / W)</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Target Acquisition Time decreases exponentially as Target Width (<strong>W</strong>) increases. Micro 20px targets create severe motor friction on touchscreen devices.
            </p>
          </div>
        </div>

        {/* Right Interactive Device Arena (8 cols) */}
        <div 
          onClick={handleContainerClick}
          className="lg:col-span-8 bg-slate-950 rounded-2xl p-6 border border-slate-800 relative cursor-crosshair flex flex-col justify-between min-h-[300px] select-none overflow-hidden group shadow-2xl"
        >
          {/* Target Practice Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Mission: Tap the active flashing button: <strong>&ldquo;{targets[activeTargetIndex].label}&rdquo;</strong></span>
            </div>
            <span className="font-mono text-[10px] bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              {targetMode === 'bad_24px' ? 'Hitbox: 24×24px (No Padding)' : 'Hitbox: 48×48px (Generous Padding)'}
            </span>
          </div>

          {/* Interactive Button Array */}
          <div className="flex flex-wrap items-center justify-center gap-4 my-auto py-6">
            {targets.map((tgt, idx) => {
              const Icon = tgt.icon;
              const isActive = idx === activeTargetIndex;

              return (
                <div key={idx} className="relative flex flex-col items-center">
                  <button
                    type="button"
                    onClick={(e) => handleTargetClick(e, idx)}
                    className={`transition-all flex items-center justify-center font-bold ${
                      targetMode === 'bad_24px'
                        ? 'w-6 h-6 rounded text-[10px] border border-slate-700 m-0.5' // Cramped 24px button
                        : 'w-12 h-12 rounded-xl text-xs border border-slate-600 shadow-md p-3' // Accessible 48px button
                    } ${
                      isActive 
                        ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-500/30 border-amber-400 scale-105 animate-pulse' 
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                    title={tgt.label}
                  >
                    <Icon className={targetMode === 'bad_24px' ? 'w-3 h-3' : 'w-5 h-5'} />
                  </button>
                  <span className="text-[10px] text-slate-500 font-mono mt-1 pointer-events-none">
                    {tgt.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Feedback Toast */}
          <div className="h-6 flex items-center justify-center pointer-events-none">
            {feedbackToast && (
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-200 shadow-lg animate-bounce">
                {feedbackToast}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 4: PREFERS-REDUCED-MOTION & VESTIBULAR SENSITIVITY STUDIO
// ============================================================================
export const PrefersReducedMotionStudio: React.FC<{ slide: SlideData }> = () => {
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 text-slate-100 font-sans">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Vestibular Health &amp; Prefers-Reduced-Motion Studio</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                WCAG 2.3.3 (Animation from Interactions)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Understand how aggressive parallax, zooming, and continuous spins trigger vestibular motion sickness.
            </p>
          </div>
        </div>

        {/* Reduced Motion Toggle */}
        <button
          onClick={() => setReduceMotion(!reduceMotion)}
          className={`px-4 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition shadow-lg ${
            reduceMotion 
              ? 'bg-emerald-600 border-emerald-400 text-white' 
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
          }`}
        >
          <Zap className="w-4 h-4 text-cyan-300" />
          <span>@media (prefers-reduced-motion): <strong>{reduceMotion ? 'REDUCE (Safe Fades)' : 'NO-PREFERENCE (High Motion)'}</strong></span>
        </button>
      </div>

      {/* Interactive Demonstration Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto pt-3">
        {/* Card 1: 3D Spin vs Static Fade */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between items-center text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Continuous Rotation Loader
          </span>

          <div className="relative w-24 h-24 flex items-center justify-center">
            <div 
              className={`w-20 h-20 rounded-2xl border-4 border-dashed border-cyan-400/80 ${
                reduceMotion 
                  ? 'opacity-80 transition-opacity' 
                  : isRotating ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '3s' }}
            />
            <div className="absolute text-[11px] font-mono font-bold text-cyan-300">
              {reduceMotion ? 'Static' : 'Spinning'}
            </div>
          </div>

          <p className="text-xs text-slate-400">
            {reduceMotion 
              ? '✅ Graceful fallback: Gentle opacity pulse prevents nausea for vestibular sufferers.'
              : '⚠️ Continuous 360° spinning can cause visual disorientation and vertigo.'}
          </p>
        </div>

        {/* Card 2: Aggressive Bounce vs Subtle Elevation */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between items-center text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Promotional CTA Beacon
          </span>

          <div className="relative h-24 flex items-center justify-center">
            <div 
              className={`px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-xs shadow-lg ${
                reduceMotion ? 'hover:brightness-110 transition-all' : 'animate-bounce'
              }`}
            >
              🎉 Enroll Now (Spring Effect)
            </div>
          </div>

          <p className="text-xs text-slate-400">
            {reduceMotion 
              ? '✅ Steady CTA with high-contrast text and clean hover highlight.'
              : '⚠️ Infinite bouncing buttons distract peripheral vision and break reading flow.'}
          </p>
        </div>

        {/* Card 3: Parallax Depth Card */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between items-center text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            3D Tilt / Parallax Hero Card
          </span>

          <div 
            className={`w-40 h-24 rounded-xl bg-slate-950 border border-slate-700 p-3 flex flex-col justify-between shadow-xl transition-all ${
              reduceMotion 
                ? 'transform-none' 
                : 'rotate-3 hover:-rotate-3 hover:scale-105'
            }`}
          >
            <div className="w-8 h-2 rounded bg-indigo-500" />
            <div className="space-y-1">
              <div className="w-full h-1.5 rounded bg-slate-800" />
              <div className="w-2/3 h-1.5 rounded bg-slate-800" />
            </div>
            <span className="text-[9px] font-mono text-slate-500">Parallax Plane</span>
          </div>

          <p className="text-xs text-slate-400">
            {reduceMotion 
              ? '✅ 2D stationary plane: Zero vestibular disorientation or migraine triggers.'
              : '⚠️ Multi-axis tilt simulations force the eye to constantly refocus.'}
          </p>
        </div>
      </div>

      {/* CSS Implementation Code Snippet */}
      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-slate-300">
            @media (prefers-reduced-motion: reduce) &#123; * &#123; animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; &#125; &#125;
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
          CSS Standard
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 5: SCREEN READER AUDIT & KEYBOARD FOCUS ANNOUNCER
// ============================================================================
export const ScreenReaderAnnouncerSimulator: React.FC<{ slide: SlideData }> = () => {
  const [activeElementIndex, setActiveElementIndex] = useState<number>(0);
  const [showFocusOutline, setShowFocusOutline] = useState<boolean>(true);
  const [speechEnabled, setSpeechEnabled] = useState<boolean>(true);
  const [speechLog, setSpeechLog] = useState<string[]>(['Screen reader initialized. Ready for keyboard navigation.']);
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  const interactiveElements = [
    {
      id: 'el-skip',
      type: 'Semantic Link',
      label: 'Skip to Main Content',
      aria: 'link, "Skip to Main Content"',
      accessible: true,
      hint: 'Allows keyboard users to bypass repetitive navigation bars.'
    },
    {
      id: 'el-bad-div',
      type: 'Inaccessible <div> Button',
      label: '🛒 (No Text)',
      aria: 'unlabelled text, group',
      accessible: false,
      hint: 'Div has no role="button", no tabindex="0", and no aria-label. Completely silent to screen readers!'
    },
    {
      id: 'el-good-btn',
      type: 'Accessible <button>',
      label: 'Checkout Cart (3 Items)',
      aria: 'button, "Checkout Cart (3 Items)"',
      accessible: true,
      hint: 'Native button provides keyboard focus, space/enter activation, and announces clear purpose.'
    },
    {
      id: 'el-accordion',
      type: 'ARIA State Accordion',
      label: 'Course Syllabus FAQ',
      aria: `button, "Course Syllabus FAQ", collapsed state: ${accordionOpen ? 'expanded' : 'collapsed'}`,
      accessible: true,
      hint: 'Uses aria-expanded to announce state changes to blind users.'
    },
    {
      id: 'el-bad-img',
      type: 'Image without Alt',
      label: 'Campus Photo (img_8921.jpg)',
      aria: 'graphic, "img_8921.jpg"',
      accessible: false,
      hint: 'Missing alt attribute causes screen readers to read obscure filenames.'
    }
  ];

  // Synthesize Speech
  const announce = (text: string) => {
    setSpeechLog(prev => [...prev.slice(-4), text]);
    if (speechEnabled && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.1;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleTabNext = () => {
    const nextIdx = (activeElementIndex + 1) % interactiveElements.length;
    setActiveElementIndex(nextIdx);
    const item = interactiveElements[nextIdx];
    announce(item.aria);
  };

  const handleTabPrev = () => {
    const prevIdx = (activeElementIndex - 1 + interactiveElements.length) % interactiveElements.length;
    setActiveElementIndex(prevIdx);
    const item = interactiveElements[prevIdx];
    announce(item.aria);
  };

  const handleActivate = () => {
    const current = interactiveElements[activeElementIndex];
    if (current.id === 'el-accordion') {
      const nextState = !accordionOpen;
      setAccordionOpen(nextState);
      announce(`Accordion toggled. State: ${nextState ? 'Expanded' : 'Collapsed'}`);
    } else {
      announce(`Activated ${current.label}`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 text-slate-100 font-sans">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Keyboard className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Screen Reader Speech Synthesizer &amp; Focus Tracker</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                WAI-ARIA &amp; WCAG 2.4.7
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Navigate with Tab keys and listen to how assistive technology interprets semantic HTML vs unlabelled tags.
            </p>
          </div>
        </div>

        {/* Focus Outline & Audio Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFocusOutline(!showFocusOutline)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition ${
              showFocusOutline 
                ? 'bg-indigo-600 border-indigo-400 text-white' 
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            :focus-visible Ring: <strong>{showFocusOutline ? 'ON' : 'OFF (outline:none)'}</strong>
          </button>

          <button
            onClick={() => setSpeechEnabled(!speechEnabled)}
            className={`p-2 rounded-xl border text-xs transition ${
              speechEnabled 
                ? 'bg-emerald-600/30 border-emerald-400 text-emerald-300' 
                : 'bg-slate-800 border-slate-700 text-slate-500'
            }`}
            title="Toggle Real Voice Speech Synthesis"
          >
            {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Grid: Mock UI on Left, Screen Reader Terminal on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto pt-3">
        {/* Mock UI Webpage (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-1 border-b border-slate-800">
            <span>Simulated Web Interface</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleTabPrev}
                className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px]"
              >
                Shift + Tab
              </button>
              <button
                onClick={handleTabNext}
                className="px-2 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-[11px]"
              >
                Tab &rarr;
              </button>
              <button
                onClick={handleActivate}
                className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-[11px]"
              >
                Enter
              </button>
            </div>
          </div>

          {/* Interactive Elements List */}
          <div className="space-y-2">
            {interactiveElements.map((item, idx) => {
              const isFocused = idx === activeElementIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveElementIndex(idx);
                    announce(item.aria);
                  }}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isFocused && showFocusOutline
                      ? 'ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900 bg-slate-850 border-indigo-400 shadow-lg'
                      : isFocused && !showFocusOutline
                        ? 'bg-slate-850 border-slate-700' // Invisible focus trap!
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{item.label}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        item.accessible ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">{item.hint}</p>
                  </div>

                  <div className="shrink-0 text-right">
                    {isFocused && (
                      <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">
                        Focused
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {!showFocusOutline && (
            <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-900/50 text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>With :focus-visible disabled (outline:none), keyboard users have zero visual indicator of where they are!</span>
            </div>
          )}
        </div>

        {/* Screen Reader Terminal Console (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between font-mono">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400">
                <Terminal className="w-4 h-4" />
                <span className="font-bold">Virtual Speech Announcer Log</span>
              </div>
              <span className="text-[10px] text-slate-500">Live Voice Output</span>
            </div>

            {/* Terminal Speech Feed */}
            <div className="space-y-2 pt-3 text-xs">
              {speechLog.map((log, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-300">
                  <span className="text-indigo-400 select-none">&gt;</span>
                  <span className={i === speechLog.length - 1 ? 'text-emerald-300 font-bold' : 'text-slate-400'}>
                    &ldquo;{log}&rdquo;
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-sans">
            <strong>Key Insight:</strong> Screen readers cannot read arbitrary CSS styles or unlabelled graphics. They rely strictly on the <em>Accessibility Tree</em> populated by Semantic HTML and ARIA.
          </div>
        </div>
      </div>
    </div>
  );
};
