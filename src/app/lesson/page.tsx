'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { slidesData } from '@/data/slidesData';
import { laravelSlidesData } from '@/data/laravelSlidesData';
import { mediaDsnSlidesData } from '@/data/mediaDsnSlidesData';
import { webdevSlidesData } from '@/data/webdevSlidesData';
import { SlideViewer } from '@/components/SlideViewer';
import { NavigationControls } from '@/components/NavigationControls';
import { ThumbnailDrawer } from '@/components/ThumbnailDrawer';
import { KeyboardHelpModal } from '@/components/KeyboardHelpModal';
import { Film, ArrowLeft, Lock, BookOpen } from 'lucide-react';
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

function SlidePageContent() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [slides, setSlides] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAds, setShowAds] = useState(false);

  // Load lesson and slides dynamically
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const clientId = localStorage.getItem('vid_adsense_client_id') || CONFIG.adsenseClientId || '';
      const slotId = localStorage.getItem('vid_adsense_slot_id') || CONFIG.adsenseSlotId || '';
      setShowAds(clientId.trim() !== '' && slotId.trim() !== '');

      let lessonsList: Lesson[] = DEFAULT_LESSONS;
      try {
        const stored = localStorage.getItem('vid_lessons');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            lessonsList = parsed;
          }
        }
      } catch (err) {
        console.error("Failed to parse vid_lessons:", err);
      }
      let found = lessonsList.find((l) => l.id === lessonId);
      
      if (!found) {
        found = DEFAULT_LESSONS.find((l) => l.id === lessonId);
      }
      
      setLesson(found || null);

      if (found) {
        if (found.id === 'week1') {
          setSlides(slidesData);
        } else if (found.id === 'laravel11') {
          setSlides(laravelSlidesData);
        } else if (found.id === 'mediadsn1') {
          setSlides(mediaDsnSlidesData);
        } else if (found.id === 'webdev1') {
          setSlides(webdevSlidesData);
        } else {
          // Dynamic slide deck for custom uploaded lessons
          setSlides([
            {
              id: 'slide1',
              slideNum: 1,
              totalSlides: 4,
              type: 'cover',
              moduleTag: `Week ${found.week} Slide Outline`,
              title: found.title,
              subtitle: found.description,
              metadata: [
                { label: 'Difficulty', val: found.difficulty },
                { label: 'Slide Deck', val: '4 Slides' },
                { label: 'Assessment', val: 'Includes Quiz' }
              ]
            },
            {
              id: 'slide2',
              slideNum: 2,
              totalSlides: 4,
              type: 'single_topic',
              moduleTag: 'Core Concepts',
              title: 'Weekly Learning Objectives',
              topicTitle: 'Key Objectives & Goals',
              bullets: [
                'Understand and conceptualize the foundational models discussed in this lesson.',
                'Examine standard workflows, techniques, and common pitfalls.',
                'Validate your baseline capabilities using the interactive self-assessment quiz.'
              ],
              layman: {
                title: 'Simple Analogy:',
                text: `Learning ${found.title} is just like constructing a skyscraper. We must secure a solid foundation of core concepts before building complex details.`
              }
            },
            {
              id: 'slide3',
              slideNum: 3,
              totalSlides: 4,
              type: 'single_topic',
              moduleTag: 'Summary Topic',
              title: found.title,
              topicTitle: 'Core Material Synthesis',
              bullets: [
                found.description,
                'Follow along with syllabus exercises and checklists provided by your teacher.',
                'When ready, navigate back to the main homepage library and launch the quiz.'
              ],
              keyInsight: {
                title: 'Crucial Takeaway',
                text: 'Repetition reinforces understanding. Read through these slides twice to master terms and prepare for the quiz certificate!'
              }
            },
            {
              id: 'slide4',
              slideNum: 4,
              totalSlides: 4,
              type: 'section_break',
              sectionNum: 'Quiz Prep',
              title: 'Outline Finished!',
              description: `You have completed the slide outline for ${found.title}. Return to the Lesson Library and select 'Take Quiz' to verify your score!`
            }
          ]);
        }
      }
    }
  }, [lessonId]);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setIsPlaying(false);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!lesson) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isDrawerOpen || isHelpOpen) {
        if (e.key === 'Escape') {
          setIsDrawerOpen(false);
          setIsHelpOpen(false);
        }
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lesson, handleNext, handlePrev, toggleFullscreen, isDrawerOpen, isHelpOpen]);

  // Auto-play timer
  useEffect(() => {
    if (!lesson) return;

    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= totalSlides - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalSlides, lesson]);

  // If lesson is not found or not active
  if (!lesson || !lesson.isActive) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 text-center">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
          <div className="p-3.5 rounded-full bg-amber-500/10 text-amber-600 w-fit mx-auto mb-4 border border-amber-500/20">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="font-lexend text-xl font-bold text-slate-900 mb-2">Lesson Unavailable</h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
            This lesson is locked or under construction. Check back later or ask your teacher for access.
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
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between py-4 px-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-start flex-grow">
        
        {/* Left main area (Slide Presentation) */}
        <div className={`flex-grow w-full ${showAds ? 'lg:max-w-[72%]' : 'lg:max-w-full'} flex flex-col h-full justify-between min-h-[85vh]`}>
          {/* Top Application Header */}
          <header className="w-full mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-slate-900" />
              <h1 className="font-lexend text-base md:text-lg font-semibold text-slate-800">
                {lesson.title} • Week {lesson.week}
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

          {/* Main Slide Viewer Frame */}
          <div className="flex-grow flex items-center justify-center py-2 min-h-[50vh]">
            {currentSlide && <SlideViewer slide={currentSlide} />}
          </div>

          {/* Control Bar & Progress */}
          <NavigationControls
            currentIndex={currentIndex}
            totalSlides={totalSlides}
            onPrev={handlePrev}
            onNext={handleNext}
            onReset={handleReset}
            onToggleDrawer={() => setIsDrawerOpen(true)}
            onToggleFullscreen={toggleFullscreen}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onOpenHelp={() => setIsHelpOpen(true)}
          />

          {/* Bottom Ad Banner */}
          <div className="mt-4 border-t border-slate-100 pt-2">
            <HeaderAd />
          </div>
        </div>

        {showAds && (
          /* Right Sidebar Ad (sticky) */
          <div className="w-full lg:w-[28%] shrink-0 lg:sticky lg:top-4 lg:mt-16">
            <AdSidebar slotName="Lesson Page Sidebar Ad" />
          </div>
        )}
      </div>

      {/* Slide Selection Drawer */}
      <ThumbnailDrawer
        isOpen={isDrawerOpen}
        slides={slides}
        currentIndex={currentIndex}
        onSelectSlide={(idx) => setCurrentIndex(idx)}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* Keyboard Help Modal */}
      <KeyboardHelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {/* Bottom Footer signature */}
      <footer className="w-full max-w-7xl mx-auto mt-6 text-center text-xs text-slate-400 font-semibold tracking-wide border-t border-slate-200 pt-4">
        Developed by Luiese Amstrong • Lesson Library © 2026
      </footer>
    </main>
  );
}

export default function LessonPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500 font-semibold text-xs">Loading lesson slides...</div>}>
      <SlidePageContent />
    </Suspense>
  );
}
