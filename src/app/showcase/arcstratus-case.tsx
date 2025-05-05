import {
  IconBrandDiscord,
  IconBrandThreads,
  IconBrandX,
  IconChevronRight,
} from "@tabler/icons-react";
import styles from "./arcstratus-case.module.css";

export default function ArcstratusCase() {
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.glass}></div>
        <div className={styles.content}>
          <span className={styles.title}>諾澄科技</span>
          <span className={styles.text}>
            一個熱愛科技、喜歡解決問題的雲端架構師，讓我成為你的最佳拍檔！
          </span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.socialButtonsContainer}>
            <a
              href="https://threads.net/@arcstratus"
              target="_blank"
              className={styles.socialButton}
            >
              <IconBrandThreads className={styles.socialButtonSvg} />
            </a>
            <a
              href="https://x.com/arcstratus"
              target="_blank"
              className={styles.socialButton}
            >
              <IconBrandX className={styles.socialButtonSvg} />
            </a>
            <button className={styles.socialButton}>
              <IconBrandDiscord className={styles.socialButtonSvg} />
            </button>
          </div>
          <div className={styles.viewMore}>
            <a href="/about" className={styles.viewMoreButton}>
              more
            </a>
            <IconChevronRight className={styles.viewMoreSvg} />
          </div>
        </div>
      </div>
    </div>
  );
}
