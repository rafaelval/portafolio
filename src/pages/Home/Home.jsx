import { useContext } from "react";
import { labels } from "../../helpers/labels";
import styles from "./Home.module.css";
import foto from "../../images/foto.jpg";
import { AppContext } from "../../context/AppContext";

const Home = () => {
  const { lang } = useContext(AppContext);

  return (
    <div className={styles.contPrinc}>
      <h1 className={styles.patua}>{labels[lang].about}</h1>
      <div className={styles.contSec}>
        <div className={styles.card}>
          <h2 className={`${styles.kode_mono} ${styles.kode_mono_title}`}>
            {labels[lang].name_label}
          </h2>
          <h3 className={`${styles.kode_mono_subtitle}`}>
            {labels[lang].developer}
          </h3>
          <br />
          <p className={styles.kode_mono}>{labels[lang].content_text}</p>
          <br />
          <p className={styles.kode_mono}>{labels[lang].content_text_2}</p>
          <br />
          <p className={styles.kode_mono}>{labels[lang].content_text_3}</p>
        </div>
        <div className={styles.photo}>
          <img src={foto} alt="" />
        </div>
      </div>
    </div>
  );
};

export { Home };
