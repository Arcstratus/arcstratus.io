// 成果展示頁面
// 依照 spec.md，展示案例卡片，點擊可進入詳細頁
import { Card } from "@/components/shadcn/card";

export default function ShowcasePage() {
  return (
    <main className="container py-8">
      <h1 className="mb-4">成果展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 範例卡片，未來可用 map 動態產生 */}
        <Card>
          <div className="p-4">
            <img
              src="/showcase/demo1.png"
              alt="Next.js 網站案例展示 - 現代化響應式設計"
              className="mb-2 rounded"
            />
            <h2 className="mb-1">Next.js 網站</h2>
            <p className="text-foreground">
              現代化響應式網站，支援 SEO 與靜態生成。
            </p>
          </div>
        </Card>
        {/* 其他案例卡片... */}
      </div>
    </main>
  );
}
