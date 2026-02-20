import { Link } from "react-router-dom";
import {
  Briefcase, Scale, Building2, Heart, FileText,
  ArrowRight, CheckCircle, Clock, Search, MessageSquare, Handshake,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Briefcase, Scale, Building2, Heart, FileText,
};

const processTimeline = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial Consultation",
    description: "We meet to understand your legal situation, goals, and constraints. All discussions are fully confidential.",
  },
  {
    icon: Search,
    step: "02",
    title: "Case Assessment",
    description: "Our team conducts an in-depth review of all relevant facts, documents, and legal precedents.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Strategy Development",
    description: "We present a clear legal strategy, timeline, and transparent fee structure for your approval.",
  },
  {
    icon: Handshake,
    step: "04",
    title: "Active Representation",
    description: "We execute your legal strategy with precision — in court, at the negotiating table, or in documentation.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Resolution & Follow-up",
    description: "We see matters through to a successful conclusion and remain available for ongoing legal support.",
  },
];

export default function Services() {
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
            <p className="eyebrow mb-4">What We Offer</p>
            <h1
              className="heading-serif font-light mb-4"
              style={{ color: "hsl(40 27% 97%)" }}
            >
              Our Legal Services
            </h1>
            <p
              className="text-base max-w-xl mx-auto mt-4"
              style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}
            >
              Specialist legal counsel across five core practice areas, delivered by experienced attorneys who understand Cypriot law.
            </p>
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
              return (
                <Reveal key={service.id} delay={i * 0.05}>
                  <div
                    id={service.anchor}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-0 rounded-sm overflow-hidden`}
                    style={{ border: "1px solid hsl(var(--border))", boxShadow: "var(--shadow-sm)" }}
                  >
                    {/* Icon column */}
                    <div
                      className={`md:col-span-2 flex items-center justify-center p-8 ${isEven ? "md:order-last" : ""}`}
                      style={{ background: "var(--gradient-navy)" }}
                    >
                      <Icon size={40} className="text-gold" strokeWidth={1.25} />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10 p-8 md:p-10 bg-card">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex-1">
                          <p className="eyebrow mb-2">Practice Area {String(i + 1).padStart(2, "0")}</p>
                          <h2 className="heading-serif text-2xl font-medium mb-3 text-foreground">
                            {service.title}
                          </h2>
                          <GoldDivider className="mb-5" width="48px" />
                          <p className="leading-relaxed">{service.description}</p>
                        </div>
                        <div className="shrink-0">
                          <Link to="/contact" className="btn-primary text-xs whitespace-nowrap">
                            Enquire Now <ArrowRight size={14} />
                          </Link>
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
      <section
        className="section"
        style={{ background: "hsl(var(--secondary))" }}
        aria-label="How we work timeline"
      >
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">Our Approach</p>
              <h2 className="heading-serif">How We Work</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-[28px] top-0 bottom-0 w-px"
              style={{ background: "hsl(var(--border-gold))", opacity: 0.5 }}
            />

            <div className="space-y-10">
              {processTimeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.step} delay={i * 0.1}>
                    <div className="flex gap-8">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 relative z-10"
                        style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                      >
                        <Icon size={20} color="hsl(222 47% 11%)" strokeWidth={2} />
                      </div>
                      <div className="pt-2">
                        <span
                          className="text-xs font-semibold tracking-widest uppercase"
                          style={{ color: "hsl(var(--accent))", fontFamily: "var(--font-sans)" }}
                        >
                          Step {item.step}
                        </span>
                        <h3 className="heading-serif text-xl font-medium mt-1 mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed">{item.description}</p>
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
              Not sure which service you need?
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "hsl(0 0% 65%)" }}>
              Our attorneys will guide you to the right expertise in a free initial consultation.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Free Advice <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
