"use client";

import { useI18n } from "@/components/i18n-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { IconBrush, IconCloud, IconCode } from "@tabler/icons-react";

export function HomeFeaturesSection() {
  const { dictionary } = useI18n();
  const article = dictionary.home.features;

  const features = [
    {
      icon: <IconBrush className="h-10 w-10 text-primary" />,
      ...article.items[0],
    },
    {
      icon: <IconCode className="h-10 w-10 text-primary" />,
      ...article.items[1],
    },
    {
      icon: <IconCloud className="h-10 w-10 text-primary" />,
      ...article.items[2],
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {dictionary.home.features.title}
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-md shadow-white/20 hover:shadow-sky-200"
            >
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
  );
}
