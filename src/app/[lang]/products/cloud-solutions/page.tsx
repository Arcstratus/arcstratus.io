import { I18nProvider } from "@/components/i18n-provider";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";
import {
  IconCloud,
  IconScale,
  IconServer,
  IconShield,
} from "@tabler/icons-react";
import Link from "next/link";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function CloudSolutionsPage({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  const features = [
    {
      icon: <IconServer className="h-8 w-8 text-primary" />,
      title: "Infrastructure as a Service (IaaS)",
      description:
        "Scalable compute, storage, and networking resources on demand.",
    },
    {
      icon: <IconCloud className="h-8 w-8 text-primary" />,
      title: "Platform as a Service (PaaS)",
      description:
        "Development and deployment environments for building cloud applications.",
    },
    {
      icon: <IconShield className="h-8 w-8 text-primary" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance certifications.",
    },
    {
      icon: <IconScale className="h-8 w-8 text-primary" />,
      title: "Cost Optimization",
      description:
        "Optimize your cloud spending with our cost management tools.",
    },
  ];

  return (
    <I18nProvider locale={params.lang} dictionary={dictionary}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {dictionary.products.cloudSolutions}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {dictionary.products.cloudSolutionsDesc}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={`/${params.lang}/about#contact`}>
                  <Button size="lg" className="px-8">
                    {dictionary.common.buttons.contactUs}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] bg-background rounded-xl shadow-2xl flex items-center justify-center">
                    <IconCloud className="h-24 w-24 text-primary/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Key Features
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our cloud solutions provide everything you need for your
                business
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="p-2 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose Our Cloud Solutions?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We provide reliable, secure, and scalable cloud infrastructure
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our cloud infrastructure is designed for 99.99% uptime, ensuring
                your applications are always available.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Scalability</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Easily scale your resources up or down based on demand, paying
                only for what you use.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enterprise-grade security with encryption, access controls, and
                compliance certifications.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                24/7 technical support from our team of cloud experts to help
                you with any issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </I18nProvider>
  );
}
