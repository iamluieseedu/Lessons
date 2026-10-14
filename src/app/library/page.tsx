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
  X,
  Maximize2,
  ShieldAlert,
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

  // Geolocation State with Strict Default Coordinates Enforcement
  const [location, setLocation] = useState<GeoLocationData | null>(null);
  const [isAcquiringLocation, setIsAcquiringLocation] = useState(false);
  const [hasRequestedLocation, setHasRequestedLocation] = useState(false);
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

  // Full Screen Signature Modal State & Canvas Refs
  const [isFullScreenSignature, setIsFullScreenSignature] = useState(false);
  const [isDrawingFS, setIsDrawingFS] = useState(false);
  const [hasDrawnFS, setHasDrawnFS] = useState(false);
  const fullScreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

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

  // Full Screen Signature Initialization & Drawing Engine
  useEffect(() => {
    if (isFullScreenSignature && fullScreenCanvasRef.current) {
      const canvas = fullScreenCanvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.max(1, window.devicePixelRatio || 1);

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 4 * dpr;
      ctx.strokeStyle = '#000000';
      setHasDrawnFS(false);
    }
  }, [isFullScreenSignature]);

  const getFSCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = fullScreenCanvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDrawingFS = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const canvas = fullScreenCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 4 * dpr;
    ctx.strokeStyle = '#000000';

    const { x, y } = getFSCanvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawingFS(true);
    setHasDrawnFS(true);
  };

  const drawFS = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingFS) return;
    const canvas = fullScreenCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getFSCanvasCoords(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawingFS = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDrawingFS) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {}
      setIsDrawingFS(false);
    }
  };

  const handleResetFS = () => {
    const canvas = fullScreenCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawnFS(false);
  };

  const handleExitFS = () => {
    setIsFullScreenSignature(false);
    setIsDrawingFS(false);
  };

  const handleDoneFS = () => {
    if (!hasDrawnFS) {
      alert('Librarian: Please sign on the signature line before tapping Done / Save.');
      return;
    }
    const canvas = fullScreenCanvasRef.current;
    if (!canvas) return;
    const sigData = canvas.toDataURL('image/png');
    setLibrarianSignature(sigData);
    setIsFullScreenSignature(false);
    setToastMessage('✓ Librarian signature saved successfully!');
    setTimeout(() => setToastMessage(null), 3000);
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

      const isAtLibrary = Boolean(activeLoc && activeLoc.isWithinGeofence && activeLoc.latitude !== 0);

      if (!isAtLibrary) {
        if (!activeLoc || activeLoc.latitude === 0) {
          alert(
            '⛔ LOCATION REQUIRED:\n\nPlease allow browser location access so the system can verify you are within the Campus Library perimeter (14.328171, 121.090469).'
          );
        } else {
          alert(
            `⛔ INVALID ENTRY:\n\nYou are outside the Campus Library perimeter (14.328171, 121.090469).\n\nVerification: Red Dot (Outside Perimeter)\nDistance: ${formatDistance(
              activeLoc.distanceFromLibraryMeters
            )} away from campus.\n\nAttendance submission is strictly prohibited outside library grounds.`
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

  const isAtLibraryConfirmed = Boolean(
    location && location.isWithinGeofence && location.latitude !== 0
  );

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

              {!librarianSignature && (
                <button
                  type="button"
                  onClick={() => setIsFullScreenSignature(true)}
                  className="w-full py-4 px-4 rounded-2xl border-2 border-dashed border-emerald-500/40 bg-emerald-50/40 hover:bg-emerald-100/50 hover:border-emerald-500/60 active:scale-[0.99] text-emerald-900 font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2.5 shadow-2xs group"
                >
                  <SignaturePenIcon className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition" />
                  <span>Tap to Sign (Open Full Screen Signature Mode)</span>
                  <Maximize2 className="w-4 h-4 text-emerald-600 ml-1" />
                </button>
              )}

              {librarianSignature && (
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-36 relative flex items-center justify-center bg-white rounded-xl border border-slate-200/90 p-1">
                      <img
                        src={librarianSignature}
                        alt="Signature"
                        className="h-full w-full object-contain pointer-events-none"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        Signed by {librarianName && librarianName !== 'Head Librarian' ? librarianName : 'Librarian'}
                      </span>
                      <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3 stroke-[3]" /> Verified Signature
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setIsFullScreenSignature(true)}
                      className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition shadow-2xs"
                    >
                      Re-sign
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLibrarianSignature('');
                        setHasDrawnFS(false);
                      }}
                      className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-xl transition"
                      title="Clear Signature"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Strict Geolocation Geofence Verification Status Indicator */}
          {(() => {
            const isInsideLibrary = Boolean(location && location.isWithinGeofence && location.latitude !== 0);
            return (
              <div
                className={`p-3.5 rounded-2xl border transition-all ${
                  isInsideLibrary
                    ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50/90 border-rose-200 text-rose-950'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Glowing status dot: Green if inside default coordinates, Red if outside */}
                    <span className="relative flex h-3.5 w-3.5 flex-shrink-0">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          isInsideLibrary ? 'bg-emerald-400' : 'bg-rose-400'
                        }`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-3.5 w-3.5 ${
                          isInsideLibrary ? 'bg-emerald-600' : 'bg-rose-600'
                        }`}
                      />
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs font-extrabold truncate ${
                            isInsideLibrary ? 'text-emerald-900' : 'text-rose-800'
                          }`}
                        >
                          {isInsideLibrary
                            ? 'Verified: Inside Campus Library Grounds'
                            : 'Outside Library Perimeter — Invalid Entry'}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">
                        {location && location.latitude !== 0
                          ? `${formatDistance(location.distanceFromLibraryMeters)} away from default coordinates (14.328171, 121.090469)`
                          : 'Detecting GPS coordinates...'}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => requestEnableGPS(config)}
                    disabled={isAcquiringLocation}
                    className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-[10px] font-bold text-slate-700 transition flex items-center gap-1 flex-shrink-0 shadow-2xs"
                  >
                    <RefreshCw className={`w-3 h-3 ${isAcquiringLocation ? 'animate-spin' : ''}`} />
                    <span>Re-check GPS</span>
                  </button>
                </div>

                {!isInsideLibrary && (
                  <div className="mt-2 pt-2 border-t border-rose-200/70 flex items-start gap-1.5 text-[11px] text-rose-700 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-rose-600" />
                    <span>
                      Attendance is restricted to the campus library grounds. You must be physically inside (default coordinates 14.328171, 121.090469) to verify and issue a pass.
                    </span>
                  </div>
                )}
              </div>
            );
          })()}

          {/* SUBMIT BUTTON -> Strictly blocked as invalid entry when outside default coordinates */}
          {(() => {
            const isInsideLibrary = Boolean(location && location.isWithinGeofence && location.latitude !== 0);
            return (
              <button
                type="submit"
                disabled={isSubmitting || !isInsideLibrary}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-sm transition shadow-lg flex items-center justify-center gap-2 ${
                  !isInsideLibrary
                    ? 'bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-500/40 cursor-not-allowed shadow-none'
                    : 'bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white shadow-slate-900/15'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                    <span>Recording Time In &amp; Generating Pass...</span>
                  </>
                ) : !isInsideLibrary ? (
                  <>
                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                    <span>Outside Library Perimeter — Invalid Entry</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 text-emerald-400" />
                    <span>Confirm Time In &amp; Issue Library Pass</span>
                  </>
                )}
              </button>
            );
          })()}
        </form>
      )}

      {/* FULL SCREEN SIGNATURE MODAL OVERLAY */}
      {isFullScreenSignature && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fade-in select-none">
          {/* Top Bar with Title, Instructions, and Exit (X) Button */}
          <div className="w-full max-w-4xl mx-auto flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <SignaturePenIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-sm sm:text-base">
                  Full Screen Librarian Touch Signature
                </h3>
                <p className="text-slate-400 text-[11px]">
                  Sign your official endorsement in black ink using finger or stylus
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleExitFS}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-bold border border-slate-700"
              title="Exit Full Screen Mode"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Exit</span>
            </button>
          </div>

          {/* Center Canvas Box (Takes full responsive space) */}
          <div className="flex-1 w-full max-w-4xl mx-auto my-3 sm:my-4 bg-white rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-center border-2 border-slate-700">
            {/* Visual dashed signature baseline guide */}
            <div className="absolute left-6 right-6 bottom-10 sm:bottom-14 border-b-2 border-dashed border-slate-300 pointer-events-none flex items-end justify-between pb-1 select-none">
              <span className="text-[11px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
                ✕ Authorized Librarian Signature Line
              </span>
              <span className="text-[11px] text-slate-300 font-mono">Ink: Solid Black</span>
            </div>

            <canvas
              ref={fullScreenCanvasRef}
              onPointerDown={startDrawingFS}
              onPointerMove={drawFS}
              onPointerUp={stopDrawingFS}
              onPointerCancel={stopDrawingFS}
              className="w-full h-full min-h-[260px] sm:min-h-[400px] bg-transparent touch-none cursor-crosshair block relative z-10"
              style={{ touchAction: 'none' }}
            />
          </div>

          {/* Bottom Action Bar: Reset Button, Exit Button, Save/Done Button */}
          <div className="w-full max-w-4xl mx-auto flex items-center justify-between gap-2 sm:gap-4 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleResetFS}
                className="px-3.5 sm:px-4 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-bold text-xs sm:text-sm border border-rose-500/40 transition flex items-center gap-1.5 active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>

              <button
                type="button"
                onClick={handleExitFS}
                className="px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm border border-slate-700 transition flex items-center gap-1.5 active:scale-95"
              >
                <X className="w-4 h-4" />
                <span>Exit</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleDoneFS}
              className="px-5 sm:px-7 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg shadow-emerald-500/30 active:scale-95"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Done / Save Signature</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
