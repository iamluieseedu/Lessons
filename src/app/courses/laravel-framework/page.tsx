'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileCode,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Layers,
  Database,
  Terminal,
  ShieldCheck,
  Server,
  Play
} from 'lucide-react';

export default function LaravelCoursePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-rose-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/courses/" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Courses</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/lesson/?id=laravel11"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Laravel Slides</span>
            </Link>
            <Link
              href="/laravel/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition flex items-center gap-1.5"
            >
              <BookOpen className="w-3 h-3" />
              <span>Launch Lab Manual</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 border border-rose-200">
              IT-WD3
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              18 Weeks &bull; 3 Credit Units &bull; Modern Full-Stack PHP
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Web Development 3: The Laravel 11 Framework
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive collegiate curriculum focusing on modern server-side architecture, MVC design patterns, Blade component layouts, Artisan CLI tooling, and database migrations in Laravel 11.
          </p>
        </header>

        {/* Overview Section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Server className="w-5 h-5 text-rose-600" />
            <span>Curriculum Overview &amp; Backend Engineering</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Modern enterprise web development requires robust architectural separation of concerns, secure data sanitization, organized routing pipelines, and maintainable template hierarchies. In <strong>IT-WD3</strong>, students advance beyond procedural native PHP into modern framework engineering using <strong>Laravel 11</strong> and <strong>PHP 8.2+</strong>.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Laravel 11 introduces a streamlined application skeleton: eliminating complex multi-provider boilerplate and unifying HTTP routing, console commands, and middleware configuration directly inside <code>bootstrap/app.php</code>. Students build real-world multi-page web applications utilizing Blade layout inheritance (<code>@extends</code> and <code>@yield</code> or modern <code>&lt;x-layout&gt;</code> components), SQLite database persistence, and Eloquent model relationships.
          </p>
        </section>

        {/* 18-Week Syllabus Outline */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Semester Syllabus &amp; Module Progression</span>
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 font-mono">Week 1 &ndash; 2: Laravel 11 Architecture</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Environment Setup, Composer, &amp; The Unified bootstrap/app.php
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                PHP 8.2 runtime validation, Composer package management, artisan serve, SQLite out-of-the-box database initialization, and the Laravel 11 streamlined directory tree.
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <Link href="/laravel/" className="text-xs font-bold text-rose-600 hover:underline">
                  &rarr; Multi-Page Migration Lab Manual
                </Link>
                <span className="text-slate-300">&bull;</span>
                <Link href="/lesson/?id=laravel11" className="text-xs font-bold text-rose-600 hover:underline">
                  &rarr; Laravel 11 Interactive Slides
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">Week 3 &ndash; 5: Blade Templating Engine</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Layout Inheritance, Dynamic Content Slots, &amp; Static Assets
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Migrating raw native HTML/PHP into modular master layouts, yield sections, Blade conditional directives (<code>@auth</code>, <code>@forelse</code>), and clean asset linking via <code>asset()</code>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Week 6 &ndash; 8: Routing &amp; Controller Design</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                HTTP Verbs, Resource Controllers, &amp; CSRF Defense
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                RESTful routing in <code>routes/web.php</code>, Route Model Binding, controller action generation via <code>php artisan make:controller -r</code>, and automatic 419 Cross-Site Request Forgery defenses.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">Week 9 &ndash; 12: Database Migrations &amp; Eloquent ORM</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Schema Builder, Model Factories, &amp; PsySH Tinker
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Version-controlled database schema migrations, method-based attribute casts, mass assignment protection via <code>$fillable</code>, and live model testing in PsySH Tinker REPL.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 font-mono">Week 13 &ndash; 15: Authentication &amp; Authorization</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Session Management, Password Hashing, &amp; User Middleware
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bcrypt password hashing, user login and registration flows, session guard middleware, authorization gates, and role-based access control.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 font-mono">Week 16 &ndash; 18: Capstone Web Application</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 mb-1">
                Full-Stack CRUD Application Deployment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Final production build optimization, database seeding, automated testing with Pest/PHPUnit, cloud server deployment, and student code review.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
