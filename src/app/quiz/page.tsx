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
  quizEnabled?: boolean;
}

function QuizPageContent() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [customQuestions, setCustomQuestions] = useState<any[]>([]);

  // Load lesson dynamically
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let lessonsList: Lesson[] = [];
      try {
        const stored = localStorage.getItem('vid_lessons');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            lessonsList = parsed;
          }
        }
      } catch (err) {
        console.error("Failed to parse vid_lessons in quiz:", err);
      }
      const found = lessonsList.find((l) => l.id === lessonId);
      
      setLesson(found || null);

      if (found) {
        if (found.id === 'mediadsn1') {
          setCustomQuestions([
            {
              question: "What is the primary factor that distinguishes interactive media from traditional static media?",
              options: [
                "The inclusion of high-resolution digital color photographs.",
                "The bidirectionality of information flow and user agency over system state.",
                "The speed at which the server renders stylesheet layouts.",
                "The capacity to print page layouts to paper."
              ],
              answer: 1,
              explanation: "Interactive media establishes a dynamic conversation loop between user and system, unlike static one-way broadcasting."
            },
            {
              question: "According to the human-computer interaction cycle, what is the correct sequence of stages in the Interaction Loop?",
              options: [
                "Action Execution → System Processing → Output Display → Feedback → Goal Formulation",
                "Goal Formulation → Action Execution → System Processing → Output Display → Evaluation & Feedback",
                "Evaluation & Feedback → System Processing → Goal Formulation → Action Execution → Output Display",
                "Input Action → Output Display → System Processing → Goal Formulation → Feedback Evaluation"
              ],
              answer: 1,
              explanation: "Users formulate a Goal, execute an Action Input, which the System processes, displaying Output, which provides Feedback for Evaluation."
            },
            {
              question: "Which component of an interactive media system is best defined as the digital or physical membrane where communication occurs?",
              options: [
                "The User",
                "The Interface",
                "The System",
                "The Output"
              ],
              answer: 1,
              explanation: "The Interface (screen, buttons, speakers) serves as the membrane connecting the human user with computational systems."
            },
            {
              question: "What was a major limitation of early text-based Command-Line Interfaces (CLIs) compared to Graphical User Interfaces (GUIs)?",
              options: [
                "CLIs had no keyboard input channels available.",
                "CLIs required users to memorize exact text commands (recall over recognition).",
                "CLIs processed requests slower than graphical grids.",
                "CLIs could not open document files."
              ],
              answer: 1,
              explanation: "CLIs forced users to recall exact command syntax, whereas GUIs leverage visual menus and recognition."
            },
            {
              question: "What visual design term describes the properties of a digital element that suggest how it can be operated?",
              options: [
                "Affordance",
                "Signifier",
                "Feedback",
                "Visual Hierarchy"
              ],
              answer: 0,
              explanation: "An affordance is the property of an object suggesting its utility (e.g., a button affords clicking)."
            },
            {
              question: "A blue highlighted focus border appearing around a text box during keyboard navigation represents which design principle?",
              options: [
                "Cognitive mapping",
                "Discoverability and signifiers for accessibility",
                "Action error validation",
                "Visual distraction reduction"
              ],
              answer: 1,
              explanation: "Focus borders act as signifiers showing which element is active, enabling keyboard accessibility and discoverability."
            },
            {
              question: "Why is immediate visual or haptic feedback critical on user action triggers?",
              options: [
                "It increases the CPU processing speed of servers.",
                "It acknowledges the action and reduces user uncertainty or double-submission actions.",
                "It disables screen transition overlays.",
                "It forces users to restart loops."
              ],
              answer: 1,
              explanation: "Feedback confirms the system recognized the input and is computing, preventing user anxiety and duplicate actions."
            },
            {
              question: "When a student clicks 'Submit Form' in an enrollment app, what is the most appropriate UI feedback design sequence?",
              options: [
                "Clear form immediately with no confirmation messages.",
                "Disable button → render loading spinner → display Success banner.",
                "Disable screen output channels.",
                "Open developer console logs."
              ],
              answer: 1,
              explanation: "This sequence acknowledges intent, shows active processing, and confirms successful resolution."
            },
            {
              question: "What is the primary objective of the User-Centered Design (UCD) process?",
              options: [
                "Optimizing server script compilation speed.",
                "Designing digital interfaces around the needs, limitations, and behaviors of end users.",
                "Enforcing strict security token rules.",
                "Maximizing the counts of visual icons on screen."
              ],
              answer: 1,
              explanation: "UCD focuses on studying, designing, and testing systems to align with human mental models and capabilities."
            },
            {
              question: "In a public campus maps kiosk, what represents the OUTPUT component of the interactive media framework?",
              options: [
                "Freshmen students tapping screens.",
                "The touchscreen glass detects tap coordinate variables.",
                "The screen renders path lines and highlights showing directions.",
                "A self-resetting idle timer checks inactivity."
              ],
              answer: 2,
              explanation: "Output is the visual display returned by the system (the maps drawing), closing the communication loop."
            }
          ]);
        } else if (found.id !== 'week1') {
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
    }
  }, [lessonId]);

  // If lesson is not found, not active, or quiz is disabled
  if (!lesson || !lesson.isActive || lesson.quizEnabled === false) {
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
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-slate-900" />
          <h1 className="font-lexend text-base md:text-lg font-semibold text-slate-800">
            {lesson.title} • Quiz Assessment
          </h1>
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
