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
              href="/courses/introduction-to-multimedia/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 hover:bg-fuchsia-100 transition flex items-center gap-1.5"
            >
              <Film className="w-3 h-3 text-fuchsia-600" />
              <span>Intro to Multimedia Subject &rarr;</span>
            </Link>
            <Link
              href="/lesson/?id=mediadsn-a11y"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 transition flex items-center gap-1.5 shadow-emerald-500/20"
            >
              <Sparkles className="w-3 h-3" />
              <span>Accessibility Deck</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">
              IT-HCI1
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              18 Weeks &bull; 3 Credit Units &bull; Human-Computer Interaction &amp; UI/UX Systems
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Human-Computer Interaction (HCI)
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive study of human-computer interaction loops, cognitive user mental models, Donald Norman&apos;s interactivity principles, mobile interface ergonomics, information architecture, ethical interface design, and universal accessibility.
          </p>
        </header>

        {/* FEATURED: INTERACTIVE SLIDES */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                  Core Subject Foundation
                </span>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-[10px] font-bold tracking-wider uppercase">
                  UI/UX &amp; Cognitive Track
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                36 Visual Slides &bull; 8 Interactive Simulators
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 font-lexend flex items-center gap-2.5">
                <Eye className="w-7 h-7 text-indigo-400" />
                Week 1: Introduction to Human-Computer Interaction
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Master the fundamental interaction loop: Goal Formulation &rarr; Action Execution &rarr; System Processing &rarr; Output Feedback. Learn user-centered design, mental models, and usability heuristics.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/lesson/?id=mediadsn1"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/20 transition flex items-center gap-2 cursor-pointer font-sans"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Week 1 HCI Presentation</span>
              </Link>

              <Link
                href="/lesson/?id=mediadsn2"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Week 2: Interactivity &amp; UI/UX</span>
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
            In digital product development, technical backend efficiency is useless if end users cannot perceive, understand, or operate the interface. <strong>IT-HCI1</strong> introduces computer science and multimedia students to cognitive engineering: studying how the human brain processes visual signifiers, translates intent into physical actions, and evaluates interface feedback loops.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Students learn the mathematics of spatial layout design—why the <strong>8-Point Grid System</strong> prevents fractional sub-pixel anti-aliasing blur across modern high-DPI retina screens, how the <strong>60-30-10 color rule</strong> preserves visual focal points, and how to verify Level AA contrast ratios (4.5:1 for body copy) under Web Content Accessibility Guidelines.
          </p>
        </section>

        {/* 18-Week Syllabus Outline */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layout className="w-5 h-5 text-purple-600" />
            <span>HCI Curriculum Lessons &amp; Interactive Decks</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">Week 1 &bull; Core Foundations</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-200 text-indigo-900 font-mono">36 Slides</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Introduction to Human-Computer Interaction</h4>
              <p className="text-slate-600">Basics, history, and key components of human-computer interaction, emphasizing user-centered digital experiences and cognitive loop dynamics.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=mediadsn1" className="text-xs font-bold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1">
                  <span>Open Week 1 Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Week 2 &bull; Interactivity &amp; UI/UX</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-mono">40 Slides &bull; 8 Studios</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Principles of Interactivity, UI &amp; UX Design Basics</h4>
              <p className="text-slate-600">Donald Norman&apos;s interaction principles, visual hierarchy (8pt grid, 60-30-10 color), typography scales, user personas, and customer journey maps.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=mediadsn2" className="text-xs font-bold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1">
                  <span>Open Week 2 Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">Week 3 &bull; Universal Inclusivity</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-mono">30 Slides &bull; 5 Studios</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Accessibility in Interactive Design</h4>
              <p className="text-slate-600">Understand the importance of accessibility, design for the full human spectrum across disabilities, and apply WCAG 2.1/2.2 standards (P.O.U.R., contrast ratios, CVD filters, 48px hitboxes, reduced-motion, ARIA).</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=mediadsn-a11y" className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1">
                  <span>Launch Accessibility Presentation</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 font-mono">Week 14 &bull; Responsive HCI</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-600 text-white font-mono">25 Slides &bull; 3 Live Studios</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Designing for Mobile Interfaces &amp; Responsive Cross-Platform HCI</h4>
              <p className="text-slate-600">Cross-platform responsiveness (mobile-to-desktop progressive enhancement &amp; desktop-to-mobile graceful degradation), standard breakpoints, the 1993 CRT history of 16px font standards, eliminating the iOS input auto-zoom penalty, the 8-point grid, and Gestalt F/Z eye-tracking layouts.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=mediadsn-w14" className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1">
                  <span>Open Week 14 Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">Week 15 &bull; Content Structure</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-200 text-indigo-900 font-mono">15 Slides</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Information Architecture</h4>
              <p className="text-slate-600">Understand the principles of information architecture, organize and structure complex digital content for usability, and develop production sitemaps, navigation schemes, and card sorting taxonomies.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=mediadsn-w15" className="text-xs font-bold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1">
                  <span>Open Week 15 Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Week 16 &bull; Digital Ethics</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-mono">15 Slides</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Ethical Considerations in HCI</h4>
              <p className="text-slate-600">Explore ethical issues in HCI design, deceptive dark patterns (Roach Motel, Confirmshaming), understand the critical importance of privacy and data protection (Privacy by Design), and apply ethical principles to interface design.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=mediadsn-w16" className="text-xs font-bold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1">
                  <span>Open Week 16 Deck</span> <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 font-mono">Week 17 &bull; Capstone Synthesis</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-mono">15 Slides</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Review and Practical Applications</h4>
              <p className="text-slate-600">Review key foundational concepts from across the curriculum, work on practical applications that integrate all learned topics, and apply advanced problem-solving skills to real-world scenarios and capstone audits.</p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/lesson/?id=mediadsn-w17" className="text-xs font-bold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1">
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