import { labels } from "../../helpers/home.labels";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.contPrinc}>
      <div className={styles.card}>
        <h3>{labels.greeting_text}</h3>
        <h1>{labels.name_label}</h1>
        <p>{labels.content_text}</p>
      </div>
      <div className={styles.photo}></div>
    </div>
  );
};
