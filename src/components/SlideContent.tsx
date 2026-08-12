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

const ImageFrame: React.FC<{ url: string; caption: string; isLaravel?: boolean }> = ({ url, caption, isLaravel }) => {
  const [hasError, setHasError] = useState(false);
  const iconColor = isLaravel ? 'text-rose-500' : 'text-sky-500';

  return (
    <div className="md:col-span-5 w-full min-h-[200px] md:h-full md:min-h-[220px] max-h-[300px] md:max-h-[360px] flex flex-col mt-4 md:mt-0">
      <div className="relative flex-grow rounded-t-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-sm min-h-[160px] md:min-h-[180px] flex items-center justify-center">
        {!hasError ? (
          <img
            src={url}
            alt={caption}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover absolute inset-0"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400 gap-2">
            <Film className={`w-10 h-10 ${iconColor} opacity-60`} />
            <span className="text-xs font-semibold text-slate-500">{caption}</span>
          </div>
        )}
      </div>
      <div className="bg-slate-50 text-slate-600 text-xs py-2.5 px-3 text-center border border-t-0 border-slate-250/80 flex items-center justify-center gap-1.5 rounded-b-lg flex-shrink-0">
        <ImageIcon className={`w-3.5 h-3.5 ${iconColor} flex-shrink-0`} />
        <span className="truncate">{caption}</span>
      </div>
    </div>
  );
};

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  const isLaravel = slide.id?.includes('laravel');

  const theme = {
    textAccent: isLaravel ? 'text-rose-600' : 'text-sky-600',
    textAccentDark: isLaravel ? 'text-rose-700' : 'text-sky-700',
    textAccentLight: isLaravel ? 'text-rose-500' : 'text-sky-500',
    textAccentMuted: isLaravel ? 'text-rose-750' : 'text-sky-750',
    bgAccentLight: isLaravel ? 'bg-rose-500/10' : 'bg-sky-500/10',
    borderAccentLight: isLaravel ? 'border-rose-500/20' : 'border-sky-500/20',
    borderAccent: isLaravel ? 'border-rose-200' : 'border-sky-200',
    borderLeftAccent: isLaravel ? 'border-rose-500' : 'border-sky-500',
    bgAccentOverlay: isLaravel ? 'bg-rose-500/[0.03]' : 'bg-sky-500/[0.03]',
    bgAccentOverlay2: isLaravel ? 'bg-rose-500/[0.04]' : 'bg-sky-500/[0.04]',
    iconColor: isLaravel ? 'text-rose-500' : 'text-sky-500',
    iconColorDark: isLaravel ? 'text-rose-600' : 'text-sky-600'
  };

  if (slide.type === 'cover') {
    return (
      <div className="h-full w-full flex flex-col justify-center items-start p-5 sm:p-8 md:p-14 relative z-10 text-slate-900 overflow-y-auto">
        {slide.moduleTag && (
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${theme.bgAccentLight} ${theme.textAccentDark} border ${theme.borderAccentLight} text-xs sm:text-sm font-semibold mb-4 md:mb-6 shadow-sm`}>
            <GraduationCap className={`w-4 h-4 ${theme.iconColorDark}`} />
            {slide.moduleTag}
          </div>
        )}
        <h1 className="font-lexend text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 md:mb-6">
          {slide.title?.includes('Video Editing') ? (
            <>
              Introduction to <span className="text-sky-600 drop-shadow-sm">Video Editing</span>
            </>
          ) : slide.title?.includes('Laravel') ? (
            <>
              Laravel 11 <span className="text-rose-600 drop-shadow-sm">Fundamentals</span>
            </>
          ) : (
            slide.title
          )}
        </h1>
        {slide.subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-slate-650 max-w-3xl leading-relaxed mb-6 md:mb-10">
            {slide.subtitle}
          </p>
        )}

        {slide.metadata && slide.metadata.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-slate-200 w-full">
            {slide.metadata.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-0.5 md:gap-1">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-semibold">{item.label}</span>
                <span className="text-sm sm:text-base font-semibold text-slate-800">{item.val}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (slide.type === 'section_break') {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center text-center p-5 sm:p-8 md:p-12 relative z-10 text-slate-900 overflow-y-auto">
        {slide.sectionNum && (
          <div className="font-lexend text-xs sm:text-sm md:text-base font-bold text-rose-600 tracking-widest uppercase mb-3 md:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20">
            {slide.sectionNum}
          </div>
        )}
        <h2 className="font-lexend text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 max-w-3xl leading-tight">
          {slide.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-slate-650 max-w-2xl leading-relaxed">
          {slide.description}
        </p>
      </div>
    );
  }

  if (slide.type === 'timeline') {
    return (
      <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
          <h2 className={`font-lexend text-lg md:text-2xl font-bold ${theme.textAccentDark} flex items-center gap-1.5 md:gap-2`}>
            <Clock className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconColorDark}`} />
            {slide.title}
          </h2>
          {slide.moduleTag && (
            <span className={`px-2.5 py-0.5 md:px-3 md:py-1 rounded-full ${theme.bgAccentLight} ${theme.textAccentDark} border ${theme.borderAccentLight} text-[10px] md:text-xs font-semibold`}>
              {slide.moduleTag}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center flex-grow">
          <div className="md:col-span-7 flex flex-col justify-between h-full py-1 md:py-2">
            <div>
              <h3 className="font-lexend text-base md:text-xl font-bold text-slate-800 mb-3 md:mb-4">
                {slide.topicTitle}
              </h3>
              <div className="space-y-2.5 md:space-y-3">
                {slide.timelineItems?.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                    <span className={`font-lexend text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded ${theme.bgAccentLight} ${theme.textAccentDark} border ${theme.borderAccentLight} whitespace-nowrap mt-0.5`}>
                      {item.year}
                    </span>
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm text-slate-900">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {slide.image && <ImageFrame url={slide.image.url} caption={slide.image.caption} isLaravel={isLaravel} />}
        </div>
      </div>
    );
  }

  if (slide.type === 'comparison') {
    return (
      <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
          <h2 className={`font-lexend text-lg md:text-2xl font-bold ${theme.textAccentDark} flex items-center gap-1.5 md:gap-2`}>
            <Brain className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconColorDark}`} />
            {slide.title}
          </h2>
          {slide.moduleTag && (
            <span className={`px-2.5 py-0.5 md:px-3 md:py-1 rounded-full ${theme.bgAccentLight} ${theme.textAccentDark} border ${theme.borderAccentLight} text-[10px] md:text-xs font-semibold`}>
              {slide.moduleTag}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch flex-grow">
          <div className="md:col-span-7 flex flex-col justify-between h-full">
            <div>
              <h3 className="font-lexend text-base md:text-xl font-bold text-slate-800 mb-2 md:mb-3">
                {slide.topicTitle}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                {slide.versusLeft && (
                  <div className="p-3 md:p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="font-semibold text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 md:gap-2 mb-2">
                      <Tv className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-500" />
                      {slide.versusLeft.title}
                    </h4>
                    <ul className="space-y-1 md:space-y-1.5 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      {slide.versusLeft.bullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {slide.versusRight && (
                  <div className={`p-3 md:p-4 rounded-xl ${theme.bgAccentOverlay} border ${theme.borderAccent}`}>
                    <h4 className={`font-semibold text-xs sm:text-sm ${theme.textAccentMuted} flex items-center gap-1.5 md:gap-2 mb-2`}>
                      <Sparkles className={`w-3.5 h-3.5 md:w-4 md:h-4 ${theme.iconColorDark}`} />
                      {slide.versusRight.title}
                    </h4>
                    <ul className="space-y-1 md:space-y-1.5 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                      {slide.versusRight.bullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {slide.keyInsight && (
                <div className={`p-3 md:p-3.5 rounded-lg ${theme.bgAccentOverlay2} border-l-4 ${theme.borderLeftAccent} text-slate-700`}>
                  <strong className={`text-[10px] sm:text-xs uppercase tracking-wider ${theme.textAccentMuted} flex items-center gap-1.5 mb-1 font-lexend font-bold`}>
                    <Target className={`w-3.5 h-3.5 md:w-4 md:h-4 ${theme.iconColorDark}`} />
                    {slide.keyInsight.title || 'Key Insight'}
                  </strong>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-slate-650">{slide.keyInsight.text}</p>
                </div>
              )}
            </div>
          </div>

          {slide.image && <ImageFrame url={slide.image.url} caption={slide.image.caption} isLaravel={isLaravel} />}
        </div>
      </div>
    );
  }

  // Single Topic Slide Layout
  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 md:p-10 relative z-10 text-slate-900 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 md:pb-3 mb-3 md:mb-4">
        <h2 className={`font-lexend text-lg md:text-2xl font-bold ${theme.textAccentDark} flex items-center gap-1.5 md:gap-2`}>
          <Film className={`w-5 h-5 md:w-6 md:h-6 ${theme.iconColorDark}`} />
          {slide.title}
        </h2>
        {slide.moduleTag && (
          <span className={`px-2.5 py-0.5 md:px-3 md:py-1 rounded-full ${theme.bgAccentLight} ${theme.textAccentDark} border ${theme.borderAccentLight} text-[10px] md:text-xs font-semibold`}>
            {slide.moduleTag}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch flex-grow">
        {/* Left Column: Text & Callout */}
        <div className="md:col-span-7 flex flex-col justify-between h-full">
          <div>
            {slide.pioneerBadge && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-rose-500/10 text-rose-700 border border-rose-500/20 text-[10px] sm:text-xs font-semibold mb-2 md:mb-3">
                <Award className="w-3.5 h-3.5 text-rose-600" />
                {slide.pioneerBadge}
              </div>
            )}

            {slide.topicTitle && (
              <h3 className="font-lexend text-base md:text-xl font-bold text-slate-800 mb-2 md:mb-3">
                {slide.topicTitle}
              </h3>
            )}

            {slide.bullets && slide.bullets.length > 0 && (
              <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                {slide.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed flex items-start gap-2">
                    <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${theme.iconColor}`} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Callout Boxes */}
          <div className="mt-auto space-y-2.5 md:space-y-3 pt-2">
            {slide.layman && (
              <div className="p-3 md:p-3.5 rounded-r-lg bg-amber-500/[0.04] border-l-4 border-amber-500 text-slate-700 shadow-sm shadow-amber-500/[0.02]">
                <strong className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-750 flex items-center gap-1.5 mb-1 font-lexend font-bold">
                  <Lightbulb className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-600" />
                  {slide.layman.title || 'Layman Explanation'}
                </strong>
                <p className="text-xs md:text-sm text-slate-650 leading-relaxed">{slide.layman.text}</p>
              </div>
            )}

            {slide.visualTrick && (
              <div className="p-3 md:p-3.5 rounded-r-lg bg-emerald-500/[0.04] border-l-4 border-emerald-500 text-slate-700 shadow-sm shadow-emerald-500/[0.02]">
                <strong className="text-[10px] sm:text-xs uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-1 font-lexend font-bold">
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600" />
                  {slide.visualTrick.title || 'Visual Trick'}
                </strong>
                <p className="text-xs md:text-sm text-slate-650 leading-relaxed">{slide.visualTrick.text}</p>
              </div>
            )}

            {slide.keyInsight && (
              <div className={`p-3 md:p-3.5 rounded-r-lg ${theme.bgAccentOverlay2} border-l-4 ${theme.borderLeftAccent} text-slate-700 shadow-sm`}>
                <strong className={`text-[10px] sm:text-xs uppercase tracking-wider ${theme.textAccentMuted} flex items-center gap-1.5 mb-1 font-lexend font-bold`}>
                  <Target className={`w-3.5 h-3.5 md:w-4 md:h-4 ${theme.iconColorDark}`} />
                  {slide.keyInsight.title || 'Key Insight'}
                </strong>
                <p className="text-xs md:text-sm text-slate-655 leading-relaxed">{slide.keyInsight.text}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Image Frame */}
        {slide.image && <ImageFrame url={slide.image.url} caption={slide.image.caption} isLaravel={isLaravel} />}
      </div>
    </div>
  );
};
