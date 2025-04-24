"use client";

import { useI18n } from "@/components/i18n-provider";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { IconAppWindow, IconBell, IconSitemap } from "@tabler/icons-react";
import { ServiceAutomation } from "./service-automation";
import { ServiceIntegration } from "./service-integration";
import { ServiceNotification } from "./service-notification";

export default function ServicesPage() {
  const { dictionary } = useI18n();
  const articles = dictionary.services;

  const items = [
    {
      Icon: IconAppWindow,
      ...articles.items[0],
      href: "/services/development",
      className: "col-span-3 lg:col-span-2",
      background: (
        <ServiceAutomation className="absolute left-24 top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] " />
      ),
    },
    {
      Icon: IconBell,
      ...articles.items[1],
      href: "/services/notification",
      className: "col-span-3 lg:col-span-1",
      background: (
        <ServiceNotification className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
      ),
    },
    {
      Icon: IconSitemap,
      ...articles.items[2],
      href: "/services/integration",
      className: "col-span-3 ",
      background: (
        <ServiceIntegration className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <section className="relative container mx-auto py-24 space-y-18">
        <hgroup className="text-center space-y-4">
          <h1 className="text-4xl font-bold">{articles.title}</h1>
          <p>{articles.description}</p>
        </hgroup>

        <BentoGrid>
          {items.map((items, idx) => (
            <BentoCard key={idx} {...items} />
          ))}
        </BentoGrid>
      </section>
    </div>
  );
}
