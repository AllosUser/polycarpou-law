import { Link } from "react-router-dom";
import { Globe, ArrowRight, CheckCircle, FileText, Briefcase, Users, ShieldCheck, Building2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { useSEO } from "@/hooks/useSEO";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Immigration Legal Services — Andreas Polycarpou & Co LLC",
  serviceType: "Immigration Law",
  description:
    "Immigration and residency legal advice in Cyprus. Assistance with residence permits, work permits, EU free movement rights, and corporate immigration from our Nicosia office.",
  url: "https://andreaspolycarpou.com.cy/immigration-lawyer-cyprus",
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
    icon: FileText,
    title: "Residency Permits (MEU1 & Category F)",
    body:
      "Advising EU and non-EU nationals on obtaining long-term residency in Cyprus, including MEU1 registration for EU citizens and Category F permanent residency applications for third-country nationals.",
  },
  {
    icon: Briefcase,
    title: "Work Permits & Employment Authorisation",
    body:
      "Assisting individuals and employers with work permit applications to the Civil Registry and Migration Department, including renewals and employer compliance obligations.",
  },
  {
    icon: Building2,
    title: "Corporate Immigration",
    body:
      "Supporting businesses relocating employees to Cyprus, managing work authorisation for key personnel, and advising on intra-company transfer arrangements.",
  },
  {
    icon: Globe,
    title: "EU Free Movement Rights",
    body:
      "Advising EU citizens and their non-EU family members on the exercise of free movement rights in Cyprus under Directive 2004/38/EC and the relevant Cyprus transposing legislation.",
  },
  {
    icon: Users,
    title: "Family Reunification",
    body:
      "Guiding applicants through the family reunification process under Cyprus immigration law, including applications for spouses, children, and dependent family members.",
  },
  {
    icon: ShieldCheck,
    title: "Immigration Appeals & Compliance",
    body:
      "Representing clients in immigration appeals and administrative reviews before the relevant Cyprus authorities, and advising on ongoing compliance with immigration conditions.",
  },
];

export default function ImmigrationLawyerCyprus() {
  useSEO({
    title: "Immigration Lawyer Cyprus | Residency Permits & Work Visas | Polycarpou Law",
    description:
      "Immigration legal advice in Cyprus. Assistance with residency permits, work permits, EU free movement rights, and corporate immigration from our Nicosia office.",
    canonical: "/immigration-lawyer-cyprus",
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
              Immigration Lawyer in Cyprus
            </h1>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>
              Legal advice on residency permits, work authorisation, EU free movement rights, and corporate immigration for individuals and businesses in Cyprus.
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
                <p className="eyebrow mb-3">Immigration Law in Cyprus</p>
                <h2 className="heading-serif mb-5">Residency & Immigration Advice in Nicosia</h2>
                <GoldDivider className="mb-7" width="48px" />
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Cyprus, as a member of the European Union, is governed by both EU immigration law and domestic Cypriot legislation, primarily the Aliens and Immigration Law (Cap. 105) and its amendments. Navigating these rules requires experienced legal guidance — whether you are an individual relocating to Cyprus or a business bringing in international employees.
                  </p>
                  <p className="leading-relaxed">
                    Andreas Polycarpou &amp; Co LLC provides immigration law advice from our Nicosia office, assisting EU and non-EU nationals with all aspects of Cypriot immigration law. Our team works closely with the Civil Registry and Migration Department and maintains current knowledge of the latest permit categories and procedural requirements.
                  </p>
                  <p className="leading-relaxed">
                    For businesses, we also handle the corporate immigration needs that frequently arise alongside company formation and expansion — ensuring that your key personnel have the right to work and reside in Cyprus lawfully and without disruption.
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
                  <p className="eyebrow mb-4" style={{ color: "hsl(var(--accent))" }}>Cyprus Immigration — Key Facts</p>
                  <ul className="space-y-3.5">
                    {[
                      "EU citizens exercise free movement rights under Directive 2004/38/EC",
                      "Non-EU nationals require work permits from the Migration Department",
                      "Category F permanent residency available for qualifying third-country nationals",
                      "Fast-track procedures available for certain investor and high-skill categories",
                      "Immigration matters handled by the Civil Registry and Migration Department",
                      "Cyprus is part of the Schengen Area's visa-exempt zones for short stays",
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
      <section className="section" style={{ background: "hsl(var(--secondary))" }} aria-label="Immigration legal services">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">What We Do</p>
              <h2 className="heading-serif mb-4">Immigration Legal Services in Cyprus</h2>
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
            <p className="eyebrow mb-4" style={{ color: "hsl(var(--accent))" }}>Immigration Law Cyprus</p>
            <h2 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>
              Immigration Legal Advice in Nicosia
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>
              Contact our Nicosia office for confidential advice on any aspect of Cyprus immigration law — for individuals, families, or businesses.
            </p>
            <Link to="/contact" className="btn-primary">Schedule a Consultation <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
