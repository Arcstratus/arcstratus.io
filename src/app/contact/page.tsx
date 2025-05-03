// 聯繫頁面
// 依照 spec.md，包含聯繫表單與社群聯繫方式
import { Form } from "@/components/shadcn/form";

export default function ContactPage() {
  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold mb-4">聯繫我們</h1>
      {/* 這裡將放置聯繫表單（姓名、聯繫方式、合作意向） */}
      <Form>{/* 表單欄位... */}</Form>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">社群聯繫</h2>
        <ul className="list-disc pl-6">
          <li>X (Twitter)</li>
          <li>Twitter（透過 IG 私訊，請先追蹤帳號）</li>
        </ul>
      </section>
    </main>
  );
}
