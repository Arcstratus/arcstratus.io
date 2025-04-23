"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface CardHoverEffectItem {
  title: string;
  description: string;
  href: string;
}

interface CardHoverEffect {
  items: CardHoverEffectItem[];
  className?: string;
}

export const CardHoverEffect = ({ items, className }: CardHoverEffect) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.href}
          key={item.href}
          className={cn(
            "relative group block p-2 h-full w-full",
            item.href ? "cursor-pointer" : "cursor-not-allowed"
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card title={item.title} description={item.description} />
        </a>
      ))}
    </div>
  );
};

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
      <div className="relative z-50">
        <div className="p-4">
          <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
            {title}
          </h4>
          <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
