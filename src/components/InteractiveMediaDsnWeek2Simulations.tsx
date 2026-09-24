'use client';

import React, { useState, useEffect } from 'react';
import { SlideData } from '@/types/slide';
import { 
  Sparkles, 
  MousePointer, 
  Hand, 
  Eye, 
  Sliders, 
  Layers, 
  CheckCircle2, 
  X, 
  RotateCcw, 
  ArrowRight, 
  Smartphone, 
  Globe, 
  MessageSquare, 
  Maximize2, 
  Volume2, 
  Activity, 
  Flame, 
  ShieldCheck, 
  AlertCircle, 
  Check, 
  User, 
  Heart, 
  Zap, 
  Smile, 
  Frown, 
  Meh, 
  Target, 
  FileText, 
  GraduationCap, 
  Compass, 
  Undo2, 
  Lock, 
  Send, 
  HelpCircle,
  Type,
  Palette,
  LayoutGrid
} from 'lucide-react';

// ============================================================================
// SIMULATION 1: AFFORDANCE, SIGNIFIERS, FEEDBACK & MAPPING SANDBOX
// ============================================================================
export const InteractivityPrinciplesSandbox: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeTab, setActiveTab] = useState<'signifiers' | 'feedback' | 'mapping' | 'constraints'>('signifiers');

  // Signifier states
  const [mysteryClicked, setMysteryClicked] = useState(false);
  const [signifierClicked, setSignifierClicked] = useState(false);

  // Feedback states
  const [slowLoading, setSlowLoading] = useState(false);
  const [slowDone, setSlowDone] = useState(false);
  const [clickCountSlow, setClickCountSlow] = useState(0);
  const [instantDone, setInstantDone] = useState(false);

  // Mapping states
  const [activeBurner, setActiveBurner] = useState<number | null>(null);
  const [stoveType, setStoveType] = useState<'arbitrary' | 'natural'>('arbitrary');
  const [stoveFeedback, setStoveFeedback] = useState<string>('Click a knob below to turn on the corresponding burner.');

  // Constraint states
  const [unconstrainedText, setUnconstrainedText] = useState('');
  const [phoneDigits, setPhoneDigits] = useState('');

  const handleKnobClick = (knobIndex: number) => {
    if (stoveType === 'natural') {
      // Natural mapping: 0 -> Top-Left, 1 -> Top-Right, 2 -> Bottom-Left, 3 -> Bottom-Right
      setActiveBurner(knobIndex);
      const names = ['Top-Left', 'Top-Right', 'Bottom-Left', 'Bottom-Right'];
      setStoveFeedback(`✅ Natural Mapping: Knob position clearly activated the ${names[knobIndex]} burner! Zero cognitive friction.`);
    } else {
      // Arbitrary linear mapping: Knob 0 -> Bottom-Right, Knob 1 -> Top-Left, Knob 2 -> Bottom-Left, Knob 3 -> Top-Right
      const arbitraryMap = [3, 0, 2, 1];
      const targetBurner = arbitraryMap[knobIndex];
      setActiveBurner(targetBurner);
      const names = ['Top-Left', 'Top-Right', 'Bottom-Left', 'Bottom-Right'];
      setStoveFeedback(`⚠️ Arbitrary Linear Mapping: You clicked Knob #${knobIndex + 1}, but it ignited the ${names[targetBurner]} burner! Users must memorize the manual.`);
    }
  };

  const handleSlowSubmit = () => {
    setClickCountSlow(prev => prev + 1);
    if (!slowLoading) {
      setSlowLoading(true);
      setSlowDone(false);
      setTimeout(() => {
        setSlowLoading(false);
        setSlowDone(true);
      }, 3000);
    }
  };

  const handleInstantSubmit = () => {
    setInstantDone(true);
    setTimeout(() => setInstantDone(false), 2000);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneDigits(raw);
  };

  const formatPhone = (digits: string) => {
    if (!digits) return '';
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-slate-900 text-slate-100 font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <h2 className="font-lexend text-lg md:text-xl font-bold text-white">
            {slide.title || "Donald Norman's Principles of Interactivity Sandbox"}
          </h2>
        </div>
        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold rounded-full font-mono">
          Interactive Lab 1
        </span>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { id: 'signifiers', label: '1. Affordance & Signifiers' },
          { id: 'feedback', label: '2. Instant vs Delayed Feedback' },
          { id: 'mapping', label: '3. Spatial Mapping (Stove Test)' },
          { id: 'constraints', label: '4. Error-Preventing Constraints' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Tab Panels */}
      <div className="flex-grow flex flex-col justify-center">
        {/* TAB 1: SIGNIFIERS */}
        {activeTab === 'signifiers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Mystery Meat */}
            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-slate-700 pb-2">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-500" /> Bad Design: Mystery Meat Navigation
                  </span>
                  <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono">Zero Signifier</span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Notice this element below. Does it look clickable? There is no elevation, no border affordance, no hover cue, and a default text cursor.
                </p>
                
                <div className="p-8 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                  <div 
                    onClick={() => setMysteryClicked(true)}
                    className="text-slate-400 text-xs select-none"
                  >
                    <span>Download Lecture PDF File</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
                {mysteryClicked ? (
                  <span className="text-rose-400 font-semibold">
                    ⚠️ You clicked it! But a user had to guess or accidentally stumble upon it. This causes cognitive fatigue and high bounce rates.
                  </span>
                ) : (
                  <span>Hover or click the text above to test how unclear clickable affordance feels.</span>
                )}
              </div>
            </div>

            {/* Clear Signifier */}
            <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-indigo-500/30 pb-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Good Design: Clear Signifier & Affordance
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">High Affordance</span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  This button provides 3 unambiguous signifiers: prominent drop shadow, distinct high-contrast gradient, and interactive hover elevation.
                </p>

                <div className="p-8 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                  <button 
                    onClick={() => setSignifierClicked(true)}
                    className="group px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xs shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <MousePointer className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>Download Lecture PDF</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
                {signifierClicked ? (
                  <span className="text-emerald-400 font-semibold">
                    ✨ Perfect Norman Principle! The visual signifier immediately communicates its interactive potential without instructions.
                  </span>
                ) : (
                  <span>Hover over the button above to observe the interactive hover feedback and affordance.</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FEEDBACK */}
        {activeTab === 'feedback' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Delayed / Silent Feedback */}
            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-slate-700 pb-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" /> Silent / Delayed Feedback Loop
                  </span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">3000ms Latency</span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  When a system gives no instant visual acknowledgment, users assume their click didn&apos;t register and rage-click repeatedly.
                </p>

                <div className="p-6 bg-slate-900 rounded-xl flex flex-col items-center justify-center gap-3 border border-slate-800 min-h-[140px]">
                  <button
                    onClick={handleSlowSubmit}
                    className="px-5 py-2.5 rounded-xl bg-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-650 transition cursor-pointer"
                  >
                    Process $250.00 Transaction
                  </button>
                  {clickCountSlow > 1 && (
                    <div className="text-[11px] text-rose-400 font-bold animate-pulse">
                      🚨 Double-Submission Warning: You clicked {clickCountSlow} times!
                    </div>
                  )}
                  {slowDone && (
                    <div className="text-[11px] text-emerald-400 font-bold">
                      Payment processed after 3-second delay.
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                <span className="font-bold text-slate-200">The Nielsen Heuristic:</span> Always keep users informed about system status within 100ms through loading spinners, sound, or state locks.
              </div>
            </div>

            {/* Instant Micro-Feedback */}
            <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-indigo-500/30 pb-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant Feedback Loop (&lt;50ms)
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">Immediate State</span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Buttons that immediately disable on click, transform into a progress spinner, and show a confirmation toast prevent double-charges and build trust.
                </p>

                <div className="p-6 bg-slate-900 rounded-xl flex flex-col items-center justify-center gap-3 border border-slate-800 min-h-[140px]">
                  <button
                    onClick={handleInstantSubmit}
                    disabled={instantDone}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
                      instantDone 
                        ? 'bg-emerald-600 text-white cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 cursor-pointer'
                    }`}
                  >
                    {instantDone ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Payment Confirmed ($250.00)</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 text-amber-300" />
                        <span>Process $250.00 Transaction</span>
                      </>
                    )}
                  </button>
                  <span className="text-[10px] text-slate-400">Button immediately locks and provides tactile feedback.</span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-medium">
                ✅ Zero double-submissions. User cognitive certainty is 100%.
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SPATIAL MAPPING */}
        {activeTab === 'mapping' && (
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3 mb-4">
              <div>
                <h3 className="font-lexend text-sm md:text-base font-bold text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400" /> The Classic Norman Stove Burner Mapping Test
                </h3>
                <p className="text-xs text-slate-300">Compare arbitrary linear controls vs natural 2D spatial arrangement.</p>
              </div>

              <div className="flex gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => { setStoveType('arbitrary'); setActiveBurner(null); setStoveFeedback('Switched to Arbitrary Linear Mapping. Try guessing which knob controls the Top-Right burner.'); }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${stoveType === 'arbitrary' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  Arbitrary Linear
                </button>
                <button
                  onClick={() => { setStoveType('natural'); setActiveBurner(null); setStoveFeedback('Switched to Natural Spatial Mapping. Knobs match burner geometry.'); }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold ${stoveType === 'natural' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  Natural Spatial Mapping
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Stove Top Representation */}
              <div className="md:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center">
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mb-3">Cooktop Elements (Physical World)</span>
                <div className="grid grid-cols-2 gap-4 w-48 h-48 bg-slate-900 p-4 rounded-xl border border-slate-800">
                  {[0, 1, 2, 3].map((bIdx) => {
                    const isLit = activeBurner === bIdx;
                    const labels = ['Top-Left', 'Top-Right', 'Bottom-Left', 'Bottom-Right'];
                    return (
                      <div
                        key={bIdx}
                        className={`rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300 relative ${
                          isLit 
                            ? 'border-orange-500 bg-orange-500/20 shadow-lg shadow-orange-500/40 animate-pulse'
                            : 'border-slate-700 bg-slate-800/60'
                        }`}
                      >
                        <Flame className={`w-5 h-5 ${isLit ? 'text-orange-400' : 'text-slate-600'}`} />
                        <span className={`text-[8px] font-mono mt-1 ${isLit ? 'text-orange-300 font-bold' : 'text-slate-500'}`}>
                          {labels[bIdx]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Controls Mapping */}
              <div className="md:col-span-6 flex flex-col justify-center">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-2">Control Knobs (User Interface)</span>
                
                {stoveType === 'arbitrary' ? (
                  // Arbitrary: Single straight row of 4 knobs
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex justify-around items-center">
                    {[0, 1, 2, 3].map((k) => (
                      <button
                        key={k}
                        onClick={() => handleKnobClick(k)}
                        className="flex flex-col items-center gap-1 group cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-full border-2 border-slate-600 bg-slate-800 flex items-center justify-center group-hover:border-rose-400 group-active:scale-95 transition">
                          <div className="w-1.5 h-3 bg-slate-400 rounded-full group-hover:bg-rose-400" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">Knob #{k + 1}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  // Natural 2D mapping matching cooktop grid
                  <div className="p-4 bg-slate-900 rounded-xl border border-emerald-500/30 flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-4 w-40">
                      {[0, 1, 2, 3].map((k) => (
                        <button
                          key={k}
                          onClick={() => handleKnobClick(k)}
                          className="flex flex-col items-center gap-1 group cursor-pointer"
                        >
                          <div className="w-10 h-10 rounded-full border-2 border-slate-600 bg-slate-800 flex items-center justify-center group-hover:border-emerald-400 group-active:scale-95 transition">
                            <div className="w-1.5 h-3 bg-slate-400 rounded-full group-hover:bg-emerald-400" />
                          </div>
                          <span className="text-[9px] text-slate-400 font-mono">Knob {['TL', 'TR', 'BL', 'BR'][k]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs">
                  <p className="text-slate-300 font-medium">{stoveFeedback}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CONSTRAINTS */}
        {activeTab === 'constraints' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Unconstrained */}
            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-slate-700 pb-2">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-rose-400" /> Unconstrained Input Field
                  </span>
                  <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono">Error-Prone</span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Allowing any character string without formatting or length constraints forces users to guess accepted formats (e.g., &quot;+1&quot;, dashes, spaces?).
                </p>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <label className="text-[11px] text-slate-400 block mb-1.5">Enter Phone Number:</label>
                  <input
                    type="text"
                    value={unconstrainedText}
                    onChange={(e) => setUnconstrainedText(e.target.value)}
                    placeholder="e.g. 555-1234 or (555) 123-4567"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-rose-400"
                  />
                  {unconstrainedText && /\D/.test(unconstrainedText) && (
                    <span className="text-[10px] text-rose-400 mt-1.5 block">
                      ⚠️ User typed special characters/letters. Backend database might reject this format!
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                <span className="font-bold text-slate-300">Poor Constraints:</span> Leads to high abandonment rates on registration and checkout forms.
              </div>
            </div>

            {/* Smart Constraints */}
            <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-indigo-500/30 pb-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Smart UX Constraints
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">Auto-Formatted</span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  The input mask automatically rejects non-numeric keystrokes, inserts parentheses and dashes, and limits exact digit length.
                </p>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <label className="text-[11px] text-slate-400 block mb-1.5">Enter Phone Number (Auto-Masked):</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formatPhone(phoneDigits)}
                      onChange={handlePhoneChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-slate-950 border border-emerald-500/40 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-400 font-mono"
                    />
                    {phoneDigits.length === 10 && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3 top-2.5" />
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-1.5 text-[10px] text-slate-400">
                    <span>Digits entered: {phoneDigits.length} / 10</span>
                    {phoneDigits.length === 10 && (
                      <span className="text-emerald-400 font-bold">Valid format guaranteed!</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-medium">
                ✅ Impossible for the user to make a syntax error. Norman&apos;s constraint in action!
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
          Donald Norman, <em>The Design of Everyday Things</em> (1988)
        </span>
        <span className="text-slate-500">Key takeaway: Good design makes errors impossible; bad design blames the user.</span>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 2: TYPES OF INTERACTIVE MEDIA SHOWCASE
// ============================================================================
export const InteractiveMediaTypesExplorer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedType, setSelectedType] = useState<'hypermedia' | 'gestural' | 'spatial' | 'conversational'>('hypermedia');

  // Gestural state
  const [swipeIndex, setSwipeIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  // Spatial 3D state
  const [rotX, setRotX] = useState(15);
  const [rotY, setRotY] = useState(45);
  const [depthZ, setDepthZ] = useState(50);
  const [showWireframe, setShowWireframe] = useState(false);

  // Conversational state
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    { sender: 'ai', text: "Hello! I am a Conversational Voice/AI Agent. How can I assist your interactive media study today?" }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  // Hypermedia nodes
  const [activeNode, setActiveNode] = useState<'home' | 'hci' | 'design_systems' | 'heuristics'>('home');

  const cards = [
    { title: "Story Card 1: Visual Design", bg: "from-blue-600 to-indigo-700", desc: "Swipe through cards to experience gesture navigation." },
    { title: "Story Card 2: Micro-Interactions", bg: "from-purple-600 to-pink-600", desc: "Double tap to trigger heart like micro-animation." },
    { title: "Story Card 3: Haptic Feedback", bg: "from-emerald-600 to-teal-700", desc: "Tactile response simulates real-world button clicks." }
  ];

  const handleSendMessage = () => {
    if (!inputMsg.trim()) return;
    const userText = inputMsg;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputMsg('');

    setTimeout(() => {
      let reply = "Conversational UI parses natural language into structured API calls and renders context-aware responses.";
      if (userText.toLowerCase().includes('ui') || userText.toLowerCase().includes('interface')) {
        reply = "UI (User Interface) is the sensory layer of controls, colors, and typography connecting humans to software.";
      } else if (userText.toLowerCase().includes('ux') || userText.toLowerCase().includes('experience')) {
        reply = "UX (User Experience) focuses on cognitive ease, user journey mapping, and eliminating task friction.";
      }
      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-slate-900 text-slate-100 font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-purple-400" />
          <h2 className="font-lexend text-lg md:text-xl font-bold text-white">
            {slide.title || "Spectrum of Interactive Media Types Explorer"}
          </h2>
        </div>
        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold rounded-full font-mono">
          Interactive Lab 2
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {[
          { id: 'hypermedia', label: '1. Non-Linear Hypermedia', icon: Globe },
          { id: 'gestural', label: '2. Mobile Gestural Touch', icon: Smartphone },
          { id: 'spatial', label: '3. Spatial 3D / AR / XR', icon: Maximize2 },
          { id: 'conversational', label: '4. Conversational Voice/AI', icon: MessageSquare }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedType(item.id as any)}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                selectedType === item.id
                  ? 'bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Explorer Workspace */}
      <div className="flex-grow flex flex-col justify-center">
        {/* 1. HYPERMEDIA */}
        {selectedType === 'hypermedia' && (
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
            <div className="mb-3">
              <h3 className="font-lexend text-sm font-bold text-white mb-1 flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400" /> Non-Linear Hypermedia Web Graph
              </h3>
              <p className="text-xs text-slate-300">
                Unlike a book (linear reading), hypermedia lets users navigate across multi-directional nodes based on personal curiosity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              {/* Node Graph */}
              <div className="md:col-span-6 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center">
                <span className="text-[10px] text-slate-500 font-mono mb-3">Interactive Document Graph</span>
                <div className="relative w-64 h-48 flex items-center justify-center">
                  {/* Center Node */}
                  <button
                    onClick={() => setActiveNode('home')}
                    className={`absolute z-10 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      activeNode === 'home' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50' : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    🏠 Interactive Media Root
                  </button>

                  {/* Satellite Node 1 */}
                  <button
                    onClick={() => setActiveNode('hci')}
                    className={`absolute -top-1 left-2 z-10 px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                      activeNode === 'hci' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    🔗 HCI Foundations
                  </button>

                  {/* Satellite Node 2 */}
                  <button
                    onClick={() => setActiveNode('design_systems')}
                    className={`absolute -bottom-1 left-6 z-10 px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                      activeNode === 'design_systems' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    🔗 Design Systems
                  </button>

                  {/* Satellite Node 3 */}
                  <button
                    onClick={() => setActiveNode('heuristics')}
                    className={`absolute top-10 -right-2 z-10 px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                      activeNode === 'heuristics' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    🔗 Usability Heuristics
                  </button>

                  {/* Connecting Lines SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-700 stroke-2">
                    <line x1="128" y1="96" x2="60" y2="25" strokeDasharray="4 4" />
                    <line x1="128" y1="96" x2="70" y2="165" strokeDasharray="4 4" />
                    <line x1="128" y1="96" x2="200" y2="70" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>

              {/* Rendered Hypermedia Page */}
              <div className="md:col-span-6 bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col justify-between min-h-[200px]">
                {activeNode === 'home' && (
                  <div>
                    <h4 className="font-lexend text-sm font-bold text-purple-400 mb-2">Welcome to Interactive Media Hypermedia</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      In 1965, Ted Nelson coined the term <em>Hypertext</em>: &quot;non-sequential writing — text that branches and allows choices to the reader.&quot;
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="text-slate-400">Click hyper-links:</span>
                      <button onClick={() => setActiveNode('hci')} className="text-sky-400 underline hover:text-sky-300">Read HCI &rarr;</button>
                      <button onClick={() => setActiveNode('design_systems')} className="text-emerald-400 underline hover:text-emerald-300">Design Systems &rarr;</button>
                    </div>
                  </div>
                )}
                {activeNode === 'hci' && (
                  <div>
                    <h4 className="font-lexend text-sm font-bold text-sky-400 mb-2">HCI Foundations (Human-Computer Interaction)</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Examines cognitive ergonomics: How human short-term memory (7 &plusmn; 2 chunks) constrains interface navigation complexity.
                    </p>
                    <button onClick={() => setActiveNode('home')} className="text-xs text-purple-400 underline">&larr; Return to Root</button>
                  </div>
                )}
                {activeNode === 'design_systems' && (
                  <div>
                    <h4 className="font-lexend text-sm font-bold text-emerald-400 mb-2">Design Systems &amp; Component Repositories</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Standardized tokens (colors, 8pt grids, typography) enforce consistency across thousands of interconnected web pages.
                    </p>
                    <button onClick={() => setActiveNode('home')} className="text-xs text-purple-400 underline">&larr; Return to Root</button>
                  </div>
                )}
                {activeNode === 'heuristics' && (
                  <div>
                    <h4 className="font-lexend text-sm font-bold text-amber-400 mb-2">Jakob Nielsen&apos;s 10 Usability Heuristics</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Empirical rules of thumb: System Status Visibility, User Control/Undo, Error Prevention, and Recognition over Recall.
                    </p>
                    <button onClick={() => setActiveNode('home')} className="text-xs text-purple-400 underline">&larr; Return to Root</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 2. GESTURAL */}
        {selectedType === 'gestural' && (
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
            <div className="mb-3 flex justify-between items-center">
              <div>
                <h3 className="font-lexend text-sm font-bold text-white mb-0.5 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-pink-400" /> Mobile Gestural Computing Simulator
                </h3>
                <p className="text-xs text-slate-300">Test direct finger gestures: Swipe, Double-Tap, and Pinch-to-Zoom.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              {/* Phone Frame */}
              <div className="md:col-span-6 flex justify-center">
                <div className="w-56 h-80 bg-slate-950 rounded-3xl border-4 border-slate-700 shadow-2xl p-3 flex flex-col justify-between relative overflow-hidden">
                  {/* Phone Notch */}
                  <div className="w-20 h-4 bg-slate-800 rounded-b-xl mx-auto flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                  </div>

                  {/* Card Viewport */}
                  <div 
                    onDoubleClick={() => setIsLiked(prev => !prev)}
                    className={`flex-grow rounded-2xl bg-gradient-to-br ${cards[swipeIndex].bg} p-4 flex flex-col justify-between text-white transition-all transform select-none relative cursor-pointer overflow-hidden`}
                    style={{ transform: `scale(${zoomScale})` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono bg-black/30 px-2 py-0.5 rounded-full">Card {swipeIndex + 1}/3</span>
                      <button onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}>
                        <Heart className={`w-5 h-5 transition-transform ${isLiked ? 'text-rose-400 fill-rose-400 scale-125' : 'text-white/70'}`} />
                      </button>
                    </div>

                    <div>
                      <h4 className="font-lexend text-xs font-bold leading-tight mb-1">{cards[swipeIndex].title}</h4>
                      <p className="text-[10px] text-white/90 leading-relaxed">{cards[swipeIndex].desc}</p>
                    </div>

                    <div className="text-[9px] text-white/70 font-mono text-center">
                      Double-tap card to like ❤️
                    </div>
                  </div>

                  {/* Swipe Navigation Dots */}
                  <div className="flex justify-center items-center gap-1.5 py-1">
                    {[0, 1, 2].map((idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${swipeIndex === idx ? 'bg-pink-400 w-4' : 'bg-slate-700'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Gesture Controls */}
              <div className="md:col-span-6 flex flex-col gap-3">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-slate-200 block mb-2">Simulate Touch Gestures:</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSwipeIndex((prev) => (prev > 0 ? prev - 1 : 2))}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                    >
                      &larr; Swipe Left
                    </button>
                    <button
                      onClick={() => setSwipeIndex((prev) => (prev < 2 ? prev + 1 : 0))}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                    >
                      Swipe Right &rarr;
                    </button>
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className="px-3 py-1.5 rounded-lg bg-rose-600/30 border border-rose-500/40 text-xs font-semibold text-rose-300"
                    >
                      Double-Tap Like
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-300 font-medium">Pinch-to-Zoom Scale:</span>
                    <span className="font-mono text-pink-400">{Math.round(zoomScale * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="1.2"
                    step="0.05"
                    value={zoomScale}
                    onChange={(e) => setZoomScale(parseFloat(e.target.value))}
                    className="w-full accent-pink-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. SPATIAL 3D / AR / XR */}
        {selectedType === 'spatial' && (
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
            <div className="mb-3 flex justify-between items-center">
              <div>
                <h3 className="font-lexend text-sm font-bold text-white mb-0.5 flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-emerald-400" /> Spatial 3D &amp; Augmented Reality Viewport
                </h3>
                <p className="text-xs text-slate-300">Spatial computing adds 6 Degrees of Freedom (6DoF), depth parallax, and 3D affordances.</p>
              </div>
              <button
                onClick={() => setShowWireframe(!showWireframe)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${
                  showWireframe ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {showWireframe ? 'Wireframe Grid: ON' : 'Wireframe Grid: OFF'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              {/* 3D Simulated Viewport */}
              <div className="md:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 min-h-[220px] flex items-center justify-center perspective-[800px] overflow-hidden relative">
                {/* 3D Box */}
                <div
                  className="w-32 h-32 relative transition-transform duration-100 transform-style-3d cursor-grab active:cursor-grabbing"
                  style={{
                    transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${depthZ}px)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className={`absolute inset-0 rounded-xl flex items-center justify-center font-bold text-xs border ${
                    showWireframe ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300' : 'border-indigo-400 bg-indigo-600/80 text-white shadow-xl'
                  }`} style={{ transform: 'translateZ(64px)' }}>
                    Front (Z+)
                  </div>
                  <div className={`absolute inset-0 rounded-xl flex items-center justify-center font-bold text-xs border ${
                    showWireframe ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300' : 'border-purple-400 bg-purple-600/80 text-white'
                  }`} style={{ transform: 'rotateY(180deg) translateZ(64px)' }}>
                    Back (Z-)
                  </div>
                  <div className={`absolute inset-0 rounded-xl flex items-center justify-center font-bold text-xs border ${
                    showWireframe ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300' : 'border-sky-400 bg-sky-600/80 text-white'
                  }`} style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}>
                    Left (X-)
                  </div>
                  <div className={`absolute inset-0 rounded-xl flex items-center justify-center font-bold text-xs border ${
                    showWireframe ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300' : 'border-pink-400 bg-pink-600/80 text-white'
                  }`} style={{ transform: 'rotateY(90deg) translateZ(64px)' }}>
                    Right (X+)
                  </div>
                </div>

                <span className="absolute bottom-2 right-3 text-[9px] font-mono text-slate-500">
                  RotX: {rotX}&deg; | RotY: {rotY}&deg; | Z: {depthZ}px
                </span>
              </div>

              {/* Spatial Controls */}
              <div className="md:col-span-5 flex flex-col gap-3">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Rotate X-Axis:</span>
                    <span className="font-mono text-emerald-400">{rotX}&deg;</span>
                  </div>
                  <input
                    type="range"
                    min="-90"
                    max="90"
                    value={rotX}
                    onChange={(e) => setRotX(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Rotate Y-Axis:</span>
                    <span className="font-mono text-emerald-400">{rotY}&deg;</span>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={rotY}
                    onChange={(e) => setRotY(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Depth Distance (Z-Axis):</span>
                    <span className="font-mono text-emerald-400">{depthZ}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={depthZ}
                    onChange={(e) => setDepthZ(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. CONVERSATIONAL */}
        {selectedType === 'conversational' && (
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
            <div className="mb-3">
              <h3 className="font-lexend text-sm font-bold text-white mb-0.5 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-400" /> Conversational Voice &amp; AI Interface Simulator
              </h3>
              <p className="text-xs text-slate-300">Natural language processing removes rigid menu hierarchies in favor of direct intent queries.</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between h-56">
              {/* Message History */}
              <div className="overflow-y-auto space-y-2.5 pr-2">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-2.5 rounded-xl text-xs leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-sky-600 text-white rounded-br-none'
                          : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex gap-2 pt-2 border-t border-slate-800">
                <input
                  type="text"
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about UI layout, color theory, or UX..."
                  className="flex-grow bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
        <span>From 1D text hyperlinks to 3D spatial environments, interactivity empowers user agency.</span>
        <span className="text-purple-400 font-mono">Media Taxonomy Matrix</span>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 3: UI LAYOUT & VISUAL HIERARCHY LAB
// ============================================================================
export const UiLayoutHierarchyLab: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [layoutMode, setLayoutMode] = useState<'poor' | 'polished'>('polished');
  const [showGridOverlay, setShowGridOverlay] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [paddingPx, setPaddingPx] = useState(16);

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-slate-900 text-slate-100 font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-sky-400" />
          <h2 className="font-lexend text-lg md:text-xl font-bold text-white">
            {slide.title || "UI Layout, Visual Hierarchy & Whitespace Studio"}
          </h2>
        </div>
        <span className="px-3 py-1 bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold rounded-full font-mono">
          Interactive Lab 3
        </span>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700 mb-4">
        {/* Toggle Mode */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => { setLayoutMode('poor'); setPaddingPx(4); }}
            className={`px-3 py-1 rounded-md text-xs font-semibold ${layoutMode === 'poor' ? 'bg-rose-500 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            ❌ Poor Hierarchy (Flat)
          </button>
          <button
            onClick={() => { setLayoutMode('polished'); setPaddingPx(20); }}
            className={`px-3 py-1 rounded-md text-xs font-semibold ${layoutMode === 'polished' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            ✅ Polished 8pt Hierarchy
          </button>
        </div>

        {/* Overlays */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGridOverlay(!showGridOverlay)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
              showGridOverlay ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300' : 'bg-slate-900 border-slate-700 text-slate-400'
            }`}
          >
            {showGridOverlay ? '8pt Grid Overlay: ON' : '8pt Grid Overlay: OFF'}
          </button>
          <button
            onClick={() => setShowHeatmap(!showHeatmap)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
              showHeatmap ? 'bg-amber-500/20 border-amber-400 text-amber-300' : 'bg-slate-900 border-slate-700 text-slate-400'
            }`}
          >
            {showHeatmap ? 'F-Pattern Gaze Heatmap: ON' : 'F-Pattern Gaze Heatmap: OFF'}
          </button>
        </div>

        {/* Spacing Slider */}
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span>Container Whitespace:</span>
          <input
            type="range"
            min="4"
            max="32"
            step="4"
            value={paddingPx}
            onChange={(e) => setPaddingPx(parseInt(e.target.value))}
            className="w-24 accent-sky-400 cursor-pointer"
          />
          <span className="font-mono text-sky-400">{paddingPx}px</span>
        </div>
      </div>

      {/* Layout Canvas */}
      <div className="flex-grow flex items-center justify-center relative">
        <div 
          className="w-full max-w-2xl bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden transition-all duration-300"
          style={{ padding: `${paddingPx}px` }}
        >
          {/* 8pt Grid Overlay Lines */}
          {showGridOverlay && (
            <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: 'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
                backgroundSize: '8px 8px'
              }}
            />
          )}

          {/* F-Pattern Eye-Tracking Heatmap SVG */}
          {showHeatmap && (
            <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4">
              <div className="h-10 bg-gradient-to-r from-red-500/40 via-yellow-500/30 to-transparent rounded-lg blur-md" />
              <div className="h-6 w-3/4 bg-gradient-to-r from-red-500/40 via-yellow-500/30 to-transparent rounded-lg blur-md" />
              <div className="h-6 w-1/2 bg-gradient-to-r from-yellow-500/30 to-transparent rounded-lg blur-md" />
              <div className="absolute top-2 right-2 bg-red-600/90 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                Eye Gaze Density: Primary Fixation Zone
              </div>
            </div>
          )}

          {layoutMode === 'poor' ? (
            // POOR HIERARCHY
            <div className="space-y-1 text-slate-400 text-xs">
              <div className="text-slate-400 text-xs font-normal">Interactive Media Systems Course</div>
              <div className="text-slate-400 text-xs font-normal">UI and UX Foundations for Beginners</div>
              <div className="text-slate-400 text-xs font-normal">
                This layout lacks size contrast, weight contrast, and spatial breathing room. Notice how exhausting it is to scan. There is no focal anchor for the eye.
              </div>
              <div className="text-slate-400 text-xs font-normal">Date: Week 2 Local Time</div>
              <div className="border border-slate-700 bg-slate-900 text-slate-400 text-xs p-1 text-center">
                Enroll In Course Now
              </div>
            </div>
          ) : (
            // POLISHED HIERARCHY
            <div className="space-y-4">
              {/* Overline & Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 font-mono bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                  Interactive Media Design Track
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Week 2 &bull; 35 mins</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-lexend text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Principles of Interactivity, UI &amp; UX Design
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Master visual scanning rhythms, the 8-point spatial grid system, and cognitive affordances to craft intuitive digital experiences.
                </p>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Primary Metric</span>
                  <span className="text-base font-bold text-emerald-400 font-lexend">&lt; 100ms Feedback</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Spatial Alignment</span>
                  <span className="text-base font-bold text-indigo-400 font-lexend">8pt Baseline Grid</span>
                </div>
              </div>

              {/* CTA & Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <span className="text-xs text-slate-400 font-medium">Ready to start module?</span>
                <button className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/20 flex items-center gap-1.5 transition">
                  <span>Start Lesson Deck</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Explanation Footer */}
      <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
        <span>F-pattern scanning prioritizes top-left anchors. Multiples of 8 eliminate blurry fractional sub-pixels on retina displays.</span>
        <span className="text-sky-400 font-bold">Gestalt Proximity Rule</span>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 4: COLOR THEORY & WCAG CONTRAST STUDIO
// ============================================================================
export const ColorTheoryWcagStudio: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [dominantColor, setDominantColor] = useState('#0f172a'); // 60%
  const [surfaceColor, setSurfaceColor] = useState('#1e293b');  // 30%
  const [accentColor, setAccentColor] = useState('#6366f1');   // 10%
  const [textColor, setTextColor] = useState('#ffffff');
  const [colorBlindMode, setColorBlindMode] = useState<'normal' | 'deuteranopia' | 'protanopia' | 'tritanopia'>('normal');

  // Simple WCAG relative luminance approximation
  const getLuminance = (hex: string) => {
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16) / 255;
    const g = parseInt(c.substring(2, 4), 16) / 255;
    const b = parseInt(c.substring(4, 6), 16) / 255;
    const a = [r, g, b].map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const getContrastRatio = (hex1: string, hex2: string) => {
    const l1 = getLuminance(hex1);
    const l2 = getLuminance(hex2);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
  };

  const contrastScore = parseFloat(getContrastRatio(textColor, surfaceColor));
  const passesAA = contrastScore >= 4.5;
  const passesAAA = contrastScore >= 7.0;

  const presets = [
    { name: "Modern Dark Violet", dom: "#0f172a", surf: "#1e293b", acc: "#818cf8", txt: "#ffffff" },
    { name: "Emerald Cyberpunk", dom: "#022c22", surf: "#064e3b", acc: "#34d399", txt: "#ffffff" },
    { name: "Warm Clay Light", dom: "#fafaf9", surf: "#f5f5f4", acc: "#ea580c", txt: "#1c1917" },
    { name: "Sleek Carbon & Crimson", dom: "#18181b", surf: "#27272a", acc: "#f43f5e", txt: "#ffffff" }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-slate-900 text-slate-100 font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-amber-400" />
          <h2 className="font-lexend text-lg md:text-xl font-bold text-white">
            {slide.title || "The 60-30-10 Color Rule & WCAG Contrast Accessibility Studio"}
          </h2>
        </div>
        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold rounded-full font-mono">
          Interactive Lab 4
        </span>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs text-slate-400">Palette Presets:</span>
        {presets.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDominantColor(p.dom);
              setSurfaceColor(p.surf);
              setAccentColor(p.acc);
              setTextColor(p.txt);
            }}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 border border-slate-700 transition"
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-grow">
        {/* Color Distribution & Adjusters */}
        <div className="md:col-span-5 flex flex-col justify-between gap-3">
          {/* 60-30-10 Ratio Visual Bar */}
          <div className="p-4 bg-slate-850 rounded-2xl border border-slate-700">
            <span className="text-xs font-bold text-white block mb-2">The 60-30-10 Ratio Distribution:</span>
            <div className="h-6 w-full rounded-xl overflow-hidden flex border border-slate-600 shadow-inner">
              <div style={{ width: '60%', backgroundColor: dominantColor }} className="h-full flex items-center justify-center text-[9px] font-bold text-white/80 font-mono">
                60% Dominant
              </div>
              <div style={{ width: '30%', backgroundColor: surfaceColor }} className="h-full flex items-center justify-center text-[9px] font-bold text-white/80 font-mono">
                30% Surface
              </div>
              <div style={{ width: '10%', backgroundColor: accentColor }} className="h-full flex items-center justify-center text-[9px] font-bold text-white/80 font-mono">
                10%
              </div>
            </div>
          </div>

          {/* Color Pickers */}
          <div className="p-4 bg-slate-850 rounded-2xl border border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">60% Background (Dominant):</span>
              <input
                type="color"
                value={dominantColor}
                onChange={(e) => setDominantColor(e.target.value)}
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">30% Surface Cards (Secondary):</span>
              <input
                type="color"
                value={surfaceColor}
                onChange={(e) => setSurfaceColor(e.target.value)}
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">10% CTA Accent (Interactive):</span>
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">Text Content Color:</span>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
              />
            </div>
          </div>

          {/* Colorblind Simulator Modes */}
          <div className="p-3 bg-slate-850 rounded-xl border border-slate-700">
            <span className="text-[11px] font-bold text-slate-300 block mb-1.5">Colorblind Simulation Filter:</span>
            <div className="grid grid-cols-2 gap-1.5 text-[10px]">
              {[
                { id: 'normal', label: 'Normal Vision' },
                { id: 'deuteranopia', label: 'Deuteranopia (Green-blind)' },
                { id: 'protanopia', label: 'Protanopia (Red-blind)' },
                { id: 'tritanopia', label: 'Tritanopia (Blue-blind)' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setColorBlindMode(m.id as any)}
                  className={`p-1.5 rounded-lg border text-left ${
                    colorBlindMode === m.id ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live UI Render & WCAG Gauge */}
        <div className="md:col-span-7 flex flex-col justify-between gap-3">
          {/* Card Preview with Simulated Style */}
          <div 
            className="p-6 rounded-2xl border transition-all duration-300 flex-grow flex flex-col justify-between relative overflow-hidden"
            style={{
              backgroundColor: dominantColor,
              filter: colorBlindMode === 'deuteranopia' 
                ? 'sepia(40%) hue-rotate(180deg)' 
                : colorBlindMode === 'protanopia' 
                  ? 'sepia(50%) hue-rotate(90deg)' 
                  : colorBlindMode === 'tritanopia' 
                    ? 'sepia(30%) hue-rotate(270deg)' 
                    : 'none'
            }}
          >
            {/* The 30% Surface Container */}
            <div 
              className="p-5 rounded-xl border transition-all duration-300 shadow-xl"
              style={{ backgroundColor: surfaceColor, borderColor: accentColor + '40', color: textColor }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded" style={{ backgroundColor: accentColor + '20', color: accentColor }}>
                  Featured Media Course
                </span>
                <span className="text-xs opacity-80 font-mono">Module 02</span>
              </div>

              <h4 className="font-lexend text-lg font-extrabold mb-1">Human-Centered Design Architecture</h4>
              <p className="text-xs opacity-80 leading-relaxed mb-4">
                Applying color harmony ensures interface scannability and prevents cognitive eye fatigue across extended study sessions.
              </p>

              {/* The 10% Accent Button */}
              <button 
                className="w-full py-2.5 rounded-xl font-bold text-xs shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{ backgroundColor: accentColor, color: getLuminance(accentColor) > 0.4 ? '#000000' : '#ffffff' }}
              >
                Enroll with 1-Click Accent CTA
              </button>
            </div>
          </div>

          {/* WCAG Compliance Badge Panel */}
          <div className="p-4 bg-slate-850 rounded-2xl border border-slate-700 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block font-mono">WCAG 2.1 Contrast Ratio</span>
              <span className="text-xl font-extrabold font-mono text-white">{contrastScore} : 1</span>
            </div>

            <div className="flex gap-2">
              <div className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${
                passesAA ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' : 'bg-rose-500/20 border-rose-400 text-rose-300'
              }`}>
                {passesAA ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                <span>AA Pass (&ge; 4.5:1)</span>
              </div>
              <div className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${
                passesAAA ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-500'
              }`}>
                {passesAAA ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                <span>AAA Pass (&ge; 7:1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 5: TYPOGRAPHY SCALE & PAIRING PLAYGROUND
// ============================================================================
export const TypographyScalePlayground: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [scaleRatio, setScaleRatio] = useState<number>(1.25); // Major Third
  const [baseSize, setBaseSize] = useState<number>(16);
  const [lineHeight, setLineHeight] = useState<number>(1.5);
  const [fontPair, setFontPair] = useState<'sans' | 'editorial' | 'tech'>('sans');

  const h1 = Math.round(baseSize * Math.pow(scaleRatio, 3));
  const h2 = Math.round(baseSize * Math.pow(scaleRatio, 2));
  const h3 = Math.round(baseSize * Math.pow(scaleRatio, 1));
  const body = baseSize;
  const caption = Math.round(baseSize / scaleRatio);

  const getFontFamily = () => {
    if (fontPair === 'editorial') return { heading: 'font-serif', body: 'font-sans' };
    if (fontPair === 'tech') return { heading: 'font-mono', body: 'font-sans' };
    return { heading: 'font-lexend', body: 'font-sans' };
  };

  const fonts = getFontFamily();

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-slate-900 text-slate-100 font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Type className="w-5 h-5 text-emerald-400" />
          <h2 className="font-lexend text-lg md:text-xl font-bold text-white">
            {slide.title || "Modular Typographic Scale & Font Pairing Studio"}
          </h2>
        </div>
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold rounded-full font-mono">
          Interactive Lab 5
        </span>
      </div>

      {/* Controls Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700 mb-4">
        {/* Scale Ratio Presets */}
        <div>
          <span className="text-[11px] text-slate-400 block mb-1">Modular Ratio:</span>
          <select
            value={scaleRatio}
            onChange={(e) => setScaleRatio(parseFloat(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
          >
            <option value="1.125">1.125 &mdash; Major Second (Compact)</option>
            <option value="1.200">1.200 &mdash; Minor Third</option>
            <option value="1.250">1.250 &mdash; Major Third (Balanced)</option>
            <option value="1.333">1.333 &mdash; Perfect Fourth (Dramatic)</option>
          </select>
        </div>

        {/* Font Pairing */}
        <div>
          <span className="text-[11px] text-slate-400 block mb-1">Font Family Pairing:</span>
          <select
            value={fontPair}
            onChange={(e) => setFontPair(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
          >
            <option value="sans">Modern Geometric Sans (Lexend + Sans)</option>
            <option value="editorial">Editorial Elegance (Serif Title + Sans)</option>
            <option value="tech">High-Tech Monospace (Mono + Sans)</option>
          </select>
        </div>

        {/* Line Height */}
        <div>
          <div className="flex justify-between text-[11px] text-slate-400 mb-1">
            <span>Body Line-Height (Leading):</span>
            <span className="font-mono text-emerald-400">{lineHeight}x</span>
          </div>
          <input
            type="range"
            min="1.2"
            max="1.9"
            step="0.1"
            value={lineHeight}
            onChange={(e) => setLineHeight(parseFloat(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Typographic Ladder Preview */}
      <div className="flex-grow bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 overflow-y-auto">
        {/* H1 */}
        <div className="flex items-baseline justify-between border-b border-slate-850 pb-2">
          <h1 className={`${fonts.heading} font-extrabold text-white leading-tight`} style={{ fontSize: `${h1}px` }}>
            Display Heading 1
          </h1>
          <span className="text-[10px] font-mono text-emerald-400 shrink-0 ml-4">H1 &bull; {h1}px</span>
        </div>

        {/* H2 */}
        <div className="flex items-baseline justify-between border-b border-slate-850 pb-2">
          <h2 className={`${fonts.heading} font-bold text-slate-200 leading-tight`} style={{ fontSize: `${h2}px` }}>
            Subheading Level 2
          </h2>
          <span className="text-[10px] font-mono text-sky-400 shrink-0 ml-4">H2 &bull; {h2}px</span>
        </div>

        {/* H3 */}
        <div className="flex items-baseline justify-between border-b border-slate-850 pb-2">
          <h3 className={`${fonts.heading} font-semibold text-slate-300 leading-tight`} style={{ fontSize: `${h3}px` }}>
            Section Header Level 3
          </h3>
          <span className="text-[10px] font-mono text-indigo-400 shrink-0 ml-4">H3 &bull; {h3}px</span>
        </div>

        {/* Body Paragraph */}
        <div className="flex items-baseline justify-between border-b border-slate-850 pb-2">
          <p className={`${fonts.body} text-slate-300 max-w-2xl`} style={{ fontSize: `${body}px`, lineHeight: lineHeight }}>
            Body copy readability depends directly on line length (the measure: optimal 55 to 75 characters) and vertical leading rhythm. When line-height is too cramped, readers lose their place when jumping between lines.
          </p>
          <span className="text-[10px] font-mono text-slate-500 shrink-0 ml-4">Body &bull; {body}px</span>
        </div>

        {/* Caption */}
        <div className="flex items-baseline justify-between">
          <span className={`${fonts.body} text-slate-500 uppercase tracking-wider font-semibold`} style={{ fontSize: `${caption}px` }}>
            Overline &bull; Metadata Timestamp &bull; Status
          </span>
          <span className="text-[10px] font-mono text-slate-600 shrink-0 ml-4">Caption &bull; {caption}px</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
        <span>A modular scale creates mathematical harmony across all screen sizes.</span>
        <span className="text-emerald-400 font-mono">Formula: Size &times; Ratio&supn;</span>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 6: UX PERSONA & EMPATHY MAP EXPLORER
// ============================================================================
export const UxPersonaEmpathyStudio: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activePersona, setActivePersona] = useState<'maya' | 'david'>('maya');
  const [activeEmpathyTab, setActiveEmpathyTab] = useState<'says' | 'thinks' | 'does' | 'feels'>('says');

  const personas = {
    maya: {
      name: "Maya Patel, 23",
      role: "Graduate Multimedia Student & Freelancer",
      avatarBg: "from-purple-500 to-indigo-600",
      quote: "I need to skim lectures between subway stops. If your navigation takes more than 2 taps, I will abandon your app.",
      demographics: "Tech-Native &bull; Mobile 5G &bull; Dark Mode &bull; High Multitasking",
      goals: [
        "Quickly review slide decks on smartphone during transit commute.",
        "Bookmark interactive simulations to replay before laboratory exam.",
        "Export class notes directly into Notion or Google Docs."
      ],
      frustrations: [
        "Tiny touch targets that cause accidental mis-clicks when walking.",
        "Sluggish desktop web apps that don't scale responsively to 390px screens.",
        "Long video lectures without scannable chapter bookmarks."
      ],
      empathy: {
        says: [
          '"Why does this website make me log in every single time?"',
          '"Can I just download the key points as bullet points?"'
        ],
        thinks: [
          '"My exam is in 48 hours and I don\'t have time to wade through walls of text."',
          '"Will this app drain my phone battery during my commute?"'
        ],
        does: [
          'Swipes rapidly through slides looking for visual diagrams.',
          'Takes screenshots instead of using broken built-in notes tools.'
        ],
        feels: [
          'Overwhelmed by academic jargon.',
          'Empowered when micro-quizzes give immediate instant feedback.'
        ]
      },
      uxSolution: "Implement sticky bottom gesture navigation, thumb-zone tap targets (&ge; 48px), and offline caching."
    },
    david: {
      name: "David Rodriguez, 68",
      role: "Retired University Faculty & Lifelong Learner",
      avatarBg: "from-amber-500 to-rose-600",
      quote: "My eyesight isn't what it used to be. Clear contrast and an easy 'Undo' button give me confidence to explore.",
      demographics: "Digital Immigrant &bull; Tablet with Stylus &bull; High Zoom (125%) &bull; Cautious Explorer",
      goals: [
        "Audit modern Interactive Media principles at a comfortable, self-directed pace.",
        "Learn digital design terminology without feeling condescended to.",
        "Easily recover if an accidental touch deletes or moves an item."
      ],
      frustrations: [
        "Faint light-gray text on white backgrounds that fails WCAG accessibility.",
        "Cryptic icons without text labels (e.g. three floating dots with no description).",
        "Timed modals or popups that disappear before they can be read."
      ],
      empathy: {
        says: [
          '"Is there a way to make this print larger without breaking the page layout?"',
          '"I\'m worried I might click the wrong thing and break something."'
        ],
        thinks: [
          '"Modern software changes interfaces too frequently without explanation."',
          '"I hope there is a clear \'Back\' button on this screen."'
        ],
        does: [
          'Reads slowly, word for word, before interacting.',
          'Prefers explicit text buttons (e.g. \'Save Work\') over symbolic icons.'
        ],
        feels: [
          'Anxious when unfamiliar error codes appear.',
          'Delighted and proud when completing an interactive quiz independently.'
        ]
      },
      uxSolution: "Enforce WCAG AAA 7:1 contrast ratios, persistent labels beside all icons, and explicit confirmation dialogs."
    }
  };

  const p = personas[activePersona];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-slate-900 text-slate-100 font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-pink-400" />
          <h2 className="font-lexend text-lg md:text-xl font-bold text-white">
            {slide.title || "User Persona & Empathy Mapping Interactive Studio"}
          </h2>
        </div>
        <span className="px-3 py-1 bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-semibold rounded-full font-mono">
          Interactive Lab 6
        </span>
      </div>

      {/* Persona Switcher */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs text-slate-400">Select Target User Archetype:</span>
        <button
          onClick={() => setActivePersona('maya')}
          className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-2 ${
            activePersona === 'maya' ? 'bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-600/30' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          <div className="w-4 h-4 rounded-full bg-purple-400" />
          <span>Maya (Fast-Paced Mobile Student)</span>
        </button>
        <button
          onClick={() => setActivePersona('david')}
          className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-2 ${
            activePersona === 'david' ? 'bg-rose-600 border-rose-400 text-white shadow-lg shadow-rose-600/30' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          <div className="w-4 h-4 rounded-full bg-rose-400" />
          <span>David (Cautious Tablet Learner)</span>
        </button>
      </div>

      {/* Main Persona Workstation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        {/* Left: Persona Card */}
        <div className="md:col-span-5 bg-slate-850 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
          <div>
            {/* Persona Avatar & Title */}
            <div className="flex items-center gap-3 border-b border-slate-750 pb-3 mb-3">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${p.avatarBg} flex items-center justify-center font-bold text-white shadow-md`}>
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-lexend text-base font-bold text-white">{p.name}</h3>
                <p className="text-[11px] text-slate-400">{p.role}</p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs italic text-slate-300 leading-relaxed mb-3">
              &ldquo;{p.quote}&rdquo;
            </blockquote>

            {/* Demographics Pill */}
            <div className="text-[10px] font-mono text-pink-300 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-lg mb-3">
              {p.demographics}
            </div>

            {/* Goals & Frustrations */}
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-bold text-emerald-400 block mb-1">Key User Goals:</span>
                <ul className="space-y-1 text-slate-300 text-[11px]">
                  {p.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 mt-0.5">&bull;</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="font-bold text-rose-400 block mb-1">Frustrations &amp; Pain Points:</span>
                <ul className="space-y-1 text-slate-300 text-[11px]">
                  {p.frustrations.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-400 mt-0.5">&bull;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Empathy Map Quadrants */}
        <div className="md:col-span-7 bg-slate-850 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-slate-750 pb-2 mb-3">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-pink-400" /> Empathy Map: Stepping Into User Shoes
              </span>
              <span className="text-[10px] font-mono text-slate-400">Qualitative Research Synthesis</span>
            </div>

            {/* Quadrant Selector */}
            <div className="grid grid-cols-4 gap-1.5 mb-3">
              {[
                { id: 'says', label: '1. SAYS', icon: MessageSquare },
                { id: 'thinks', label: '2. THINKS', icon: Zap },
                { id: 'does', label: '3. DOES', icon: Activity },
                { id: 'feels', label: '4. FEELS', icon: Heart }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveEmpathyTab(tab.id as any)}
                    className={`p-2 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition ${
                      activeEmpathyTab === tab.id
                        ? 'bg-pink-600 border-pink-400 text-white shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quadrant Content */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 min-h-[140px]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-pink-400 block mb-2">
                Observed User Insights &bull; {activeEmpathyTab.toUpperCase()}
              </span>
              <div className="space-y-2">
                {p.empathy[activeEmpathyTab].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed flex items-start gap-2">
                    <span className="text-pink-400 font-bold">&rarr;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actionable UX Translation */}
          <div className="mt-3 p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-xs">
            <span className="font-bold text-indigo-300 block mb-0.5">Direct UX Architectural Solution:</span>
            <p className="text-slate-300">{p.uxSolution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 7: USER JOURNEY MAP & EMOTIONAL CURVE SIMULATOR
// ============================================================================
export const UserJourneyMapSimulator: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [appliedFix, setAppliedFix] = useState(false);

  const stages = [
    {
      num: 1,
      title: "1. Awareness & Search",
      action: "Searches for 'Interactive Media Design university syllabus' on Google.",
      touchpoint: "Search Engine Results Page (SERP)",
      emotionBase: 6, // 1 to 10
      emotionFix: 8,
      painPoint: "Generic textbook links with outdated PDF files.",
      solution: "Publish structured, search-indexed course outline with clear interactive lesson previews."
    },
    {
      num: 2,
      title: "2. Landing & Browsing",
      action: "Lands on course web portal and explores Week 1 & Week 2 topics.",
      touchpoint: "Responsive Web Homepage",
      emotionBase: 7,
      emotionFix: 9,
      painPoint: "Unclear navigation folders and missing week filter.",
      solution: "Course folder tabs with level badges and instant keyword search filter."
    },
    {
      num: 3,
      title: "3. Interactive Lab Execution",
      action: "Opens Week 2 deck and runs interactive simulation labs.",
      touchpoint: "Interactive Presentation Slide Viewer",
      emotionBase: appliedFix ? 9 : 3, // Big dip without fix!
      emotionFix: 9,
      painPoint: "Frustration when simulations lack instructions or fail silently.",
      solution: "Provide immediate tactile feedback, reset buttons, and instant validation indicators."
    },
    {
      num: 4,
      title: "4. Knowledge Assessment",
      action: "Completes self-check multiple-choice quiz questions.",
      touchpoint: "Interactive Quiz Engine",
      emotionBase: 7,
      emotionFix: 9,
      painPoint: "Quizzes that only say 'Wrong' without explaining WHY.",
      solution: "Rich pedagogical explanations for every option to foster constructive learning."
    },
    {
      num: 5,
      title: "5. Retention & Advocacy",
      action: "Completes exit reflection and shares course link with classmates.",
      touchpoint: "Certificate / Completion Drawer",
      emotionBase: 8,
      emotionFix: 10,
      painPoint: "Lost progress if browser tab closes accidentally.",
      solution: "Auto-save completion states to localStorage so progress is seamlessly preserved."
    }
  ];

  const current = stages[activeStage - 1];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-slate-900 text-slate-100 font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-indigo-400" />
          <h2 className="font-lexend text-lg md:text-xl font-bold text-white">
            {slide.title || "User Journey Mapping & Emotional Satisfaction Arc"}
          </h2>
        </div>
        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold rounded-full font-mono">
          Interactive Lab 7
        </span>
      </div>

      {/* Stage Timeline Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
        {stages.map((stg) => (
          <button
            key={stg.num}
            onClick={() => setActiveStage(stg.num)}
            className={`p-2.5 rounded-xl border text-xs font-semibold transition text-left flex flex-col justify-between ${
              activeStage === stg.num
                ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-800'
            }`}
          >
            <span className="text-[10px] font-mono text-indigo-300">Phase 0{stg.num}</span>
            <span className="font-bold truncate mt-0.5">{stg.title.split('. ')[1]}</span>
          </button>
        ))}
      </div>

      {/* Main Journey Visualization */}
      <div className="bg-slate-850 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between flex-grow">
        {/* Dynamic Emotional Curve Graph */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Smile className="w-4 h-4 text-amber-400" /> Emotional Satisfaction Curve Across Journey
            </span>
            <button
              onClick={() => setAppliedFix(!appliedFix)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                appliedFix ? 'bg-emerald-600 text-white shadow-md' : 'bg-rose-600 text-white shadow-md'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{appliedFix ? 'UX Interventions Applied: Optimized' : 'Simulate Friction Point (Click to Fix)'}</span>
            </button>
          </div>

          {/* SVG Wave */}
          <div className="h-24 w-full bg-slate-950 rounded-xl border border-slate-800 p-2 relative flex items-center justify-between">
            {stages.map((s) => {
              const score = appliedFix ? s.emotionFix : s.emotionBase;
              const isSelected = activeStage === s.num;
              const heightPct = (score / 10) * 100;
              return (
                <div key={s.num} className="flex-1 flex flex-col items-center justify-end h-full relative">
                  <div 
                    className={`w-8 rounded-t-lg transition-all duration-500 flex items-center justify-center ${
                      score <= 4 
                        ? 'bg-rose-500 shadow-lg shadow-rose-500/40' 
                        : isSelected 
                          ? 'bg-indigo-500 shadow-lg shadow-indigo-500/40' 
                          : 'bg-slate-700'
                    }`}
                    style={{ height: `${heightPct}%` }}
                  >
                    <span className="text-[9px] font-black text-white font-mono">{score}/10</span>
                  </div>
                  <span className={`text-[9px] mt-1 font-mono ${isSelected ? 'text-indigo-400 font-bold' : 'text-slate-500'}`}>
                    P0{s.num}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Anatomy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* User Experience Details */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-mono block">User Action &amp; Goal:</span>
              <p className="text-xs text-slate-200 font-medium">{current.action}</p>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Primary Touchpoint:</span>
              <p className="text-xs text-indigo-400 font-mono">{current.touchpoint}</p>
            </div>
          </div>

          {/* Pain Point & Design Opportunity */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <div>
              <span className="text-[10px] text-rose-400 uppercase font-mono block flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-rose-400" /> Friction &amp; Pain Point:
              </span>
              <p className="text-xs text-rose-300 font-medium">{current.painPoint}</p>
            </div>
            <div>
              <span className="text-[10px] text-emerald-400 uppercase font-mono block flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> UX Design Opportunity:
              </span>
              <p className="text-xs text-emerald-300 font-medium">{current.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SIMULATION 8: JAKOB NIELSEN'S USABILITY HEURISTICS AUDIT
// ============================================================================
export const UxHeuristicsAudit: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [heuristicId, setHeuristicId] = useState<number>(1);
  const [fixedState, setFixedState] = useState<boolean>(false);

  // Heuristic test states
  const [saveStatus, setSaveStatus] = useState<string>('idle');
  const [items, setItems] = useState<string[]>(['Project Prototype v1', 'Wireframe Sketch Deck', 'User Interview Notes']);
  const [deletedItem, setDeletedItem] = useState<string | null>(null);

  const handleTestSave = () => {
    if (!fixedState) {
      // Flawed: silent save
      setSaveStatus('silent');
    } else {
      // Fixed: status visibility
      setSaveStatus('saving');
      setTimeout(() => {
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 3000);
      }, 800);
    }
  };

  const handleDelete = (index: number) => {
    const itemToDelete = items[index];
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setDeletedItem(itemToDelete);
  };

  const handleUndo = () => {
    if (deletedItem) {
      setItems(prev => [...prev, deletedItem]);
      setDeletedItem(null);
    }
  };

  const heuristicCases = [
    {
      id: 1,
      name: "1. Visibility of System Status",
      rule: "The system should always keep users informed about what is going on through appropriate feedback within reasonable time.",
      flawText: "Clicking 'Save Document' does nothing visually. Users don't know if changes saved or failed.",
      fixText: "Button shows a spinner, disables to prevent double-saving, and displays a green 'Saved 2s ago' badge."
    },
    {
      id: 2,
      name: "2. User Control & Freedom (The Emergency Exit)",
      rule: "Users often choose functions by mistake and need a clearly marked 'emergency exit' to leave unwanted states without an extended dialogue.",
      flawText: "Clicking 'Delete' instantly and permanently destroys the document with zero undo safety net.",
      fixText: "Provides a temporary floating toast with an instant 'Undo' button to effortlessly restore work."
    },
    {
      id: 3,
      name: "3. Error Prevention & Recognition",
      rule: "Better than good error messages is a careful design that prevents a problem from occurring in the first place.",
      flawText: "Submitting form outputs cryptic database codes like 'ERROR 0x8849F_SQL_FAIL'.",
      fixText: "Inline field validation checks syntax live before submit and presents plain human guidance."
    }
  ];

  const currentCase = heuristicCases.find(c => c.id === heuristicId)!;

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-slate-900 text-slate-100 font-sans overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h2 className="font-lexend text-lg md:text-xl font-bold text-white">
            {slide.title || "Jakob Nielsen's Usability Heuristics Audit Sandbox"}
          </h2>
        </div>
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold rounded-full font-mono">
          Interactive Lab 8
        </span>
      </div>

      {/* Heuristic Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {heuristicCases.map((c) => (
          <button
            key={c.id}
            onClick={() => { setHeuristicId(c.id); setFixedState(false); setSaveStatus('idle'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              heuristicId === c.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-grow">
        {/* Left: Heuristic Definition & Mode Toggle */}
        <div className="md:col-span-5 bg-slate-850 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
          <div>
            <h3 className="font-lexend text-base font-bold text-white mb-1.5">{currentCase.name}</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">{currentCase.rule}</p>

            <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 mb-4 text-xs">
              <span className="font-bold text-slate-400 block mb-1">Current Evaluation Mode:</span>
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() => setFixedState(false)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold ${
                    !fixedState ? 'bg-rose-500 text-white shadow' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  Violating Heuristic
                </button>
                <button
                  onClick={() => setFixedState(true)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold ${
                    fixedState ? 'bg-emerald-600 text-white shadow' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  Heuristic Fixed
                </button>
              </div>
            </div>

            <div className="text-[11px] leading-relaxed">
              {!fixedState ? (
                <span className="text-rose-400 font-medium">⚠️ {currentCase.flawText}</span>
              ) : (
                <span className="text-emerald-400 font-medium">✨ {currentCase.fixText}</span>
              )}
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
            Nielsen Norman Group (NN/g) Usability Benchmark
          </div>
        </div>

        {/* Right: Live Prototype Test Canvas */}
        <div className="md:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          {/* HEURISTIC 1 TEST */}
          {heuristicId === 1 && (
            <div className="flex flex-col items-center justify-center flex-grow gap-4">
              <span className="text-xs text-slate-400 font-mono">Document Title: &quot;Interactive Media Thesis.pdf&quot;</span>

              <button
                onClick={handleTestSave}
                disabled={saveStatus === 'saving'}
                className={`px-6 py-2.5 rounded-xl font-bold text-xs transition flex items-center gap-2 cursor-pointer ${
                  fixedState
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-slate-700 text-slate-200'
                }`}
              >
                {saveStatus === 'saving' ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving to Cloud Database...</span>
                  </>
                ) : (
                  <span>Save Document</span>
                )}
              </button>

              <div className="min-h-[30px] flex items-center justify-center text-xs">
                {saveStatus === 'silent' && (
                  <span className="text-amber-400 font-mono animate-pulse">
                    ... (Silent save. No indicator appeared. Did it work?)
                  </span>
                )}
                {saveStatus === 'saved' && (
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    All changes saved to cloud storage (2:45 PM).
                  </span>
                )}
              </div>
            </div>
          )}

          {/* HEURISTIC 2 TEST */}
          {heuristicId === 2 && (
            <div className="flex flex-col justify-between flex-grow">
              <span className="text-xs text-slate-400 font-mono mb-2">Student Project Files (Click delete to test Undo):</span>
              
              <div className="space-y-2 mb-4">
                {items.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-200 font-medium">{item}</span>
                    <button
                      onClick={() => handleDelete(idx)}
                      className="px-2.5 py-1 rounded bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-[11px] font-bold"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                {items.length === 0 && (
                  <div className="p-4 text-center text-slate-500 text-xs">
                    All items deleted!
                  </div>
                )}
              </div>

              {/* Floating Undo Banner */}
              {fixedState && deletedItem && (
                <div className="p-3 bg-indigo-900/90 border border-indigo-400 text-white rounded-xl shadow-xl flex justify-between items-center text-xs animate-scale-up">
                  <span>Deleted &quot;{deletedItem}&quot;</span>
                  <button
                    onClick={handleUndo}
                    className="px-3 py-1 bg-white text-indigo-900 font-bold rounded-lg text-xs hover:bg-indigo-100 flex items-center gap-1"
                  >
                    <Undo2 className="w-3.5 h-3.5" />
                    <span>Undo Delete</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* HEURISTIC 3 TEST */}
          {heuristicId === 3 && (
            <div className="flex flex-col items-center justify-center flex-grow p-4">
              {!fixedState ? (
                <div className="w-full max-w-sm p-4 bg-rose-950/40 border border-rose-500/40 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                    <AlertCircle className="w-4 h-4 text-rose-500" />
                    <span>Fatal Exception 0x000F49</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-mono">
                    Unhandled DBConstraintException: invalid format at line 44. Code aborted.
                  </p>
                </div>
              ) : (
                <div className="w-full max-w-sm p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Friendly Error Recovery</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    &quot;Your password needs at least 8 characters and 1 number. We have preserved your username so you don&apos;t have to re-type it.&quot;
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
