'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsRight, Check, LogOut, Loader2 } from 'lucide-react';

interface SwipeToConfirmProps {
  onConfirm: () => void;
  label?: string;
  disabled?: boolean;
  disabledReason?: string;
  isLoading?: boolean;
}

export function SwipeToConfirm({
  onConfirm,
  label = 'Slide to Time Out',
  disabled = false,
  disabledReason = 'Please select a student record first',
  isLoading = false,
}: SwipeToConfirmProps) {
  const [dragProgress, setDragProgress] = useState(0); // 0 to 1
  const [isDragging, setIsDragging] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef<number>(0);

  const resetSlider = useCallback(() => {
    setDragProgress(0);
    setIsDragging(false);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || isLoading || isSuccess) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || disabled || isLoading || isSuccess) return;
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.clientWidth;
    const thumbWidth = 56;
    const maxDrag = Math.max(1, trackWidth - thumbWidth);

    const deltaX = e.clientX - startXRef.current;
    const clampedDelta = Math.max(0, Math.min(deltaX, maxDrag));
    const progress = clampedDelta / maxDrag;

    setDragProgress(progress);

    // If dragged >= 88%, trigger confirmation!
    if (progress >= 0.88) {
      setIsDragging(false);
      setIsSuccess(true);
      setDragProgress(1);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {}
      onConfirm();
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}
    setIsDragging(false);
    if (dragProgress < 0.88) {
      resetSlider();
    }
  };

  useEffect(() => {
    if (!isLoading && !disabled && isSuccess) {
      // Auto reset success state after a delay
      const t = setTimeout(() => {
        setIsSuccess(false);
        resetSlider();
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [isLoading, disabled, isSuccess, resetSlider]);

  return (
    <div className="w-full space-y-1.5 select-none">
      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative h-14 rounded-2xl overflow-hidden flex items-center p-1.5 transition-colors touch-none cursor-grab active:cursor-grabbing ${
          disabled
            ? 'bg-slate-100 border border-slate-200 opacity-60 cursor-not-allowed'
            : isSuccess
            ? 'bg-emerald-600 border border-emerald-500 text-white'
            : 'bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border-2 border-emerald-200/80 shadow-inner'
        }`}
        title={disabled ? disabledReason : 'Slide handle across to record Time Out'}
      >
        {/* Progress Background Fill */}
        {!disabled && !isSuccess && (
          <div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/30 to-blue-500/40 transition-all duration-75 pointer-events-none rounded-2xl"
            style={{ width: `${Math.round(dragProgress * 100)}%` }}
          />
        )}

        {/* Center Prompt Label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-12">
          {isLoading ? (
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 animate-pulse">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
              <span>Processing Time Out...</span>
            </div>
          ) : isSuccess ? (
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-white">
              <Check className="w-4 h-4" />
              <span>Time Out Confirmed!</span>
            </div>
          ) : disabled ? (
            <span className="text-[11px] font-semibold text-slate-400 text-center">
              {disabledReason}
            </span>
          ) : (
            <span
              className="text-xs font-bold tracking-wide transition-opacity bg-gradient-to-r from-emerald-800 to-blue-900 bg-clip-text text-transparent flex items-center gap-1.5"
              style={{ opacity: Math.max(0.15, 1 - dragProgress * 1.5) }}
            >
              <span>{label}</span>
              <ChevronsRight className="w-4 h-4 text-emerald-600 animate-pulse" />
            </span>
          )}
        </div>

        {/* Draggable Slider Thumb */}
        {!disabled && (
          <div
            className={`relative z-10 w-11 h-11 rounded-xl shadow-md flex items-center justify-center transition-transform ${
              isDragging ? 'scale-105 shadow-lg' : ''
            } ${
              isSuccess
                ? 'bg-white text-emerald-600'
                : 'bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 text-white shadow-emerald-600/30 ring-2 ring-white'
            }`}
            style={{
              transform: trackRef.current
                ? `translateX(${dragProgress * (trackRef.current.clientWidth - 56)}px)`
                : 'translateX(0px)',
              transition: isDragging ? 'none' : 'transform 0.25s ease-out',
            }}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : isSuccess ? (
              <Check className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <LogOut className="w-5 h-5" />
            )}
          </div>
        )}
      </div>

      {/* Helper notice */}
      <p className="text-[10px] text-center text-slate-400">
        {disabled
          ? '⚠ Select an active student above to unlock Time Out'
          : '👉 Slide the arrow right to confirm checkout'}
      </p>
    </div>
  );
}
