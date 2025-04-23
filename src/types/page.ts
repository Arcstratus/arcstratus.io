import { Locale } from "@/i18n/utils";

export type PageProps = {
  params: Promise<{ lang: Locale }>;
};
