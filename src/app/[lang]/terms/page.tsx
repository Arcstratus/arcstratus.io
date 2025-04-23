import { Locale } from "@/i18n/utils";
import TermsOfServicePageEN from "./page.en";
import TermsOfServicePageTW from "./page.tw";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function TermsOfServicePage({ params }: PageProps) {
  // Return the appropriate component based on the language
  const resolvedParams = await params;
  if (resolvedParams.lang === "tw") {
    return <TermsOfServicePageTW params={resolvedParams} />;
  } else {
    return <TermsOfServicePageEN params={resolvedParams} />;
  }
}
