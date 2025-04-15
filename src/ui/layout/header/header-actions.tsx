import { cn } from "@/lib/utils";

interface HeaderActionsProps {
  className?: string;
}

export const HeaderActions = ({ className }: HeaderActionsProps) => {
  return (
    <div className={cn("flex gap-4", className)}>
      {/* add action buttons hero */}
      {/* <NavbarButton variant="primary">example</NavbarButton> */}
    </div>
  );
};
