import { GeoLocationData, LibraryConfig } from '@/types/library';

// Default Trimex / School coordinates (can be updated dynamically in settings)
export const DEFAULT_LIBRARY_CONFIG: LibraryConfig = {
  libraryName: 'Campus College Library',
  libraryLatitude: 14.328171,
  libraryLongitude: 121.090469,
  geofenceRadiusMeters: 30,     // Shrunk radius to 30 meters
  enforceGeofence: true,        // Strictly blocks Time In if not physically inside library
  webhookUrl: 'https://script.google.com/macros/s/AKfycbz_PREc-RcgZQH7MGNOQynhuwmoJUvmV0-THhfPG9lhXxOKpJpONMVkUe5cn_72GtIfdw/exec',
  adminPin: 'admin123',
  librarianDefaultName: '',
};

// Official Campus Library Coordinates (14.328171, 121.090469)
export const RECOGNIZED_LIBRARY_COORDINATES = [
  { name: 'Campus College Library', lat: 14.328171, lon: 121.090469 },
];

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

      // Target Library Coordinate (Default: 14.328171, 121.090469)
      const targetLat = config.libraryLatitude || 14.328171;
      const targetLon = config.libraryLongitude || 121.090469;

      // Distance strictly to the campus library default coordinates
      const effectiveDistance = calculateDistanceMeters(
        lat,
        lon,
        targetLat,
        targetLon
      );

      const configuredRadius = config.geofenceRadiusMeters || 30;
      // Strict verification: only within library perimeter (with standard building GPS drift margin of ±5m)
      const maxAllowedRadius = configuredRadius + 5;
      const isWithin = effectiveDistance <= maxAllowedRadius;

      resolve({
        latitude: lat,
        longitude: lon,
        accuracyMeters: accuracy,
        isWithinGeofence: isWithin,
        distanceFromLibraryMeters: effectiveDistance,
        timestamp: position.timestamp || Date.now(),
      });
    };

    if (isInsecureNetworkOrigin) {
      resolve({
        latitude: 0,
        longitude: 0,
        accuracyMeters: 0,
        isWithinGeofence: false,
        distanceFromLibraryMeters: 0,
        timestamp: Date.now(),
        errorMessage: 'Mobile browsers block GPS on insecure HTTP. Please access via HTTPS (https://iamlesson.space/library) to verify coordinates.',
      });
      return;
    }

    const handleFinalError = (error?: GeolocationPositionError | Error | null) => {
      let msg = 'Unable to acquire location.';

      if (isInsecureNetworkOrigin) {
        msg = 'Mobile browsers block GPS on local HTTP (192.168.x.x). Please test using testing coordinates.';
      } else if (error && 'code' in error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            msg = 'Location permission was denied. Tap the lock/tune icon in your browser address bar, set Location to "Allow", and tap "Allow Location".';
            break;
          case error.POSITION_UNAVAILABLE:
            msg = 'Device GPS unavailable. Please make sure Location/GPS is turned ON in your phone settings and try again.';
            break;
          case error.TIMEOUT:
            msg = 'Location request timed out. Please tap "Allow Location" to retry.';
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
      // Stage 1: Try with high accuracy (Standard 20s timeout so user can read browser permission dialog)
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        (err1) => {
          // If explicitly denied, do not retry, show prompt guidance
          if (err1 && err1.code === err1.PERMISSION_DENIED) {
            handleFinalError(err1);
            return;
          }
          // Stage 2: Fallback to coarse accuracy if high accuracy failed
          try {
            navigator.geolocation.getCurrentPosition(
              handleSuccess,
              handleFinalError,
              {
                enableHighAccuracy: false,
                timeout: 15000,
                maximumAge: 60000,
              }
            );
          } catch (err2) {
            handleFinalError(err2 as Error);
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 20000, // 20s generous timeout so user has time to tap "Allow" in browser modal
          maximumAge: 30000,
        }
      );
    } catch (err) {
      handleFinalError(err as Error);
    }
  });
}

/**
 * Checks current browser geolocation permission status.
 */
export async function getGeolocationPermissionStatus(): Promise<'granted' | 'prompt' | 'denied' | 'unknown'> {
  if (typeof window === 'undefined' || !navigator.permissions || !navigator.permissions.query) {
    return 'unknown';
  }
  try {
    const status = await navigator.permissions.query({ name: 'geolocation' });
    return status.state;
  } catch (e) {
    return 'unknown';
  }
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
