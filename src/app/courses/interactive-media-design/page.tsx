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
  Play
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

          <Link
            href="/lesson/?id=mediadsn1"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition flex items-center gap-1.5"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Week 1 Slides</span>
          </Link>
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
              18 Weeks &bull; 3 Credit Units &bull; Human-Computer Interaction &amp; UI Systems
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Interactive Media Design &amp; HCI Architecture
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive study of user interface psychology, Donald Norman&apos;s affordances and signifiers, visual hierarchy, 8-point spatial grid systems, WCAG 2.1 accessibility compliance, and user-centered design loops.
          </p>
        </header>

        {/* Overview Section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-600" />
            <span>The Human-Computer Interaction Membrane</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In digital product development, technical backend efficiency is useless if end users cannot perceive, understand, or operate the interface. <strong>IT-MD1</strong> introduces computer science students to cognitive engineering: studying how the human brain processes visual signifiers, translates intent into physical actions, and evaluates interface feedback loops.
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
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">Weeks 1 &ndash; 3</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">HCI Cycles &amp; The Interaction Loop</h4>
              <p className="text-slate-600">Goal Formulation &rarr; Action Execution &rarr; System Processing &rarr; Output Display &rarr; Evaluation Feedback.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Weeks 4 &ndash; 6</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Affordances, Signifiers, &amp; Natural Mapping</h4>
              <p className="text-slate-600">Donald Norman&apos;s principles in everyday software: spatial analogies, button elevation, and focus state signifiers.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 font-mono">Weeks 7 &ndash; 9</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Spatial Layouts &amp; The 8-Point Grid</h4>
              <p className="text-slate-600">Preventing fractional sub-pixel blur, modular scales, responsive breakpoints, and typographical vertical rhythm.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">Weeks 10 &ndash; 12</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Color Theory &amp; WCAG 2.1 Accessibility</h4>
              <p className="text-slate-600">The 60-30-10 color hierarchy, luminance contrast equations, color blindness simulation, and screen-reader ARIA states.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 font-mono">Weeks 13 &ndash; 18</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">User-Centered Design (UCD) Studio</h4>
              <p className="text-slate-600">Empathy mapping, user journey modeling, usability testing with real students, and final clickable design prototype.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
