import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { headerMenuItems } from "./contact";

export function HeaderHandburger() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden h-10 w-10">
          <IconMenu2 />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {headerMenuItems.map((item) => (
          <DropdownMenuItem key={item.href}>
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
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="/privacy-policy"
            aria-disabled
            className={cn(
              "aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none",
              "text-foreground/50 "
            )}
          >
            Privacy Policy
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
