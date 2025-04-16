import { getDictionary, type I18nType } from "@/i18n/utils";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: Readonly<{ params: I18nType }>): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.careers.title,
    description: dict.careers.description,
  };
}

export default async function CareersPage({
  params,
}: Readonly<{ params: I18nType }>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{dict.careers.title}</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {dict.careers.whyJoin}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {dict.careers.whyJoinContent}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.careers.benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {dict.careers.ourCulture}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {dict.careers.cultureContent}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.careers.culturePillars.map((pillar, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-2xl">{pillar.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{dict.careers.growth}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {dict.careers.growthContent}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.careers.growthOpportunities.map((opportunity, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-semibold mb-2">
                  {opportunity.title}
                </h3>
                <p className="text-muted-foreground">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            {dict.careers.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {dict.careers.cta.content}
          </p>
          <a
            href=""
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-not-allowed"
            aria-disabled
          >
            {dict.careers.cta.button}
          </a>
        </section>
      </div>
    </main>
  );
}
