import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";
import { I18nProvider } from "@/components/i18n-provider";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/card";
import Link from "next/link";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function NewsPage({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  // Mock news data - in a real project, this would come from a CMS or API
  const newsItems = [
    {
      id: 1,
      title: "Arcstratus Launches New Cloud Management Platform",
      date: "2025-01-15",
      excerpt: "Our new platform offers enhanced security features and improved performance for enterprise clients.",
      slug: "new-cloud-platform",
    },
    {
      id: 2,
      title: "Partnership with Leading Tech University",
      date: "2024-12-10",
      excerpt: "We're excited to announce our new partnership with Tech University to develop cutting-edge cloud solutions.",
      slug: "university-partnership",
    },
    {
      id: 3,
      title: "Arcstratus Recognized as Top Cloud Provider",
      date: "2024-11-05",
      excerpt: "Industry analysts have recognized Arcstratus as a top provider of cloud solutions for the third consecutive year.",
      slug: "top-cloud-provider",
    },
    {
      id: 4,
      title: "New Office Opening in Asia Pacific Region",
      date: "2024-10-20",
      excerpt: "We're expanding our global presence with a new office in Singapore to better serve our APAC clients.",
      slug: "new-office-singapore",
    },
    {
      id: 5,
      title: "Arcstratus Achieves ISO 27001 Certification",
      date: "2024-09-15",
      excerpt: "We're proud to announce that we have achieved ISO 27001 certification for our information security management system.",
      slug: "iso-certification",
    },
    {
      id: 6,
      title: "Introducing Our New DevOps Automation Tools",
      date: "2024-08-01",
      excerpt: "Our new suite of DevOps automation tools helps teams streamline their development and deployment processes.",
      slug: "devops-automation-tools",
    },
  ];

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(params.lang === "en" ? "en-US" : "zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <I18nProvider locale={params.lang} dictionary={dictionary}>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {dictionary.news.title}
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dictionary.news.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.id} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{formatDate(item.date)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/${params.lang}/news/${item.slug}`}>
                    <Button variant="outline">
                      {dictionary.news.readMore}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </I18nProvider>
  );
}
