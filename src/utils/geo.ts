const EARTH_RADIUS_M = 6371000; // metres

/**
 * Haversine formula — returns distance in metres between two GPS coordinates.
 * d = 2R · asin(√(sin²(Δlat/2) + cos(lat1)·cos(lat2)·sin²(Δlng/2)))
 */
export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.asin(Math.sqrt(a));
  return EARTH_RADIUS_M * c;
}

export interface GeoValidationResult {
  distanceMetres: number;
  isValid: boolean;
  isSuspicious: boolean;
}

/**
 * Validates whether a student's location is within the gate radius.
 * Marks as suspicious if they are more than 5× the allowed radius away
 * (very likely fake/spoofed GPS).
 */
export function validateGateProximity(
  studentLat: number,
  studentLng: number,
  gateLat: number,
  gateLng: number,
  radiusMetres: number
): GeoValidationResult {
  const distanceMetres = haversineDistance(
    studentLat,
    studentLng,
    gateLat,
    gateLng
  );

  const isValid = distanceMetres <= radiusMetres;
  const isSuspicious = distanceMetres > radiusMetres * 5;

  return { distanceMetres, isValid, isSuspicious };
}
