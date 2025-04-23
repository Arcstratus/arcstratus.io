"use client";

import { useI18n } from "@/components/i18n-provider";
import { LocaleToggle } from "@/components/locale-toggle";
import { Button } from "@/components/shadcn/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/navigation-menu";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";

export function HeaderNav() {
  const { dictionary, locale } = useI18n();

  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <div className="flex items-center justify-between w-full ml-2 md:ml-4">
      <NavigationMenu className="hidden sm:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {dictionary.common.navigation.products}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href={getLocalizedHref("/products")}
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {dictionary.products.title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {dictionary.products.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      href={getLocalizedHref("/products/cloud-solutions")}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {dictionary.products.cloudSolutions}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {dictionary.products.cloudSolutionsDesc}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      href={getLocalizedHref("/products/software-development")}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {dictionary.products.softwareDevelopment}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {dictionary.products.softwareDevelopmentDesc}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      href={getLocalizedHref("/products/devops")}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {dictionary.products.devOps}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {dictionary.products.devOpsDesc}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={getLocalizedHref("/services")} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {dictionary.common.navigation.services}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={getLocalizedHref("/news")} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {dictionary.common.navigation.news}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={getLocalizedHref("/about")} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {dictionary.common.navigation.about}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button variant="ghost" size="icon" className="sm:hidden mr-2">
        <IconMenu2 className="h-5 w-5" />
        <span className="sr-only">Menu</span>
      </Button>

      <div className="flex items-center space-x-4 ml-auto">
        <LocaleToggle />
      </div>
    </div>
  );
}
