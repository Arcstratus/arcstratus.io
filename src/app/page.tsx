"use client";

import Link from "next/link";

// 成果卡片組件
const ShowcaseCard = ({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) => (
  <div className="rounded-lg border border-border p-4 text-left bg-card text-card-foreground">
    <h3 className="mb-2">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
    <Link href={link} className="text-primary hover:underline text-sm">
      了解更多
    </Link>
  </div>
);

// 新聞卡片組件
const NewsCard = ({
  date,
  title,
  description,
  link,
}: {
  date: string;
  title: string;
  description: string;
  link: string;
}) => (
  <div className="rounded-lg border border-border p-4 text-left bg-card text-card-foreground">
    <div className="grid md:grid-cols-[auto_1fr] xl:grid-cols-[auto_1fr_auto] gap-4">
      <div className="md:p-4">
        <div className="text-xl font-medium text-foreground/60">{date}</div>
      </div>
      <div className="py-2 flex flex-col h-full gap-8">
        <div className="flex-grow">
          <h3 className="mb-1">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {description}
          </p>
        </div>
        <Link
          href={link}
          className="text-primary hover:underline text-sm mt-auto"
        >
          閱讀更多
        </Link>
      </div>
      <div className="hidden xl:block">
        <div className="size-64 bg-accent rounded-lg"></div>
      </div>
    </div>
  </div>
);

export default function Page() {
  const showcaseItems = [
    {
      title: "諾🍊科技官網",
      description:
        "使用 Next.js 和 TailwindCSS 打造的現代化響應式網站，展現雲端與創意的火花。",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "/showcase",
    },
    {
      title: "島語存真",
      description:
        "記錄台灣公眾人物的言行、截圖和影片，打造一個透明、可信的存檔平台。",
      tags: ["Vercel", "Railway", "Python", "TypeScript"],
      link: "https://www.island-voice.com",
    },
    {
      title: "即將發佈",
      description: "敬請期待我們的下一個精彩作品！",
      tags: ["Prometheus", "Grafana", "Go", "Terraform"],
      link: "/showcase",
    },
  ];

  const newsItems = [
    {
      date: "2024-06-01",
      title: "合作新案上線",
      description: "與知名設計師合作推出新產品網站。",
      link: "/news",
    },
    {
      date: "2024-05-01",
      title: "API 平台正式上線",
      description: "API 平台支援多雲部署，提升彈性。",
      link: "/news",
    },
  ];

  return (
    <main className="container py-16">
      {/* Hero 區塊 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh] max-w-6xl mx-auto mb-16">
        <div className="text-center md:text-left">
          <h1 className="mb-4">諾 🍊 科技</h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-foreground mx-auto md:mx-0">
            Hi, 我是文克,
            <br />
            一個熱愛科技、喜歡解決問題的雲端架構師。無論你是想打造專屬軟體、建構雲端天地，還是跨入AI的奇幻國度，我都能成為你的最佳拍檔！
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="px-6 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
            >
              聯絡我們
            </Link>
            <Link
              href="/about"
              className="px-6 py-2 rounded border border-primary text-primary font-semibold hover:bg-accent transition"
            >
              了解更多
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-full h-full flex items-center justify-center">
            <div className="size-80 bg-accent rounded-lg shadow-lg flex items-center justify-center"></div>
          </div>
        </div>
      </div>

      {/* 我們做了什麼？區塊 */}
      <section className="mb-16 w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-primary">我們做了什麼？</h2>
          <Link
            href="/showcase"
            className="text-primary hover:underline text-sm"
          >
            查看所有成果 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseItems.map((item) => (
            <ShowcaseCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* 最新消息區塊 */}
      <section className="mb-16 w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-primary">最新消息</h2>
          <Link href="/news" className="text-primary hover:underline text-sm">
            更多新聞 →
          </Link>
        </div>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <NewsCard key={item.date} {...item} />
          ))}
        </div>
      </section>

      {/* CTA 區塊 */}
      <div className="relative overflow-hidden rounded-2xl mb-10 bg-muted">
        <div className="p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              準備好開始合作了嗎？
            </h2>
            <p className="text-muted-foreground mb-8">
              無論是打造新產品、優化現有系統，還是探索 AI
              的可能性，我們都能提供專業的協助。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/how-to-cooperate"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-lg hover:shadow-primary/20"
              >
                如何合作
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-accent transition"
              >
                聯繫我們
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
