'use client';

import React, { useState } from 'react';
import { Download, Check, ShieldCheck, X } from 'lucide-react';
import { LibraryAttendanceRecord } from '@/types/library';

interface DigitalLibraryCardProps {
  record: LibraryAttendanceRecord;
  cardImageUrl?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export function DigitalLibraryCard({
  record,
  cardImageUrl,
  onClose,
  isModal = false,
}: DigitalLibraryCardProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    const url = cardImageUrl || record.digitalCardBase64;
    if (!url) return;

    const link = document.createElement('a');
    link.href = url;
    link.download = `LibraryCard_${record.studentId}_${new Date().toISOString().slice(0, 10)}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const imageToDisplay = cardImageUrl || record.digitalCardBase64;

  const content = (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl max-w-sm w-full mx-auto animate-fade-in">
      {/* Top Header */}
      <div className="bg-white p-3.5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 leading-tight">
              Official Library Card
            </h4>
            <p className="text-[10px] text-slate-500">
              Verified Attendance &amp; Pass
            </p>
          </div>
        </div>
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Card Image Display */}
      {imageToDisplay ? (
        <div className="p-3 bg-slate-50 flex justify-center">
          <img
            src={imageToDisplay}
            alt="Digital Library Card"
            className="w-full rounded-xl shadow-xs border border-slate-200 object-contain"
          />
        </div>
      ) : (
        <div className="p-4 bg-slate-50 text-center text-xs text-slate-500">
          Generating card image...
        </div>
      )}

      {/* Action Strip */}
      <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="text-[10px] text-slate-500">
          <span className="block font-semibold text-slate-800">
            {record.studentName}
          </span>
          <span className="font-mono text-slate-400">
            {record.studentId}
          </span>
        </div>

        <button
          onClick={handleDownload}
          className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition shadow-xs flex items-center gap-1.5"
        >
          {downloadSuccess ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Saved!
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5" />
              Download Card
            </>
          )}
        </button>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
        {content}
      </div>
    );
  }

  return content;
}
