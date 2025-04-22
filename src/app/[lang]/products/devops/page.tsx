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
  IconArrowsLeftRight,
  IconChartBar,
  IconCloudUpload,
  IconCode,
  IconGitBranch,
  IconServer,
  IconSettings,
} from "@tabler/icons-react";
import Link from "next/link";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function DevOpsPage({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  const services = [
    {
      icon: <IconGitBranch className="h-8 w-8 text-primary" />,
      title: "CI/CD Pipelines",
      description:
        "Automated build, test, and deployment pipelines for faster delivery.",
    },
    {
      icon: <IconCloudUpload className="h-8 w-8 text-primary" />,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management.",
    },
    {
      icon: <IconChartBar className="h-8 w-8 text-primary" />,
      title: "Monitoring & Observability",
      description:
        "Comprehensive monitoring and alerting for your applications and infrastructure.",
    },
    {
      icon: <IconSettings className="h-8 w-8 text-primary" />,
      title: "Automation & Optimization",
      description:
        "Streamline operations and reduce manual tasks through automation.",
    },
  ];

  const benefits = [
    {
      title: "Faster Time to Market",
      description:
        "Accelerate your development and deployment cycles to deliver features faster.",
    },
    {
      title: "Improved Quality",
      description:
        "Automated testing and deployment reduces errors and improves reliability.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Optimize resource utilization and reduce operational costs.",
    },
    {
      title: "Scalability",
      description: "Easily scale your infrastructure to meet changing demands.",
    },
    {
      title: "Enhanced Security",
      description:
        "Implement security best practices throughout your development lifecycle.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Iteratively improve your processes based on feedback and metrics.",
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
                  {dictionary.products.devOps}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {dictionary.products.devOpsDesc}
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
                    <IconSettings className="h-24 w-24 text-primary/60" />
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
                Our DevOps Services
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We help you streamline your development and operations processes
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
                The DevOps Lifecycle
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our approach to implementing DevOps practices
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-12">
            <div className="relative">
              {/* DevOps Infinity Loop Visualization */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
                <div className="flex flex-col items-center text-center space-y-4 md:w-1/2">
                  <div className="p-2 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconCode className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Development</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Code</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Build</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Test</span>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:block w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <IconArrowsLeftRight className="h-8 w-8 text-primary" />
                </div>
                <div className="flex flex-col items-center text-center space-y-4 md:w-1/2">
                  <div className="p-2 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconServer className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Operations</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Release</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Deploy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Operate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Monitor</span>
                    </li>
                  </ul>
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
                Benefits of DevOps
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Why implementing DevOps practices is essential for modern
                businesses
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </I18nProvider>
  );
}
