import { Link } from "react-router-dom";
import {
  Briefcase, Scale, Building2, Heart, FileText,
  ArrowRight, CheckCircle, Search, MessageSquare, Handshake,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { services } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const iconMap: Record<string, React.ElementType> = {
  Briefcase, Scale, Building2, Heart, FileText,
};

const svcKeys = ["corporate", "litigation", "realestate", "family", "contract"];

const timelineIcons = [MessageSquare, Search, FileText, Handshake, CheckCircle];

export default function Services() {
  const { t } = useI18n();

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="pt-36 pb-20 section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Page header">
        <div className="container-law text-center">
          <Reveal>
            <p className="eyebrow mb-4">{t("svcPage.eyebrow")}</p>
            <h1 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>{t("svcPage.title")}</h1>
            <p className="text-base max-w-xl mx-auto mt-4" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>{t("svcPage.desc")}</p>
            <GoldDivider className="mx-auto mt-8" width="60px" />
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────── */}
      <section className="section bg-background" aria-label="Services">
        <div className="container-law">
          <div className="space-y-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              const isEven = i % 2 === 1;
              const sKey = svcKeys[i];
              return (
                <Reveal key={service.id} delay={i * 0.05}>
                  <div
                    id={service.anchor}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-0 rounded-sm overflow-hidden`}
                    style={{ border: "1px solid hsl(var(--border))", boxShadow: "var(--shadow-sm)" }}
                  >
                    <div className={`md:col-span-2 flex items-center justify-center p-8 ${isEven ? "md:order-last" : ""}`} style={{ background: "var(--gradient-navy)" }}>
                      <Icon size={40} className="text-gold" strokeWidth={1.25} />
                    </div>
                    <div className="md:col-span-10 p-8 md:p-10 bg-card">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex-1">
                          <p className="eyebrow mb-2">{t("svcPage.practiceArea")} {String(i + 1).padStart(2, "0")}</p>
                          <h2 className="heading-serif text-2xl font-medium mb-3 text-foreground">{t(`svc.${sKey}.title`)}</h2>
                          <GoldDivider className="mb-5" width="48px" />
                          <p className="leading-relaxed">{t(`svc.${sKey}.desc`)}</p>
                        </div>
                        <div className="shrink-0">
                          <Link to="/contact" className="btn-primary text-xs whitespace-nowrap">{t("svcPage.enquire")} <ArrowRight size={14} /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK TIMELINE ─────────────────────────── */}
      <section className="section" style={{ background: "hsl(var(--secondary))" }} aria-label="How we work timeline">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">{t("svcPage.timeline.eyebrow")}</p>
              <h2 className="heading-serif">{t("svcPage.timeline.title")}</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[28px] top-0 bottom-0 w-px" style={{ background: "hsl(var(--border-gold))", opacity: 0.5 }} />
            <div className="space-y-10">
              {[1, 2, 3, 4, 5].map((n, i) => {
                const Icon = timelineIcons[i];
                return (
                  <Reveal key={n} delay={i * 0.1}>
                    <div className="flex gap-8">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 relative z-10" style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
                        <Icon size={20} color="hsl(222 47% 11%)" strokeWidth={2} />
                      </div>
                      <div className="pt-2">
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--accent))", fontFamily: "var(--font-sans)" }}>{t("svcPage.timeline.step")} {String(n).padStart(2, "0")}</span>
                        <h3 className="heading-serif text-xl font-medium mt-1 mb-2 text-foreground">{t(`timeline.${n}.title`)}</h3>
                        <p className="text-sm leading-relaxed">{t(`timeline.${n}.desc`)}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Call to action">
        <div className="container-law text-center">
          <Reveal>
            <h2 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>{t("svcPage.cta.title")}</h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "hsl(0 0% 65%)" }}>{t("svcPage.cta.desc")}</p>
            <Link to="/contact" className="btn-primary">{t("svcPage.cta.button")} <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
