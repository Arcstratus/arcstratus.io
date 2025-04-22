import { I18nProvider } from "@/components/i18n-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";
import {
  IconAward,
  IconBulb,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function AboutPage({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  const values = [
    {
      icon: <IconBulb className="h-10 w-10 text-primary" />,
      title: dictionary.about.values.value1.title,
      description: dictionary.about.values.value1.description,
    },
    {
      icon: <IconAward className="h-10 w-10 text-primary" />,
      title: dictionary.about.values.value2.title,
      description: dictionary.about.values.value2.description,
    },
    {
      icon: <IconUsers className="h-10 w-10 text-primary" />,
      title: dictionary.about.values.value3.title,
      description: dictionary.about.values.value3.description,
    },
    {
      icon: <IconShieldCheck className="h-10 w-10 text-primary" />,
      title: dictionary.about.values.value4.title,
      description: dictionary.about.values.value4.description,
    },
  ];

  return (
    <I18nProvider locale={params.lang} dictionary={dictionary}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {dictionary.about.title}
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dictionary.about.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                {dictionary.about.mission.title}
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                {dictionary.about.mission.description}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                {dictionary.about.vision.title}
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                {dictionary.about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {dictionary.about.values.title}
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="p-2 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {dictionary.about.team.title}
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dictionary.about.team.subtitle}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* Team members would go here - using placeholders for now */}
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 rounded-full bg-muted"></div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Team Member {index + 1}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Position
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </I18nProvider>
  );
}
