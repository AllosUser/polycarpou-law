import { Link } from "react-router-dom";
import { Shield, Target, Users, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { values } from "@/lib/data";
import founderImg from "@/assets/founder.jpg";

const iconMap: Record<string, React.ElementType> = { Shield, Target, Users };

export default function About() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section
        className="pt-36 pb-20 section-sm"
        style={{ background: "var(--gradient-navy)" }}
        aria-label="Page header"
      >
        <div className="container-law text-center">
          <Reveal>
            <p className="eyebrow mb-4">Our Firm</p>
            <h1
              className="heading-serif font-light mb-4"
              style={{ color: "hsl(40 27% 97%)" }}
            >
              About Polycarpou Law
            </h1>
            <GoldDivider className="mx-auto" width="60px" />
          </Reveal>
        </div>
      </section>

      {/* ── FIRM STORY + FOUNDER ─────────────────────────── */}
      <section className="section bg-background" aria-label="Firm story">
        <div className="container-law">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <p className="eyebrow mb-3">Our Story</p>
                <h2 className="heading-serif mb-6">
                  Founded on Principle. Built for Results.
                </h2>
                <GoldDivider className="mb-8" width="80px" />
                <div className="space-y-4">
                  <p>
                    Polycarpou Law was established in 2009 by Andreas Polycarpou with a single conviction: that clients deserve boutique-quality legal counsel without the impersonal experience of a large firm.
                  </p>
                  <p>
                    Over 15 years, we have grown from a sole practitioner's office into a team of five dedicated attorneys spanning corporate law, civil litigation, real estate, family law, and contract law.
                  </p>
                  <p>
                    Today, we serve a diverse clientele of Cypriot individuals, international investors, and multinational corporations — all united by their demand for precision, transparency, and results.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/team" className="btn-outline-gold">
                    Meet the Team <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full rounded-sm"
                  style={{ border: "1px solid hsl(var(--border-gold))", opacity: 0.5 }}
                />
                <img
                  src={founderImg}
                  alt="Andreas Polycarpou, Founding Partner"
                  className="relative rounded-sm object-cover w-full"
                  style={{ maxHeight: "500px", objectPosition: "top", boxShadow: "var(--shadow-lg)" }}
                />
                <div
                  className="absolute bottom-6 left-6 right-6 rounded-sm p-4"
                  style={{
                    background: "hsl(222 47% 11% / 0.92)",
                    backdropFilter: "blur(8px)",
                    borderTop: "2px solid hsl(var(--accent))",
                  }}
                >
                  <p className="heading-serif text-lg font-medium" style={{ color: "hsl(40 27% 97%)" }}>
                    Andreas Polycarpou
                  </p>
                  <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "hsl(var(--accent))" }}>
                    Founding Partner · Cyprus Bar #1024
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION ─────────────────────────────── */}
      <section className="section" style={{ background: "hsl(var(--secondary))" }} aria-label="Mission and vision">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">What Drives Us</p>
              <h2 className="heading-serif">Mission & Vision</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <Reveal delay={0.1}>
              <div className="p-10 md:p-14 bg-card rounded-sm md:rounded-r-none" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="heading-serif text-2xl font-medium mb-4 text-foreground">Our Mission</h3>
                <GoldDivider className="mb-6" width="48px" />
                <p className="leading-relaxed">
                  To provide individuals and businesses in Cyprus with access to the highest calibre legal representation — combining rigorous legal analysis with practical, commercially-minded advice.
                </p>
                <p className="mt-4 leading-relaxed">
                  We exist to protect what matters most to our clients: their rights, their assets, and their futures.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                className="p-10 md:p-14 rounded-sm md:rounded-l-none relative overflow-hidden"
                style={{ background: "var(--gradient-navy)", boxShadow: "var(--shadow-sm)" }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                  style={{ background: "hsl(var(--accent))", transform: "translate(30%, -30%)" }}
                />
                <h3 className="heading-serif text-2xl font-medium mb-4" style={{ color: "hsl(40 27% 97%)" }}>
                  Our Vision
                </h3>
                <GoldDivider className="mb-6" width="48px" />
                <p className="leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>
                  To be recognised as Cyprus's most trusted boutique law firm — distinguished not by size, but by the depth of our expertise and the strength of our client relationships.
                </p>
                <p className="mt-4 leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>
                  We aspire to set the standard for legal excellence on the island and beyond.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="section bg-background" aria-label="Our values">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">What We Stand For</p>
              <h2 className="heading-serif">Our Core Values</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = iconMap[value.icon];
              return (
                <Reveal key={value.title} delay={i * 0.12}>
                  <div className="text-center p-8">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "hsl(var(--accent-light))" }}
                    >
                      <Icon size={22} className="text-gold" />
                    </div>
                    <h3 className="heading-serif text-2xl font-medium mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <GoldDivider className="mx-auto mb-5" width="40px" />
                    <p className="text-sm leading-relaxed">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="section-sm"
        style={{ background: "hsl(var(--secondary))" }}
        aria-label="Call to action"
      >
        <div className="container-law text-center">
          <Reveal>
            <h2 className="heading-serif mb-4">Ready to work with us?</h2>
            <p className="text-base mb-8 max-w-md mx-auto">
              Get in touch today for a confidential, no-obligation consultation.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
