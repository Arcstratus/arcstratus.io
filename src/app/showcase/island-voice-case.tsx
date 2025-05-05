import Image from "next/image";
import styles from "./island-voice-case.module.css";
import islandVoiceSrc from "./screenshot/island-voice.png";

export default function IslandVoiceCase() {
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        <div className={styles.contentBox}>
          <span className={styles.cardTitle}>島語存真</span>
          <Image src={islandVoiceSrc} alt="島語存真" />
          <span className={styles.seeMore}>See More</span>
        </div>
        <div className={styles.dateBox}>
          <span className={styles.month}>OCT</span>
          <span className={styles.date}>10</span>
        </div>
      </div>
    </div>
  );
}
