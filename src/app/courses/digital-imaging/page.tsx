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
  Play,
  GraduationCap,
  Sliders,
  Type,
  Printer,
  FileCheck,
  Award,
  ArrowRight
} from 'lucide-react';

export default function DigitalImagingCoursePage() {
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
              href="/lesson/?id=digitalimage-w14"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-600 text-white shadow-sm hover:bg-rose-500 transition flex items-center gap-1.5 shadow-rose-500/20"
            >
              <Type className="w-3 h-3" />
              <span>Typography Lab (W14)</span>
            </Link>
            <Link
              href="/lesson/?id=digitalimage-w15"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition flex items-center gap-1.5"
            >
              <Printer className="w-3 h-3" />
              <span>Print vs Web (W15)</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-rose-600 uppercase mb-3">
          <GraduationCap className="w-4 h-4 text-rose-500" />
          <span>COURSE SYLLABUS • IT-DI1</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-lexend mb-4">
          Digital Imaging
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-6 font-sans">
          Master the professional engineering of raster and vector imagery: advanced typographic anatomy and non-destructive layer effects, pre-press color science (CMYK vs RGB, ICC profiles, FOGRA39), halftone screening mathematics, next-gen responsive web optimization (WebP/AVIF), comprehensive capstone compositing, and professional portfolio critique.
        </p>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Weeks</div>
            <div className="text-xl sm:text-2xl font-black text-rose-600 font-lexend mt-0.5">14 – 17</div>
            <div className="text-[11px] text-slate-600 mt-1">Culmination Track</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Interactive Labs</div>
            <div className="text-xl sm:text-2xl font-black text-amber-600 font-lexend mt-0.5">3 Studios</div>
            <div className="text-[11px] text-slate-600 mt-1">Live In-Browser Engines</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Deck Depth</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-600 font-lexend mt-0.5">60 Slides</div>
            <div className="text-[11px] text-slate-600 mt-1">15 per module</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Industry Specs</div>
            <div className="text-xl sm:text-2xl font-black text-sky-600 font-lexend mt-0.5">ISO 12647-2</div>
            <div className="text-[11px] text-slate-600 mt-1">FOGRA39, sRGB, PDF/X</div>
          </div>
        </div>
      </div>

      {/* Syllabus Modules Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* ================================================================= */}
        {/* MODULE 1: WEEK 14 */}
        {/* ================================================================= */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-rose-300 transition-all">
          <div className="bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-rose-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                14
              </span>
              <div>
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider block">Week 14 Module</span>
                <h2 className="text-lg font-bold text-slate-900 font-lexend">Typography and Text Effects</h2>
              </div>
            </div>
            <Link
              href="/lesson/?id=digitalimage-w14"
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-rose-600 text-white hover:bg-rose-500 transition flex items-center gap-1.5 shadow-sm"
            >
              <span>Launch Deck (15 Slides)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                <span>Learning Competencies</span>
              </h3>
              <ul className="grid sm:grid-cols-3 gap-2.5 text-xs text-slate-600">
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Integrate text into digital images.
                </li>
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Apply typography principles and create text effects.
                </li>
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Use text layers and styles for creative designs.
                </li>
              </ul>
            </div>

            <div className="bg-rose-50/60 rounded-xl p-4 border border-rose-100 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-rose-900 flex items-center gap-2 text-sm">
                <Sliders className="w-4 h-4 text-rose-600" />
                <span>Embedded Interactive Studio: Typography & Text Effects Lab</span>
              </div>
              <p className="text-slate-600">
                Live typographic testing suite inside Slide 8: dynamically inspect font classification (Cinzel, Montserrat, Impact, Playfair), tracking/kerning, layer styles (Drop Shadow, Bevel & Emboss, Stroke, Outer Glow), blend modes (Multiply, Screen, Overlay, Color Dodge), and copy instant CSS rules.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* MODULE 2: WEEK 15 */}
        {/* ================================================================= */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-amber-300 transition-all">
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-amber-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                15
              </span>
              <div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">Week 15 Module</span>
                <h2 className="text-lg font-bold text-slate-900 font-lexend">Preparing Images for Print and Web</h2>
              </div>
            </div>
            <Link
              href="/lesson/?id=digitalimage-w15"
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-600 text-white hover:bg-amber-500 transition flex items-center gap-1.5 shadow-sm"
            >
              <span>Launch Deck (15 Slides)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                <span>Learning Competencies</span>
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Learn to prepare images for different outputs, including print and web.
                </li>
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Understand color profiles, print resolution, and web optimization techniques.
                </li>
              </ul>
            </div>

            <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-100 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-amber-900 flex items-center gap-2 text-sm">
                <Printer className="w-4 h-4 text-amber-600" />
                <span>Embedded Interactive Studio: Print vs Web Color & Resolution Lab</span>
              </div>
              <p className="text-slate-600">
                Pre-press and web calculator in Slide 8: calculate physical print dimensions, LPI screening ($LPI \times 2 = DPI$), color gamut warnings between CMYK FOGRA39 and sRGB, Rich Black formulas, and WebP vs TIFF file weight trade-offs.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* MODULE 3: WEEK 16 */}
        {/* ================================================================= */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-emerald-300 transition-all">
          <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                16
              </span>
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">Week 16 Module</span>
                <h2 className="text-lg font-bold text-slate-900 font-lexend">Final Project Development</h2>
              </div>
            </div>
            <Link
              href="/lesson/?id=digitalimage-w16"
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition flex items-center gap-1.5 shadow-sm"
            >
              <span>Launch Deck (15 Slides)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Learning Competencies</span>
              </h3>
              <ul className="grid sm:grid-cols-3 gap-2.5 text-xs text-slate-600">
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Apply all learned skills to develop a final digital imaging project.
                </li>
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Plan, design, and create a comprehensive digital image or series.
                </li>
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Focus on creativity, design principles, and technical skills.
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-100 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-emerald-900 flex items-center gap-2 text-sm">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Production Architecture & Non-Destructive Protocols</span>
              </div>
              <p className="text-slate-600">
                Master 100+ layer PSD engineering: nested smart objects, surgical Pen Tool & channel hair extraction, horizon vanishing point alignment, directional lighting (key, fill, rim, contact occlusion), frequency separation, and 3-2-1 backup disaster recovery.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* MODULE 4: WEEK 17 */}
        {/* ================================================================= */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-sky-300 transition-all">
          <div className="bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-sky-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                17
              </span>
              <div>
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">Week 17 Module</span>
                <h2 className="text-lg font-bold text-slate-900 font-lexend">Project Presentation and Critique</h2>
              </div>
            </div>
            <Link
              href="/lesson/?id=digitalimage-w17"
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-sky-600 text-white hover:bg-sky-500 transition flex items-center gap-1.5 shadow-sm"
            >
              <span>Launch Deck (15 Slides)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                <span>Learning Competencies</span>
              </h3>
              <ul className="grid sm:grid-cols-3 gap-2.5 text-xs text-slate-600">
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Present final digital imaging projects to the class.
                </li>
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Receive and provide constructive feedback.
                </li>
                <li className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                  ✓ Refine and prepare projects for portfolio inclusion.
                </li>
              </ul>
            </div>

            <div className="bg-sky-50/60 rounded-xl p-4 border border-sky-100 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-sky-900 flex items-center gap-2 text-sm">
                <Eye className="w-4 h-4 text-sky-600" />
                <span>Embedded Interactive Studio: High-End Retouching Studio</span>
              </div>
              <p className="text-slate-600">
                Split-screen inspection engine in Slide 8: interactively compare raw camera plates against 12-layer finished composites, toggling individual layer passes (Low Freq, High Freq, Dodge & Burn, 3D LUT, Vignette) with a movable comparison wipe slider.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
