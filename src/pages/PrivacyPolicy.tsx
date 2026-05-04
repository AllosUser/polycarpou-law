import { LegalPage } from "@/components/LegalPage";
import { useI18n } from "@/lib/i18n";

export default function PrivacyPolicy() {
  const { t } = useI18n();

  const sections = Array.from({ length: 8 }, (_, i) => ({
    title: t(`privacy.s${i + 1}.title`),
    body: t(`privacy.s${i + 1}.body`)
  }));

  return (
    <LegalPage
      titleKey="privacy.title"
      introKey="privacy.intro"
      sections={sections}
      seoTitle="Privacy Policy | ANDREAS POLYCARPOU & CO LLC"
      seoDescription="Privacy Policy of Andreas Polycarpou & Co LLC — how we collect, use, and protect personal data in accordance with GDPR and Cyprus data protection law."
      canonical="/privacy-policy"
    />
  );
}
