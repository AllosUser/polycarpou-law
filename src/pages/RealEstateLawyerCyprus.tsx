import { Link } from "react-router-dom";
import { Building2, ArrowRight, CheckCircle, Search, FileText, Scale, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { useSEO } from "@/hooks/useSEO";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Real Estate Legal Services — Andreas Polycarpou & Co LLC",
  serviceType: "Real Estate Law",
  description:
    "Expert property lawyers in Cyprus. We assist buyers, sellers, developers and investors with real estate transactions, title deed transfers, and property disputes in Nicosia.",
  url: "https://polycarpoulaw.cy/real-estate-lawyer-cyprus",
  provider: {
    "@type": "LegalService",
    name: "Andreas Polycarpou & Co LLC",
    url: "https://polycarpoulaw.cy",
    telephone: "+357-22-123-456",
    email: "apolycarpou@polycarpoulaw.com",
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
    icon: Search,
    title: "Property Due Diligence",
    body:
      "Thorough title searches at the Cyprus Land Registry to verify ownership, encumbrances, charges, and planning permissions before any commitment is made.",
  },
  {
    icon: FileText,
    title: "Sale & Purchase Agreements",
    body:
      "Drafting and reviewing Sale and Purchase Agreements that protect your interests — covering payment terms, delivery conditions, penalties, and deposit safeguards.",
  },
  {
    icon: Building2,
    title: "Title Deed Transfers",
    body:
      "Handling the transfer of title deeds at the Department of Lands and Surveys, including transfer fee calculations and, where applicable, Capital Gains Tax compliance.",
  },
  {
    icon: MapPin,
    title: "Development Projects",
    body:
      "Legal support for property developers in Cyprus, from land acquisition agreements and planning applications to off-plan sales, construction contracts, and development finance.",
  },
  {
    icon: Scale,
    title: "Property Disputes & Litigation",
    body:
      "Representing clients in boundary disputes, breach of contract claims, adverse possession matters, and other property-related litigation before the Cyprus courts.",
  },
  {
    icon: ShieldCheck,
    title: "Foreign Buyer Legal Advice",
    body:
      "Cyprus is a popular destination for EU and non-EU property buyers. We guide foreign purchasers through the acquisition process, permits, and regulatory requirements.",
  },
];

export default function RealEstateLawyerCyprus() {
  useSEO({
    title: "Real Estate Lawyer Cyprus | Property Law & Conveyancing | Polycarpou Law",
    description:
      "Trusted property lawyers in Cyprus. Expert guidance on real estate transactions, title deed transfers, development projects and land disputes in Nicosia, Cyprus.",
    canonical: "/real-estate-lawyer-cyprus",
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
              Real Estate Lawyer in Cyprus
            </h1>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>
              End-to-end legal support for property transactions, development projects, and land disputes across Cyprus — from due diligence to title deed transfer.
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
                <p className="eyebrow mb-3">Property Law in Cyprus</p>
                <h2 className="heading-serif mb-5">Property Lawyers in Nicosia</h2>
                <GoldDivider className="mb-7" width="48px" />
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Cyprus is one of the most active property markets in the Eastern Mediterranean, attracting buyers from across Europe, the Middle East, and beyond. Whether you are purchasing a residential property, acquiring commercial real estate, or developing land in Cyprus, having an experienced real estate lawyer is essential to protecting your investment.
                  </p>
                  <p className="leading-relaxed">
                    Andreas Polycarpou &amp; Co LLC acts for buyers, sellers, developers, and institutional investors across the full spectrum of property transactions. Our Nicosia-based team provides rigorous due diligence, clear advice on Cypriot property law, and practical support at every stage of a transaction.
                  </p>
                  <p className="leading-relaxed">
                    From initial title searches at the Department of Lands and Surveys to completion and registration, we manage the legal complexity so you can transact with confidence.
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
                  <p className="eyebrow mb-4" style={{ color: "hsl(var(--accent))" }}>Key Property Law Considerations in Cyprus</p>
                  <ul className="space-y-3.5">
                    {[
                      "Title deed verification at the Cyprus Land Registry",
                      "Immovable Property Transfer Fees applicable on sale",
                      "Capital Gains Tax on property profits",
                      "Building permits and planning permissions",
                      "Foreign ownership restrictions on certain property types",
                      "Mortgage and encumbrance searches required pre-purchase",
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
      <section className="section" style={{ background: "hsl(var(--secondary))" }} aria-label="Real estate legal services">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">What We Do</p>
              <h2 className="heading-serif mb-4">Property Legal Services in Cyprus</h2>
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
            <p className="eyebrow mb-4" style={{ color: "hsl(var(--accent))" }}>Real Estate Law Cyprus</p>
            <h2 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>
              Secure Your Property Transaction in Cyprus
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>
              Do not proceed with a property purchase or sale in Cyprus without qualified legal advice. Contact our Nicosia team for a confidential consultation.
            </p>
            <Link to="/contact" className="btn-primary">Schedule a Consultation <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
