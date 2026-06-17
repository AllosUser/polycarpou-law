import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import * as LucideIcons from "lucide-react";
import {
  ChevronRight, CheckCircle, ArrowRight, Scale
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { practiceAreas } from "@/lib/practiceAreas";
import { useI18n } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-mobile-bg.jpg";

const featuredAreaSlugs = [
  "corporate-commercial-law",
  "civil-law",
  "real-estate-property-law",
  "family-law",
  "criminal-law",
  "immigration-law"
];
export default function Index() {
  const { t, lang } = useI18n();
  useSEO({
    title: "Andreas Polycarpou & Co LLC | Law Firm in Nicosia, Cyprus",
    description:
      "Premier boutique law firm in Nicosia, Cyprus. Corporate law, civil litigation, real estate, family law and contract law — delivered with precision and integrity.",
    canonical: "/",
    schema: [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://andreaspolycarpou.com.cy/" },
        ],
      },
    ],
  });

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-20 md:pt-0 hero"
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-cover bg-center md:hidden" style={{ backgroundImage: `url(${heroBgMobile})` }} />
        <div className="absolute inset-0 bg-cover bg-center hidden md:block" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
        
        {/* Refined Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Gold Lines - Geometric Flow */}
          <svg className="absolute top-0 right-0 w-full h-full hero-gold-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gold-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(198,167,94,0.4)" />
                <stop offset="100%" stopColor="rgba(198,167,94,0.1)" />
              </linearGradient>
            </defs>
            <path d="M70,0 Q85,30 60,100" stroke="url(#gold-line-grad)" strokeWidth="0.08" fill="none" />
            <path d="M85,0 Q100,50 80,100" stroke="url(#gold-line-grad)" strokeWidth="0.06" fill="none" />
            <path d="M95,0 Q110,40 90,100" stroke="url(#gold-line-grad)" strokeWidth="0.12" fill="none" />
          </svg>

          {/* Lower Curve / Wave Element */}
          <svg className="absolute bottom-0 left-0 w-full h-40 lg:h-64 hero-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="hsl(var(--accent))" fillOpacity="1" d="M0,192L120,208C240,224,480,256,720,256C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10"><GoldDivider /></div>

        <div className="container-law relative z-10 text-center pt-8 pb-20 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="eyebrow mb-6">{t("home.hero.eyebrow")}</p>
          </motion.div>

          <motion.h1
            className="hero-home-title heading-serif font-light mb-6 leading-none"
            style={{ color: "hsl(40 27% 97%)", margin: "0 auto 1.5rem" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("home.hero.title")}{" "}
            <em style={{ color: "hsl(var(--accent))", fontStyle: "italic" }}>{t("home.hero.titleAccent")}</em>
          </motion.h1>

          <motion.p
            className="text-lg font-light mb-12 leading-relaxed"
            style={{ color: "hsl(0 0% 85%)", maxWidth: "520px", margin: "0 auto 3rem", fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          >
            {t("home.hero.subtitle")}
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Link to="/contact" className="btn-primary">{t("home.hero.cta1")} <ArrowRight size={15} /></Link>
            <Link to="/services" className="btn-secondary" style={{ color: "hsl(0 0% 90%)", borderColor: "hsl(0 0% 60%)", background: "hsl(222 47% 11% / 0.85)" }}>{t("home.hero.cta2")}</Link>
          </motion.div>
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
            {featuredAreaSlugs.map((slug, i) => {
              const area = practiceAreas.find(a => a.id === slug);
              if (!area) return null;
              // @ts-expect-error dynamic map
              const Icon = LucideIcons[area.icon] || Scale;
              return (
                <Reveal key={area.id} delay={i * 0.08}>
                  <Link to={`/services#${area.id}`} className="service-card block group no-underline h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-gold" style={{ outlineOffset: "2px" }}>
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-5 shrink-0" style={{ background: "hsl(var(--accent-light))" }}>
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="heading-serif text-xl font-medium mb-2 text-foreground">{area.title[lang]}</h3>
                    <p className="text-sm leading-relaxed line-clamp-4 md:line-clamp-3 mb-0 text-foreground/80">{area.desc[lang]}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-outline-gold inline-flex items-center gap-2">
              {t("home.services.viewAll")}
            </Link>
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

      {/* ── LOCAL SEO — Nicosia / Cyprus ─────────────────── */}
      <section className="section-sm" style={{ background: "hsl(var(--secondary))" }} aria-label="Law firm in Nicosia Cyprus">
        <div className="container-law">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow mb-3">{t("home.trust.kicker")}</p>
              <h2 className="heading-serif mb-5">{t("home.trust.title")}</h2>
              <GoldDivider className="mx-auto mb-7" width="60px" />
              <p className="text-base leading-relaxed mb-4">
                {t("home.trust.p1")}
              </p>
              <p className="text-base leading-relaxed mb-10">
                {t("home.trust.p2.part1")}
                <Link to="/corporate-law-cyprus" className="text-gold hover:underline">
                  {t("home.trust.p2.link1")}
                </Link>
                {t("home.trust.p2.part2")}
                <Link to="/real-estate-lawyer-cyprus" className="text-gold hover:underline">
                  {t("home.trust.p2.link2")}
                </Link>
                {t("home.trust.p2.part3")}
                <Link to="/litigation-lawyer-cyprus" className="text-gold hover:underline">
                  {t("home.trust.p2.link3")}
                </Link>
                {t("home.trust.p2.part4")}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="text-center p-4 rounded-sm" style={{ border: "1px solid hsl(var(--border))" }}>
                    <p className="heading-serif text-xl font-medium text-gold mb-1">{t(`home.trust.stat${n}.title`)}</p>
                    <p className="text-[11px] uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground))", fontFamily: "var(--font-sans)" }}>{t(`home.trust.stat${n}.subtitle`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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
