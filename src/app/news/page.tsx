// 新聞頁面
// 依照 spec.md，展示最新動態卡片與歷史新聞列表
export default function NewsPage() {
  return (
    <main className="container py-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="animate-bounce mb-8">
          <span className="text-6xl">📰</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">新聞編輯室施工中！</h1>
        <p className="text-xl text-gray-600 mb-2">
          我們的記者正在努力準備精彩內容
        </p>
        <p className="text-lg text-gray-500">
          敬請期待，很快就會有最新消息囉！
        </p>
        <div className="mt-8 flex gap-2">
          <span className="animate-spin">✍️</span>
          <span className="animate-spin delay-75">📝</span>
          <span className="animate-spin delay-150">📰</span>
        </div>
      </div>
    </main>
  );
}
