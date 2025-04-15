import { IconBrandInstagram, IconBrandThreads } from "@tabler/icons-react";

import { IconBrandX } from "@tabler/icons-react";

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

export const FooterSocialMedia = () => {
  return (
    <div className="flex gap-2 middle px-2 center lg:justify-start text-foreground/70">
      <FooterIcon
        href="https://www.instagram.com/arcstratus/"
        icon={<IconBrandInstagram />}
        ariaLabel="Instagram"
      />
      <FooterIcon
        href="https://www.threads.net/arcstratus"
        icon={<IconBrandThreads />}
        ariaLabel="Threads"
      />
      <FooterIcon
        href="https://x.com/arcstratus"
        icon={<IconBrandX />}
        ariaLabel="X"
      />
    </div>
  );
};
