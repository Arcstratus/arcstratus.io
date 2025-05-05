import { cn } from "@/lib/utils";
import styles from "./cta-case.module.css";

export default function CtaCase() {
  return (
    <div className={styles.card}>
      <div
        className={cn(
          styles.card,
          "w-80 h-64 rounded-[30px] bg-background",
          "shadow-[15px_15px_30px_oklch(92.2%_0_0),-15px_-15px_30px_oklch(97%_0_0)]",
          "dark:shadow-[15px_15px_30px_oklch(20.5%_0_0),-15px_-15px_30px_oklch(26.9%_0_0)]"
        )}
      ></div>
    </div>
  );
}
