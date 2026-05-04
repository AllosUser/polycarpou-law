import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { GoldDivider } from "./GoldDivider";
import { useI18n } from "@/lib/i18n";
import { useMapsLink, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/contact";
import apLogo from "@/assets/Logo/ap_notext_gold.svg";

export function Footer() {
  const { t } = useI18n();
  const mapsLink = useMapsLink();

  const footerLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/team", label: t("footer.ourTeam") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="container-law pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_minmax(220px,1.3fr)] gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-4" aria-label="Andreas Polycarpou & Co LLC — Home">
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
                <span className="text-[8.5px] font-light tracking-[0.05em] mt-[3px]" style={{ color: "hsl(0 0% 60%)" }}>
                  Advocates &amp; Legal Consultants
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4 text-gold">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm font-bold text-primary-foreground transition-colors hover:opacity-90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4 text-gold">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <a href={mapsLink.href} {...(mapsLink.external && { target: "_blank", rel: "noopener noreferrer" })} className="text-sm whitespace-pre-line transition-colors hover:text-gold" style={{ color: "hsl(0 0% 70%)" }}>{t("contact.address.value")}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-gold shrink-0 mt-0.5" />
                <a href={PHONE_HREF} className="text-sm whitespace-pre-line transition-colors hover:text-gold" style={{ color: "hsl(0 0% 70%)" }}>{PHONE}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-gold shrink-0 mt-0.5" />
                <a href={EMAIL_HREF} className="text-sm whitespace-pre-line transition-colors hover:text-gold" style={{ color: "hsl(0 0% 70%)" }}>{EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4 text-gold">
              {t("footer.hours")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { day: t("footer.monFri"), hours: "08:30 – 17:30" },
                { day: t("footer.weekends"), hours: t("footer.closed") },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-sm" style={{ color: "hsl(0 0% 70%)" }}>{day}</span>
                  <span className="text-sm font-medium text-primary-foreground">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <GoldDivider className="mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ color: "hsl(0 0% 50%)" }}>
          <p>&copy; {new Date().getFullYear()} {t("footer.copyright")}</p>
          <p>{t("footer.regulated")}</p>
        </div>
      </div>
    </footer>
  );
}
