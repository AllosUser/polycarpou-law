import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail, Globe, Scale, GraduationCap, Briefcase, CalendarDays, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { team } from "@/data/team";
import { useI18n } from "@/lib/i18n";
import { useSEO, SITE_URL } from "@/hooks/useSEO";

type L = "en" | "el";

export default function OurPeopleMember() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useI18n();
  const l = lang as L;

  const member = team.find((m) => m.id === slug);

  // Helper to safely get bio string or array
  const getBioString = (bio: string | string[]) => Array.isArray(bio) ? bio.join("\n\n") : bio;
  const getBioArray = (bio: string | string[]) => Array.isArray(bio) ? bio : bio.split("\n\n").filter(Boolean);

  // Build SEO data regardless of member existence — hooks must be called unconditionally
  const memberTitle = member
    ? `${member.name.en} — ${member.role.en} | Andreas Polycarpou & Co LLC`
    : "Our People | Andreas Polycarpou & Co LLC";
  const memberDesc = member
    ? `${member.name.en} is ${member.role.en} at Andreas Polycarpou & Co LLC in Nicosia, Cyprus. ${getBioString(member.bio.en).split("\n\n")[0].slice(0, 160)}...`
    : "Meet the legal team at Andreas Polycarpou & Co LLC — experienced lawyers in Nicosia, Cyprus.";
  const memberCanonical = member ? `/our-people/${member.id}` : "/team";

  const personSchema = member
    ? [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Our People", item: `${SITE_URL}/team` },
            { "@type": "ListItem", position: 3, name: member.name.en, item: `${SITE_URL}/our-people/${member.id}` },
          ],
        },
        {
          "@type": "Person",
          name: member.name.en,
          jobTitle: member.role.en,
          email: member.email,
          url: `${SITE_URL}/our-people/${member.id}`,
          description: getBioString(member.bio.en).split("\n\n")[0].slice(0, 300),
          worksFor: {
            "@type": "LegalService",
            name: "ANDREAS POLYCARPOU & CO LLC",
            url: SITE_URL,
          },
          knowsLanguage: member.languages.en.split(", "),
          ...(member.education.en
            ? {
                alumniOf: member.education.en.split(" · ").map((edu) => ({
                  "@type": "EducationalOrganization",
                  name: edu.trim(),
                })),
              }
            : {}),
        },
      ]
    : undefined;

  useSEO({
    title: memberTitle,
    description: memberDesc,
    canonical: memberCanonical,
    schema: personSchema,
  });

  if (!member) return <Navigate to="/team" replace />;

  const bioParagraphs = getBioArray(member.bio[l]);
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
                    className="w-full object-contain block bg-secondary"
                    style={{ aspectRatio: "2/3" }}
                    loading="eager"
                  />
                  <div className="h-0.5" style={{ background: "var(--gradient-gold)" }} />
                </div>
              </Reveal>

              {/* Unified info card — compact professional panel */}
              <Reveal direction="left" delay={0.08}>
                <div
                  className="rounded-sm p-4 [&>*]:border-t [&>*]:border-border/40 [&>*]:mt-3 [&>*]:pt-3 [&>*:first-child]:border-t-0 [&>*:first-child]:mt-0 [&>*:first-child]:pt-0"
                  style={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {/* Role — shown for non-lawyer staff (no education/bar) */}
                  {!degrees.length && !member.barNumber[l] && (
                    <div>
                      <p className="eyebrow text-[0.55rem] mb-1">{t("people.role")}</p>
                      <div className="flex items-start gap-1.5">
                        <Briefcase size={11} className="text-gold shrink-0 mt-[2px]" />
                        <p className="text-xs text-foreground leading-snug">{member.role[l]}</p>
                      </div>
                    </div>
                  )}

                  {/* Education */}
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
                    <div>
                      <p className="eyebrow text-[0.55rem] mb-1">{t("people.bar")}</p>
                      <div className="flex items-start gap-1.5">
                        <Scale size={11} className="text-gold shrink-0 mt-[2px]" />
                        <p className="text-xs text-foreground leading-snug">
                          {member.barNumber[l]}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* With our firm since */}
                  {member.joined[l] && (
                    <div>
                      <p className="eyebrow text-[0.55rem] mb-1">{t("people.joined")}</p>
                      <div className="flex items-start gap-1.5">
                        <CalendarDays size={11} className="text-gold shrink-0 mt-[2px]" />
                        <p className="text-xs text-foreground leading-snug">{member.joined[l]}</p>
                      </div>
                    </div>
                  )}

                  {/* Languages */}
                  <div>
                    <p className="eyebrow text-[0.55rem] mb-1">{t("people.languages")}</p>
                    <div className="flex items-center gap-1.5">
                      <Globe size={11} className="text-gold shrink-0" />
                      <p className="text-xs text-foreground leading-snug">{member.languages[l]}</p>
                    </div>
                  </div>

                  {/* Telephone */}
                  {member.phone && (
                    <div>
                      <p className="eyebrow text-[0.55rem] mb-1">{t("people.phone")}</p>
                      <div className="flex items-center gap-1.5">
                        <Phone size={11} className="text-gold shrink-0" />
                        <a
                          href={`tel:${member.phone}`}
                          className="text-xs text-foreground font-medium hover:text-gold hover:underline transition-colors duration-200 leading-snug"
                        >
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Email — last: slightly more prominent */}
                  <div>
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
