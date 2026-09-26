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
  X,
  Sparkles,
  Layers,
  Folder,
  FolderOpen,
  FileText,
  CheckCircle2,
  ListOrdered,
  LayoutGrid,
  ChevronRight,
  Play,
  ArrowRight,
  MonitorPlay,
  FileCode,
  Calendar
} from 'lucide-react';
import { AdSidebar } from '@/components/AdSidebar';
import { CONFIG } from '@/config';
import { HeaderAd } from '@/components/HeaderAd';

import { Lesson, DEFAULT_LESSONS } from '@/data/lessons';
import { CourseTask, DEFAULT_TASKS } from '@/data/tasks';

const LogoIcon = () => (
  <div className="relative flex items-center justify-center">
    <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" fill="url(#logo-prism-bg)" />
      <path d="M50 15V85" stroke="white" strokeWidth="2.5" strokeOpacity="0.3" />
      <path d="M15 35L50 50L85 35" stroke="white" strokeWidth="2.5" strokeOpacity="0.3" />
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

// Course Folder Definitions
interface CourseFolderDef {
  id: string;
  code: string;
  title: string;
  courseTrack: string;
  description: string;
  level: string;
  badgeColor: string;
  gradient: string;
  glow: string;
  borderAccent: string;
  filter: (lesson: Lesson) => boolean;
}

const COURSE_FOLDERS: CourseFolderDef[] = [
  {
    id: 'webdev3',
    code: 'IT-WD3',
    title: 'Web Dev 3: Laravel Framework',
    courseTrack: 'Full-Stack Web Engineering',
    description: 'Complete university curriculum covering Laravel 11 MVC architecture, routing, middleware, controllers, Eloquent ORM, form validation, Sanctum APIs, automated testing, and cloud deployment.',
    level: 'Advanced Web Track',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    gradient: 'from-indigo-600 via-purple-600 to-rose-600',
    glow: 'shadow-indigo-500/10',
    borderAccent: 'border-indigo-200 hover:border-indigo-400',
    filter: (l) => l.course === 'Web Dev 3' || l.id.startsWith('webdev3-') || l.id === 'laravel11'
  },
  {
    id: 'mediadsn',
    code: 'IT-MD1',
    title: 'Interactive Media Design & UI/UX',
    courseTrack: 'Interactive Digital Systems',
    description: 'Deconstructing human-computer interaction loops, cognitive user models, Norman\'s interactivity principles, UI visual hierarchy, 8pt grids, color theory, WCAG contrast accessibility, and UX journey mapping.',
    level: 'Interaction & UI/UX Track',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
    gradient: 'from-purple-600 to-pink-600',
    glow: 'shadow-purple-500/10',
    borderAccent: 'border-purple-200 hover:border-purple-400',
    filter: (l) => l.id.startsWith('mediadsn') || l.course === 'Interactive Media Design' || l.course === 'Multimedia Design'
  },
  {
    id: 'webdev1',
    code: 'IT-WD1',
    title: 'Web Development 1: Foundations',
    courseTrack: 'Frontend Foundations',
    description: 'Core foundations of the World Wide Web, HTTP client-server pipelines, semantic HTML5 document structures, CSS Box Model rules, and responsive design systems.',
    level: 'Foundations Track',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200/80',
    gradient: 'from-sky-500 to-blue-600',
    glow: 'shadow-sky-500/10',
    borderAccent: 'border-sky-200 hover:border-sky-400',
    filter: (l) => l.id === 'webdev1' || l.course === 'Web Development 1'
  },
  {
    id: 'database',
    code: 'IT-DB1',
    title: 'Fundamentals of Database Systems',
    courseTrack: 'Database & Data Modeling',
    description: 'Relational data modeling, SQL queries and JOINs, normalization (1NF-3NF), ACID transactions, data integrity constraints, and query optimization.',
    level: 'Database Systems Track',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
    gradient: 'from-cyan-600 to-blue-600',
    glow: 'shadow-cyan-500/10',
    borderAccent: 'border-cyan-200 hover:border-cyan-400',
    filter: (l) => l.id === 'database1' || l.course === 'Fundamentals of Database' || l.course === 'Database Systems'
  },
  {
    id: 'cpp',
    code: 'CS-CPP1',
    title: 'C++ Systems & OOP Programming',
    courseTrack: 'Low-Level Computer Science',
    description: 'High-performance systems programming, memory allocation, pointers, references, object-oriented encapsulation, and standard template library paradigms.',
    level: 'Systems Track',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    gradient: 'from-emerald-600 to-teal-600',
    glow: 'shadow-emerald-500/10',
    borderAccent: 'border-emerald-200 hover:border-emerald-400',
    filter: (l) => l.id === 'cpp1' || l.course === 'C++ Programming'
  },
  {
    id: 'video',
    code: 'DMA-VID1',
    title: 'Digital Video Production & Editing',
    courseTrack: 'Digital Media Arts',
    description: 'Foundations of non-linear video editing, narrative pacing, A-Roll/B-Roll sequencing, timeline mechanics, and visual continuity principles.',
    level: 'Digital Media Track',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/80',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'shadow-amber-500/10',
    borderAccent: 'border-amber-200 hover:border-amber-400',
    filter: (l) => l.id === 'week1' || l.course === 'Digital Video Production' || l.course === 'Video Editing'
  },
  {
    id: 'eventprog',
    code: 'IT-EDP1',
    title: 'Event-Driven Programming',
    courseTrack: 'Game Engine & Event Systems',
    description: 'Event-driven architecture, node trees, input propagation pipelines, signal-slot mechanics, state machines, and 2D mobile game development using Godot Engine 4.',
    level: 'Game Development Track',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200/80',
    gradient: 'from-teal-600 via-emerald-600 to-cyan-600',
    glow: 'shadow-teal-500/10',
    borderAccent: 'border-teal-200 hover:border-teal-400',
    filter: (l) => l.course === 'Event-Driven Programming' || l.course === 'Event Programming' || l.id.startsWith('eventprog') || l.id.startsWith('godot')
  }
];

export default function Home() {
  const [lessons, setLessons] = useState<Lesson[]>(DEFAULT_LESSONS);
  const [tasks, setTasks] = useState<CourseTask[]>(DEFAULT_TASKS);
  const [openFolderId, setOpenFolderId] = useState<string>('webdev3'); // Default to Web Dev 3 folder
  const [viewMode, setViewMode] = useState<'cards' | 'tasks' | 'outline'>('cards'); // Cards vs Tasks vs Compiled Outline
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'week-asc' | 'week-desc' | 'title-asc'>('week-asc');
  const [toast, setToast] = useState<string | null>(null);
  const [baseUrl, setBaseUrl] = useState('');
  const [showAds, setShowAds] = useState(false);

  const [user, setUser] = useState<{ name: string; email: string; avatar?: string } | null>(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [googleClientId, setGoogleClientId] = useState('');
  const [sdkLoaded, setSdkLoaded] = useState(false);

  // Hydrate state from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      const isLocalhost = origin.includes('localhost') || origin.includes('127.0.0.1');
      const hasLessonsPath = !isLocalhost && window.location.pathname.startsWith('/Lessons');
      setBaseUrl(hasLessonsPath ? `${origin}/Lessons` : origin);

      const clientId = localStorage.getItem('vid_adsense_client_id') || CONFIG.adsenseClientId || '';
      const slotId = localStorage.getItem('vid_adsense_slot_id') || CONFIG.adsenseSlotId || '';
      setShowAds(clientId.trim() !== '' && slotId.trim() !== '');

      const storedUser = localStorage.getItem('vid_user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.warn("Failed to parse stored user:", e instanceof Error ? e.message : String(e));
        }
      }

      const stored = localStorage.getItem('vid_lessons');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            let updated = [...parsed];
            let hasChanges = false;

            DEFAULT_LESSONS.forEach((defLesson) => {
              const existingIdx = updated.findIndex((l) => l.id === defLesson.id);
              if (existingIdx === -1) {
                updated.push(defLesson);
                hasChanges = true;
              } else if (updated[existingIdx].course !== defLesson.course || !updated[existingIdx].competencies) {
                updated[existingIdx] = { 
                  ...defLesson, 
                  ...updated[existingIdx], 
                  course: defLesson.course, 
                  competencies: defLesson.competencies 
                };
                hasChanges = true;
              }
            });
            
            if (hasChanges) {
              updated.sort((a, b) => a.week - b.week);
              localStorage.setItem('vid_lessons', JSON.stringify(updated));
            }
            setLessons(updated);
          }
        } catch (err) {
          console.warn("Failed to parse vid_lessons:", err instanceof Error ? err.message : String(err));
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
    setToast(`Copied ${label} link to clipboard!`);
    setTimeout(() => setToast(null), 2500);
  };

  // Load Google Identity Services SDK script
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedClientId = localStorage.getItem('vid_google_client_id') || CONFIG.googleClientId;
      setGoogleClientId(storedClientId);

      if ((window as any).google?.accounts?.id) {
        setSdkLoaded(true);
        return;
      }

      const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
      if (existingScript) {
        if ((window as any).google?.accounts?.id) {
          setSdkLoaded(true);
        } else {
          existingScript.addEventListener('load', () => setSdkLoaded(true));
        }
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => setSdkLoaded(true);
      script.onerror = () => {
        // Silently catch network or adblock errors
      };
      document.body.appendChild(script);
    }
  }, []);

  // Render official Google Sign-In button
  useEffect(() => {
    if (googleClientId && sdkLoaded && !user && typeof window !== 'undefined' && (window as any).google?.accounts?.id) {
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

                const webhookUrl = localStorage.getItem('vid_webhook_url') || CONFIG.webhookUrl;
                if (webhookUrl) {
                  const loginLog = {
                    quizTitle: "Login Sessions Log",
                    name: payload.name,
                    email: payload.email,
                    section: "Library Portal Login",
                    score: 1,
                    total: 1,
                    percent: 100,
                    date: new Date().toLocaleString()
                  };
                  fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(loginLog)
                  }).catch(e => console.warn("Failed to log user sign in:", e instanceof Error ? e.message : String(e)));
                }
              } catch (err) {
                console.warn("JWT Decode warning:", err instanceof Error ? err.message : String(err));
                setToast("Google auth error, please try again.");
                setTimeout(() => setToast(null), 2500);
              }
            }
          });

          const btnParent = document.getElementById('google-signin-btn-container');
          if (btnParent) {
            btnParent.innerHTML = '';
            (window as any).google.accounts.id.renderButton(
              btnParent,
              { theme: 'outline', size: 'medium', shape: 'pill', text: 'signin_with', width: 220 }
            );
          }
        } catch (e) {
          console.warn("Notice rendering Google button:", e instanceof Error ? e.message : String(e));
        }
      };

      const timer = setTimeout(initializeAndRender, 150);
      return () => clearTimeout(timer);
    }
  }, [googleClientId, sdkLoaded, user]);

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem('vid_user');
    setUserDropdownOpen(false);
    setToast("Signed out successfully.");
    setTimeout(() => setToast(null), 2500);
  };

  // Active folder details
  const isAllFolders = openFolderId === 'all';
  const activeFolder = COURSE_FOLDERS.find((f) => f.id === openFolderId) || COURSE_FOLDERS[0];
  const activeLessons = isAllFolders ? lessons : lessons.filter(activeFolder.filter);

  // Filter tasks based on active folder & search query
  const activeTasks = isAllFolders 
    ? tasks 
    : tasks.filter((t) => t.courseFolderId === openFolderId);

  const currentFolderTasks = activeTasks;
  const currentFolderActiveTasks = currentFolderTasks.filter((t) => t.status === 'active');

  const displayedTasks = activeTasks.filter((task) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      task.title.toLowerCase().includes(q) ||
      task.description.toLowerCase().includes(q) ||
      task.badge.toLowerCase().includes(q) ||
      task.phaseTag.toLowerCase().includes(q) ||
      task.techStack.some((tech) => tech.toLowerCase().includes(q)) ||
      task.objectives.some((obj) => obj.toLowerCase().includes(q))
    );
  });

  // Filter & sort lessons for display
  const displayedLessons = activeLessons
    .filter((lesson) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        lesson.title.toLowerCase().includes(q) ||
        lesson.description.toLowerCase().includes(q) ||
        lesson.competencies?.some((c) => c.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => {
      if (sortBy === 'week-asc') return a.week - b.week;
      if (sortBy === 'week-desc') return b.week - a.week;
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-slate-700 animate-slide-up">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Top Application Header */}
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo & Portal Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <LogoIcon />
            <div className="flex flex-col">
              <span className="font-lexend text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition flex items-center gap-1.5">
                LESSON LIBRARY
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200/60 hidden sm:inline">
                  CATALOG BINDER
                </span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                Interactive Learning Portal & Curriculum Engine
              </span>
            </div>
          </Link>

          {/* Right Header Navigation & User Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/courses/"
              className="text-xs font-bold text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              <span>Courses</span>
            </Link>
            <Link
              href="/about/"
              className="text-xs font-bold text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition hidden md:flex items-center gap-1.5"
            >
              <span>About</span>
            </Link>
            <Link
              href="/admin"
              className="text-xs font-bold text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              <span className="hidden sm:inline">Instructor Studio</span>
            </Link>

            {user && (
              <div className="relative">
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

                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-slate-200 shadow-xl rounded-xl p-2 z-50 text-left animate-fade-in">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1.5">
                      <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wide">Logged in as</p>
                      <p className="text-xs font-bold text-slate-800 truncate">{user.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-rose-600 hover:bg-rose-50 text-xs font-bold transition"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            <div 
              id="google-signin-btn-container" 
              className={user ? "hidden" : "h-9 min-w-[200px] flex items-center justify-end"}
            />
          </div>
        </div>
      </header>

      {/* Main Catalog Viewport */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-grow flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Main Content Area */}
        <section className={`flex-grow w-full ${showAds ? 'lg:max-w-[72%]' : 'lg:max-w-full'}`}>
          
          {/* Educational Welcome & Quick Links Hero Banner */}
          <div className="mb-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-sm border border-indigo-900/50 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-bold border border-indigo-400/30">
                  <Sparkles className="w-3 h-3 text-indigo-300" />
                  <span>Higher Education Computing Portal</span>
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight font-lexend">
                  Computer Science Curricula, Interactive Decks &amp; Lab Manuals
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Structured semester materials curated for students and educators. Explore comprehensive course syllabi, visual lecture slides, and step-by-step laboratory projects in Web Development, Godot Game Systems, and Databases.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <Link
                  href="/courses/"
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm font-lexend"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Browse Syllabi</span>
                </Link>
                <Link
                  href="/godot/"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700 font-lexend"
                >
                  <FileCode className="w-3.5 h-3.5 text-sky-400" />
                  <span>Godot 4 Lab</span>
                </Link>
                <Link
                  href="/laravel/"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700 font-lexend"
                >
                  <FileCode className="w-3.5 h-3.5 text-rose-400" />
                  <span>Laravel Lab</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Balanced Course Folder Navigation Bar */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <Folder className="w-4 h-4 text-indigo-600" />
                <h3 className="font-lexend text-xs font-black uppercase tracking-wider text-slate-500">
                  Course Folders ({COURSE_FOLDERS.length})
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                Filter by academic folder or browse all
              </span>
            </div>

            {/* Clean Grid of Course Folder Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {/* All Folders Option */}
              <button
                onClick={() => {
                  setOpenFolderId('all');
                  setSearchQuery('');
                }}
                className={`p-3 rounded-2xl border text-left transition-all duration-200 relative group flex flex-col justify-between cursor-pointer select-none ${
                  openFolderId === 'all'
                    ? 'bg-white border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-350 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <FolderOpen className={`w-4 h-4 ${openFolderId === 'all' ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    openFolderId === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    ALL
                  </span>
                </div>
                <div>
                  <h4 className={`text-xs font-bold leading-tight font-lexend ${openFolderId === 'all' ? 'text-indigo-950 font-black' : 'text-slate-800'}`}>
                    All Folders
                  </h4>
                  <p className="text-[10px] font-semibold text-slate-400 mt-0.5 truncate">
                    Complete Catalog
                  </p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-500">
                  <div className="flex items-center gap-1.5 truncate">
                    <span>{lessons.length} Lessons</span>
                    {tasks.filter(t => t.status === 'active').length > 0 && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-rose-50 text-rose-600 border border-rose-200/60 font-black">
                        {tasks.filter(t => t.status === 'active').length} {tasks.filter(t => t.status === 'active').length === 1 ? 'Task' : 'Tasks'}
                      </span>
                    )}
                  </div>
                  {openFolderId === 'all' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />}
                </div>
              </button>

              {/* Course Folders */}
              {COURSE_FOLDERS.map((folder) => {
                const isOpen = folder.id === openFolderId;
                const folderLessonCount = lessons.filter(folder.filter).length;
                const folderActiveTasksCount = tasks.filter((t) => t.courseFolderId === folder.id && t.status === 'active').length;

                return (
                  <button
                    key={folder.id}
                    onClick={() => {
                      setOpenFolderId(folder.id);
                      setSearchQuery('');
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 relative group flex flex-col justify-between cursor-pointer select-none ${
                      isOpen
                        ? 'bg-white border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                        : 'bg-white/80 border-slate-200 hover:border-slate-350 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1.5">
                      {isOpen ? (
                        <FolderOpen className="w-4 h-4 text-indigo-600" />
                      ) : (
                        <Folder className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition" />
                      )}
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isOpen ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {folder.code}
                      </span>
                    </div>

                    <div>
                      <h4 className={`text-xs font-bold leading-tight line-clamp-1 font-lexend ${
                        isOpen ? 'text-indigo-950 font-black' : 'text-slate-800'
                      }`}>
                        {folder.title.replace('Web Dev 3: ', '').replace('Web Development 1: ', '').replace('Fundamentals of ', '')}
                      </h4>
                      <p className="text-[10px] font-semibold text-slate-400 mt-0.5 truncate">
                        {folder.courseTrack}
                      </p>
                    </div>

                    <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-500">
                      <div className="flex items-center gap-1.5 truncate">
                        <span>{folderLessonCount} {folderLessonCount === 1 ? 'Lesson' : 'Lessons'}</span>
                        {folderActiveTasksCount > 0 && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-rose-50 text-rose-600 border border-rose-200/60 font-black">
                            {folderActiveTasksCount} {folderActiveTasksCount === 1 ? 'Task' : 'Tasks'}
                          </span>
                        )}
                      </div>
                      {isOpen && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean Action & Filter Toolbar */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 sm:p-3 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* View Mode Tabs (Cards, Tasks, Roadmap) */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80 select-none w-full sm:w-auto">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer select-none ${
                  viewMode === 'cards'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Lecture Deck Cards"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Cards</span>
              </button>

              <button
                onClick={() => setViewMode('tasks')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer select-none ${
                  viewMode === 'tasks'
                    ? 'bg-white text-rose-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Laboratory Manuals & Tasks"
              >
                <FileCode className={`w-3.5 h-3.5 ${viewMode === 'tasks' ? 'text-rose-600' : 'text-slate-400'}`} />
                <span>Tasks</span>
                {currentFolderActiveTasks.length > 0 && (
                  <span className={`text-[9px] font-mono font-black px-1.5 py-0.2 rounded-full ${
                    viewMode === 'tasks' 
                      ? 'bg-rose-100 text-rose-700' 
                      : 'bg-rose-600 text-white'
                  }`}>
                    {currentFolderActiveTasks.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setViewMode('outline')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer select-none ${
                  viewMode === 'outline'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Syllabus Roadmap View"
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span>Roadmap</span>
              </button>
            </div>

            {/* Search & Sort Controls */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-60">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder={viewMode === 'tasks' ? "Search lab tasks..." : "Search lessons..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 font-medium placeholder-slate-400 focus:outline-none transition"
                />
              </div>

              {/* Sort (only on cards or outline) */}
              {viewMode !== 'tasks' && (
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl px-3 py-1.5 text-xs text-slate-700 font-bold focus:outline-none cursor-pointer transition shrink-0"
                >
                  <option value="week-asc">Week (1 → 16)</option>
                  <option value="week-desc">Week (16 → 1)</option>
                  <option value="title-asc">Title (A-Z)</option>
                </select>
              )}
            </div>
          </div>

          {/* VIEW MODE 1: PRESENTATION CARDS */}
          {viewMode === 'cards' && (
            <div className={`grid gap-6 ${showAds ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {displayedLessons.map((lesson: Lesson) => {
                const isWeekActive = lesson.isActive;

                const difficultyColor = 
                  lesson.difficulty === 'Beginner' ? 'bg-emerald-50 text-emerald-700 border-emerald-200/60' :
                  lesson.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-700 border-amber-200/60' :
                  'bg-purple-50 text-purple-700 border-purple-200/60';

                return (
                  <div 
                    key={lesson.id}
                    className="bg-white border border-slate-200/90 rounded-3xl p-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-indigo-500/40 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div>
                      {/* Compact Image Header with Presentation Overlay */}
                      <div className="w-full h-40 relative overflow-hidden rounded-2xl bg-slate-900 mb-4 border border-slate-100">
                        <img
                          src={lesson.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'}
                          alt={lesson.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 font-lexend truncate">
                            <MonitorPlay className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span>{lesson.course ? `${lesson.course} • ` : ''}Week {lesson.week} Deck</span>
                          </span>
                        </div>
                        {!isWeekActive && (
                          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center gap-2 text-white font-bold text-xs select-none">
                            <Lock className="w-4 h-4 text-amber-400" />
                            <span>COMING SOON</span>
                          </div>
                        )}
                      </div>

                      {/* Header Badges */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 font-mono">
                            Week {lesson.week}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${difficultyColor}`}>
                            {lesson.difficulty}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{lesson.duration}</span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-lexend text-base font-bold text-slate-900 group-hover:text-indigo-600 transition leading-snug line-clamp-1 mb-1.5">
                        {lesson.title}
                      </h3>
                      
                      <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2 mb-3">
                        {lesson.description}
                      </p>

                      {/* Competencies Checklist */}
                      {lesson.competencies && lesson.competencies.length > 0 && (
                        <div className="mb-4 bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/60 space-y-1">
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 block font-lexend">
                            Key Learning Competencies
                          </span>
                          {lesson.competencies.slice(0, 3).map((comp, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 font-medium leading-tight">
                              <Check className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{comp}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                      <div>
                        <Link
                          href={`/lesson/?id=${lesson.id}`}
                          className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/10 active:scale-[0.98] transition flex items-center justify-center gap-2 font-lexend"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Read</span>
                        </Link>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                        <span className="flex items-center gap-1 font-medium text-slate-400">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{lesson.duration}</span>
                        </span>

                        <button
                          onClick={() => copyToClipboard(`/lesson/?id=${lesson.id}`, lesson.title)}
                          className="hover:text-indigo-600 transition flex items-center gap-1 font-semibold cursor-pointer"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Copy Link</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* VIEW MODE 2: LABORATORY TASKS & MIGRATION MANUALS */}
          {viewMode === 'tasks' && (
            <div className="space-y-6">
              {/* Header Overview Banner for Tasks */}
              <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-rose-950/80 border border-slate-800 p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-60 h-60 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1">
                        <FileCode className="w-3 h-3" />
                        Practical Lab Tasks & Manuals
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {openFolderId === 'all' ? 'All Course Tracks' : activeFolder?.title}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-lexend tracking-tight text-white">
                      Hands-On Code Tasks & Migration Lab Manuals
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                      Interactive step-by-step programming tasks, architectural migrations, and graded deliverables built for practical mastery.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
                    <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block font-lexend">Active Graded</span>
                      <span className="text-lg font-black text-rose-400 font-mono">
                        {displayedTasks.filter(t => t.status === 'active').length}
                      </span>
                    </div>
                    <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block font-lexend">Total Guides</span>
                      <span className="text-lg font-black text-indigo-400 font-mono">
                        {displayedTasks.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tasks List */}
              {displayedTasks.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {displayedTasks.map((task) => {
                    const isActive = task.status === 'active';
                    const isGraded = task.type === 'Graded Lab Task';

                    return (
                      <div
                        key={task.id}
                        className={`bg-white border rounded-3xl p-6 shadow-sm transition-all duration-300 relative overflow-hidden group ${
                          isActive 
                            ? 'border-slate-200/90 hover:border-rose-400/60 hover:shadow-xl' 
                            : 'border-slate-200/60 bg-slate-50/50 opacity-90'
                        }`}
                      >
                        {/* Top Accent line for graded task */}
                        {isActive && (
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-red-500 to-indigo-500" />
                        )}

                        <div className="flex flex-col gap-5">
                          {/* Badges & Meta Row */}
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-bold">
                                {task.badge}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 font-mono">
                                {task.phaseTag}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono ${
                                isGraded 
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                                  : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                              }`}>
                                {task.type}
                              </span>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                                {task.weekAlignment}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                              <div className="flex items-center gap-1 font-mono text-[11px] bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <span>{task.duration}</span>
                              </div>
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200/80">
                                {task.difficulty}
                              </span>
                            </div>
                          </div>

                          {/* Title & Description */}
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="text-[11px] font-bold text-slate-400 font-mono uppercase tracking-wider">
                                {task.courseTitle}
                              </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-lexend tracking-tight group-hover:text-rose-600 transition">
                              {task.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-2">
                              {task.description}
                            </p>
                          </div>

                          {/* Objectives & Deliverables Container */}
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-1">
                            {/* Key Learning Objectives */}
                            <div className="lg:col-span-2 bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 space-y-2.5">
                              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-lexend">
                                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                                <span>Step-by-Step Lab Milestones & Learning Objectives</span>
                              </span>
                              <div className="space-y-2">
                                {task.objectives.map((obj, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                                    <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 font-mono font-black text-[9px] flex items-center justify-center shrink-0 mt-0.5">
                                      {idx + 1}
                                    </span>
                                    <span>{obj}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tech Stack & Submission Requirements */}
                            <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 flex flex-col justify-between gap-3">
                              <div>
                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-2 font-lexend">
                                  Framework & Tooling Stack
                                </span>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                  {task.techStack.map((tech, idx) => (
                                    <span key={idx} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                                      {tech}
                                    </span>
                                  ))}
                                </div>

                                {task.deliverables && task.deliverables.length > 0 && (
                                  <div>
                                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1.5 font-lexend">
                                      Expected Deliverables
                                    </span>
                                    <ul className="space-y-1">
                                      {task.deliverables.map((deliv, idx) => (
                                        <li key={idx} className="text-[11px] text-slate-600 font-medium flex items-center gap-1.5">
                                          <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                                          <span className="truncate">{deliv}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                                <span>Format: Interactive Web Manual</span>
                                <span className="text-rose-600 font-bold">Self-Paced / Graded</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Footer */}
                          <div className="pt-3 border-t border-slate-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                              <a
                                href={task.launchUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-lexend font-bold text-xs shadow-lg shadow-rose-600/25 active:scale-95 transition flex items-center justify-center gap-2"
                              >
                                <FileCode className="w-4 h-4" />
                                <span>{task.actionText || 'Launch Lab Manual'}</span>
                                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                              </a>

                              <button
                                onClick={() => copyToClipboard(task.launchUrl, task.title)}
                                className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 font-lexend font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                                title="Copy shareable link"
                              >
                                <Copy className="w-4 h-4 text-slate-500" />
                                <span>Copy Link</span>
                              </button>
                            </div>

                            <div className="flex items-center gap-3 text-xs text-slate-400">
                              <a
                                href="/laravel/lab_manual_part_2_multi_page_migration.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-rose-600 transition underline font-medium text-[11px]"
                              >
                                Direct HTML Standalone File
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Empty state when the active folder has no tasks */
                <div className="bg-white border border-slate-200/80 rounded-3xl p-10 sm:p-12 text-center shadow-sm max-w-2xl mx-auto">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center mx-auto mb-4">
                    <FileCode className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-lexend mb-1">
                    No Lab Tasks Configured For {activeFolder?.title || 'This Folder'}
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                    Hands-on lab manuals and migration exercises are currently published under the <strong className="text-slate-800">Laravel Framework</strong> course.
                  </p>
                  <button
                    onClick={() => {
                      setOpenFolderId('webdev3');
                      setViewMode('tasks');
                    }}
                    className="py-2.5 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-lexend font-bold text-xs shadow-md transition inline-flex items-center gap-2 cursor-pointer"
                  >
                    <FolderOpen className="w-4 h-4" />
                    <span>View Laravel Framework Tasks</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* VIEW MODE 3: COMPILED SYLLABUS ROADMAP TABLE */}
          {viewMode === 'outline' && (
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between font-lexend">
                <div className="flex items-center gap-2">
                  <ListOrdered className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {openFolderId === 'all' ? 'All Course Lessons' : activeFolder.title} • Compiled Syllabus Roadmap
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  {displayedLessons.length} Modules Sequenced
                </span>
              </div>

              <div className="divide-y divide-slate-100 overflow-x-auto">
                {displayedLessons.map((lesson) => (
                  <div 
                    key={lesson.id} 
                    className="p-4 sm:p-5 hover:bg-slate-50/80 transition flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5 max-w-2xl">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 flex flex-col items-center justify-center shrink-0 font-lexend">
                        <span className="text-[9px] uppercase font-bold text-slate-400">WK</span>
                        <strong className="text-base font-black leading-none">{lesson.week}</strong>
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900 font-lexend">
                            {lesson.title}
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.2 rounded-md bg-slate-100 text-slate-600 font-mono">
                            {lesson.duration}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.2 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                            {lesson.difficulty}
                          </span>
                        </div>

                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          {lesson.description}
                        </p>

                        {/* Learning Competencies */}
                        {lesson.competencies && (
                          <div className="pt-1 flex flex-wrap gap-1.5">
                            {lesson.competencies.map((comp, idx) => (
                              <span key={idx} className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/60 flex items-center gap-1 font-medium">
                                <Check className="w-2.5 h-2.5 text-emerald-500" />
                                {comp}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Direct Quick Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
                      <Link
                        href={`/lesson/?id=${lesson.id}`}
                        className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5 font-lexend"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read</span>
                      </Link>

                      <button
                        onClick={() => copyToClipboard(`/lesson/?id=${lesson.id}`, lesson.title)}
                        className="px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 text-xs font-bold transition flex items-center gap-1 font-lexend cursor-pointer"
                        title="Copy direct link"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Right Sidebar Ad (if enabled) */}
        {showAds && (
          <div className="w-full lg:w-[28%] shrink-0 lg:sticky lg:top-20 bg-white border border-slate-200/80 p-4 rounded-3xl shadow-sm z-10">
            <AdSidebar slotName="Homepage Sidebar Ad" />
          </div>
        )}
      </div>

      {showAds && (
        <div className="w-full max-w-7xl mx-auto mt-4 border-t border-slate-200/80 pt-4 px-4">
          <HeaderAd />
        </div>
      )}

      {/* Comprehensive Academic Footer */}
      <footer className="w-full max-w-7xl mx-auto border-t border-slate-200/80 mt-16 pt-12 pb-10 px-4 sm:px-6 text-slate-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-xs">
          {/* Column 1: About the Platform */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                <GraduationCap className="w-4 h-4" />
              </span>
              <span className="font-extrabold text-sm text-slate-900 font-lexend tracking-tight">Lesson Library</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-[11.5px]">
              Open-access university computing curricula, interactive visual slide decks, hands-on lab manuals, and self-assessment engines for students and educators.
            </p>
            <p className="text-[11px] text-slate-400 font-mono">iamlesson.space &bull; Higher Education Portal</p>
          </div>

          {/* Column 2: Academic Curricula */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">Academic Courses</h4>
            <ul className="space-y-1.5 text-[11.5px] text-slate-500">
              <li><Link href="/courses/event-driven-programming/" className="hover:text-indigo-600 transition">IT-EDP1: Event-Driven Programming</Link></li>
              <li><Link href="/courses/laravel-framework/" className="hover:text-indigo-600 transition">IT-WD3: Laravel 11 Framework</Link></li>
              <li><Link href="/courses/interactive-media-design/" className="hover:text-indigo-600 transition">IT-MD1: Interactive Media Design</Link></li>
              <li><Link href="/courses/database-systems/" className="hover:text-indigo-600 transition">IT-DB1: Database Management Systems</Link></li>
              <li><Link href="/courses/cpp-programming/" className="hover:text-indigo-600 transition">CS-CPP1: Object-Oriented C++</Link></li>
              <li><Link href="/courses/web-development-fundamentals/" className="hover:text-indigo-600 transition">IT-WD1: Web Development 1</Link></li>
            </ul>
          </div>

          {/* Column 3: Practical Lab Manuals */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">Practical Lab Manuals</h4>
            <ul className="space-y-1.5 text-[11.5px] text-slate-500">
              <li><Link href="/godot/" className="hover:text-sky-600 transition font-medium">&bull; Godot 4 2D Mobile Game Lab</Link></li>
              <li><Link href="/laravel/" className="hover:text-rose-600 transition font-medium">&bull; Laravel 11 Multi-Page Migration Lab</Link></li>
              <li><Link href="/courses/" className="hover:text-indigo-600 transition font-medium">&bull; View All Course Syllabi &rarr;</Link></li>
            </ul>
          </div>

          {/* Column 4: Institutional Trust & Legal */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">Trust &amp; Transparency</h4>
            <ul className="space-y-1.5 text-[11.5px] text-slate-500">
              <li><Link href="/about/" className="hover:text-indigo-600 transition">About the Platform &amp; Educator</Link></li>
              <li><Link href="/contact/" className="hover:text-indigo-600 transition">Contact &amp; Student Inquiries</Link></li>
              <li><Link href="/privacy/" className="hover:text-indigo-600 transition">Privacy &amp; Cookie Policy (AdSense)</Link></li>
              <li><Link href="/terms/" className="hover:text-indigo-600 transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <span>Curated by Luiese Armstrong &bull; Lesson Library &copy; 2026 &bull; All Rights Reserved</span>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/about/" className="hover:text-slate-600 transition">About</Link>
            <Link href="/contact/" className="hover:text-slate-600 transition">Contact</Link>
            <Link href="/privacy/" className="hover:text-slate-600 transition">Privacy</Link>
            <Link href="/terms/" className="hover:text-slate-600 transition">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
