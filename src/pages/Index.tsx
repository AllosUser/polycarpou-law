import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase, Scale, Building2, Heart, FileText,
  ChevronRight, Award, Target, Clock, CheckCircle, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { services } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-mobile-bg.jpg";

const iconMap: Record<string, React.ElementType> = {
  Briefcase, Scale, Building2, Heart, FileText,
};

const trustIcons = [Award, Scale, Target, Clock];

const svcKeys = ["corporate", "litigation", "realestate", "family", "contract"];
const trustKeys = ["trust.years", "trust.cases", "trust.success", "trust.response"];
const trustValues = ["15+", "500+", "98%", "24h"];

export default function Index() {
  const { t } = useI18n();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-20 md:pt-0"
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-cover bg-center md:hidden" style={{ backgroundImage: `url(${heroBgMobile})` }} />
        <div className="absolute inset-0 bg-cover bg-center hidden md:block" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 texture-overlay opacity-20" />
        <div className="absolute bottom-0 left-0 right-0"><GoldDivider /></div>

        <div className="container-law relative z-10 text-center pt-8 pb-20 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="eyebrow mb-6">{t("home.hero.eyebrow")}</p>
          </motion.div>

          <motion.h1
            className="heading-serif font-light mb-6 leading-none"
            style={{ color: "hsl(40 27% 97%)", maxWidth: "800px", margin: "0 auto 1.5rem" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("home.hero.title")}{" "}
            <em style={{ color: "hsl(var(--accent))", fontStyle: "italic" }}>{t("home.hero.titleAccent")}</em>
          </motion.h1>

          <motion.p
            className="text-lg font-light mb-12 leading-relaxed"
            style={{ color: "hsl(0 0% 80%)", maxWidth: "520px", margin: "0 auto 3rem", fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          >
            {t("home.hero.subtitle")}
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Link to="/contact" className="btn-primary">{t("home.hero.cta1")} <ArrowRight size={15} /></Link>
            <Link to="/services" className="btn-secondary" style={{ color: "hsl(0 0% 90%)", borderColor: "hsl(0 0% 60%)", background: "hsl(222 47% 11% / 0.5)" }}>{t("home.hero.cta2")}</Link>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST INDICATORS ─────────────────────────────── */}
      <section className="bg-foreground section-sm" aria-label="Trust indicators">
        <div className="container-law">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustKeys.map((key, i) => {
              const Icon = trustIcons[i];
              return (
                <Reveal key={key} delay={i * 0.1}>
                  <div className="text-center">
                    <Icon size={20} className="text-gold mx-auto mb-3" />
                    <div className="heading-serif text-3xl font-semibold text-gold mb-1">{trustValues[i]}</div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 60%)", fontFamily: "var(--font-sans)" }}>{t(key)}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────── */}
      <section className="section bg-background" aria-label="Services preview">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">{t("services.eyebrow")}</p>
              <h2 className="heading-serif mb-4">{t("services.title")}</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              const sKey = svcKeys[i];
              return (
                <Reveal key={service.id} delay={i * 0.08}>
                  <Link to="/services" className="service-card block group no-underline">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-5" style={{ background: "hsl(var(--accent-light))" }}>
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="heading-serif text-xl font-medium mb-2 text-foreground">{t(`svc.${sKey}.title`)}</h3>
                    <p className="text-sm leading-relaxed mb-4">{t(`svc.${sKey}.short`)}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-gold transition-gap group-hover:gap-2.5" style={{ fontFamily: "var(--font-sans)" }}>
                      {t("services.learnMore")} <ChevronRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section className="section" style={{ background: "hsl(var(--secondary))" }} aria-label="Why choose us">
        <div className="container-law">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <p className="eyebrow mb-3">{t("why.eyebrow")}</p>
                <h2 className="heading-serif mb-6">{t("why.title")}</h2>
                <GoldDivider className="mb-8" width="80px" />

                <ul className="space-y-5">
                  {[1, 2, 3].map((n) => (
                    <li key={n} className="flex gap-4">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--gradient-gold)" }}>
                        <CheckCircle size={12} color="hsl(222 47% 11%)" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-0.5" style={{ fontFamily: "var(--font-sans)" }}>{t(`why.bullet${n}.title`)}</p>
                        <p className="text-sm">{t(`why.bullet${n}.desc`)}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link to="/about" className="btn-outline-gold">{t("why.cta")} <ArrowRight size={15} /></Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="relative h-80 lg:h-[480px] rounded-sm overflow-hidden" style={{ boxShadow: "var(--shadow-lg)" }}>
                <div className="absolute inset-0" style={{ background: "var(--gradient-navy)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <Scale size={48} className="text-gold mx-auto mb-4" strokeWidth={1} />
                    <p className="heading-serif text-3xl font-light" style={{ color: "hsl(40 27% 97%)" }}>{t("why.quote")}</p>
                    <p className="mt-4 text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 55%)" }}>{t("why.quoteAuthor")}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0" style={{ height: "3px", background: "var(--gradient-gold)" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ────────────────────────────────── */}
      <section className="section bg-background" aria-label="Our process">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">{t("process.eyebrow")}</p>
              <h2 className="heading-serif mb-4">{t("process.title")}</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n, i) => (
              <Reveal key={n} delay={i * 0.1}>
                <div className="relative">
                  <div className="mb-5">
                    <span className="heading-serif text-5xl font-light" style={{ color: "hsl(var(--accent) / 0.35)" }}>
                      {String(n).padStart(2, "0")}
                    </span>
                  </div>
                  <GoldDivider className="mb-5" width="40px" />
                  <h3 className="heading-serif text-xl font-medium mb-2 text-foreground">{t(`process.step${n}.title`)}</h3>
                  <p className="text-sm leading-relaxed">{t(`process.step${n}.desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Call to action">
        <div className="container-law text-center">
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: "hsl(var(--accent))" }}>{t("cta.eyebrow")}</p>
            <h2 className="heading-serif font-light mb-6" style={{ color: "hsl(40 27% 97%)" }}>{t("cta.title")}</h2>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>{t("cta.desc")}</p>
            <Link to="/contact" className="btn-primary">{t("cta.button")} <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
