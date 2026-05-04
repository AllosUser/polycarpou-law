import { MAPS_ADDRESS, MAPS_LAT, MAPS_LNG } from "@/lib/contact";

/** Google Maps embed – interactive, pan/zoom, clickable (standard embed format) */
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_LAT},${MAPS_LNG}&z=17&output=embed`;

interface MapPreviewProps {
  className?: string;
  height?: string;
}

export function MapPreview({ className = "", height = "445px" }: MapPreviewProps) {
  return (
    <iframe
      title="Office location map — Arch. Makarios III Avenue 1-7, MITSI BUILDING 3, Nicosia"
      src={GOOGLE_MAPS_EMBED}
      width="100%"
      className={className}
      style={{ height, border: 0 }}
      loading="lazy"
    />
  );
}
