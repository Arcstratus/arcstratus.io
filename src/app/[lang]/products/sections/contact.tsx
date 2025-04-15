import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Contact = () => {
  return (
    <section className="relative w-full bg-muted">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex flex-col middle center gap-4">
          <h2 className="text-2xl font-bold">想要與我們合作嗎？</h2>
          <p className="pb-8">
            我們正在尋找有創意的夥伴，一起打造更好的產品。
            <br />
            歡迎隨時聯繫我們，我們期待與您合作。
          </p>
          <Separator />
          <div className="flex flex-col xl:flex-row right gap-4 w-full">
            <Button>聯繫我們</Button>
            <Button variant="outline">研究案例</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
