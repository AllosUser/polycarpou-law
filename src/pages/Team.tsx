import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { team } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function Team() {
  const { t } = useI18n();

  const benefits = [
    t("team.join.b1"), t("team.join.b2"), t("team.join.b3"), t("team.join.b4"), t("team.join.b5"),
  ];

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="pt-36 pb-20 section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Page header">
        <div className="container-law text-center">
          <Reveal>
            <p className="eyebrow mb-4">{t("team.eyebrow")}</p>
            <h1 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>{t("team.title")}</h1>
            <p className="text-base max-w-xl mx-auto mt-4" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>{t("team.desc")}</p>
            <GoldDivider className="mx-auto mt-8" width="60px" />
          </Reveal>
        </div>
      </section>

      {/* ── TEAM GRID ────────────────────────────────────── */}
      <section className="section bg-background" aria-label="Team members">
        <div className="container-law">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.1}>
                <article className="team-card bg-card" aria-label={`${member.name}, ${member.role}`}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 shrink-0 relative overflow-hidden">
                      <img src={member.image} alt={`${member.name} — ${member.role}`} className="w-full h-56 sm:h-full object-cover object-top" loading="lazy" />
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "var(--gradient-gold)" }} />
                    </div>
                    <div className="p-7 flex flex-col justify-between flex-1">
                      <div>
                        <p className="eyebrow mb-1.5">{member.role}</p>
                        <h2 className="heading-serif text-2xl font-medium mb-1 text-foreground">{member.name}</h2>
                        <GoldDivider className="mb-4" width="40px" />
                        <p className="text-sm leading-relaxed mb-4">{member.bio}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <GraduationCap size={14} className="text-gold shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground">{member.education}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gold">Bar:</span>
                          <span className="text-xs text-muted-foreground">{member.barNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN THE TEAM ─────────────────────────────────── */}
      <section className="section-sm" style={{ background: "hsl(var(--secondary))" }} aria-label="Join the team">
        <div className="container-law">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <p className="eyebrow mb-3">{t("team.join.eyebrow")}</p>
                <h2 className="heading-serif mb-4">{t("team.join.title")}</h2>
                <GoldDivider className="mb-6" width="60px" />
                <p className="leading-relaxed mb-6">{t("team.join.desc")}</p>
                <a href="mailto:careers@polycarpoulaw.cy" className="btn-outline-gold">{t("team.join.cta")} <ArrowRight size={15} /></a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4L3 6L7 2" stroke="hsl(222 47% 11%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span className="text-sm font-medium text-foreground" style={{ fontFamily: "var(--font-sans)" }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Call to action">
        <div className="container-law text-center">
          <Reveal>
            <h2 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>{t("team.cta.title")}</h2>
            <Link to="/contact" className="btn-primary mt-2">{t("team.cta.button")} <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
