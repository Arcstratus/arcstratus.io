import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

interface HeaderProps extends React.ComponentProps<"header"> {
  className?: string;
}

const headerClassName =
  "fixed top-0 z-50 w-full h-16 shadow-md bg-background/90";
const divClassName = "container mx-auto px-4 py-3 flex between middle gap-4";

export function Header({ children, className }: HeaderProps) {
  return (
    <header className={cn(headerClassName, className)}>
      <div className={divClassName}>{children}</div>
    </header>
  );
}
