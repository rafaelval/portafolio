import { labels } from "../../helpers/home.labels";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.contPrinc}>
      <h1 className={styles.patua}>{labels.about}</h1>
      <div className={styles.contSec}>
        <div className={styles.card}>
          <h3 className={`${styles.kode_mono} ${styles.kode_mono_title}`}>{labels.greeting_text}</h3>
          <h2 className={`${styles.kode_mono} ${styles.kode_mono_title}`}>{labels.name_label}</h2>
          <br />
          <p className={styles.kode_mono}>{labels.content_text}</p>
          <br />
          <p className={styles.kode_mono}>{labels.content_text_2}</p>
          <br />
          <p className={styles.kode_mono}>{labels.content_text_3}</p>
        </div>
        <div className={styles.photo}></div>
      </div>
    </div>
  );
};
