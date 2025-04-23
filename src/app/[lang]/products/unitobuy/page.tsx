"use client";

import { useI18n } from "@/components/i18n-provider";

export default function UnitobuyPage() {
  const { dictionary } = useI18n();

  return (
    <div>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.products.unitobuy.title}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>{dictionary.products.unitobuy.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
