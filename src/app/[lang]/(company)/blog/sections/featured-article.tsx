import { getDictionary, type Locale } from "@/i18n/utils";
import { IconStar } from "@tabler/icons-react";
import { cookies } from "next/headers";

interface FeaturedArticleProps {
  lang?: Locale;
}

export const FeaturedArticle = async ({ lang }: FeaturedArticleProps = {}) => {
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
        <IconStar />
        <h2 className="text-2xl font-bold">{dict.common.featuredArticle}</h2>
      </div>

      <div className="w-full h-64 debug rounded">card</div>
    </section>
  );
};
