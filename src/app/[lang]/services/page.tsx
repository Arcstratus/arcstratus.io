import { I18nProvider } from "@/components/i18n-provider";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";
import {
  IconBrush,
  IconCloud,
  IconCode,
  IconSettings,
} from "@tabler/icons-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function ServicesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  const services = [
    {
      icon: <IconBrush className="h-10 w-10 text-primary" />,
      title: dictionary.services.service1.title,
      description: dictionary.services.service1.description,
    },
    {
      icon: <IconCode className="h-10 w-10 text-primary" />,
      title: dictionary.services.service2.title,
      description: dictionary.services.service2.description,
    },
    {
      icon: <IconCloud className="h-10 w-10 text-primary" />,
      title: dictionary.services.service3.title,
      description: dictionary.services.service3.description,
    },
    {
      icon: <IconSettings className="h-10 w-10 text-primary" />,
      title: dictionary.services.service4.title,
      description: dictionary.services.service4.description,
    },
  ];

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {dictionary.services.title}
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dictionary.services.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {services.map(async (service, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <div className="p-2 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={`/${resolvedParams.lang}/about#contact`}>
                    <Button variant="outline">
                      {dictionary.common.buttons.contactUs}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {dictionary.home.cta.title}
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  {dictionary.home.cta.subtitle}
                </p>
              </div>
              <div>
                <Link href={`/${resolvedParams.lang}/about#contact`}>
                  <Button size="lg" className="px-8">
                    {dictionary.home.cta.button}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] bg-background rounded-xl shadow-2xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconCloud className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Custom Solutions</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Tailored to your specific business needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </I18nProvider>
  );
}
