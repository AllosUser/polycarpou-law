import { MapPin } from "lucide-react";
import { MAPS_ADDRESS, MAPS_LAT, MAPS_LNG } from "@/lib/contact";
import { useCookieConsent } from "@/lib/cookieConsent";
import { useI18n } from "@/lib/i18n";

const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_LAT},${MAPS_LNG}&z=17&output=embed`;

interface MapPreviewProps {
  className?: string;
  height?: string;
}

export function MapPreview({ className = "", height = "445px" }: MapPreviewProps) {
  const { consent, accept, reopen } = useCookieConsent();
  const { t } = useI18n();

  if (consent === "accepted") {
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

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
      style={{ height, background: "#0F172A" }}
    >
      <MapPin size={28} style={{ color: "#C6A75E" }} />
      <div className="text-center px-6">
        <p
          className="text-[13px] font-medium mb-1"
          style={{ color: "rgba(249,247,242,0.9)" }}
        >
          {t("cookieBanner.mapBlocked")}
        </p>
        <p
          className="text-[12px] leading-relaxed"
          style={{ color: "rgba(249,247,242,0.5)" }}
        >
          {t("cookieBanner.mapBlockedSub")}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={accept}
          className="text-[12px] font-semibold px-4 py-2 rounded-lg transition-opacity duration-200 hover:opacity-90 cursor-pointer"
          style={{ background: "#C6A75E", color: "#0F172A" }}
        >
          {t("cookieBanner.acceptCookies")}
        </button>
        <button
          onClick={reopen}
          className="text-[12px] font-medium transition-opacity duration-200 hover:opacity-80 cursor-pointer"
          style={{ color: "#C6A75E" }}
        >
          {t("cookieBanner.cookieSettings")}
        </button>
      </div>
    </div>
  );
}
