import { Timeline } from "@/components/animation/timeline";
import { getDictionary, type I18nType } from "@/i18n/utils";
import Main from "@/ui/layout/main";
import { LatestNews, Milestone } from "@/ui/page/news";
import { events } from "./timeline-data";

export default async function NewsPage({ params }: { params: I18nType }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <Main>
      <LatestNews />
      <Milestone />
      <Timeline
        title="Project Timeline"
        description="Our development journey and milestones"
        events={events}
      />
    </Main>
  );
}
