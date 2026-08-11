'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

const ADMIN_HASH = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9'; // SHA-256 for admin123

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

export default function AdminPage() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [studentScores, setStudentScores] = useState<any[]>([]);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

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
  const [lessonAddStatus, setLessonAddStatus] = useState<string | null>(null);

  // Hydrate client-side state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedScores = JSON.parse(localStorage.getItem('vid_student_scores') || '[]');
      setStudentScores(storedScores);
      
      const storedWebhook = localStorage.getItem('vid_webhook_url') || '';
      setWebhookUrl(storedWebhook);

      const storedLessons = localStorage.getItem('vid_lessons');
      if (storedLessons) {
        setLessons(JSON.parse(storedLessons));
      } else {
        localStorage.setItem('vid_lessons', JSON.stringify(DEFAULT_LESSONS));
        setLessons(DEFAULT_LESSONS);
      }

      if (sessionStorage.getItem('vid_admin_auth') === 'true') {
        setIsAuthorized(true);
      }
    }
  }, []);

  const hashPassword = async (pwd: string): Promise<string> => {
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
      isActive: newIsActive
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

    setLessonAddStatus('Lesson Uploaded Successfully!');
    setTimeout(() => setLessonAddStatus(null), 2500);
  };

  const handleDeleteLesson = (id: string, title: string) => {
    if (id === 'week1') {
      alert('The core lesson "Week 1: Introduction to Video Editing" is protected and cannot be deleted.');
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

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to permanently delete all student quiz grade history? This action cannot be undone.')) {
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
      ['Student Name', 'Email Address', 'Class Section', 'Score', 'Total Questions', 'Percentage', 'Date Completed'],
      ...studentScores.map(s => [s.name, s.email || 'N/A', s.section || 'N/A', s.score, s.total, `${s.percent}%`, s.date])
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
            <div className="p-3.5 rounded-full bg-slate-100 border border-slate-200 text-slate-750 w-fit mx-auto mb-3">
              <Lock className="w-6 h-6 text-slate-800" />
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
            <div className="p-2.5 rounded-2xl bg-slate-900 text-white shadow-md">
              <Settings className="w-5 h-5 animate-spin" />
            </div>
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
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Week Number</label>
                  <input
                    type="number"
                    min="1"
                    value={newWeek}
                    onChange={(e) => setNewWeek(Number(e.target.value))}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Difficulty</label>
                  <select
                    value={newDifficulty}
                    onChange={(e) => setNewDifficulty(e.target.value as any)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
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
                  className="rounded border-slate-200 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="isActive" className="text-xs font-bold text-slate-700">Make Lesson Immediately Active</label>
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
                        <p className="text-[10px] text-slate-500">{lesson.slidesCount} slides • {lesson.duration} • {lesson.difficulty}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
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
                        title={lesson.id === 'week1' ? 'Protected Unit' : 'Delete Lesson'}
                        disabled={lesson.id === 'week1'}
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
                Save Connection URL
              </button>
            </form>

            <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] text-slate-500 leading-relaxed space-y-1">
              <strong className="text-slate-800 block mb-0.5">How it works:</strong>
              <p>Scores are posted dynamically to this web app execution script when a student finishes the quiz. Syncs directly to your linked spreadsheet.</p>
            </div>
          </div>

          {/* Local Student Attempt logs (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-center mb-4 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-655" />
                <h3 className="font-lexend text-sm font-bold text-slate-800">Student Assessment Attempts</h3>
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
