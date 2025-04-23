import { Locale } from "@/i18n/utils";
import PrivacyPolicyPageEN from "./page.en";
import PrivacyPolicyPageTW from "./page.tw";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  // Return the appropriate component based on the language
  const resolvedParams = await params;
  if (resolvedParams.lang === "tw") {
    return <PrivacyPolicyPageTW params={resolvedParams} />;
  } else {
    return <PrivacyPolicyPageEN params={resolvedParams} />;
  }
}
