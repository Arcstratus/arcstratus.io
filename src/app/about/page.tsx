import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container py-8 space-y-20">
      {/* Hero Section */}
      <div className="text-center pt-8">
        <h1 className="text-4xl font-bold mb-4">關於諾 🍊 科技</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          專注於創意發展、雲端架構與人工智慧的技術公司
        </p>
      </div>

      {/* 公司介紹 */}
      <section>
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">關於我們</h2>
              <p className="mb-4">
                諾澄科技（Arcstratus）以一人公司模式運營，靈活且高效。我們希望透過跨領域合作，將技術專業與創意理念結合，協助個人創作者實現創新產品與解決方案。
              </p>
              <p>
                創辦人擁有超過 10
                年的雲端架構經驗，涵蓋設計、部署、維護與監控，並具備網頁前後端全端開發能力。
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">核心價值</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>專業技術與創新思維的結合</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>靈活高效的一人公司模式</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>跨領域合作與創新</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 合作理念 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          我們的合作理念
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-3">雲端架構</h3>
            <p className="text-muted-foreground">
              為企業與初創公司提供穩定、可擴展的雲端解決方案，加速產品上線
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-3">人工智慧</h3>
            <p className="text-muted-foreground">
              與 AI 研究者及創意團隊合作，將概念轉化為可部署的產品
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-3">軟體產品</h3>
            <p className="text-muted-foreground">
              提供全端開發服務，打造從前端介面到後端邏輯的完整解決方案
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-3">創意發展</h3>
            <p className="text-muted-foreground">
              與 UI/UX 設計師、內容創作者等合作，開發視覺化、互動性強的應用
            </p>
          </div>
        </div>
      </section>

      {/* 為什麼選擇我們 */}
      <section>
        <div className="bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            為什麼選擇諾 🍊 科技？
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">專業與經驗</h3>
              <p className="text-muted-foreground">
                10 年雲端架構與軟體開發經驗，涵蓋多種技術棧，確保高品質交付
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">靈活合作</h3>
              <p className="text-muted-foreground">
                一人公司模式，溝通直接、反應迅速，適應不同規模的項目需求
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">跨領域視野</h3>
              <p className="text-muted-foreground">
                結合技術與創意，與不同領域的專業人士合作，實現多元化創新
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">以合作為核心</h3>
              <p className="text-muted-foreground">
                專注於建立長期、可信賴的合作關係，而非單次交易
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡方式 */}
      <section>
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center">聯絡我們</h2>
          <p className="text-center mb-6">
            如果您對跨領域合作感興趣，歡迎透過以下方式聯絡我們！
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="bg-background px-6 py-4 rounded-lg text-center hover:bg-muted transition-colors inline-flex items-center gap-2"
            >
              <span className="text-lg font-semibold">聯絡表單</span>
              <span className="text-primary">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
