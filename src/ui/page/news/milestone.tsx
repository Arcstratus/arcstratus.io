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
        <p>
          {locale === "tw"
            ? "我們是一個熱衷於創造能幫助人們過上更好生活的產品的開發者團隊。"
            : "We are a team of developers who are passionate about creating products that help people live better lives."}
        </p>
      </div>
    </section>
  );
};
