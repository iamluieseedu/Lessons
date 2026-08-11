'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { QuizView } from '@/components/QuizView';
import { Film, ArrowLeft, Lock, BookOpen } from 'lucide-react';

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

function QuizPageContent() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [customQuestions, setCustomQuestions] = useState<any[]>([]);

  // Load lesson dynamically
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('vid_lessons');
      const lessonsList: Lesson[] = stored ? JSON.parse(stored) : [];
      const found = lessonsList.find((l) => l.id === lessonId);
      
      setLesson(found || null);

      if (found && found.id !== 'week1') {
        // Generate general questions for custom uploaded quizzes
        setCustomQuestions([
          {
            question: `What is the primary topic of the lesson "${found.title}"?`,
            options: [
              `Core principles and methods of ${found.title}`,
              "Random facts unrelated to the syllabus",
              "A study of unrelated historical timelines",
              "None of the options"
            ],
            answer: 0,
            explanation: `This lesson covers the core definitions, workflow patterns, and applications of ${found.title}.`
          },
          {
            question: "Which approach is most recommended for retaining information covered in class?",
            options: [
              "Reading notes once and ignoring quizzes",
              "Practicing active recall, taking reviews, and using self-assessments",
              "Cramming slides in the last minute",
              "Skimming through titles without reading descriptions"
            ],
            answer: 1,
            explanation: "Active recall and retrieval practice are scientifically proven to maximize knowledge retention."
          },
          {
            question: "What is the recommended action when a quiz question is answered incorrectly?",
            options: [
              "Skip it and ignore explanations",
              "Read the explanation carefully to understand the core concept and correct your mental model",
              "Complain that the system is broken",
              "Quit the assessment immediately"
            ],
            answer: 1,
            explanation: "Understanding the 'why' behind incorrect options helps resolve knowledge gaps."
          },
          {
            question: `Why is active application of "${found.title}" concepts critical for mastery?`,
            options: [
              "It turns theoretical knowledge into direct practical skill",
              "It allows you to skip final homework",
              "It is not critical at all",
              "It makes the slides load faster"
            ],
            answer: 0,
            explanation: "Applying concepts to hands-on exercises consolidates understanding and builds functional capability."
          },
          {
            question: "How should a student proceed after completing this weekly assessment module?",
            options: [
              "Forget the topics by next week",
              "Review the next module in the library sequence to build cumulative skills",
              "Attempt the quiz again to get a perfect score without studying",
              "Decline to download the completion certificate"
            ],
            answer: 1,
            explanation: "Syllabi are built sequentially. Reviewing upcoming units expands your cumulative competencies."
          }
        ]);
      }
    }
  }, [lessonId]);

  // If lesson is not found or not active
  if (!lesson || !lesson.isActive) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 text-center">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
          <div className="p-3.5 rounded-full bg-amber-500/10 text-amber-600 w-fit mx-auto mb-4 border border-amber-500/20">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="font-lexend text-xl font-bold text-slate-900 mb-2">Quiz Unavailable</h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
            The assessment quiz for this lesson is locked or under construction. Check back later or ask your teacher for access.
          </p>
          <Link
            href="/"
            className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
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
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-lexend text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
              {lesson.title}
              <span className="text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 font-semibold border border-sky-500/20">
                Quiz
              </span>
            </h1>
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
        {lesson.id === 'week1' ? (
          <QuizView />
        ) : (
          <QuizView questions={customQuestions} title={`${lesson.title} Quiz`} />
        )}
      </div>

      {/* Bottom Footer signature */}
      <footer className="w-full max-w-6xl mx-auto px-4 mt-4 text-center text-xs text-slate-400 font-semibold tracking-wide">
        Developed by Luiese Amstrong • Lesson Library © 2026
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
