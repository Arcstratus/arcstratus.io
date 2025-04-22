"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getDictionary, type Locale } from "@/i18n/utils";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export const MainBreadcrumb = ({ locale = "tw" }: { locale?: Locale }) => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter(Boolean);
  const [homeText, setHomeText] = useState("Home");

  useEffect(() => {
    const loadTranslation = async () => {
      const dict = await getDictionary(locale);
      setHomeText(dict.navigation.home);
    };
    loadTranslation();
  }, [locale]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{homeText}</BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.map((pathname) => (
          <Fragment key={pathname}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${pathname}`}>{pathname}</BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
