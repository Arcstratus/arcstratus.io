import { Locale } from "@/i18n/utils";
import PrivacyPolicyPageEN from "./page.en";
import PrivacyPolicyPageTW from "./page.tw";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  // Return the appropriate component based on the language
  if (params.lang === "tw") {
    return <PrivacyPolicyPageTW params={params} />;
  } else {
    return <PrivacyPolicyPageEN params={params} />;
  }
}
