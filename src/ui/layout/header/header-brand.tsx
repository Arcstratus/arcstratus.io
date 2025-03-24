import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeaderBrandProps {
  title: string;
  href: string;
  className?: string;
}

const linkClassName = "hover:underline";

export function HeaderBrand(props: HeaderBrandProps) {
  return (
    <Link href={props.href} className={cn(linkClassName, props.className)}>
      {props.title}
    </Link>
  );
}
