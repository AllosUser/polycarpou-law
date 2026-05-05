import { Link } from "react-router-dom";
import { Scale, ArrowRight, CheckCircle, FileText, Briefcase, ShieldCheck, AlertCircle, Handshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { useSEO } from "@/hooks/useSEO";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Civil Litigation Services — Andreas Polycarpou & Co LLC",
  serviceType: "Civil Litigation",
  description:
    "Expert civil litigation lawyers in Cyprus. Courtroom representation, dispute resolution, debt recovery and commercial litigation at all levels of the Cypriot judiciary.",
  url: "https://andreaspolycarpou.com.cy/litigation-lawyer-cyprus",
  provider: {
    "@type": "LegalService",
    name: "Andreas Polycarpou & Co LLC",
    url: "https://andreaspolycarpou.com.cy",
    telephone: "+35722755135",
    email: "info@polycarpoulaw.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Arch. Makarios III Avenue 1-7, Office 201",
      addressLocality: "Nicosia",
      addressRegion: "Nicosia",
      postalCode: "1065",
      addressCountry: "CY",
    },
    areaServed: { "@type": "Country", name: "Cyprus" },
  },
};

const services = [
  {
    icon: Scale,
    title: "Civil Litigation",
    body:
      "Representation in civil proceedings across all levels of the Cyprus court system — District Courts, the Assize Court, and the Supreme Court — with thorough preparation and authoritative advocacy.",
  },
  {
    icon: Briefcase,
    title: "Commercial Disputes",
    body:
      "Acting for businesses in contract disputes, partnership disagreements, breach of warranty claims, and other commercial matters, with a focus on delivering swift, cost-effective outcomes.",
  },
  {
    icon: FileText,
    title: "Debt Recovery",
    body:
      "Pursuing outstanding debts through the Cypriot courts, including summary judgment applications, garnishee orders, and enforcement of judgments against assets in Cyprus.",
  },
  {
    icon: AlertCircle,
    title: "Injunctions & Interim Relief",
    body:
      "Obtaining urgent injunctive relief in the Cyprus courts to freeze assets, restrain conduct, or preserve evidence — acting quickly when clients face immediate risk of loss.",
  },
  {
    icon: Handshake,
    title: "Mediation & Alternative Dispute Resolution",
    body:
      "Representing clients in mediation and other forms of ADR as alternatives to litigation, often achieving faster and more cost-effective resolutions than formal court proceedings.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Liability Disputes",
    body:
      "Drawing on extensive experience as external counsel to Atlantic Insurance, we advise both claimants and insurers in compensation, liability, and insurance coverage disputes.",
  },
];

const stats = [
  { value: "20+", label: "Years of litigation experience" },
  { value: "All", label: "Cyprus court levels covered" },
  { value: "EN · EL", label: "Bilingual representation" },
  { value: "CBA", label: "Cyprus Bar Association member" },
];

export default function LitigationLawyerCyprus() {
  useSEO({
    title: "Litigation Lawyer Cyprus | Civil Disputes & Court Representation | Polycarpou Law",
    description:
      "Civil litigation lawyers in Cyprus. Expert courtroom representation, commercial disputes, debt recovery and injunctions at all levels of the Cypriot judiciary.",
    canonical: "/litigation-lawyer-cyprus",
    schema: SCHEMA,
  });

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────── */}
      <section className="pt-36 pb-20 section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Page header">
        <div className="container-law text-center">
          <Reveal>
            <p className="eyebrow mb-4">Practice Area</p>
            <h1 className="heading-serif font-light mb-5" style={{ color: "hsl(40 27% 97%)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Litigation Lawyer in Cyprus
            </h1>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>
              Results-driven civil litigation and dispute resolution across the Cyprus court system — combining meticulous preparation with decisive courtroom advocacy.
            </p>
            <GoldDivider className="mx-auto mt-8" width="60px" />
          </Reveal>
        </div>
      </section>

      {/* ── INTRODUCTION ─────────────────────────────────── */}
      <section className="section bg-background" aria-label="Introduction">
        <div className="container-law">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <Reveal direction="left">
              <div>
                <p className="eyebrow mb-3">Litigation in Cyprus</p>
                <h2 className="heading-serif mb-5">Civil Litigation Lawyers in Nicosia</h2>
                <GoldDivider className="mb-7" width="48px" />
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    The Cyprus legal system is based on English Common Law, making it broadly familiar to international clients while containing important local procedural nuances. Effective litigation in Cyprus requires a lawyer with both a strong grasp of substantive Cypriot law and experience in the practical realities of the District Courts, Assize Court, and Supreme Court.
                  </p>
                  <p className="leading-relaxed">
                    Andreas Polycarpou, founder of the firm, has handled a large volume of civil and commercial disputes throughout his career, representing both private individuals and businesses. The firm's litigation practice covers contract disputes, debt recovery, commercial claims, property disputes, employment matters, and more.
                  </p>
                  <p className="leading-relaxed">
                    We approach every dispute with a clear strategy — assessing the merits, quantifying the risks, and pursuing the outcome most aligned with the client's commercial and personal interests. Where appropriate, we explore negotiated settlements and ADR as alternatives to prolonged court proceedings.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">Schedule a Consultation <ArrowRight size={15} /></Link>
                  <Link to="/services" className="btn-secondary">All Practice Areas</Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="space-y-5">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-sm p-5 text-center" style={{ background: "var(--gradient-navy)", border: "1px solid hsl(var(--border-gold) / 0.3)", boxShadow: "var(--shadow-sm)" }}>
                      <p className="heading-serif text-2xl font-medium text-gold mb-1">{s.value}</p>
                      <p className="text-xs uppercase tracking-wider" style={{ color: "hsl(0 0% 55%)", fontFamily: "var(--font-sans)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                {/* Court system note */}
                <div className="rounded-sm p-6" style={{ background: "var(--gradient-navy)", boxShadow: "var(--shadow-md)" }}>
                  <p className="eyebrow mb-3" style={{ color: "hsl(var(--accent))" }}>Cyprus Court System</p>
                  <ul className="space-y-2.5">
                    {[
                      "District Courts — first instance civil & criminal jurisdiction",
                      "Assize Court — serious criminal matters",
                      "Supreme Court — appeals and constitutional matters",
                      "Administrative Court — challenges to state decisions",
                    ].map((court) => (
                      <li key={court} className="flex items-center gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        <span className="text-sm" style={{ color: "hsl(0 0% 70%)", fontFamily: "var(--font-sans)" }}>{court}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="section" style={{ background: "hsl(var(--secondary))" }} aria-label="Litigation services">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">What We Do</p>
              <h2 className="heading-serif mb-4">Civil Litigation Services in Cyprus</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.title} delay={i * 0.07}>
                  <div className="bg-card rounded-sm p-6 h-full" style={{ border: "1px solid hsl(var(--border))", boxShadow: "var(--shadow-sm)" }}>
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center mb-4" style={{ background: "hsl(var(--accent-light))" }}>
                      <Icon size={16} className="text-gold" />
                    </div>
                    <h3 className="heading-serif text-lg font-medium mb-2 text-foreground">{svc.title}</h3>
                    <p className="text-sm leading-relaxed">{svc.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Call to action">
        <div className="container-law text-center">
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: "hsl(var(--accent))" }}>Litigation in Cyprus</p>
            <h2 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>
              Speak with a Litigation Lawyer in Cyprus
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>
              If you are facing a dispute or considering legal action in Cyprus, contact our Nicosia team for a confidential assessment of your position.
            </p>
            <Link to="/contact" className="btn-primary">Schedule a Consultation <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
