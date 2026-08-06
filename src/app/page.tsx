'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { slidesData } from '@/data/slidesData';
import { SlideViewer } from '@/components/SlideViewer';
import { NavigationControls } from '@/components/NavigationControls';
import { ThumbnailDrawer } from '@/components/ThumbnailDrawer';
import { KeyboardHelpModal } from '@/components/KeyboardHelpModal';
import { QuizView } from '@/components/QuizView';
import { Film, Sparkles, BookOpen, Award } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'lesson' | 'quiz'>('lesson');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const totalSlides = slidesData.length;
  const currentSlide = slidesData[currentIndex];

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

  // Keyboard navigation - only active when viewing the lesson
  useEffect(() => {
    if (activeTab !== 'lesson') return;

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
  }, [activeTab, handleNext, handlePrev, toggleFullscreen, isDrawerOpen, isHelpOpen]);

  // Auto-play timer - only active when viewing the lesson
  useEffect(() => {
    if (activeTab !== 'lesson') {
      setIsPlaying(false);
      return;
    }

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
  }, [isPlaying, totalSlides, activeTab]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between py-4">
      {/* Top Application Header */}
      <header className="w-full max-w-6xl mx-auto px-4 mb-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between print:hidden">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 text-white shadow-md">
            <Film className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-lexend text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
              Video Editing Course
              <span className="text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 font-semibold border border-sky-500/20">
                VIDEODIT
              </span>
            </h1>
            <p className="text-xs text-slate-500 font-medium">Week 1: Introduction to Video Editing</p>
          </div>
        </div>

        {/* Tab Selection Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/60 border border-slate-300/30 shadow-sm self-stretch sm:self-auto">
          <button
            onClick={() => setActiveTab('lesson')}
            className={`flex-grow sm:flex-grow-0 flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition ${
              activeTab === 'lesson'
                ? 'bg-white text-sky-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Lecture Slides
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex-grow sm:flex-grow-0 flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition ${
              activeTab === 'quiz'
                ? 'bg-white text-sky-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Interactive Quiz
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center py-2 px-4">
        {activeTab === 'lesson' ? (
          <SlideViewer slide={currentSlide} />
        ) : (
          <QuizView />
        )}
      </div>

      {/* Control Bar & Progress (Only show for Lecture Tab) */}
      {activeTab === 'lesson' && (
        <div className="print:hidden">
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
        </div>
      )}

      {/* Slide Selection Drawer */}
      <ThumbnailDrawer
        isOpen={isDrawerOpen}
        slides={slidesData}
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
      <footer className="w-full max-w-6xl mx-auto px-4 mt-4 text-center text-xs text-slate-500 font-semibold tracking-wide print:hidden">
        Developed by Luiese Amstrong
      </footer>
    </main>
  );
}
