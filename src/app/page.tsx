"use client";

import { IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container py-16">
      {/* Hero 區塊：品牌標題與簡介 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh] max-w-6xl mx-auto">
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
          {/* 右側圖片或裝飾元素 */}
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
            href="/products"
            className="text-primary hover:underline text-sm"
          >
            查看所有成果 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 範例成果卡片 */}
          <div className="rounded-lg border border-border p-4 text-left bg-card text-card-foreground">
            <h3 className="mb-2">Next.js 品牌網站</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              現代化響應式網站，支援 SEO 與靜態生成。
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                Next.js
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                TypeScript
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                Tailwind CSS
              </span>
            </div>
            <Link
              href="/showcase"
              className="text-primary hover:underline text-sm"
            >
              了解更多
            </Link>
          </div>
          <div className="rounded-lg border border-border p-4 text-left bg-card text-card-foreground">
            <h3 className="mb-2">AI 聊天機器人平台</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              結合 FastAPI 與 AWS，打造可擴展的 AI 服務。
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                FastAPI
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                AWS
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                Python
              </span>
            </div>
            <Link
              href="/showcase"
              className="text-primary hover:underline text-sm"
            >
              了解更多
            </Link>
          </div>
          <div className="rounded-lg border border-border p-4 text-left bg-card text-card-foreground">
            <h3 className="mb-2">雲端監控系統</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              即時監控與分析系統，提供完整的雲端資源管理。
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                AWS
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                Grafana
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                Terraform
              </span>
            </div>
            <Link
              href="/showcase"
              className="text-primary hover:underline text-sm"
            >
              了解更多
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
