// 如何合作頁面
// 依照 spec.md，說明三種合作模式與聯繫方式
export default function HowToCooperatePage() {
  return (
    <main className="container py-8">
      <h1 className="mb-4">如何合作</h1>
      <section className="mb-6">
        <h2 className="mb-2">UI 設計師合作</h2>
        <p className="text-foreground">
          與 UI/UX 設計師合作，開發視覺化網頁或應用，提供前端與雲端整合。
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2">AI 創意產品化</h2>
        <p className="text-foreground">
          協助 AI 研究者或創意團隊將 AI
          概念轉化為可部署產品，支援後端開發與雲端部署。
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2">單純外包接案</h2>
        <p className="text-foreground">
          為企業或新創提供全端開發與雲端架構，快速交付技術解決方案。
        </p>
      </section>
      <section>
        {/* 聯繫方式 */}
        <h2 className="mb-2">聯繫方式</h2>
        <ul className="list-disc pl-6 text-foreground">
          <li>X (Twitter)</li>
          <li>Twitter（透過 IG 私訊，附說明）</li>
        </ul>
      </section>
    </main>
  );
}
