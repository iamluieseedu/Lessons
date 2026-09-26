'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  ArrowLeft,
  BookOpen,
  Award,
  Users,
  Target,
  CheckCircle2,
  Sparkles,
  Code2,
  Cpu,
  Globe2,
  ShieldCheck,
  Mail
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition">
              <GraduationCap className="w-4 h-4" />
            </span>
            <span className="font-extrabold text-sm text-slate-900 tracking-tight">
              Lesson Library
            </span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              iamlesson.space
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Library</span>
            </Link>
            <Link
              href="/contact/"
              className="text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-3.5 py-1.5 rounded-lg transition flex items-center gap-1.5 shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
        {/* Hero Section */}
        <header className="text-center sm:text-left border-b border-slate-200 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            About Lesson Library &bull; Academic Standards
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Empowering Computer Science Students with Open, High-Quality Education
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            <strong>Lesson Library</strong> (<code>iamlesson.space</code>) is an open educational repository dedicated to providing college-level computing curricula, interactive lecture slides, hands-on laboratory manuals, and automated knowledge self-assessments in Web Development, Event-Driven Game Programming, Database Architecture, and Systems Engineering.
          </p>
        </header>

        {/* Mission & Purpose */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Our Educational Mission</h2>
              <p className="text-xs text-slate-500 font-medium">Bridging theoretical computer science with real-world industry engineering</p>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In traditional university lecture settings, students often encounter a significant gap between abstract theoretical concepts and hands-on coding execution. <strong>Lesson Library</strong> was built to eliminate this friction. Every curriculum hosted on this platform is structured around three foundational pedagogical pillars:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs mb-3">01</div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Visual Concept Slides</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured interactive slide decks featuring architectural flowcharts, code diff comparisons, and plain-English analogies.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mb-3">02</div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Rigorous Lab Manuals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Step-by-step practical guides with verifiable code snippets, terminal commands, and inspector screenshots.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs mb-3">03</div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Active Recall Quizzes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Concept checks with immediate technical feedback, teaching the fundamental &ldquo;why&rdquo; behind correct engineering solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Educator & Editorial Leadership */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Educator &amp; Curriculum Author</h2>
              <p className="text-xs text-slate-500 font-medium">Curated and maintained for educational learning and teaching purposes</p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Lesson Library is authored, maintained, and curated by <strong>Luiese Armstrong</strong> solely for personal educational teaching purposes, student classroom exercises, and independent computer science study.
            </p>
            <p>
              Every lesson, slide deck, code excerpt, and laboratory exercise is created from scratch with clear explanations, practical diagrams, and verified codebases to help learners master software engineering concepts step-by-step.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 text-xs sm:text-sm text-indigo-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong>Academic Integrity & Continuous Maintenance:</strong> All course content is updated semester-by-semester to reflect current modern software revisions (such as Laravel 11 with PHP 8.2+, Godot Engine 4.x, modern ECMAScript standards, and current Web Content Accessibility Guidelines).
            </div>
          </div>
        </section>

        {/* Curricula Offered */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Academic Subjects Hosted</h2>
              <p className="text-xs text-slate-500 font-medium">Comprehensive multi-week curricula available on this portal</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
              <span className="text-[10px] uppercase font-bold text-indigo-600 block">Course Code: IT-EDP1</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Event-Driven Programming</h4>
              <p className="text-slate-600 leading-relaxed">
                Covers game loops, Godot 4 scene trees, viewport stretch, Node2D mechanics, kinematic character physics, collision masks, and mobile touch emulation.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
              <span className="text-[10px] uppercase font-bold text-rose-600 block">Course Code: IT-WD3</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Web Development 3: Laravel 11</h4>
              <p className="text-slate-600 leading-relaxed">
                Modern full-stack PHP with Laravel 11, Blade template inheritance, artisan tooling, Eloquent ORM, SQLite configuration, and multi-page routing.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
              <span className="text-[10px] uppercase font-bold text-sky-600 block">Course Code: IT-MD1</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Interactive Media Design</h4>
              <p className="text-slate-600 leading-relaxed">
                Human-computer interaction cycles, Don Norman&apos;s affordances and signifiers, the 8-point grid, WCAG color contrast, and UX user empathy.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
              <span className="text-[10px] uppercase font-bold text-emerald-600 block">Course Code: IT-DB1</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Database Management Systems</h4>
              <p className="text-slate-600 leading-relaxed">
                Relational entity integrity, primary and foreign keys, ACID transaction guarantees, parameterized queries, and SQL injection defenses.
              </p>
            </div>
          </div>
        </section>

        {/* Institutional Contact & Transparency */}
        <section className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Have Questions, Suggestions, or Errata to Report?
          </h2>
          <p className="text-indigo-200 text-sm leading-relaxed max-w-2xl">
            We value feedback from university professors, students, and independent learners worldwide. If you notice a typo in a code snippet or would like to request curriculum slides on a new topic, our editorial inbox is always open.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/contact/"
              className="px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold transition flex items-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4 text-indigo-600" />
              <span>Contact Academic Inquiries</span>
            </Link>
            <Link
              href="/privacy/"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition border border-white/20"
            >
              <span>View Privacy Policy</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
