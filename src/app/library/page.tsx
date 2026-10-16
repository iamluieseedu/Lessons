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
  Lock,
} from 'lucide-react';
import Link from 'next/link';

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
  fetchLiveAttendanceRecords,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Direct Native Mobile Camera States & Refs
  const selfieInputRef = useRef<HTMLInputElement | null>(null);
  const [isCompressingSelfie, setIsCompressingSelfie] = useState(false);

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

  // Departure Book Verification States & Refs (Captured at Time Out)
  const [timeoutBookPhoto, setTimeoutBookPhoto] = useState<string>('');
  const [isCompressingTimeoutBook, setIsCompressingTimeoutBook] = useState(false);
  const timeoutBookInputRef = useRef<HTMLInputElement | null>(null);

  const handleTimeoutBookFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsCompressingTimeoutBook(true);
    try {
      const compressed = await compressImageFile(file, 640, 0.72);
      setTimeoutBookPhoto(compressed);
    } catch (err) {
      console.warn('Timeout book compression error:', err);
    } finally {
      setIsCompressingTimeoutBook(false);
      e.target.value = '';
    }
  };

  const refreshRecords = useCallback(() => {
    const all = getAttendanceRecords();
    setRecords(all);

    // Strictly isolate active session to THIS specific device/browser using localStorage
    if (typeof window !== 'undefined') {
      const mySessionId = localStorage.getItem('library_active_session_record_id');
      if (mySessionId) {
        const myActive = all.find((r) => r.id === mySessionId && r.status === 'active');
        if (myActive) {
          setActiveSessionRecord(myActive);
        } else {
          const myCompleted = all.find((r) => r.id === mySessionId && r.status === 'completed');
          if (myCompleted) {
            setActiveSessionRecord(myCompleted);
          } else {
            setActiveSessionRecord(null);
          }
        }
      } else {
        // This device has not logged in: MUST display Time In form, NEVER adopt other devices' sessions!
        setActiveSessionRecord(null);
      }
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
        setToastMessage('✓ Location connected.');
        setTimeout(() => setToastMessage(null), 3000);
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
    }).catch(() => { });

    // Record page view only once per browser session/tab to avoid React StrictMode double-counting
    if (typeof window !== 'undefined' && !sessionStorage.getItem('library_portal_session_visited')) {
      sessionStorage.setItem('library_portal_session_visited', 'true');
      incrementPageViews();
    }

    fetchClientIpAddress().then((ip) => {
      setClientIp(ip);
    });

    // Sync live records from Google Sheets Cloud to restore active session across page reloads (ONLY for this device)
    fetchLiveAttendanceRecords(loadedConfig)
      .then((live) => {
        if (live && live.records && live.records.length > 0) {
          setRecords(live.records);
          if (typeof window !== 'undefined') {
            const mySessionId = localStorage.getItem('library_active_session_record_id');
            if (mySessionId) {
              const myActive = live.records.find((r) => r.id === mySessionId && r.status === 'active');
              if (myActive) {
                setActiveSessionRecord(myActive);
              } else {
                const myCompleted = live.records.find((r) => r.id === mySessionId && r.status === 'completed');
                if (myCompleted) {
                  setActiveSessionRecord(myCompleted);
                }
              }
            }
          }
        }
      })
      .catch(() => {});
  }, [refreshRecords]);

  // Small Embedded Signature Canvas Initialization & DPI Scaling
  const initSmallCanvas = useCallback(() => {
    const canvas = signatureCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 3.5 * dpr;
    ctx.strokeStyle = '#000000'; // Pure black ink

    // If a signature already exists (e.g. from Full Screen mode), render it on small canvas
    if (librarianSignature) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = librarianSignature;
    }
  }, [librarianSignature]);

  useEffect(() => {
    const timer = setTimeout(initSmallCanvas, 60);
    window.addEventListener('resize', initSmallCanvas);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', initSmallCanvas);
    };
  }, [initSmallCanvas]);

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
      } catch (err) { }
      setIsDrawing(false);
      const canvas = signatureCanvasRef.current;
      if (canvas) {
        const sigData = canvas.toDataURL('image/png');
        setLibrarianSignature(sigData);
        setHasDrawnOnCanvas(true);
      }
    }
  };

  const handleResetSignature = () => {
    const canvas = signatureCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    setHasDrawnOnCanvas(false);
    setLibrarianSignature('');
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
      } catch (err) { }
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
    setHasDrawnOnCanvas(true);
    setIsFullScreenSignature(false);

    // Sync onto small embedded canvas
    if (signatureCanvasRef.current) {
      const smallCanvas = signatureCanvasRef.current;
      const ctx = smallCanvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, smallCanvas.width, smallCanvas.height);
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, smallCanvas.width, smallCanvas.height);
        };
        img.src = sigData;
      }
    }

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
      alert('Please take a quick selfie to verify attendance.');
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
      if (typeof window !== 'undefined') {
        localStorage.setItem('library_active_session_record_id', existingActive.id);
      }
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

      // Passive Geofence capture: Captures real GPS coordinates so Admin knows location without blocking student
      const currentLocation = activeLoc || location || {
        latitude: 0,
        longitude: 0,
        accuracyMeters: 0,
        isWithinGeofence: false,
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
        bookPhotoBase64: '', // Book photo is verified and captured upon Time Out!
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

      // Bind active session exclusively to THIS browser/device
      if (typeof window !== 'undefined') {
        localStorage.setItem('library_active_session_record_id', newRecord.id);
      }
      setActiveSessionRecord(newRecord);
      setRecords(getAttendanceRecords());

      // Reset entry fields for next session
      setStudentId('');
      setStudentName('');
      setGradeSection('');
      setBookTitle('');
      setSelfiePhoto('');
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

  // Confirm Time Out (When student leaves - requires departure book photo verification)
  const handleConfirmTimeOut = async () => {
    if (!activeSessionRecord || isCheckingOutRef.current || isCheckingOut) return;

    if (!timeoutBookPhoto && !activeSessionRecord.bookPhotoBase64) {
      alert('Please take or upload a photo of the book you read/borrowed before confirming Time Out.');
      return;
    }

    isCheckingOutRef.current = true;
    setIsCheckingOut(true);
    try {
      // 1. Silent GPS verification for checkout tracking without blocking student
      try {
        const checkoutLoc = await getCurrentGeoLocation(config);
        if (checkoutLoc && checkoutLoc.latitude !== 0) {
          setLocation(checkoutLoc);
        }
      } catch (e) { }

      // If initial Time In is still syncing in background, wait for it so the row exists before checkout!
      if (timeInSyncPromiseRef.current) {
        await timeInSyncPromiseRef.current.catch(() => { });
      }

      const nowIso = new Date().toISOString();
      const diffMs = new Date(nowIso).getTime() - new Date(activeSessionRecord.timeIn).getTime();
      const durationMinutes = Math.max(1, Math.round(diffMs / (1000 * 60)));
      const finalBookPhoto = timeoutBookPhoto || activeSessionRecord.bookPhotoBase64 || '';

      const updatedRecord: LibraryAttendanceRecord = {
        ...activeSessionRecord,
        bookPhotoBase64: finalBookPhoto,
        timeOut: nowIso,
        durationMinutes,
        status: 'completed',
      };

      // Regenerate Card with completed Time Out & verified Departure Book Photo
      const cardDataUrl = await generateDigitalCardCanvas(updatedRecord, config);
      updatedRecord.digitalCardBase64 = cardDataUrl;

      // Save locally & unbind device session
      saveAttendanceRecord(updatedRecord);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('library_active_session_record_id');
      }
      setActiveSessionRecord(updatedRecord);
      setRecords(getAttendanceRecords());

      // Sync updated checkout and departure book photo to Google Apps Script
      const syncResult = await syncRecordToGoogleDriveAndSheets(updatedRecord, config).catch((e) => {
        console.warn('Checkout sync error:', e);
        return { success: false, message: 'Offline/Sync error' };
      });
      timeInSyncPromiseRef.current = null;

      if (syncResult && syncResult.success) {
        setToastMessage(
          `✓ Time Out & Book Photo recorded for ${updatedRecord.studentName}! (${durationMinutes} mins)`
        );
      } else {
        setToastMessage(
          `✓ Time Out recorded locally for ${updatedRecord.studentName}! Total stay: ${durationMinutes} mins.`
        );
      }
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
    if (typeof window !== 'undefined') {
      localStorage.removeItem('library_active_session_record_id');
    }
    setTimeoutBookPhoto('');
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



      {/* Live Status & Library Occupancy Indicator */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-white/80 backdrop-blur-xs border border-emerald-100 rounded-2xl shadow-xs text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-slate-700 font-bold text-[11px]">
            Campus Library System
          </span>
          <span className="text-[10px] text-slate-400 hidden sm:inline">• Live Cloud Synced</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-emerald-600" />
            {records.filter((r) => r.status === 'active').length > 0
              ? `${records.filter((r) => r.status === 'active').length} Active in Library`
              : 'Open for Attendance'}
          </span>
        </div>
      </div>

      {/* VIEW 1: ACTIVE STUDENT SESSION VIEW (Receipt & Time Out only - No downloadable card for students) */}
      {activeSessionRecord ? (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    Active Library Session
                  </h3>
                  <p className="text-[10px] text-slate-500">
                    Attendance Logged &amp; Verified
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                ● In Library
              </span>
            </div>

            {/* Student Details */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2.5 text-xs">
              <div className="flex justify-between items-start gap-2">
                <span className="text-slate-500 font-medium">Student:</span>
                <span className="font-bold text-slate-900 text-right">{activeSessionRecord.studentName}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-slate-500 font-medium">ID &amp; Section:</span>
                <span className="font-mono text-slate-800 text-right">{activeSessionRecord.studentId} • {activeSessionRecord.gradeSection}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-slate-500 font-medium">Book / Material:</span>
                <span className="font-medium text-slate-800 text-right truncate max-w-[180px]">{activeSessionRecord.bookTitle}</span>
              </div>
              <div className="flex justify-between items-center gap-2 pt-2 border-t border-slate-200">
                <span className="text-slate-500 font-medium">Time In:</span>
                <span className="font-bold text-blue-600 font-mono">
                  {new Date(activeSessionRecord.timeIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>

            {activeSessionRecord.status === 'active' ? (
              <div className="space-y-3.5 pt-1">
                {/* Departure Book Photo Verification (Required at Time Out) */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50/70 border border-amber-200 rounded-2xl p-4 space-y-3 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        Departure Book Verification
                      </h4>
                      <p className="text-[10px] text-slate-600">
                        Take a clear photo of your book ({activeSessionRecord.bookTitle}) to complete Time Out
                      </p>
                    </div>
                  </div>

                  {/* Photo Capture / Preview Box */}
                  <div className="relative">
                    {timeoutBookPhoto ? (
                      <div className="relative rounded-xl overflow-hidden border border-emerald-400 bg-white aspect-[4/3] max-h-52 mx-auto shadow-xs">
                        <img
                          src={timeoutBookPhoto}
                          alt="Book verification"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <button
                            type="button"
                            onClick={() => timeoutBookInputRef.current?.click()}
                            className="px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] font-bold backdrop-blur-xs flex items-center gap-1 transition shadow"
                          >
                            <RotateCcw className="w-3 h-3" />
                            Retake
                          </button>
                        </div>
                        <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center gap-1 shadow-xs">
                          <CheckCircle2 className="w-3 h-3" />
                          Book Photo Ready
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => timeoutBookInputRef.current?.click()}
                        className="w-full py-6 border-2 border-dashed border-amber-300 hover:border-amber-400 bg-white/90 hover:bg-white rounded-xl flex flex-col items-center justify-center gap-2 text-slate-700 transition active:scale-[0.99] group shadow-2xs"
                      >
                        {isCompressingTimeoutBook ? (
                          <div className="flex flex-col items-center justify-center gap-1 text-[11px] font-semibold text-slate-600">
                            <RefreshCw className="w-5 h-5 animate-spin text-amber-600" />
                            <span>Processing photo...</span>
                          </div>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-xl bg-amber-100 group-hover:bg-amber-200 text-amber-700 flex items-center justify-center transition">
                              <Camera className="w-5 h-5" />
                            </div>
                            <div className="text-center">
                              <span className="text-xs font-bold text-slate-900 block">
                                Take Photo of Book / Material
                              </span>
                              <span className="text-[10px] text-slate-500">
                                Tap here to open camera or upload photo
                              </span>
                            </div>
                          </>
                        )}
                      </button>
                    )}

                    <input
                      ref={timeoutBookInputRef}
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleTimeoutBookFile}
                      className="hidden"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleConfirmTimeOut}
                  disabled={isCheckingOut || (!timeoutBookPhoto && !activeSessionRecord.bookPhotoBase64)}
                  className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2 ${
                    !timeoutBookPhoto && !activeSessionRecord.bookPhotoBase64
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'
                      : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white active:scale-[0.99] shadow-amber-600/20'
                  }`}
                >
                  {isCheckingOut ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Recording Time Out...</span>
                    </>
                  ) : !timeoutBookPhoto && !activeSessionRecord.bookPhotoBase64 ? (
                    <>
                      <Camera className="w-5 h-5 text-slate-400" />
                      <span>Take Book Photo to Enable Time Out</span>
                    </>
                  ) : (
                    <>
                      <LogOut className="w-5 h-5 stroke-[2.5]" />
                      <span>TIME OUT &amp; EXIT LIBRARY</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleNewStudentEntry}
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-semibold transition"
                >
                  + Log Another Student (New Entry)
                </button>
              </div>
            ) : (
              <div className="space-y-3 pt-1 text-center">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 font-medium">
                  ✓ Time Out Recorded ({activeSessionRecord.durationMinutes || 1} mins). Thank you for visiting!
                </div>
                <button
                  type="button"
                  onClick={handleNewStudentEntry}
                  className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition"
                >
                  Log Another Student Entry
                </button>
              </div>
            )}
          </div>
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
                  autoCapitalize="characters"
                  autoCorrect="off"
                  spellCheck={false}
                  value={gradeSection}
                  onChange={(e) => setGradeSection(e.target.value.toUpperCase())}
                  onInput={(e) => {
                    const target = e.currentTarget;
                    const start = target.selectionStart;
                    const end = target.selectionEnd;
                    const upper = target.value.toUpperCase();
                    if (target.value !== upper) {
                      target.value = upper;
                      if (start !== null && end !== null) {
                        target.setSelectionRange(start, end);
                      }
                    }
                    setGradeSection(upper);
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-50/80 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 tracking-wider focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition shadow-2xs uppercase"
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
                <span>Book Title</span>
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

          {/* Student Selfie Verification (Time In) */}
          <div className="pt-1">
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-emerald-600" />
                <span>Student Face Verification (Selfie)</span>
                <span className="text-rose-500">*</span>
              </span>
              <span className="text-[10px] text-slate-400 font-normal">
                Book photo verified on Time Out
              </span>
            </label>

            <div
              onClick={() => selfieInputRef.current?.click()}
              className="p-3.5 rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50/70 hover:border-emerald-300 active:scale-[0.99] cursor-pointer transition flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-2xs min-h-[140px]"
            >
              {isCompressingSelfie ? (
                <div className="flex flex-col items-center justify-center text-slate-600 gap-1 text-[11px] font-semibold">
                  <RefreshCw className="w-5 h-5 animate-spin text-emerald-600" />
                  <span>Processing selfie...</span>
                </div>
              ) : selfiePhoto ? (
                <div className="relative w-full aspect-[4/3] max-h-56 rounded-xl overflow-hidden border border-emerald-300 bg-white">
                  <img src={selfiePhoto} alt="Student Portrait" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 right-2 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs shadow flex items-center gap-1">
                    <RotateCcw className="w-3 h-3" /> Retake Photo
                  </span>
                  <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Selfie Captured
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-3">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-emerald-200 text-emerald-700 flex items-center justify-center mb-1.5 group-hover:scale-105 transition shadow-xs">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Take Student Selfie</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">
                    Tap to open front camera for instant face verification
                  </span>
                  <span className="mt-2 text-[9px] font-semibold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-md">
                    📖 Book photo will be verified upon departure (Time Out)
                  </span>
                </div>
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

            {/* Signature Section: Embedded Small Box + Full Screen Option */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <SignaturePenIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>Librarian Touch Signature</span>
                  <span className="text-rose-500">*</span>
                </label>

                <div className="flex items-center gap-2">
                  {librarianSignature && (
                    <button
                      type="button"
                      onClick={handleResetSignature}
                      className="text-[11px] text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 transition"
                      title="Clear Signature"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsFullScreenSignature(true)}
                    className="px-2.5 py-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 rounded-lg transition flex items-center gap-1 shadow-2xs"
                    title="Open Fullscreen Signature Pad"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Full Screen</span>
                  </button>
                </div>
              </div>

              {/* Small Embedded Signature Canvas Box */}
              <div className="relative w-full h-36 bg-white border-2 border-slate-200 hover:border-slate-300 focus-within:border-emerald-500 rounded-2xl overflow-hidden shadow-2xs group transition touch-none">
                <canvas
                  ref={signatureCanvasRef}
                  onPointerDown={startDrawing}
                  onPointerMove={draw}
                  onPointerUp={stopDrawing}
                  onPointerCancel={stopDrawing}
                  className="w-full h-full cursor-crosshair block relative z-10 touch-none"
                />

                {/* Subtle Signature Baseline & Guide */}
                <div className="absolute left-4 right-4 bottom-3 border-b border-dashed border-slate-200 pointer-events-none flex items-center justify-between text-[10px] text-slate-400 font-semibold select-none z-0">
                  <span>✕ Sign on line (Finger / Stylus / Mouse)</span>
                  <span className="text-[9px] text-slate-300">Ink: Black</span>
                </div>

                {/* Floating Full Screen Button inside canvas corner */}
                <button
                  type="button"
                  onClick={() => setIsFullScreenSignature(true)}
                  className="absolute top-2 right-2 z-20 px-2 py-1 bg-white/90 hover:bg-white border border-slate-200 text-slate-600 hover:text-emerald-700 rounded-lg text-[10px] font-bold flex items-center gap-1 shadow-2xs transition backdrop-blur-xs"
                  title="If you need more signing space"
                >
                  <Maximize2 className="w-3 h-3 text-emerald-600" />
                  <span>Full Screen</span>
                </button>

                {/* Placeholder Guide when empty */}
                {!librarianSignature && !hasDrawnOnCanvas && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-slate-400 gap-1 z-0">
                    <SignaturePenIcon className="w-5 h-5 text-slate-300" />
                    <span className="text-[11px] font-medium">Draw signature here</span>
                    <span className="text-[9px] text-slate-400">or tap Full Screen if you need more space</span>
                  </div>
                )}
              </div>

              {/* Status Note under signature */}
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] text-slate-400">
                  Puwede mag-sign dito sa maliit, o i-tap ang Full Screen kung mas komportable.
                </span>
                {librarianSignature && (
                  <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> Signature Verified
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Campus Attendance Verification Indicator */}
          <div className="p-3.5 rounded-2xl border bg-emerald-50/80 border-emerald-200 text-emerald-950 transition-all">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600" />
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-emerald-900 block truncate">
                    Campus Attendance Verification Active
                  </span>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">
                    Library Attendance System Ready
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON -> Always enabled when form is filled, never blocked by location range */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-2xl font-bold text-sm transition shadow-lg flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white shadow-slate-900/15 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                <span>Recording Time In...</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4 text-emerald-400" />
                <span>Confirm Time In</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Footer Navigation Strip */}
      <footer className="pt-4 pb-2 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span>Campus Library Attendance System</span>
          <span>•</span>
          <span className="font-mono text-[10px] text-emerald-600">Cloud Synced</span>
        </div>
        <Link
          href="/library/admin"
          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-emerald-700 font-semibold transition py-1 px-2.5 rounded-lg hover:bg-slate-100 border border-transparent hover:border-slate-200"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>Librarian Portal</span>
        </Link>
      </footer>

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
