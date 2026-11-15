'use client';

import React, { useState } from 'react';
import { SlideData } from '@/types/slide';
import { 
  Type, 
  Layers, 
  Sparkles, 
  Printer, 
  Monitor, 
  Sliders, 
  Eye, 
  EyeOff, 
  Copy, 
  Check, 
  ZoomIn, 
  Palette, 
  Info,
  Maximize2,
  FileCheck
} from 'lucide-react';

interface SimulatorProps {
  slide?: SlideData;
}

// ============================================================================
// SIMULATOR 1: TYPOGRAPHY & TEXT EFFECTS LAB (WEEK 14)
// ============================================================================
export const TypographyTextEffectsLab: React.FC<SimulatorProps> = ({ slide }) => {
  const [text, setText] = useState('DIGITAL IMAGING');
  const [fontFamily, setFontFamily] = useState<'Impact' | 'Cinzel' | 'Montserrat' | 'Playfair' | 'Courier'>('Impact');
  const [tracking, setTracking] = useState(4);
  const [fontSize, setFontSize] = useState(44);
  const [blendMode, setBlendMode] = useState<'normal' | 'multiply' | 'screen' | 'overlay' | 'color-dodge' | 'difference'>('overlay');
  const [preset, setPreset] = useState<'custom' | 'neon' | 'cinematic' | 'editorial' | 'chrome' | 'glitch'>('cinematic');
  
  // Layer Style toggles
  const [dropShadow, setDropShadow] = useState(true);
  const [bevelEmboss, setBevelEmboss] = useState(true);
  const [outerGlow, setOuterGlow] = useState(false);
  const [clippingMask, setClippingMask] = useState(false);
  const [stroke, setStroke] = useState(true);
  const [copied, setCopied] = useState(false);

  const applyPreset = (name: 'neon' | 'cinematic' | 'editorial' | 'chrome' | 'glitch') => {
    setPreset(name);
    if (name === 'neon') {
      setFontFamily('Montserrat');
      setTracking(8);
      setFontSize(42);
      setBlendMode('screen');
      setDropShadow(true);
      setOuterGlow(true);
      setBevelEmboss(false);
      setClippingMask(false);
      setStroke(true);
    } else if (name === 'cinematic') {
      setFontFamily('Cinzel');
      setTracking(12);
      setFontSize(40);
      setBlendMode('overlay');
      setDropShadow(true);
      setBevelEmboss(true);
      setOuterGlow(false);
      setClippingMask(false);
      setStroke(false);
    } else if (name === 'editorial') {
      setFontFamily('Playfair');
      setTracking(2);
      setFontSize(48);
      setBlendMode('normal');
      setDropShadow(false);
      setBevelEmboss(false);
      setOuterGlow(false);
      setClippingMask(true);
      setStroke(false);
    } else if (name === 'chrome') {
      setFontFamily('Impact');
      setTracking(3);
      setFontSize(46);
      setBlendMode('normal');
      setDropShadow(true);
      setBevelEmboss(true);
      setOuterGlow(true);
      setClippingMask(false);
      setStroke(true);
    } else if (name === 'glitch') {
      setFontFamily('Courier');
      setTracking(6);
      setFontSize(38);
      setBlendMode('difference');
      setDropShadow(true);
      setBevelEmboss(false);
      setOuterGlow(false);
      setClippingMask(false);
      setStroke(true);
    }
  };

  const getFontFamilyStyle = () => {
    switch (fontFamily) {
      case 'Cinzel': return 'font-serif tracking-widest';
      case 'Playfair': return 'font-serif italic';
      case 'Montserrat': return 'font-sans font-black';
      case 'Courier': return 'font-mono font-bold';
      default: return 'font-sans font-black uppercase';
    }
  };

  const getShadowStyle = () => {
    const shadows = [];
    if (dropShadow) shadows.push('0 8px 24px rgba(0,0,0,0.85)');
    if (outerGlow) shadows.push('0 0 20px #06b6d4, 0 0 40px #0891b2');
    if (bevelEmboss) shadows.push('inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.9)');
    if (preset === 'neon') shadows.push('0 0 10px #f43f5e, 0 0 30px #e11d48, 0 0 60px #be123c');
    return shadows.length > 0 ? shadows.join(', ') : 'none';
  };

  const copyCSS = () => {
    const css = `/* Photoshop Layer Style CSS Equivalent */
font-family: '${fontFamily}', sans-serif;
font-size: ${fontSize}px;
letter-spacing: ${tracking}px;
mix-blend-mode: ${blendMode};
text-shadow: ${getShadowStyle()};
${stroke ? '-webkit-text-stroke: 1px rgba(255,255,255,0.7);' : ''}
${clippingMask ? 'background: url("texture.jpg"); -webkit-background-clip: text; color: transparent;' : ''}`;
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 text-slate-100 flex flex-col justify-between shadow-2xl">
      {/* Studio Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
            <Type className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-lexend flex items-center gap-2">
              Typography & Text Effects Laboratory
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
                Photoshop FX Engine
              </span>
            </h4>
            <p className="text-[11px] text-slate-400 font-sans">
              Test typography principles, blend modes, tracking, and non-destructive layer styles live.
            </p>
          </div>
        </div>

        {/* Quick Style Presets */}
        <div className="hidden sm:flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button 
            onClick={() => applyPreset('cinematic')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${preset === 'cinematic' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
            🎬 Cinematic
          </button>
          <button 
            onClick={() => applyPreset('neon')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${preset === 'neon' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
            ⚡ Neon Glow
          </button>
          <button 
            onClick={() => applyPreset('editorial')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${preset === 'editorial' ? 'bg-rose-500 text-white' : 'text-slate-400 hover:text-white'}`}>
            📖 Editorial
          </button>
          <button 
            onClick={() => applyPreset('chrome')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${preset === 'chrome' ? 'bg-slate-300 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
            ✨ Chrome 3D
          </button>
          <button 
            onClick={() => applyPreset('glitch')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${preset === 'glitch' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
            👾 Glitch
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch mb-4">
        {/* Canvas Visual Output (Left 7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between min-h-[300px] shadow-inner group">
          {/* Simulated Image Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-60 group-hover:scale-105"
            style={{
              backgroundImage: preset === 'neon'
                ? 'radial-gradient(circle at center, #1e1b4b 0%, #030712 100%)'
                : preset === 'editorial'
                ? 'radial-gradient(circle at center, #451a03 0%, #0c0a09 100%)'
                : 'radial-gradient(circle at 60% 40%, #1e293b 0%, #020617 100%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 pointer-events-none" />

          {/* Top Canvas Bar */}
          <div className="relative z-10 p-3 flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              CANVAS: 1920 × 1080 (16:9 • 100% Zoom)
            </span>
            <span className="text-indigo-400">BLEND: {blendMode.toUpperCase()}</span>
          </div>

          {/* The Active Text Layer */}
          <div className="relative z-10 flex-grow flex items-center justify-center p-6 text-center select-none overflow-hidden">
            <div 
              className={`transition-all duration-200 ${getFontFamilyStyle()}`}
              style={{
                fontSize: `${fontSize}px`,
                letterSpacing: `${tracking}px`,
                mixBlendMode: blendMode,
                boxShadow: getShadowStyle(),
                color: clippingMask ? 'transparent' : preset === 'neon' ? '#fecdd3' : preset === 'chrome' ? '#f8fafc' : '#ffffff',
                WebkitTextStroke: stroke ? '1px rgba(255,255,255,0.7)' : '0px',
                backgroundImage: clippingMask ? 'linear-gradient(135deg, #f59e0b, #ec4899, #8b5cf6)' : 'none',
                WebkitBackgroundClip: clippingMask ? 'text' : 'border-box',
                textShadow: getShadowStyle(),
                lineHeight: 1.1
              }}
            >
              {text || 'UNTITLED TEXT'}
            </div>
          </div>

          {/* Bottom Canvas Stats */}
          <div className="relative z-10 p-2.5 bg-slate-950/80 backdrop-blur-sm border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>TRACKING: +{tracking}px ({tracking * 25}‰)</span>
            <span>FONT: {fontFamily}</span>
            <button 
              onClick={copyCSS}
              className="flex items-center gap-1 px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs transition">
              {copied ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied CSS!' : 'Copy Layer FX'}
            </button>
          </div>
        </div>

        {/* Controls Panel (Right 5 Cols) */}
        <div className="lg:col-span-5 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3 font-sans">
          {/* Editable Text String */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Live Text Input
            </label>
            <input 
              type="text" 
              value={text} 
              onChange={(e) => setText(e.target.value.toUpperCase())}
              className="w-full bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm font-bold text-white focus:outline-none focus:border-indigo-500 transition font-mono"
              maxLength={24}
              placeholder="TYPE HEADLINE..."
            />
          </div>

          {/* Sliders: Tracking & Size */}
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                <span>Letter-Spacing (Tracking)</span>
                <span className="font-mono text-indigo-400">+{tracking}px</span>
              </div>
              <input 
                type="range" 
                min="-2" 
                max="20" 
                value={tracking} 
                onChange={(e) => { setTracking(Number(e.target.value)); setPreset('custom'); }}
                className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                <span>Font Size (Scale)</span>
                <span className="font-mono text-indigo-400">{fontSize}px</span>
              </div>
              <input 
                type="range" 
                min="24" 
                max="60" 
                value={fontSize} 
                onChange={(e) => { setFontSize(Number(e.target.value)); setPreset('custom'); }}
                className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>
          </div>

          {/* Font Family & Blend Mode Selectors */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Typeface</label>
              <select 
                value={fontFamily} 
                onChange={(e: any) => { setFontFamily(e.target.value); setPreset('custom'); }}
                className="w-full bg-slate-900 border border-slate-700 p-1.5 rounded-lg text-xs font-semibold text-white focus:outline-none focus:border-indigo-500">
                <option value="Impact">Impact (Heavy)</option>
                <option value="Cinzel">Cinzel (Cinematic)</option>
                <option value="Montserrat">Montserrat (Modern)</option>
                <option value="Playfair">Playfair (Editorial)</option>
                <option value="Courier">Courier (Monospace)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Blend Mode</label>
              <select 
                value={blendMode} 
                onChange={(e: any) => { setBlendMode(e.target.value); setPreset('custom'); }}
                className="w-full bg-slate-900 border border-slate-700 p-1.5 rounded-lg text-xs font-semibold text-white focus:outline-none focus:border-indigo-500">
                <option value="normal">Normal</option>
                <option value="multiply">Multiply (Darken)</option>
                <option value="screen">Screen (Lighten)</option>
                <option value="overlay">Overlay (Contrast)</option>
                <option value="color-dodge">Color Dodge (Glow)</option>
                <option value="difference">Difference (Invert)</option>
              </select>
            </div>
          </div>

          {/* Layer Style Switches */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Layer Style Toggles (FX)
            </label>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button 
                onClick={() => { setDropShadow(!dropShadow); setPreset('custom'); }}
                className={`flex items-center justify-between p-1.5 rounded border transition ${dropShadow ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                <span>Drop Shadow</span>
                {dropShadow ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>

              <button 
                onClick={() => { setBevelEmboss(!bevelEmboss); setPreset('custom'); }}
                className={`flex items-center justify-between p-1.5 rounded border transition ${bevelEmboss ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                <span>Bevel & Emboss</span>
                {bevelEmboss ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>

              <button 
                onClick={() => { setOuterGlow(!outerGlow); setPreset('custom'); }}
                className={`flex items-center justify-between p-1.5 rounded border transition ${outerGlow ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                <span>Outer Glow</span>
                {outerGlow ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>

              <button 
                onClick={() => { setClippingMask(!clippingMask); setPreset('custom'); }}
                className={`flex items-center justify-between p-1.5 rounded border transition ${clippingMask ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                <span>Clipping Mask</span>
                {clippingMask ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Callout Footer */}
      <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-sans">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Pro Tip:</strong> Setting text tracking to +10px on all-caps titles instantly creates high-fashion editorial elegance (Vogue, GQ). Tight negative tracking (-2px) suits heavy sports posters (Nike).
          </span>
        </div>
        <span className="hidden md:inline text-[10px] font-mono text-indigo-400">NON-DESTRUCTIVE TYPE ENGINE</span>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATOR 2: PRINT VS WEB COLOR & RESOLUTION LAB (WEEK 15)
// ============================================================================
export const PrintVsWebColorResolutionLab: React.FC<SimulatorProps> = ({ slide }) => {
  const [outputMode, setOutputMode] = useState<'print' | 'web'>('print');
  const [dpi, setDpi] = useState<number>(300);
  const [printSize, setPrintSize] = useState<'card' | 'letter' | 'poster'>('letter');
  const [showGamutWarning, setShowGamutWarning] = useState(false);
  const [colorProfile, setColorProfile] = useState<'sRGB' | 'AdobeRGB' | 'CMYK_SWOP' | 'CMYK_FOGRA39'>('CMYK_FOGRA39');

  // Mathematical Calculations
  const getPhysicalDimensions = () => {
    switch (printSize) {
      case 'card': return { width: 4, height: 6, label: '4 × 6" Postcard' };
      case 'letter': return { width: 8.5, height: 11, label: '8.5 × 11" Letter Magazine' };
      case 'poster': return { width: 18, height: 24, label: '18 × 24" Large Poster' };
    }
  };

  const dims = getPhysicalDimensions();
  const pixelWidth = Math.round(dims.width * dpi);
  const pixelHeight = Math.round(dims.height * dpi);
  const totalMegapixels = ((pixelWidth * pixelHeight) / 1000000).toFixed(1);
  const uncompressedTiffMB = ((pixelWidth * pixelHeight * (outputMode === 'print' ? 4 : 3)) / (1024 * 1024)).toFixed(1);
  const webpMB = (Number(uncompressedTiffMB) * 0.08).toFixed(2);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 text-slate-100 flex flex-col justify-between shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
            <Printer className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-lexend flex items-center gap-2">
              Print vs Web Pre-Press & Color Studio
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                DPI / PPI & ICC Lab
              </span>
            </h4>
            <p className="text-[11px] text-slate-400 font-sans">
              Compare 300 DPI CMYK subtractive ink separation with 72 DPI sRGB additive screen emissions.
            </p>
          </div>
        </div>

        {/* Output Mode Switcher */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button 
            onClick={() => { setOutputMode('print'); setDpi(300); setColorProfile('CMYK_FOGRA39'); }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition ${outputMode === 'print' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
            <Printer className="w-3.5 h-3.5" />
            Print (CMYK • 300 DPI)
          </button>
          <button 
            onClick={() => { setOutputMode('web'); setDpi(72); setColorProfile('sRGB'); }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition ${outputMode === 'web' ? 'bg-sky-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}>
            <Monitor className="w-3.5 h-3.5" />
            Web (RGB • 72 DPI)
          </button>
        </div>
      </div>

      {/* Main Dual Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch mb-4 font-sans">
        {/* Color Gamut Comparison & Visual Plate (Left 7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <span className="text-xs font-bold text-slate-300 font-lexend flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-indigo-400" />
              Color Gamut Simulation & Out-of-Gamut Warning
            </span>
            <button 
              onClick={() => setShowGamutWarning(!showGamutWarning)}
              className={`text-[11px] px-2 py-0.5 rounded font-mono border transition ${showGamutWarning ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
              Gamut Warning: {showGamutWarning ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Color Gradient Swatch Spectrum */}
          <div className="space-y-3 mb-3">
            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>VIBRANT ADDITIVE RGB (Screen Phosphors)</span>
                <span className="text-sky-400">100% Saturated Light</span>
              </div>
              <div className="h-9 w-full rounded-lg bg-gradient-to-r from-red-500 via-green-500 via-blue-500 to-purple-500 shadow-md relative overflow-hidden flex items-center justify-center">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest drop-shadow">
                  RGB Screen Space: sRGB / P3 Gamut
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>SUBTRACTIVE CMYK INK SIMULATION (Halftone Absorption)</span>
                <span className="text-emerald-400">Total Ink Limit: 300% TAC</span>
              </div>
              <div className={`h-9 w-full rounded-lg relative overflow-hidden flex items-center justify-center transition-all ${
                outputMode === 'print' ? 'saturate-[0.72] contrast-[0.92] brightness-[0.95]' : 'saturate-100'
              } bg-gradient-to-r from-rose-700 via-emerald-700 via-blue-800 to-indigo-900`}>
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest drop-shadow">
                  {outputMode === 'print' ? 'CMYK Lithographic Print (FOGRA39 Coated)' : 'RGB Unchecked'}
                </span>
                {showGamutWarning && (
                  <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="text-[10px] font-bold text-rose-300 bg-rose-950/90 px-2 py-0.5 rounded border border-rose-500/50">
                      ⚠️ WARNING: Neon Cyan & Magenta Out of CMYK Gamut!
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pixel Grid Density Visualizer */}
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Screen Dot Pitch (DPI)</span>
              <strong className="text-base text-white font-mono">{dpi} DPI</strong>
              <span className="text-[10px] text-slate-400 block">
                {dpi >= 300 ? '✅ Sharp Print (Zero Pixels Visible)' : '⚠️ Low Res for Print (Visible Pixels)'}
              </span>
            </div>
            <div className="text-right">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Halftone LPI Line Screen</span>
              <strong className="text-base text-emerald-400 font-mono">{Math.round(dpi / 2)} LPI</strong>
              <span className="text-[10px] text-slate-400 block">Formula: DPI = LPI × 2</span>
            </div>
          </div>
        </div>

        {/* Configuration Controls & Math Specs (Right 5 Cols) */}
        <div className="lg:col-span-5 bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3 font-sans">
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Physical Canvas Dimensions
            </label>
            <div className="grid grid-cols-3 gap-1.5 text-xs font-semibold">
              <button 
                onClick={() => setPrintSize('card')}
                className={`py-1.5 px-2 rounded-lg border transition ${printSize === 'card' ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
                4 × 6" Postcard
              </button>
              <button 
                onClick={() => setPrintSize('letter')}
                className={`py-1.5 px-2 rounded-lg border transition ${printSize === 'letter' ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
                8.5 × 11" Mag
              </button>
              <button 
                onClick={() => setPrintSize('poster')}
                className={`py-1.5 px-2 rounded-lg border transition ${printSize === 'poster' ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
                18 × 24" Poster
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
              <span>Resolution Quality Slider</span>
              <span className="font-mono text-emerald-400">{dpi} DPI</span>
            </div>
            <input 
              type="range" 
              min="72" 
              max="600" 
              step="1"
              value={dpi} 
              onChange={(e) => setDpi(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>72 (Web)</span>
              <span>150 (News)</span>
              <span>300 (Offset)</span>
              <span>600 (Fine Art)</span>
            </div>
          </div>

          {/* Mathematical Calculated Spec Sheet */}
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800/80 space-y-1.5 text-xs font-mono">
            <div className="flex justify-between text-slate-300 border-b border-slate-800 pb-1">
              <span className="text-slate-400">Pixel Matrix:</span>
              <span className="text-white font-bold">{pixelWidth} × {pixelHeight} px</span>
            </div>
            <div className="flex justify-between text-slate-300 border-b border-slate-800 pb-1">
              <span className="text-slate-400">Total Megapixels:</span>
              <span className="text-indigo-400 font-bold">{totalMegapixels} MP</span>
            </div>
            <div className="flex justify-between text-slate-300 border-b border-slate-800 pb-1">
              <span className="text-slate-400">Uncompressed TIFF:</span>
              <span className="text-rose-400 font-bold">{uncompressedTiffMB} MB</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Optimized WebP (Q85):</span>
              <span className="text-emerald-400 font-bold">{webpMB} MB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prepress Checklist Footer */}
      <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-sans">
        <div className="flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Pre-Press Law:</strong> Always add 0.125 inch (3mm) bleed margins and convert to CMYK (FOGRA39 or US Web Coated SWOP) before exporting PDF/X-1a to commercial offset printers!
          </span>
        </div>
        <span className="hidden md:inline text-[10px] font-mono text-emerald-400">PDF/X-1a COMPLIANT</span>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATOR 3: DIGITAL RETOUCHING & COMPOSITING STUDIO (WEEK 17)
// ============================================================================
export const DigitalImagingRetouchingStudio: React.FC<SimulatorProps> = ({ slide }) => {
  const [splitPos, setSplitPos] = useState(50);
  const [showLowFreq, setShowLowFreq] = useState(true);
  const [showHighFreq, setShowHighFreq] = useState(true);
  const [showDodgeBurn, setShowDodgeBurn] = useState(true);
  const [showColorGrade, setShowColorGrade] = useState(true);
  const [showVignette, setShowVignette] = useState(true);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 text-slate-100 flex flex-col justify-between shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gradient-to-br from-amber-500 to-rose-600 rounded-xl shadow-lg">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-lexend flex items-center gap-2">
              High-End Retouching & Composite Inspector
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                Frequency Separation & Composite Engine
              </span>
            </h4>
            <p className="text-[11px] text-slate-400 font-sans">
              Drag the interactive split slider to compare raw unedited RAW plate with the 12-layer finished composite.
            </p>
          </div>
        </div>

        <span className="text-xs font-mono text-slate-400">
          SPLIT: <strong className="text-amber-400">{splitPos}%</strong>
        </span>
      </div>

      {/* Split Screen Stage */}
      <div className="relative w-full h-[320px] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-4 select-none">
        {/* Layer A: Raw Camera RAW Plate (Underneath) */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950">
          <div className="text-center p-6">
            <div className="w-28 h-28 mx-auto rounded-full bg-stone-700/60 border-2 border-stone-500/40 flex items-center justify-center mb-2 shadow-inner">
              <span className="text-xs font-mono text-stone-300 font-bold">RAW PLATE</span>
            </div>
            <p className="text-xs text-stone-400 font-mono">Flat 14-Bit Camera RAW • Uncorrected Skin Blemishes & Dull Lighting</p>
          </div>
        </div>

        {/* Layer B: Retouched & Color Graded Composite (Clipped by splitPos) */}
        <div 
          className="absolute inset-0 overflow-hidden flex items-center justify-center transition-all"
          style={{
            clipPath: `polygon(0 0, ${splitPos}% 0, ${splitPos}% 100%, 0 100%)`,
            background: showColorGrade 
              ? 'radial-gradient(circle at 50% 40%, #1e1b4b 0%, #09090b 100%)' 
              : 'radial-gradient(circle at 50% 40%, #27272a 0%, #09090b 100%)'
          }}
        >
          <div className="text-center p-6">
            <div className={`w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-2 transition-all ${
              showHighFreq ? 'border-2 border-amber-400/80 shadow-[0_0_30px_rgba(245,158,11,0.3)]' : 'border border-slate-700'
            } ${showDodgeBurn ? 'bg-gradient-to-tr from-amber-600/40 via-purple-600/40 to-cyan-500/40' : 'bg-slate-800'}`}>
              <Sparkles className="w-8 h-8 text-amber-300 animate-pulse" />
            </div>
            <p className="text-xs text-amber-300 font-mono font-bold">
              12-LAYER RETOUCHED MASTER COMPOSITE
            </p>
            <p className="text-[10px] text-slate-300 font-mono mt-0.5">
              Frequency Separation + Dodge & Burn + Teal/Orange Grade + 300 DPI
            </p>
          </div>
        </div>

        {/* The Split Slider Handle Line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-amber-400 shadow-[0_0_12px_#f59e0b] cursor-ew-resize z-20 flex items-center justify-center"
          style={{ left: `${splitPos}%` }}
        >
          <div className="w-6 h-6 rounded-full bg-amber-500 border-2 border-slate-950 text-slate-950 flex items-center justify-center shadow-lg text-[9px] font-bold">
            ↔
          </div>
        </div>

        {/* Invisible Range Input for Full-Width Dragging */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={splitPos} 
          onChange={(e) => setSplitPos(Number(e.target.value))}
          className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
        />

        {/* Labels on Canvas */}
        <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] font-mono text-amber-300 border border-amber-500/30">
          FINISHED COMPOSITE (AFTER)
        </div>
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] font-mono text-stone-300 border border-stone-500/30">
          RAW PLATE (BEFORE)
        </div>
      </div>

      {/* Layer Stack Inspector Toggles */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-sans mb-3">
        <button 
          onClick={() => setShowLowFreq(!showLowFreq)}
          className={`p-2 rounded-xl border text-center transition ${showLowFreq ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
          <span className="block text-[10px] font-mono uppercase">Layer 02</span>
          <strong>Low Frequency (Tone)</strong>
        </button>

        <button 
          onClick={() => setShowHighFreq(!showHighFreq)}
          className={`p-2 rounded-xl border text-center transition ${showHighFreq ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
          <span className="block text-[10px] font-mono uppercase">Layer 03</span>
          <strong>High Freq (Texture)</strong>
        </button>

        <button 
          onClick={() => setShowDodgeBurn(!showDodgeBurn)}
          className={`p-2 rounded-xl border text-center transition ${showDodgeBurn ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
          <span className="block text-[10px] font-mono uppercase">Layer 04</span>
          <strong>Dodge & Burn</strong>
        </button>

        <button 
          onClick={() => setShowColorGrade(!showColorGrade)}
          className={`p-2 rounded-xl border text-center transition ${showColorGrade ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
          <span className="block text-[10px] font-mono uppercase">Layer 05</span>
          <strong>3D Color LUT</strong>
        </button>

        <button 
          onClick={() => setShowVignette(!showVignette)}
          className={`p-2 rounded-xl border text-center transition ${showVignette ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
          <span className="block text-[10px] font-mono uppercase">Layer 06</span>
          <strong>Grain & Vignette</strong>
        </button>
      </div>

      {/* Educational Footer */}
      <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-sans">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Retouching Law:</strong> Frequency Separation divides an image into Low Frequency (Gaussian Blur = color/tone) and High Frequency (High Pass = pores/skin texture), allowing blemishes to be healed without smoothing skin like plastic!
          </span>
        </div>
        <span className="hidden md:inline text-[10px] font-mono text-amber-400">NON-DESTRUCTIVE COMPOSITING</span>
      </div>
    </div>
  );
};
