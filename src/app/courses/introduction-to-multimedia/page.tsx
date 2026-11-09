'use client';

import React from 'react';
import Link from 'next/link';
import {
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
  MonitorPlay,
  ArrowRight
} from 'lucide-react';

export default function IntroductionToMultimediaCoursePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-fuchsia-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/courses/" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Courses</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/lesson/?id=multimedia-w14"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-fuchsia-600 text-white shadow-sm hover:bg-fuchsia-500 transition flex items-center gap-1.5 shadow-fuchsia-500/20"
            >
              <Sparkles className="w-3 h-3" />
              <span>Production Pipeline (W14)</span>
            </Link>
            <Link
              href="/lesson/?id=multimedia1"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 hover:bg-fuchsia-100 transition flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>5 Elements Slides</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200">
              IT-MM1
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              18 Weeks &bull; 3 Credit Units &bull; 5 Core Modalities &amp; Production Track
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Introduction to Multimedia
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive curriculum crafted for multimedia students covering digital media etymology (Multi + Media), the 5 core elements (Text, Graphics, Audio, Animation, Video), non-linear interactive hypermedia architectures, production pipelines, cognitive integration, and capstone presentation.
          </p>
        </header>

        {/* FEATURED: WEEK 1 DECK */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-fuchsia-950 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/40 text-fuchsia-300 font-mono text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-ping" />
                  Core Subject Foundation
                </span>
                <span className="px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 font-mono text-[10px] font-bold tracking-wider uppercase">
                  BS Multimedia Track
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                26 Visual Slides &bull; 9 Live Interactive Simulators
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 font-lexend flex items-center gap-2.5">
                <MonitorPlay className="w-7 h-7 text-fuchsia-400" />
                Week 1: Fundamentals &amp; The 5 Elements
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Master the fundamental building blocks of modern media: Text typography, Vector vs Raster graphics, Digital Audio sampling, Keyframe animation &amp; Persistence of Vision, and Video encoding bitrates.
              </p>
            </div>

            {/* Simulators Chip Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono text-slate-300 pt-1">
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>5 Elements Mixer</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-pink-400" />
                <span>Vector vs Raster Loupe</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Web Audio Synthesizer</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Frame Rate FPS Player</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Film className="w-3.5 h-3.5 text-rose-400" />
                <span>Video Bitrate Calculator</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hypermedia Branch Tester</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/lesson/?id=multimedia1"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-400 hover:to-pink-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-fuchsia-500/20 transition flex items-center gap-2 cursor-pointer font-sans"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Week 1 Slides</span>
              </Link>

              <Link
                href="/quiz/?id=multimedia1"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-fuchsia-400" />
                <span>Test Knowledge</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5 Core Elements Overview */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-fuchsia-600" />
            <span>The 5 Core Multimedia Modalities</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <span className="text-xs font-mono font-bold text-fuchsia-600 uppercase">Element 1</span>
              <h4 className="font-bold text-sm text-slate-900">Text</h4>
              <p className="text-[11px] text-slate-500">Typography, font families, readability &amp; copywriting.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <span className="text-xs font-mono font-bold text-pink-600 uppercase">Element 2</span>
              <h4 className="font-bold text-sm text-slate-900">Graphics</h4>
              <p className="text-[11px] text-slate-500">Raster bitmaps vs Scalable Vector Graphics (SVG).</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <span className="text-xs font-mono font-bold text-violet-600 uppercase">Element 3</span>
              <h4 className="font-bold text-sm text-slate-900">Audio</h4>
              <p className="text-[11px] text-slate-500">Speech, SFX, music, sampling rate &amp; loudness normalization.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <span className="text-xs font-mono font-bold text-amber-600 uppercase">Element 4</span>
              <h4 className="font-bold text-sm text-slate-900">Animation</h4>
              <p className="text-[11px] text-slate-500">Keyframing, tweening, and persistence of vision.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <span className="text-xs font-mono font-bold text-rose-600 uppercase">Element 5</span>
              <h4 className="font-bold text-sm text-slate-900">Video</h4>
              <p className="text-[11px] text-slate-500">Temporal frame rates, codecs (H.264/AV1) &amp; bitrate budgets.</p>
            </div>
          </div>
        </section>

        {/* Available Multimedia Slide Decks */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layout className="w-5 h-5 text-fuchsia-600" />
            <span>Curriculum Lessons &amp; Interactive Decks</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm">
            {/* Week 1 */}
            <div className="p-4 rounded-2xl bg-fuchsia-50/70 border border-fuchsia-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-700 font-mono">Week 1 &bull; Fundamentals</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-fuchsia-200 text-fuchsia-900 font-mono">26 Slides &bull; 9 Simulators</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Introduction to Multimedia: Fundamentals &amp; 5 Elements</h4>
              <p className="text-slate-600">Definition of multimedia, the 5 core elements, raster vs vector graphics, digital audio, persistence of vision, linear vs non-linear hypermedia, and authoring tools.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=multimedia1" className="text-xs font-bold text-fuchsia-700 hover:text-fuchsia-900 inline-flex items-center gap-1">
                  <span>Open Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Week 14 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Week 14 &bull; Production</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-mono">12 Slides</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Multimedia Production Techniques</h4>
              <p className="text-slate-600">Advanced 3-phase production pipelines (pre-production, production, post-production), non-destructive editing, LUFS loudness mastering (-14 LUFS), and color grading.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=multimedia-w14" className="text-xs font-bold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1">
                  <span>Open Week 14 Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Week 15 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">Week 15 &bull; Synthesis</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-mono">12 Slides</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Multimedia Integration</h4>
              <p className="text-slate-600">Mayer&apos;s Cognitive Theory of Multimedia Learning, temporal synchronization, automatic audio ducking, seamless transitions, and 60 FPS profiling.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=multimedia-w15" className="text-xs font-bold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1">
                  <span>Open Week 15 Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Week 16 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-700 font-mono">Week 16 &bull; Capstone Dev</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-pink-100 text-pink-800 font-mono">12 Slides</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Final Project Development</h4>
              <p className="text-slate-600">Plan, design, and produce a comprehensive multimedia capstone project: vertical slice scoping, milestone sprint management, 3-2-1 backup protocols, and technical rigor.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=multimedia-w16" className="text-xs font-bold text-pink-700 hover:text-pink-900 inline-flex items-center gap-1">
                  <span>Open Week 16 Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Week 17 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 font-mono">Week 17 &bull; Defense &amp; Critique</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">12 Slides</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Project Presentation and Critique</h4>
              <p className="text-slate-600">Professional multimedia project defense: 5-minute pitch framework, constructive critique using the &quot;I Like, I Wish, What If&quot; model, post-critique refinement, and portfolio curation.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=multimedia-w17" className="text-xs font-bold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1">
                  <span>Open Week 17 Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
