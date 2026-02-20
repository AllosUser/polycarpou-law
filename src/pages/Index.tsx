import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase, Scale, Building2, Heart, FileText,
  ChevronRight, Award, Users, Clock, Globe,
  CheckCircle, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { services, trustIndicators, processSteps } from "@/lib/data";
import heroBg from "@/assets/hero-bg.jpg";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Scale,
  Building2,
  Heart,
  FileText,
};

const trustIcons = [Award, CheckCircle, Globe, Users];

export default function Index() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Noise texture */}
        <div className="absolute inset-0 texture-overlay opacity-40" />

        {/* Gold bottom divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <GoldDivider />
        </div>

        <div className="container-law relative z-10 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-6">Cyprus · Established 2009</p>
          </motion.div>

          <motion.h1
            className="heading-serif font-light mb-6 leading-none"
            style={{ color: "hsl(40 27% 97%)", maxWidth: "800px", margin: "0 auto 1.5rem" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Strategic Legal{" "}
            <em style={{ color: "hsl(var(--accent))", fontStyle: "italic" }}>Excellence</em>
          </motion.h1>

          <motion.p
            className="text-lg font-light mb-12 leading-relaxed"
            style={{
              color: "hsl(0 0% 80%)",
              maxWidth: "520px",
              margin: "0 auto 3rem",
              fontFamily: "var(--font-sans)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Boutique legal services in Cyprus delivered with integrity & precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="btn-primary">
              Schedule Consultation
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/services"
              className="btn-secondary"
              style={{ color: "hsl(0 0% 90%)", borderColor: "hsl(0 0% 60%)" }}
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST INDICATORS ─────────────────────────────── */}
      <section className="bg-foreground section-sm" aria-label="Trust indicators">
        <div className="container-law">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <Reveal key={item.label} delay={i * 0.1}>
                  <div className="text-center">
                    <Icon size={20} className="text-gold mx-auto mb-3" />
                    <div
                      className="heading-serif text-3xl font-semibold text-gold mb-1"
                    >
                      {item.value}
                    </div>
                    <div
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "hsl(0 0% 60%)", fontFamily: "var(--font-sans)" }}
                    >
                      {item.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────── */}
      <section className="section bg-background" aria-label="Services preview">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">What We Do</p>
              <h2 className="heading-serif mb-4">Areas of Practice</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <Reveal key={service.id} delay={i * 0.08}>
                  <Link to="/services" className="service-card block group no-underline">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center mb-5"
                      style={{ background: "hsl(var(--accent-light))" }}
                    >
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="heading-serif text-xl font-medium mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-gold transition-gap group-hover:gap-2.5"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Learn More <ChevronRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section className="section" style={{ background: "hsl(var(--secondary))" }} aria-label="Why choose us">
        <div className="container-law">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <p className="eyebrow mb-3">Why Polycarpou Law</p>
                <h2 className="heading-serif mb-6">
                  A Firm Built on Trust & Results
                </h2>
                <GoldDivider className="mb-8" width="80px" />

                <ul className="space-y-5">
                  {[
                    { title: "Client-first strategy", desc: "Every decision we make is guided by your objectives — not billable hours." },
                    { title: "Clear communication", desc: "No legalese. We translate complex matters into plain language at every step." },
                    { title: "Results-focused", desc: "We measure success by outcomes, not activity. Your win is our priority." },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        <CheckCircle size={12} color="hsl(222 47% 11%)" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-0.5" style={{ fontFamily: "var(--font-sans)" }}>
                          {item.title}
                        </p>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link to="/about" className="btn-outline-gold">
                    Our Story <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div
                className="relative h-80 lg:h-[480px] rounded-sm overflow-hidden"
                style={{ boxShadow: "var(--shadow-lg)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "var(--gradient-navy)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <Scale size={48} className="text-gold mx-auto mb-4" strokeWidth={1} />
                    <p
                      className="heading-serif text-3xl font-light"
                      style={{ color: "hsl(40 27% 97%)" }}
                    >
                      "Justice is the sum of all moral duty."
                    </p>
                    <p className="mt-4 text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 55%)" }}>
                      — William Godwin
                    </p>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: "3px", background: "var(--gradient-gold)" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ────────────────────────────────── */}
      <section className="section bg-background" aria-label="Our process">
        <div className="container-law">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">How We Work</p>
              <h2 className="heading-serif mb-4">Our Process</h2>
              <GoldDivider className="mx-auto mt-5" width="60px" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="mb-5">
                    <span
                      className="heading-serif text-5xl font-light"
                      style={{ color: "hsl(var(--accent) / 0.35)" }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <GoldDivider className="mb-5" width="40px" />
                  <h3 className="heading-serif text-xl font-medium mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section
        className="section-sm"
        style={{ background: "var(--gradient-navy)" }}
        aria-label="Call to action"
      >
        <div className="container-law text-center">
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: "hsl(var(--accent))" }}>
              Confidential & Professional
            </p>
            <h2
              className="heading-serif font-light mb-6"
              style={{ color: "hsl(40 27% 97%)" }}
            >
              Book a confidential consultation today.
            </h2>
            <p
              className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}
            >
              Speak with one of our senior attorneys in complete confidence. No obligation, no commitment.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule Consultation
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
