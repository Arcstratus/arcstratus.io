import { getDictionary, type Locale } from "@/i18n/utils";
import {
  IconCloudComputing,
  IconDeviceDesktopAnalytics,
  IconShieldChevron,
  IconUser,
} from "@tabler/icons-react";
import { Section } from "../section";

interface PlatformProps {
  lang: Locale;
}

export async function Platform({ lang }: PlatformProps) {
  const dict = await getDictionary(lang);

  return (
    <Section name="platform">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                {dict.services.title}
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {dict.services.items.cloud.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <IconUser className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  {dict.services.items.cloud.title}
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  {dict.services.items.cloud.description}
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <IconCloudComputing className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  {dict.services.items.outsourcing.title}
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  {dict.services.items.outsourcing.description}
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <IconDeviceDesktopAnalytics className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  {dict.services.items.education.title}
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  {dict.services.items.education.description}
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <IconShieldChevron className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  {dict.services.title}
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  {dict.services.items.cloud.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
