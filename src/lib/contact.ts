import { useState, useEffect } from "react";

export const MAPS_ADDRESS = "Leoforos Archiepiskopou Makariou III 1-7, MITSI BUILDING, Office 201, 1065 Nicosia, Cyprus";
/** Coordinates for map embed (MITSI Building, Makarios III 1-7, Nicosia) */
export const MAPS_LAT = 35.1676;
export const MAPS_LNG = 33.3616;
/** geo: URI – opens system map app picker on mobile */
export const MAPS_URL_GEO = `geo:0,0?q=${encodeURIComponent(MAPS_ADDRESS)}`;
/** Google Maps – opens in new tab on desktop */
export const MAPS_URL_GOOGLE = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_ADDRESS)}`;

export interface MapsLink {
  href: string;
  external: boolean;
}

export function useMapsLink(): MapsLink {
  const [link, setLink] = useState<MapsLink>(() => ({
    href: MAPS_URL_GOOGLE,
    external: true,
  }));

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    setLink({
      href: isDesktop ? MAPS_URL_GOOGLE : MAPS_URL_GEO,
      external: isDesktop,
    });
  }, []);

  return link;
}

export const PHONE = "+357 22 755135";
export const PHONE_HREF = "tel:+35722755135";
export const FAX = "+357 22 003576";
export const EMAIL = "info@polycarpoulaw.com";
export const EMAIL_HREF = "mailto:info@polycarpoulaw.com";
