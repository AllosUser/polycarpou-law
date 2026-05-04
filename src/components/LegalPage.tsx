import { AlertCircle } from "lucide-react";
import { GoldDivider } from "./GoldDivider";
import { Reveal } from "./Reveal";
import { useSEO } from "@/hooks/useSEO";
import { useI18n } from "@/lib/i18n";

interface LegalSection {
  title: string;
  body: string;
}

interface LegalPageProps {
  titleKey: string;
  introKey: string;
  sections: LegalSection[];
  seoTitle: string;
  seoDescription: string;
  canonical: string;
}

export function LegalPage({
  titleKey,
  introKey,
  sections,
  seoTitle,
  seoDescription,
  canonical,
}: LegalPageProps) {
  const { t } = useI18n();
  useSEO({ title: seoTitle, description: seoDescription, canonical });

  return (
    <section className="bg-background min-h-screen" aria-label={t(titleKey)}>
      <div
        className="mx-auto px-6 md:px-10 pt-28 lg:pt-32 pb-24"
        style={{ maxWidth: "900px" }}
      >
        <Reveal>
          {/* Page title */}
          <p className="eyebrow mb-3">{t("legal.lastUpdated")} — {new Date().getFullYear()}</p>
          <h1
            className="heading-serif font-light text-foreground mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {t(titleKey)}
          </h1>
          <GoldDivider className="mb-8" width="52px" />
 
          {/* Intro */}
          <p
            className="text-base leading-relaxed mb-12 whitespace-pre-line"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {t(introKey)}
          </p>
        </Reveal>
 
        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05}>
              <div
                className="rounded-sm p-6 md:p-8"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="heading-serif font-light"
                    style={{ color: "hsl(var(--accent) / 0.5)", fontSize: "1.5rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="heading-serif text-xl font-medium text-foreground">
                    {section.title}
                  </h2>
                </div>
                <GoldDivider className="mb-5" width="28px" />
                <p
                  className="text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {section.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
