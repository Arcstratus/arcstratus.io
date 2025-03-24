import { cn } from "@/lib/utils";

interface FooterCopyrightProps {
  className?: string;
  year: number;
  href: string;
  by: string;
  message?: React.ReactNode;
}

const divClassName = "block flex gap-2";

export function FooterCopyright(props: FooterCopyrightProps) {
  return (
    <div className={cn(divClassName, props.className)}>
      &copy; {props.year}
      <a
        href={props.href}
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.by}
      </a>
      {props.message}
    </div>
  );
}
