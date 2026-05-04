import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import apLogo from "@/assets/Logo/ap_notext_gold.svg";

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/team", label: t("nav.team") },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  // Pages without a hero section need the solid white navbar from the start
  const solid = scrolled || location.pathname.startsWith("/our-people");

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          solid
            ? "bg-white/95 backdrop-blur-sm shadow-nav border-b border-border"
            : "bg-transparent"
        } ${!solid ? "header-transparent" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── MOBILE bar ── */}
        <div className="md:hidden flex h-[72px] w-full items-center justify-between px-5">
          {/* Left: Logo icon + Line 1 on sm+, icon only on xs */}
          <Link to="/" aria-label="Home" className="flex items-center gap-2.5 min-w-0">
            <img
              src={apLogo}
              alt="AP Law"
              className="h-8 w-auto flex-shrink-0"
              style={{ background: "transparent" }}
            />
            <span
              className={`hidden sm:block text-[8.5px] font-medium tracking-[0.13em] uppercase leading-none transition-colors duration-300 ${
                !solid ? "text-white/90" : "text-foreground/90"
              }`}
            >
              ANDREAS POLYCARPOU & CO LLC
            </span>
          </Link>

          {/* Right: Hamburger */}
          <button
            className={`p-2 rounded-sm transition-colors hover:bg-secondary/20 ${
              !solid ? "text-white" : "text-foreground"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── DESKTOP bar: 3-column balanced grid ── */}
        <div
          className="hidden md:grid items-center h-24 w-full px-10 lg:px-16 mx-auto"
          style={{ gridTemplateColumns: "1fr auto 1fr", maxWidth: "1600px" }}
        >
          {/* Left Zone: Logo icon + two-line brand text */}
          <div className="flex justify-start items-center">
            <Link to="/" className="group flex items-center gap-3.5" aria-label="Home">
              <img
                src={apLogo}
                alt="AP Law"
                className="h-11 w-auto flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: "transparent" }}
              />
              <div className="flex flex-col justify-center leading-[1.2] transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                <span
                  className={`text-[10.5px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${
                    !solid ? "text-white/95" : "text-foreground"
                  }`}
                >
                  ANDREAS POLYCARPOU &amp; CO LLC
                </span>
                <span
                  className={`text-[8.5px] font-light tracking-[0.06em] mt-[3px] transition-colors duration-300 ${
                    !solid ? "text-white/55" : "text-muted-foreground"
                  }`}
                >
                  Advocates &amp; Legal Consultants
                </span>
              </div>
            </Link>
          </div>

          {/* Center Zone: Navigation Menu */}
          <div className="flex justify-center">
            <nav className="flex items-center gap-10 lg:gap-14" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link text-[13px] font-semibold tracking-[0.15em] ${isActive(link.href) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Zone: CTA + Language */}
          <div className="flex items-center justify-end gap-10 lg:gap-14">
            <Link
              to="/contact"
              className="btn-primary text-[10px] py-2 px-6 rounded-[10px] tracking-[0.15em] font-bold h-9 flex items-center shadow-none hover:brightness-105 hover:shadow-gold/20 transition-all duration-300"
            >
              {t("nav.cta")}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-foreground/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-card-lg flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              {/* Drawer header — mirrors mobile bar */}
              <div className="flex h-[72px] items-center justify-between px-5 border-b border-border">
                <Link
                  to="/"
                  className="flex items-center gap-2.5 min-w-0"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Home"
                >
                  <img
                    src={apLogo}
                    alt="AP Law"
                    className="h-7 w-auto flex-shrink-0"
                    style={{ background: "transparent" }}
                  />
                  <span className="hidden sm:block text-[8.5px] font-medium tracking-[0.13em] uppercase leading-none text-foreground/90 truncate">
                    ANDREAS POLYCARPOU & CO LLC
                  </span>
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-6 flex-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center px-4 py-3 rounded-sm text-sm font-medium tracking-widest uppercase transition-colors ${
                        isActive(link.href)
                          ? "text-gold bg-accent-light"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-border space-y-4">
                <LanguageSwitcher className="justify-center" />
                <Link to="/contact" className="btn-primary w-full justify-center text-xs">
                  {t("nav.cta")}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
