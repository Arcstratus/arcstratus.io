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
  IconBrowser,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
} from "@tabler/icons-react";
import Link from "next/link";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function SoftwareDevelopmentPage({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  const services = [
    {
      icon: <IconBrowser className="h-8 w-8 text-primary" />,
      title: "Web Applications",
      description:
        "Modern, responsive web applications built with the latest technologies.",
    },
    {
      icon: <IconDeviceMobile className="h-8 w-8 text-primary" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: <IconDatabase className="h-8 w-8 text-primary" />,
      title: "Backend Systems",
      description: "Scalable and secure backend systems and APIs.",
    },
    {
      icon: <IconCode className="h-8 w-8 text-primary" />,
      title: "Custom Software",
      description:
        "Bespoke software solutions tailored to your specific business needs.",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "Django",
    "Flutter",
    "React Native",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <I18nProvider locale={params.lang} dictionary={dictionary}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {dictionary.products.softwareDevelopment}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {dictionary.products.softwareDevelopmentDesc}
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
                    <IconCode className="h-24 w-24 text-primary/60" />
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
                Our Development Services
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a wide range of software development services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="p-2 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
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
                Our Development Process
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We follow a proven development methodology to deliver
                high-quality software
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We work with you to understand your requirements and business
                  goals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We create detailed designs and prototypes for your approval.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our expert developers build your solution using agile
                  methodologies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold">Delivery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We deploy your solution and provide ongoing support and
                  maintenance.
                </p>
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
                Technologies We Use
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We leverage the latest technologies to build modern, scalable
                applications
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm border"
                >
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </I18nProvider>
  );
}
