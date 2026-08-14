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
  GraduationCap,
  Search
} from 'lucide-react';
import { AdSidebar } from '@/components/AdSidebar';
import { CONFIG } from '@/config';
import { HeaderAd } from '@/components/HeaderAd';

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
  quizEnabled?: boolean;
}

const DEFAULT_LESSONS: Lesson[] = [
  {
    id: 'mediadsn1',
    week: 1,
    title: 'Introduction to Interactive Media Design',
    description: 'Learn the basics, history, and key components of interactive media design, emphasizing user-centered digital experiences.',
    duration: '20 mins',
    slidesCount: 36,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
  },
  {
    id: 'laravel11',
    week: 1,
    title: 'Laravel 11 Fundamentals',
    description: 'Learn the core concepts of Laravel 11, including server setup, directory structure, routing, Blade templates, and passing data.',
    duration: '15 mins',
    slidesCount: 50,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
  },
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
    quizEnabled: true,
  },
  {
    id: 'webdev1',
    week: 1,
    title: 'Introduction to Web Development',
    description: 'Learn the core building blocks of the web: HTML5 structure, CSS3 presentation, file extensions, and basic browser rendering loops.',
    duration: '15 mins',
    slidesCount: 21,
    difficulty: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    isActive: true,
    quizEnabled: true,
  }
];

const LogoIcon = () => (
  <div className="relative flex items-center justify-center">
    <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left page (Sky Blue gradient) */}
      <path d="M50 78C35 74 20 78 20 78V26C20 26 35 22 50 26" stroke="url(#logo-sky)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right page (Indigo gradient) */}
      <path d="M50 78C65 74 80 78 80 78V26C80 26 65 22 50 26" stroke="url(#logo-indigo)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Middle spine with a glowing diamond star on top representing intelligence and achievements */}
      <path d="M50 26V78" stroke="#818cf8" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M50 11L53.5 16.5L59 19L53.5 21.5L50 27L46.5 21.5L41 19L46.5 16.5L50 11Z" fill="#3b82f6" />
      
      <defs>
        <linearGradient id="logo-sky" x1="20" y1="26" x2="50" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="logo-indigo" x1="80" y1="26" x2="50" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default function Home() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [baseUrl, setBaseUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'week-asc' | 'week-desc' | 'title-asc' | 'difficulty'>('week-asc');
  const [showAds, setShowAds] = useState(false);

  // Hydrate state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      const hasLessonsPath = window.location.pathname.startsWith('/Lessons');
      setBaseUrl(hasLessonsPath ? `${origin}/Lessons` : origin);

      const clientId = localStorage.getItem('vid_adsense_client_id') || CONFIG.adsenseClientId || '';
      const slotId = localStorage.getItem('vid_adsense_slot_id') || CONFIG.adsenseSlotId || '';
      setShowAds(clientId.trim() !== '' && slotId.trim() !== '');

      const stored = localStorage.getItem('vid_lessons');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (!Array.isArray(parsed)) {
            throw new Error("Stored lessons is not an array");
          }
          let updated = parsed.map(l => {
            const def = DEFAULT_LESSONS.find(d => d.id === l.id);
            if (def) {
              if (l.quizEnabled !== def.quizEnabled || l.isActive !== def.isActive) {
                return { ...l, quizEnabled: def.quizEnabled, isActive: def.isActive };
              }
            }
            return l;
          });

          let hasChanges = JSON.stringify(parsed) !== JSON.stringify(updated);
          DEFAULT_LESSONS.forEach((defLesson) => {
            if (!updated.some((l) => l.id === defLesson.id)) {
              updated.push(defLesson);
              hasChanges = true;
            }
          });
          
          if (hasChanges) {
            updated.sort((a, b) => a.week - b.week);
            localStorage.setItem('vid_lessons', JSON.stringify(updated));
          }
          setLessons(updated);
        } catch (err) {
          console.error("Failed to parse vid_lessons:", err);
          localStorage.setItem('vid_lessons', JSON.stringify(DEFAULT_LESSONS));
          setLessons(DEFAULT_LESSONS);
        }
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
    <main className="min-h-screen bg-gradient-to-tr from-[#f8fafc] via-[#f1f5f9] to-[#ecf2ff] text-slate-800 flex flex-col justify-between py-8 px-4 relative overflow-hidden font-sans">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-200/25 rounded-full blur-[100px] pointer-events-none select-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-200/25 rounded-full blur-[120px] pointer-events-none select-none" />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header Panel */}
      <header className="w-full max-w-6xl mx-auto mb-8 bg-white/60 border border-white/80 backdrop-blur-md px-6 py-4.5 rounded-3xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <LogoIcon />
          <h1 className="font-lexend text-lg md:text-xl font-black tracking-tight text-slate-900">
            Lesson Library
          </h1>
        </div>
      </header>

      {/* Main Content Area: Catalog + Sidebar */}
      <div className="w-full max-w-6xl mx-auto flex-grow mb-12 flex flex-col lg:flex-row gap-8 items-start">
        {/* Main Grid View */}
        <section className={`flex-grow w-full ${showAds ? 'lg:max-w-[72%]' : 'lg:max-w-full'}`}>
          <div className="mb-6">
            <h2 className="font-lexend text-base font-extrabold text-slate-800 uppercase tracking-wider">
              Curriculum Catalog
            </h2>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-8">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-405 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/70 border border-slate-200 focus:border-sky-500 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-slate-400 font-semibold shrink-0">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full sm:w-auto bg-white/70 border border-slate-200 focus:border-sky-500 rounded-2xl px-3.5 py-2.5 text-xs text-slate-655 font-semibold focus:outline-none focus:ring-4 focus:ring-sky-500/10 transition cursor-pointer"
              >
                <option value="week-asc">Week (Ascending)</option>
                <option value="week-desc">Week (Descending)</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="difficulty">Difficulty</option>
              </select>
            </div>
          </div>

          {/* Dynamic Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {lessons
              .filter((lesson) => {
                const query = searchQuery.toLowerCase();
                return (
                  lesson.title.toLowerCase().includes(query) ||
                  lesson.description.toLowerCase().includes(query)
                );
              })
              .sort((a, b) => {
                if (sortBy === 'week-asc') {
                  return a.week - b.week;
                }
                if (sortBy === 'week-desc') {
                  return b.week - a.week;
                }
                if (sortBy === 'title-asc') {
                  return a.title.localeCompare(b.title);
                }
                if (sortBy === 'difficulty') {
                  const diffWeight = { Beginner: 1, Intermediate: 2, Advanced: 3 };
                  return diffWeight[a.difficulty] - diffWeight[b.difficulty];
                }
                return 0;
              })
              .map((lesson: Lesson) => {
                const isWeekActive = lesson.isActive;
                const diffColor = 
                  lesson.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-605 border-emerald-500/20' : 
                  lesson.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-605 border-amber-500/20' : 
                  'bg-rose-500/10 text-rose-605 border-rose-505/20';

                return (
                  <div 
                    key={lesson.id}
                    className={`relative group bg-white/65 border border-white/85 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                      isWeekActive 
                        ? 'hover:border-sky-500/35 hover:shadow-[0_20px_40px_rgba(8,_112,_184,_0.08)] hover:-translate-y-0.5' 
                        : 'opacity-65 hover:opacity-85'
                    }`}
                  >
                    {/* Lesson Thumbnail */}
                    <div className="h-44 sm:h-48 w-full relative bg-slate-100 overflow-hidden">
                      <img
                        src={lesson.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'}
                        alt={lesson.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      
                      {/* Badges Overlay */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-white/90 text-slate-800 border border-slate-200/50 backdrop-blur-sm shadow-sm">
                          Week {lesson.week}
                        </span>
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border backdrop-blur-sm ${diffColor}`}>
                          {lesson.difficulty}
                        </span>
                      </div>

                      {!isWeekActive && (
                        <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px] flex items-center justify-center gap-2 text-white font-bold text-xs">
                          <Lock className="w-4 h-4 text-amber-450 animate-pulse" />
                          <span>COMING SOON</span>
                        </div>
                      )}
                    </div>

                    {/* Lesson Info */}
                    <div className="p-5 flex-grow flex flex-col justify-between bg-white/[0.2]">
                      <div>
                        <h3 className="font-lexend text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition duration-300">
                          {lesson.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-semibold">
                          {lesson.description}
                        </p>
                      </div>

                      {/* Metadata Row */}
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 border-t border-slate-100/80 pt-4 mb-4 select-none">
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-sky-500" />
                          <span>{lesson.slidesCount} Slides</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-indigo-500" />
                          <span>{lesson.quizEnabled !== false ? 'Includes Quiz' : 'No Quiz Active'}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      {isWeekActive ? (
                        <div className="space-y-2.5">
                          {lesson.quizEnabled !== false ? (
                            <div className="grid grid-cols-2 gap-3">
                              <Link
                                href={`/lesson?id=${lesson.id}`}
                                className="py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-md shadow-sky-500/10 active:scale-95 transition flex items-center justify-center gap-1.5 font-lexend"
                              >
                                Start Lesson
                                <ExternalLink className="w-3.5 h-3.5" />
                              </Link>
                              <Link
                                href={`/quiz?id=${lesson.id}`}
                                className="py-2.5 px-4 rounded-xl border border-sky-200 bg-sky-500/5 hover:bg-sky-500/10 text-sky-700 text-xs font-bold transition flex items-center justify-center gap-1.5 font-lexend"
                              >
                                Take Quiz
                                <Award className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          ) : (
                            <div className="w-full">
                              <Link
                                href={`/lesson?id=${lesson.id}`}
                                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-md shadow-sky-500/10 active:scale-95 transition flex items-center justify-center gap-1.5 font-lexend"
                              >
                                Start Lesson
                                <ExternalLink className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}

                          {/* Share links buttons row */}
                          {lesson.quizEnabled !== false ? (
                            <div className="grid grid-cols-2 gap-3 border-t border-slate-100/80 pt-2.5">
                              <button
                                onClick={() => copyToClipboard(`/lesson?id=${lesson.id}`, 'Lesson')}
                                className="py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-55 text-slate-500 hover:text-slate-700 text-[10px] font-bold transition flex items-center justify-center gap-1"
                                title="Copy direct link for students"
                              >
                                <Copy className="w-3 h-3" />
                                Copy Lesson
                              </button>
                              <button
                                onClick={() => copyToClipboard(`/quiz?id=${lesson.id}`, 'Quiz')}
                                className="py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-55 text-slate-500 hover:text-slate-700 text-[10px] font-bold transition flex items-center justify-center gap-1"
                                title="Copy direct quiz link"
                              >
                                <Copy className="w-3 h-3" />
                                Copy Quiz
                              </button>
                            </div>
                          ) : (
                            <div className="w-full border-t border-slate-100/80 pt-2.5">
                              <button
                                onClick={() => copyToClipboard(`/lesson?id=${lesson.id}`, 'Lesson')}
                                className="w-full py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-55 text-slate-500 hover:text-slate-700 text-[10px] font-bold transition flex items-center justify-center gap-1"
                                title="Copy direct link for students"
                              >
                                <Copy className="w-3 h-3" />
                                Copy Lesson Link
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          disabled
                          className="w-full py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 text-xs font-bold transition flex items-center justify-center gap-1"
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

        {showAds && (
          /* Right Sidebar for Ads */
          <div className="w-full lg:w-[28%] shrink-0 lg:sticky lg:top-6 bg-white/65 border border-white/85 backdrop-blur-sm p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <AdSidebar slotName="Homepage Sidebar Ad" />
          </div>
        )}
      </div>

      {showAds && (
        <div className="w-full max-w-6xl mx-auto mt-4 border-t border-slate-200/80 pt-2">
          <HeaderAd />
        </div>
      )}

      {/* Bottom Footer signature */}
      <footer className="w-full max-w-6xl mx-auto text-center text-xs text-slate-500 font-semibold tracking-wide border-t border-slate-200/80 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>Developed by Luiese Amstrong • Lesson Library © 2026</span>
        <Link href="/privacy" className="hover:text-sky-600 transition underline">
          Privacy Policy
        </Link>
      </footer>
    </main>
  );
}
