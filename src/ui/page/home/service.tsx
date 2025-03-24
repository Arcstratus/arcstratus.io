import { getDictionary } from "@/i18n/utils";
import { Cloud, Code2, GraduationCap } from "lucide-react";

type ServiceKey = "cloud" | "outsourcing" | "education";

interface Feature {
  name: ServiceKey;
  description: string;
  icon: React.ElementType;
}

const features: Array<Feature> = [
  {
    name: "cloud",
    description: "cloud.description",
    icon: Cloud,
  },
  {
    name: "outsourcing",
    description: "outsourcing.description",
    icon: Code2,
  },
  {
    name: "education",
    description: "education.description",
    icon: GraduationCap,
  },
];

interface ServicesProps {
  lang: "en" | "tw";
}

export async function Service(props: ServicesProps) {
  const dict = await getDictionary(props.lang);
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {dict.services.title}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {dict.services.title}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {dict.services.items[feature.name].title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    {dict.services.items[feature.name].description}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
