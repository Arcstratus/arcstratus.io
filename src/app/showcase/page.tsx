import { StickyScroll } from "@/components/aceternity/sticky-scroll-reveal";
import Link from "next/link";
import ArcstratusCase from "./arcstratus-case";
import CtaCase from "./cta-case";
import IslandVoiceCase from "./island-voice-case";

const content = [
  {
    title: "諾🍊科技官網：我們的數位名片，我們有梗！",
    description:
      "是的，你正在逛的這個網站就是Vibe coding之作！ 使用Next.js和TailwindCSS打造，試圖展現雲端與創意的火花。你是UI/UX設計師嗎？救救AI吧。",
    content: <ArcstratusCase />,
  },
  {
    title: "島語存真",
    description:
      "記錄台灣公眾人物的言行、截圖和影片，打造一個透明、可信的存檔平台，保存台灣的真實聲音",
    content: (
      <a href="https://www.island-voice.com" target="_blank">
        <IslandVoiceCase />
      </a>
    ),
  },
  {
    title: "還在猶豫嗎？",
    description:
      "正在計畫你的夢想？想要有人一起討論嗎？沒問題！來跟我們跟你的瘋狂創意！讓我們一起讓它成真吧！",
    content: (
      <Link href="/contact">
        <CtaCase />
      </Link>
    ),
  },
];

export default function ShowcasePage() {
  return (
    <div className="relative w-full py-12">
      <h1 className="pb-8">合作成果</h1>
      <StickyScroll content={content} />
    </div>
  );
}
