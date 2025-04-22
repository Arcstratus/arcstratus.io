import { getDictionary, type Locale } from "@/i18n/utils";
import { IconNews } from "@tabler/icons-react";
import { cookies } from "next/headers";

interface LatestArticleProps {
  lang?: Locale;
}

export const LatestArticle = async ({ lang }: LatestArticleProps = {}) => {
  // Get locale from props if provided, otherwise from cookies with fallback to default
  let locale: Locale;
  if (lang) {
    locale = lang;
  } else {
    const cookieStore = await cookies();
    locale = (cookieStore.get("locale")?.value as Locale) || "tw";
  }

  const dict = await getDictionary(locale);

  return (
    <section>
      <div className="flex gap-2 middle py-4">
        <IconNews />
        <h2 className="text-2xl font-bold">{dict.common.latestArticle}</h2>
      </div>

      <div className="w-full">
        <menu className="space-y-8">
          <li>
            <div className="w-full h-64 debug rounded">card</div>
          </li>
          <li>
            <div className="w-full h-64 debug rounded">card</div>
          </li>
          <li>
            <div className="w-full h-64 debug rounded">card</div>
          </li>
        </menu>
      </div>
    </section>
  );
};
