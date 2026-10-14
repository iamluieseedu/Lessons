'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Camera,
  BookOpen,
  Check,
  RefreshCw,
  RotateCcw,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  LogIn,
  LogOut,
  MapPin,
  AlertCircle,
  ShieldCheck,
  Download,
  Clock,
  Compass,
  ArrowRight,
  UserPlus,
  User,
  Hash,
  GraduationCap,
} from 'lucide-react';

import {
  LibraryAttendanceRecord,
  LibraryConfig,
  AttendancePurpose,
  GeoLocationData,
} from '@/types/library';
import {
  getLibraryConfig,
  saveLibraryConfig,
  getAttendanceRecords,
  saveAttendanceRecord,
  syncRecordToGoogleDriveAndSheets,
  generateDigitalCardCanvas,
  fetchClientIpAddress,
  incrementPageViews,
  recordVisitorSession,
} from '@/utils/libraryStorage';
import { getCurrentGeoLocation, formatDistance } from '@/utils/geolocation';
import { DigitalLibraryCard } from '@/components/library/DigitalLibraryCard';

// Custom Stylus / Fountain Pen Icon for e-signature
function SignaturePenIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m18 2 4 4-14 14H4v-4L18 2z" />
      <path d="m14.5 5.5 4 4" />
      <path d="M4 20l3-1-2-2z" />
      <circle cx="19" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

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

  // Geolocation State with Explicit Confirmation
  const [location, setLocation] = useState<GeoLocationData | null>(null);
  const [isAcquiringLocation, setIsAcquiringLocation] = useState(false);
  const [hasRequestedLocation, setHasRequestedLocation] = useState(false);
  const [librarianOverrideOnSite, setLibrarianOverrideOnSite] = useState(false);
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

  // Librarian Full Name & Signature State
  const [librarianName, setLibrarianName] = useState<string>('');
  const [isSignatureExpanded, setIsSignatureExpanded] = useState(false);
  const [librarianSignature, setLibrarianSignature] = useState<string>('');
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawnOnCanvas, setHasDrawnOnCanvas] = useState(false);

  const signatureCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Active Session & Generated Cute Card State
  // After Confirm Time In, the active record is displayed with "Slide to Time Out"
  const [activeSessionRecord, setActiveSessionRecord] = useState<LibraryAttendanceRecord | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronous double-click / double-submission locks
  const isSubmittingRef = useRef(false);
  const isCheckingOutRef = useRef(false);
  const timeInSyncPromiseRef = useRef<Promise<any> | null>(null);

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
    const all = getAttendanceRecords();
    setRecords(all);
    const active = all.find((r) => r.status === 'active');
    if (active) {
      setActiveSessionRecord((prev) => prev || active);
    }
  }, []);

  // Explicit GPS Request Handler with User Confirmation (Triggered on Click)
  const requestEnableGPS = useCallback(async (currentConf: LibraryConfig) => {
    setIsAcquiringLocation(true);
    setHasRequestedLocation(true);
    try {
      const realLoc = await getCurrentGeoLocation(currentConf);
      setLocation(realLoc);
      if (realLoc.isWithinGeofence) {
        setToastMessage('✓ Location verified! You are inside the library.');
        setTimeout(() => setToastMessage(null), 4000);
      } else if (realLoc.latitude !== 0) {
        setToastMessage(`📍 Outside library radius (${formatDistance(realLoc.distanceFromLibraryMeters)} away).`);
        setTimeout(() => setToastMessage(null), 5000);
      } else if (realLoc.errorMessage) {
        setToastMessage(`⚠️ ${realLoc.errorMessage}`);
        setTimeout(() => setToastMessage(null), 6000);
      }
      if (clientIp) {
        recordVisitorSession(clientIp, realLoc);
      }
      return realLoc;
    } catch (err) {
      console.warn('Location retrieval error:', err);
      return null;
    } finally {
      setIsAcquiringLocation(false);
    }
  }, [clientIp]);

  // Set Current Location as Library Center (Calibrate/Setup)
  const handleCalibrateAsLibrary = () => {
    if (!location || location.latitude === 0) {
      alert('Please enable GPS first to read your current coordinates.');
      return;
    }
    const confirmed = confirm(
      `Set your current GPS coordinates as the Library Center?\n\nLatitude: ${location.latitude.toFixed(6)}\nLongitude: ${location.longitude.toFixed(6)}\n\nThis will calibrate the system to your current location.`
    );
    if (!confirmed) return;

    const updatedConfig: LibraryConfig = {
      ...config,
      libraryLatitude: Number(location.latitude.toFixed(6)),
      libraryLongitude: Number(location.longitude.toFixed(6)),
    };
    setConfig(updatedConfig);
    saveLibraryConfig(updatedConfig);

    // Recalculate distance
    setLocation({
      ...location,
      distanceFromLibraryMeters: 0,
      isWithinGeofence: true,
    });
    setToastMessage('✓ Library coordinates calibrated to your location! Attendance unlocked.');
    setTimeout(() => setToastMessage(null), 5000);
  };

  useEffect(() => {
    const loadedConfig = getLibraryConfig();
    setConfig(loadedConfig);
    const initialLibName =
      loadedConfig.librarianDefaultName && loadedConfig.librarianDefaultName !== 'Head Librarian'
        ? loadedConfig.librarianDefaultName
        : '';
    setLibrarianName(initialLibName);
    refreshRecords();

    // Attempt initial GPS check
    getCurrentGeoLocation(loadedConfig).then((loc) => {
      setHasRequestedLocation(true);
      if (loc && loc.latitude !== 0) {
        setLocation(loc);
      }
    }).catch(() => {});

    incrementPageViews();
    fetchClientIpAddress().then((ip) => {
      setClientIp(ip);
    });
  }, [refreshRecords]);

  // FIX: Accurate Desktop Cursor Alignment for Signature Canvas
  useEffect(() => {
    if (isSignatureExpanded && signatureCanvasRef.current) {
      const canvas = signatureCanvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.max(1, window.devicePixelRatio || 1);

      // Lock internal buffer size to display dimensions with device pixel ratio
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);

      // Explicitly lock CSS display width & height to match rect
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Clear buffer to ensure pure alpha-transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 3.5 * dpr;
      ctx.strokeStyle = '#000000'; // Pure black ink stroke
    }
  }, [isSignatureExpanded]);

  // Accurate Coordinate Mapper: Translates client cursor to exact internal canvas buffer coordinates
  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = signatureCanvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const canvas = signatureCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 3.5 * dpr;
    ctx.strokeStyle = '#000000';

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

  const handleResetSignature = () => {
    const canvas = signatureCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawnOnCanvas(false);
    setLibrarianSignature('');
  };

  const handleDoneSignature = () => {
    if (!hasDrawnOnCanvas) {
      alert('Librarian: Please sign on the line before tapping Done.');
      return;
    }
    const canvas = signatureCanvasRef.current;
    if (!canvas) return;

    const sigData = canvas.toDataURL('image/png');
    setLibrarianSignature(sigData);
    setIsSignatureExpanded(false);
  };

  // Submit Time In -> Generates Card & Switches Action to Time Out (With Double-Entry Protection)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Strict synchronous double-submission lock immediately
    if (isSubmittingRef.current || isSubmitting) {
      return;
    }
    isSubmittingRef.current = true;
    setIsSubmitting(true);

    const unlock = () => {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    };

    if (!studentId.trim() || !studentName.trim() || !gradeSection.trim()) {
      alert('Please fill out Student ID, Name, and Section.');
      unlock();
      return;
    }

    if (!bookTitle.trim()) {
      alert('Please enter the book or reading material title.');
      unlock();
      return;
    }

    if (!selfiePhoto) {
      alert('Please take a quick selfie holding the book.');
      unlock();
      return;
    }

    if (!bookPhoto) {
      alert('Please take or upload a photo of the book.');
      unlock();
      return;
    }

    if (!librarianName.trim()) {
      alert('Please fill out the Librarian Full Name.');
      unlock();
      return;
    }

    if (!librarianSignature) {
      alert('Librarian must sign using the touch screen before submitting.');
      setIsSignatureExpanded(true);
      unlock();
      return;
    }

    // 2. Active Session Double-Entry Guard: Prevent duplicate active session for the same student
    const currentRecords = getAttendanceRecords();
    const existingActive = currentRecords.find(
      (r) =>
        r.status === 'active' &&
        r.studentId.trim().toLowerCase() === studentId.trim().toLowerCase()
    );
    if (existingActive) {
      alert(
        `Student "${studentName.trim()}" (${studentId.trim()}) already has an ACTIVE library session!\n\nPlease Time Out the current session before logging in again.`
      );
      setActiveSessionRecord(existingActive);
      unlock();
      return;
    }

    try {
      // 4. Geofence Verification Check: Passive verification on submit
      let activeLoc = location;
      if (!activeLoc || activeLoc.latitude === 0) {
        activeLoc = await getCurrentGeoLocation(config);
        if (activeLoc && activeLoc.latitude !== 0) {
          setLocation(activeLoc);
        }
      }

      const isAtLibrary =
        librarianOverrideOnSite || (activeLoc && activeLoc.isWithinGeofence);

      if (!isAtLibrary) {
        if (!activeLoc || activeLoc.latitude === 0) {
          alert(
            'Location Permission Required:\n\nPlease allow browser location access to verify you are currently at the campus library.'
          );
        } else {
          alert(
            `Location Verification:\n\nYou must be at the campus library (14.328171, 121.090469) to record attendance.\n\nYour current location is ${formatDistance(
              activeLoc.distanceFromLibraryMeters
            )} away from the campus perimeter.`
          );
        }
        unlock();
        return;
      }

      const currentLocation = activeLoc || location || {
        latitude: config.libraryLatitude,
        longitude: config.libraryLongitude,
        accuracyMeters: 10,
        isWithinGeofence: true,
        distanceFromLibraryMeters: 0,
        timestamp: Date.now(),
      };

      const nowIso = new Date().toISOString();

      const newRecord: LibraryAttendanceRecord = {
        id: `CARD-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
        studentId: studentId.trim(),
        studentName: studentName.trim(),
        gradeSection: gradeSection.trim().toUpperCase(),
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
        librarianName: librarianName.trim(),
        status: 'active',
      };

      if (clientIp) {
        recordVisitorSession(clientIp, currentLocation, studentId.trim(), studentName.trim());
      }

      // Generate Digital Card PNG
      const cardDataUrl = await generateDigitalCardCanvas(newRecord, config);
      newRecord.digitalCardBase64 = cardDataUrl;

      // Save locally (storage-level double entry check included)
      saveAttendanceRecord(newRecord);
      refreshRecords();

      // Immediately display Card on screen and switch action to Time Out
      setActiveSessionRecord(newRecord);

      // Reset entry fields for next session
      setStudentId('');
      setStudentName('');
      setGradeSection('');
      setBookTitle('');
      setSelfiePhoto('');
      setBookPhoto('');
      setLibrarianSignature('');
      setHasDrawnOnCanvas(false);
      setIsSignatureExpanded(false);

      // Push to Google Sheets & Drive in background and store sync promise
      const syncPromise = syncRecordToGoogleDriveAndSheets(newRecord, config);
      timeInSyncPromiseRef.current = syncPromise;

      syncPromise
        .then((res) => {
          if (res.success) {
            setToastMessage('✓ Time In logged & backed up to Google Cloud.');
          } else {
            setToastMessage(`✓ Time In recorded for ${newRecord.studentName}!`);
          }
        })
        .catch(() => {
          setToastMessage(`✓ Time In recorded for ${newRecord.studentName}!`);
        })
        .finally(() => {
          setIsSubmitting(false);
          isSubmittingRef.current = false;
        });

      setTimeout(() => setToastMessage(null), 5000);
    } catch (err) {
      console.error('Submission error:', err);
      alert('An error occurred while saving attendance. Please try again.');
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  // Confirm Time Out (When student leaves - with double click lock & sync sequencing)
  const handleConfirmTimeOut = async () => {
    if (!activeSessionRecord || isCheckingOutRef.current || isCheckingOut) return;

    isCheckingOutRef.current = true;
    setIsCheckingOut(true);
    try {
      // If initial Time In is still syncing in background, wait for it so the row exists before checkout!
      if (timeInSyncPromiseRef.current) {
        await timeInSyncPromiseRef.current.catch(() => {});
      }

      const nowIso = new Date().toISOString();
      const diffMs = new Date(nowIso).getTime() - new Date(activeSessionRecord.timeIn).getTime();
      const durationMinutes = Math.max(1, Math.round(diffMs / (1000 * 60)));

      const updatedRecord: LibraryAttendanceRecord = {
        ...activeSessionRecord,
        timeOut: nowIso,
        durationMinutes,
        status: 'completed',
      };

      // Regenerate Card with completed Time Out
      const cardDataUrl = await generateDigitalCardCanvas(updatedRecord, config);
      updatedRecord.digitalCardBase64 = cardDataUrl;

      // Save locally
      saveAttendanceRecord(updatedRecord);
      refreshRecords();
      setActiveSessionRecord(updatedRecord);

      // Sync updated checkout to Google Apps Script
      await syncRecordToGoogleDriveAndSheets(updatedRecord, config).catch(() => {});
      timeInSyncPromiseRef.current = null;

      setToastMessage(
        `✓ Time Out recorded for ${updatedRecord.studentName}! Total stay: ${durationMinutes} mins.`
      );
      setTimeout(() => setToastMessage(null), 6000);
    } catch (err) {
      console.error('Error during checkout:', err);
      alert('Failed to process checkout. Please try again.');
    } finally {
      setIsCheckingOut(false);
      isCheckingOutRef.current = false;
    }
  };

  // Start a new student entry
  const handleNewStudentEntry = () => {
    setActiveSessionRecord(null);
  };

  const isAtLibraryConfirmed =
    librarianOverrideOnSite || (location && location.isWithinGeofence);

  return (
    <div className="max-w-md sm:max-w-xl mx-auto w-full px-4 py-4 space-y-4">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white px-3.5 py-2.5 rounded-2xl shadow-lg flex items-center justify-between text-xs font-semibold animate-fade-in border border-emerald-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-white/80 hover:text-white ml-2">
            ✕
          </button>
        </div>
      )}



      {/* VIEW 1: ACTIVE STUDENT SESSION & DIGITAL CARD VIEW */}
      {/* After confirmation, the Student Digital Pass is the hero centerpiece with a single Time Out button */}
      {activeSessionRecord ? (
        <div className="space-y-4 animate-fade-in">
          {/* Formal Digital Library Card Display */}
          <DigitalLibraryCard
            record={activeSessionRecord}
          />

          {/* CRITICAL: Sabi ng user: after ma confirm, ONLY Time Out button nalang, nothing else na ibang button pa */}
          {activeSessionRecord.status === 'active' && (
            <div className="pt-2">
              <button
                type="button"
                onClick={handleConfirmTimeOut}
                disabled={isCheckingOut}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 active:scale-[0.99] text-white font-extrabold text-sm shadow-xl shadow-rose-950/25 transition-all flex items-center justify-center gap-2.5 border border-rose-500/30"
              >
                {isCheckingOut ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Recording Time Out...</span>
                  </>
                ) : (
                  <>
                    <LogOut className="w-5 h-5 stroke-[2.5]" />
                    <span>TIME OUT &amp; END SESSION</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* If Completed: Option to Log In Next Student */}
          {activeSessionRecord.status === 'completed' && (
            <button
              type="button"
              onClick={handleNewStudentEntry}
              className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <UserPlus className="w-4 h-4" />
              <span>Log In Next Student (New Entry)</span>
            </button>
          )}
        </div>
      ) : (
        /* VIEW 2: TIME IN ENTRY FORM - ULTRA MODERN AND CLEAN */
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-5 shadow-xl shadow-slate-200/50 space-y-4 animate-fade-in"
        >
          {/* Header Title */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                <LogIn className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-sm font-extrabold text-slate-900 leading-tight">
                  Student Library Attendance
                </h2>
                <p className="text-[11px] text-slate-500">
                  Fill in verification details to issue library card
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 uppercase tracking-wider">
              Time In
            </span>
          </div>

          {/* Student Fields (NO PLACEHOLDERS as requested) */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-slate-400" />
                <span>Student ID Number</span>
                <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Student Full Name</span>
                <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition shadow-2xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                  <span>Section</span>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={gradeSection}
                  onChange={(e) => setGradeSection(e.target.value.toUpperCase())}
                  className="w-full px-3.5 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition shadow-2xs uppercase"
                  style={{ textTransform: 'uppercase' }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-slate-400" />
                  <span>Purpose</span>
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value as AttendancePurpose)}
                  className="w-full px-3.5 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition shadow-2xs"
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
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                <span>Book Title / Reading Material</span>
                <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition shadow-2xs"
              />
            </div>
          </div>

          {/* Modern Photo Capture Cards */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            {/* Selfie */}
            <div
              onClick={() => selfieInputRef.current?.click()}
              className="p-3 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/70 hover:bg-slate-100 hover:border-slate-300 active:scale-[0.99] cursor-pointer transition flex flex-col items-center justify-center text-center aspect-[4/3] relative overflow-hidden group shadow-2xs"
            >
              {isCompressingSelfie ? (
                <div className="flex flex-col items-center justify-center text-slate-600 gap-1 text-[11px] font-semibold">
                  <RefreshCw className="w-5 h-5 animate-spin text-emerald-600" />
                  <span>Processing...</span>
                </div>
              ) : selfiePhoto ? (
                <>
                  <img src={selfiePhoto} alt="Student Portrait" className="w-full h-full object-cover rounded-xl" />
                  <span className="absolute bottom-2 right-2 bg-slate-900/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs shadow">
                    ✓ Retake
                  </span>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-1.5 group-hover:scale-105 transition shadow-2xs">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Student Photo</span>
                  <span className="text-[10px] text-slate-400">Tap to capture selfie</span>
                </>
              )}
            </div>

            {/* Book Photo */}
            <div
              onClick={() => bookInputRef.current?.click()}
              className="p-3 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/70 hover:bg-slate-100 hover:border-slate-300 active:scale-[0.99] cursor-pointer transition flex flex-col items-center justify-center text-center aspect-[4/3] relative overflow-hidden group shadow-2xs"
            >
              {isCompressingBook ? (
                <div className="flex flex-col items-center justify-center text-slate-600 gap-1 text-[11px] font-semibold">
                  <RefreshCw className="w-5 h-5 animate-spin text-slate-700" />
                  <span>Processing...</span>
                </div>
              ) : bookPhoto ? (
                <>
                  <img src={bookPhoto} alt="Reading Material" className="w-full h-full object-cover rounded-xl" />
                  <span className="absolute bottom-2 right-2 bg-slate-900/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs shadow">
                    ✓ Retake
                  </span>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-1.5 group-hover:scale-105 transition shadow-2xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Book Cover</span>
                  <span className="text-[10px] text-slate-400">Tap to capture book</span>
                </>
              )}
            </div>

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

          {/* Librarian Name & Signature Section */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Librarian Full Name</span>
                <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={librarianName}
                onChange={(e) => setLibrarianName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition shadow-2xs"
              />
            </div>

            {/* Signature Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <SignaturePenIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>Librarian Touch Signature</span>
                  <span className="text-rose-500">*</span>
                </label>
                {librarianSignature && !isSignatureExpanded && (
                  <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" /> Verified Signature
                  </span>
                )}
              </div>

              {!isSignatureExpanded && !librarianSignature && (
                <button
                  type="button"
                  onClick={() => setIsSignatureExpanded(true)}
                  className="w-full py-3.5 px-4 rounded-xl border border-slate-300 bg-slate-50/80 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition flex items-center justify-center gap-2"
                >
                  <SignaturePenIcon className="w-4 h-4 text-slate-600" />
                  <span>Librarian: Tap here to sign in black ink</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
              )}

              {!isSignatureExpanded && librarianSignature && (
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-32 relative flex items-center justify-center">
                      <img
                        src={librarianSignature}
                        alt="Signature"
                        className="h-full w-full object-contain pointer-events-none"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-800">
                      Signed by {librarianName && librarianName !== 'Head Librarian' ? librarianName : 'Librarian'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSignatureExpanded(true)}
                    className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition shadow-2xs"
                  >
                    Re-sign
                  </button>
                </div>
              )}

              {/* EXPANDED CANVAS SIGNATURE PAD (Accurate 1:1 Desktop Coordinates) */}
              {isSignatureExpanded && (
                <div className="bg-slate-50 border border-slate-300 rounded-2xl p-3.5 space-y-2.5 animate-fade-in shadow-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-600 font-medium">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <SignaturePenIcon className="w-3.5 h-3.5 text-slate-800" />
                      Sign directly on line (Black Ink):
                    </span>
                    <button
                      type="button"
                      onClick={handleResetSignature}
                      className="text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 text-[11px]"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Clear
                    </button>
                  </div>

                  {/* Touch/Mouse Canvas Container with HTML/CSS Baseline Guide */}
                  <div className="relative bg-white rounded-xl border border-slate-300 overflow-hidden shadow-inner">
                    {/* Visual dashed baseline guide (Rendered via HTML/CSS, NOT written into canvas bitmap) */}
                    <div className="absolute left-6 right-6 bottom-7 border-b border-dashed border-slate-300 pointer-events-none flex items-end justify-between pb-1 select-none">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        Authorized Signature Line
                      </span>
                      <span className="text-[10px] text-slate-300 font-mono">✕</span>
                    </div>

                    <canvas
                      ref={signatureCanvasRef}
                      onPointerDown={startDrawing}
                      onPointerMove={draw}
                      onPointerUp={stopDrawing}
                      onPointerCancel={stopDrawing}
                      className="relative z-10 w-full h-36 bg-transparent touch-none cursor-crosshair block"
                      style={{ touchAction: 'none' }}
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={handleResetSignature}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl transition"
                    >
                      Clear
                    </button>

                    <button
                      type="button"
                      onClick={handleDoneSignature}
                      className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow-xs flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Done Signing
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Subtle Passive Status & Optional Librarian Override */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-1">
            <span className="flex items-center gap-1.5 text-[11px]">
              <span className={`w-1.5 h-1.5 rounded-full ${isAtLibraryConfirmed ? 'bg-emerald-500' : 'bg-slate-300'}`} />
              <span className="text-slate-500 font-medium">
                {isAtLibraryConfirmed ? 'Campus Library Location Verified' : 'GPS Passive Mode'}
              </span>
            </span>
            {!isAtLibraryConfirmed && (
              <button
                type="button"
                onClick={() => {
                  setLibrarianOverrideOnSite(true);
                  setToastMessage('✓ Librarian on-site verification activated.');
                  setTimeout(() => setToastMessage(null), 3000);
                }}
                className="text-slate-400 hover:text-slate-700 underline font-medium text-[10px]"
              >
                Librarian On-Site Override
              </button>
            )}
          </div>

          {/* SUBMIT BUTTON -> Issues Card & Transitions to Single Time Out View */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white font-bold text-sm transition shadow-lg shadow-slate-900/15 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                <span>Recording Time In &amp; Generating Pass...</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Confirm Time In &amp; Issue Library Pass</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
