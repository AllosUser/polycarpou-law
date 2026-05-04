import { LegalPage } from "@/components/LegalPage";
import { useI18n } from "@/lib/i18n";

export default function CookiePolicy() {
  const { t } = useI18n();
  const sectionCount = 6;

  const sections = Array.from({ length: sectionCount }, (_, i) => ({
    title: t(`cookie.s${i + 1}.title`),
    body: t(`cookie.s${i + 1}.body`)
  }));

  return (
    <LegalPage
      titleKey="cookie.title"
      introKey="cookie.intro"
      sections={sections}
      seoTitle="Cookie Policy | ANDREAS POLYCARPOU & CO LLC"
      seoDescription="Cookie Policy of Andreas Polycarpou & Co LLC — information on how this website uses cookies and how to manage your preferences."
      canonical="/cookie-policy"
    />
  );
}
