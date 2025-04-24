"use client";

// import { useI18n } from "@/components/i18n-provider";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { IconSitemap } from "@tabler/icons-react";
import { ServiceIntegrations } from "./services-integrations";

export default function ServicesPage() {
  // const { dictionary } = useI18n();

  const items = [
    {
      Icon: IconSitemap,
      name: "Integrations",
      description: "Supports 100+ integrations and counting.",
      href: "",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <ServiceIntegrations className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <section className="relative container mx-auto py-24 space-y-18">
        <hgroup className="text-center space-y-4">
          <h1 className="text-4xl font-bold">我能幫你做什麼？</h1>
          <p>
            我們只是一群熱愛技術的工程師，因此我們更加專注在人性與技術的結合。
          </p>
        </hgroup>

        <BentoGrid className="debug">
          {items.map((items, idx) => (
            <BentoCard key={idx} {...items} />
          ))}
        </BentoGrid>
      </section>
    </div>
  );
}
