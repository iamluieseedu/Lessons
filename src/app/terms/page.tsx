'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  ArrowLeft,
  GraduationCap,
  Scale,
  ShieldAlert,
  Code2,
  BookCheck,
  CheckCircle2
} from 'lucide-react';

export default function TermsOfServicePage() {
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

          <Link
            href="/"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Library</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="border-b border-slate-200 pb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5 text-indigo-600" />
            Legal Terms & Educational Usage Policies
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Last Updated &amp; Effective: August 2026 &bull; Lesson Library (iamlesson.space)
          </p>
        </header>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 text-xs flex items-center justify-center font-bold">1</span>
              Acceptance of Educational Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing educational resources on <strong>Lesson Library</strong> (<code>iamlesson.space</code>), you acknowledge and agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 text-xs flex items-center justify-center font-bold">2</span>
              Educational License &amp; Permitted Use
            </h2>
            <p>
              Permission is granted to view, read, execute code snippets from, and reference the slide decks, laboratory manuals, and assessments hosted on this site for <strong>personal, academic, and non-commercial educational purposes</strong>. Under this license, you may:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>Read and study all lecture slides and laboratory manuals for classroom preparation.</li>
              <li>Execute, copy, and modify provided code examples in your own educational exercises and student assignments.</li>
              <li>Share direct hyperlinks to lesson decks and laboratory manuals for academic study groups.</li>
            </ul>
            <p className="pt-2">You may not:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>Republish or sell lesson materials or slide content for commercial gain or paid subscriptions without explicit written consent from the author.</li>
              <li>Deploy automated web scrapers or denial-of-service bots that interfere with platform availability for students.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 text-xs flex items-center justify-center font-bold">3</span>
              Academic Integrity &amp; Student Submissions
            </h2>
            <p>
              The code samples and laboratory manuals provided on Lesson Library are intended as instructional blueprints. When submitting homework, projects, or thesis implementations to your educational institution, students are required to adhere to their university&apos;s academic integrity guidelines and properly cite code algorithms referenced from this portal.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 text-xs flex items-center justify-center font-bold">4</span>
              Third-Party Tools &amp; Trademarks
            </h2>
            <p>
              Godot Engine is a registered trademark of Juan Linietsky and Ariel Manzur. Laravel is a registered trademark of Taylor Otwell. PHP, C++, MySQL, SQLite, and other referenced frameworks are property of their respective trademark holders. Lesson Library is an independent educational publisher and is not officially affiliated with or endorsed by these third-party organizations.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 text-xs flex items-center justify-center font-bold">5</span>
              Advertising &amp; Commercial Partnerships
            </h2>
            <p>
              This website displays contextual and personalized advertisements provided by Google AdSense to offset server hosting and educational material maintenance costs. By using this website, you acknowledge our advertising partners and consent to the cookie usage described in our <Link href="/privacy/" className="text-indigo-600 underline font-bold">Privacy Policy</Link>.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 text-xs flex items-center justify-center font-bold">6</span>
              Disclaimer &amp; Limitation of Liability
            </h2>
            <p>
              The educational materials on Lesson Library are provided on an &ldquo;as is&rdquo; basis. While we strive to ensure all code examples and technical explanations are bug-free, modern, and aligned with standard curriculum outcomes, Lesson Library makes no warranties, expressed or implied, regarding runtime fitness for specific commercial software deployments.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
