"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY <= lastScrollY);
    setLastScrollY(currentScrollY);
  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full backdrop-blur",
        // Animation
        "duration-200",
        isMobile && !visible ? "-translate-y-20" : "translate-y-0"
      )}
    >
      <div className="mx-auto w-full px-4 xl:max-w-7xl relative">
        <nav className="flex center py-4 h-16 between gap-4">{children}</nav>
      </div>
    </header>
  );
}
