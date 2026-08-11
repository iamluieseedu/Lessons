'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { QuizView } from '@/components/QuizView';
import { Film, ArrowLeft, Lock } from 'lucide-react';

function QuizPageContent() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');

  if (lessonId !== 'week1') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 text-center">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
          <div className="p-3.5 rounded-full bg-amber-500/10 text-amber-600 w-fit mx-auto mb-4 border border-amber-500/20">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="font-lexend text-xl font-bold text-slate-900 mb-2">Quiz Coming Soon</h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
            The assessment quiz for this week's unit is locked or currently under development by your teacher.
          </p>
          <Link
            href="/"
            className="w-full py-2.5 bg-sky-655 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between py-4">
      {/* Top Application Header */}
      <header className="w-full max-w-6xl mx-auto px-4 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 text-white shadow-md">
            <Film className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-lexend text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
              Interactive Assessment
              <span className="text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 font-semibold border border-sky-500/20">
                VIDEODIT
              </span>
            </h1>
            <p className="text-xs text-slate-500 font-medium">Week 1: Introduction to Video Editing Quiz</p>
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-sky-700 text-xs font-bold shadow-sm transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Library
        </Link>
      </header>

      {/* Main Quiz Frame */}
      <div className="flex-grow flex items-center justify-center py-6 px-4">
        <QuizView />
      </div>

      {/* Bottom Footer signature */}
      <footer className="w-full max-w-6xl mx-auto px-4 mt-4 text-center text-xs text-slate-500 font-semibold tracking-wide">
        Developed by Luiese Amstrong
      </footer>
    </main>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500 font-semibold text-xs">Loading assessment quiz...</div>}>
      <QuizPageContent />
    </Suspense>
  );
}
