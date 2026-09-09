'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, Award, Home, Compass, Loader2 } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      const search = window.location.search;

      // Handle common /Lessons or /Lesson path mismatches from GitHub Pages or copied URLs
      const lower = pathname.toLowerCase();
      if (lower.startsWith('/lessons') || lower.startsWith('/lesson/')) {
        let cleanPath = pathname.replace(/^\/lessons/i, '').replace(/^\/lesson/i, '/lesson');
        if (!cleanPath || cleanPath === '/') {
          cleanPath = '/';
        } else if (!cleanPath.endsWith('/')) {
          cleanPath += '/';
        }

        const targetUrl = `${cleanPath}${search}`;
        if (targetUrl !== pathname + search) {
          setIsRedirecting(true);
          router.replace(targetUrl);
        }
      }
    }
  }, [router]);

  if (isRedirecting) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center font-sans">
        <Loader2 className="w-10 h-10 text-rose-600 animate-spin mb-4" />
        <h2 className="text-xl font-bold text-slate-800 font-lexend">Redirecting to Lesson...</h2>
        <p className="text-sm text-slate-500 mt-1">Resolving route path automatically...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="max-w-5xl mx-auto w-full p-4 sm:p-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Library</span>
        </Link>
        <span className="text-xs font-semibold text-slate-400 font-mono">Status: 404 Not Found</span>
      </header>

      {/* Main 404 Hero */}
      <div className="max-w-2xl mx-auto w-full px-6 py-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-rose-500/10 border border-rose-500/20 text-rose-600 mb-6 shadow-inner">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <h1 className="font-lexend text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
          404: Page Not Found
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
          The page or subpath you requested does not exist at this address. If you were looking for the Laravel 11 or Video Editing lessons, select from the quick links below:
        </p>

        {/* Helpful Direct Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg text-left">
          <Link
            href="/lesson/?id=laravel11"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-md transition group flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-[10px] uppercase font-bold text-rose-600 font-mono">Week 1</span>
            </div>
            <h3 className="font-lexend font-bold text-slate-800 text-sm group-hover:text-rose-600 transition">
              Laravel 11 Fundamentals
            </h3>
            <p className="text-xs text-slate-500 mt-1">Start official docs slide curriculum</p>
          </Link>

          <Link
            href="/quiz/?id=laravel11"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-md transition group flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-[10px] uppercase font-bold text-rose-600 font-mono">Assessment</span>
            </div>
            <h3 className="font-lexend font-bold text-slate-800 text-sm group-hover:text-rose-600 transition">
              Laravel 11 Quiz
            </h3>
            <p className="text-xs text-slate-500 mt-1">Test your knowledge with 10 questions</p>
          </Link>
        </div>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition shadow-md font-lexend"
        >
          <Home className="w-4 h-4" />
          Go to All Lessons Homepage
        </Link>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-slate-400">
        Lesson Portal • Self-Paced Interactive Courseware
      </footer>
    </main>
  );
}
