import { CtaSection, FeaturesSection, HeroSection } from "@/components/ui/home";

export default async function Page() {
  return (
    <div className="pb-32 ">
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}
