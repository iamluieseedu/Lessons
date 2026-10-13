'use client';

import React, { useRef, useState, useEffect } from 'react';
import { PenTool, Check, Trash2, X, ShieldCheck } from 'lucide-react';

interface SignaturePadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (signatureBase64: string, librarianName: string) => void;
  studentName: string;
  bookTitle: string;
  defaultLibrarianName?: string;
}

export function SignaturePadModal({
  isOpen,
  onClose,
  onConfirm,
  studentName,
  bookTitle,
  defaultLibrarianName = 'Librarian In-Charge',
}: SignaturePadModalProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [librarianName, setLibrarianName] = useState(defaultLibrarianName);

  // Resize canvas according to display DPR to keep lines ultra crisp
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#4f46e5'; // Indigo signature ink

    // Draw baseline
    drawSignatureGuide(ctx, rect.width, rect.height);
  }, [isOpen]);

  const drawSignatureGuide = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.save();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(30, height - 35);
    ctx.lineTo(width - 30, height - 35);
    ctx.stroke();

    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    ctx.fillText('✕ Sign on line above using finger or stylus', 35, height - 15);
    ctx.restore();
  };

  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasCoords(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {
        // Pointer might already be released
      }
      setIsDrawing(false);
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, rect.width * dpr, rect.height * dpr);
    drawSignatureGuide(ctx, rect.width, rect.height);
    setHasDrawn(false);
  };

  const handleConfirm = () => {
    if (!hasDrawn) {
      alert('Please provide librarian signature using touch or stylus before completing checkout.');
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const signatureDataUrl = canvas.toDataURL('image/png');
    onConfirm(signatureDataUrl, librarianName.trim() || 'Librarian');
    handleClear();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              Librarian Touch E-Signature
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Verify book return and sign on phone screen to finalize time-out
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Verification Summary Chip */}
        <div className="px-5 py-3 bg-indigo-950/40 border-b border-indigo-900/40 flex flex-col gap-1 text-xs">
          <div className="flex justify-between text-slate-300">
            <span className="font-semibold text-slate-400">Student:</span>
            <span className="font-bold text-white">{studentName}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="font-semibold text-slate-400">Book/Purpose:</span>
            <span className="font-medium text-indigo-300 truncate max-w-[240px]">
              {bookTitle}
            </span>
          </div>
        </div>

        {/* Signature Canvas Area */}
        <div className="p-4 space-y-3">
          <div className="relative bg-slate-950 rounded-xl border border-slate-800 p-2 shadow-inner">
            <div className="text-[11px] font-semibold text-slate-400 px-2 py-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-indigo-300">
                <PenTool className="w-3.5 h-3.5" />
                Sign with your finger / stylus below:
              </span>
              <button
                type="button"
                onClick={handleClear}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 px-2 py-0.5 rounded hover:bg-rose-950/40 transition"
              >
                <Trash2 className="w-3 h-3" />
                Clear
              </button>
            </div>

            <canvas
              ref={canvasRef}
              onPointerDown={startDrawing}
              onPointerMove={draw}
              onPointerUp={stopDrawing}
              onPointerCancel={stopDrawing}
              className="w-full h-48 bg-slate-900 rounded-lg touch-none cursor-crosshair border border-slate-800/80"
              style={{ touchAction: 'none' }}
            />
          </div>

          {/* Librarian Name Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Librarian Name / Staff In-Charge
            </label>
            <input
              type="text"
              value={librarianName}
              onChange={(e) => setLibrarianName(e.target.value)}
              placeholder="e.g. Mrs. Maria Santos (Librarian)"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-2 py-2.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            Approve & Finalize Time Out
          </button>
        </div>
      </div>
    </div>
  );
}
