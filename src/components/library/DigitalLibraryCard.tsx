'use client';

import React, { useState } from 'react';
import {
  Download,
  Check,
  X,
  Clock,
  BookOpen,
  User,
  RefreshCw,
} from 'lucide-react';
import { LibraryAttendanceRecord } from '@/types/library';
import { generateDigitalCardCanvas, getLibraryConfig } from '@/utils/libraryStorage';

interface DigitalLibraryCardProps {
  record: LibraryAttendanceRecord;
  cardImageUrl?: string;
  onClose?: () => void;
  isModal?: boolean;
  onTimeOut?: () => void;
  isTimingOut?: boolean;
  isAdmin?: boolean;
}

// Helper to safely convert Base64 data URL to binary Blob to prevent mobile browser 'Load failed' TypeError
function base64ToBlob(base64Data: string): Blob {
  const parts = base64Data.split(';base64,');
  const contentType = parts[0]?.replace('data:', '') || 'image/png';
  const byteCharacters = atob(parts[1] || parts[0]);
  const byteNumbers = new Uint8Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  return new Blob([byteNumbers], { type: contentType });
}

// Converts raw Google Drive links to reliable direct thumbnail URLs
export function toDirectDriveUrl(url?: string): string {
  if (!url) return '';
  if (url.startsWith('data:') || url.startsWith('blob:')) return url;
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }
  return url;
}

export function DigitalLibraryCard({
  record,
  cardImageUrl,
  onClose,
  isModal = false,
  onTimeOut,
  isTimingOut = false,
  isAdmin = false,
}: DigitalLibraryCardProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const isCompleted = record.status === 'completed';
  const imageToDisplay = cardImageUrl || record.digitalCardBase64 || record.driveUrls?.cardUrl;
  const selfieToDisplay = record.driveUrls?.selfieUrl || record.selfiePhotoBase64;
  const bookToDisplay = record.driveUrls?.bookUrl || record.bookPhotoBase64;
  const sigToDisplay = record.driveUrls?.sigUrl || record.librarianSignatureBase64;

  const handleDownload = async () => {
    // Strictly restrict download to completed checkout (Time Out only), unless Admin is downloading
    if (!isCompleted && !isAdmin) {
      alert('Library Card download is only available upon Time Out.');
      return;
    }

    if (hasDownloaded) {
      alert('Digital Library Card has already been downloaded for this checkout.');
      return;
    }

    setIsDownloading(true);

    try {
      let url = cardImageUrl || record.digitalCardBase64;
      if (!url) {
        try {
          const config = getLibraryConfig();
          url = await generateDigitalCardCanvas(record, config);
        } catch (e) {
          console.error('Failed to generate card canvas:', e);
        }
      }

      if (!url) {
        alert('Card image is currently preparing, please try again in a second.');
        return;
      }

      const cleanStudentName = (record.studentName || 'Student').trim().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '');
      const filename = `LibraryPass_${cleanStudentName}_${record.studentId}_${new Date().toISOString().slice(0, 10)}.png`;

      let blob: Blob;
      if (url.startsWith('data:')) {
        blob = base64ToBlob(url);
      } else {
        const response = await fetch(url);
        blob = await response.blob();
      }

      // 1. Mobile Web Share API: Native standard for iOS Safari & Android Chrome
      if (typeof navigator !== 'undefined' && typeof File !== 'undefined' && navigator.canShare) {
        try {
          const file = new File([blob], filename, { type: 'image/png' });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: 'Library Card Pass',
              text: `Library Attendance Pass - ${record.studentName}`,
            });
            setHasDownloaded(true);
            setDownloadSuccess(true);
            return;
          }
        } catch (shareErr: any) {
          if (shareErr?.name === 'AbortError') {
            return; // User cancelled share sheet
          }
          console.warn('Native share failed, falling back to Object URL:', shareErr);
        }
      }

      // 2. Blob Object URL: Standard desktop and mobile fallback
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 15000);

      setHasDownloaded(true);
      setDownloadSuccess(true);
    } catch (err: any) {
      console.error('Download error:', err);
      // 3. Fallback: Open in new tab or prompt long press
      try {
        const fallbackUrl = cardImageUrl || record.digitalCardBase64;
        if (fallbackUrl) {
          const newWindow = window.open(fallbackUrl, '_blank');
          if (!newWindow) {
            alert('To save to your phone: Long-press the card image above and tap "Save to Photos".');
          } else {
            setHasDownloaded(true);
          }
        }
      } catch (fallbackErr) {
        alert('To save to your phone: Long-press the card image above and tap "Save to Photos".');
      }
    } finally {
      setIsDownloading(false);
    }
  };

  const content = (
    <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-2xl max-w-sm sm:max-w-md w-full mx-auto animate-fade-in ring-1 ring-slate-900/5">
      {/* Formal Academic Card Header */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-4 sm:p-5 text-white relative overflow-hidden">
        {/* Sleek metallic top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400" />

        <div className="flex items-start justify-between relative z-10 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-emerald-300 shadow-inner">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-widest uppercase text-emerald-400 block">
                University Library System
              </span>
              <h2 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-snug">
                Student Library Pass
              </h2>
              <p className="text-[10px] text-slate-400 font-medium">
                Official Attendance &amp; Circulation Credential
              </p>
            </div>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Pass ID & Live Status Bar */}
        <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 font-mono text-slate-300">
            <span className="text-slate-400 text-[10px] uppercase font-bold">PASS:</span>
            <span className="font-bold tracking-wider">#{record.id.slice(-7).toUpperCase()}</span>
          </div>

          <div
            className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] flex items-center gap-1.5 ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isCompleted ? 'bg-emerald-400' : 'bg-emerald-400 animate-pulse'
              }`}
            />
            <span>{isCompleted ? '✓ CHECKED OUT' : '● ACTIVE IN LIBRARY'}</span>
          </div>
        </div>
      </div>

      {/* Card Body Display */}
      <div className="p-4 sm:p-5 space-y-3.5 bg-slate-50/50">
        {/* Render Generated Card Image if available, completed, and NOT in modal */}
        {imageToDisplay && isCompleted && !isModal ? (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <img
              src={toDirectDriveUrl(imageToDisplay)}
              alt="Digital Library Card"
              referrerPolicy="no-referrer"
              className="w-full object-contain bg-white"
            />
          </div>
        ) : (
          /* Prestigious Interactive Student ID Card UI */
          <div className="space-y-3.5">
            {/* If in modal and card pass image is available, render card pass at top */}
            {isModal && imageToDisplay && (
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white mb-2">
                <div className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 flex items-center justify-between">
                  <span>🪪 Official Card Pass Preview</span>
                  <a
                    href={record.driveUrls?.cardUrl || toDirectDriveUrl(imageToDisplay)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 underline font-semibold text-[10px]"
                  >
                    Open Pass in Drive ↗
                  </a>
                </div>
                <img
                  src={toDirectDriveUrl(imageToDisplay)}
                  alt="Digital Library Card Pass"
                  referrerPolicy="no-referrer"
                  className="w-full object-contain bg-white max-h-60"
                />
              </div>
            )}

            {/* Student Profile Card (Left Portrait, Right Metadata) */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex gap-4 items-start">
              {/* Portrait Photo Frame */}
              <div className="relative flex-shrink-0">
                <div className="w-24 sm:w-28 aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 border-2 border-slate-200/90 shadow-2xs relative">
                  {selfieToDisplay ? (
                    <img
                      src={toDirectDriveUrl(selfieToDisplay)}
                      alt={record.studentName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-2 text-center">
                      <User className="w-6 h-6 mb-1 text-slate-300" />
                      <span className="text-[10px]">No Photo</span>
                    </div>
                  )}
                </div>
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-slate-900 text-[8px] font-bold text-white px-2 py-0.5 rounded-full tracking-wider uppercase shadow-xs whitespace-nowrap">
                  Student ID
                </span>
              </div>

              {/* Student Info Details */}
              <div className="flex-1 min-w-0 space-y-2">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                    Student Name
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight truncate">
                    {record.studentName}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                    {record.studentId}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                    Sec: {record.gradeSection ? record.gradeSection.toUpperCase() : ''}
                  </span>
                </div>

                <div className="pt-0.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                    Purpose of Visit
                  </span>
                  <span className="text-xs font-semibold text-slate-700 capitalize">
                    {record.purpose?.replace('_', ' ') || 'Study'}
                  </span>
                </div>
              </div>
            </div>

            {/* Registered Material / Reading Item */}
            <div className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-xs flex items-center gap-3">
              {bookToDisplay ? (
                <div className="w-12 h-14 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0 shadow-2xs">
                  <img
                    src={toDirectDriveUrl(bookToDisplay)}
                    alt="Book cover"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-14 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                  Registered Reading Material
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {record.bookTitle}
                </p>
                {record.bookAuthorOrCallNo && (
                  <p className="text-[10px] text-slate-500 font-mono truncate">
                    Ref: {record.bookAuthorOrCallNo}
                  </p>
                )}
              </div>
            </div>

            {/* Timestamps Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-white rounded-2xl p-3 border border-slate-200/90 shadow-xs">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-600" /> Time In
                </span>
                <p className="font-mono font-extrabold text-sm sm:text-base text-slate-900 mt-0.5">
                  {new Date(record.timeIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                <span className="text-[10px] text-slate-400 block font-medium">
                  {new Date(record.timeIn).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>

              <div className="bg-white rounded-2xl p-3 border border-slate-200/90 shadow-xs">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" /> Time Out
                </span>
                {record.timeOut ? (
                  <>
                    <p className="font-mono font-extrabold text-sm sm:text-base text-slate-900 mt-0.5">
                      {new Date(record.timeOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <span className="text-[10px] text-emerald-600 block font-semibold">
                      {record.durationMinutes ? `${record.durationMinutes} mins logged` : 'Session Ended'}
                    </span>
                  </>
                ) : (
                  <>
                    <p className="font-extrabold text-xs sm:text-sm text-emerald-600 mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Inside
                    </p>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      Stay in progress
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Librarian Endorsement & Pure Transparent Signature */}
            {record.librarianSignatureBase64 && (
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-xs">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Librarian Verification &amp; Endorsement
                  </span>
                  <span className="text-[9px] font-semibold text-emerald-600 flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> Authenticated
                  </span>
                </div>

                <div className="flex items-end justify-between gap-3 pt-1">
                  <div>
                    {record.librarianName && record.librarianName !== 'Head Librarian' && (
                      <span className="text-xs font-bold text-slate-900 block">
                        {record.librarianName}
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400 block">
                      Campus Library In-Charge
                    </span>
                  </div>

                  {/* Clean natural signature line with 100% transparent ink stamp */}
                  <div className="relative w-36 sm:w-44 h-12 flex flex-col justify-end">
                    <img
                      src={toDirectDriveUrl(sigToDisplay)}
                      alt="Librarian Signature"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                    <div className="border-b border-dashed border-slate-400 w-full pb-0.5 flex justify-between items-center text-[8px] text-slate-400 uppercase font-mono select-none">
                      <span>Sign</span>
                      <span>Authorized</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dedicated Admin Photo Inspection Gallery (Always visible in Admin modal) */}
            {isModal && (
              <div className="bg-slate-100/90 p-3 rounded-2xl border border-slate-200/90 space-y-2">
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">
                  📸 Uploaded Media &amp; Cloud Drive Files
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {/* Selfie Box */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200 flex flex-col gap-1.5 shadow-2xs">
                    <span className="text-[10px] font-extrabold text-slate-700">Student Photo</span>
                    {selfieToDisplay ? (
                      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 relative border border-slate-200">
                        <img
                          src={toDirectDriveUrl(selfieToDisplay)}
                          alt="Selfie"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[4/3] rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] text-slate-400">
                        No selfie photo
                      </div>
                    )}
                    {record.driveUrls?.selfieUrl && (
                      <a
                        href={record.driveUrls.selfieUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-emerald-600 hover:text-emerald-700 font-bold underline"
                      >
                        Open on Drive ↗
                      </a>
                    )}
                  </div>

                  {/* Book Photo Box */}
                  <div className="p-2 rounded-xl bg-white border border-slate-200 flex flex-col gap-1.5 shadow-2xs">
                    <span className="text-[10px] font-extrabold text-slate-700">Book Cover</span>
                    {bookToDisplay ? (
                      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 relative border border-slate-200">
                        <img
                          src={toDirectDriveUrl(bookToDisplay)}
                          alt="Book"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[4/3] rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] text-slate-400">
                        No book photo
                      </div>
                    )}
                    {record.driveUrls?.bookUrl && (
                      <a
                        href={record.driveUrls.bookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-emerald-600 hover:text-emerald-700 font-bold underline"
                      >
                        Open on Drive ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Official Barcode Strip Footer */}
            <div className="pt-2 pb-1 text-center">
              <div className="flex justify-center items-center gap-0.5 opacity-60 h-6">
                {[1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 4, 3, 1, 2, 4, 1, 3, 2, 1, 3, 4, 1, 2].map((w, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 h-full inline-block"
                    style={{ width: `${w}px`, opacity: i % 2 === 0 ? 0.9 : 0.6 }}
                  />
                ))}
              </div>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest mt-1 block uppercase">
                SECURE-ID • {record.id.slice(0, 16)}
              </span>
            </div>
          </div>
        )}

        {/* Action Strip: ONLY Admin can download the Official Digital Library Card */}
        {isAdmin && (
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={handleDownload}
              disabled={hasDownloaded || isDownloading}
              className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2 active:scale-[0.99] ${
                hasDownloaded
                  ? 'bg-slate-100 text-slate-500 border border-slate-200 cursor-default'
                  : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
              }`}
            >
              {isDownloading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Saving Card to Phone...
                </>
              ) : hasDownloaded ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5] text-emerald-600" />
                  Card Saved (Downloaded Once)
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  Library Card Saved!
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Save / Download Digital Library Card (.png)
                </>
              )}
            </button>

            {hasDownloaded && (
              <p className="text-[10px] text-center text-slate-400">
                ✓ Digital Library Card downloaded once for your checkout record.
              </p>
            )}
          </div>
        )}

        {/* Drive Media Quick Links in Modal */}
        {isModal && record.driveUrls && (record.driveUrls.selfieUrl || record.driveUrls.bookUrl || record.driveUrls.cardUrl) && (
          <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-2 text-[10px]">
            {record.driveUrls.selfieUrl && (
              <a
                href={record.driveUrls.selfieUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold flex items-center gap-1 transition"
              >
                📸 Drive Selfie
              </a>
            )}
            {record.driveUrls.bookUrl && (
              <a
                href={record.driveUrls.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold flex items-center gap-1 transition"
              >
                📖 Drive Book
              </a>
            )}
            {record.driveUrls.cardUrl && (
              <a
                href={record.driveUrls.cardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold flex items-center gap-1 transition"
              >
                🪪 Drive Card Pass
              </a>
            )}
          </div>
        )}
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
