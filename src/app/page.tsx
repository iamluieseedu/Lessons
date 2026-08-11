'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Film, 
  Clock, 
  BookOpen, 
  Award, 
  Copy, 
  Check, 
  ExternalLink, 
  Lock, 
  GraduationCap 
} from 'lucide-react';

interface Lesson {
  id: string;
  week: number;
  title: string;
  description: string;
  duration: string;
  slidesCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  isActive: boolean;
}

const DEFAULT_LESSONS: Lesson[] = [
  {
    id: 'week1',
    week: 1,
    title: 'Introduction to Video Editing',
    description: 'Learn the fundamentals of video editing, timeline cuts, A-Roll/B-Roll layering, and Walter Murch\'s rules of rendering.',
    duration: '25 mins',
    slidesCount: 51,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    isActive: true,
  }
];

export default function Home() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [baseUrl, setBaseUrl] = useState('');

  // Hydrate state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseUrl(window.location.origin);
      const stored = localStorage.getItem('vid_lessons');
      if (stored) {
        setLessons(JSON.parse(stored));
      } else {
        localStorage.setItem('vid_lessons', JSON.stringify(DEFAULT_LESSONS));
        setLessons(DEFAULT_LESSONS);
      }
    }
  }, []);

  const copyToClipboard = (path: string, label: string) => {
    const fullLink = `${baseUrl}${path}`;
    navigator.clipboard.writeText(fullLink);
    setToast(`${label} Link Copied!`);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between py-6 px-4 relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-slate-800 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header Panel */}
      <header className="w-full max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg">
            <Film className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-lexend text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
              Lesson Library
              <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 font-bold border border-sky-500/20 uppercase tracking-wider">
                Portal
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">Interactive Learning Portal for Students</p>
          </div>
        </div>
      </header>

      {/* Main Grid View */}
      <section className="w-full max-w-6xl mx-auto flex-grow mb-12">
        <div className="mb-6">
          <h2 className="font-lexend text-lg font-bold text-slate-800 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-600" />
            Curriculum Catalog
          </h2>
          <p className="text-xs text-slate-500 font-medium">Select a week below to begin learning or test your knowledge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {lessons.map((lesson: Lesson) => {
            const isWeekActive = lesson.isActive;
            const diffColor = 
              lesson.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' : 
              lesson.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-700 border-amber-500/20' : 
              'bg-rose-500/10 text-rose-700 border-rose-500/20';

            return (
              <div 
                key={lesson.id}
                className={`relative group bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isWeekActive 
                    ? 'hover:shadow-xl hover:border-slate-300' 
                    : 'opacity-75 hover:opacity-90'
                }`}
              >
                {/* Lesson Thumbnail */}
                <div className="h-44 sm:h-48 w-full relative bg-slate-100 overflow-hidden">
                  <img
                    src={lesson.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'}
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  
                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-slate-900/85 text-white backdrop-blur-sm">
                      Week {lesson.week}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border backdrop-blur-sm ${diffColor}`}>
                      {lesson.difficulty}
                    </span>
                  </div>

                  {!isWeekActive && (
                    <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] flex items-center justify-center gap-2 text-white font-bold text-xs">
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span>COMING SOON</span>
                    </div>
                  )}
                </div>

                {/* Lesson Info */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-lexend text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {lesson.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {lesson.description}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-sky-500" />
                      <span>{lesson.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-sky-500" />
                      <span>{lesson.slidesCount} Slides</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-sky-500" />
                      <span>Includes Quiz</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {isWeekActive ? (
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href={`/lesson?id=${lesson.id}`}
                          className="py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-sm transition flex items-center justify-center gap-1.5"
                        >
                          Start Lesson
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={`/quiz?id=${lesson.id}`}
                          className="py-2.5 px-4 rounded-xl border border-sky-200 bg-sky-500/5 hover:bg-sky-500/10 text-sky-750 text-xs font-bold transition flex items-center justify-center gap-1.5"
                        >
                          Take Quiz
                          <Award className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* Share links buttons row */}
                      <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-2.5">
                        <button
                          onClick={() => copyToClipboard(`/lesson?id=${lesson.id}`, 'Lesson')}
                          className="py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-bold transition flex items-center justify-center gap-1"
                          title="Copy direct link for students"
                        >
                          <Copy className="w-3 h-3" />
                          Copy Lesson Link
                        </button>
                        <button
                          onClick={() => copyToClipboard(`/quiz?id=${lesson.id}`, 'Quiz')}
                          className="py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-bold transition flex items-center justify-center gap-1"
                          title="Copy direct quiz link"
                        >
                          <Copy className="w-3 h-3" />
                          Copy Quiz Link
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      disabled
                      className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-400 text-xs font-bold transition flex items-center justify-center gap-1"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      Locked Unit
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Footer signature */}
      <footer className="w-full max-w-6xl mx-auto text-center text-xs text-slate-400 font-semibold tracking-wide border-t border-slate-200 pt-6">
        Developed by Luiese Amstrong • Lesson Library © 2026
      </footer>
    </main>
  );
}
