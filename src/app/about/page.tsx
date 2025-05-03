// 關於我們頁面
// 依照 spec.md，簡述背景、技術專長、合作理念
export default function AboutPage() {
  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold mb-4">關於諾 🍊 科技</h1>
      <section className="mb-6">
        {/* 公司背景簡述 */}
        <p>
          擁有 10 年雲端架構經驗，專精於設計、維護、監控，並具備前後端開發能力。
        </p>
      </section>
      <section className="mb-6">
        {/* 技術專長列表 */}
        <h2 className="text-xl font-semibold mb-2">技術專長</h2>
        <ul className="list-disc pl-6">
          <li>
            前端：TypeScript（React、Next.js、Svelte）、TailwindCSS、Shadcn
          </li>
          <li>後端：Python（Django、Django-Ninja、FastAPI）、Go（Gin）</li>
          <li>認證：Clerk</li>
          <li>雲端服務：AWS、GCP</li>
          <li>監控：Prometheus、Grafana</li>
        </ul>
      </section>
      <section>
        {/* 合作理念 */}
        <h2 className="text-xl font-semibold mb-2">合作理念</h2>
        <p>專注於雲端、AI、軟體及創意項目，尋求跨領域合作，強調專業與彈性。</p>
      </section>
    </main>
  );
}
