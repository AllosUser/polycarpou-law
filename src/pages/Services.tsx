import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Search, MessageSquare, Handshake, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";
import { practiceAreas } from "@/lib/practiceAreas";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";

const timelineIcons = [MessageSquare, Search, FileText, Handshake, CheckCircle];

export default function Services() {
  const { t, lang } = useI18n();
  useSEO({
    title: "Practice Areas | Legal Services in Cyprus | Polycarpou Law",
    description:
      "Specialist legal services in Cyprus: corporate law, civil litigation, real estate, family law and contract law — delivered by experienced Nicosia lawyers.",
    canonical: "/services",
    schema: [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://andreaspolycarpou.com.cy/" },
          { "@type": "ListItem", position: 2, name: "Practice Areas", item: "https://andreaspolycarpou.com.cy/services" },
        ],
      },
      {
        "@type": "ItemList",
        name: "Legal Services — Andreas Polycarpou & Co LLC",
        itemListElement: practiceAreas.map((area, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: area.title.en,
          url: `https://andreaspolycarpou.com.cy/services#${area.id}`
        })),
      },
    ],
  });

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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.id} delay={i * 0.05} className="h-full">
                <PracticeAreaCard area={area} index={i} />
              </Reveal>
            ))}
          </div>

          {/* Consultation Block */}
          <Reveal delay={0.2}>
            <div className="mt-14 md:mt-20 bg-muted/30 border border-border/50 rounded-sm p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full" style={{ background: "hsl(var(--gold))" }} />
              <div className="flex-1 text-center md:text-left">
                <h3 className="heading-serif text-xl font-medium text-navy mb-2">
                  {lang === "en" ? "Need guidance regarding your legal matter?" : "Χρειάζεστε καθοδήγηση για την υπόθεσή σας;"}
                </h3>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  {lang === "en" ? "Contact us to discuss your requirements and allow our team to guide you to the appropriate area of law." : "Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες σας και να σας καθοδηγήσουμε στον κατάλληλο τομέα δικαίου."}
                </p>
              </div>
              <Link to="/contact#contact-form" className="btn-primary text-xs shrink-0 w-full md:w-auto text-center justify-center">
                {lang === "en" ? "REQUEST A CONSULTATION" : "ΖΗΤΗΣΤΕ ΣΥΝΑΝΤΗΣΗ"} <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
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
