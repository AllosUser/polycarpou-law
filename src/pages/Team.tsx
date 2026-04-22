import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, Mail, Globe } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionReveal } from "@/components/SectionReveal";
import { GoldDivider } from "@/components/GoldDivider";
import { motion } from "framer-motion";
import { team } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const CARD_CHAR_LIMIT = 180;

type Member = (typeof team)[number];
type L = "en" | "el";

/* ────────────────────────────────────────────────────────────
   MemberCard — the normal collapsed card in the 2‑col grid
   ──────────────────────────────────────────────────────────── */
function MemberCard({
  member,
  lang,
  isExpanded,
  isRightCard,
  readMoreLbl,
  readLessLbl,
  onToggle,
  t,
}: {
  member: Member;
  lang: L;
  isExpanded: boolean;
  isRightCard: boolean;
  readMoreLbl: string;
  readLessLbl: string;
  onToggle: () => void;
  t: (k: string) => string;
}) {
  const bioText = member.bio[lang] || t("team.staff.sofia.desc");
  const needsTruncation = bioText.length > CARD_CHAR_LIMIT;

  return (
    <article
      className="team-card bg-card h-full flex flex-col transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
      aria-label={`${member.name[lang]}, ${member.role[lang]}`}
    >
      <div 
        className={`flex flex-col sm:flex-row h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isRightCard && isExpanded ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image wrapper: team-card-img-wrap = 288px on mobile, auto on sm+ */}
        <div
          className={`team-card-img-wrap shrink-0 relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isExpanded ? "sm:basis-[35%] sm:min-w-[280px]" : "sm:basis-[12rem] sm:min-w-[192px]"
          }`}
        >
          <img
            src={member.image}
            alt={`${member.name[lang]} — ${member.role[lang]}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            loading="lazy"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: "var(--gradient-gold)" }}
          />
        </div>
        <div className="p-7 flex flex-col justify-between flex-1 min-w-0">
          <div className="flex-1">
            <p className="eyebrow mb-1.5">{member.role[lang]}</p>
            <h2 className="heading-serif text-2xl font-medium mb-1 text-foreground">
              {member.name[lang]}
            </h2>
            <GoldDivider className="mb-4" width="40px" />
            
            <div 
               className="relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
               style={{ 
                 maxHeight: isExpanded ? "2000px" : "120px",
                 marginBottom: "1rem"
               }}
            >
               <p className="text-sm leading-relaxed m-0 whitespace-pre-line text-muted-foreground pb-4">
                 {bioText}
               </p>
               {!isExpanded && needsTruncation && (
                 <div
                   className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
                   style={{
                     background: "linear-gradient(transparent, hsl(var(--card)))",
                   }}
                 />
               )}
            </div>
            
            {needsTruncation && (
              <button
                onClick={onToggle}
                className="text-xs font-medium border-0 bg-transparent cursor-pointer p-0 mb-4 hover:underline transition-all"
                style={{ color: "hsl(var(--accent))" }}
              >
                {isExpanded ? readLessLbl : readMoreLbl}
              </button>
            )}
          </div>
          <div className="space-y-2 mt-4">
            {member.education[lang] && (
              <div className="flex items-start gap-2">
                <GraduationCap size={14} className="text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-muted-foreground">
                  {member.education[lang]}
                </span>
              </div>
            )}
            {member.barNumber[lang] && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gold">Bar:</span>
                <span className="text-xs text-muted-foreground">
                  {member.barNumber[lang]}
                </span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Globe size={12} className="text-gold" />
              <span className="text-xs text-muted-foreground">
                {member.languages[lang]}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={12} className="text-gold" />
              <a
                href={`mailto:${member.email}`}
                className="text-xs text-muted-foreground hover:text-gold transition-colors"
              >
                {member.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ────────────────────────────────────────────────────────────
   HeroMeta — education / bar / languages / email strip
   ──────────────────────────────────────────────────────────── */
function HeroMeta({ founder, lang }: { founder: Member; lang: L }) {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2">
        <GraduationCap size={14} className="text-gold shrink-0 mt-0.5" />
        <span className="text-xs" style={{ color: "hsl(0 0% 58%)" }}>
          {founder.education[lang]}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-gold">Bar:</span>
        <span className="text-xs" style={{ color: "hsl(0 0% 58%)" }}>
          {founder.barNumber[lang]}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <Globe size={12} className="text-gold" />
        <span className="text-xs" style={{ color: "hsl(0 0% 58%)" }}>
          {founder.languages[lang]}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <Mail size={12} className="text-gold" />
        <a
          href={`mailto:${founder.email}`}
          className="text-xs hover:text-gold transition-colors"
          style={{ color: "hsl(0 0% 58%)" }}
        >
          {founder.email}
        </a>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════════════════════ */
export default function Team() {
  const { t, lang } = useI18n();
  const l = lang as L;

  const founder = team[0];
  const members = team.slice(1);

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  const cardsRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (id: string) => {
    const isExpanding = expandedId !== id;
    setExpandedId(isExpanding ? id : null);

    if (isExpanding) {
      setTimeout(() => {
        const el = cardsRef.current[id];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    }
  };

  const readMoreLbl = lang === "el" ? "Περισσότερα →" : "Read more →";
  const readLessLbl = lang === "el" ? "Λιγότερα ←" : "Read less ←";

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
              {/* Mobile title — shorter, always centered */}
              <h1
                className="heading-serif font-light mb-4 sm:hidden text-center"
                style={{ color: "hsl(40 27% 97%)" }}
              >
                {l === "el" ? "Η Ομάδα μας" : "Meet Our Team"}
              </h1>
              {/* Desktop title */}
              <h1
                className="heading-serif font-light mb-4 hidden sm:block"
                style={{ color: "hsl(40 27% 97%)" }}
              >
                {t("team.title")}
              </h1>
              <p
                className="text-base max-w-xl mx-auto mt-4"
                style={{
                  color: "hsl(0 0% 65%)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {t("team.desc")}
              </p>
              <GoldDivider className="mx-auto mt-8" width="60px" />
            </Reveal>
          </div>
        </SectionReveal>
      </section>

      {/* ── FOUNDER HERO CARD ────────────────────────────── */}
      <section className="section bg-background" aria-label="Founder">
        <SectionReveal delay={0.05}>
          <div className="container-law">
            <Reveal>
              <article
                className="team-card overflow-hidden rounded-sm"
                style={{
                  background: "hsl(222 47% 11%)",
                  border: "1px solid hsl(var(--border-gold) / 0.4)",
                  boxShadow: "var(--shadow-lg)",
                }}
                aria-label={`${founder.name[l]}, ${founder.role[l]}`}
              >
                {/* Desktop: 2-col flex, align-items: flex-start
                    so right col can grow past the 400px image */}
                <div
                  className="hidden lg:flex"
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    minHeight: 400,
                  }}
                >
                  {/* Photo — locked at 40% × 400px, never grows */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "40%",
                      height: 400,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={founder.image}
                      alt={`${founder.name[l]} — ${founder.role[l]}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                      }}
                      loading="lazy"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ background: "var(--gradient-gold)" }}
                    />
                  </div>

                  {/* Text — flex: 1, grows independently */}
                  <div style={{ flex: 1 }} className="p-8 lg:p-12">
                    <p
                      className="eyebrow mb-2"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {founder.role[l]}
                    </p>
                    <h2
                      className="heading-serif text-3xl lg:text-4xl font-medium mb-2"
                      style={{ color: "hsl(40 27% 97%)" }}
                    >
                      {founder.name[l]}
                    </h2>
                    <GoldDivider className="mb-6" width="60px" />

                    <div className="mb-8">
                      <p
                        className="text-sm leading-relaxed m-0"
                        style={{ color: "hsl(0 0% 72%)" }}
                      >
                        {founder.bio[l].split("\n\n")[0]}
                      </p>
                    </div>
                    <HeroMeta founder={founder} lang={l} />
                    <button
                      onClick={() => setProfileOpen((p) => !p)}
                      className="mt-6 text-sm font-medium border-0 bg-transparent cursor-pointer p-0 hover:underline transition-all"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {profileOpen
                        ? (l === "el" ? "Απόκρυψη Προφίλ ↑" : "Hide Profile ↑")
                        : (l === "el" ? "Προβολή Προφίλ ↓" : "Show Profile ↓")}
                    </button>
                  </div>
                </div>

                {/* Mobile: stacked, fixed image on top */}
                <div className="lg:hidden">
                  <div
                    className="relative overflow-hidden"
                    style={{ height: 288 }}
                  >
                    <img
                      src={founder.image}
                      alt={`${founder.name[l]} — ${founder.role[l]}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ background: "var(--gradient-gold)" }}
                    />
                  </div>
                  <div className="p-8 flex flex-col">
                    <p
                      className="eyebrow mb-2"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {founder.role[l]}
                    </p>
                    <h2
                      className="heading-serif text-3xl font-medium mb-2"
                      style={{ color: "hsl(40 27% 97%)" }}
                    >
                      {founder.name[l]}
                    </h2>
                    <GoldDivider className="mb-6" width="60px" />

                    <div className="mb-8">
                      <p
                        className="text-sm leading-relaxed m-0"
                        style={{ color: "hsl(0 0% 72%)" }}
                      >
                        {founder.bio[l].split("\n\n")[0]}
                      </p>
                    </div>
                    <HeroMeta founder={founder} lang={l} />
                    <button
                      onClick={() => setProfileOpen((p) => !p)}
                      className="mt-6 text-sm font-medium border-0 bg-transparent cursor-pointer p-0 hover:underline transition-all"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {profileOpen
                        ? (l === "el" ? "Απόκρυψη Προφίλ ↑" : "Hide Profile ↑")
                        : (l === "el" ? "Προβολή Προφίλ →" : "Show Profile →")}
                    </button>
                  </div>
                </div>

                {/* ── EXPANDABLE PROFILE SECTION ── */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: profileOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 400ms ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div
                      className="bg-card p-8 lg:p-12"
                      style={{ borderTop: "1px solid hsl(var(--border-gold) / 0.2)" }}
                    >
                      <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-6 mb-8">
                          <h3 className="heading-serif text-2xl font-light tracking-wide text-foreground">
                            {l === "el" ? "Επαγγελματικό Προφίλ" : "Professional Profile"}
                          </h3>
                        </div>

                        <div className="space-y-6">
                          {founder.bio[l].split("\n\n").slice(1).map((paragraph, idx) => (
                            <p key={idx} className="text-sm leading-relaxed text-muted-foreground text-justify sm:text-left">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </SectionReveal>
      </section>

      {/* ── TEAM GRID — unified reflowing grid ──────────── */}
      <section
        className="section bg-background pt-0"
        aria-label="Team members"
      >
        <SectionReveal delay={0.05}>
          <div className="container-law pb-8">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
              {(() => {
                let reordered = [...members];
                if (expandedId && isDesktop) {
                  const expandedIndex = members.findIndex((m) => m.id === expandedId);
                  if (expandedIndex !== -1) {
                    const parentRowStart = Math.floor(expandedIndex / 2) * 2;
                    const expandedItem = members[expandedIndex];
                    const siblingIndex =
                      expandedIndex === parentRowStart ? parentRowStart + 1 : parentRowStart;
                    const siblingItem = members[siblingIndex];

                    reordered[parentRowStart] = expandedItem;
                    if (siblingItem) {
                      reordered[parentRowStart + 1] = siblingItem;
                    }
                  }
                }

                return reordered.map((member) => {
                  const isExpanded = expandedId === member.id;
                  const originalIndex = members.findIndex((m) => m.id === member.id);
                  const isRightColumn = originalIndex % 2 === 1;

                  return (
                    <motion.div
                      ref={(el) => { cardsRef.current[member.id] = el; }}
                      layout
                      initial={{ borderRadius: 8 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      key={member.id}
                      className={`h-full scroll-mt-24 md:scroll-mt-32 ${
                        isExpanded ? "md:col-span-2 z-10" : "md:col-span-1"
                      }`}
                    >
                      <Reveal
                        delay={0.1 * originalIndex}
                        direction={isRightColumn ? "right" : "left"}
                        className="h-full"
                      >
                        <MemberCard
                          member={member}
                          lang={l}
                          isExpanded={isExpanded}
                          isRightCard={isRightColumn}
                          readMoreLbl={readMoreLbl}
                          readLessLbl={readLessLbl}
                          onToggle={() => toggle(member.id)}
                          t={t}
                        />
                      </Reveal>
                    </motion.div>
                  );
                });
              })()}
            </motion.div>
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
                  <a
                    href="mailto:info@polycarpoulaw.com"
                    className="btn-outline-gold"
                  >
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
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                          >
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
