'use client';

import React, { useState } from 'react';
import { SlideData } from '@/types/slide';
import { 
  GraduationCap, 
  Lightbulb, 
  Sparkles, 
  Target, 
  Video, 
  Image as ImageIcon, 
  Layers, 
  Film, 
  Tv, 
  Smartphone, 
  Award, 
  Clock, 
  Brain, 
  CheckCircle2
} from 'lucide-react';

interface SlideContentProps {
  slide: SlideData;
}

const ImageFrame: React.FC<{ url: string; caption: string }> = ({ url, caption }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="md:col-span-5 h-full min-h-[220px] max-h-[360px] flex flex-col">
      <div className="relative flex-grow rounded-t-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-sm min-h-[180px] flex items-center justify-center">
        {!hasError ? (
          <img
            src={url}
            alt={caption}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover absolute inset-0"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400 gap-2">
            <Film className="w-10 h-10 text-sky-500 opacity-60" />
            <span className="text-xs font-semibold text-slate-500">{caption}</span>
          </div>
        )}
      </div>
      <div className="bg-slate-50 text-slate-600 text-xs py-2.5 px-3 text-center border border-t-0 border-slate-250/80 flex items-center justify-center gap-1.5 rounded-b-lg flex-shrink-0">
        <ImageIcon className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
        <span className="truncate">{caption}</span>
      </div>
    </div>
  );
};

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  if (slide.type === 'cover') {
    return (
      <div className="h-full flex flex-col justify-center items-start p-8 md:p-14 relative z-10 text-slate-900">
        {slide.moduleTag && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-sm font-semibold mb-6 shadow-sm">
            <GraduationCap className="w-4 h-4 text-sky-600" />
            {slide.moduleTag}
          </div>
        )}
        <h1 className="font-lexend text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Introduction to <span className="text-sky-600 drop-shadow-sm">Video Editing</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10">
          {slide.subtitle}
        </p>

        {slide.metadata && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-200 w-full">
            {slide.metadata.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{item.label}</span>
                <span className="text-base font-semibold text-slate-800">{item.val}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (slide.type === 'section_break') {
    return (
      <div className="h-full flex flex-col justify-center items-center text-center p-8 md:p-12 relative z-10 text-slate-900">
        {slide.sectionNum && (
          <div className="font-lexend text-sm md:text-base font-bold text-rose-600 tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20">
            {slide.sectionNum}
          </div>
        )}
        <h2 className="font-lexend text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 max-w-3xl leading-tight">
          {slide.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          {slide.description}
        </p>
      </div>
    );
  }

  if (slide.type === 'timeline') {
    return (
      <div className="h-full flex flex-col justify-between p-6 md:p-10 relative z-10 text-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <h2 className="font-lexend text-xl md:text-2xl font-bold text-sky-700 flex items-center gap-2">
            <Clock className="w-6 h-6 text-sky-600" />
            {slide.title}
          </h2>
          {slide.moduleTag && (
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-xs font-semibold">
              {slide.moduleTag}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-grow">
          <div className="md:col-span-7 flex flex-col justify-between h-full py-2">
            <div>
              <h3 className="font-lexend text-lg md:text-xl font-bold text-slate-800 mb-4">
                {slide.topicTitle}
              </h3>
              <div className="space-y-3">
                {slide.timelineItems?.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                    <span className="font-lexend text-xs font-bold px-2.5 py-1 rounded bg-sky-500/10 text-sky-700 border border-sky-500/20 whitespace-nowrap mt-0.5">
                      {item.year}
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-650">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {slide.image && <ImageFrame url={slide.image.url} caption={slide.image.caption} />}
        </div>
      </div>
    );
  }

  if (slide.type === 'comparison') {
    return (
      <div className="h-full flex flex-col justify-between p-6 md:p-10 relative z-10 text-slate-900">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <h2 className="font-lexend text-xl md:text-2xl font-bold text-sky-700 flex items-center gap-2">
            <Brain className="w-6 h-6 text-sky-600" />
            {slide.title}
          </h2>
          {slide.moduleTag && (
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-xs font-semibold">
              {slide.moduleTag}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-grow">
          <div className="md:col-span-7 flex flex-col justify-between h-full">
            <div>
              <h3 className="font-lexend text-lg md:text-xl font-bold text-slate-800 mb-3">
                {slide.topicTitle}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {slide.versusLeft && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-semibold text-sm text-slate-500 flex items-center gap-2 mb-2">
                      <Tv className="w-4 h-4 text-slate-500" />
                      {slide.versusLeft.title}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                      {slide.versusLeft.bullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {slide.versusRight && (
                  <div className="p-4 rounded-xl bg-sky-500/[0.03] border border-sky-200">
                    <h4 className="font-semibold text-sm text-sky-700 flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-sky-600" />
                      {slide.versusRight.title}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                      {slide.versusRight.bullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {slide.keyInsight && (
                <div className="p-3.5 rounded-lg bg-sky-500/[0.04] border-l-4 border-sky-500 text-slate-700">
                  <strong className="text-xs uppercase tracking-wider text-sky-750 flex items-center gap-1.5 mb-1 font-lexend font-bold">
                    <Target className="w-4 h-4 text-sky-600" />
                    {slide.keyInsight.title || 'Key Insight'}
                  </strong>
                  <p className="text-xs leading-relaxed text-slate-600">{slide.keyInsight.text}</p>
                </div>
              )}
            </div>
          </div>

          {slide.image && <ImageFrame url={slide.image.url} caption={slide.image.caption} />}
        </div>
      </div>
    );
  }

  // Single Topic Slide Layout
  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-10 relative z-10 text-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
        <h2 className="font-lexend text-xl md:text-2xl font-bold text-sky-700 flex items-center gap-2">
          <Film className="w-6 h-6 text-sky-600" />
          {slide.title}
        </h2>
        {slide.moduleTag && (
          <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-700 border border-sky-500/20 text-xs font-semibold">
            {slide.moduleTag}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-grow">
        {/* Left Column: Text & Callout */}
        <div className="md:col-span-7 flex flex-col justify-between h-full">
          <div>
            {slide.pioneerBadge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 text-rose-700 border border-rose-500/20 text-xs font-semibold mb-3">
                <Award className="w-3.5 h-3.5 text-rose-600" />
                {slide.pioneerBadge}
              </div>
            )}

            {slide.topicTitle && (
              <h3 className="font-lexend text-lg md:text-xl font-bold text-slate-800 mb-3">
                {slide.topicTitle}
              </h3>
            )}

            {slide.bullets && slide.bullets.length > 0 && (
              <ul className="space-y-2 mb-4">
                {slide.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-sm md:text-base text-slate-650 leading-relaxed flex items-start gap-2">
                    <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Callout Boxes */}
          <div className="mt-auto space-y-3 pt-2">
            {slide.layman && (
              <div className="p-3.5 rounded-r-lg bg-amber-500/[0.04] border-l-4 border-amber-500 text-slate-700 shadow-sm">
                <strong className="text-xs uppercase tracking-wider text-amber-700 flex items-center gap-1.5 mb-1 font-lexend font-bold">
                  <Lightbulb className="w-4 h-4 text-amber-650" />
                  {slide.layman.title || 'Layman Explanation'}
                </strong>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{slide.layman.text}</p>
              </div>
            )}

            {slide.visualTrick && (
              <div className="p-3.5 rounded-r-lg bg-emerald-500/[0.04] border-l-4 border-emerald-500 text-slate-700 shadow-sm">
                <strong className="text-xs uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-1 font-lexend font-bold">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  {slide.visualTrick.title || 'Visual Trick'}
                </strong>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{slide.visualTrick.text}</p>
              </div>
            )}

            {slide.keyInsight && (
              <div className="p-3.5 rounded-r-lg bg-sky-500/[0.04] border-l-4 border-sky-500 text-slate-700 shadow-sm">
                <strong className="text-xs uppercase tracking-wider text-sky-700 flex items-center gap-1.5 mb-1 font-lexend font-bold">
                  <Target className="w-4 h-4 text-sky-600" />
                  {slide.keyInsight.title || 'Key Insight'}
                </strong>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{slide.keyInsight.text}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Image Frame */}
        {slide.image && <ImageFrame url={slide.image.url} caption={slide.image.caption} />}
      </div>
    </div>
  );
};
