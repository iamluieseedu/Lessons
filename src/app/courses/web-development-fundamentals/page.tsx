'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code2,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Layers,
  Globe2,
  Play
} from 'lucide-react';

export default function WebDevFundamentalsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-purple-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/courses/" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Courses</span>
          </Link>

          <Link
            href="/lesson/?id=webdev1"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition flex items-center gap-1.5"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Web Dev 1 Slides</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 border border-purple-200">
              IT-WD1
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              18 Weeks &bull; 3 Credit Units &bull; Modern Web Standards
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Web Development 1: Fundamentals of HTML5, CSS3, &amp; JavaScript
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive collegiate curriculum on modern web architecture: semantic HTML5 markup, responsive CSS3 Flexbox and Grid layouts, DOM event listeners, and vanilla JavaScript programming.
          </p>
        </header>

        {/* Overview Section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-purple-600" />
            <span>Foundations of the World Wide Web</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every software engineer must understand the core technologies that power the Internet. In <strong>IT-WD1</strong>, students learn the proper separation of concerns: HTML5 for document structure and accessibility, CSS3 for responsive typography and spatial layouts, and JavaScript for interactive state logic and asynchronous HTTP requests.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Students learn strict semantic markup practices: avoiding &ldquo;div soup&rdquo; in favor of descriptive elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;footer&gt;</code> to optimize search engine discoverability and assistive screen-reader accessibility.
          </p>
        </section>

        {/* 18-Week Syllabus Outline */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Syllabus &amp; Curriculum Milestones</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Weeks 1 &ndash; 4</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Semantic HTML5 &amp; Accessibility (ARIA)</h4>
              <p className="text-slate-600">The DOM tree hierarchy, semantic tags, forms and input validation, meta tags, and accessible heading structures.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 font-mono">Weeks 5 &ndash; 9</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Modern CSS3: Flexbox, Grid, &amp; Media Queries</h4>
              <p className="text-slate-600">The CSS Box Model, flexbox alignment, 2D CSS grid systems, responsive media queries, and CSS custom properties.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">Weeks 10 &ndash; 14</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Core JavaScript &amp; DOM Manipulation</h4>
              <p className="text-slate-600">Variables (let/const), arrow functions, event listeners (click, change, submit), DOM traversal, and client-side form validation.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 font-mono">Weeks 15 &ndash; 18</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Asynchronous JavaScript &amp; Capstone Website</h4>
              <p className="text-slate-600">Fetch API, Promises, async/await, JSON parsing, GitHub Pages hosting, and final responsive website defense.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
