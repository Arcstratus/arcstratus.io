import { getDictionary, type Locale } from "@/i18n/utils";
import {
  IconBrandInstagram,
  IconBrandThreads,
  IconBrandX,
} from "@tabler/icons-react";
import { cookies } from "next/headers";

interface FooterIconProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel?: string;
}

export const FooterIcon = (props: FooterIconProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.ariaLabel}
    >
      {props.icon}
    </a>
  );
};

interface FooterSocialMediaProps {
  locale?: Locale;
}

export async function FooterSocialMedia({
  locale,
}: FooterSocialMediaProps = {}) {
  // Get locale from props if provided, otherwise from cookies with fallback to default
  let localeValue: Locale;
  if (locale) {
    localeValue = locale;
  } else {
    const cookieStore = await cookies();
    localeValue = (cookieStore.get("locale")?.value as Locale) || "tw";
  }

  const dict = await getDictionary(localeValue);
  return (
    <div className="flex gap-2 middle px-2 center lg:justify-start text-foreground/70">
      <FooterIcon
        href="https://www.instagram.com/arcstratus/"
        icon={<IconBrandInstagram />}
        ariaLabel={dict.footer.social.instagram}
      />
      <FooterIcon
        href="https://www.threads.net/arcstratus"
        icon={<IconBrandThreads />}
        ariaLabel={dict.footer.social.threads}
      />
      <FooterIcon
        href="https://x.com/arcstratus"
        icon={<IconBrandX />}
        ariaLabel={dict.footer.social.x}
      />
    </div>
  );
}
