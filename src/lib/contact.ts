import { useState, useEffect } from "react";

export const MAPS_ADDRESS = "28 Arch. Makarios III Avenue, Nicosia 1065, Cyprus";
/** Coordinates for map embed (28 Arch. Makarios III Ave, Nicosia) */
export const MAPS_LAT = 35.1747;
export const MAPS_LNG = 33.3663;
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

export const PHONE = "+357 22 123 456";
export const PHONE_HREF = "tel:+35722123456";
export const EMAIL = "polucarpoullc@gmail.com";
export const EMAIL_HREF = "mailto:polucarpoullc@gmail.com";
