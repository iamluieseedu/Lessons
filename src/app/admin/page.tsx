'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CONFIG } from '@/config';
import { 
  Lock, 
  Settings, 
  Trash2, 
  Download, 
  LogOut, 
  UserCheck, 
  Award, 
  ArrowLeft,
  Check,
  ChevronRight,
  Database,
  Users,
  Plus,
  BookOpen
} from 'lucide-react';

import { Lesson, DEFAULT_LESSONS } from '@/data/lessons';

const LogoIcon = () => (
  <div className="relative flex items-center justify-center select-none">
    <svg className="w-8 h-8 hover:scale-105 transition duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Abstract Isometric Cube Pages */}
      <path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" fill="url(#logo-prism-bg)" />
      {/* Interlocking internal line ribbons */}
      <path d="M50 15V85" stroke="white" strokeWidth="2.5" strokeOpacity="0.3" />
      <path d="M15 35L50 50L85 35" stroke="white" strokeWidth="2.5" strokeOpacity="0.3" />
      {/* Glowing orbital academic core nodes */}
      <circle cx="50" cy="50" r="7" fill="#ffffff" stroke="#818cf8" strokeWidth="2" className="animate-pulse" />
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

const ADMIN_HASH = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9'; // SHA-256 for admin123

export default function AdminPage() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [googleClientId, setGoogleClientId] = useState('');
  const [allowedDomain, setAllowedDomain] = useState('');
  const [adsenseClientId, setAdsenseClientId] = useState('');
  const [adsenseSlotId, setAdsenseSlotId] = useState('');
  const [studentScores, setStudentScores] = useState<any[]>([]);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [isLoadingScores, setIsLoadingScores] = useState(false);

  // Lesson Management states
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [newWeek, setNewWeek] = useState(2);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newDuration, setNewDuration] = useState('20 mins');
  const [newSlidesCount, setNewSlidesCount] = useState(10);
  const [newDifficulty, setNewDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');
  const [newThumbnail, setNewThumbnail] = useState('');
  const [newIsActive, setNewIsActive] = useState(true);
  const [newQuizEnabled, setNewQuizEnabled] = useState(true);
  const [lessonAddStatus, setLessonAddStatus] = useState<string | null>(null);

  // Hydrate client-side state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let storedScores = [];
      try {
        storedScores = JSON.parse(localStorage.getItem('vid_student_scores') || '[]');
      } catch (err) {
        console.error("Failed to parse student scores:", err);
      }
      setStudentScores(storedScores);
      
      const storedWebhook = localStorage.getItem('vid_webhook_url') || CONFIG.webhookUrl;
      setWebhookUrl(storedWebhook);
      const storedGoogleClientId = localStorage.getItem('vid_google_client_id') || CONFIG.googleClientId;
      setGoogleClientId(storedGoogleClientId);
      const storedAllowedDomain = localStorage.getItem('vid_google_allowed_domain') || CONFIG.allowedDomain;
      setAllowedDomain(storedAllowedDomain);
      const storedAdsenseClientId = localStorage.getItem('vid_adsense_client_id') || CONFIG.adsenseClientId || '';
      setAdsenseClientId(storedAdsenseClientId);
      const storedAdsenseSlotId = localStorage.getItem('vid_adsense_slot_id') || CONFIG.adsenseSlotId || '';
      setAdsenseSlotId(storedAdsenseSlotId);

      const storedLessons = localStorage.getItem('vid_lessons');
      if (storedLessons) {
        try {
          const parsed = JSON.parse(storedLessons);
          if (!Array.isArray(parsed)) {
            throw new Error("Stored lessons is not an array");
          }
          let updated = [...parsed];
          let hasChanges = false;

          DEFAULT_LESSONS.forEach((defLesson) => {
            if (!updated.some((l: any) => l.id === defLesson.id)) {
              updated.push(defLesson);
              hasChanges = true;
            }
          });

          if (hasChanges) {
            updated.sort((a: any, b: any) => a.week - b.week);
            localStorage.setItem('vid_lessons', JSON.stringify(updated));
          }
          setLessons(updated);
        } catch (err) {
          console.error("Failed to parse vid_lessons in admin:", err);
          localStorage.setItem('vid_lessons', JSON.stringify(DEFAULT_LESSONS));
          setLessons(DEFAULT_LESSONS);
        }
      } else {
        localStorage.setItem('vid_lessons', JSON.stringify(DEFAULT_LESSONS));
        setLessons(DEFAULT_LESSONS);
      }

      if (sessionStorage.getItem('vid_admin_auth') === 'true') {
        setIsAuthorized(true);
      }
    }
  }, []);

  // Fetch real-time student scores from Google Sheets Webhook
  useEffect(() => {
    if (isAuthorized && webhookUrl.trim()) {
      const fetchScores = async () => {
        setIsLoadingScores(true);
        try {
          const response = await fetch(webhookUrl);
          if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data)) {
              setStudentScores(data);
              localStorage.setItem('vid_student_scores', JSON.stringify(data));
            }
          }
        } catch (err) {
          console.error("Error loading online grades from Google Sheets:", err);
          let storedScores = [];
          try {
            storedScores = JSON.parse(localStorage.getItem('vid_student_scores') || '[]');
          } catch (e) {
            console.error("Failed parsing student scores in catch:", e);
          }
          setStudentScores(storedScores);
        } finally {
          setIsLoadingScores(false);
        }
      };
      fetchScores();
    }
  }, [isAuthorized, webhookUrl]);

  const hashPassword = async (pwd: string): Promise<string> => {
    if (typeof window !== 'undefined' && (!window.crypto || !window.crypto.subtle)) {
      // Fallback for insecure HTTP contexts (where browsers disable window.crypto.subtle)
      if (pwd === 'admin123') {
        return '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9';
      }
      return 'insecure_context_invalid_password';
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(pwd);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const hash = await hashPassword(password);
      if (hash === ADMIN_HASH) {
        setIsAuthorized(true);
        sessionStorage.setItem('vid_admin_auth', 'true');
        setPassword('');
      } else {
        setLoginError('Invalid Administrator Password. Access Denied.');
      }
    } catch (err) {
      console.error(err);
      setLoginError('Cryptography error during verification.');
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    sessionStorage.removeItem('vid_admin_auth');
  };

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus(null);
    if (typeof window !== 'undefined') {
      localStorage.setItem('vid_webhook_url', webhookUrl.trim());
      localStorage.setItem('vid_google_client_id', googleClientId.trim());
      localStorage.setItem('vid_google_allowed_domain', allowedDomain.trim());
      localStorage.setItem('vid_adsense_client_id', adsenseClientId.trim());
      localStorage.setItem('vid_adsense_slot_id', adsenseSlotId.trim());
      setSaveStatus('Configuration Saved Successfully!');
      setTimeout(() => setSaveStatus(null), 2500);
    }
  };

  const handleAddLesson = (e: React.FormEvent) => {
    e.preventDefault();
    setLessonAddStatus(null);

    if (!newTitle.trim() || !newDesc.trim()) {
      alert('Please fill out the lesson title and description.');
      return;
    }

    const newLesson: Lesson = {
      id: `lesson_${Date.now()}`,
      week: Number(newWeek),
      title: newTitle.trim(),
      description: newDesc.trim(),
      duration: newDuration.trim(),
      slidesCount: Number(newSlidesCount),
      difficulty: newDifficulty,
      thumbnail: newThumbnail.trim() || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      isActive: newIsActive,
      quizEnabled: newQuizEnabled
    };

    const updated = [...lessons, newLesson].sort((a, b) => a.week - b.week);
    if (typeof window !== 'undefined') {
      localStorage.setItem('vid_lessons', JSON.stringify(updated));
    }
    setLessons(updated);

    // Reset Form Fields
    setNewWeek(updated.length + 1);
    setNewTitle('');
    setNewDesc('');
    setNewDuration('20 mins');
    setNewSlidesCount(10);
    setNewDifficulty('Beginner');
    setNewThumbnail('');
    setNewIsActive(true);
    setNewQuizEnabled(true);

    setLessonAddStatus('Lesson Uploaded Successfully!');
    setTimeout(() => setLessonAddStatus(null), 2500);
  };

  const handleDeleteLesson = (id: string, title: string) => {
    if (id === 'week1' || id === 'laravel11') {
      alert(`The core lesson "${title}" is protected and cannot be deleted.`);
      return;
    }

    if (confirm(`Are you sure you want to permanently delete the lesson "${title}"?`)) {
      const updated = lessons.filter(l => l.id !== id);
      if (typeof window !== 'undefined') {
        localStorage.setItem('vid_lessons', JSON.stringify(updated));
      }
      setLessons(updated);
    }
  };

  const handleToggleQuiz = (id: string) => {
    const updated = lessons.map(l => {
      if (l.id === id) {
        return { ...l, quizEnabled: l.quizEnabled === false ? true : false };
      }
      return l;
    });
    if (typeof window !== 'undefined') {
      localStorage.setItem('vid_lessons', JSON.stringify(updated));
    }
    setLessons(updated);
  };

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to clear student quiz grade history from your local browser cache? To permanently delete student records, please edit or clear rows directly inside your Google Sheet.')) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('vid_student_scores');
        setStudentScores([]);
      }
    }
  };

  const handleExportCSV = () => {
    if (studentScores.length === 0) return;
    
    // Header
    const csvContent = [
      ['Student Name', 'Email Address', 'Class Section', 'Quiz Module', 'Score', 'Total Questions', 'Percentage', 'Date Completed'],
      ...studentScores.map(s => [s.name, s.email || 'N/A', s.section || 'N/A', s.quizTitle || 'Week 1 Quiz', s.score, s.total, `${s.percent}%`, s.date])
    ]
      .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `student_scores_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Analytics helpers
  const totalSubmissions = studentScores.length;
  const passingScores = studentScores.filter(s => s.percent >= 60).length;
  const passRate = totalSubmissions > 0 ? Math.round((passingScores / totalSubmissions) * 100) : 0;
  const avgPercent = totalSubmissions > 0 
    ? Math.round(studentScores.reduce((sum, s) => sum + s.percent, 0) / totalSubmissions) 
    : 0;

  // Unauthorised (Login) Screen
  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="mb-4 flex justify-center">
              <LogoIcon />
            </div>
            <h2 className="font-lexend text-xl font-extrabold text-slate-900">Teacher Login Portal</h2>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Protected Administrator screen. Enter credentials to manage course configuration and view student grades.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Administrator Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition"
              />
            </div>

            {loginError && (
              <p className="text-[11px] font-semibold text-rose-600 text-center bg-rose-500/10 border border-rose-500/25 py-2 rounded-lg">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 sm:py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              Verify Credentials
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>

          {/* Cancel button */}
          <div className="mt-4 pt-4 border-t border-slate-150 text-center">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-500 hover:text-sky-655 transition inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Cancel & Return to Library
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Authorised (Dashboard) Screen
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-6 px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* Dashboard Header */}
        <header className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3">
            <LogoIcon />
            <div>
              <h1 className="font-lexend text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
                Teacher Administration Portal
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 font-bold border border-emerald-500/20 uppercase tracking-wider">
                  Admin Active
                </span>
              </h1>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Configure target webhooks, manage lessons, and view student quiz submissions.</p>
            </div>
          </div>

          <div className="flex gap-2.5">
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold transition shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Exit to Library
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-md"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </header>

        {/* Analytics Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Total Quiz Attempts</span>
              <h3 className="font-lexend text-2xl font-black text-slate-900 mt-0.5">{totalSubmissions}</h3>
            </div>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Avg Passing Rate</span>
              <h3 className="font-lexend text-2xl font-black text-slate-900 mt-0.5">{passRate}%</h3>
            </div>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-xl bg-rose-500/10 text-rose-600">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Average Score</span>
              <h3 className="font-lexend text-2xl font-black text-slate-900 mt-0.5">{avgPercent}%</h3>
            </div>
          </div>
        </section>

        {/* Lesson Upload & Management Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Add Lesson Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
              <Plus className="w-4 h-4 text-sky-600" />
              <h3 className="font-lexend text-sm font-bold text-slate-800">Upload New Lesson Module</h3>
            </div>

            <form onSubmit={handleAddLesson} className="space-y-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Week Number</label>
                <input
                  type="number"
                  min="1"
                  value={newWeek}
                  onChange={(e) => setNewWeek(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Lesson Title</label>
                <input
                  type="text"
                  placeholder="e.g. Advanced Transitions"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Description</label>
                <textarea
                  placeholder="Summarize the core week topics..."
                  rows={2}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 20 mins"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Slides Count</label>
                  <input
                    type="number"
                    min="1"
                    value={newSlidesCount}
                    onChange={(e) => setNewSlidesCount(Number(e.target.value))}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Thumbnail URL (Optional)</label>
                <input
                  type="text"
                  placeholder="Paste Unsplash URL or leave empty..."
                  value={newThumbnail}
                  onChange={(e) => setNewThumbnail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={newIsActive}
                  onChange={(e) => setNewIsActive(e.target.checked)}
                  className="rounded border-slate-200 text-sky-600 focus:ring-sky-500 cursor-pointer"
                />
                <label htmlFor="isActive" className="text-xs font-bold text-slate-700 cursor-pointer">Make Lesson Immediately Active</label>
              </div>

              <div className="flex items-center gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="quizEnabled"
                  checked={newQuizEnabled}
                  onChange={(e) => setNewQuizEnabled(e.target.checked)}
                  className="rounded border-slate-200 text-sky-600 focus:ring-sky-500 cursor-pointer"
                />
                <label htmlFor="quizEnabled" className="text-xs font-bold text-slate-700 cursor-pointer">Enable Assessment Quiz</label>
              </div>

              {lessonAddStatus && (
                <p className="text-[11px] font-semibold text-emerald-600 text-center bg-emerald-500/10 border border-emerald-500/25 py-1.5 rounded-lg flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  {lessonAddStatus}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-xl text-xs shadow-sm transition"
              >
                Upload Lesson Card
              </button>
            </form>
          </div>

          {/* Catalog / Lesson list (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between self-stretch">
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <BookOpen className="w-4 h-4 text-sky-600" />
                <h3 className="font-lexend text-sm font-bold text-slate-800">Lesson Catalog ({lessons.length} Modules)</h3>
              </div>

              <div className="overflow-y-auto max-h-[360px] pr-1 space-y-2">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="p-3 border border-slate-200 rounded-xl bg-slate-50/50 flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">W{lesson.week}</span>
                      <div>
                        <h4 className="font-semibold text-xs text-slate-950">{lesson.title}</h4>
                        <p className="text-[10px] text-slate-500">{lesson.slidesCount} slides • {lesson.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2.5">
                      {/* Quiz toggle status */}
                      <button
                        onClick={() => handleToggleQuiz(lesson.id)}
                        className={`px-2 py-0.5 rounded border text-[8px] font-bold uppercase tracking-wider transition ${
                          lesson.quizEnabled !== false
                            ? 'bg-sky-500/10 text-sky-700 border-sky-500/20 hover:bg-sky-500/20'
                            : 'bg-slate-200 text-slate-500 border-slate-300 hover:bg-slate-300/50'
                        }`}
                        title="Click to toggle quiz active status"
                      >
                        {lesson.quizEnabled !== false ? 'Quiz On' : 'Quiz Off'}
                      </button>

                      <span className={`px-2 py-0.5 rounded-full font-bold text-[8px] uppercase tracking-wider border ${
                        lesson.isActive 
                          ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' 
                          : 'bg-amber-500/10 text-amber-700 border-amber-500/20'
                      }`}>
                        {lesson.isActive ? 'Active' : 'Locked'}
                      </span>
                      <button
                        onClick={() => handleDeleteLesson(lesson.id, lesson.title)}
                        className={`p-1.5 rounded-lg border hover:bg-rose-50 border-slate-200 hover:border-rose-200 text-slate-400 hover:text-rose-600 transition ${
                          lesson.id === 'week1' ? 'opacity-30 cursor-not-allowed' : ''
                        }`}
                        title={(lesson.id === 'week1' || lesson.id === 'laravel11') ? 'Protected Unit' : 'Delete Lesson'}
                        disabled={lesson.id === 'week1' || lesson.id === 'laravel11'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lower row: webhook configure & grade log */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Webhook target configuration (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
              <Database className="w-4 h-4 text-sky-655" />
              <h3 className="font-lexend text-sm font-bold text-slate-800">Webhook Connection</h3>
            </div>

            <form onSubmit={handleSaveWebhook} className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-semibold">
                  Google Sheets Deployment URL
                </label>
                <input
                  type="text"
                  placeholder="https://script.google.com/macros/s/.../exec"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-semibold">
                  Google Cloud Client ID
                </label>
                <input
                  type="text"
                  placeholder="123456789-abc.apps.googleusercontent.com"
                  value={googleClientId}
                  onChange={(e) => setGoogleClientId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-semibold">
                  Allowed Email Domain (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. @school.edu.ph"
                  value={allowedDomain}
                  onChange={(e) => setAllowedDomain(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex flex-col gap-1 border-t border-slate-100 pt-3 mt-3">
                <label className="text-[10px] font-bold text-sky-600 uppercase tracking-wider font-bold">
                  Google AdSense Publisher/Client ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. ca-pub-1234567890123456"
                  value={adsenseClientId}
                  onChange={(e) => setAdsenseClientId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-sky-600 uppercase tracking-wider font-bold">
                  Google AdSense Ad Slot ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1234567890"
                  value={adsenseSlotId}
                  onChange={(e) => setAdsenseSlotId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              {saveStatus && (
                <p className="text-[11px] font-semibold text-emerald-600 text-center bg-emerald-500/10 border border-emerald-500/25 py-1.5 rounded-lg flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  {saveStatus}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 rounded-xl text-xs shadow-sm transition"
              >
                Save Settings
              </button>
            </form>

            <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] text-slate-500 leading-relaxed space-y-1">
              <strong className="text-slate-800 block mb-0.5">How it works:</strong>
              <p>Scores are posted dynamically to this web app execution script when a student finishes the quiz. Syncs directly to your linked spreadsheet.</p>
            </div>

            {/* Deploy Code Block generator */}
            <div className="mt-5 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2 border-b border-slate-100 pb-2">
                <Database className="w-4 h-4 text-indigo-650" />
                <h3 className="font-lexend text-xs font-bold text-slate-800">Deploy Changes Globally</h3>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed mb-3">
                To save syllabus edits (like toggling quizzes, adding lessons, or locking/unlocking items) permanently for all students:
              </p>
              
              <ol className="list-decimal list-inside text-[9px] text-slate-600 mb-4 space-y-1 leading-normal font-semibold">
                <li>Make your changes above (e.g. toggle quizzes).</li>
                <li>Click <strong>Copy Syllabus Code</strong> below.</li>
                <li>Paste it inside <code className="bg-slate-100 text-indigo-650 px-1 rounded">src/data/lessons.ts</code> to replace everything, then commit/deploy!</li>
              </ol>

              <button
                onClick={() => {
                  const headerText = `export interface Lesson {
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

export const DEFAULT_LESSONS: Lesson[] = `;
                  const bodyText = JSON.stringify(lessons, null, 2);
                  navigator.clipboard.writeText(headerText + bodyText + ';\n');
                  alert("Syllabus Code copied! Now paste it inside src/data/lessons.ts and save.");
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-xl text-xs shadow-sm transition flex items-center justify-center gap-1 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Copy Syllabus Code
              </button>
            </div>
          </div>

          {/* Local Student Attempt logs (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-center mb-4 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-655" />
                <h3 className="font-lexend text-sm font-bold text-slate-800">Student Assessment Attempts</h3>
                {isLoadingScores && (
                  <span className="text-[10px] text-sky-600 font-semibold animate-pulse bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    Syncing Sheet...
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleExportCSV}
                  disabled={studentScores.length === 0}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white text-slate-600 text-[10px] font-bold transition shadow-sm"
                  title="Download scores database as Excel-compatible CSV file"
                >
                  <Download className="w-3 h-3" />
                  Export CSV
                </button>
                <button
                  onClick={handleClearHistory}
                  disabled={studentScores.length === 0}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-rose-200 bg-rose-500/[0.03] hover:bg-rose-500/10 disabled:opacity-40 disabled:hover:bg-rose-500/[0.03] text-rose-700 text-[10px] font-bold transition shadow-sm"
                  title="Clear grade records from local cache"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear Grades
                </button>
              </div>
            </div>

            {/* Score Logs Grid view */}
            {studentScores.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-2.5 px-3">Student Name</th>
                      <th className="py-2.5 px-3">Email Address</th>
                      <th className="py-2.5 px-3">Class Section</th>
                      <th className="py-2.5 px-3">Quiz Module</th>
                      <th className="py-2.5 px-3">Completion Date</th>
                      <th className="py-2.5 px-3 text-center">Score Ratio</th>
                      <th className="py-2.5 px-3 text-right">Percentage</th>
                      <th className="py-2.5 px-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {studentScores.map((scoreRecord, index) => {
                      const passed = scoreRecord.percent >= 60;
                      return (
                        <tr key={index} className="hover:bg-slate-50/50">
                          <td className="py-2 px-3 text-slate-900 font-semibold">{scoreRecord.name}</td>
                          <td className="py-2 px-3 text-slate-500">{scoreRecord.email || 'N/A'}</td>
                          <td className="py-2 px-3 text-slate-500">{scoreRecord.section || 'N/A'}</td>
                          <td className="py-2 px-3 text-slate-500 font-semibold text-[10px] text-sky-700">{scoreRecord.quizTitle || 'Week 1 Quiz'}</td>
                          <td className="py-2 px-3 text-slate-500">{scoreRecord.date}</td>
                          <td className="py-2 px-3 text-center text-slate-800">{scoreRecord.score} / {scoreRecord.total}</td>
                          <td className="py-2 px-3 text-right text-slate-900 font-bold">{scoreRecord.percent}%</td>
                          <td className="py-2 px-3 text-center">
                            <span className={`px-2 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wide border ${
                              passed 
                                ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' 
                                : 'bg-rose-500/10 text-rose-700 border-rose-500/20'
                            }`}>
                              {passed ? 'Pass' : 'Fail'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 flex flex-col items-center justify-center gap-2">
                <Database className="w-8 h-8 opacity-40 text-slate-500" />
                <span className="text-xs font-bold text-slate-500">No Assessment Records Stored</span>
                <p className="text-[10px] text-slate-400 max-w-xs leading-relaxed">
                  Student quiz scores will populate this grid automatically once they complete the assessment.
                </p>
              </div>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}
