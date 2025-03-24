interface FooterIconProps {
  href: string;
  icon: React.ReactNode;

  ariaLabel?: string;
}

export function FooterIcon(props: FooterIconProps) {
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
}
