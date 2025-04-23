"use client";

import { CardHoverEffect } from "@/components/aceternity/card-hover-effect";
import { useI18n } from "@/components/i18n-provider";

export default function ProductsPage() {
  const { dictionary } = useI18n();
  const products = dictionary.products;

  return (
    <div>
      <section className="w-full py-12 lg:py-18">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {products.title}
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {products.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CardHoverEffect
        items={[products.unitobuy, products.islandVoice, products.ongoing]}
      />
    </div>
  );
}
