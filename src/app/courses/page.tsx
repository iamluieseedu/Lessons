'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  ArrowLeft,
  BookOpen,
  Code2,
  Gamepad2,
  Database,
  Palette,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  Clock,
  Award
} from 'lucide-react';

export default function CoursesDirectoryPage() {
  const courses = [
    {
      code: 'IT-EDP1',
      title: 'Event-Driven Programming with Godot 4',
      badge: 'Game Engine & Physics',
      color: 'sky',
      slug: 'event-driven-programming',
      duration: '18 Weeks • 3 Credits',
      desc: 'Master the event loop, node hierarchies, 2D kinematic physics, mobile canvas scaling, GDScript 2.0 scripting, and collision layer matrices in Godot Engine 4.',
      topics: ['Game Loops & Fixed Physics Timesteps', 'Node2D & Scene Tree Architecture', 'CharacterBody2D Kinematics', 'Collision Layer & Mask Matrices', 'Mobile Touch Emulation & Viewport Scaling'],
      labUrl: '/godot/',
      slidesUrl: '/lesson/?id=eventprog-w1'
    },
    {
      code: 'IT-WD3',
      title: 'Web Development 3: Laravel 11 Framework',
      badge: 'Modern Backend Architecture',
      color: 'rose',
      slug: 'laravel-framework',
      duration: '18 Weeks • 3 Credits',
      desc: 'Modern full-stack web engineering using PHP 8.2+ and Laravel 11. Learn Blade template inheritance, artisan scaffolding, Eloquent ORM, and database migrations.',
      topics: ['Unified bootstrap/app.php Configuration', 'Blade Component Layouts & Slots', 'Artisan CLI & Tinker REPL', 'SQLite Database Migrations & Eloquent Models', 'Multi-Page Routing & CSRF Protection'],
      labUrl: '/laravel/',
      slidesUrl: '/lesson/?id=laravel11'
    },
    {
      code: 'IT-MD1-LAB',
      title: 'Mob Dev 1: Native Android (Arctic Fox)',
      badge: 'Mobile App Development & Kotlin',
      color: 'sky',
      slug: 'mobdev',
      duration: '18 Weeks • 3 Credits',
      desc: 'Native Android application development using Kotlin, XML layout architecture, Activity lifecycles, and explicit Intents in Android Studio Arctic Fox (2020.3.1). Includes School Campus Connect and CampusVibe Practical Exam.',
      topics: ['Android Studio Arctic Fox (2020.3.1) Scaffolding', 'Linear & ScrollView XML Layout Architecture', 'Explicit Intents & startActivity() Navigation', 'Kotlin setOnClickListener & Toast Feedback', 'CampusVibe 4-Screen Social Media Practical Exam'],
      labUrl: '/mobdev/exam.html',
      slidesUrl: '/mobdev/exam.html'
    },
    {
      code: 'IT-HCI1',
      title: 'Human-Computer Interaction (HCI)',
      badge: 'UI/UX & Cognitive Systems',
      color: 'indigo',
      slug: 'interactive-media-design',
      duration: '18 Weeks • 3 Credits',
      desc: 'Principles of Human-Computer Interaction (HCI), Donald Norman affordances and signifiers, visual hierarchy, mobile interface ergonomics, information architecture, and ethical HCI design.',
      topics: ['HCI Feedback Loops & Mental Models', 'Norman Affordances, Signifiers & Feedback', 'Mobile Touch Targets & Responsive Ergonomics', 'Information Architecture & Navigation Trees', 'Ethical HCI, Dark Patterns & WCAG Standards'],
      labUrl: '/#tasks',
      slidesUrl: '/lesson/?id=mediadsn1'
    },
    {
      code: 'IT-MM1',
      title: 'Introduction to Multimedia',
      badge: '5 Core Elements & Production',
      color: 'purple',
      slug: 'introduction-to-multimedia',
      duration: '18 Weeks • 3 Credits',
      desc: 'Master the 5 core elements of multimedia (Text, Graphics, Audio, Animation, Video), non-linear interactive hypermedia architectures, production workflows, and capstone presentation.',
      topics: ['5 Core Elements of Multimedia', 'Vector Graphics vs Raster Bitmaps', 'Digital Audio Sampling & -14 LUFS Mastering', 'Keyframing, Frame Rates & Video Codecs', 'Linear vs Non-Linear Interactive Systems'],
      labUrl: '/#tasks',
      slidesUrl: '/lesson/?id=multimedia1'
    },
    {
      code: 'IT-DB1',
      title: 'Database Management Systems',
      badge: 'Relational Data & SQL',
      color: 'emerald',
      slug: 'database-systems',
      duration: '18 Weeks • 3 Credits',
      desc: 'Comprehensive relational database theory, entity integrity, foreign key cascades (CASCADE, SET NULL, RESTRICT), ERD Crow\'s Foot cardinality, GROUP BY & HAVING aggregations, and parameterized SQL query security.',
      topics: ['ERD Crow\'s Foot Cardinality (1:1, 1:N, M:N)', 'Foreign Key Cascades & Referential Integrity', 'SQL Aggregations with GROUP BY & HAVING', 'Multi-Table INNER & OUTER JOIN Matrices', 'SQL Injection & Prepared Statements'],
      labUrl: '/#tasks',
      slidesUrl: '/lesson/?id=database2'
    },
    {
      code: 'CS-CPP1',
      title: 'Object-Oriented Programming with C++',
      badge: 'Systems & Memory Architecture',
      color: 'amber',
      slug: 'cpp-programming',
      duration: '18 Weeks • 3 Credits',
      desc: 'Low-level systems programming in C++. Master raw memory layout, pointers and references, manual memory management (malloc/free, new/delete), classes, and inheritance.',
      topics: ['Stack vs Heap Memory Layout', 'Pointers, Dereferencing & Pointer Arithmetic', 'Object-Oriented Class Encapsulation', 'Polymorphism & Virtual Method Tables', 'Escape Sequences & Stream Formatting'],
      labUrl: '/#tasks',
      slidesUrl: '/lesson/?id=cpp1'
    },
    {
      code: 'IT-WD1',
      title: 'Web Development 1: Fundamentals',
      badge: 'HTML5, CSS3 & Core JavaScript',
      color: 'purple',
      slug: 'web-development-fundamentals',
      duration: '18 Weeks • 3 Credits',
      desc: 'The building blocks of the modern web: semantic HTML5 markup, CSS3 Flexbox and Grid layouts, responsive mobile viewports, and DOM manipulation with vanilla JavaScript.',
      topics: ['Semantic Document Object Model (DOM)', 'CSS3 Flexbox Alignment & Grid Layouts', 'Vanilla JavaScript Event Listeners', 'Form Validation & Input Sanitation', 'SEO Best Practices & Meta Information'],
      labUrl: '/#tasks',
      slidesUrl: '/lesson/?id=webdev1'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
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
              href="/about/"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition shadow-sm"
            >
              About Us
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
        <header className="text-center sm:text-left border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Academic Curriculum Directory
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Computer Science &amp; Information Technology Courses
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Explore our comprehensive, semester-long computing curricula. Each course includes full lecture slide decks, interactive code exercises, hands-on laboratory manuals, and conceptual quizzes designed for higher education students.
          </p>
        </header>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((c) => (
            <div
              key={c.code}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                    {c.code}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {c.duration}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {c.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] uppercase font-bold text-slate-400 block mb-2 font-mono">
                    Core Learning Competencies:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {c.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold shrink-0">&bull;</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <Link
                  href={`/courses/${c.slug}/`}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition"
                >
                  <span>View Full Syllabus &amp; Study Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  <Link
                    href={c.slidesUrl}
                    className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition"
                  >
                    Slides
                  </Link>
                  <Link
                    href={c.labUrl}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition"
                  >
                    Lab Manual
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
