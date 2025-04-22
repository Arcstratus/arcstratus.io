import { Locale } from "@/i18n/utils";
import TermsOfServicePageEN from "./page.en";
import TermsOfServicePageTW from "./page.tw";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function TermsOfServicePage({ params }: PageProps) {
  // Return the appropriate component based on the language
  if (params.lang === "tw") {
    return <TermsOfServicePageTW params={params} />;
  } else {
    return <TermsOfServicePageEN params={params} />;
  }
}
