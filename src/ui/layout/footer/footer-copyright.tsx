import { getDictionary, type Locale } from "@/i18n/utils";

interface FooterCopyrightProps {
  year: number;
  href: string;
  by: string;
  message?: React.ReactNode;
  locale?: Locale;
}

export async function FooterCopyright({
  year,
  href,
  by,
  message,
  locale = "tw",
}: FooterCopyrightProps) {
  const dict = await getDictionary(locale);
  const defaultMessage = dict.footer.copyright;
  return (
    <div className="flex gap-2 center">
      &copy; {year}
      <a
        href={href}
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {by}
      </a>
      {message || defaultMessage}
    </div>
  );
}
