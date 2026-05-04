import { Link } from "react-router-dom";
import { Shield, Target, Users, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import founderImg from "@/assets/founder.jpg";

const iconMap: Record<string, React.ElementType> = { Shield, Target, Users };
const valueKeys = [
  { icon: "Shield", key: "integrity" },
  { icon: "Target", key: "precision" },
  { icon: "Users", key: "commitment" },
];

export default function About() {
  const { t } = useI18n();
  useSEO({
    title: "About Us | Corporate & Civil Lawyers in Nicosia, Cyprus | Polycarpou Law",
    description:
      "Learn about Andreas Polycarpou & Co LLC — a boutique law firm in Nicosia, Cyprus, founded on integrity, precision, and over 20 years of legal experience.",
    canonical: "/about",
  });

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="pt-36 pb-20 section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Page header">
        <SectionReveal>
          <div className="container-law text-center">
            <Reveal>
            <p className="eyebrow mb-4">{t("about.header.eyebrow")}</p>
            <h1 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>{t("about.header.title")}</h1>
            <GoldDivider className="mx-auto" width="60px" />
          </Reveal>
          </div>
        </SectionReveal>
      </section>

      {/* ── FIRM STORY + FOUNDER ─────────────────────────── */}
      <section className="section bg-background" aria-label="Firm story">
        <SectionReveal delay={0.05}>
          <div className="container-law">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <p className="eyebrow mb-3">{t("about.story.eyebrow")}</p>
                <h2 className="heading-serif mb-6">{t("about.story.title")}</h2>
                <GoldDivider className="mb-8" width="80px" />
                <div className="space-y-4">
                  <p>{t("about.story.p1")}</p>
                  <p>{t("about.story.p2")}</p>
                  <p>{t("about.story.p3")}</p>
                  <p>{t("about.story.p4")}</p>
                </div>
                <div className="mt-8">
                  <Link to="/team" className="btn-outline-gold">{t("about.story.cta")} <ArrowRight size={15} /></Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-sm" style={{ border: "1px solid hsl(var(--border-gold))", opacity: 0.5 }} />
                <img src={founderImg} alt={t("about.founder.name")} className="relative rounded-sm object-cover w-full" style={{ maxHeight: "500px", objectPosition: "top", boxShadow: "var(--shadow-lg)" }} />
                <div className="absolute bottom-6 left-6 right-6 rounded-sm p-4" style={{ background: "hsl(222 47% 11% / 0.92)", backdropFilter: "blur(8px)", borderTop: "2px solid hsl(var(--accent))" }}>
                  <p className="heading-serif text-lg font-medium" style={{ color: "hsl(40 27% 97%)" }}>{t("about.founder.name")}</p>
                  <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "hsl(var(--accent))" }}>{t("about.founder.role")}</p>
                </div>
              </div>
            </Reveal>
          </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── MISSION / VISION ─────────────────────────────── */}
      <section className="section" style={{ background: "hsl(var(--secondary))" }} aria-label="Mission and vision">
        <SectionReveal delay={0.05}>
          <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">{t("about.mv.eyebrow")}</p>
              <h2 className="heading-serif">{t("about.mv.title")}</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <Reveal delay={0.1}>
              <div className="p-10 md:p-14 bg-card rounded-sm md:rounded-r-none" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="heading-serif text-2xl font-medium mb-4 text-foreground">{t("about.mission.title")}</h3>
                <GoldDivider className="mb-6" width="48px" />
                <p className="leading-relaxed">{t("about.mission.p1")}</p>
                <p className="mt-4 leading-relaxed">{t("about.mission.p2")}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-10 md:p-14 rounded-sm md:rounded-l-none relative overflow-hidden" style={{ background: "var(--gradient-navy)", boxShadow: "var(--shadow-sm)" }}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ background: "hsl(var(--accent))", transform: "translate(30%, -30%)" }} />
                <h3 className="heading-serif text-2xl font-medium mb-4" style={{ color: "hsl(40 27% 97%)" }}>{t("about.vision.title")}</h3>
                <GoldDivider className="mb-6" width="48px" />
                <p className="leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>{t("about.vision.p1")}</p>
                <p className="mt-4 leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>{t("about.vision.p2")}</p>
              </div>
            </Reveal>
          </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="section bg-background" aria-label="Our values">
        <SectionReveal delay={0.05}>
          <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">{t("about.values.eyebrow")}</p>
              <h2 className="heading-serif">{t("about.values.title")}</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueKeys.map((v, i) => {
              const Icon = iconMap[v.icon];
              return (
                <Reveal key={v.key} delay={i * 0.12}>
                  <div className="text-center p-8">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "hsl(var(--accent-light))" }}>
                      <Icon size={22} className="text-gold" />
                    </div>
                    <h3 className="heading-serif text-2xl font-medium mb-3 text-foreground">{t(`value.${v.key}`)}</h3>
                    <GoldDivider className="mx-auto mb-5" width="40px" />
                    <p className="text-sm leading-relaxed">{t(`value.${v.key}.desc`)}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: "hsl(var(--secondary))" }} aria-label="Call to action">
        <SectionReveal delay={0.1}>
          <div className="container-law text-center">
          <Reveal>
            <h2 className="heading-serif mb-4">{t("about.values.cta.title")}</h2>
            <p className="text-base mb-8 max-w-md mx-auto">{t("about.values.cta.desc")}</p>
            <Link to="/contact" className="btn-primary">{t("about.values.cta.button")} <ArrowRight size={15} /></Link>
          </Reveal>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
