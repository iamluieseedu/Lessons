import { GeoLocationData, LibraryConfig } from '@/types/library';

// Default Trimex / School coordinates (can be updated dynamically in settings)
export const DEFAULT_LIBRARY_CONFIG: LibraryConfig = {
  libraryName: 'Campus College Library',
  libraryLatitude: 14.328227,   // Exact library latitude
  libraryLongitude: 121.090423, // Exact library longitude
  geofenceRadiusMeters: 60,     // 60m radius around library location
  enforceGeofence: false,       // Default false (warns and tags as unverified instead of blocking)
  webhookUrl: 'https://script.google.com/macros/s/AKfycbytQ5WO61njDl6sBu3T-6VPtzWuTKsLC_ztmpW4klXNvhPnoKY33_K5nMQBknSmQQO40Q/exec',
  adminPin: 'admin123',
  librarianDefaultName: 'Head Librarian',
};

/**
 * Calculates real-world distance in meters between two GPS coordinates using the Haversine formula.
 */
export function calculateDistanceMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  if (lat1 === 0 && lon1 === 0) return 0;
  if (lat2 === 0 && lon2 === 0) return 0;

  const R = 6371e3; // Earth's radius in meters
  const toRad = (angle: number) => (angle * Math.PI) / 180;

  const phi1 = toRad(lat1);
  const phi2 = toRad(lat2);
  const deltaPhi = toRad(lat2 - lat1);
  const deltaLambda = toRad(lon2 - lon1);

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
}

/**
 * Formats meter distance into user-friendly text (e.g. "25 m", "1.2 km").
 */
export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${meters} m`;
  }
  return `${(meters / 1000).toFixed(2)} km`;
}

/**
 * Obtains current HTML5 device GPS coordinates with two-stage fallback (high accuracy -> coarse).
 */
export async function getCurrentGeoLocation(config: LibraryConfig): Promise<GeoLocationData> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      resolve({
        latitude: 0,
        longitude: 0,
        accuracyMeters: 0,
        isWithinGeofence: false,
        distanceFromLibraryMeters: 0,
        timestamp: Date.now(),
        errorMessage: 'Geolocation is not supported by your browser.',
      });
      return;
    }

    const isInsecureNetworkOrigin =
      typeof window !== 'undefined' &&
      window.location.protocol === 'http:' &&
      window.location.hostname !== 'localhost' &&
      window.location.hostname !== '127.0.0.1';

    const handleSuccess = (position: GeolocationPosition) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const accuracy = Math.round(position.coords.accuracy || 20);

      const distance = calculateDistanceMeters(
        lat,
        lon,
        config.libraryLatitude,
        config.libraryLongitude
      );

      const isWithin = distance <= config.geofenceRadiusMeters;

      resolve({
        latitude: lat,
        longitude: lon,
        accuracyMeters: accuracy,
        isWithinGeofence: isWithin,
        distanceFromLibraryMeters: distance,
        timestamp: position.timestamp || Date.now(),
      });
    };

    const handleFinalError = (error?: GeolocationPositionError | Error | null) => {
      let msg = 'Unable to acquire location.';
      
      if (isInsecureNetworkOrigin) {
        msg = 'Mobile browsers block GPS on local HTTP (192.168.x.x). Please tap "Use Campus Default" below to proceed.';
      } else if (error && 'code' in error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            msg = 'Location permission was denied. Please allow location access in your browser.';
            break;
          case error.POSITION_UNAVAILABLE:
            msg = 'Location unavailable or device location services are disabled. Tap "Use Campus Default" below to continue.';
            break;
          case error.TIMEOUT:
            msg = 'Location request timed out. Please try again or continue with Campus Default.';
            break;
          default:
            msg = error.message || 'Location error occurred.';
        }
      } else if (error instanceof Error) {
        msg = error.message;
      }

      resolve({
        latitude: 0,
        longitude: 0,
        accuracyMeters: 0,
        isWithinGeofence: false,
        distanceFromLibraryMeters: 0,
        timestamp: Date.now(),
        errorMessage: msg,
      });
    };

    try {
      // Stage 1: Try with high accuracy
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        (err1) => {
          // Stage 2: Fallback to coarse accuracy if high accuracy failed
          console.warn('High accuracy GPS failed, retrying with coarse location...', err1);
          try {
            navigator.geolocation.getCurrentPosition(
              handleSuccess,
              handleFinalError,
              {
                enableHighAccuracy: false,
                timeout: 8000,
                maximumAge: 60000,
              }
            );
          } catch (err2) {
            handleFinalError(err2 as Error);
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 6000,
          maximumAge: 30000,
        }
      );
    } catch (err) {
      handleFinalError(err as Error);
    }
  });
}

/**
 * Generates verified test coordinates for development testing.
 */
export function getMockLibraryLocation(config: LibraryConfig): GeoLocationData {
  return {
    latitude: config.libraryLatitude,
    longitude: config.libraryLongitude,
    accuracyMeters: 10,
    isWithinGeofence: true,
    distanceFromLibraryMeters: 5,
    timestamp: Date.now(),
  };
}
