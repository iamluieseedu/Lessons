import { LibraryAttendanceRecord, LibraryConfig } from '@/types/library';
import { DEFAULT_LIBRARY_CONFIG } from '@/utils/geolocation';
import { CONFIG } from '@/config';

const STORAGE_KEY_RECORDS = 'library_attendance_records_v1';
const STORAGE_KEY_CONFIG = 'library_system_config_v1';

const DEFAULT_WEBHOOK =
  (CONFIG as any).libraryWebhookUrl || DEFAULT_LIBRARY_CONFIG.webhookUrl;

export function getLibraryConfig(): LibraryConfig {
  if (typeof window === 'undefined') {
    return {
      ...DEFAULT_LIBRARY_CONFIG,
      webhookUrl: DEFAULT_WEBHOOK,
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Auto-update if old outdated webhook was cached
      const isOutdated =
        !parsed.webhookUrl ||
        parsed.webhookUrl.includes('AKfycbxDqFEe9zV720wrMho') ||
        parsed.webhookUrl.includes('AKfycbxsXk0_2OnQ_7cy7keJhQBIstZ3YzNPQ0zNVvIXo7tHEZo_OKEdTQaVs4eXtWPXrkHkQA') ||
        parsed.webhookUrl.includes('AKfycbxELtqYLe');
      const effectiveWebhook = isOutdated ? DEFAULT_WEBHOOK : parsed.webhookUrl;
      const isOldCoord =
        !parsed.libraryLatitude ||
        parsed.libraryLatitude === 14.339101 ||
        parsed.libraryLatitude === 14.328227 ||
        Math.abs(parsed.libraryLatitude - 14.339101) < 0.0001;
      const effectiveLat = isOldCoord
        ? DEFAULT_LIBRARY_CONFIG.libraryLatitude
        : parsed.libraryLatitude;
      const effectiveLon = isOldCoord
        ? DEFAULT_LIBRARY_CONFIG.libraryLongitude
        : parsed.libraryLongitude;
      const effectiveRadius =
        parsed.geofenceRadiusMeters === 60
          ? DEFAULT_LIBRARY_CONFIG.geofenceRadiusMeters
          : parsed.geofenceRadiusMeters || 30;

      const effectiveLibrarianName =
        parsed.librarianDefaultName === 'Head Librarian'
          ? ''
          : parsed.librarianDefaultName || '';

      return {
        ...DEFAULT_LIBRARY_CONFIG,
        ...parsed,
        libraryLatitude: effectiveLat,
        libraryLongitude: effectiveLon,
        geofenceRadiusMeters: effectiveRadius,
        webhookUrl: effectiveWebhook,
        librarianDefaultName: effectiveLibrarianName,
      };
    }
  } catch (e) {
    console.error('Failed to parse library config from storage:', e);
  }

  return {
    ...DEFAULT_LIBRARY_CONFIG,
    webhookUrl: DEFAULT_WEBHOOK,
  };
}

export function saveLibraryConfig(config: LibraryConfig): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save library config to storage:', e);
  }
}

export function getAttendanceRecords(): LibraryAttendanceRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RECORDS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to parse attendance records:', e);
  }
  return [];
}

export function saveAttendanceRecord(record: LibraryAttendanceRecord): LibraryAttendanceRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const current = getAttendanceRecords();
    const existingIndex = current.findIndex((r) => r.id === record.id);
    let updated: LibraryAttendanceRecord[];

    if (existingIndex >= 0) {
      updated = [...current];
      updated[existingIndex] = record;
    } else {
      // Double entry guard: prevent duplicate active record for the same student
      if (record.status === 'active') {
        const activeDuplicate = current.find(
          (r) =>
            r.status === 'active' &&
            r.studentId.trim().toLowerCase() === record.studentId.trim().toLowerCase()
        );
        if (activeDuplicate) {
          console.warn('Prevented duplicate active attendance entry for:', record.studentId);
          return current;
        }
      }
      updated = [record, ...current];
    }

    // Keep max 20 records in client cache
    updated = updated.slice(0, 20);

    // Sanitize records for localStorage to prevent iOS Safari 5MB QuotaExceededError
    // Strip generated card base64 from stored history (it is rendered on-the-fly)
    const sanitized = updated.map((r) => ({
      ...r,
      digitalCardBase64: '',
    }));

    try {
      localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(sanitized));
    } catch (quotaErr) {
      // If quota exceeded (iOS Safari), strip all images and keep only metadata
      const lightRecords = sanitized.slice(0, 10).map((r) => ({
        ...r,
        selfiePhotoBase64: '',
        bookPhotoBase64: '',
        librarianSignatureBase64: '',
        digitalCardBase64: '',
      }));
      try {
        localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(lightRecords));
      } catch (e2) {}
    }

    return updated;
  } catch (e) {
    return [];
  }
}

export function deleteAttendanceRecord(id: string): LibraryAttendanceRecord[] {
  if (typeof window === 'undefined') return [];
  try {
    const current = getAttendanceRecords();
    const filtered = current.filter((r) => r.id !== id);
    localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(filtered));
    return filtered;
  } catch (e) {
    console.error('Failed to delete record:', e);
    return [];
  }
}

const STORAGE_KEY_SESSIONS = 'library_visitor_sessions_v1';
const STORAGE_KEY_PAGE_VIEWS = 'library_page_views_count_v1';

/**
 * Fetches the client's public IP address via secure public IP API.
 */
export async function fetchClientIpAddress(): Promise<string> {
  if (typeof window === 'undefined') return '127.0.0.1';
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    if (res.ok) {
      const data = await res.json();
      if (data && data.ip) return data.ip;
    }
  } catch (e) {
    try {
      const res2 = await fetch('https://api64.ipify.org?format=json');
      if (res2.ok) {
        const data2 = await res2.json();
        if (data2 && data2.ip) return data2.ip;
      }
    } catch (err) {}
  }
  return 'Protected / Local';
}

export function getTotalPageViews(): number {
  if (typeof window === 'undefined') return 0;
  return parseInt(localStorage.getItem(STORAGE_KEY_PAGE_VIEWS) || '0', 10);
}

export function incrementPageViews(): number {
  if (typeof window === 'undefined') return 0;
  const current = getTotalPageViews() + 1;
  localStorage.setItem(STORAGE_KEY_PAGE_VIEWS, current.toString());
  return current;
}

export function recordVisitorSession(
  ip: string,
  location: any,
  studentId?: string,
  studentName?: string
): any[] {
  if (typeof window === 'undefined') return [];
  try {
    const now = Date.now();
    const raw = localStorage.getItem(STORAGE_KEY_SESSIONS);
    let sessions: any[] = raw ? JSON.parse(raw) : [];

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const deviceType = isMobile ? 'Mobile Phone' : 'Desktop / PC';

    const existingIndex = sessions.findIndex(
      (s) => (s.ipAddress === ip && ip !== 'Protected / Local') || (studentId && s.studentId === studentId)
    );

    const newSession = {
      id: existingIndex >= 0 ? sessions[existingIndex].id : `VISIT-${now.toString(36)}`,
      ipAddress: ip,
      deviceType,
      timestamp: existingIndex >= 0 ? sessions[existingIndex].timestamp : now,
      lastActive: now,
      latitude: location?.latitude || 0,
      longitude: location?.longitude || 0,
      distanceMeters: location?.distanceFromLibraryMeters || 0,
      isAtLibrary: Boolean(location?.isWithinGeofence),
      studentId: studentId || (existingIndex >= 0 ? sessions[existingIndex].studentId : ''),
      studentName: studentName || (existingIndex >= 0 ? sessions[existingIndex].studentName : ''),
    };

    if (existingIndex >= 0) {
      sessions[existingIndex] = newSession;
    } else {
      sessions = [newSession, ...sessions];
    }

    sessions = sessions.slice(0, 50);
    try {
      localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(sessions));
    } catch (quotaErr) {
      try {
        localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(sessions.slice(0, 10)));
      } catch (e2) {}
    }

    return sessions;
  } catch (e) {
    return [];
  }
}

export function getVisitorSessions(): any[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SESSIONS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
}

/**
 * Fetches live synchronized records from Google Sheets Cloud or local cache
 */
export async function fetchLiveAttendanceRecords(config?: LibraryConfig): Promise<{
  records: LibraryAttendanceRecord[];
  visitorSessions: any[];
  pageViews: number;
}> {
  const currentConfig = config || getLibraryConfig();
  const localRecords = getAttendanceRecords();
  const localSessions = getVisitorSessions();
  const pageViews = getTotalPageViews();

  if (currentConfig.webhookUrl) {
    try {
      const separator = currentConfig.webhookUrl.includes('?') ? '&' : '?';
      const fetchUrl = `${currentConfig.webhookUrl}${separator}action=get_records`;
      const res = await fetch(fetchUrl);
      if (res.ok) {
        const data = await res.json();
        if (data && data.status === 'success' && Array.isArray(data.records)) {
          const combined = [...data.records];
          for (const locRec of localRecords) {
            if (!combined.some((r) => r.id === locRec.id)) {
              combined.push(locRec);
            }
          }
          return {
            records: combined,
            visitorSessions: localSessions,
            pageViews,
          };
        }
      }
    } catch (err) {
      // Offline fallback
    }
  }

  return {
    records: localRecords,
    visitorSessions: localSessions,
    pageViews,
  };
}


/**
 * Sends attendance log and base64 images directly to Google Apps Script Webhook.
 * Google Apps Script saves the images directly to Google Drive folders and appends rows to Google Sheets.
 */
export async function syncRecordToGoogleDriveAndSheets(
  record: LibraryAttendanceRecord,
  config: LibraryConfig
): Promise<{ success: boolean; message: string; driveUrls?: Record<string, string> }> {
  if (!config.webhookUrl) {
    return { success: false, message: 'Google Apps Script Webhook URL is not configured.' };
  }

  const isTimeOut = record.status === 'completed' && Boolean(record.timeOut);
  const payload = {
    action: isTimeOut ? 'time_out' : 'library_attendance_sync',
    id: record.id,
    studentId: record.studentId,
    studentName: record.studentName,
    gradeSection: record.gradeSection,
    section: record.gradeSection,
    purpose: record.purpose,
    bookTitle: record.bookTitle,
    bookAuthorOrCallNo: record.bookAuthorOrCallNo || '',
    timeIn: record.timeIn,
    timeOut: record.timeOut || '',
    durationMinutes: record.durationMinutes || 0,
    status: record.status,
    locationStatus: record.locationIn.isWithinGeofence
      ? `VERIFIED INSIDE (${record.locationIn.distanceFromLibraryMeters}m)`
      : `OUTSIDE PERIMETER (${record.locationIn.distanceFromLibraryMeters}m)`,
    coordinatesIn: `${record.locationIn.latitude.toFixed(6)}, ${record.locationIn.longitude.toFixed(6)}`,
    gpsAccuracy: `±${record.locationIn.accuracyMeters}m`,
    ipAddress: record.ipAddress || '',
    librarianName:
      record.librarianName && record.librarianName !== 'Head Librarian'
        ? record.librarianName
        : '',
    // Base64 Images: Only upload selfie, book, and signature during initial Time In
    // During Time Out, these are already stored in Google Drive; omitting them prevents duplicate uploads!
    selfiePhotoBase64: isTimeOut ? '' : (record.selfiePhotoBase64 || ''),
    bookPhotoBase64: isTimeOut ? '' : (record.bookPhotoBase64 || ''),
    librarianSignatureBase64: isTimeOut ? '' : (record.librarianSignatureBase64 || ''),
    digitalCardBase64: record.digitalCardBase64 || '',
  };

  try {
    // We send payload as text/plain to avoid CORS preflight issues with Google Apps Script
    await fetch(config.webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return {
      success: true,
      message: 'Log and media successfully queued to Google Drive and Google Sheets!',
    };
  } catch (error) {
    console.error('Error syncing to Google Apps Script:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to reach Google Apps Script webhook.',
    };
  }
}

/**
 * Exports all local records into a downloadable CSV file for the Librarian.
 */
export function exportAttendanceToCSV(records: LibraryAttendanceRecord[]): void {
  if (records.length === 0) return;

  const headers = [
    'Record ID',
    'Student ID',
    'Student Name',
    'Section',
    'Purpose',
    'Book Title / Material',
    'Book Call No',
    'Status',
    'Time In',
    'Time Out',
    'Duration (Minutes)',
    'GPS Verified Inside',
    'Distance from Library',
    'Librarian Signature Present',
    'Verified By',
  ];

  const rows = records.map((r) => [
    `"${r.id}"`,
    `"${r.studentId}"`,
    `"${r.studentName.replace(/"/g, '""')}"`,
    `"${r.gradeSection.replace(/"/g, '""')}"`,
    `"${r.purpose}"`,
    `"${r.bookTitle.replace(/"/g, '""')}"`,
    `"${(r.bookAuthorOrCallNo || '').replace(/"/g, '""')}"`,
    `"${r.status}"`,
    `"${new Date(r.timeIn).toLocaleString()}"`,
    `"${r.timeOut ? new Date(r.timeOut).toLocaleString() : 'N/A'}"`,
    r.durationMinutes ?? 'N/A',
    r.locationIn.isWithinGeofence ? 'YES' : 'NO',
    `"${r.locationIn.distanceFromLibraryMeters}m"`,
    r.librarianSignatureBase64 ? 'YES' : 'NO',
    `"${(r.librarianName || '').replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute(
    'download',
    `library_attendance_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generates an official, beautiful Digitalized Library Card as a high-resolution Base64 PNG.
 */
export async function generateDigitalCardCanvas(
  record: LibraryAttendanceRecord,
  config: LibraryConfig
): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      resolve('');
      return;
    }

    // Background: Pure White Card
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(0, 0, 800, 1000, 24);
    ctx.fill();

    // Subtle Outer Border
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#e2e8f0';
    ctx.stroke();

    // Top Header Banner (Formal Institutional Deep Slate / Navy)
    const bannerGrad = ctx.createLinearGradient(0, 0, 800, 140);
    bannerGrad.addColorStop(0, '#0f172a'); // Deep Slate
    bannerGrad.addColorStop(1, '#1e293b'); // Navy Slate
    ctx.fillStyle = bannerGrad;
    ctx.beginPath();
    ctx.roundRect(16, 16, 768, 125, [16, 16, 8, 8]);
    ctx.fill();

    // Formal Emerald Accent Line
    ctx.fillStyle = '#059669';
    ctx.fillRect(16, 137, 768, 4);

    // School / Library Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px "Times New Roman", Georgia, serif';
    ctx.fillText(`${config.libraryName.toUpperCase()}`, 40, 62);

    ctx.font = 'bold 12px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('STUDENT LIBRARY ATTENDANCE & BORROWING RECORD', 40, 92);

    // Formal Pass Identification Strip (Right header - NO GPS approved)
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(550, 40, 210, 68, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`PASS ID: #${record.id.slice(-7).toUpperCase()}`, 745, 65);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '11px sans-serif';
    ctx.fillText(`DATE: ${new Date(record.timeIn).toLocaleDateString()}`, 745, 88);
    ctx.textAlign = 'left';

    // Helper to draw an image safely onto canvas
    const drawImageAsync = (dataUrl: string, x: number, y: number, w: number, h: number, radius = 8) => {
      return new Promise<void>((imgResolve) => {
        if (!dataUrl) {
          ctx.fillStyle = '#f8fafc';
          ctx.strokeStyle = '#e2e8f0';
          ctx.beginPath();
          ctx.roundRect(x, y, w, h, radius);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#94a3b8';
          ctx.font = '13px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('No Image Provided', x + w / 2, y + h / 2);
          ctx.textAlign = 'left';
          imgResolve();
          return;
        }
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(x, y, w, h, radius);
          ctx.clip();
          ctx.drawImage(img, x, y, w, h);
          ctx.restore();
          // Frame border
          ctx.strokeStyle = '#cbd5e1';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(x, y, w, h, radius);
          ctx.stroke();
          imgResolve();
        };
        img.onerror = () => {
          ctx.fillStyle = '#f8fafc';
          ctx.beginPath();
          ctx.roundRect(x, y, w, h, radius);
          ctx.fill();
          imgResolve();
        };
        img.src = dataUrl;
      });
    };

    // Photos: Framed Formally
    Promise.all([
      // Student Portrait
      drawImageAsync(record.selfiePhotoBase64, 40, 165, 200, 235, 8),
      // Book Cover
      drawImageAsync(record.bookPhotoBase64, 260, 165, 200, 235, 8),
    ]).then(() => {
      // Photo Labels (Clean formal institutional tags)
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('STUDENT IDENTIFICATION', 40, 420);
      ctx.fillText('BORROWED MATERIAL / BOOK', 260, 420);

      // Student Info Panel (Right side)
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.roundRect(480, 165, 280, 235, 8);
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('STUDENT RECORD', 500, 195);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 18px "Times New Roman", Georgia, serif';
      ctx.fillText(record.studentName, 500, 230);

      ctx.fillStyle = '#334155';
      ctx.font = '13px sans-serif';
      ctx.fillText(`Student No: ${record.studentId}`, 500, 265);
      ctx.fillText(`Section / Yr: ${record.gradeSection}`, 500, 295);
      ctx.fillText(`Purpose: ${record.purpose.toUpperCase()}`, 500, 325);

      // Formal Status Badge
      const isComplete = record.status === 'completed';
      ctx.fillStyle = isComplete ? '#065f46' : '#1e3a8a';
      ctx.beginPath();
      ctx.roundRect(500, 350, 220, 28, 4);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(isComplete ? 'STATUS: SESSION COMPLETED' : 'STATUS: ACTIVE IN LIBRARY', 610, 368);
      ctx.textAlign = 'left';

      // Book Details Section
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.roundRect(40, 450, 720, 85, 8);
      ctx.fill();
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();

      ctx.fillStyle = '#475569';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('READING MATERIAL & RESOURCE DETAILS', 60, 475);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 17px sans-serif';
      ctx.fillText(record.bookTitle, 60, 505);

      if (record.bookAuthorOrCallNo) {
        ctx.fillStyle = '#64748b';
        ctx.font = '12px monospace';
        ctx.fillText(`Call No: ${record.bookAuthorOrCallNo}`, 500, 505);
      }

      // Attendance Timestamps (Formal Academic Layout - NO GPS TEXT)
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.roundRect(40, 555, 720, 150, 8);
      ctx.fill();
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();

      // Time In
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('TIME IN', 60, 585);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 17px sans-serif';
      ctx.fillText(new Date(record.timeIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 60, 612);
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText(new Date(record.timeIn).toLocaleDateString(), 60, 634);

      // Time Out
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('TIME OUT', 310, 585);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 17px sans-serif';
      ctx.fillText(
        record.timeOut && record.status === 'completed'
          ? new Date(record.timeOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          : 'Pending Time Out',
        310,
        612
      );
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText(
        record.timeOut && record.status === 'completed'
          ? `${record.durationMinutes || 0} minutes logged`
          : 'Active Session',
        310,
        634
      );

      // Session Duration & Verification
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('TOTAL DURATION', 540, 585);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 17px sans-serif';
      ctx.fillText(
        record.status === 'completed'
          ? `${record.durationMinutes || 0} Mins`
          : 'In Progress',
        540,
        612
      );
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#059669';
      ctx.fillText('✓ On-Premises Attendance', 540, 634);

      // Facility line (Clean formal facility note, NO GPS coordinates)
      ctx.fillStyle = '#64748b';
      ctx.font = '11px sans-serif';
      ctx.fillText('Facility: Campus Library Reading & Circulation Hall • Verified Attendance', 60, 685);

      // Librarian Endorsement Box
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.roundRect(40, 725, 720, 195, 8);
      ctx.fill();
      ctx.strokeStyle = '#cbd5e1';
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('LIBRARIAN VERIFICATION & ENDORSEMENT', 60, 755);

      if (record.librarianSignatureBase64) {
        const sigImg = new Image();
        sigImg.onload = () => {
          // Draw clean dashed baseline directly on endorsement background
          ctx.save();
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(60, 865);
          ctx.lineTo(360, 865);
          ctx.stroke();
          ctx.restore();

          ctx.fillStyle = '#94a3b8';
          ctx.font = '10px sans-serif';
          ctx.fillText('Authorized Signature Line', 60, 882);

          // Draw transparent ink signature directly over baseline
          ctx.drawImage(sigImg, 60, 770, 300, 92);

          const verifiedByText =
            record.librarianName && record.librarianName !== 'Head Librarian'
              ? `Verified by: ${record.librarianName}`
              : 'Verified: Authorized Librarian';
          ctx.fillText(verifiedByText, 60, 902);

          ctx.fillStyle = '#64748b';
          ctx.font = '11px monospace';
          ctx.fillText(`TRANSACTION REF: ${record.id}`, 460, 902);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Student Library Attendance Card Pass • Valid for Campus Records', 400, 965);

          resolve(canvas.toDataURL('image/png'));
        };
        sigImg.onerror = () => {
          resolve(canvas.toDataURL('image/png'));
        };
        sigImg.src = record.librarianSignatureBase64;
      } else {
        ctx.fillStyle = '#94a3b8';
        ctx.font = 'italic 14px sans-serif';
        ctx.fillText('[ Signed by Librarian In-Charge ]', 60, 810);

        const verifiedByText =
          record.librarianName && record.librarianName !== 'Head Librarian'
            ? `Verified by: ${record.librarianName}`
            : 'Verified: Authorized Librarian';
        ctx.fillText(verifiedByText, 60, 902);

        ctx.fillStyle = '#64748b';
        ctx.font = '11px monospace';
        ctx.fillText(`TRANSACTION REF: ${record.id}`, 460, 902);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Student Library Attendance Card Pass • Valid for Campus Records', 400, 965);

        resolve(canvas.toDataURL('image/png'));
      }
    });
  });
}
