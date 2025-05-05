"use client";

import { IconArrowDown } from "@tabler/icons-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useRef } from "react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="relative w-full">
      <motion.div
        className="relative h-[30rem] flex justify-center gap-24 overflow-y-auto"
        ref={ref}
      >
        {/* Content */}
        <div className="relative flex items-start py-4 w-1/3">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0 }}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0 }}
                  className="mt-10 max-w-sm"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-16" />
          </div>
        </div>

        {/* Screenshot */}
        <div className="sticky inset-0 hidden lg:block overflow-hidden w-1/3 h-full">
          <div className="flex items-center justify-center h-full">
            {content[activeCard].content ?? null}
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 right-8 ">
        <IconArrowDown className="size-8 text-primary/60 animate-bounce" />
      </div>
    </div>
  );
};
