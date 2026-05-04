import { Link } from "react-router-dom";
import { ArrowRight, Scale, Globe, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";
import { team } from "@/data/team";
import { useI18n } from "@/lib/i18n";
import { useSEO } from "@/hooks/useSEO";

type L = "en" | "el";

export default function Team() {
  const { t, lang } = useI18n();
  const l = lang as L;
  useSEO({
    title: "Our People | Lawyers in Nicosia, Cyprus | Polycarpou Law",
    description:
      "Meet the legal team at Andreas Polycarpou & Co LLC — experienced lawyers and legal professionals based in Nicosia, Cyprus.",
    canonical: "/team",
  });

  const benefits = [
    t("team.join.b1"),
    t("team.join.b2"),
    t("team.join.b3"),
    t("team.join.b4"),
    t("team.join.b5"),
  ];

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section
        className="pt-36 pb-20 section-sm"
        style={{ background: "var(--gradient-navy)" }}
        aria-label="Page header"
      >
        <SectionReveal>
          <div className="container-law text-center">
            <Reveal>
              <p className="eyebrow mb-4">{t("team.eyebrow")}</p>
              <h1
                className="heading-serif font-light mb-4 sm:hidden text-center"
                style={{ color: "hsl(40 27% 97%)" }}
              >
                {l === "el" ? "Η Ομάδα μας" : "Meet Our Team"}
              </h1>
              <h1
                className="heading-serif font-light mb-4 hidden sm:block"
                style={{ color: "hsl(40 27% 97%)" }}
              >
                {t("team.title")}
              </h1>
              <p
                className="text-base max-w-xl mx-auto mt-4"
                style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}
              >
                {t("team.desc")}
              </p>
              <GoldDivider className="mx-auto mt-8" width="60px" />
            </Reveal>
          </div>
        </SectionReveal>
      </section>

      {/* ── PEOPLE GRID ──────────────────────────────────── */}
      <section className="section bg-background" aria-label="Our People">
        <SectionReveal>
          <div className="container-law">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {team.map((member, i) => (
                <Reveal key={member.id} delay={i * 0.07}>
                  <Link
                    to={`/our-people/${member.id}`}
                    className="people-card block group"
                    aria-label={`${member.name[l]}, ${member.role[l]}`}
                  >
                    {/* Portrait photo */}
                    <div className="aspect-[4/3.75] sm:aspect-[4/5] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name[l]}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Card info */}
                    <div className="p-4 pb-5">
                      <p className="eyebrow capitalize mb-1 text-[10px]">{member.role[l]}</p>
                      <h3 className="heading-serif text-lg font-medium text-foreground leading-tight mb-2">
                        {member.name[l]}
                      </h3>
                      <GoldDivider className="mb-3" width="24px" />

                      {/* Compact meta lines */}
                      <div className="space-y-1.5">
                        {member.barNumber[l] && (
                          <div className="flex items-center gap-2">
                            <Scale size={11} className="text-gold shrink-0" />
                            <span className="text-[11px] text-muted-foreground leading-snug line-clamp-1">
                              {member.barNumber[l]}
                            </span>
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          <Globe size={11} className="text-gold shrink-0" />
                          <span className="text-[11px] text-muted-foreground leading-snug">
                            {member.languages[l]}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Mail size={11} className="text-gold shrink-0" />
                          <span className="text-[11px] text-muted-foreground leading-snug truncate">
                            {member.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── JOIN THE TEAM ─────────────────────────────────── */}
      <section
        className="section-sm"
        style={{ background: "hsl(var(--secondary))" }}
        aria-label="Join the team"
      >
        <SectionReveal delay={0.05}>
          <div className="container-law">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Reveal direction="left">
                <div>
                  <p className="eyebrow mb-3">{t("team.join.eyebrow")}</p>
                  <h2 className="heading-serif mb-4">{t("team.join.title")}</h2>
                  <GoldDivider className="mb-6" width="60px" />
                  <p className="leading-relaxed mb-6">{t("team.join.desc")}</p>
                  <a href="mailto:info@polycarpoulaw.com" className="btn-outline-gold">
                    {t("team.join.cta")} <ArrowRight size={15} />
                  </a>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.15}>
                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <Reveal key={benefit} delay={0.2 + i * 0.06}>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
                          style={{ background: "var(--gradient-gold)" }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path
                              d="M1 4L3 6L7 2"
                              stroke="hsl(222 47% 11%)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span
                          className="text-sm font-medium text-foreground"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {benefit}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="section-sm"
        style={{ background: "var(--gradient-navy)" }}
        aria-label="Call to action"
      >
        <SectionReveal delay={0.1}>
          <div className="container-law text-center">
            <Reveal>
              <h2
                className="heading-serif font-light mb-4"
                style={{ color: "hsl(40 27% 97%)" }}
              >
                {t("team.cta.title")}
              </h2>
              <Link to="/contact" className="btn-primary mt-2">
                {t("team.cta.button")} <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
