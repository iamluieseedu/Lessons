'use client';

import React from 'react';
import Link from 'next/link';
import {
  Terminal,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Play
} from 'lucide-react';

export default function CppProgrammingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans pb-24 antialiased selection:bg-amber-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/courses/" className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Courses</span>
          </Link>

          <Link
            href="/lesson/?id=cpp1"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition flex items-center gap-1.5"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>C++ Slides</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
              CS-CPP1
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              18 Weeks &bull; 3 Credit Units &bull; Systems &amp; Object-Oriented C++
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Object-Oriented Programming &amp; Systems Architecture in C++
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive collegiate curriculum on memory architecture, pointer arithmetic, manual heap allocation, object-oriented encapsulation, polymorphism, and stream I/O formatting in modern C++.
          </p>
        </header>

        {/* Overview Section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-amber-600" />
            <span>Low-Level Memory &amp; Systems Engineering</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Understanding how hardware executes software is fundamental to computer science. In <strong>CS-CPP1</strong>, students explore computer architecture directly through C++. Students study the exact physical separation between the execution Stack (automatic fast allocation with LIFO lifetime) and the dynamic Heap (manual allocation with pointer addressing).
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Students learn the rigorous rules of pointers and references: memory addressing, pointer dereferencing, pointer arithmetic, memory leaks, and RAII (Resource Acquisition Is Initialization) design patterns to build leak-free, high-performance software systems.
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 font-mono">Weeks 1 &ndash; 3</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">C++ Compilation, Streams &amp; Escape Sequences</h4>
              <p className="text-slate-600">The g++ compiler pipeline, standard I/O streams (cin, cout), stream manipulators, and character escape sequences.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 font-mono">Weeks 4 &ndash; 7</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Pointers, Memory Addresses, &amp; Heap Allocation</h4>
              <p className="text-slate-600">Stack vs Heap memory layout, pointer dereferencing with operator*, address-of operator&amp;, dynamic arrays, new/delete, and memory leak prevention.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 font-mono">Weeks 8 &ndash; 11</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Object-Oriented Design &amp; Encapsulation</h4>
              <p className="text-slate-600">Classes, public/private access specifiers, constructors and destructors, copy constructors, operator overloading, and const-correctness.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">Weeks 12 &ndash; 15</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Inheritance, Polymorphism &amp; V-Tables</h4>
              <p className="text-slate-600">Single and multiple inheritance, virtual functions, pure virtual methods, abstract base classes, and dynamic runtime dispatch.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 font-mono">Weeks 16 &ndash; 18</span>
              <h4 className="font-bold text-slate-900 text-sm mt-0.5 mb-1">Standard Template Library (STL) &amp; Final Project</h4>
              <p className="text-slate-600">Vectors, maps, iterators, generic templates, smart pointers (std::unique_ptr, std::shared_ptr), and final systems programming application.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
