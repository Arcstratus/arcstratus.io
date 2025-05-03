// FAQ頁面
// 依照 spec.md，解答常見問題
import { Accordion } from "@/components/shadcn/accordion";

export default function FAQPage() {
  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold mb-4">常見問題</h1>
      {/* 可用 Accordion 呈現問答 */}
      <Accordion type="single" collapsible>
        {/* 問題一 */}
        {/* ... */}
      </Accordion>
    </main>
  );
}
