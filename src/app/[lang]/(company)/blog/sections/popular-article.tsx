import { getDictionary, type Locale } from "@/i18n/utils";
import { IconTrendingUp } from "@tabler/icons-react";
import { cookies } from "next/headers";

interface PopularArticleProps {
  lang?: Locale;
}

export const PopularArticle = async ({ lang }: PopularArticleProps = {}) => {
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
        <IconTrendingUp />
        <h2 className="text-2xl font-bold">{dict.common.popularArticle}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full h-64 debug rounded">card</div>
        <div className="w-full h-64 debug rounded">card</div>
      </div>
    </section>
  );
};
