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
import { Separator } from "@/components/shadcn/separator";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";
import { IconBuilding, IconHeart } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

interface ProductItem {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
}

interface ProductCategory {
  category: string;
  title?: string;
  items: ProductItem[];
}

export default async function ProductsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  const products: ProductCategory[] = [
    {
      category: "commercial",
      title: dictionary.products.commercial.title,
      items: [
        {
          icon: <IconBuilding className="h-10 w-10 text-primary" />,
          title: dictionary.products.commercial.unitobuy.title,
          description: dictionary.products.commercial.unitobuy.description,
          link: "https://www.unitobuy.com",
          isExternal: true,
        },
      ],
    },
    {
      category: "nonprofit",
      title: dictionary.products.nonprofit.title,
      items: [
        {
          icon: <IconHeart className="h-10 w-10 text-primary" />,
          title: dictionary.products.nonprofit.islandVoice.title,
          description: dictionary.products.nonprofit.islandVoice.description,
          link: "https://www.island-voice.com",
          isExternal: true,
        },
      ],
    },
  ];

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <section className="w-full py-12 lg:py-18">
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

      <Separator />

      {products.map((category, categoryIndex) => (
        <section key={categoryIndex} className="w-full py-12">
          <div className="container mx-auto px-4 md:px-6">
            {category.title && (
              <h2 className="text-2xl font-bold mb-8 text-center">
                {category.title}
              </h2>
            )}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {category.items.map((product, index) => (
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
                    {product.isExternal ? (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline">
                          {dictionary.common.buttons.learnMore}
                        </Button>
                      </a>
                    ) : (
                      <Link href={`/${resolvedParams.lang}${product.link}`}>
                        <Button variant="outline">
                          {dictionary.common.buttons.learnMore}
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
    </I18nProvider>
  );
}
