import { getDictionary, type Locale } from "@/i18n/utils";
import { cookies } from "next/headers";

interface MilestoneProps {
  lang?: Locale;
}

export const Milestone = async ({ lang }: MilestoneProps = {}) => {
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
      <h1>{dict.news.timeline.title}</h1>

      <div>
        <h2>{dict.news.timeline.data[0].title}</h2>
        <p>{dict.news.timeline.data[0].teamDescription}</p>
      </div>
    </section>
  );
};
