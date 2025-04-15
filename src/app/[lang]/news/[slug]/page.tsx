import Main from "@/ui/layout/main";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "company-launch" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/news/${slug}.mdx`);

  return (
    <Main>
      <Post />
    </Main>
  );
}
