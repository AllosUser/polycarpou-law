import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Mail, Globe, Scale, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { team } from "@/data/team";
import { useI18n } from "@/lib/i18n";

type L = "en" | "el";

export default function OurPeopleMember() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useI18n();
  const l = lang as L;

  const member = team.find((m) => m.id === slug);

  useEffect(() => {
    if (!member) return;
    const prev = document.title;
    document.title = `${member.name[l]} — Andreas Polycarpou & Co LLC`;
    return () => { document.title = prev; };
  }, [member, l]);

  if (!member) return <Navigate to="/team" replace />;

  const bioParagraphs = member.bio[l].split("\n\n").filter(Boolean);
  const degrees = member.education[l]
    .split(" · ")
    .map((d) => d.trim())
    .filter(Boolean);

  return (
    <>
      {/* ── MAIN PROFILE — off-white background ──────────── */}
      <section className="bg-background" aria-label="Profile">
        <div className="container-law pt-24 lg:pt-28 pb-20">

          {/* Back link */}
          <Reveal>
            <Link
              to="/team"
              className="inline-flex items-center gap-1.5 mb-8 transition-colors duration-200 hover:text-gold"
              style={{
                color: "hsl(var(--muted-foreground))",
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={13} />
              {t("people.backTo")}
            </Link>
          </Reveal>

          {/* ── Mobile-only: name/role above the image ── */}
          <Reveal>
            <div className="lg:hidden mb-7">
              <p className="eyebrow mb-2">{member.role[l]}</p>
              <h1
                className="heading-serif font-light mb-4 text-foreground"
                style={{ fontSize: "clamp(1.6rem, 6vw, 2.4rem)" }}
              >
                {member.name[l]}
              </h1>
              <GoldDivider width="44px" />
            </div>
          </Reveal>

          {/* ── Two-column grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 xl:gap-14 items-start">

            {/* ── LEFT: Portrait + Contact card ── */}
            <div className="space-y-5">

              {/* Portrait */}
              <Reveal direction="left">
                <div
                  className="rounded-sm overflow-hidden"
                  style={{
                    border: "1px solid hsl(var(--border))",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name[l]}
                    className="w-full object-cover object-top block"
                    style={{ aspectRatio: "3/4" }}
                    loading="eager"
                  />
                  <div className="h-0.5" style={{ background: "var(--gradient-gold)" }} />
                </div>
              </Reveal>

              {/* Unified info card — compact professional panel */}
              <Reveal direction="left" delay={0.08}>
                <div
                  className="rounded-sm p-4"
                  style={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {/* Education — first: no leading divider */}
                  {degrees.length > 0 && (
                    <div>
                      <p className="eyebrow text-[0.55rem] mb-1">{t("people.education")}</p>
                      <div className="space-y-1.5">
                        {degrees.map((deg, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <GraduationCap size={11} className="text-gold shrink-0 mt-[2px]" />
                            <p className="text-xs text-foreground leading-snug">{deg}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bar Admission */}
                  {member.barNumber[l] && (
                    <div className="border-t border-border/40 mt-3 pt-3">
                      <p className="eyebrow text-[0.55rem] mb-1">{t("people.bar")}</p>
                      <div className="flex items-start gap-1.5">
                        <Scale size={11} className="text-gold shrink-0 mt-[2px]" />
                        <p className="text-xs text-foreground leading-snug">
                          {member.barNumber[l]}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Languages */}
                  <div className="border-t border-border/40 mt-3 pt-3">
                    <p className="eyebrow text-[0.55rem] mb-1">{t("people.languages")}</p>
                    <div className="flex items-center gap-1.5">
                      <Globe size={11} className="text-gold shrink-0" />
                      <p className="text-xs text-foreground leading-snug">{member.languages[l]}</p>
                    </div>
                  </div>

                  {/* Email — last: slightly more prominent */}
                  <div className="border-t border-border/40 mt-3 pt-3">
                    <p className="eyebrow text-[0.55rem] mb-1">{t("people.email")}</p>
                    <div className="flex items-center gap-1.5">
                      <Mail size={11} className="text-gold shrink-0" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs text-foreground font-medium hover:text-gold hover:underline transition-colors duration-200 break-all leading-snug"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT: Name (desktop) + Bio + Education ── */}
            <div>

              {/* Desktop-only: name/role here, next to the portrait */}
              <div className="hidden lg:block mb-8">
                <Reveal direction="right">
                  <p className="eyebrow mb-2">{member.role[l]}</p>
                  <h1
                    className="heading-serif font-light text-foreground mb-5"
                    style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)" }}
                  >
                    {member.name[l]}
                  </h1>
                  <GoldDivider width="48px" />
                </Reveal>
              </div>

              {/* Biography — right column only; education/contact are in the left column */}
              <Reveal direction="right" delay={0.05}>
                <div className="space-y-4 mt-6 lg:mt-8">
                  {bioParagraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-[1.88] text-justify sm:text-left"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="section-sm"
        style={{ background: "var(--gradient-navy)" }}
        aria-label="Call to action"
      >
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
      </section>
    </>
  );
}
