"use client";

import { IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container py-16 flex flex-col items-center text-center">
      {/* Hero 區塊：品牌標題與簡介 */}
      <h1 className="mb-4">諾 🍊 科技</h1>
      <p className="text-lg md:text-xl mb-6 max-w-xl text-foreground">
        Hi, 我是文克,
        <br />
        一個熱愛科技、喜歡解決問題的雲端架構師。無論你是想打造專屬軟體、建構雲端天地，還是跨入AI的奇幻國度，我都能成為你的最佳拍檔！
      </p>
      {/* 品牌定位區塊 */}
      <section className="mb-10 max-w-2xl">
        <div className="bg-card text-card-foreground rounded-lg p-6 border border-border">
          <h2 className="mb-2 text-primary">品牌定位</h2>
          <p className="mb-2">
            <span className="font-bold text-primary">諾澄科技</span>是一家
            <strong>一人公司</strong>，以彈性、專業為核心，主要尋求
            <span className="font-bold text-primary">跨領域合作</span>。
          </p>
          <p>
            聚焦於<strong>雲端架構</strong>、<strong>AI</strong>、
            <strong>軟體產品</strong>及<strong>創意發展</strong>
            等合作，歡迎企業、初創團隊、個人創作者洽談合作機會。
          </p>
        </div>
      </section>
      {/* 精選成果區塊（可選） */}
      <section className="mb-10 w-full max-w-4xl">
        <h2 className="mb-4 text-primary">精選成果</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 範例成果卡片 */}
          <div className="rounded-lg border border-border p-4 text-left bg-card text-card-foreground">
            <h3 className="mb-1">Next.js 品牌網站</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              現代化響應式網站，支援 SEO 與靜態生成。
            </p>
            <Link
              href="/showcase"
              className="text-primary hover:underline text-sm"
            >
              查看更多
            </Link>
          </div>
          <div className="rounded-lg border border-border p-4 text-left bg-card text-card-foreground">
            <h3 className="mb-1">AI 聊天機器人平台</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              結合 FastAPI 與 AWS，打造可擴展的 AI 服務。
            </p>
            <Link
              href="/showcase"
              className="text-primary hover:underline text-sm"
            >
              查看更多
            </Link>
          </div>
        </div>
      </section>
      {/* 最新消息區塊（可選） */}
      <section className="mb-10 w-full max-w-4xl">
        <h2 className="mb-4 text-primary">最新消息</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 範例新聞卡片 */}
          <div className="rounded-lg border border-border p-4 text-left bg-card text-card-foreground">
            <h3 className="mb-1">2024-06-01 合作新案上線</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              與知名設計師合作推出新產品網站。
            </p>
            <Link href="/news" className="text-primary hover:underline text-sm">
              更多新聞
            </Link>
          </div>
          <div className="rounded-lg border border-border p-4 text-left bg-card text-card-foreground">
            <h3 className="mb-1">2024-05-01 API 平台正式上線</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              API 平台支援多雲部署，提升彈性。
            </p>
            <Link href="/news" className="text-primary hover:underline text-sm">
              更多新聞
            </Link>
          </div>
        </div>
      </section>
      {/* CTA 按鈕 */}
      <div className="flex gap-4 mb-10">
        <Link
          href="/how-to-cooperate"
          className="px-6 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
        >
          如何合作
        </Link>
        <Link
          href="/contact"
          className="px-6 py-2 rounded border border-primary text-primary font-semibold hover:bg-accent transition"
        >
          聯繫我們
        </Link>
      </div>
      {/* 社群連結 */}
      <div className="flex gap-6 mb-8">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-primary transition"
        >
          <IconBrandTwitter size={32} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-primary transition"
        >
          <IconBrandInstagram size={32} />
        </a>
      </div>
      {/* 內部連結導覽 */}
      <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
        <Link href="/about" className="hover:text-primary transition">
          關於我們
        </Link>
        <Link href="/showcase" className="hover:text-primary transition">
          成果展示
        </Link>
        <Link href="/news" className="hover:text-primary transition">
          新聞
        </Link>
        <Link href="/faq" className="hover:text-primary transition">
          FAQ
        </Link>
        <Link href="/policy" className="hover:text-primary transition">
          隱私政策
        </Link>
      </nav>
    </main>
  );
}
