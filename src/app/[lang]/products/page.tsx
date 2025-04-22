import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";
import { I18nProvider } from "@/components/i18n-provider";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/card";
import { IconCloud, IconCode, IconSettings } from "@tabler/icons-react";
import Link from "next/link";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function ProductsPage({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  const products = [
    {
      icon: <IconCloud className="h-10 w-10 text-primary" />,
      title: dictionary.products.cloudSolutions,
      description: dictionary.products.cloudSolutionsDesc,
      link: "/products/cloud-solutions",
    },
    {
      icon: <IconCode className="h-10 w-10 text-primary" />,
      title: dictionary.products.softwareDevelopment,
      description: dictionary.products.softwareDevelopmentDesc,
      link: "/products/software-development",
    },
    {
      icon: <IconSettings className="h-10 w-10 text-primary" />,
      title: dictionary.products.devOps,
      description: dictionary.products.devOpsDesc,
      link: "/products/devops",
    },
  ];

  return (
    <I18nProvider locale={params.lang} dictionary={dictionary}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {dictionary.products.title}
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dictionary.products.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <div className="p-2 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={`/${params.lang}${product.link}`}>
                    <Button variant="outline">
                      {dictionary.common.buttons.learnMore}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </I18nProvider>
  );
}
