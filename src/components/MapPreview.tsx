import { MAPS_ADDRESS } from "@/lib/contact";

/** Google Maps embed – interactive, pan/zoom, clickable (standard embed format) */
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_ADDRESS)}&z=16&output=embed`;

interface MapPreviewProps {
  className?: string;
  height?: string;
}

export function MapPreview({ className = "", height = "445px" }: MapPreviewProps) {
  return (
    <iframe
      title="Office location map — 28 Arch. Makarios III Avenue, Nicosia"
      src={GOOGLE_MAPS_EMBED}
      width="100%"
      className={className}
      style={{ height, border: 0 }}
      loading="lazy"
    />
  );
}
