import { cn } from "@/lib/utils";
import Link from "next/link";
import { headerMenuItems } from "./contact";

export function HeaderMenu() {
  return (
    <ul className="flex-grow hidden lg:flex gap-4 ml-4">
      {headerMenuItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            aria-disabled
            className={cn(
              "aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none",
              "text-foreground/50 hover:text-foreground transition-color duration-200 capitalize"
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
