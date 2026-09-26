'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  ArrowLeft,
  GraduationCap,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  FileCode,
  ShieldCheck,
  Building
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'Course Curriculum Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

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

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Library</span>
            </Link>
            <Link
              href="/about/"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition shadow-sm"
            >
              About Platform
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10">
        <header className="text-center sm:text-left border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-2 font-mono flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            Academic Inquiries & Student Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Contact the Teaching & Editorial Team
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Have a question about a laboratory assignment, found an erratum in a code snippet, or want to suggest new slide topics? We are dedicated to providing responsive support to all learners and educators.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Info Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Building className="w-4 h-4 text-indigo-600" />
                <span>Editorial Office</span>
              </h3>
              <div className="text-xs text-slate-600 space-y-2">
                <p><strong>Platform:</strong> Lesson Library</p>
                <p><strong>Domain:</strong> <code>iamlesson.space</code></p>
                <p><strong>Primary Instructor:</strong> Luiese Armstrong</p>
                <p><strong>Academic Focus:</strong> Computer Science, Software Engineering, Interactive Media</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Response Timeframe</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Academic inquiries, assignment verification questions, and technical errata reports are typically addressed within <strong>24 to 48 hours</strong> during the active academic term.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-600" />
                <span>Direct Inboxes</span>
              </h3>
              <ul className="text-xs space-y-2 text-slate-600 font-mono">
                <li>
                  <span className="text-slate-400 block font-sans text-[10px] uppercase font-bold">General Support</span>
                  <a href="mailto:support@iamlesson.space" className="text-indigo-600 hover:underline">support@iamlesson.space</a>
                </li>
                <li>
                  <span className="text-slate-400 block font-sans text-[10px] uppercase font-bold">Curriculum & Errata</span>
                  <a href="mailto:instructor@iamlesson.space" className="text-indigo-600 hover:underline">instructor@iamlesson.space</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="md:col-span-2">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-1">Send an Academic Message</h2>
              <p className="text-xs text-slate-500 mb-6 font-medium">
                Fill out the form below to submit inquiries directly to the curriculum registry.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-emerald-900 text-base">Message Transmitted Successfully!</h3>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <strong>{form.name}</strong>. Your message regarding <em>{form.subject}</em> has been logged in the curriculum feedback queue. Our teaching staff will review your note shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', subject: 'Course Curriculum Inquiry', message: '' });
                    }}
                    className="mt-2 text-xs font-bold text-emerald-800 underline hover:no-underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Maria Santos"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. maria@student.edu"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subject / Topic Category
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition bg-white"
                    >
                      <option>Course Curriculum Inquiry</option>
                      <option>Godot 4 Lab Manual Feedback</option>
                      <option>Laravel 11 Migration Question</option>
                      <option>Report Code Erratum or Bug</option>
                      <option>Suggest a New Computer Science Topic</option>
                      <option>General Academic Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Detailed Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please describe your question, code snippet issue, or suggested improvement in detail..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Information submitted is strictly used to reply to your inquiry.
                    </span>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
