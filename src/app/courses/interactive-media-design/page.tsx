'use client';

import React from 'react';
import Link from 'next/link';
import {
  Palette,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Layers,
  Sparkles,
  Eye,
  Layout,
  Play,
  HelpCircle,
  GraduationCap,
  Sliders,
  Volume2,
  Film,
  Zap,
  Cpu,
  MonitorPlay,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function InteractiveMediaDesignPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/courses/" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Courses</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/lesson/?id=multimedia1"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 transition flex items-center gap-1.5 animate-pulse"
            >
              <Sparkles className="w-3 h-3" />
              <span>New Discussion Slides</span>
            </Link>
            <Link
              href="/lesson/?id=mediadsn1"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>HCI Loop Slides</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">
              IT-MD1
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              18 Weeks &bull; 3 Credit Units &bull; Human-Computer Interaction &amp; Multimedia Systems
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Interactive Media Design &amp; Multimedia Systems
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive study crafted for BS Multimedia students covering digital media etymology, the 5 core elements (Text, Graphics, Audio, Animation, Video), interactive hypermedia architectures, authoring studios, and human-computer cognitive loops.
          </p>
        </header>

        {/* FEATURED: NEW DISCUSSION INTERACTIVE SLIDES */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  New Discussion
                </span>
                <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-[10px] font-bold tracking-wider uppercase">
                  BS Multimedia Track
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                26 Visual Slides &bull; 9 Live Interactive Simulators
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 font-lexend flex items-center gap-2.5">
                <MonitorPlay className="w-7 h-7 text-emerald-400" />
                Introduction to Multimedia: Fundamentals &amp; The 5 Elements
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Redesigned entirely for BS Multimedia students with zero cognitive text bloat. Learn through interactive audio synthesizers, frame rate motion players, vector/raster loupe inspectors, video bitrate storage calculators, and timeline authoring consoles.
              </p>
            </div>

            {/* 9 Simulators Chip Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono text-slate-300 pt-1">
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                <span>5 Elements Mixer</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>Vector vs Raster Loupe</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Web Audio Synthesizer</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>12-60 FPS Motion Player</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Film className="w-3.5 h-3.5 text-rose-400" />
                <span>Video Storage Calculator</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Branching Narrative Lab</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-pink-400" />
                <span>Flash-Style Authoring</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Layout className="w-3.5 h-3.5 text-teal-400" />
                <span>6 Products Matrix</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Bandwidth Speed Race</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/lesson/?id=multimedia1"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition flex items-center gap-2 cursor-pointer font-sans"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Interactive Presentation</span>
              </Link>

              <Link
                href="/quiz/?id=multimedia1"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                <span>Test Knowledge (10 Quiz Questions)</span>
              </Link>

              <Link
                href="/teacher/?id=multimedia1"
                className="px-4 py-2.5 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-300 font-semibold text-xs sm:text-sm border border-indigo-800/80 transition flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>Teacher Delivery Guide</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-600" />
            <span>The Human-Computer Interaction Membrane</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In digital product development, technical backend efficiency is useless if end users cannot perceive, understand, or operate the interface. <strong>IT-MD1</strong> introduces computer science and multimedia students to cognitive engineering: studying how the human brain processes visual signifiers, translates intent into physical actions, and evaluates interface feedback loops.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Students learn the mathematics of spatial layout design—why the <strong>8-Point Grid System</strong> prevents fractional sub-pixel anti-aliasing blur across modern high-DPI retina screens, how the <strong>60-30-10 color rule</strong> preserves visual focal points, and how to verify Level AA contrast ratios (4.5:1 for body copy) under Web Content Accessibility Guidelines.
          </p>
        </section>

        {/* 18-Week Syllabus Outline */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layout className="w-5 h-5 text-purple-600" />
            <span>Syllabus &amp; Core Learning Milestones</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">Week 1 &bull; Featured Discussion</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-mono">Interactive</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Introduction to Multimedia &amp; The 5 Core Modalities</h4>
              <p className="text-slate-600">Etymology (Multi + Media), Text, Graphics, Audio, Animation, Video, Linear vs Non-Linear Hypermedia, Authoring Tools, and Delivery pipelines.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=multimedia1" className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1">
                  <span>Open Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">Weeks 2 &ndash; 4</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">HCI Cycles &amp; The Interaction Loop</h4>
              <p className="text-slate-600">Goal Formulation &rarr; Action Execution &rarr; System Processing &rarr; Output Display &rarr; Evaluation Feedback.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Weeks 5 &ndash; 7</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Affordances, Signifiers, &amp; Natural Mapping</h4>
              <p className="text-slate-600">Donald Norman&apos;s principles in everyday software: spatial analogies, button elevation, and focus state signifiers.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 font-mono">Weeks 8 &ndash; 10</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Spatial Layouts &amp; The 8-Point Grid</h4>
              <p className="text-slate-600">Preventing fractional sub-pixel blur, modular scales, responsive breakpoints, and typographical vertical rhythm.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">Weeks 11 &ndash; 13</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Color Theory &amp; WCAG 2.1 Accessibility</h4>
              <p className="text-slate-600">The 60-30-10 color hierarchy, luminance contrast equations, color blindness simulation, and screen-reader ARIA states.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 font-mono">Weeks 14 &ndash; 18</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">User-Centered Design (UCD) Studio</h4>
              <p className="text-slate-600">Empathy mapping, user journey modeling, usability testing with real students, and final clickable design prototype.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
