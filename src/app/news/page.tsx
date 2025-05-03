// 新聞頁面
// 依照 spec.md，展示最新動態卡片與歷史新聞列表
import { Card } from "@/components/shadcn/card";

export default function NewsPage() {
  return (
    <main className="container py-8">
      <h1 className="mb-4">最新消息</h1>
      <section className="mb-8">
        <h2 className="mb-2">最新動態</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 最新新聞卡片 */}
          <Card>
            <div className="p-4">
              <img
                src="/news/news1.png"
                alt="諾澄科技與知名設計師合作推出新產品網站 - 2024年6月"
                className="mb-2 rounded"
              />
              <h3 className="mb-1">合作新案上線</h3>
              <p className="text-foreground">2024-06-01</p>
              <p className="text-foreground">
                與知名設計師合作推出新產品網站。
              </p>
            </div>
          </Card>
          {/* 其他新聞卡片... */}
        </div>
      </section>
      <section>
        <h2 className="mb-2">歷史新聞</h2>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-medium">2024-05-01</span> -{" "}
            <span className="text-foreground">API 平台正式上線</span>
          </li>
          {/* 其他歷史新聞... */}
        </ul>
      </section>
    </main>
  );
}
