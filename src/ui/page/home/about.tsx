import { getDictionary } from "@/i18n/utils";

interface AboutProps {
  lang: "en" | "tw";
}

export async function About(props: AboutProps) {
  const dict = await getDictionary(props.lang);

  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            {dict.about.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {dict.about.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                {dict.about.mission.title}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{dict.about.mission.description}</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                {dict.about.vision.title}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{dict.about.vision.description}</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
