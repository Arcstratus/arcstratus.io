import { LocaleToggle } from "@/components/locale-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

interface HeaderActionsProps {
  className?: string;
}

export const HeaderActions = ({ className }: HeaderActionsProps) => {
  return (
    <div className={cn("flex gap-4", className)}>
      <LocaleToggle />
      <ThemeToggle />
    </div>
  );
};
