import { labels } from "../../helpers/home.labels";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.contPrinc}>
      <h1>{labels.about}</h1>
      <div className={styles.contSec}>
        <div className={styles.card}>
          <h3>{labels.greeting_text}</h3>
          <h2>{labels.name_label}</h2>
          <p>{labels.content_text}</p>
          <br />
          <p>{labels.content_text_2}</p>
          <br />
          <p>{labels.content_text_3}</p>
        </div>
        <div className={styles.photo}></div>
      </div>
    </div>
  );
};
