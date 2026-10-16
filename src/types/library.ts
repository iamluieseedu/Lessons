export interface GeoLocationData {
  latitude: number;
  longitude: number;
  accuracyMeters: number;
  isWithinGeofence: boolean;
  distanceFromLibraryMeters: number;
  timestamp: number;
  errorMessage?: string;
}

export interface LibraryConfig {
  libraryName: string;
  libraryLatitude: number;
  libraryLongitude: number;
  geofenceRadiusMeters: number;
  enforceGeofence: boolean;
  webhookUrl: string;
  adminPin: string;
  librarianDefaultName: string;
}

export type AttendancePurpose = 
  | 'study' 
  | 'borrow' 
  | 'return' 
  | 'research' 
  | 'computer_use' 
  | 'group_study'
  | 'other';

export interface LibraryAttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  gradeSection: string;
  purpose: AttendancePurpose;
  bookTitle: string;
  bookAuthorOrCallNo?: string;
  
  // Visual verifications
  selfiePhotoBase64: string;
  bookPhotoBase64: string;
  
  // Location & Timestamps
  timeIn: string;
  locationIn: GeoLocationData;
  timeOut?: string;
  locationOut?: GeoLocationData;
  durationMinutes?: number;
  
  // Librarian Touch Verification
  librarianSignatureBase64?: string;
  librarianName?: string;
  status: 'active' | 'completed';
  
  // Network & IP Tracking
  ipAddress?: string;

  // Generated Pass & Google Drive Sync
  digitalCardBase64?: string;
  driveSyncStatus?: 'pending' | 'synced' | 'failed';
  driveUrls?: {
    cardUrl?: string;
    bookUrl?: string;
    selfieUrl?: string;
    sigUrl?: string;
  };
  notes?: string;
}

export interface LibraryVisitorSession {
  id: string;
  ipAddress: string;
  deviceType: string;
  timestamp: number;
  lastActive: number;
  latitude: number;
  longitude: number;
  distanceMeters: number;
  isAtLibrary: boolean;
  studentName?: string;
  studentId?: string;
}

export interface AttendanceFilter {
  searchQuery: string;
  status: 'all' | 'active' | 'completed';
  date: string;
  verifiedOnly: boolean;
}
