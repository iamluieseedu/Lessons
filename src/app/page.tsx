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
  Search,
  User,
  LogOut,
  ChevronDown,
  UserPlus,
  X
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
    <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Abstract Isometric Cube Pages */}
      <path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" fill="url(#logo-prism-bg)" />
      {/* Interlocking internal line ribbons */}
      <path d="M50 15V85" stroke="white" strokeWidth="2.5" strokeOpacity="0.3" />
      <path d="M15 35L50 50L85 35" stroke="white" strokeWidth="2.5" strokeOpacity="0.3" />
      {/* Glowing orbital academic core nodes */}
      <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#818cf8" strokeWidth="2" />
      <path d="M50 30L70 40V60L50 70L30 60V40L50 30Z" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" />
      
      <defs>
        <linearGradient id="logo-prism-bg" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

export default function Home() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [baseUrl, setBaseUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'week-asc' | 'week-desc' | 'title-asc' | 'difficulty'>('week-asc');
  const [showAds, setShowAds] = useState(false);

  const [user, setUser] = useState<{ name: string; email: string; avatar?: string } | null>(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [googleClientId, setGoogleClientId] = useState('');
  const [sdkLoaded, setSdkLoaded] = useState(false);

  // Hydrate state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      const hasLessonsPath = window.location.pathname.startsWith('/Lessons');
      setBaseUrl(hasLessonsPath ? `${origin}/Lessons` : origin);

      const clientId = localStorage.getItem('vid_adsense_client_id') || CONFIG.adsenseClientId || '';
      const slotId = localStorage.getItem('vid_adsense_slot_id') || CONFIG.adsenseSlotId || '';
      const storedUser = localStorage.getItem('vid_user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error("Failed to parse stored user:", e);
        }
      }

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

  // Load Google Identity Services SDK script
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedClientId = localStorage.getItem('vid_google_client_id') || CONFIG.googleClientId;
      setGoogleClientId(storedClientId);

      if ((window as any).google) {
        setSdkLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => setSdkLoaded(true);
      document.body.appendChild(script);

      return () => {
        try {
          document.body.removeChild(script);
        } catch (e) {}
      };
    }
  }, []);

  // Render official Google Sign-In button
  useEffect(() => {
    if (googleClientId && sdkLoaded && !user && typeof window !== 'undefined' && (window as any).google) {
      const initializeAndRender = () => {
        try {
          (window as any).google.accounts.id.initialize({
            client_id: googleClientId,
            callback: (response: any) => {
              try {
                const token = response.credential;
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(
                  atob(base64)
                    .split('')
                    .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
                );
                const payload = JSON.parse(jsonPayload);
                const loggedUser = {
                  name: payload.name,
                  email: payload.email,
                  avatar: payload.picture
                };
                setUser(loggedUser);
                localStorage.setItem('vid_user', JSON.stringify(loggedUser));
                setToast(`Logged in as ${payload.name}!`);
                setTimeout(() => setToast(null), 3000);
              } catch (err) {
                console.error("JWT Decode error:", err);
                setToast("Google auth error, please try again.");
                setTimeout(() => setToast(null), 2500);
              }
            }
          });

          const btnParent = document.getElementById('google-signin-btn-container');
          if (btnParent) {
            btnParent.innerHTML = ''; // Clear previous button instance
            (window as any).google.accounts.id.renderButton(
              btnParent,
              { theme: 'outline', size: 'medium', shape: 'pill', text: 'signin_with', width: 220 }
            );
          }
        } catch (e) {
          console.error("Error rendering Google button:", e);
        }
      };

      const timer = setTimeout(initializeAndRender, 150);
      return () => clearTimeout(timer);
    }
  }, [googleClientId, sdkLoaded, user]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('vid_user');
    setUserDropdownOpen(false);
    setToast("Logged out successfully");
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Subtle Background Radial Overlays */}
      <div className="absolute top-0 left-10 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none select-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-sky-100/20 rounded-full blur-[120px] pointer-events-none select-none" />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Modern SaaS Header Navbar */}
      <header className="w-full bg-white/80 border-b border-slate-200/80 sticky top-0 z-40 backdrop-blur-md px-6 py-3.5 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
        <div className="flex items-center gap-3">
          <LogoIcon />
          <h1 className="font-lexend text-base md:text-lg font-black tracking-tight text-slate-900 select-none">
            Lesson Library
          </h1>
        </div>

        {/* User Authentication Control (CSS hidden/flex toggle resolves double-render) */}
        <div className="relative">
          {/* 1. Logged-in Dropdown (shown only when user is set) */}
          <div className={user ? "relative block animate-fade-in" : "hidden"}>
            {user && (
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-slate-350 hover:bg-slate-100/60 px-3 py-1.5 rounded-xl transition cursor-pointer select-none"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-5 h-5 rounded-full object-cover border border-slate-200"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-white font-bold flex items-center justify-center text-[9px] uppercase font-lexend">
                    {user.name.charAt(0)}
                  </div>
                )}
                <span className="hidden sm:inline text-xs font-bold text-slate-700">{user.name}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            )}

            {userDropdownOpen && user && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-slate-200 shadow-xl rounded-xl p-2 z-50 text-left animate-fade-in">
                <div className="px-3 py-2 border-b border-slate-100 mb-1.5">
                  <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wide">Logged in as</p>
                  <p className="text-xs font-bold text-slate-800 truncate">{user.name}</p>
                  <p className="text-[9px] text-slate-500 font-mono truncate mt-0.5">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-rose-600 hover:bg-rose-50 text-xs font-bold transition"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* 2. Google OAuth Button Container (shown only when user is null) */}
          <div 
            id="google-signin-btn-container" 
            className={user ? "hidden" : "h-9 min-w-[200px] flex items-center justify-end"}
          ></div>
        </div>
      </header>

      {/* Main Content Viewport */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 flex-grow mb-12">
        <section className="w-full">
          {/* Minimalist academic title block */}
          <div className="mb-8 text-left border-b border-slate-200 pb-5">
            <h2 className="font-lexend text-2xl font-black text-slate-900 tracking-tight uppercase">
              Syllabus Track
            </h2>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
              Curriculum Catalog • Academic Year 2026
            </p>
          </div>

          {/* SaaS Clean Search and Sort bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-8">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search catalog lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/[0.03] transition"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-slate-400 font-semibold shrink-0">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full sm:w-auto bg-white border border-slate-200 focus:border-indigo-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-650 font-bold focus:outline-none focus:ring-4 focus:ring-indigo-500/[0.03] transition cursor-pointer"
              >
                <option value="week-asc">Week (Ascending)</option>
                <option value="week-desc">Week (Descending)</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="difficulty">Difficulty</option>
              </select>
            </div>
          </div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Main feature Large Bento Card (Week 1 / Web Dev) */}
            {lessons
              .filter((lesson) => {
                const query = searchQuery.toLowerCase();
                return (
                  lesson.title.toLowerCase().includes(query) ||
                  lesson.description.toLowerCase().includes(query)
                );
              })
              .sort((a, b) => {
                if (sortBy === 'week-asc') return a.week - b.week;
                if (sortBy === 'week-desc') return b.week - a.week;
                if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
                if (sortBy === 'difficulty') {
                  const w = { Beginner: 1, Intermediate: 2, Advanced: 3 };
                  return w[a.difficulty] - w[b.difficulty];
                }
                return 0;
              })
              .map((lesson: Lesson, index: number) => {
                const isWeekActive = lesson.isActive;
                const diffColor = 
                  lesson.difficulty === 'Beginner' ? 'bg-emerald-50 text-emerald-700 border-emerald-100 bg-emerald-500/5' : 
                  lesson.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-700 border-amber-100 bg-amber-500/5' : 
                  'bg-rose-50 text-rose-700 border-rose-100 bg-rose-500/5';

                {/* Bento Grid Span Configuration */}
                const isLargeBento = index === 0;

                const cardContent = (
                  <div className="flex flex-col justify-between h-full gap-4">
                    <div>
                      <div className="flex gap-2 mb-3">
                        <span className="text-[9px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-650 border border-slate-200/60 shadow-sm">
                          Week {lesson.week}
                        </span>
                        <span className={`text-[9px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md border ${diffColor}`}>
                          {lesson.difficulty}
                        </span>
                      </div>

                      <h3 className="font-lexend text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition duration-300 leading-snug">
                        {lesson.title}
                      </h3>
                      
                      <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">
                        {lesson.description}
                      </p>
                    </div>

                    {/* Footer Row: Metadata and Actions */}
                    <div className="border-t border-slate-100 pt-3">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-3 select-none">
                        <span>{lesson.slidesCount} Slides</span>
                        <span>{lesson.quizEnabled !== false ? '• Quiz Active' : '• Reading Only'}</span>
                      </div>

                      {isWeekActive ? (
                        <div className="flex flex-col gap-2">
                          <div className="grid grid-cols-2 gap-2">
                            <Link
                              href={`/lesson?id=${lesson.id}`}
                              className="py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold shadow-md shadow-indigo-600/10 active:scale-[0.98] transition flex items-center justify-center gap-1 font-lexend"
                            >
                              Start Slides
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Link>

                            {lesson.quizEnabled !== false ? (
                              <Link
                                href={`/quiz?id=${lesson.id}`}
                                className="py-2.5 px-3 rounded-xl border border-indigo-100 bg-indigo-50/15 hover:bg-indigo-50 text-indigo-700 text-[11px] font-bold active:scale-[0.98] transition flex items-center justify-center gap-1 font-lexend"
                              >
                                Take Quiz
                                <Award className="w-3.5 h-3.5" />
                              </Link>
                            ) : (
                              <div className="py-2.5 rounded-xl border border-dashed border-slate-200 text-slate-400 text-[10px] font-bold flex items-center justify-center select-none">
                                No Quiz
                              </div>
                            )}
                          </div>

                          {/* Action links */}
                          <div className="flex justify-between items-center gap-2 mt-1">
                            <button
                              onClick={() => copyToClipboard(`/lesson?id=${lesson.id}`, 'Lesson')}
                              className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 transition flex items-center gap-1"
                            >
                              <Copy className="w-3 h-3" />
                              Copy Lesson Link
                            </button>
                            {lesson.quizEnabled !== false && (
                              <button
                                onClick={() => copyToClipboard(`/quiz?id=${lesson.id}`, 'Quiz')}
                                className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 transition flex items-center gap-1"
                              >
                                <Copy className="w-3 h-3" />
                                Copy Quiz Link
                              </button>
                            )}
                          </div>
                        </div>
                      ) : (
                        <button
                          disabled
                          className="w-full py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 text-xs font-bold transition flex items-center justify-center gap-1 cursor-not-allowed select-none"
                        >
                          <Lock className="w-3.5 h-3.5 text-amber-500" />
                          Unit Locked
                        </button>
                      )}
                    </div>
                  </div>
                );

                if (isLargeBento) {
                  return (
                    <div 
                      key={lesson.id}
                      className="col-span-1 md:col-span-2 bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col md:flex-row gap-6 justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-indigo-500/25 hover:shadow-[0_15px_35px_rgba(79,70,229,0.04)] transition duration-300 relative group"
                    >
                      {/* Left contents */}
                      <div className="flex-1">
                        {cardContent}
                      </div>

                      {/* Right large image thumbnail */}
                      <div className="w-full md:w-[38%] shrink-0 h-48 md:h-auto relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                        <img
                          src={lesson.thumbnail || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'}
                          alt={lesson.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
                        />
                        {!isWeekActive && (
                          <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px] flex items-center justify-center gap-2 text-white font-bold text-xs">
                            <Lock className="w-4 h-4 text-amber-400" />
                            <span>LOCKED</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                {/* Standard grid bento cells */}
                return (
                  <div 
                    key={lesson.id}
                    className="col-span-1 bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-sky-500/25 hover:shadow-[0_15px_35px_rgba(56,189,248,0.04)] transition duration-300 group"
                  >
                    {/* Compact Thumbnail */}
                    <div className="w-full h-32 relative overflow-hidden rounded-xl bg-slate-50 mb-4 border border-slate-100">
                      <img
                        src={lesson.thumbnail}
                        alt={lesson.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="flex-grow">
                      {cardContent}
                    </div>
                  </div>
                );
              })}

            {/* Academic EdTech Metrics Bento Box (Injected to balance columns) */}
            <div className="col-span-1 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/15 hover:scale-[1.005] transition duration-300 relative overflow-hidden">
              {/* Decorative prism lines */}
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/5 blur-2xl pointer-events-none" />
              
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                  <GraduationCap className="w-5 h-5 text-sky-300" />
                </div>

                <h3 className="font-lexend text-base font-extrabold text-white leading-snug">
                  Learning metrics
                </h3>
                <p className="text-[11px] text-indigo-200 mt-1 font-medium leading-relaxed">
                  Overview of your active syllabus track. Start slides to submit logs.
                </p>

                {/* Progress bar */}
                <div className="mt-5">
                  <div className="flex justify-between text-[10px] font-bold text-indigo-150 mb-1.5 uppercase tracking-wide">
                    <span>Syllabus track</span>
                    <span>25% Complete</span>
                  </div>
                  <div className="w-full bg-indigo-800/60 h-1.5 rounded-full overflow-hidden border border-indigo-900/20">
                    <div className="bg-sky-400 h-full rounded-full w-1/4 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Dynamic state values */}
              <div className="border-t border-white/10 pt-4 mt-6 space-y-2 text-[10px] font-bold text-indigo-100 uppercase tracking-wider">
                <div className="flex justify-between">
                  <span>Registered Student:</span>
                  <span className="text-white truncate max-w-[120px]">{user ? user.name : 'Not Logged In'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Units Active:</span>
                  <span className="text-white">4 Syllabus Units</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {showAds && (
        <div className="w-full max-w-6xl mx-auto mt-4 border-t border-slate-200/80 pt-4 px-4">
          <HeaderAd />
        </div>
      )}

      {/* Bottom Footer signature */}
      <footer className="w-full max-w-6xl mx-auto text-center text-xs text-slate-400 font-semibold tracking-wide border-t border-slate-200/80 py-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>Developed by Luiese Amstrong • Lesson Library © 2026</span>
        <Link href="/privacy" className="hover:text-indigo-600 transition underline">
          Privacy Policy
        </Link>
      </footer>
    </main>
  );
}
