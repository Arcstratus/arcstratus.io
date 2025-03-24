import { cn } from "@/lib/utils";

interface FooterProps extends React.ComponentProps<"footer"> {
  className?: string;
}

const footerClassName = "h-16 w-full container mx-auto";

const divClassName = "flex gap-4 p-4";

export function Footer(props: FooterProps) {
  return (
    <footer className={cn(footerClassName, props.className)}>
      <div className={divClassName}>{props.children}</div>
    </footer>
  );
}
