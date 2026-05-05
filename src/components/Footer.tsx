import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useMapsLink, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/contact";
import { useCookieConsent } from "@/lib/cookieConsent";
import apLogo from "@/assets/Logo/ap_notext_gold.svg";

export function Footer() {
  const { t, lang } = useI18n();
  const mapsLink = useMapsLink();
  const { reopen } = useCookieConsent();

  const [descMain, descTagline] = t("footer.desc").split("\n");

  const footerLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/team", label: t("footer.ourTeam") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.45fr_1fr] gap-x-16 lg:gap-x-20 gap-y-10 mb-14">

          {/* Col 1: Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-5"
              aria-label="Andreas Polycarpou & Co LLC — Home"
            >
              <img
                src={apLogo}
                alt="AP"
                className="h-9 w-auto flex-shrink-0"
                style={{ background: "transparent" }}
              />
              <div className="flex flex-col justify-center leading-[1.2]">
                <span className="text-[10px] font-semibold tracking-[0.13em] uppercase text-primary-foreground">
                  ANDREAS POLYCARPOU &amp; CO LLC
                </span>
                <span
                  className="text-[8.5px] font-light tracking-[0.05em] mt-[3px]"
                  style={{ color: "hsl(0 0% 55%)" }}
                >
                  Advocates &amp; Legal Consultants
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 65%)" }}>
              {descMain}
            </p>
            {descTagline && (
              <p
                className="text-[13px] font-medium mt-2 tracking-wide"
                style={{ color: "hsl(var(--accent))" }}
              >
                {descTagline}
              </p>
            )}
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-wider uppercase mb-4 text-gold">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-1.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm font-bold text-primary-foreground transition-opacity duration-200 hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-wider uppercase mb-4 text-gold">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <a
                  href={mapsLink.href}
                  {...(mapsLink.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-sm whitespace-pre-line transition-colors hover:text-gold leading-relaxed"
                  style={{ color: "hsl(0 0% 65%)" }}
                >
                  {t("contact.address.value")}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-gold shrink-0 mt-0.5" />
                <a
                  href={PHONE_HREF}
                  className="text-sm transition-colors hover:text-gold"
                  style={{ color: "hsl(0 0% 65%)" }}
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-gold shrink-0 mt-0.5" />
                <a
                  href={EMAIL_HREF}
                  className="text-sm transition-colors hover:text-gold"
                  style={{ color: "hsl(0 0% 65%)" }}
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Office Hours */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-wider uppercase mb-4 text-gold">
              {t("footer.hours")}
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-sm leading-snug" style={{ color: "hsl(0 0% 65%)" }}>
                  {t("footer.monFri")}
                </p>
                <p className="text-sm font-semibold leading-snug mt-0.5 text-gold">
                  08:30 – 17:30
                </p>
              </li>
              <li>
                <p className="text-sm leading-snug" style={{ color: "hsl(0 0% 65%)" }}>
                  {t("footer.weekends")}
                </p>
                <p className="text-sm leading-snug mt-0.5" style={{ color: "hsl(0 0% 42%)" }}>
                  {t("footer.closed")}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Gradient divider — gold fade left→right→left */}
        <div
          className="mb-8"
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, hsl(42 52% 57% / 0.4), transparent)",
          }}
        />

        {/* Bottom Bar — 3-column grid guarantees true centering regardless of text length */}
        <div
          className="items-center text-[11px]"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "0 2rem",
            fontFamily: "var(--font-sans)",
            letterSpacing: "0.02em",
          }}
        >
          {/* Left: copyright — \n in Greek string renders as line break */}
          <span className="whitespace-pre-line" style={{ color: "rgba(255,255,255,0.6)", lineHeight: lang === "el" ? 1 : 1.5 }}>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </span>

          {/* Center: legal links — each link nowrap, gap increased for readability */}
          <div
            className="flex items-center gap-x-3"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <Link
              to="/privacy-policy"
              className="whitespace-nowrap transition-colors duration-200 hover:text-gold"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <span style={{ opacity: 0.4 }}>·</span>
            <span className="inline-flex items-baseline gap-[0.3em] whitespace-nowrap">
              <Link
                to="/cookie-policy"
                className="transition-colors duration-200 hover:text-gold"
              >
                {t("footer.cookiePolicy")}
              </Link>
              <span style={{ opacity: 0.4 }}>&amp;</span>
              <button
                onClick={reopen}
                className="transition-colors duration-200 hover:text-gold cursor-pointer bg-transparent border-0 p-0 font-[inherit] text-[inherit]"
                style={{ letterSpacing: "inherit" }}
              >
                {t("footer.cookieSettingsShort")}
              </button>
            </span>
            <span style={{ opacity: 0.4 }}>·</span>
            <Link
              to="/terms-and-conditions"
              className="whitespace-nowrap transition-colors duration-200 hover:text-gold"
            >
              {t("footer.terms")}
            </Link>
          </div>

          {/* Right: credit — always fits on one line */}
          <span className="text-right whitespace-nowrap">
            <span style={{ color: "rgba(255,255,255,0.6)" }}>
              {t("footer.creditPrefix")}{" "}
            </span>
            <a
              href="https://buildtomorrow.today"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors duration-200 hover:underline"
              style={{ color: "hsl(var(--accent))" }}
            >
              BuildTomorrow
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
