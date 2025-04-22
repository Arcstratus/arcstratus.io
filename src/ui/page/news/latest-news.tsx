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
      <h2>2025 4</h2>
      <p>
        {locale === "tw"
          ? "我們即將推出第一個產品 BuyForYou，這是一款為每個家庭設計的購物助手，讓購物變得更簡單、更精準。上傳照片、錄製語音備忘錄，輕鬆同步購物清單。即使是「慌張爸爸」也能立即變身為購物高手和團隊MVP。"
          : 'We\'re about to launch our first product, BuyForYou, a shopping assistant for every family that makes purchasing easier and more accurate. Upload photos, record voice notes, and sync shopping lists effortlessly. Even "Panic Dad" can instantly transform into a shopping pro and team MVP.'}
      </p>
    </section>
  );
};
