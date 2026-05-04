
export const MAPS_ADDRESS = "Leoforos Archiepiskopou Makariou III 1-7, MITSI BUILDING 3, Office 201, 1065 Nicosia, Cyprus";
/** Coordinates for map embed (MITSI BUILDING 3, Makarios III 1-7, Nicosia) */
export const MAPS_LAT = 35.1681003;
export const MAPS_LNG = 33.3595300;
/** geo: URI – opens system map app picker on mobile */
export const MAPS_URL_GEO = `geo:0,0?q=${encodeURIComponent(MAPS_ADDRESS)}`;
/** Google Maps – opens in new tab on desktop */
export const MAPS_URL_GOOGLE = "https://maps.google.com/maps?q=35.1681003,33.3595300";

export interface MapsLink {
  href: string;
  external: boolean;
}

export function useMapsLink(): MapsLink {
  return {
    href: MAPS_URL_GOOGLE,
    external: true,
  };
}

export const PHONE = "+357 22 755135";
export const PHONE_HREF = "tel:+35722755135";
export const FAX = "+357 22 003576";
export const EMAIL = "info@polycarpoulaw.com";
export const EMAIL_HREF = "mailto:info@polycarpoulaw.com";
