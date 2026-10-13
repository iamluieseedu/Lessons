'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Camera,
  BookOpen,
  PenTool,
  Check,
  RefreshCw,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  LogIn,
  LogOut,
  Clock,
  Search,
} from 'lucide-react';

import {
  LibraryAttendanceRecord,
  LibraryConfig,
  AttendancePurpose,
  GeoLocationData,
} from '@/types/library';
import {
  getLibraryConfig,
  getAttendanceRecords,
  saveAttendanceRecord,
  syncRecordToGoogleDriveAndSheets,
  generateDigitalCardCanvas,
  fetchClientIpAddress,
  incrementPageViews,
  recordVisitorSession,
} from '@/utils/libraryStorage';
import { getCurrentGeoLocation, getMockLibraryLocation } from '@/utils/geolocation';

import { DigitalLibraryCard } from '@/components/library/DigitalLibraryCard';

function compressImageFile(file: File, maxDim = 640, quality = 0.72): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve((e.target?.result as string) || '');
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => resolve((e.target?.result as string) || '');
      img.src = e.target?.result as string;
    };
    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
}

export default function MobileLibraryAttendancePage() {
  const [config, setConfig] = useState<LibraryConfig>(getLibraryConfig());
  const [records, setRecords] = useState<LibraryAttendanceRecord[]>([]);

  // Geolocation & Network IP
  const [location, setLocation] = useState<GeoLocationData | null>(null);
  const [clientIp, setClientIp] = useState<string>('');

  // Form State
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [gradeSection, setGradeSection] = useState('');
  const [purpose, setPurpose] = useState<AttendancePurpose>('borrow');
  const [bookTitle, setBookTitle] = useState('');
  const [selfiePhoto, setSelfiePhoto] = useState<string>('');
  const [bookPhoto, setBookPhoto] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Direct Native Mobile Camera States & Refs
  const selfieInputRef = useRef<HTMLInputElement | null>(null);
  const bookInputRef = useRef<HTMLInputElement | null>(null);
  const [isCompressingSelfie, setIsCompressingSelfie] = useState(false);
  const [isCompressingBook, setIsCompressingBook] = useState(false);

  // Inline Librarian Touch Signature State
  const [isSignatureExpanded, setIsSignatureExpanded] = useState(false);
  const [librarianSignature, setLibrarianSignature] = useState<string>('');
  const [librarianName, setLibrarianName] = useState<string>('Librarian');
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawnOnCanvas, setHasDrawnOnCanvas] = useState(false);

  const signatureCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generated Card Modal
  const [viewCardRecord, setViewCardRecord] = useState<LibraryAttendanceRecord | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Time In / Time Out Mode State
  const [attendanceMode, setAttendanceMode] = useState<'time_in' | 'time_out'>('time_in');
  const [timeOutSearchQuery, setTimeOutSearchQuery] = useState('');
  const [selectedActiveRecord, setSelectedActiveRecord] = useState<LibraryAttendanceRecord | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleSelfieFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsCompressingSelfie(true);
    try {
      const compressed = await compressImageFile(file, 640, 0.72);
      setSelfiePhoto(compressed);
    } catch (err) {
      console.warn('Selfie compression error:', err);
    } finally {
      setIsCompressingSelfie(false);
      e.target.value = '';
    }
  };

  const handleBookFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsCompressingBook(true);
    try {
      const compressed = await compressImageFile(file, 640, 0.72);
      setBookPhoto(compressed);
    } catch (err) {
      console.warn('Book compression error:', err);
    } finally {
      setIsCompressingBook(false);
      e.target.value = '';
    }
  };

  const refreshRecords = useCallback(() => {
    setRecords(getAttendanceRecords());
  }, []);



  useEffect(() => {
    const loadedConfig = getLibraryConfig();
    setConfig(loadedConfig);
    setLibrarianName(loadedConfig.librarianDefaultName || 'Librarian In-Charge');
    refreshRecords();
    
    // Auto-set verified library campus location immediately
    const defaultCampusLoc = getMockLibraryLocation(loadedConfig);
    setLocation(defaultCampusLoc);

    // Silently attempt GPS refinement in background if browser supports it
    if (typeof window !== 'undefined' && navigator.geolocation) {
      getCurrentGeoLocation(loadedConfig)
        .then((realLoc) => {
          if (realLoc.latitude !== 0) {
            setLocation(realLoc);
          }
        })
        .catch(() => {});
    }

    // Count page visit & fetch client IP
    incrementPageViews();
    fetchClientIpAddress().then((ip) => {
      setClientIp(ip);
      recordVisitorSession(ip, defaultCampusLoc);
    });
  }, [refreshRecords]);

  // Canvas setup when expanded
  useEffect(() => {
    if (isSignatureExpanded && signatureCanvasRef.current) {
      const canvas = signatureCanvasRef.current;
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
      ctx.strokeStyle = '#1d4ed8'; // Royal blue ink

      // Draw dashed baseline
      ctx.save();
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(20, rect.height - 25);
      ctx.lineTo(rect.width - 20, rect.height - 25);
      ctx.stroke();
      ctx.restore();
    }
  }, [isSignatureExpanded]);

  // Touch drawing handlers
  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = signatureCanvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const canvas = signatureCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasDrawnOnCanvas(true);
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = signatureCanvasRef.current;
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
      } catch (err) {}
      setIsDrawing(false);
    }
  };

  // Reset signature canvas
  const handleResetSignature = () => {
    const canvas = signatureCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, rect.width * dpr, rect.height * dpr);

    // Redraw baseline
    ctx.save();
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(20, rect.height - 25);
    ctx.lineTo(rect.width - 20, rect.height - 25);
    ctx.stroke();
    ctx.restore();

    setHasDrawnOnCanvas(false);
    setLibrarianSignature('');
  };

  // Done button on signature
  const handleDoneSignature = () => {
    if (!hasDrawnOnCanvas) {
      alert('Librarian: Please sign with your finger on the line before tapping Done.');
      return;
    }
    const canvas = signatureCanvasRef.current;
    if (!canvas) return;

    const sigData = canvas.toDataURL('image/png');
    setLibrarianSignature(sigData);
    setIsSignatureExpanded(false);
  };

  // Submit complete record & generate card
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!studentId.trim() || !studentName.trim() || !gradeSection.trim()) {
      alert('Please fill out Student ID, Name, and Section.');
      return;
    }

    if (!bookTitle.trim()) {
      alert('Please enter the book or reading material title.');
      return;
    }

    if (!selfiePhoto) {
      alert('Please take a quick selfie holding the book.');
      return;
    }

    if (!bookPhoto) {
      alert('Please take or upload a photo of the book.');
      return;
    }

    if (!librarianSignature) {
      alert('Librarian must sign using touch screen at the bottom before submitting.');
      setIsSignatureExpanded(true);
      return;
    }

    setIsSubmitting(true);
    const currentLocation = location || (await getCurrentGeoLocation(config));
    const nowIso = new Date().toISOString();

    const newRecord: LibraryAttendanceRecord = {
      id: `CARD-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      studentId: studentId.trim(),
      studentName: studentName.trim(),
      gradeSection: gradeSection.trim(),
      purpose,
      bookTitle: bookTitle.trim(),
      selfiePhotoBase64: selfiePhoto,
      bookPhotoBase64: bookPhoto,
      timeIn: nowIso,
      timeOut: '',
      durationMinutes: 0,
      locationIn: currentLocation,
      ipAddress: clientIp || 'Protected',
      librarianSignatureBase64: librarianSignature,
      librarianName: librarianName.trim() || 'Librarian In-Charge',
      status: 'active',
    };

    // Update visitor session with student details
    if (clientIp) {
      recordVisitorSession(clientIp, currentLocation, studentId.trim(), studentName.trim());
    }

    // Synthesize official Library Card PNG
    const cardDataUrl = await generateDigitalCardCanvas(newRecord, config);
    newRecord.digitalCardBase64 = cardDataUrl;

    // Save locally
    saveAttendanceRecord(newRecord);
    refreshRecords();

    // Compile and push directly to Google Sheets & Google Drive
    try {
      const syncRes = await syncRecordToGoogleDriveAndSheets(newRecord, config);
      if (syncRes.success) {
        setToastMessage(`✓ Time In recorded! Pass & photos uploaded to Google Drive & Sheets.`);
      } else {
        setToastMessage(`⚠️ Pass saved locally, but Google Drive sync failed: ${syncRes.message}`);
      }
    } catch (syncErr) {
      console.warn('Sync attempt finished with local save:', syncErr);
      setToastMessage(`✓ Time In Library Card generated for ${newRecord.studentName}!`);
    } finally {
      setIsSubmitting(false);
    }

    // Reset Form
    setStudentId('');
    setStudentName('');
    setGradeSection('');
    setBookTitle('');
    setSelfiePhoto('');
    setBookPhoto('');
    setLibrarianSignature('');
    setHasDrawnOnCanvas(false);
    setIsSignatureExpanded(false);

    // Open card view for student / librarian
    setViewCardRecord(newRecord);
    setTimeout(() => setToastMessage(null), 6000);
  };

  // Handle Checkout / Time Out
  const handleConfirmTimeOut = async (recordToTimeOut: LibraryAttendanceRecord) => {
    setIsCheckingOut(true);
    try {
      const nowIso = new Date().toISOString();
      const diffMs = new Date(nowIso).getTime() - new Date(recordToTimeOut.timeIn).getTime();
      const durationMinutes = Math.max(1, Math.round(diffMs / (1000 * 60)));

      const updatedRecord: LibraryAttendanceRecord = {
        ...recordToTimeOut,
        timeOut: nowIso,
        durationMinutes,
        status: 'completed',
      };

      // Regenerate digital card with Time Out and Completed Status
      const cardDataUrl = await generateDigitalCardCanvas(updatedRecord, config);
      updatedRecord.digitalCardBase64 = cardDataUrl;

      // Update local storage
      saveAttendanceRecord(updatedRecord);
      refreshRecords();

      // Sync to Google Apps Script (updates row in Google Sheets)
      try {
        await syncRecordToGoogleDriveAndSheets(updatedRecord, config);
        setToastMessage(`✓ Time Out recorded for ${updatedRecord.studentName}! Total stay: ${durationMinutes} mins`);
      } catch (err) {
        setToastMessage(`✓ Time Out saved locally for ${updatedRecord.studentName} (${durationMinutes} mins)`);
      }

      // Display the final checked out card pass
      setSelectedActiveRecord(null);
      setTimeOutSearchQuery('');
      setViewCardRecord(updatedRecord);
      setTimeout(() => setToastMessage(null), 6000);
    } catch (err) {
      console.error('Error during checkout:', err);
      alert('Failed to process checkout. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 py-4 space-y-4">
      {/* Toast */}
      {toastMessage && (
        <div className="bg-emerald-600 text-white px-3.5 py-2.5 rounded-xl shadow-lg flex items-center justify-between text-xs font-semibold animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-white/80 hover:text-white ml-2">
            ✕
          </button>
        </div>
      )}

      {/* TIME IN / TIME OUT MODE TABS */}
      <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200 shadow-xs">
        <button
          type="button"
          onClick={() => {
            setAttendanceMode('time_in');
            setSelectedActiveRecord(null);
          }}
          className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 ${
            attendanceMode === 'time_in'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <LogIn className="w-4 h-4" />
          <span>TIME IN (Entry)</span>
        </button>

        <button
          type="button"
          onClick={() => setAttendanceMode('time_out')}
          className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 ${
            attendanceMode === 'time_out'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <LogOut className="w-4 h-4" />
          <span>TIME OUT (Exit)</span>
          {records.filter((r) => r.status === 'active').length > 0 && (
            <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-mono">
              {records.filter((r) => r.status === 'active').length}
            </span>
          )}
        </button>
      </div>

      {/* MODE 1: TIME IN (ENTRY FORM) */}
      {attendanceMode === 'time_in' && (
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-4 animate-fade-in">
          {/* Student Fields */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Student ID Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 2024-00123"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Student Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Juan Dela Cruz"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Section <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BSIT 3A"
                  value={gradeSection}
                  onChange={(e) => setGradeSection(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Purpose
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value as AttendancePurpose)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                >
                  <option value="borrow">Borrow Book</option>
                  <option value="study">Quiet Study</option>
                  <option value="research">Research</option>
                  <option value="computer_use">Computer Station</option>
                  <option value="return">Return Book</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Book Title / Material <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Data Structures and Algorithms"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>
          </div>

          {/* Photo Capture Slots (Direct Mobile Native Camera) */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {/* Selfie */}
            <div
              onClick={() => selfieInputRef.current?.click()}
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 active:scale-[0.99] cursor-pointer transition flex flex-col items-center justify-center text-center aspect-[4/3] relative overflow-hidden"
            >
              {isCompressingSelfie ? (
                <div className="flex flex-col items-center justify-center text-blue-600 gap-1 text-[11px] font-semibold">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : selfiePhoto ? (
                <>
                  <img src={selfiePhoto} alt="Selfie" className="w-full h-full object-cover rounded-lg" />
                  <span className="absolute bottom-1 right-1 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                    ✓ Selfie (Retake)
                  </span>
                </>
              ) : (
                <>
                  <Camera className="w-6 h-6 text-blue-600 mb-1" />
                  <span className="text-xs font-bold text-slate-800">1. Student Selfie</span>
                  <span className="text-[10px] text-slate-400">Tap to snap selfie</span>
                </>
              )}
            </div>

            {/* Book Photo */}
            <div
              onClick={() => bookInputRef.current?.click()}
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 active:scale-[0.99] cursor-pointer transition flex flex-col items-center justify-center text-center aspect-[4/3] relative overflow-hidden"
            >
              {isCompressingBook ? (
                <div className="flex flex-col items-center justify-center text-emerald-600 gap-1 text-[11px] font-semibold">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : bookPhoto ? (
                <>
                  <img src={bookPhoto} alt="Book" className="w-full h-full object-cover rounded-lg" />
                  <span className="absolute bottom-1 right-1 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                    ✓ Book (Retake)
                  </span>
                </>
              ) : (
                <>
                  <BookOpen className="w-6 h-6 text-emerald-600 mb-1" />
                  <span className="text-xs font-bold text-slate-800">2. Book Photo</span>
                  <span className="text-[10px] text-slate-400">Tap to snap book</span>
                </>
              )}
            </div>

            {/* Hidden Native File / Camera Inputs */}
            <input
              ref={selfieInputRef}
              type="file"
              accept="image/*"
              capture="user"
              className="hidden"
              onChange={handleSelfieFile}
            />
            <input
              ref={bookInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleBookFile}
            />
          </div>

          {/* DIRECT LIBRARIAN TOUCH SIGNATURE AT THE BOTTOM */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-blue-600" />
                Librarian E-Signature
              </label>
              {librarianSignature && !isSignatureExpanded && (
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Signed
                </span>
              )}
            </div>

            {/* If not expanded & no signature: Show tap-to-expand button */}
            {!isSignatureExpanded && !librarianSignature && (
              <button
                type="button"
                onClick={() => setIsSignatureExpanded(true)}
                className="w-full py-3.5 px-4 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/60 hover:bg-blue-50 text-blue-700 font-bold text-xs transition flex items-center justify-center gap-2"
              >
                <PenTool className="w-4 h-4" />
                Librarian: Tap here to sign with your finger
                <ChevronDown className="w-4 h-4" />
              </button>
            )}

            {/* If signed & collapsed: Show preview stamp and change button */}
            {!isSignatureExpanded && librarianSignature && (
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2">
                  <img
                    src={librarianSignature}
                    alt="Signature"
                    className="h-8 max-w-[100px] object-contain bg-white rounded border border-slate-200 px-1"
                  />
                  <span className="text-xs font-semibold text-slate-700">
                    Verified by {librarianName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSignatureExpanded(true)}
                  className="px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  Re-sign
                </button>
              </div>
            )}

            {/* EXPANDED CANVAS SIGNATURE PAD */}
            {isSignatureExpanded && (
              <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 space-y-2.5 animate-fade-in shadow-xs">
                <div className="flex items-center justify-between text-[11px] text-slate-600 font-medium">
                  <span>Sign with your finger directly on the line below:</span>
                  <button
                    type="button"
                    onClick={handleResetSignature}
                    className="text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 text-[11px]"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                </div>

                {/* Touch Canvas */}
                <div className="relative bg-white rounded-xl border border-slate-300 overflow-hidden shadow-inner">
                  <canvas
                    ref={signatureCanvasRef}
                    onPointerDown={startDrawing}
                    onPointerMove={draw}
                    onPointerUp={stopDrawing}
                    onPointerCancel={stopDrawing}
                    className="w-full h-36 bg-white touch-none cursor-crosshair"
                    style={{ touchAction: 'none' }}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={librarianName}
                    onChange={(e) => setLibrarianName(e.target.value)}
                    placeholder="Librarian Name"
                    className="flex-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />

                  <button
                    type="button"
                    onClick={handleResetSignature}
                    className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg transition"
                  >
                    Reset
                  </button>

                  <button
                    type="button"
                    onClick={handleDoneSignature}
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition shadow-xs flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-sm transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Saving to Google Drive &amp; Sheets...
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Confirm Time In &amp; Generate Pass
              </>
            )}
          </button>
        </form>
      )}

      {/* MODE 2: TIME OUT (CHECKOUT & EXIT) */}
      {attendanceMode === 'time_out' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-4 animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <LogOut className="w-4 h-4 text-amber-600" />
                Library Exit &amp; Checkout
              </h3>
              <p className="text-[11px] text-slate-500">
                Log your departure and record total reading time
              </p>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200">
              {records.filter((r) => r.status === 'active').length} Active
            </span>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search active student by ID or Name..."
              value={timeOutSearchQuery}
              onChange={(e) => setTimeOutSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
            />
          </div>

          {/* Checkout Details if a student record is selected */}
          {selectedActiveRecord ? (
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                  Selected for Time Out
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedActiveRecord(null)}
                  className="text-xs text-amber-700 hover:underline font-semibold"
                >
                  Change Student
                </button>
              </div>

              <div className="bg-white rounded-lg p-3 border border-amber-200 space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {selectedActiveRecord.studentName}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono">
                      ID: {selectedActiveRecord.studentId} • Section: {selectedActiveRecord.gradeSection}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Active
                  </span>
                </div>

                <div className="text-[11px] text-slate-700 pt-1 border-t border-slate-100">
                  <span className="text-slate-400">Material:</span> {selectedActiveRecord.bookTitle}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">TIME IN</span>
                    <span className="font-bold text-blue-600 font-mono">
                      {new Date(selectedActiveRecord.timeIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">ESTIMATED DURATION</span>
                    <span className="font-bold text-amber-600 font-mono">
                      ~{Math.max(1, Math.round((Date.now() - new Date(selectedActiveRecord.timeIn).getTime()) / 60000))} mins
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                disabled={isCheckingOut}
                onClick={() => handleConfirmTimeOut(selectedActiveRecord)}
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-[0.99] text-white font-bold text-xs transition shadow flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Recording Time Out...
                  </>
                ) : (
                  <>
                    <LogOut className="w-4 h-4" />
                    Confirm Time Out &amp; Checkout
                  </>
                )}
              </button>
            </div>
          ) : (
            /* Active Students List */
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-700 block">
                Students Currently Inside Library:
              </span>

              {(() => {
                const query = timeOutSearchQuery.toLowerCase().trim();
                const matched = records.filter(
                  (r) =>
                    r.status === 'active' &&
                    (!query ||
                      r.studentName.toLowerCase().includes(query) ||
                      r.studentId.toLowerCase().includes(query) ||
                      r.gradeSection.toLowerCase().includes(query))
                );

                if (matched.length === 0) {
                  return (
                    <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                      {records.some((r) => r.status === 'active')
                        ? 'No active students match your search.'
                        : 'No students currently checked in. All library sessions are checked out.'}
                    </div>
                  );
                }

                return matched.map((rec) => {
                  const elapsedMins = Math.max(
                    1,
                    Math.round((Date.now() - new Date(rec.timeIn).getTime()) / 60000)
                  );
                  return (
                    <div
                      key={rec.id}
                      onClick={() => setSelectedActiveRecord(rec)}
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-amber-50/50 hover:border-amber-300 transition cursor-pointer flex items-center justify-between gap-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-900 truncate">
                            {rec.studentName}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">
                            {rec.gradeSection}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 truncate mt-0.5">
                          📖 {rec.bookTitle}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          Time In: {new Date(rec.timeIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • Inside for {elapsedMins}m
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedActiveRecord(rec);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-[11px] transition shrink-0 flex items-center gap-1 shadow-xs"
                      >
                        <LogOut className="w-3 h-3" />
                        Time Out
                      </button>
                    </div>
                  );
                });
              })()}
            </div>
          )}
        </div>
      )}

      {/* Generated Digital Library Card Modal */}
      {viewCardRecord && (
        <DigitalLibraryCard
          isModal
          record={viewCardRecord}
          onClose={() => setViewCardRecord(null)}
        />
      )}
    </div>
  );
}
