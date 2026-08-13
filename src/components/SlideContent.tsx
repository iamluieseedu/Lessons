'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SlideData } from '@/types/slide';
import { 
  GraduationCap, 
  Lightbulb, 
  Sparkles, 
  Target, 
  Video, 
  Image as ImageIcon, 
  Layers, 
  Film, 
  Tv, 
  Smartphone, 
  Award, 
  Clock, 
  Brain, 
  CheckCircle2,
  MousePointer,
  Hand,
  Move,
  Keyboard,
  Monitor,
  Check,
  X,
  ChevronRight,
  Info,
  Terminal,
  FolderOpen,
  FileText,
  RotateCcw,
  Loader2,
  Sliders,
  MapPin,
  Calendar,
  Search,
  ArrowRight,
  Eye,
  Settings,
  Undo2,
  Redo2,
  Activity,
  CheckSquare,
  Play,
  Pause,
  Volume2,
  Maximize2,
  CreditCard,
  BookOpen
} from 'lucide-react';

interface SlideContentProps {
  slide: SlideData;
}

// -------------------------------------------------------------
// IMAGE FRAME HELPER
// -------------------------------------------------------------
const ImageFrame: React.FC<{ url: string; caption: string; isLaravel?: boolean }> = ({ url, caption, isLaravel }) => {
  const [hasError, setHasError] = useState(false);
  const iconColor = isLaravel ? 'text-rose-500' : 'text-sky-500';

  const resolvedUrl = url.startsWith('/') ? `/Lessons${url}` : url;

  return (
    <div className="md:col-span-5 w-full min-h-[200px] md:h-full md:min-h-[220px] max-h-[300px] md:max-h-[360px] flex flex-col mt-4 md:mt-0">
      <div className="relative flex-grow rounded-t-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-sm min-h-[160px] md:min-h-[180px] flex items-center justify-center">
        {!hasError ? (
          <img
            src={resolvedUrl}
            alt={caption}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover absolute inset-0"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400 gap-2">
            <Film className={`w-10 h-10 ${iconColor} opacity-60`} />
            <span className="text-xs font-semibold text-slate-505">{caption}</span>
          </div>
        )}
      </div>
      <div className="bg-slate-50 text-slate-600 text-xs py-2.5 px-3 text-center border border-t-0 border-slate-200 flex items-center justify-center gap-1.5 rounded-b-lg flex-shrink-0">
        <ImageIcon className={`w-3.5 h-3.5 ${iconColor} flex-shrink-0`} />
        <span className="truncate">{caption}</span>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// STANDALONE ILLUSTRATION COMPONENTS (TO SATISFY RULES OF HOOKS)
// -------------------------------------------------------------

// Slide 2: Agenda Map Checklist
const Slide2Illustration: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
  const units = [
    { id: 1, title: 'Unit 1: Interactivity Basics', desc: 'Understanding agency, static vs active parameters, and cognitive loops.' },
    { id: 2, title: 'Unit 2: System Components', desc: 'Analyzing ATMs, YouTube, Google Maps, and Norman Doors.' },
    { id: 3, title: 'Unit 3: History & Evolution', desc: 'Punch cards, CLI text boxes, GUI desktop WIMP, and Touch interfaces.' }
  ];

  return (
    <div className="flex-grow flex flex-col justify-center gap-2">
      {units.map((u) => (
        <button
          key={u.id}
          onClick={() => setSelectedUnit(u.id)}
          className={`w-full p-2.5 text-left rounded-lg border text-xs transition ${
            selectedUnit === u.id 
              ? 'bg-sky-500/20 border-sky-400 text-white font-bold scale-[1.02]' 
              : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-650'
          }`}
        >
          <div className="flex justify-between items-center">
            <span>{u.title}</span>
            <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-slate-800 text-sky-450 font-mono">Select</span>
          </div>
          {selectedUnit === u.id && (
            <p className="text-[10px] text-slate-350 leading-relaxed font-normal mt-1.5 border-t border-sky-500/20 pt-1.5 animate-fade-in font-sans">
              {u.desc}
            </p>
          )}
        </button>
      ))}
    </div>
  );
};

// Slide 4: Membrane flow HUMAN vs MACHINE CPU
const Slide4Illustration: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'user' | 'system' | null>(null);
  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-4 relative">
      <div className="flex justify-between w-full max-w-[280px] z-10">
        <button 
          onClick={() => setActiveNode('user')}
          className={`p-3 rounded-lg border flex flex-col items-center gap-1.5 transition-all duration-300 ${
            activeNode === 'user' ? 'bg-sky-500/20 border-sky-400 text-white scale-105 shadow-md' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          <MousePointer className="w-5 h-5 text-sky-400" />
          <span className="text-[10px] font-bold font-lexend">1. User (Input)</span>
        </button>

        <button 
          onClick={() => setActiveNode('system')}
          className={`p-3 rounded-lg border flex flex-col items-center gap-1.5 transition-all duration-300 ${
            activeNode === 'system' ? 'bg-emerald-500/20 border-emerald-400 text-white scale-105 shadow-md' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          <Terminal className="w-5 h-5 text-emerald-400" />
          <span className="text-[10px] font-bold font-lexend">2. System (Output)</span>
        </button>
      </div>

      <div className="absolute inset-x-0 top-1/2 h-1 bg-slate-800 -translate-y-1/2 flex items-center justify-center">
        <div className={`w-3 h-3 rounded-full bg-sky-400 absolute transition-all duration-1000 ${
          activeNode === 'user' ? 'translate-x-12' : activeNode === 'system' ? '-translate-x-12' : 'scale-0'
        }`} />
      </div>

      <div className="h-16 w-full max-w-[280px] bg-slate-950 border border-slate-850 rounded-lg p-2.5 text-[10px] leading-relaxed font-sans mt-2">
        {activeNode === 'user' && (
          <p className="text-sky-300 font-medium">
            <strong>Action Sent:</strong> Mouse cursor click registers exact X/Y coordinate variables on the screen canvas, converting intent to hardware signals.
          </p>
        )}
        {activeNode === 'system' && (
          <p className="text-emerald-300 font-medium">
            <strong>State Feedback:</strong> System processes clicks, updates index variables, and refreshes stylesheet color maps to complete the loop.
          </p>
        )}
        {!activeNode && (
          <p className="text-slate-400 italic text-center py-2 font-medium">
            Click a node above to trigger information loops
          </p>
        )}
      </div>
    </div>
  );
};

// Slide 8: Circular interaction loop wheel
const Slide8Illustration: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);
  const phases = [
    { num: 1, label: 'Goal', desc: 'Formulating intent inside user short term memory.' },
    { num: 2, label: 'Action', desc: 'Hardware translation (tap, keystroke, swipe gestures).' },
    { num: 3, label: 'Process', desc: 'Backend server processes parameters and query records.' },
    { num: 4, label: 'Display', desc: 'Rendering visual updates or output screens.' },
    { num: 5, label: 'Evaluate', desc: 'User interprets feedback to verify outcome state.' }
  ];

  return (
    <div className="flex-grow flex flex-col justify-center gap-3">
      <div className="flex justify-between items-center bg-slate-950 p-2.5 rounded-lg border border-slate-850 text-[10px] leading-relaxed font-sans min-h-[50px]">
        <p className="text-slate-350">
          <strong className="text-sky-400 font-lexend block uppercase mb-0.5">Phase {phases[activePhase].num}: {phases[activePhase].label}</strong>
          {phases[activePhase].desc}
        </p>
      </div>
      
      <div className="flex justify-center gap-1 sm:gap-1.5">
        {phases.map((p, idx) => (
          <button
            key={p.num}
            onClick={() => setActivePhase(idx)}
            className={`w-9 h-9 rounded-full border text-[10px] font-black font-lexend flex items-center justify-center transition-all duration-300 ${
              activePhase === idx 
                ? 'bg-sky-600 border-sky-500 text-white scale-110 shadow-md ring-4 ring-sky-500/20' 
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-650'
            }`}
          >
            {p.num}
          </button>
        ))}
      </div>
    </div>
  );
};

// Slide 10: Norman door lock padlock indicator
const Slide10Illustration: React.FC = () => {
  const [doorUnlocked, setDoorUnlocked] = useState(false);
  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-3">
      <div className="flex gap-4 items-center">
        <div className={`w-14 h-24 rounded-lg border-2 relative transition-all duration-300 flex items-center justify-center ${
          doorUnlocked ? 'bg-emerald-500/20 border-emerald-400 shadow-lg' : 'bg-slate-800 border-slate-700'
        }`}>
          <div className="absolute right-1 w-2.5 h-2.5 bg-yellow-500 rounded-full border border-slate-900" />
          <span className="text-[8px] font-black uppercase text-slate-300 font-lexend">Door</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <button 
            onClick={() => setDoorUnlocked(!doorUnlocked)}
            className={`px-3 py-2 rounded-lg border text-xs font-bold font-lexend transition ${
              doorUnlocked ? 'bg-emerald-600 border-emerald-500 text-white shadow-sm' : 'bg-slate-800 border-slate-700 text-slate-300'
            }`}
          >
            {doorUnlocked ? '🔑 Unlocked' : '🔒 Locked'}
          </button>
        </div>
      </div>

      <div className="w-full bg-slate-950 p-2.5 border border-slate-850 rounded-lg text-[10px] leading-relaxed font-sans">
        <p className="text-slate-350">
          <strong className="text-amber-400 font-lexend block mb-0.5 font-bold">Analysis:</strong>
          • <strong>Affordance:</strong> The door <em>affords</em> opening/passing.
          • <strong>Signifier:</strong> The padlock icon and color (red vs green) are <em>signifiers</em> indicating if it can be opened.
        </p>
      </div>
    </div>
  );
};

// Slide 12: YouTube player controls simulator
const Slide12Illustration: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(80);
  const [isBuffering, setIsBuffering] = useState(false);
  const [quality, setQuality] = useState('1080p');

  const triggerDelay = () => {
    setIsBuffering(true);
    setTimeout(() => setIsBuffering(false), 2000);
  };

  return (
    <div className="flex-grow flex flex-col gap-2 justify-center">
      {/* Mock Video Canvas */}
      <div className="w-full h-28 bg-black rounded-lg relative overflow-hidden flex items-center justify-center border border-slate-800">
        {isBuffering ? (
          <div className="flex flex-col items-center gap-1.5 animate-pulse text-sky-400 text-[10px]">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Buffering segments...</span>
          </div>
        ) : playing ? (
          <div className="text-center text-[10px] text-slate-300 space-y-1.5">
            <span className="text-emerald-400 font-black animate-pulse">● PLAYING VIDEO STREAM</span>
            <p className="text-[9px] text-slate-500">Timestamp: {Math.floor(progress * 0.1)}s / 10s</p>
          </div>
        ) : (
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Video Paused</span>
        )}

        <div className="absolute top-2 left-2 bg-slate-900/80 px-2 py-0.5 rounded text-[8px] font-mono text-sky-400 font-bold border border-slate-800">
          {quality} • AAC Audio
        </div>
      </div>

      {/* Progress Slider */}
      <div className="flex items-center gap-2">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-full accent-sky-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
        />
      </div>

      {/* Controls Bar */}
      <div className="flex justify-between items-center text-[10px] font-semibold">
        <div className="flex items-center gap-2.5">
          <button onClick={() => setPlaying(!playing)} className="p-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-205 border border-slate-750">
            {playing ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>
          <div className="flex items-center gap-1 text-slate-400">
            <Volume2 className="w-3.5 h-3.5" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-10 accent-slate-400 h-0.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select 
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="bg-slate-850 border border-slate-750 text-slate-300 rounded px-1 text-[9px] py-0.5 focus:outline-none"
          >
            <option value="1080p">1080p</option>
            <option value="720p">720p</option>
            <option value="480p">480p</option>
          </select>
          <button 
            onClick={triggerDelay}
            className="px-2 py-0.5 bg-sky-600 hover:bg-sky-700 text-white rounded text-[8px] font-bold font-lexend"
          >
            Simulate Delay
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 13: Google Maps route selector simulation
const Slide13Illustration: React.FC = () => {
  const [zoom, setZoom] = useState(1);
  const [activeLocation, setActiveLocation] = useState<string>('lobby');

  return (
    <div className="flex-grow flex flex-col gap-2 justify-center">
      {/* Mock Map Canvas */}
      <div className="w-full h-28 bg-slate-950 border border-slate-850 rounded-lg relative overflow-hidden shadow-inner flex items-center justify-center select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:16px_16px] transition-transform duration-300" style={{ transform: `scale(${zoom})` }} />
        
        {/* Map Path Line */}
        <div className="absolute w-28 h-0.5 bg-sky-400 border border-sky-400 blur-[0.5px] rotate-[30deg] animate-pulse" />

        {/* Pins */}
        <button
          onClick={() => setActiveLocation('registrar')}
          className="absolute top-4 left-6 flex flex-col items-center"
        >
          <MapPin className={`w-4 h-4 ${activeLocation === 'registrar' ? 'text-rose-500 animate-bounce' : 'text-slate-400'}`} />
          <span className="text-[6px] font-bold text-slate-300 bg-slate-900/80 px-1 rounded mt-0.5">Registrar</span>
        </button>

        <button
          onClick={() => setActiveLocation('lobby')}
          className="absolute bottom-4 right-10 flex flex-col items-center"
        >
          <MapPin className={`w-4 h-4 ${activeLocation === 'lobby' ? 'text-rose-500 animate-bounce' : 'text-slate-400'}`} />
          <span className="text-[6px] font-bold text-slate-300 bg-slate-900/80 px-1 rounded mt-0.5">Trimex Lobby</span>
        </button>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-1.5">
          <button 
            onClick={() => setZoom(prev => Math.min(2.5, prev + 0.3))}
            className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-205 border border-slate-750 text-[9px] font-bold font-lexend rounded"
          >
            Zoom +
          </button>
          <button 
            onClick={() => setZoom(prev => Math.max(0.6, prev - 0.3))}
            className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-205 border border-slate-750 text-[9px] font-bold font-lexend rounded"
          >
            Zoom -
          </button>
        </div>
        <span className="text-[9px] font-mono text-slate-400 font-bold">
          Coordinates: {activeLocation === 'registrar' ? 'X: 300, Y: 120' : 'X: 840, Y: 602'}
        </span>
      </div>
    </div>
  );
};

// Slide 14: Secure ATM withdraw card PIN terminal
const Slide14Illustration: React.FC = () => {
  const [pin, setPin] = useState('');
  const [status, setStatus] = useState<'login' | 'menu' | 'processing' | 'success'>('login');
  const [amount, setAmount] = useState<number | null>(null);

  const handlePinPress = (num: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
    }
  };

  const handleEnter = () => {
    if (pin === '1234') {
      setStatus('menu');
      setPin('');
    } else {
      alert('Invalid PIN number! Try entering "1234".');
      setPin('');
    }
  };

  const handleWithdraw = (val: number) => {
    setAmount(val);
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <div className="flex-grow flex flex-col gap-2 justify-center">
      <div className="w-full h-24 bg-slate-955 border border-slate-850 rounded-lg p-2 flex flex-col justify-between items-center relative overflow-hidden select-none font-sans text-center">
        {status === 'login' && (
          <div className="my-auto space-y-1.5">
            <span className="text-[10px] font-bold text-sky-400 font-lexend">Enter Student Card PIN:</span>
            <p className="text-xs font-mono font-bold tracking-widest text-white">
              {pin ? '*'.repeat(pin.length) : '____'}
            </p>
            <span className="text-[8px] text-slate-500 block font-semibold">(Hint: PIN is 1234)</span>
          </div>
        )}

        {status === 'menu' && (
          <div className="w-full h-full flex flex-col justify-between p-1">
            <span className="text-[8px] font-bold text-emerald-400 block font-lexend">PIN Verified successfully. Withdraw cash:</span>
            <div className="grid grid-cols-3 gap-1 mt-1 font-lexend">
              <button onClick={() => handleWithdraw(20)} className="py-1 bg-slate-850 hover:bg-slate-750 text-[8px] font-extrabold rounded border border-slate-800">$20</button>
              <button onClick={() => handleWithdraw(50)} className="py-1 bg-slate-850 hover:bg-slate-750 text-[8px] font-extrabold rounded border border-slate-800">$50</button>
              <button onClick={() => handleWithdraw(100)} className="py-1 bg-slate-850 hover:bg-slate-750 text-[8px] font-extrabold rounded border border-slate-800">$100</button>
            </div>
          </div>
        )}

        {status === 'processing' && (
          <div className="my-auto text-sky-400 text-[10px] font-semibold space-y-1.5">
            <Loader2 className="w-5 h-5 animate-spin mx-auto text-sky-400" />
            <span>Checking account balances...</span>
          </div>
        )}

        {status === 'success' && (
          <div className="my-auto text-emerald-400 text-[10px] font-bold space-y-1.5 animate-bounce">
            <CheckCircle2 className="w-5 h-5 mx-auto text-emerald-400" />
            <span>Withdrew ${amount}! Click Dispenser below to collect cash.</span>
          </div>
        )}
      </div>

      {status === 'login' ? (
        <div className="grid grid-cols-4 gap-1 select-none font-mono">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => (
            <button
              key={n}
              onClick={() => handlePinPress(String(n))}
              className="py-0.5 bg-slate-800 hover:bg-slate-750 rounded text-slate-205 text-[9px] font-bold border border-slate-750"
            >
              {n}
            </button>
          ))}
          <button onClick={() => setPin('')} className="py-0.5 bg-rose-900/40 hover:bg-rose-800 text-rose-300 rounded text-[8px] font-bold border border-rose-800">Clear</button>
          <button onClick={handleEnter} className="py-0.5 bg-emerald-900/40 hover:bg-emerald-800 text-emerald-300 rounded text-[8px] font-bold border border-emerald-800">Enter</button>
        </div>
      ) : (
        <button
          onClick={() => {
            setStatus('login');
            setPin('');
            setAmount(null);
          }}
          className="py-1 w-full bg-slate-800 hover:bg-slate-755 text-slate-350 rounded text-[9px] font-bold border border-slate-750 font-lexend"
        >
          Dispenser Gate: Retrieve Card & Cash (Click to Reset)
        </button>
      )}
    </div>
  );
};

// Slide 20: Capacitive touch gestures vs stylus
const Slide20Illustration: React.FC = () => {
  const [mode, setMode] = useState<'stylus' | 'touch'>('touch');
  const [stylusSelected, setStylusSelected] = useState(false);

  return (
    <div className="flex-grow flex flex-col gap-2 justify-center">
      <div className="flex gap-1.5 rounded-lg bg-slate-950 p-0.5 border border-slate-850">
        <button
          onClick={() => {
            setMode('stylus');
            setStylusSelected(false);
          }}
          className={`flex-1 py-1 px-2 rounded text-[10px] font-bold transition font-lexend ${
            mode === 'stylus' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-305'
          }`}
        >
          1990s Stylus Metaphor
        </button>
        <button
          onClick={() => setMode('touch')}
          className={`flex-1 py-1 px-2 rounded text-[10px] font-bold transition font-lexend ${
            mode === 'touch' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-305'
          }`}
        >
          2007 Capacitive Touch
        </button>
      </div>

      <div className="w-full h-20 bg-slate-950 border border-slate-850 rounded-lg p-2.5 flex items-center justify-center font-sans text-center">
        {mode === 'stylus' ? (
          <div className="space-y-1.5">
            <button
              onClick={() => setStylusSelected(!stylusSelected)}
              className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold transition font-lexend ${
                stylusSelected ? 'bg-amber-600 border-amber-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
            >
              {stylusSelected ? '✒️ Stylus Active' : '✏️ Select Stylus Controller'}
            </button>
            <p className="text-[9px] text-slate-500 font-medium">
              {stylusSelected ? 'Clicking target registers coordinates. High physical friction.' : 'You must select stylus hardware tool before clicking screen grid.'}
            </p>
          </div>
        ) : (
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const dot = document.createElement('div');
              dot.className = 'absolute w-6 h-6 bg-sky-500/35 border border-sky-400/50 rounded-full animate-ping pointer-events-none';
              dot.style.left = `${x - 12}px`;
              dot.style.top = `${y - 12}px`;
              e.currentTarget.appendChild(dot);
              setTimeout(() => dot.remove(), 800);
            }}
            className="w-full h-full relative cursor-pointer flex items-center justify-center text-[10px] text-slate-400 leading-relaxed font-semibold"
          >
            Tap anywhere inside this box directly! Low-friction capacitive direct input registers.
          </div>
        )}
      </div>
    </div>
  );
};

// Slide 21: Progress bar loading simulator
const Slide21Illustration: React.FC = () => {
  const [state, setState] = useState<'idle' | 'loading' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [barMode, setBarMode] = useState<'with' | 'without'>('with');

  const triggerCompilation = () => {
    setState('loading');
    setProgress(0);

    if (barMode === 'without') {
      setTimeout(() => {
        setState('completed');
      }, 3000);
    } else {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setState('completed');
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  return (
    <div className="flex-grow flex flex-col gap-2 justify-center">
      <div className="flex gap-1 bg-slate-950 p-0.5 rounded border border-slate-850 text-[10px] font-bold font-lexend">
        <button
          onClick={() => setBarMode('with')}
          className={`flex-1 py-1 rounded ${barMode === 'with' ? 'bg-sky-600 text-white' : 'text-slate-500'}`}
        >
          With Progress Indicator
        </button>
        <button
          onClick={() => setBarMode('without')}
          className={`flex-1 py-1 rounded ${barMode === 'without' ? 'bg-slate-800 text-white' : 'text-slate-500'}`}
        >
          Without Progress (Frozen)
        </button>
      </div>

      <div className="w-full h-20 bg-slate-955 border border-slate-850 rounded-lg flex items-center justify-center p-3 relative overflow-hidden font-mono text-[9px] text-center">
        {state === 'idle' && (
          <span className="text-slate-550 italic font-bold">System Idle. Press trigger below.</span>
        )}

        {state === 'loading' && (
          barMode === 'without' ? (
            <div className="absolute inset-0 bg-black flex items-center justify-center text-slate-655 animate-pulse">
              <span>[ SYSTEM COGNITIVE BLACKOUT - NO FEEDBACK ]</span>
            </div>
          ) : (
            <div className="w-full space-y-2">
              <span className="text-sky-400 font-bold block">Compiling dataset files: {progress}%</span>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div className="h-full bg-sky-500 transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <span className="text-[7.5px] text-slate-500 block">Est. remaining time: {Math.max(0, 1000 - progress * 10)}ms</span>
            </div>
          )
        )}

        {state === 'completed' && (
          <span className="text-emerald-450 font-bold flex items-center gap-1.5 justify-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Computation Complete! Loop resolved.
          </span>
        )}
      </div>

      <button
        disabled={state === 'loading'}
        onClick={triggerCompilation}
        className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-205 text-[10px] font-bold font-lexend rounded disabled:opacity-40"
      >
        Start Compiling Process
      </button>
    </div>
  );
};

// Slide 25: Undo / Redo stack cache
const Slide25Illustration: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['Slide 1', 'Slide 2', 'Slide 3']);
  const [trash, setTrash] = useState<string[]>([]);

  const handleUndo = () => {
    if (history.length > 0) {
      const copy = [...history];
      const removed = copy.pop();
      if (removed) {
        setTrash(prev => [...prev, removed]);
        setHistory(copy);
      }
    }
  };

  const handleRedo = () => {
    if (trash.length > 0) {
      const copy = [...trash];
      const added = copy.pop();
      if (added) {
        setHistory(prev => [...prev, added]);
        setTrash(copy);
      }
    }
  };

  return (
    <div className="flex-grow flex flex-col justify-center gap-3">
      <div className="flex gap-2">
        <button
          disabled={history.length === 0}
          onClick={handleUndo}
          className="flex-1 py-1.5 bg-slate-850 hover:bg-slate-750 border border-slate-700 rounded-lg text-xs font-bold font-lexend flex items-center justify-center gap-1 text-slate-205 disabled:opacity-30"
        >
          <Undo2 className="w-3.5 h-3.5" /> Undo
        </button>
        <button
          disabled={trash.length === 0}
          onClick={handleRedo}
          className="flex-1 py-1.5 bg-slate-850 hover:bg-slate-750 border border-slate-700 rounded-lg text-xs font-bold font-lexend flex items-center justify-center gap-1 text-slate-205 disabled:opacity-30"
        >
          <Redo2 className="w-3.5 h-3.5" /> Redo
        </button>
      </div>

      <div className="w-full bg-slate-950 p-2.5 border border-slate-850 rounded-lg text-[10px] leading-relaxed font-mono">
        <span className="text-[9px] uppercase font-bold tracking-wider text-slate-500 block mb-1">State History Cache:</span>
        {history.length > 0 ? (
          <p className="text-sky-400 font-bold">{history.join(' → ')}</p>
        ) : (
          <p className="text-slate-600 italic">History stack is empty</p>
        )}
      </div>
    </div>
  );
};

// Slide 30: 1964 wood mouse wheel coordinates rolling
const Slide30Illustration: React.FC = () => {
  const [xWheel, setXWheel] = useState(50);
  const [yWheel, setYWheel] = useState(50);
  const [clicks, setClicks] = useState(0);

  return (
    <div className="flex-grow flex flex-col gap-2 justify-center font-sans">
      {/* Visual Wooden block diagram */}
      <div className="w-full h-20 bg-amber-900 border border-amber-955 rounded-xl flex items-center justify-between px-4 relative overflow-hidden shadow-inner">
        <button
          onClick={() => setClicks(c => c + 1)}
          className="absolute top-2 left-2 w-3.5 h-3.5 bg-red-605 border border-red-950 rounded-full cursor-pointer animate-pulse"
          title="Trigger Click"
        />
        
        {/* Visual Wheels */}
        <div className="w-1.5 h-8 bg-slate-700 absolute right-4 top-1/2 -translate-y-1/2 rounded border border-slate-900 animate-pulse" />
        <div className="w-8 h-1.5 bg-slate-700 absolute bottom-3 left-1/2 -translate-x-1/2 rounded border border-slate-900" />
        <span className="text-[9px] font-black uppercase text-amber-100/40 select-none mx-auto font-lexend font-bold">Wooden Chassis</span>
      </div>

      <div className="space-y-1 text-[9px] font-mono leading-relaxed">
        <div className="flex justify-between">
          <span>Horizontal Wheel X: {xWheel}%</span>
          <span>Vertical Wheel Y: {yWheel}%</span>
        </div>
        <div className="flex gap-2">
          <input type="range" min="0" max="100" value={xWheel} onChange={(e) => setXWheel(Number(e.target.value))} className="flex-grow accent-sky-500 h-0.5 bg-slate-800 cursor-pointer" />
          <input type="range" min="0" max="100" value={yWheel} onChange={(e) => setYWheel(Number(e.target.value))} className="flex-grow accent-sky-500 h-0.5 bg-slate-800 cursor-pointer" />
        </div>
        <div className="flex justify-between items-center text-[10px] pt-1.5 border-t border-slate-850 font-sans font-bold">
          <span>Red Button Click count: {clicks}</span>
          <span className="text-sky-400 font-mono">Output: ({xWheel * 2}, {yWheel * 2})</span>
        </div>
      </div>
    </div>
  );
};

// Slide 36: Roadmap curriculum timeline
const Slide36Illustration: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col justify-center gap-2">
      <div className="flex flex-col gap-1.5 text-[10px] font-semibold">
        <div className="flex items-center gap-2 text-emerald-400">
          <CheckSquare className="w-4 h-4" />
          <span>Week 1: HCI Loop & Components (Completed!)</span>
        </div>
        <div className="flex items-center gap-2 text-sky-400">
          <div className="w-4 h-4 rounded-full border border-sky-400 flex items-center justify-center text-[8px] font-black font-lexend">2</div>
          <span>Week 2: Visual Metaphors & Desktop WIMP grids</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <div className="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center text-[8px] font-black font-lexend">3</div>
          <span>Week 3: Mobile Touch gestures & screen densities</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <div className="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center text-[8px] font-black font-lexend text-center">4</div>
          <span>Week 4: Immersive interfaces & physical kiosks</span>
        </div>
      </div>
    </div>
  );
};

// ROUTER THAT RENDER PRE-SEPARATED ILLUSTRATIONS WITHOUT CONFLICTING HOOK ORDERS
const ConceptIllustration: React.FC<{ slideId: string }> = ({ slideId }) => {
  if (slideId === 'media-slide2') return <Slide2Illustration />;
  if (slideId === 'media-slide4') return <Slide4Illustration />;
  if (slideId === 'media-slide8') return <Slide8Illustration />;
  if (slideId === 'media-slide10') return <Slide10Illustration />;
  if (slideId === 'media-slide12') return <Slide12Illustration />;
  if (slideId === 'media-slide13') return <Slide13Illustration />;
  if (slideId === 'media-slide14') return <Slide14Illustration />;
  if (slideId === 'media-slide20') return <Slide20Illustration />;
  if (slideId === 'media-slide21') return <Slide21Illustration />;
  if (slideId === 'media-slide25') return <Slide25Illustration />;
  if (slideId === 'media-slide30') return <Slide30Illustration />;
  if (slideId === 'media-slide36') return <Slide36Illustration />;

  // Default fallback illustration representing general interactive design
  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-2 font-lexend text-center">
      <div className="relative w-16 h-16 rounded-full border-2 border-dashed border-sky-400 flex items-center justify-center animate-spin-slow animate-pulse">
        <Settings className="w-8 h-8 text-sky-450" />
      </div>
      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">MEDIADSN Digital sandbox</span>
    </div>
  );
};

// -------------------------------------------------------------
// STANDALONE SUB-PAGES COMPONENTS
// -------------------------------------------------------------

const InteractiveObjectives: React.FC<SlideContentProps> = ({ slide }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const objectives = [
    {
      num: 1,
      title: "1. Understand the basics of interactive media design",
      meaning: "Grasping how digital products establish a dynamic conversation with human users, where inputs directly change outputs.",
      why: "To transition your mindset from static page design (newspapers, layouts) to system design, focusing on user behaviors and feedback states.",
      explain: "You should be able to define interactivity, trace the input-to-response loop, and explain user agency."
    },
    {
      num: 2,
      title: "2. Explore the history and evolution of interactive media",
      meaning: "Studying the shift of control models from mechanical boards to command lines, visual desktops (GUIs), web portals, touch, and voice.",
      why: "Understanding past interface transitions helps you predict future interface shifts and design for diverse device form factors.",
      explain: "You should be able to outline major milestones and explain why the GUI model remains a standard visual metaphor."
    },
    {
      num: 3,
      title: "3. Identify key components of interactive design",
      meaning: "Deconstructing interactive systems into their fundamental parts: User, Interface, Input, System, Output, and Feedback.",
      why: "When debugging user frustration or design failures, breaking the system into parts helps you pinpoint exactly where communication breaks down.",
      explain: "You should be able to audit any website or machine and map all six components clearly."
    }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4 font-sans">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Target className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow font-sans">
        <div className="md:col-span-6 flex flex-col gap-3 justify-center">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-2">{slide.topicTitle}</p>
          {objectives.map((obj) => (
            <button
              key={obj.num}
              onClick={() => setSelected(obj.num)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-semibold transition flex items-center justify-between group ${
                selected === obj.num
                  ? 'bg-sky-500/10 border-sky-500 text-sky-900 shadow-sm'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <span>{obj.title}</span>
              <ChevronRight className={`w-4 h-4 transition ${selected === obj.num ? 'translate-x-1 text-sky-600' : 'text-slate-400 group-hover:translate-x-0.5'}`} />
            </button>
          ))}
        </div>

        <div className="md:col-span-6 flex flex-col justify-center">
          {selected ? (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-inner">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-700 bg-sky-500/10 border border-sky-200 w-fit block font-lexend">
                Competency {selected} details
              </span>
              
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 font-lexend">
                  <Info className="w-3.5 h-3.5 text-sky-600" />
                  What It Means
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{objectives[selected - 1].meaning}</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 font-lexend">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  Why It Matters
                </h4>
                <p className="text-xs sm:text-sm text-slate-605 leading-relaxed font-semibold">{objectives[selected - 1].why}</p>
              </div>

              <div className="space-y-1 border-t border-slate-200 pt-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 font-lexend">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Student Outcomes
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-bold">{objectives[selected - 1].explain}</p>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center text-slate-400">
              <Target className="w-10 h-10 mb-2 opacity-40 text-slate-400" />
              <span className="text-xs font-bold">Select a competency checklist item on the left to reveal learning outlines.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const UserInputSimulator: React.FC<SlideContentProps> = ({ slide }) => {
  const [activeInput, setActiveInput] = useState<string>('Click');
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [inputText, setInputText] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [swipeIndex, setSwipeIndex] = useState(0);
  const [swipeStartX, setSwipeStartX] = useState<number | null>(null);

  const inputs = [
    { name: 'Click', icon: MousePointer, desc: 'Pressing physical mouse keys triggers instantaneous coordinate-based action triggers.' },
    { name: 'Hover', icon: Eye, desc: 'Positioning indicators inside element boundaries provides proactive visual pre-states.' },
    { name: 'Touch', icon: Hand, desc: 'Direct finger contact on capacitive glass, enabling tactile haptic screen coordinates.' },
    { name: 'Swipe', icon: ArrowRight, desc: 'Click, hold & drag left/right (or swipe on mobile) to paginate carousel screens!' },
    { name: 'Drag', icon: Move, desc: 'Click, hold, and drag directly inside the bounding box cage to move elements.' },
    { name: 'Type', icon: Keyboard, desc: 'Key presses compile dynamic alphanumeric inputs into text boxes.' }
  ];

  const activeInfo = inputs.find(i => i.name === activeInput) || inputs[0];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <MousePointer className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        <div className="md:col-span-5 flex flex-col gap-2 justify-center">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-1">{slide.topicTitle}</p>
          <div className="grid grid-cols-2 gap-2 font-lexend font-bold">
            {inputs.map((inp) => {
              const Icon = inp.icon;
              return (
                <button
                  key={inp.name}
                  onClick={() => {
                    setActiveInput(inp.name);
                    setDragOffset({ x: 20, y: 20 });
                    setIsDragging(false);
                  }}
                  className={`p-3 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center gap-1.5 ${
                    activeInput === inp.name
                      ? 'bg-sky-600 border-sky-600 text-white shadow-md'
                      : 'bg-white hover:bg-slate-55 border-slate-200 text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {inp.name}
                </button>
              );
            })}
          </div>
          <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed font-semibold">
            <strong className="text-slate-800 font-lexend font-bold">Input Description:</strong>
            <p className="mt-0.5 font-sans font-medium">{activeInfo.desc}</p>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col h-full justify-between items-center relative overflow-hidden select-none">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 absolute top-3 right-4 font-lexend">Live Interactive Screen</span>
            
            <div className="flex-grow w-full flex items-center justify-center min-h-[180px]">
              {activeInput === 'Click' && (
                <div className="text-center space-y-4">
                  <button
                    onClick={() => setClickCount(c => c + 1)}
                    className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold rounded-xl shadow-md transition text-xs sm:text-sm font-lexend"
                  >
                    Click Me!
                  </button>
                  <p className="text-xs font-semibold text-slate-500 animate-pulse">
                    Clicks registered: <strong className="text-sky-600 text-sm font-black">{clickCount}</strong>
                  </p>
                </div>
              )}

              {activeInput === 'Hover' && (
                <div className="text-center group p-8 border-2 border-dashed border-sky-300 hover:border-sky-500 hover:bg-sky-500/[0.03] rounded-2xl transition-all duration-300 cursor-default">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-sky-600 transition-colors uppercase tracking-widest font-lexend">
                    Cursor Box
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-700 group-hover:text-sky-700 mt-2 transition-transform duration-300 group-hover:scale-105">
                    Hovering modifies card scale & state!
                  </h3>
                </div>
              )}

              {activeInput === 'Touch' && (
                <div 
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const ripple = document.createElement('div');
                    ripple.className = 'absolute w-10 h-10 bg-sky-500/35 rounded-full border border-sky-500/50 pointer-events-none animate-ping';
                    ripple.style.left = `${x - 20}px`;
                    ripple.style.top = `${y - 20}px`;
                    e.currentTarget.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 1000);
                  }}
                  className="w-full h-full min-h-[160px] border border-slate-200 bg-slate-50 rounded-xl relative flex items-center justify-center cursor-pointer text-slate-400 font-semibold text-xs text-center p-4 hover:border-sky-300"
                >
                  Tap anywhere inside this box to simulate direct touch points & ripple effects!
                </div>
              )}

              {activeInput === 'Swipe' && (
                <div 
                  onMouseDown={(e) => {
                    setSwipeStartX(e.clientX);
                  }}
                  onMouseUp={(e) => {
                    if (swipeStartX !== null) {
                      const diff = e.clientX - swipeStartX;
                      if (diff > 50) {
                        setSwipeIndex(prev => Math.max(0, prev - 1));
                      } else if (diff < -50) {
                        setSwipeIndex(prev => Math.min(2, prev + 1));
                      }
                      setSwipeStartX(null);
                    }
                  }}
                  onMouseLeave={() => setSwipeStartX(null)}
                  className="w-full max-w-sm overflow-hidden relative border border-slate-200 rounded-xl bg-slate-50/55 p-4 cursor-grab active:cursor-grabbing select-none"
                >
                  <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${swipeIndex * 100}%)` }}>
                    <div className="min-w-full text-center p-4">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800 font-lexend">Screen 1: Click & Drag here!</h4>
                      <p className="text-[11px] text-slate-500 mt-1 font-medium">Direct swipe actions index content lists</p>
                    </div>
                    <div className="min-w-full text-center p-4">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800 font-lexend">Screen 2: Swipe left or right</h4>
                      <p className="text-[11px] text-slate-505 mt-1 font-medium">Carousels align to touch velocities</p>
                    </div>
                    <div className="min-w-full text-center p-4">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800 font-lexend">Screen 3: Completed!</h4>
                      <p className="text-[11px] text-slate-505 mt-1 font-medium">Non-linear horizontal pagination</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-1.5 mt-2">
                    {[0, 1, 2].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => setSwipeIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${swipeIndex === idx ? 'bg-sky-600' : 'bg-slate-300'}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {activeInput === 'Drag' && (
                <div 
                  onMouseMove={(e) => {
                    if (isDragging) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const newX = e.clientX - rect.left - 40;
                      const newY = e.clientY - rect.top - 40;
                      setDragOffset({
                        x: Math.max(0, Math.min(rect.width - 80, newX)),
                        y: Math.max(0, Math.min(rect.height - 80, newY))
                      });
                    }
                  }}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  className="w-full h-full min-h-[160px] border border-slate-200 bg-slate-55 rounded-xl relative overflow-hidden"
                >
                  <div
                    onMouseDown={(e) => {
                      setIsDragging(true);
                      e.preventDefault();
                    }}
                    className={`w-20 h-20 rounded-2xl bg-sky-600 hover:bg-sky-700 active:bg-sky-850 flex items-center justify-center text-white text-[10px] font-bold shadow-md cursor-grab active:cursor-grabbing absolute transition-all duration-75 font-lexend`}
                    style={{
                      left: `${dragOffset.x}px`,
                      top: `${dragOffset.y}px`
                    }}
                  >
                    Drag Me
                  </div>
                  <span className="text-[10px] text-slate-400 absolute bottom-2 left-1/2 -translate-x-1/2 select-none pointer-events-none font-medium">
                    Click, hold, and drag the box inside this container
                  </span>
                </div>
              )}

              {activeInput === 'Type' && (
                <div className="w-full max-w-xs space-y-3">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type letters on keyboard..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white font-medium"
                  />
                  <div className="p-3 bg-slate-100 border border-slate-205 rounded-xl min-h-[40px] text-xs font-semibold text-sky-700 break-all">
                    {inputText ? (
                      <>System state output: <span className="text-slate-850 font-bold">{inputText}</span></>
                    ) : (
                      <span className="text-slate-400 italic">Live dynamic output renders here...</span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="w-full border-t border-slate-200 pt-3 flex justify-between text-[10px] font-bold text-slate-400 text-center uppercase font-lexend">
              <span className="flex-1">1. ACTION</span>
              <span className="text-slate-300">→</span>
              <span className="flex-1">2. INTERFACE DETECTS</span>
              <span className="text-slate-350">→</span>
              <span className="flex-1">3. STATE UPDATE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StaticVsInteractive: React.FC<SlideContentProps> = ({ slide }) => {
  const [isInteractive, setIsInteractive] = useState(false);
  const [activePin, setActivePin] = useState<string | null>(null);

  const locations = [
    { id: 'registrar', name: 'A. Registrar Office', x: '20%', y: '30%', info: 'Schedules: Mon-Fri 8am-5pm. Direct enrollment submissions, student records, transcripts.' },
    { id: 'library', name: 'B. Main Library', x: '65%', y: '25%', info: 'Schedules: Mon-Sat 7am-9pm. Study desks, books database access, free student Wi-Fi zone.' },
    { id: 'canteen', name: 'C. Campus Canteen', x: '45%', y: '70%', info: 'Schedules: Mon-Fri 7am-6pm. Fresh food, drinks, snacks, dynamic queue boards.' }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Layers className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        <div className="md:col-span-5 flex flex-col justify-center gap-3">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">{slide.topicTitle}</p>
          
          <div className="flex rounded-xl bg-slate-105 p-1 border border-slate-200">
            <button
              onClick={() => {
                setIsInteractive(false);
                setActivePin(null);
              }}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 font-lexend ${
                !isInteractive ? 'bg-white shadow-sm text-slate-800' : 'text-slate-505 hover:text-slate-800'
              }`}
            >
              Static Mode
            </button>
            <button
              onClick={() => setIsInteractive(true)}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 font-lexend ${
                isInteractive ? 'bg-sky-600 shadow-sm text-white' : 'text-slate-505 hover:text-slate-800'
              }`}
            >
              Interactive Mode
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2 font-semibold">
            <strong className="text-slate-805 font-lexend font-bold">Cognitive Comparison:</strong>
            {!isInteractive ? (
              <p><strong>Static Mode</strong> represents a typical printed handbook or poster. Information is listed sequentially. Tapping elements yields no responses. You must read all text to find specific targets, increasing cognitive load.</p>
            ) : (
              <p><strong>Interactive Mode</strong> represents modern web apps. Instead of scanning lines of text, you tap locations directly on the visual map to filter info instantly, reducing cognitive load.</p>
            )}
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="w-full h-full min-h-[220px] bg-slate-50 border border-slate-200 rounded-2xl relative shadow-md overflow-hidden p-4 flex flex-col justify-between">
            
            <div className="flex-grow w-full relative bg-slate-100 rounded-xl border border-slate-200 shadow-inner flex items-center justify-center overflow-hidden min-h-[160px]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
              
              {locations.map((loc) => {
                const isActive = activePin === loc.id;
                return (
                  <div
                    key={loc.id}
                    className="absolute transition-transform duration-300"
                    style={{ left: loc.x, top: loc.y }}
                  >
                    <button
                      disabled={!isInteractive}
                      onClick={() => setActivePin(isActive ? null : loc.id)}
                      className={`w-8 h-8 rounded-full border shadow-md flex items-center justify-center font-bold text-xs transition-all ${
                        !isInteractive 
                          ? 'bg-slate-300 border-slate-400 text-slate-500 cursor-not-allowed'
                          : isActive
                            ? 'bg-sky-600 border-sky-505 text-white scale-110 ring-4 ring-sky-500/20'
                            : 'bg-white hover:bg-sky-50 border-sky-200 text-sky-605 hover:scale-105'
                      }`}
                      title={isInteractive ? `Click to inspect ${loc.name}` : ''}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}

              {isInteractive && activePin && (
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur border border-sky-200 rounded-xl shadow-lg animate-fade-in text-xs font-semibold animate-scale-up">
                  <h4 className="font-bold text-sky-800 flex items-center gap-1.5 font-lexend">
                    <MapPin className="w-3.5 h-3.5 text-sky-655" />
                    {locations.find(l => l.id === activePin)?.name}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {locations.find(l => l.id === activePin)?.info}
                  </p>
                </div>
              )}

              {!isInteractive && (
                <div className="absolute top-2 left-2 bg-slate-800/80 text-white text-[9.5px] font-bold px-2 py-0.5 rounded tracking-wide border border-slate-605 font-mono">
                  STATIC MAP (BUTTONS DISABLED)
                </div>
              )}
            </div>

            {!isInteractive && (
              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-200 pt-3 text-[10px] text-slate-500 font-semibold font-sans">
                {locations.map(loc => (
                  <div key={loc.id} className="p-1.5 bg-slate-105 border border-slate-200 rounded">
                    <strong className="text-slate-800 font-lexend">{loc.name.split(' ')[0]} {loc.name.split(' ')[1]}</strong>
                    <p className="text-[9px] text-slate-500 leading-tight mt-0.5 font-medium">{loc.info.slice(0, 40)}...</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractionLoop: React.FC<SlideContentProps> = ({ slide }) => {
  const [step, setStep] = useState(0);
  const steps = [
    { id: 0, title: 'Goal Formulation', desc: 'The user defines what they want to achieve in their head (e.g. checking their remaining class attendance score).', code: 'USER INTENT' },
    { id: 1, title: 'Input Execution', desc: 'The user executes physical actions through coordinates or mechanical keys (e.g. clicking the "Grade Report" button).', code: 'HARDWARE TRANSLATION' },
    { id: 2, title: 'System Processing', desc: 'The application runs calculations, executes algorithms, fetches queries, and compiles a new state.', code: 'COMPUTATIONAL LOGIC' },
    { id: 3, title: 'Output Display', desc: 'The system renders visual changes, plays audio prompts, or vibrates controllers to express the new state.', code: 'SCREEN UPDATE' },
    { id: 4, title: 'Evaluation & Feedback', desc: 'The user interprets the feedback output, decides if their goal was successfully met, and plans the next step.', code: 'LOOP CLOSURE' }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <RotateCcw className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        <div className="md:col-span-5 flex flex-col justify-center gap-2">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-1">{slide.topicTitle}</p>
          <div className="flex flex-col gap-2">
            {steps.map((st) => (
              <button
                key={st.id}
                onClick={() => setStep(st.id)}
                className={`w-full text-left p-2.5 rounded-xl border text-xs font-bold transition flex items-center gap-3 font-lexend ${
                  step === st.id
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md animate-pulse font-black'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                  step === st.id ? 'bg-white text-sky-700' : 'bg-slate-200 text-slate-500'
                }`}>
                  {st.id + 1}
                </span>
                <span>{st.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-inner flex flex-col justify-between h-full min-h-[220px] font-sans">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-2.5 mb-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-700 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-100 font-lexend">
                  Step {step + 1} of 5
                </span>
                <span className="font-lexend text-[9px] font-mono font-bold text-slate-400">{steps[step].code}</span>
              </div>

              <h3 className="font-lexend text-base sm:text-lg font-bold text-slate-805">
                {steps[step].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-medium">
                {steps[step].desc}
              </p>
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-xl text-[11px] text-slate-600 leading-relaxed font-semibold animate-fade-in font-sans">
              <strong className="text-slate-800 flex items-center gap-1 font-lexend">
                <Info className="w-3.5 h-3.5 text-sky-600" />
                Real-World Example (Web search):
              </strong>
              <p className="mt-1 font-sans font-medium">
                {step === 0 && 'User Formulation: Wants to locate a specific student center.'}
                {step === 1 && 'Input Action: Clicks cursor inside search box, types "Student Center", presses Enter key.'}
                {step === 2 && 'System Processing: Browser collects characters, submits request, server queries database matching rows.'}
                {step === 3 && 'Output Display: Interface refreshes, markers center on the location coordinates.'}
                {step === 4 && 'Feedback Evaluation: User notices the red pin overlaying "Student Center" and closes the interaction loop.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComponentsDiagram: React.FC<SlideContentProps> = ({ slide }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const components = [
    { id: 'user', name: 'User', desc: 'The active human agent who has goals, needs, and cognitive models, supplying the driving force of inputs.', role: 'Initiator of action loops.' },
    { id: 'interface', name: 'Interface', desc: 'The display screen, audio grids, or touch controls where users read data and input commands.', role: 'The communication membrane.' },
    { id: 'input', name: 'Input', desc: 'The actions (clicks, keys, voice, gestures) processed by the input hardware into coordinate systems.', role: 'Translator of human intent.' },
    { id: 'system', name: 'System', desc: 'The computational server, processor, databases, and variables that run logic and update records.', role: 'Brain of the digital system.' },
    { id: 'output', name: 'Output', desc: 'The visible screen updates, audible voice alerts, and haptic signals returned.', role: 'Feedback display channels.' },
    { id: 'feedback', name: 'Feedback', desc: 'The immediate visual/audible/tactile signs indicating that the action was recognized and state updated.', role: 'Crucial confirmation loop.' }
  ];

  const activeInfo = components.find(c => c.id === selected);

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Brain className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        <div className="md:col-span-6 flex flex-col justify-center">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-3">{slide.topicTitle}</p>
          <div className="grid grid-cols-3 gap-2.5 relative p-4 bg-slate-100 rounded-2xl border border-slate-200 font-lexend font-bold">
            {components.map((comp) => {
              const isActive = selected === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelected(isActive ? null : comp.id)}
                  className={`p-3.5 rounded-xl border text-xs font-black tracking-wider transition-all uppercase ${
                    isActive
                      ? 'bg-sky-600 text-white border-sky-600 scale-105 shadow-md ring-4 ring-sky-500/20 animate-pulse'
                      : 'bg-white hover:bg-sky-50 border-slate-200 text-slate-700'
                  }`}
                >
                  {comp.name}
                </button>
              );
            })}

            <div className="col-span-3 text-center text-[10px] text-slate-500 font-bold border-t border-slate-200 pt-2 mt-1 select-none font-mono">
              USER → INPUT → INTERFACE → SYSTEM → OUTPUT → FEEDBACK
            </div>
          </div>
        </div>

        <div className="md:col-span-6 flex flex-col justify-center">
          {activeInfo ? (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5 shadow-inner animate-fade-in font-sans">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-700 bg-sky-500/10 border border-sky-100 px-2 py-0.5 rounded w-fit block font-lexend">
                {activeInfo.name} Node Details
              </span>
              
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-805 uppercase tracking-wider flex items-center gap-1 font-lexend">
                  <Info className="w-3.5 h-3.5 text-sky-600" />
                  Function Definition
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{activeInfo.desc}</p>
              </div>

              <div className="space-y-1 border-t border-slate-200 pt-3">
                <h4 className="text-xs font-bold text-slate-805 uppercase tracking-wider flex items-center gap-1 font-lexend">
                  <Target className="w-3.5 h-3.5 text-emerald-600" />
                  System Role
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">{activeInfo.role}</p>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center text-slate-400">
              <Brain className="w-10 h-10 mb-2 opacity-40 text-slate-400" />
              <span className="text-xs font-bold">Tap any component node block in the grid to highlight relationships and reveal operational details.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const HistoryTimeline: React.FC<SlideContentProps> = ({ slide }) => {
  const [milestone, setMilestone] = useState(0);
  const timeline = [
    { year: '1960s', title: 'Command-Line Interfaces (CLI)', desc: 'Teletypes and video screens let users type text syntax instructions. Interaction was slow, sequential, and text-only.', why: 'Replaced manual hardware configurations with real-time text directives.', badge: 'TEXT / CLI', sample: 'C:\\projects> open document.txt' },
    { year: '1984', title: 'Graphical User Interfaces (GUI)', desc: 'The WIMP model (Windows, Icons, Menus, Pointer) and mouse controller mapping. Users clicked, dragged, and adjusted objects directly.', why: 'Substituted recall memory rules with visual real-world metaphors (desktop, folders).', badge: 'WIMP / MOUSE', sample: 'Folder (Double-Click) -> File opens' },
    { year: '1990s', title: 'The World Wide Web (WWW)', desc: 'Hyperlinks dynamically linked pages across global servers. Users navigated non-linearly, choosing their reading coordinates.', why: 'Connected global knowledge documents in a single open-source protocol.', badge: 'HYPERTEXT', sample: 'href="page2.html" -> Link changes page' },
    { year: '2007', title: 'Mobile & Capacitive Touch', desc: 'Direct fingertip gestures (swiping, pinching to zoom) replaced external cursors. Interfaces became direct touch plates.', why: 'Closed the spatial gap between input action and screen output results.', badge: 'TOUCH / MOBILE', sample: 'Pinch screen -> Image size zooms' },
    { year: '2010s+', title: 'Modern Immersive Experiences', desc: 'Virtual Reality, Augmented Reality, voice inputs (Alexa, Siri), and smart sensors. Interfaces merge into physical surroundings.', why: 'Eliminates the glass monitor barrier entirely, integrating media into active living spaces.', badge: 'IMMERSIVE / SPATIAL', sample: 'Voice: "Turn off lights" -> Action triggers' }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Clock className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        <div className="md:col-span-5 flex flex-col justify-center gap-3">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">{slide.topicTitle}</p>
          
          <div className="relative border-l-2 border-slate-200 pl-4 py-2 space-y-4 font-lexend">
            {timeline.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setMilestone(idx)}
                className="flex items-center gap-3 text-left w-full group relative focus:outline-none"
              >
                <span className={`w-3.5 h-3.5 rounded-full border absolute -left-[23px] transition-all ${
                  milestone === idx
                    ? 'bg-sky-600 border-sky-505 scale-125 ring-4 ring-sky-500/10'
                    : 'bg-white border-slate-300 hover:border-slate-400 group-hover:scale-105'
                }`} />
                <div>
                  <span className={`font-lexend text-[10px] font-extrabold tracking-wider ${
                    milestone === idx ? 'text-sky-600' : 'text-slate-500'
                  }`}>
                    {item.year}
                  </span>
                  <h4 className={`text-xs font-bold font-lexend ${
                    milestone === idx ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-750'
                  }`}>
                    {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-inner flex flex-col justify-between h-full min-h-[280px] font-sans">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-700 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-200 w-fit font-lexend">
                  {timeline[milestone].badge}
                </span>
                <span className="font-lexend text-xs font-black text-slate-400 font-mono">{timeline[milestone].year}</span>
              </div>
              
              <h3 className="font-lexend text-base sm:text-lg font-bold text-slate-800">{timeline[milestone].title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5 font-medium">{timeline[milestone].desc}</p>
            </div>

            {/* ERA-SPECIFIC MACHINE MOCKUP VIEWPORT */}
            <div className="w-full h-32 bg-slate-900 border border-slate-850 rounded-xl overflow-hidden relative shadow-inner p-3 flex flex-col justify-between">
              {milestone === 0 && (
                <div className="w-full h-full flex flex-col justify-between font-mono text-[9px] text-emerald-400 p-1">
                  <div>
                    <span className="opacity-60 block border-b border-slate-800 pb-1 mb-1">DEC VT100 TERMINAL SIMULATION (1960s CLI)</span>
                    <p>{'>'} HELP</p>
                    <p>Commands: DISPLAY, PRINT, RUN COBOL</p>
                    <p>{'>'} RUN COBOL PROGRAM</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="animate-pulse w-1.5 h-3 bg-emerald-400" />
                    <span className="text-[8px] text-slate-400 font-sans font-bold">Retro keyboard inputs translated sequentially.</span>
                  </div>
                </div>
              )}

              {milestone === 1 && (
                <div className="w-full h-full flex flex-col justify-between text-slate-800 bg-slate-200 p-2 border-2 border-slate-405 rounded shadow-md relative overflow-hidden font-sans">
                  <div className="flex justify-between items-center bg-white border-b border-slate-300 px-1 py-0.5 text-[8px] font-black font-lexend">
                    <span> File Edit View Special</span>
                    <span>10:30 AM</span>
                  </div>
                  <div className="flex-grow flex items-center justify-center gap-4">
                    <div className="flex flex-col items-center gap-1 cursor-pointer scale-90 border border-transparent hover:bg-sky-500/10 hover:border-sky-300 rounded p-1">
                      <FolderOpen className="w-6 h-6 text-sky-600" />
                      <span className="text-[8px] font-extrabold font-lexend">System Folder</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer scale-90 border border-transparent hover:bg-sky-500/10 hover:border-sky-300 rounded p-1">
                      <FileText className="w-6 h-6 text-slate-700" />
                      <span className="text-[8px] font-extrabold font-lexend">MacPaint</span>
                    </div>
                  </div>
                  <span className="text-[8px] text-slate-505 font-bold text-center">Apple Macintosh 128K WIMP Desktop Metaphor (1984)</span>
                </div>
              )}

              {milestone === 2 && (
                <div className="w-full h-full flex flex-col justify-between text-slate-800 bg-white border border-slate-300 rounded shadow-sm relative overflow-hidden font-sans font-bold">
                  <div className="bg-slate-100 border-b border-slate-200 p-1 flex items-center justify-between text-[8px] font-bold">
                    <span className="font-lexend text-[7px] text-slate-500 font-black">Netscape Navigator 3.0 (1990s Web)</span>
                    <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-600 font-mono">http://www.trimex.edu</span>
                  </div>
                  <div className="flex-grow p-2 overflow-y-auto text-[8px] leading-relaxed font-semibold">
                    <h5 className="font-bold text-sky-605 underline cursor-pointer">Welcome to Trimex Hypertext Document</h5>
                    <p className="text-slate-500 mt-1">
                      Clicking hyper-anchors redirects page browser queries globally via packet relays.
                    </p>
                  </div>
                </div>
              )}

              {milestone === 3 && (
                <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-200 p-2 font-sans relative">
                  <div className="w-24 h-full border-4 border-slate-750 rounded-2xl bg-slate-900 relative overflow-hidden flex flex-col justify-between p-1.5 animate-pulse">
                    <div className="h-1 w-8 bg-slate-850 rounded-full mx-auto" />
                    <div className="flex-grow flex flex-col items-center justify-center gap-1 text-center scale-90">
                      <Smartphone className="w-6 h-6 text-sky-400" />
                      <span className="text-[7px] font-bold tracking-tight">Capacitive Glass Grid</span>
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full border border-slate-750 mx-auto" />
                  </div>
                  <div className="ml-4 text-left text-[9px] font-medium space-y-1 leading-snug">
                    <span className="text-sky-400 font-bold uppercase tracking-wider block font-lexend">Smartphone Metaphor (2007)</span>
                    <p className="text-slate-400 font-semibold">Pure screen glass allows direct tactile coordinates inputs (pinch, zoom, scroll gestures).</p>
                  </div>
                </div>
              )}

              {milestone === 4 && (
                <div className="w-full h-full bg-slate-950 text-slate-200 p-2 relative overflow-hidden flex justify-between items-center font-sans">
                  <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] bg-[size:10px_10px] opacity-15" />
                  <div className="space-y-1.5 z-10 max-w-[180px] text-left">
                    <span className="text-sky-400 font-bold text-[8px] uppercase tracking-wider block font-lexend">Spatial Computing Viewport (2010s+)</span>
                    <p className="text-[8px] text-slate-350 leading-relaxed font-semibold">
                      Digital interface layers map directly onto physical spaces via camera depth coordinates.
                    </p>
                  </div>
                  <div className="border border-sky-505/30 rounded bg-sky-500/10 p-2 text-center animate-pulse z-10 font-mono">
                    <span className="text-sky-400 text-[8px] font-bold">AR HUD</span>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-2.5 rounded-lg border border-slate-200 bg-white space-y-1">
                <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block font-lexend">Sample Interaction:</span>
                <p className="text-[11px] font-mono text-slate-700 leading-relaxed break-words bg-slate-55 p-1.5 rounded border border-slate-100 font-bold">
                  {timeline[milestone].sample}
                </p>
              </div>
              <div className="p-2.5 rounded-lg border border-sky-205 bg-sky-500/[0.02] space-y-1">
                <span className="text-[9px] uppercase font-bold tracking-wider text-sky-700 block font-lexend">Why it mattered:</span>
                <p className="text-[11px] text-slate-600 leading-snug font-semibold">
                  {timeline[milestone].why}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CliVsGui: React.FC<SlideContentProps> = ({ slide }) => {
  const [cliInput, setCliInput] = useState('');
  const [cliOutput, setCliOutput] = useState<string[]>([
    'MEDIADSN Terminal v1.0.0 (Windows)',
    'Type suggestions or click button to run.',
    'Available files: document.txt, image.png'
  ]);
  const [guiState, setGuiState] = useState<'Folder' | 'FileOpen'>('Folder');

  const handleCliCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output = [...cliOutput, `> ${cmd}`];
    if (cleanCmd === 'help') {
      output.push('Commands: dir (list files), open document.txt, help');
    } else if (cleanCmd === 'dir') {
      output.push('Directory of C:\\projects\\Lessons', '2026-08-13  10:30  [FILE]  document.txt', '2026-08-13  10:30  [FILE]  image.png');
    } else if (cleanCmd === 'open document.txt') {
      output.push('Loading document.txt...', 'Success! File Content:', '-------------------------------------------', 'Interactive Media Design is user-centered.', '-------------------------------------------');
    } else if (cleanCmd) {
      output.push(`Command "${cmd}" not recognized. Type "help" for options.`);
    }
    setCliOutput(output);
    setCliInput('');
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Terminal className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        <div className="md:col-span-6 flex flex-col justify-between border border-slate-300 rounded-xl bg-slate-950 text-slate-200 p-4 font-mono text-[10px] min-h-[220px] shadow-lg relative overflow-hidden">
          <div className="absolute top-2 right-4 text-slate-500 text-[9px] font-bold uppercase tracking-widest font-sans">Command Line Panel</div>
          
          <div className="flex-grow overflow-y-auto max-h-[140px] space-y-1 pr-1">
            {cliOutput.map((out, idx) => (
              <div key={idx} className="whitespace-pre-wrap">{out}</div>
            ))}
          </div>
          
          <div className="border-t border-slate-850 pt-3 mt-3 flex flex-col gap-2">
            <div className="flex gap-1.5 flex-wrap">
              <button
                onClick={() => handleCliCommand('help')}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[9px] font-semibold font-mono"
              >
                Type "help"
              </button>
              <button
                onClick={() => handleCliCommand('dir')}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[9px] font-semibold font-mono"
              >
                Type "dir"
              </button>
              <button
                onClick={() => handleCliCommand('open document.txt')}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[9px] font-semibold font-mono"
              >
                Type "open document.txt"
              </button>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-505 font-bold">{'>'}</span>
              <input
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && cliInput.trim()) {
                    handleCliCommand(cliInput);
                  }
                }}
                placeholder="Type CLI command..."
                className="flex-grow bg-transparent text-slate-200 border-none outline-none focus:ring-0 text-[10px] w-full font-mono"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-6 flex flex-col justify-between border border-slate-200 rounded-xl bg-slate-50 text-slate-900 p-4 min-h-[220px] shadow-lg relative overflow-hidden font-sans">
          <div className="absolute top-2 right-4 text-slate-400 text-[9px] font-bold uppercase tracking-widest font-sans">GUI Desktop Panel</div>
          
          <div className="flex-grow flex items-center justify-center min-h-[140px] w-full font-sans">
            {guiState === 'Folder' ? (
              <div className="flex gap-6 justify-center">
                <div
                  onDoubleClick={() => setGuiState('FileOpen')}
                  onClick={() => {
                    const note = document.createElement('div');
                    note.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 text-white text-[9px] px-3 py-1.5 rounded-lg border border-slate-700 pointer-events-none transition animate-fade-out font-bold font-lexend';
                    note.innerText = 'Double-click to Open!';
                    document.getElementById('gui-sandbox')?.appendChild(note);
                    setTimeout(() => note.remove(), 1200);
                  }}
                  className="flex flex-col items-center gap-1.5 cursor-pointer p-3 border border-transparent hover:bg-sky-500/10 hover:border-sky-300 rounded-xl select-none animate-pulse"
                >
                  <FileText className="w-10 h-10 text-sky-600 animate-scale-up" />
                  <span className="text-[10px] font-bold text-slate-700 text-center font-lexend">document.txt</span>
                </div>
                
                <div className="flex flex-col items-center gap-1.5 cursor-not-allowed opacity-50 p-3 rounded-xl select-none">
                  <FolderOpen className="w-10 h-10 text-amber-505" />
                  <span className="text-[10px] font-bold text-slate-500 text-center font-lexend">Lesson files</span>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-sm bg-white border border-slate-300 rounded-xl shadow-md p-3 relative animate-scale-up">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2.5 font-sans font-bold">
                  <span className="text-[9px] font-bold text-slate-550 flex items-center gap-1 font-lexend">
                    <FileText className="w-3.5 h-3.5 text-sky-605" />
                    document.txt — Notepad
                  </span>
                  <button
                    onClick={() => setGuiState('Folder')}
                    className="px-1.5 py-0.5 rounded hover:bg-rose-500 hover:text-white text-[9px] text-slate-500 font-black font-sans"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-[10.5px] text-slate-800 leading-relaxed font-semibold bg-slate-100 p-2 border border-slate-200 rounded-md shadow-inner">
                  Interactive Media Design is user-centered, combining user goals, dynamic systems, interfaces, and clear feedback loops.
                </p>
              </div>
            )}
          </div>

          <div id="gui-sandbox" className="border-t border-slate-200 pt-3 mt-3 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase font-lexend">
            <span>WIMP Metaphor: Double-click triggers file opening directly.</span>
            {guiState === 'FileOpen' && (
              <button
                onClick={() => setGuiState('Folder')}
                className="px-2 py-0.5 rounded border border-slate-200 bg-white hover:bg-slate-100 text-[8px] font-extrabold text-slate-600 font-lexend"
              >
                Go Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonSimulator: React.FC<SlideContentProps> = ({ slide }) => {
  const [state, setState] = useState<'Default' | 'Hover' | 'Focus' | 'Active' | 'Disabled' | 'Loading' | 'Success'>('Default');
  const [runState, setRunState] = useState(false);

  const states = ['Default', 'Hover', 'Focus', 'Active', 'Disabled', 'Loading', 'Success'];

  const handleButtonClick = async () => {
    if (state === 'Disabled' || runState) return;
    
    setRunState(true);
    setState('Active');
    setTimeout(() => {
      setState('Loading');
      setTimeout(() => {
        setState('Success');
        setTimeout(() => {
          setState('Default');
          setRunState(false);
        }, 2000);
      }, 1500);
    }, 300);
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Sliders className="w-5 h-5 md:w-6 md:h-6 text-sky-600 animate-pulse" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold font-sans">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow font-sans animate-fade-in">
        <div className="md:col-span-5 flex flex-col justify-center gap-2">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-1">{slide.topicTitle}</p>
          <div className="flex flex-col gap-1.5 font-lexend font-bold font-lexend">
            {states.map((st) => (
              <button
                key={st}
                disabled={runState}
                onClick={() => setState(st as any)}
                className={`w-full text-left px-3 py-2 rounded-xl border text-[11px] font-bold transition flex justify-between items-center ${
                  state === st
                    ? 'bg-sky-500/10 border-sky-505 text-sky-900 shadow-inner font-black'
                    : 'bg-white hover:bg-slate-55 border-slate-202 text-slate-600 disabled:opacity-40'
                }`}
              >
                <span>{st} state</span>
                {state === st && <Check className="w-3.5 h-3.5 text-sky-600" />}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="p-5 rounded-2xl bg-white border border-slate-202 shadow-md h-full flex flex-col justify-between items-center relative min-h-[220px]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 absolute top-3 right-4 font-lexend font-bold">Interactive Button Display</span>
            
            <div className="flex-grow w-full flex items-center justify-center">
              <button
                disabled={state === 'Disabled' || state === 'Loading'}
                onClick={handleButtonClick}
                className={`px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 font-lexend ${
                  state === 'Default' && 'bg-sky-600 hover:bg-sky-700 text-white shadow-md'
                } ${
                  state === 'Hover' && 'bg-sky-700 text-white shadow-lg scale-[1.03]'
                } ${
                  state === 'Focus' && 'bg-sky-605 text-white ring-4 ring-sky-500/35 border-sky-505 shadow-md'
                } ${
                  state === 'Active' && 'bg-sky-800 text-white scale-95'
                } ${
                  state === 'Disabled' && 'bg-slate-200 border border-slate-300 text-slate-400 cursor-not-allowed shadow-none'
                } ${
                  state === 'Loading' && 'bg-sky-600 text-white shadow-none cursor-wait'
                } ${
                  state === 'Success' && 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                }`}
              >
                {state === 'Loading' && <Loader2 className="w-4 h-4 animate-spin text-white" />}
                {state === 'Success' && <Check className="w-4 h-4 text-white" />}
                
                {state === 'Default' && 'Submit Form'}
                {state === 'Hover' && 'Hovering...'}
                {state === 'Focus' && 'Focused / Selected'}
                {state === 'Active' && 'Submitting...'}
                {state === 'Disabled' && 'Form Disabled'}
                {state === 'Loading' && 'Processing Request...'}
                {state === 'Success' && 'Enrollment Successful!'}
              </button>
            </div>

            <div className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 text-[10px] text-slate-600 font-semibold leading-relaxed font-sans">
              <strong className="text-slate-800 font-lexend font-bold">State Details:</strong>
              {state === 'Default' && <p>Default: Standard resting control state. Clearly signals affordance of action trigger.</p>}
              {state === 'Hover' && <p>Hover: Immediate visual pre-indication that cursor is aligned with target coordinates.</p>}
              {state === 'Focus' && <p>Focus: Keyboard selection indication, critical for screen reader users and navigation accessibility.</p>}
              {state === 'Active' && <p>Active: Tactile compression indicator, showing click coordinates have registered.</p>}
              {state === 'Disabled' && <p>Disabled: Greys out and disables click triggers. Prevents double-submitting forms.</p>}
              {state === 'Loading' && <p>Loading: Spinner animation confirms system is actively computing. Reduces user anxiety.</p>}
              {state === 'Success' && <p>Success: Confirms completion. Loop is resolved successfully; user can proceed.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractionSlider: React.FC<SlideContentProps> = ({ slide }) => {
  const [val, setVal] = useState(50);
  const [clicks, setClicks] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }, [val]);

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4 font-sans">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Sliders className="w-5 h-5 md:w-6 md:h-6 text-sky-600 animate-pulse" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow font-sans">
        <div className="md:col-span-5 flex flex-col justify-center gap-4">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">{slide.topicTitle}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-655 font-lexend">
              <span>Interactivity: {val}%</span>
              <span className="text-sky-700 font-extrabold uppercase">
                {val <= 10 && 'Static / Passive'}
                {val > 10 && val <= 40 && 'Low / Navigation'}
                {val > 40 && val <= 75 && 'Medium / Responsive'}
                {val > 75 && 'High / Immersive'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={val}
              onChange={(e) => setVal(Number(e.target.value))}
              className="w-full accent-sky-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-600 leading-relaxed font-semibold">
            <strong className="text-slate-805 font-lexend font-bold">Operational details:</strong>
            {val <= 10 && <p><strong>0-10% Level:</strong> Traditional reading mode. Static layouts, linear lines of text. Zero feedback options.</p>}
            {val > 10 && val <= 40 && <p><strong>11-40% Level:</strong> Accordions and navigation. Users click items to reveal lists, reducing screen visual clutter.</p>}
            {val > 40 && val <= 75 && <p><strong>41-75% Level:</strong> Dynamic values. Entering content refreshes variables, allowing users to select parameters.</p>}
            {val > 75 && <p><strong>76-100% Level:</strong> Full system simulation. The interface responds with immediate computational loops (like our drawing pad!).</p>}
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-md h-full flex flex-col justify-between items-center relative min-h-[220px] overflow-hidden font-sans">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 absolute top-3 right-4 font-lexend font-bold">Responsiveness Sandbox</span>
            
            <div className="flex-grow w-full flex items-center justify-center py-2">
              {val <= 10 && (
                <div className="text-center p-4 animate-fade-in">
                  <h4 className="font-lexend font-bold text-slate-800 text-sm">Static Page Concept</h4>
                  <p className="text-[11px] text-slate-500 mt-1 max-w-xs leading-relaxed font-medium">
                    You are viewing static text. Click actions are disabled. This screen remains unchanged regardless of cursor actions.
                  </p>
                </div>
              )}

              {val > 10 && val <= 40 && (
                <div className="w-full max-w-xs space-y-2 animate-fade-in">
                  <details className="group border border-slate-200 rounded-lg bg-slate-50 p-2.5">
                    <summary className="text-[11px] font-bold text-slate-805 cursor-pointer list-none flex justify-between items-center font-lexend">
                      <span>Click to Expand Panel A</span>
                      <span className="text-[9px] text-slate-400 group-open:rotate-180 transition">▼</span>
                    </summary>
                    <p className="text-[10px] text-slate-500 leading-relaxed mt-1.5 font-medium">
                      Interactive accordions hide verbose text, helping students explore chapters progressively.
                    </p>
                  </details>
                  <details className="group border border-slate-200 rounded-lg bg-slate-50 p-2.5">
                    <summary className="text-[11px] font-bold text-slate-805 cursor-pointer list-none flex justify-between items-center font-lexend">
                      <span>Click to Expand Panel B</span>
                      <span className="text-[9px] text-slate-400 group-open:rotate-180 transition">▼</span>
                    </summary>
                    <p className="text-[10px] text-slate-500 leading-relaxed mt-1.5 font-medium">
                      Hiding content maps directly to user-directed interest thresholds.
                    </p>
                  </details>
                </div>
              )}

              {val > 40 && val <= 75 && (
                <div className="text-center space-y-3 animate-fade-in">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-800 font-lexend">Dynamic Score Incrementor</h4>
                  <button
                    onClick={() => setClicks(c => c + 1)}
                    className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold rounded-lg text-xs shadow-sm transition font-lexend"
                  >
                    Register Clicks
                  </button>
                  <p className="text-[11px] text-slate-500 font-semibold">
                    Calculated loop score: <strong className="text-sky-600 text-xs font-black">{clicks}</strong>
                  </p>
                </div>
              )}

              {val > 75 && (
                <div className="w-full h-full min-h-[160px] border border-slate-200 rounded-xl relative overflow-hidden bg-slate-50 p-3 flex flex-col justify-between animate-scale-up">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-lexend">Drawing Sandbox (Symmetrical)</span>
                    <button
                      onClick={() => {
                        const c = canvasRef.current;
                        const ctx = c?.getContext('2d');
                        if (ctx && c) ctx.clearRect(0, 0, c.width, c.height);
                      }}
                      className="px-2 py-0.5 rounded border border-slate-200 bg-white hover:bg-slate-100 text-[8px] font-bold text-slate-500 font-lexend shadow-sm"
                    >
                      Reset Canvas
                    </button>
                  </div>
                  
                  <canvas
                    ref={canvasRef}
                    onMouseMove={(e) => {
                      const canvas = canvasRef.current;
                      const ctx = canvas?.getContext('2d');
                      if (ctx && canvas && (e.buttons === 1)) {
                        const rect = canvas.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        ctx.fillStyle = '#0284c7';
                        ctx.beginPath();
                        ctx.arc(x, y, 4, 0, Math.PI * 2);
                        ctx.fill();
                      }
                    }}
                    className="w-full flex-grow bg-white border border-slate-200 rounded-lg shadow-inner cursor-crosshair mt-1.5 animate-scale-up"
                  />
                  <span className="text-[8px] text-slate-400 text-center select-none mt-1 font-medium">Left click + hold & move cursor inside canvas to draw exactly under the mouse tip</span>
                </div>
              )}
            </div>

            <div className="w-full border-t border-slate-200 pt-2 flex justify-between text-[9px] font-bold text-slate-400 uppercase font-lexend">
              <span>Interactivity: {val}%</span>
              <span>Type: {val <= 10 ? 'Text Page' : val <= 40 ? 'Navigation' : val <= 75 ? 'Dynamic variables' : 'Full Simulator'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CampusKiosk: React.FC<SlideContentProps> = ({ slide }) => {
  const [kioskTab, setKioskTab] = useState<'Home' | 'Map' | 'Events' | 'Schedule'>('Home');
  const [revealKioskAnalysis, setRevealKioskAnalysis] = useState(false);
  const [actAnswers, setActAnswers] = useState<Record<number, boolean>>({});

  const isActivity = slide.title?.includes('Activity:');

  const scenarios = [
    { id: 1, title: 'Watching a pre-recorded video lecture.', isInteractive: false, desc: 'Static. The user is a passive spectator. Tapping coordinates has no feedback updates.' },
    { id: 2, title: 'Clicking a campus map pin to show room details.', isInteractive: true, desc: 'Interactive. User input coordinates dynamically adjust popover outputs.' },
    { id: 3, title: 'Reading a printed campus information handbook.', isInteractive: false, desc: 'Static. Printed materials are linear and do not process inputs.' },
    { id: 4, title: 'Withdrawing physical banknotes from an ATM.', isInteractive: true, desc: 'Interactive. Bidirectional communication checks values, validates balances, and dispenses cash.' },
    { id: 5, title: 'Controlling character narrative paths in video games.', isInteractive: true, desc: 'Interactive. Inputs constantly recalculate 3D environments and narrative results.' }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          {isActivity ? <Target className="w-5 h-5 md:w-6 md:h-6 text-sky-605 animate-pulse" /> : <Layers className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />}
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold font-sans">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        <div className="md:col-span-6 flex flex-col justify-center gap-3">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">{slide.topicTitle}</p>
          
          {!isActivity ? (
            <div className="space-y-3">
              <button
                onClick={() => setRevealKioskAnalysis(!revealKioskAnalysis)}
                className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm font-lexend ${
                  revealKioskAnalysis 
                    ? 'bg-sky-600 border-sky-600 text-white shadow-sm' 
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-750'
                }`}
              >
                {revealKioskAnalysis ? 'Hide Kiosk Analysis' : 'Reveal Kiosk Analysis'}
              </button>

              {revealKioskAnalysis ? (
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2.5 font-semibold animate-fade-in font-sans">
                  <strong className="text-slate-800 font-lexend font-bold">Kiosk Operational Audit:</strong>
                  <p>• <strong>USER:</strong> Freshmen students attempting location mapping.</p>
                  <p>• <strong>INTERFACE:</strong> Public LCD touch display screen membrane.</p>
                  <p>• <strong>INPUT:</strong> Finger tapping coordinates over quick buttons.</p>
                  <p>• <strong>SYSTEM:</strong> Local processor calculating maps path overlay vectors.</p>
                  <p>• <strong>OUTPUT:</strong> Renders visual coordinates route paths and highlights.</p>
                  <p>• <strong>FEEDBACK:</strong> Buttons click visuals, sound notifications, and instant map path updates.</p>
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border border-slate-150 p-4 rounded-xl shadow-inner font-sans font-medium">
                  Tapping buttons on the campus kiosk mockup on the right represents a real interaction loop. Observe what elements change and how the screen updates state.
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 font-sans">
              {scenarios.map((sc) => {
                const answered = actAnswers[sc.id] !== undefined;
                const isCorrect = actAnswers[sc.id] === sc.isInteractive;
                return (
                  <div key={sc.id} className="p-2.5 bg-white border border-slate-200 rounded-xl space-y-2 text-xs shadow-sm">
                    <div className="flex justify-between items-start gap-3">
                      <span className="font-semibold text-slate-800">{sc.id}. {sc.title}</span>
                      <div className="flex gap-1 flex-shrink-0 font-lexend">
                        <button
                          disabled={answered}
                          onClick={() => setActAnswers(prev => ({ ...prev, [sc.id]: true }))}
                          className={`px-2.5 py-1 rounded text-[10px] font-bold border transition ${
                            answered
                              ? actAnswers[sc.id] === true && sc.isInteractive
                                ? 'bg-emerald-500 text-white border-emerald-500'
                                : actAnswers[sc.id] === true && !sc.isInteractive
                                  ? 'bg-rose-500 text-white border-rose-500'
                                  : 'bg-slate-100 text-slate-400 border-slate-200'
                              : 'bg-slate-50 hover:bg-sky-50 hover:text-sky-700 text-slate-600 border-slate-200'
                          }`}
                        >
                          Interactive
                        </button>
                        <button
                          disabled={answered}
                          onClick={() => setActAnswers(prev => ({ ...prev, [sc.id]: false }))}
                          className={`px-2.5 py-1 rounded text-[10px] font-bold border transition ${
                            answered
                              ? actAnswers[sc.id] === false && !sc.isInteractive
                                ? 'bg-emerald-500 text-white border-emerald-500'
                                : actAnswers[sc.id] === false && sc.isInteractive
                                  ? 'bg-rose-500 text-white border-rose-500'
                                  : 'bg-slate-100 text-slate-400 border-slate-200'
                              : 'bg-slate-50 hover:bg-rose-50 hover:text-rose-705 text-slate-600 border-slate-200'
                          }`}
                        >
                          Static
                        </button>
                      </div>
                    </div>
                    
                    {answered && (
                      <p className={`text-[10px] font-medium leading-relaxed border-t pt-1.5 ${
                        isCorrect ? 'text-emerald-755 border-emerald-100 animate-fade-in' : 'text-rose-700 border-rose-105'
                      }`}>
                        <strong>{isCorrect ? 'Correct!' : 'Incorrect.'}</strong> {sc.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="md:col-span-6 flex flex-col justify-center">
          <div className="border-[6px] border-slate-800 rounded-3xl bg-slate-900 p-2.5 shadow-xl flex flex-col h-full justify-between items-center relative min-h-[240px] w-full max-w-sm mx-auto select-none font-sans">
            <div className="w-full flex-grow bg-white rounded-2xl p-3 border border-slate-950 flex flex-col justify-between overflow-hidden relative min-h-[190px]">
              <div className="flex justify-between items-center border-b border-slate-200 pb-1.5 mb-2">
                <span className="text-[9px] font-lexend font-black tracking-wider text-sky-600">TRIMEX LOBBY KIOSK</span>
                <span className="text-[8px] font-bold text-slate-400 font-mono">10:30 AM</span>
              </div>

              <div className="flex-grow w-full flex items-center justify-center text-center font-sans">
                {kioskTab === 'Home' && (
                  <div className="space-y-3 p-2 animate-fade-in">
                    <h4 className="font-lexend font-bold text-xs text-slate-800 leading-snug">Welcome to Trimex Colleges</h4>
                    <p className="text-[9.5px] text-slate-500 leading-relaxed font-medium">
                      Tap any portal button below on the touch screen interface to view directories.
                    </p>
                  </div>
                )}

                {kioskTab === 'Map' && (
                  <div className="space-y-2 p-1 w-full relative animate-fade-in">
                    <h4 className="font-bold text-xs text-sky-700 font-lexend">Campus Maps Location</h4>
                    <div className="w-full h-20 bg-slate-100 border border-slate-200 rounded-md relative flex items-center justify-center animate-scale-up">
                      <div className="absolute top-[25%] left-[20%] w-3 h-3 bg-rose-500 rounded-full border border-white animate-ping" />
                      <div className="absolute top-[25%] left-[20%] w-2.5 h-2.5 bg-rose-600 rounded-full border border-white" />
                      <span className="text-[9px] font-mono text-slate-500 font-bold">Registrar Office (Ground Floor)</span>
                    </div>
                  </div>
                )}

                {kioskTab === 'Events' && (
                  <div className="space-y-2 p-1 w-full text-left animate-fade-in">
                    <h4 className="font-bold text-xs text-slate-800 border-b pb-1 font-lexend">Today's Events:</h4>
                    <div className="text-[9px] text-slate-600 space-y-1 font-semibold">
                      <p>📅 <strong>1:00 PM:</strong> MEDIADSN Lab Orientation</p>
                      <p>📅 <strong>3:30 PM:</strong> Web Dev Club Meeting</p>
                    </div>
                  </div>
                )}

                {kioskTab === 'Schedule' && (
                  <div className="space-y-2 p-1 w-full text-left animate-fade-in font-sans font-bold">
                    <h4 className="font-bold text-xs text-slate-805 border-b pb-1 font-lexend">Classroom Schedules:</h4>
                    <div className="text-[9px] text-slate-600 space-y-1 font-semibold">
                      <p>🏫 <strong>Room 302:</strong> Grade 12 - Diamond (Math)</p>
                      <p>🏫 <strong>Lab Room 1:</strong> MEDIADSN (Computing)</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-1.5 border-t border-slate-200 pt-2 mt-2 font-lexend">
                <button
                  onClick={() => setKioskTab('Home')}
                  className={`py-1.5 rounded text-[8px] font-extrabold uppercase transition ${
                    kioskTab === 'Home' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setKioskTab('Map')}
                  className={`py-1.5 rounded text-[8px] font-extrabold uppercase transition ${
                    kioskTab === 'Map' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  Registrar
                </button>
                <button
                  onClick={() => setKioskTab('Events')}
                  className={`py-1.5 rounded text-[8px] font-extrabold uppercase transition ${
                    kioskTab === 'Events' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-105 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  Events
                </button>
                <button
                  onClick={() => setKioskTab('Schedule')}
                  className={`py-1.5 rounded text-[8px] font-extrabold uppercase transition ${
                    kioskTab === 'Schedule' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-105 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  Schedules
                </button>
              </div>

              {!isActivity && revealKioskAnalysis && (
                <>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 border-2 border-dashed border-rose-500 rounded-lg pointer-events-none select-none h-8 bg-rose-500/10 flex items-center justify-center text-[7px] text-rose-800 font-bold uppercase font-lexend">
                    INPUT REGION
                  </div>
                  <div className="absolute top-[28px] bottom-[46px] left-[10px] right-[10px] border-2 border-dashed border-emerald-500 rounded-lg pointer-events-none select-none bg-emerald-500/5 flex items-center justify-center text-[8px] text-emerald-800 font-bold uppercase font-lexend">
                    OUTPUT FEEDBACK WINDOW
                  </div>
                </>
              )}
            </div>
            
            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-black mt-1 font-lexend">PHYSICAL KIOSK FRAME</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecapOrdering: React.FC<SlideContentProps> = ({ slide }) => {
  const [items, setItems] = useState<string[]>([
    'Feedback',
    'System Processing',
    'User Goal',
    'Input Action',
    'Output Display'
  ]);
  const [result, setResult] = useState<boolean | null>(null);

  const correctOrder = ['User Goal', 'Input Action', 'System Processing', 'Output Display', 'Feedback'];

  const handleMoveItem = (idx: number, dir: 'up' | 'down') => {
    const newItems = [...items];
    if (dir === 'up' && idx > 0) {
      const temp = newItems[idx];
      newItems[idx] = newItems[idx - 1];
      newItems[idx - 1] = temp;
    } else if (dir === 'down' && idx < items.length - 1) {
      const temp = newItems[idx];
      newItems[idx] = newItems[idx + 1];
      newItems[idx + 1] = temp;
    }
    setItems(newItems);
    setResult(null);
  };

  const handleValidate = () => {
    const isCorrect = JSON.stringify(items) === JSON.stringify(correctOrder);
    setResult(isCorrect);
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Target className="w-5 h-5 md:w-6 md:h-6 text-sky-600 animate-pulse" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        <div className="md:col-span-6 flex flex-col justify-center gap-2">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-1">{slide.topicTitle}</p>
          <div className="space-y-2 font-lexend font-bold">
            {items.map((item, idx) => (
              <div
                key={item}
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 text-xs shadow-sm"
              >
                <span className="text-slate-800">{item}</span>
                <div className="flex gap-1.5 font-mono">
                  <button
                    disabled={idx === 0}
                    onClick={() => handleMoveItem(idx, 'up')}
                    className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-500 disabled:opacity-35 transition text-[9px] font-bold"
                  >
                    ▲
                  </button>
                  <button
                    disabled={idx === items.length - 1}
                    onClick={() => handleMoveItem(idx, 'down')}
                    className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-500 disabled:opacity-35 transition text-[9px] font-bold"
                  >
                    ▼
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 flex flex-col justify-center font-sans">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-inner flex flex-col justify-between h-full min-h-[220px]">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-700 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-100 block w-fit mb-3 font-lexend">
                Interaction Loop Order
              </span>
              
              <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                Arrange the items on the left so they reflect the chronological stages of a human-computer interaction cycle:
              </p>

              <p className="text-[10px] font-mono text-slate-500 mt-2 font-bold select-none">
                Target: Intent → Action → Process → Display → Evaluate
              </p>
            </div>

            {result !== null && (
              <div className={`p-3 rounded-xl border text-xs font-bold leading-relaxed flex items-center gap-2 animate-fade-in ${
                result 
                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-800' 
                  : 'bg-rose-500/10 border-rose-500 text-rose-700'
              }`}>
                {result ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <div>
                      <strong>Correct Flow Build!</strong>
                      <p className="font-medium text-[10.5px] mt-0.5 text-slate-605 leading-relaxed font-semibold">
                        User goal triggers mechanical action, which system computes, rendering screen output, and providing feedback to complete loop evaluation.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4 text-rose-605 flex-shrink-0" />
                    <div>
                      <strong>Incorrect Sequence.</strong>
                      <p className="font-medium text-[10.5px] mt-0.5 text-slate-605 leading-relaxed font-semibold">
                        Try again. Review standard loop flow: Goal Formulation → Action → Processing → Output Display → Feedback.
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}

            <button
              onClick={handleValidate}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-sm transition font-lexend"
            >
              Validate Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const KnowledgeCheck: React.FC<SlideContentProps> = ({ slide }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const isQ1 = slide.id?.includes('slide31');
  const isQ2 = slide.id?.includes('slide32');

  const correctAnswer = isQ1 ? 1 : isQ2 ? 2 : 1;

  const explanations = isQ1 
    ? [
        'Incorrect. High-resolution images are static media formatting values, not indicators of dynamic interactivity.',
        'Correct! Interactivity is characterized by a two-way information loop and the user\'s agency to alter the system state.',
        'Incorrect. Fast rendering speed is a system performance metric, not a measure of interactive capabilities.',
        'Incorrect. Printing is an output channel, but it does not represent dynamic two-way communication.'
      ]
    : isQ2
      ? [
          'Incorrect. Input represents user actions (clicks/keypresses) translating goals, not a system display.',
          'Incorrect. Processing represents computing database changes behind the scenes (invisible).',
          'Correct! The loading spinner is visual feedback displaying that the system registered the input and is processing state.',
          'Incorrect. Goal formulation is the intention inside the user\'s head, not a screen output.'
        ]
      : [
          'Incorrect. Keyboard typing and punch cards are in the wrong order; CLI came before GUI.',
          'Correct! Computing progressed from physical punch cards to text terminal commands, visual GUIs, and touch gestures.',
          'Incorrect. This order is reversed; touch interfaces are the newest, while punch cards are the oldest.',
          'Incorrect. Keyboard typing came after punch cards, and CLI came before GUI.'
        ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Target className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold font-sans">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow font-sans">
        <div className="md:col-span-7 flex flex-col justify-center gap-2">
          <p className="text-xs sm:text-sm text-slate-500 font-bold mb-2 leading-relaxed">{slide.topicTitle}</p>
          <div className="space-y-2">
            {slide.bullets?.map((bullet, idx) => {
              const isSelected = selected === idx;
              const isCorrect = idx === correctAnswer;
              const answered = selected !== null;
              
              return (
                <button
                  key={idx}
                  disabled={answered}
                  onClick={() => setSelected(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold transition flex items-start gap-2.5 ${
                    answered
                      ? isCorrect
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-900 font-bold shadow-sm'
                        : isSelected
                          ? 'bg-rose-500/10 border-rose-500 text-rose-900'
                          : 'bg-slate-100 border-slate-200 text-slate-400'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:scale-[1.005]'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5 font-lexend ${
                    answered
                      ? isCorrect
                        ? 'bg-emerald-600 text-white'
                        : isSelected
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-200 text-slate-405'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{bullet}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col justify-center">
          {selected !== null ? (
            <div className={`p-5 rounded-2xl border space-y-3 shadow-sm h-full min-h-[190px] flex flex-col justify-center animate-scale-up ${
              selected === correctAnswer
                ? 'bg-emerald-500/[0.03] border-emerald-200'
                : 'bg-rose-500/[0.03] border-rose-200'
            }`}>
              <div className="flex items-center gap-2 font-lexend">
                {selected === correctAnswer ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : (
                  <X className="w-5 h-5 text-rose-500" />
                )}
                <span className={`text-xs font-black uppercase tracking-wider font-lexend ${
                  selected === correctAnswer ? 'text-emerald-700' : 'text-rose-700'
                }`}>
                  {selected === correctAnswer ? 'Correct Answer!' : 'Incorrect option'}
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                {explanations[selected]}
              </p>
              
              {selected !== correctAnswer && (
                <button
                  onClick={() => setSelected(null)}
                  className="mt-2 text-[10px] font-bold text-sky-600 hover:text-sky-800 transition underline underline-offset-2 text-left self-start font-lexend"
                >
                  Try this question again
                </button>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center text-slate-400 animate-pulse">
              <Target className="w-10 h-10 mb-2 opacity-40 text-slate-400" />
              <span className="text-xs font-bold">Select a multiple choice option on the left to check answers and reveal explanations.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EssayPrompt: React.FC<SlideContentProps> = ({ slide }) => {
  const [essay, setEssay] = useState('');
  const [saved, setSaved] = useState(false);
  const [showRubric, setShowRubric] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('mediadsn_essay');
      if (stored) setEssay(stored);
    }
  }, []);

  const handleSaveEssay = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mediadsn_essay', essay);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const words = essay.trim() ? essay.trim().split(/\s+/).length : 0;

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <FileText className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow">
        <div className="md:col-span-7 flex flex-col justify-between h-full gap-2">
          <p className="text-xs text-slate-600 font-semibold leading-relaxed">
            <strong>Prompt:</strong> Explain how interactive media has changed the way users interact with digital systems. Discuss at least one real-world example and identify the components (User, Input, Interface, System, Output, Feedback) involved.
          </p>
          
          <textarea
            value={essay}
            onChange={(e) => {
              setEssay(e.target.value);
              setSaved(false);
            }}
            rows={5}
            placeholder="Type your response here (minimum 100 words recommended)..."
            className="w-full flex-grow bg-slate-50 border border-slate-205 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white resize-none shadow-inner font-semibold"
          />
          
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-450 uppercase font-lexend">
            <span>Characters: {essay.length} | Words: {words}</span>
            <button
              onClick={handleSaveEssay}
              className={`px-4 py-1.5 rounded-lg border font-bold text-xs transition flex items-center gap-1 ${
                saved
                  ? 'bg-emerald-500/10 border-emerald-305 text-emerald-700 shadow-sm font-black'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-900 text-white shadow-md'
              }`}
            >
              {saved && <Check className="w-3.5 h-3.5" />}
              {saved ? 'Essay Saved' : 'Save Essay'}
            </button>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col justify-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner flex flex-col justify-between h-full min-h-[220px]">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-3 font-sans">
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-800 bg-sky-500/10 border border-sky-100 px-2 py-0.5 rounded font-lexend">
                  Syllabus Assessment Rubric
                </span>
                <button
                  onClick={() => setShowRubric(!showRubric)}
                  className="text-[9px] font-extrabold text-sky-700 hover:underline focus:outline-none font-lexend"
                >
                  {showRubric ? 'Hide Rubric' : 'Show Criteria'}
                </button>
              </div>
              
              {showRubric ? (
                <div className="text-[10px] text-slate-500 space-y-1.5 font-semibold animate-fade-in font-sans">
                  <p>• <strong>Core Definition (30%):</strong> Explains interactive media loops and contrast from static media.</p>
                  <p>• <strong>History Connection (20%):</strong> Connects history and GUI visual metaphors.</p>
                  <p>• <strong>Components Audit (30%):</strong> Correctly maps all 6 loop parts on the chosen example.</p>
                  <p>• <strong>Composition (20%):</strong> Sentences are clean, logical, and structured.</p>
                </div>
              ) : (
                <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed font-semibold">
                  <p>✍️ Write your short essay to summarize what you learned in this module.</p>
                  <p>📚 Check details on the rubric using the top buttons to guide your content outline.</p>
                  <p>📁 Saves automatically in local storage browser records for student assessment grading logs.</p>
                </div>
              )}
            </div>
            
            <div className="text-[9px] text-slate-450 font-bold border-t border-slate-200 pt-2 uppercase mt-2 font-lexend">
              This response is saved dynamically for teacher evaluation reviews.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExitReflection: React.FC<SlideContentProps> = ({ slide }) => {
  const [reflection, setReflection] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('mediadsn_reflection');
      if (stored) setReflection(stored);
    }
  }, []);

  const handleSaveReflection = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mediadsn_reflection', reflection);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto font-sans">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4 font-sans">
        <h2 className="font-lexend text-lg md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Brain className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
          {slide.title}
        </h2>
        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-[10px] md:text-xs font-semibold">
          {slide.moduleTag}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch flex-grow font-sans">
        <div className="md:col-span-5 flex flex-col justify-center gap-3">
          <p className="text-xs sm:text-sm text-slate-600 font-bold leading-relaxed font-lexend">{slide.topicTitle}</p>
          <p className="text-xs text-slate-550 leading-relaxed font-semibold">
            Think of a messaging app, social platform, or tool you rely on daily. Analyze it conceptually:
            How do its signifiers guide you? How does its system response speed reduce friction?
          </p>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center animate-fade-in">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col justify-between h-full min-h-[200px]">
            <textarea
              value={reflection}
              onChange={(e) => {
                setReflection(e.target.value);
                setSaved(false);
              }}
              rows={3}
              placeholder="Type your reflection answers here..."
              className="w-full flex-grow bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white resize-none shadow-inner mb-3 font-semibold"
            />
            
            <button
              onClick={handleSaveReflection}
              className={`w-full py-2.5 rounded-xl border font-bold text-xs transition flex items-center justify-center gap-1.5 font-lexend ${
                saved
                  ? 'bg-emerald-500/10 border-emerald-300 text-emerald-700 shadow-sm font-black'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-900 text-white shadow-md'
              }`}
            >
              {saved && <Check className="w-3.5 h-3.5" />}
              {saved ? 'Reflection Logged Successfully' : 'Submit Exit Reflection'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// MAIN SLIDE CONTENT ROUTER
// -------------------------------------------------------------
export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  const isLaravel = slide.id?.includes('laravel');

  const theme = {
    textAccent: isLaravel ? 'text-rose-600' : 'text-sky-600',
    textAccentDark: isLaravel ? 'text-rose-700' : 'text-sky-700',
    textAccentLight: isLaravel ? 'text-rose-500' : 'text-sky-500',
    textAccentMuted: isLaravel ? 'text-rose-800' : 'text-sky-800',
    bgAccentLight: isLaravel ? 'bg-rose-500/10' : 'bg-sky-500/10',
    borderAccentLight: isLaravel ? 'border-rose-500/20' : 'border-sky-500/20',
    borderAccent: isLaravel ? 'border-rose-200' : 'border-sky-200',
    borderLeftAccent: isLaravel ? 'border-rose-500' : 'border-sky-505',
    bgAccentOverlay: isLaravel ? 'bg-rose-500/[0.03]' : 'bg-sky-500/[0.03]',
    bgAccentOverlay2: isLaravel ? 'bg-rose-500/[0.04]' : 'bg-sky-500/[0.04]',
    iconColor: isLaravel ? 'text-rose-500' : 'text-sky-500',
    iconColorDark: isLaravel ? 'text-rose-600' : 'text-sky-600'
  };

  const hasIllustration = [
    'media-slide2',
    'media-slide4',
    'media-slide8',
    'media-slide10',
    'media-slide12',
    'media-slide13',
    'media-slide14',
    'media-slide20',
    'media-slide21',
    'media-slide25',
    'media-slide30',
    'media-slide36'
  ].includes(slide.id);

  // ROUTE TO STANDALONE COMPONENTS TO MAINTAIN STATIC ORDER OF HOOKS
  if (slide.type === 'interactive_objectives') {
    return <InteractiveObjectives slide={slide} />;
  }
  if (slide.type === 'user_input_simulator') {
    return <UserInputSimulator slide={slide} />;
  }
  if (slide.type === 'static_vs_interactive') {
    return <StaticVsInteractive slide={slide} />;
  }
  if (slide.type === 'interaction_loop') {
    return <InteractionLoop slide={slide} />;
  }
  if (slide.type === 'components_diagram') {
    return <ComponentsDiagram slide={slide} />;
  }
  if (slide.type === 'history_timeline') {
    return <HistoryTimeline slide={slide} />;
  }
  if (slide.type === 'cli_vs_gui') {
    return <CliVsGui slide={slide} />;
  }
  if (slide.type === 'button_simulator') {
    return <ButtonSimulator slide={slide} />;
  }
  if (slide.type === 'interaction_slider') {
    return <InteractionSlider slide={slide} />;
  }
  if (slide.type === 'campus_kiosk') {
    return <CampusKiosk slide={slide} />;
  }
  if (slide.type === 'recap_ordering') {
    return <RecapOrdering slide={slide} />;
  }
  if (slide.type === 'knowledge_check') {
    return <KnowledgeCheck slide={slide} />;
  }
  if (slide.type === 'essay_prompt') {
    return <EssayPrompt slide={slide} />;
  }
  if (slide.type === 'exit_reflection') {
    return <ExitReflection slide={slide} />;
  }
  if (slide.type === 'versus' || slide.type === 'comparison') {
    return (
      <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto font-sans">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4 font-sans font-bold">
          <h2 className={`font-lexend text-lg md:text-2xl font-bold ${theme.textAccentDark} flex items-center gap-1.5 md:gap-2`}>
            <Sliders className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconColorDark}`} />
            {slide.title}
          </h2>
          {slide.moduleTag && (
            <span className={`px-2.5 py-0.5 md:px-3 md:py-1 rounded-full ${theme.bgAccentLight} ${theme.textAccentDark} border ${theme.borderAccentLight} text-[10px] md:text-xs font-semibold`}>
              {slide.moduleTag}
            </span>
          )}
        </div>

        <div className="flex-grow flex flex-col justify-center">
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-3">{slide.topicTitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left Card */}
            {slide.versusLeft && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-lexend text-sm sm:text-base font-bold text-slate-800 border-b border-slate-200 pb-1.5 mb-2.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    {slide.versusLeft.title}
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 font-semibold leading-relaxed">
                    {slide.versusLeft.bullets.map((b, i) => (
                      <p key={i} className="flex items-start gap-1.5 font-medium">
                        <span className="text-rose-500 shrink-0 mt-1">✕</span>
                        <span>{b}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Right Card */}
            {slide.versusRight && (
              <div className="p-4 rounded-2xl bg-sky-500/[0.02] border border-sky-200 flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-lexend text-sm sm:text-base font-bold text-sky-900 border-b border-sky-200 pb-1.5 mb-2.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    {slide.versusRight.title}
                  </h3>
                  <div className="space-y-2 text-xs text-slate-605 font-semibold leading-relaxed">
                    {slide.versusRight.bullets.map((b, i) => (
                      <p key={i} className="flex items-start gap-1.5 font-medium">
                        <span className="text-emerald-500 shrink-0 mt-1 font-bold">✓</span>
                        <span>{b}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {slide.keyInsight && (
            <div className="mt-4 p-3.5 rounded-xl bg-amber-500/[0.03] border border-amber-205 text-xs font-semibold leading-relaxed animate-fade-in font-sans">
              <strong className="flex items-center gap-1.5 text-amber-800 font-lexend">
                <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                {slide.keyInsight.title}
              </strong>
              <p className="mt-1 font-sans font-medium text-slate-600">{slide.keyInsight.text}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 1. COVER SLIDE
  if (slide.type === 'cover') {
    return (
      <div className="h-full w-full flex flex-col justify-center items-start p-5 sm:p-8 md:p-14 relative z-10 text-slate-900 overflow-y-auto">
        {slide.moduleTag && (
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${theme.bgAccentLight} ${theme.textAccentDark} border ${theme.borderAccentLight} text-xs sm:text-sm font-semibold mb-4 md:mb-6 shadow-sm`}>
            <GraduationCap className={`w-4 h-4 ${theme.iconColorDark}`} />
            {slide.moduleTag}
          </div>
        )}
        <h1 className="font-lexend text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 md:mb-6">
          {slide.title?.includes('Video Editing') ? (
            <>
              Introduction to <span className="text-sky-605 drop-shadow-sm">Video Editing</span>
            </>
          ) : slide.title?.includes('Laravel') ? (
            <>
              Laravel 11 <span className="text-rose-600 drop-shadow-sm">Fundamentals</span>
            </>
          ) : slide.title?.includes('Interactive Media') ? (
            <>
              Introduction to <span className="text-sky-600 drop-shadow-sm">Interactive Media Design</span>
            </>
          ) : (
            slide.title
          )}
        </h1>
        {slide.subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl leading-relaxed mb-6 md:mb-10 animate-fade-in font-sans font-semibold">
            {slide.subtitle}
          </p>
        )}
      </div>
    );
  }

  // 2. SECTION BREAK SLIDE
  if (slide.type === 'section_break') {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center text-center p-5 sm:p-8 md:p-12 relative z-10 text-slate-900 overflow-y-auto">
        {slide.sectionNum && (
          <div className="font-lexend text-xs sm:text-sm md:text-base font-bold text-rose-600 tracking-widest uppercase mb-3 md:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-rose-500/10 border border-rose-505">
            {slide.sectionNum}
          </div>
        )}
        <h2 className="font-lexend text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 max-w-3xl leading-tight">
          {slide.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-sans font-semibold">
          {slide.description}
        </p>
      </div>
    );
  }

  // 3. TIMELINE / DEFAULT SLIDE
  const hasRightContent = !!slide.image || hasIllustration;
  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4 font-sans font-bold">
        <h2 className={`font-lexend text-lg md:text-2xl font-bold ${theme.textAccentDark} flex items-center gap-1.5 md:gap-2`}>
          <Clock className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconColorDark}`} />
          {slide.title}
        </h2>
        {slide.moduleTag && (
          <span className={`px-2.5 py-0.5 md:px-3 md:py-1 rounded-full ${theme.bgAccentLight} ${theme.textAccentDark} border ${theme.borderAccentLight} text-[10px] md:text-xs font-semibold`}>
            {slide.moduleTag}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center flex-grow font-sans">
        <div className={hasRightContent ? "md:col-span-7 flex flex-col justify-between h-full py-1 md:py-2" : "md:col-span-12 flex flex-col justify-between h-full py-1 md:py-2"}>
          <div>
            <h3 className="font-lexend text-base md:text-xl font-bold text-slate-805 mb-3 md:mb-4">
              {slide.topicTitle}
            </h3>
            <div className="space-y-2.5 md:space-y-3 font-semibold text-slate-600">
              {slide.bullets?.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2 animate-fade-in leading-relaxed font-sans font-medium">
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.iconColor} shrink-0 mt-2`} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            {slide.layman && (
              <div className={`mt-4 p-3.5 rounded-xl border ${theme.borderAccent} ${theme.bgAccentOverlay} text-xs font-semibold leading-relaxed animate-fade-in font-sans`}>
                <strong className={`flex items-center gap-1.5 ${theme.textAccentMuted} font-lexend`}>
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  {slide.layman.title}
                </strong>
                <p className="mt-1 font-sans font-medium text-slate-600">{slide.layman.text}</p>
              </div>
            )}
            {slide.keyInsight && (
              <div className="mt-4 p-3.5 rounded-xl bg-amber-500/[0.03] border border-amber-205 text-xs font-semibold leading-relaxed animate-fade-in font-sans">
                <strong className="flex items-center gap-1.5 text-amber-800 font-lexend">
                  <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                  {slide.keyInsight.title}
                </strong>
                <p className="mt-1 font-sans font-medium text-slate-600">{slide.keyInsight.text}</p>
              </div>
            )}
          </div>
        </div>

        {slide.image && <ImageFrame url={slide.image.url} caption={slide.image.caption} isLaravel={isLaravel} />}
        {!slide.image && hasIllustration && (
          <div className="md:col-span-5 w-full min-h-[240px] bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-lg text-slate-200">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-2 font-sans">
              <span className="text-[10px] font-bold text-sky-400 font-lexend uppercase tracking-wider">Concept Illustration</span>
              <Brain className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            </div>
            <ConceptIllustration slideId={slide.id} />
          </div>
        )}
      </div>
    </div>
  );
};
export { SlideContent as default };
