import { getDictionary, type Locale } from "@/i18n/utils";
import { cookies } from "next/headers";

interface LatestNewsProps {
  lang?: Locale;
}

export const LatestNews = async ({ lang }: LatestNewsProps = {}) => {
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
    <section className="relative w-full">
      <h1 className="capitalize">{dict.news.title}</h1>
      <h2>{dict.news.upcoming.date}</h2>
      <p>{dict.news.upcoming.product.description}</p>
    </section>
  );
};
