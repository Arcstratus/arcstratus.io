interface FooterCopyrightProps {
  year: number;
  href: string;
  by: string;
  message?: React.ReactNode;
}

export function FooterCopyright({
  year,
  href,
  by,
  message = "All rights reserved.",
}: FooterCopyrightProps) {
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
      {message}
    </div>
  );
}
