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
      const effectiveWebhook =
        !parsed.webhookUrl || parsed.webhookUrl.includes('AKfycbxDqFEe9zV720wrMho')
          ? DEFAULT_WEBHOOK
          : parsed.webhookUrl;
      return {
        ...DEFAULT_LIBRARY_CONFIG,
        ...parsed,
        webhookUrl: effectiveWebhook,
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
      } catch (e2) {
        // Safe fallback - avoid crashing Next.js
      }
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

  const payload = {
    action: 'library_attendance_sync',
    id: record.id,
    studentId: record.studentId,
    studentName: record.studentName,
    gradeSection: record.gradeSection,
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
    librarianName: record.librarianName || config.librarianDefaultName,
    // Base64 Images for Google Drive saving
    selfiePhotoBase64: record.selfiePhotoBase64 || '',
    bookPhotoBase64: record.bookPhotoBase64 || '',
    librarianSignatureBase64: record.librarianSignatureBase64 || '',
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
    'Grade & Section',
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

    // Top Header Banner (Royal Blue)
    const bannerGrad = ctx.createLinearGradient(0, 0, 800, 140);
    bannerGrad.addColorStop(0, '#2563eb');
    bannerGrad.addColorStop(1, '#1d4ed8');
    ctx.fillStyle = bannerGrad;
    ctx.beginPath();
    ctx.roundRect(16, 16, 768, 120, [16, 16, 8, 8]);
    ctx.fill();

    // School / Library Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText(config.libraryName.toUpperCase(), 40, 65);

    ctx.font = '600 15px sans-serif';
    ctx.fillStyle = '#dbeafe';
    ctx.fillText('OFFICIAL DIGITAL LIBRARY CARD & BORROWING PASS', 40, 95);

    // Verified Stamp Chip
    const isVerified = record.locationIn.isWithinGeofence;
    ctx.fillStyle = isVerified ? '#10b981' : '#f59e0b';
    ctx.beginPath();
    ctx.roundRect(580, 50, 170, 36, 18);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(isVerified ? '✓ GPS VERIFIED' : '⚠ OFF-CAMPUS', 665, 73);
    ctx.textAlign = 'left';

    // Helper to draw an image safely onto canvas
    const drawImageAsync = (dataUrl: string, x: number, y: number, w: number, h: number, radius = 12) => {
      return new Promise<void>((imgResolve) => {
        if (!dataUrl) {
          ctx.fillStyle = '#f1f5f9';
          ctx.beginPath();
          ctx.roundRect(x, y, w, h, radius);
          ctx.fill();
          ctx.fillStyle = '#94a3b8';
          ctx.font = '14px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('No Image', x + w / 2, y + h / 2);
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
          imgResolve();
        };
        img.onerror = () => {
          ctx.fillStyle = '#f1f5f9';
          ctx.beginPath();
          ctx.roundRect(x, y, w, h, radius);
          ctx.fill();
          imgResolve();
        };
        img.src = dataUrl;
      });
    };

    // Card Body Cards (Selfie and Book)
    Promise.all([
      // Student Selfie
      drawImageAsync(record.selfiePhotoBase64, 40, 160, 200, 240, 14),
      // Book Photo
      drawImageAsync(record.bookPhotoBase64, 260, 160, 200, 240, 14),
    ]).then(() => {
      // Photo Labels
      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('STUDENT SELFIE PHOTO', 40, 420);
      ctx.fillText('BORROWED BOOK COVER', 260, 420);

      // Student Info Panel (Right side)
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.roundRect(480, 160, 280, 240, 14);
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();

      ctx.fillStyle = '#2563eb';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('STUDENT DETAILS', 500, 190);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText(record.studentName, 500, 225);

      ctx.fillStyle = '#475569';
      ctx.font = '14px sans-serif';
      ctx.fillText(`ID: ${record.studentId}`, 500, 255);
      ctx.fillText(`Section: ${record.gradeSection}`, 500, 285);
      ctx.fillText(`Purpose: ${record.purpose.toUpperCase()}`, 500, 315);

      // Status Pill
      ctx.fillStyle = record.status === 'completed' ? '#10b981' : '#3b82f6';
      ctx.beginPath();
      ctx.roundRect(500, 340, 150, 30, 6);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('VERIFIED ATTENDANCE', 575, 360);
      ctx.textAlign = 'left';

      // Book Details Strip
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.roundRect(40, 450, 720, 90, 12);
      ctx.fill();
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();

      ctx.fillStyle = '#2563eb';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('READING MATERIAL / BOOK', 60, 478);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText(`📖 ${record.bookTitle}`, 60, 508);

      if (record.bookAuthorOrCallNo) {
        ctx.fillStyle = '#64748b';
        ctx.font = '13px sans-serif';
        ctx.fillText(`Call No: ${record.bookAuthorOrCallNo}`, 500, 508);
      }

      // Timestamps & GPS Panel
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.roundRect(40, 560, 720, 160, 14);
      ctx.fill();
      ctx.strokeStyle = '#e2e8f0';
      ctx.stroke();

      // Time In
      ctx.fillStyle = '#2563eb';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('TIME IN', 60, 590);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(new Date(record.timeIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 60, 615);
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText(new Date(record.timeIn).toLocaleDateString(), 60, 635);

      // Time Out
      ctx.fillStyle = '#d97706';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('TIME OUT', 260, 590);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(
        record.timeOut
          ? new Date(record.timeOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          : new Date(record.timeIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        260,
        615
      );
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText(new Date(record.timeIn).toLocaleDateString(), 260, 635);

      // Status
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('STATUS', 460, 590);
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('VERIFIED', 460, 618);

      // Location Details
      ctx.fillStyle = '#64748b';
      ctx.font = '12px sans-serif';
      ctx.fillText(
        `📍 GPS: ${record.locationIn.latitude.toFixed(5)}° N, ${record.locationIn.longitude.toFixed(5)}° E (${record.locationIn.distanceFromLibraryMeters}m from library, accuracy ±${record.locationIn.accuracyMeters}m)`,
        60,
        695
      );

      // Librarian Touch Signature Box
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.roundRect(40, 740, 720, 180, 14);
      ctx.fill();
      ctx.strokeStyle = '#cbd5e1';
      ctx.stroke();

      ctx.fillStyle = '#2563eb';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('LIBRARIAN VERIFICATION & TOUCH E-SIGNATURE', 60, 770);

      if (record.librarianSignatureBase64) {
        const sigImg = new Image();
        sigImg.onload = () => {
          ctx.drawImage(sigImg, 60, 785, 300, 100);

          ctx.strokeStyle = '#94a3b8';
          ctx.beginPath();
          ctx.moveTo(60, 895);
          ctx.lineTo(400, 895);
          ctx.stroke();

          ctx.fillStyle = '#0f172a';
          ctx.font = 'bold 14px sans-serif';
          ctx.fillText(`Verified by: ${record.librarianName || config.librarianDefaultName}`, 60, 915);

          ctx.fillStyle = '#64748b';
          ctx.font = '11px monospace';
          ctx.fillText(`CARD ID: ${record.id}`, 500, 915);

          ctx.fillStyle = '#64748b';
          ctx.font = '11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Official School Library Attendance & Borrowing Card Pass', 400, 965);

          resolve(canvas.toDataURL('image/png'));
        };
        sigImg.onerror = () => {
          resolve(canvas.toDataURL('image/png'));
        };
        sigImg.src = record.librarianSignatureBase64;
      } else {
        ctx.fillStyle = '#94a3b8';
        ctx.font = 'italic 16px sans-serif';
        ctx.fillText('[ Signed by Librarian ]', 60, 830);

        ctx.fillStyle = '#64748b';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Official School Library Attendance & Borrowing Card Pass', 400, 965);

        resolve(canvas.toDataURL('image/png'));
      }
    });
  });
}
