"use client";

import { useI18n } from "@/components/i18n-provider";

export function ClientsSection() {
  const { dictionary } = useI18n();

  // Mock client logos - in a real project, you would use actual client logos
  const clients = [
    { name: "Company A", logo: "A" },
    { name: "Company B", logo: "B" },
    { name: "Company C", logo: "C" },
    { name: "Company D", logo: "D" },
    { name: "Company E", logo: "E" },
    { name: "Company F", logo: "F" },
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {dictionary.home.clients.title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dictionary.home.clients.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 mt-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm border"
            >
              <div className="text-3xl font-bold text-primary/60">
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
