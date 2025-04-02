import { cn } from "@/lib/utils";
import {
  IconChevronCompactLeft,
  IconChevronCompactRight,
} from "@tabler/icons-react";

const SectionLabel = ({ name }: { name: string }) => {
  return (
    <div className="flex gap-2 text-muted-foreground mb-4">
      <IconChevronCompactLeft size={24} />
      <span className="capitalize">{name}</span>
      <IconChevronCompactRight size={24} />
    </div>
  );
};

interface SectionProps {
  children: React.ReactNode;
  name: string;
  className?: string;
  noLable?: boolean;
}

export const Section = ({
  children,
  name,
  className,
  noLable,
}: SectionProps) => {
  return (
    <section id={name} className={cn("relative pb-8", className)}>
      {!noLable && <SectionLabel name={name} />}
      {children}
    </section>
  );
};
