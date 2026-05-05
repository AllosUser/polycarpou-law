import { Link } from "react-router-dom";
import { Briefcase, ArrowRight, CheckCircle, Building2, FileText, Users, Globe, Scale } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { useSEO } from "@/hooks/useSEO";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Corporate Law Services — Andreas Polycarpou & Co LLC",
  serviceType: "Corporate Law",
  description:
    "Expert corporate legal services in Cyprus including company formation, M&A advisory, shareholder agreements, and corporate governance from our Nicosia office.",
  url: "https://andreaspolycarpou.com.cy/corporate-law-cyprus",
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
    icon: Building2,
    title: "Company Formation in Cyprus",
    body:
      "We handle every step of incorporating a Cyprus company under the Companies Law Cap. 113 — from name reservation and Articles of Association drafting to registration with the Registrar of Companies.",
  },
  {
    icon: Users,
    title: "Shareholder Agreements",
    body:
      "Bespoke shareholder agreements that define rights, obligations, and exit provisions clearly, protecting all parties and minimising future disputes in Cypriot and international structures.",
  },
  {
    icon: Briefcase,
    title: "Mergers & Acquisitions",
    body:
      "Legal due diligence, transaction structuring, and completion support for M&A deals involving Cyprus entities — including cross-border transactions with EU and non-EU counterparties.",
  },
  {
    icon: Scale,
    title: "Corporate Governance",
    body:
      "Advising boards and management teams on compliance with the Cyprus Companies Law, drafting corporate resolutions, and establishing governance frameworks for private and listed entities.",
  },
  {
    icon: FileText,
    title: "Commercial Contracts",
    body:
      "Drafting and negotiating service agreements, supply contracts, distribution arrangements, and licensing frameworks under Cyprus law or international governing law clauses.",
  },
  {
    icon: Globe,
    title: "International Business Structures",
    body:
      "Cyprus is a recognised holding and IP jurisdiction. We advise on group restructuring, EU tax directives, and the use of Cyprus vehicles for international business operations.",
  },
];

const differentiators = [
  {
    title: "20+ Years in Cyprus Corporate Law",
    body: "Our founder has been advising businesses in Cyprus since 2006. We understand the nuances of the Companies Law Cap. 113 and the practical realities of the local market.",
  },
  {
    title: "Full-Service Corporate Support",
    body: "From initial incorporation to ongoing corporate secretarial work and major transactions, we offer continuous legal support rather than a one-off advisory relationship.",
  },
  {
    title: "International Client Experience",
    body: "We regularly act for international investors and foreign businesses establishing a presence in Cyprus, providing seamless advice in English across all corporate matters.",
  },
];

export default function CorporateLawCyprus() {
  useSEO({
    title: "Corporate Lawyer Cyprus | Company Formation & Business Law | Polycarpou Law",
    description:
      "Expert corporate law services in Cyprus. Company formation, M&A, shareholder agreements and corporate governance from experienced Nicosia lawyers. Contact us today.",
    canonical: "/corporate-law-cyprus",
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
              Corporate Lawyer in Cyprus
            </h1>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>
              Comprehensive corporate legal services for businesses operating in and through Cyprus — from company formation to complex cross-border transactions.
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
                <p className="eyebrow mb-3">Corporate Law in Cyprus</p>
                <h2 className="heading-serif mb-5">Business Legal Services in Nicosia</h2>
                <GoldDivider className="mb-7" width="48px" />
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Cyprus has established itself as a leading jurisdiction for international business due to its favourable corporate tax regime, extensive double tax treaty network, and EU membership. Andreas Polycarpou &amp; Co LLC provides corporate lawyers in Nicosia who combine deep knowledge of Cypriot company law with the commercial acumen required for modern business transactions.
                  </p>
                  <p className="leading-relaxed">
                    Our corporate law practice covers the full lifecycle of a business — from incorporation and governance to growth transactions and eventual restructuring. We act for Cypriot companies, foreign-owned subsidiaries, investment vehicles, and international groups with Cyprus entities.
                  </p>
                  <p className="leading-relaxed">
                    Regulated by the Cyprus Bar Association and headquartered in central Nicosia, our team provides precise, commercially-minded advice to clients across Cyprus and internationally.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">Schedule a Consultation <ArrowRight size={15} /></Link>
                  <Link to="/services" className="btn-secondary">All Practice Areas</Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="rounded-sm overflow-hidden" style={{ background: "var(--gradient-navy)", boxShadow: "var(--shadow-lg)" }}>
                <div className="p-8">
                  <p className="eyebrow mb-4" style={{ color: "hsl(var(--accent))" }}>Why Cyprus for Business?</p>
                  <ul className="space-y-3.5">
                    {[
                      "12.5% corporate tax rate — lowest in the EU",
                      "Over 65 double tax treaties worldwide",
                      "EU member state since 2004",
                      "English-language legal system (Common Law basis)",
                      "Cyprus Companies Law Cap. 113 aligned with UK company law",
                      "Strong banking and professional services infrastructure",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" />
                        <span className="text-sm" style={{ color: "hsl(0 0% 75%)", fontFamily: "var(--font-sans)" }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-0.5" style={{ background: "var(--gradient-gold)" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="section" style={{ background: "hsl(var(--secondary))" }} aria-label="Corporate law services">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">What We Do</p>
              <h2 className="heading-serif mb-4">Corporate Legal Services</h2>
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

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section className="section bg-background" aria-label="Why choose us">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Why Polycarpou Law</p>
              <h2 className="heading-serif mb-4">Corporate Lawyers You Can Rely On</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.1}>
                <div className="text-center px-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "var(--gradient-gold)" }}>
                    <CheckCircle size={20} color="hsl(222 47% 11%)" strokeWidth={2} />
                  </div>
                  <h3 className="heading-serif text-xl font-medium mb-3 text-foreground">{d.title}</h3>
                  <p className="text-sm leading-relaxed">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Call to action">
        <div className="container-law text-center">
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: "hsl(var(--accent))" }}>Cyprus Corporate Law</p>
            <h2 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>
              Speak with a Corporate Lawyer in Nicosia
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>
              Whether you are forming a new Cyprus company, structuring an acquisition, or need ongoing corporate legal support, our team is ready to assist.
            </p>
            <Link to="/contact" className="btn-primary">{`Schedule a Consultation `}<ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
