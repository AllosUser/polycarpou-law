import { Link } from "react-router-dom";
import { Scale, MapPin, Phone, Mail } from "lucide-react";
import { GoldDivider } from "./GoldDivider";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Scale size={16} color="hsl(222 47% 11%)" strokeWidth={2} />
              </span>
              <span className="heading-serif text-xl font-medium text-primary-foreground">
                Polycarpou <span className="text-gold">Law</span>
              </span>
            </div>
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
                    className="text-sm transition-colors hover:text-gold"
                    style={{ color: "hsl(0 0% 70%)" }}
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
              {[
                { icon: MapPin, text: t("contact.address.value") },
                { icon: Phone, text: "+357 22 123 456" },
                { icon: Mail, text: "info@polycarpoulaw.cy" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon size={14} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm whitespace-pre-line" style={{ color: "hsl(0 0% 70%)" }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4 text-gold">
              {t("footer.hours")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { day: t("footer.monFri"), hours: "9:00 – 18:00" },
                { day: t("footer.sat"), hours: "10:00 – 14:00" },
                { day: t("footer.sun"), hours: t("footer.closed") },
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
