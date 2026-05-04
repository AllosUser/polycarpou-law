import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "@/lib/cookieConsent";
import { useI18n } from "@/lib/i18n";

export function CookieBanner() {
  const { bannerOpen, accept, reject } = useCookieConsent();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Guard against SSR / localStorage timing issues
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (bannerOpen) {
      const timer = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [bannerOpen, mounted]);

  const handleAction = (action: () => void) => {
    setVisible(false);
    setTimeout(action, 320);
  };

  if (!mounted || (!bannerOpen && !visible)) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookieBanner.title")}
      aria-modal="false"
      className="fixed left-0 right-0 px-4 pointer-events-none"
      style={{ bottom: "24px", zIndex: 9999 }}
    >
      <div
        className={`mx-auto max-w-[900px] rounded-2xl pointer-events-auto transition-all duration-300 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{
          background: "#0F172A",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 px-6 py-5 md:px-8 md:py-6">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p
              className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-1.5"
              style={{ color: "#F9F7F2" }}
            >
              {t("cookieBanner.title")}
            </p>
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: "rgba(249,247,242,0.58)" }}
            >
              {t("cookieBanner.text")}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 shrink-0">
            <div className="flex gap-2.5">
              <button
                onClick={() => handleAction(reject)}
                className="flex-1 md:flex-none text-[12px] font-medium px-5 py-2.5 rounded-lg border transition-colors duration-200 cursor-pointer whitespace-nowrap"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "rgba(249,247,242,0.75)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.38)";
                  e.currentTarget.style.color = "#F9F7F2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.color = "rgba(249,247,242,0.75)";
                }}
              >
                {t("cookieBanner.reject")}
              </button>
              <button
                onClick={() => handleAction(accept)}
                className="flex-1 md:flex-none text-[12px] font-semibold px-5 py-2.5 rounded-lg transition-opacity duration-200 cursor-pointer whitespace-nowrap hover:opacity-90"
                style={{ background: "#C6A75E", color: "#0F172A" }}
              >
                {t("cookieBanner.accept")}
              </button>
            </div>
            <div className="flex justify-center">
              <Link
                to="/cookie-policy"
                className="text-[11px] font-medium tracking-wide transition-opacity duration-200 hover:opacity-80"
                style={{ color: "#C6A75E" }}
              >
                {t("cookieBanner.learnMore")} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
