import { getDictionary, type I18nType } from "@/i18n/utils";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: Readonly<{ params: I18nType }>): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.about.title,
    description: dict.about.description,
  };
}

export default async function AboutPage({
  params,
}: Readonly<{ params: I18nType }>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{dict.about.title}</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{dict.about.ourStory}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {dict.about.storyContent}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {dict.about.ourMission}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {dict.about.missionContent}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {dict.about.ourValues}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.about.values.map((value, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{dict.about.ourTeam}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {dict.about.teamContent}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.about.teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
