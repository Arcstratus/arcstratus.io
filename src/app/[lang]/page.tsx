import { ClientsSection } from "@/components/ui/clients-section";
import { CTASection } from "@/components/ui/cta-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { HeroSection } from "@/components/ui/hero-section";
import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function Page({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  return (
    <I18nProvider locale={params.lang} dictionary={dictionary}>
      <HeroSection />
      <FeaturesSection />
      <ClientsSection />
      <CTASection />
    </I18nProvider>
  );
}
