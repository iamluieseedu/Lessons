'use client';

import React from 'react';
import Link from 'next/link';
import { SlideData } from '@/types/slide';
import { 
  X, 
  GraduationCap, 
  MessageSquare, 
  Cpu, 
  Lightbulb, 
  CheckCircle2, 
  ExternalLink, 
  BookOpen, 
  Target,
  Sparkles,
  FileCode
} from 'lucide-react';

interface TeacherScriptDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
  currentIndex: number;
  totalSlides: number;
  lessonId: string;
}

export const TeacherScriptDrawer: React.FC<TeacherScriptDrawerProps> = ({
  isOpen,
  onClose,
  slide,
  currentIndex,
  totalSlides,
  lessonId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md sm:max-w-lg md:max-w-xl bg-white shadow-2xl border-l border-slate-200 flex flex-col justify-between overflow-hidden">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-rose-900 via-slate-900 to-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-rose-300 uppercase tracking-wider font-bold">
                  Teacher Lecture Script
                </span>
                <h3 className="font-lexend text-base font-bold text-white flex items-center gap-2">
                  Slide {currentIndex + 1} of {totalSlides}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={`/teacher/?id=${lessonId}`}
                target="_blank"
                className="text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-1.5 transition shadow-sm"
                title="Open Full 50-Slide Lecture Guide in New Tab"
              >
                <span>Full Guide</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body: Slide-by-slide Guided Script */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-grow space-y-4 text-xs text-slate-700 select-text">
            
            {/* Slide Title Banner */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-1">
                <span>{slide.moduleTag || 'Core Module'}</span>
                <span className="font-bold text-rose-600">Slide #{currentIndex + 1}</span>
              </div>
              <h4 className="font-lexend text-base font-bold text-slate-900">{slide.title}</h4>
              {slide.topicTitle && (
                <p className="text-slate-600 font-medium mt-0.5">{slide.topicTitle}</p>
              )}
            </div>

            {/* Cue 1: What to Say / How to Introduce */}
            {slide.whatItDoes && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200/80 shadow-sm space-y-1.5">
                <div className="flex items-center gap-1.5 text-rose-800 font-bold uppercase tracking-wider text-[11px] font-lexend">
                  <Target className="w-4 h-4 text-rose-600" />
                  <span>1. How to Introduce This Topic (What It Does)</span>
                </div>
                <p className="text-slate-800 leading-relaxed font-medium bg-white/70 p-2.5 rounded-lg border border-rose-100">
                  "{slide.whatItDoes}"
                </p>
                <span className="text-[10px] text-rose-700 italic block">
                  💡 <strong>Tip for teacher:</strong> State this clearly before diving into code or syntax.
                </span>
              </div>
            )}

            {/* Cue 2: What Is Going On Under The Hood */}
            {slide.whatIsGoingOn && (
              <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200/80 shadow-sm space-y-1.5">
                <div className="flex items-center gap-1.5 text-indigo-900 font-bold uppercase tracking-wider text-[11px] font-lexend">
                  <Cpu className="w-4 h-4 text-indigo-600" />
                  <span>2. Technical Deep-Dive (Under The Hood)</span>
                </div>
                <p className="text-slate-800 leading-relaxed font-medium bg-white/70 p-2.5 rounded-lg border border-indigo-100">
                  {slide.whatIsGoingOn}
                </p>
                <span className="text-[10px] text-indigo-700 italic block">
                  💡 <strong>Whiteboard Cue:</strong> Draw the flow or point out how Laravel manages this behind the scenes.
                </span>
              </div>
            )}

            {/* Cue 3: Interactive Classroom Discussion Pattern */}
            {slide.discussionPrompt && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 shadow-sm space-y-2.5">
                <div className="flex items-center gap-1.5 text-emerald-900 font-bold uppercase tracking-wider text-[11px] font-lexend">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>3. Classroom Discussion Pattern (Ask Students)</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-xs space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block">Question to Ask:</span>
                  <p className="text-slate-900 font-bold text-xs leading-relaxed">
                    "{slide.discussionPrompt.question}"
                  </p>
                </div>

                {slide.discussionPrompt.hint && (
                  <div className="bg-emerald-100/50 p-2 rounded-lg text-[11px] text-emerald-900 border border-emerald-200/60">
                    💡 <strong>Clue to Give If Stuck:</strong> {slide.discussionPrompt.hint}
                  </div>
                )}

                {slide.discussionPrompt.talkingPoints && slide.discussionPrompt.talkingPoints.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Teacher Talking Points & Key Answers:
                    </span>
                    <div className="space-y-1.5">
                      {slide.discussionPrompt.talkingPoints.map((tp, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-emerald-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 leading-snug">{tp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Cue 4: Layman Analogy */}
            {slide.layman && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs">
                <div className="flex items-center gap-1.5 text-amber-900 font-bold mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>Real-World Analogy to Share:</span>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">{slide.layman.text}</p>
              </div>
            )}

            {/* Cue 5: Key Takeaway */}
            {slide.keyInsight && (
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs">
                <div className="flex items-center gap-1.5 text-slate-800 font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Key Architectural Takeaway:</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{slide.keyInsight.text}</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono shrink-0">
            <span>Hidden from student screen</span>
            <Link
              href={`/teacher/?id=${lessonId}`}
              target="_blank"
              className="text-rose-600 hover:text-rose-800 font-bold flex items-center gap-1"
            >
              <span>View All 50 Slide Scripts</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
