import { LegalPage } from "@/components/LegalPage";
import { useI18n } from "@/lib/i18n";

export default function TermsAndConditions() {
  const { t } = useI18n();
  const sectionCount = 8;

  const sections = Array.from({ length: sectionCount }, (_, i) => ({
    title: t(`terms.s${i + 1}.title`),
    body: t(`terms.s${i + 1}.body`)
  }));

  return (
    <LegalPage
      titleKey="terms.title"
      introKey="terms.intro"
      sections={sections}
      seoTitle="Terms & Conditions | ANDREAS POLYCARPOU & CO LLC"
      seoDescription="Terms and Conditions governing the use of the Andreas Polycarpou & Co LLC website and legal services."
      canonical="/terms-and-conditions"
    />
  );
}
