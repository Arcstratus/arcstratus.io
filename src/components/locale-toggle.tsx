"use client";

import { changeLocale } from "@/components/locale-actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconLanguage } from "@tabler/icons-react";
import { NavbarButton } from "./aceternity/resizable-navbar";

export function LocaleToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavbarButton
          as="button"
          variant="secondary"
          className="flex middle center"
        >
          <IconLanguage className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </NavbarButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale("tw")}>
          繁體中文
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
