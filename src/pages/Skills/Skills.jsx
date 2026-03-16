import { useContext } from "react";
import { skills, skillsToLearn, certificates } from "../../helpers/skills.labels";
import styles from "./Skills.module.css";
import { labels } from "../../helpers/labels";
import { AppContext } from "../../context/AppContext";

const Skills = () => {
  const { lang } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center w-85 pt-28 pb-12">
      <h2 className={styles.patua}>{labels[lang].known_skills}</h2>
      <ul className={styles.listCont}>
        {skills.map((el, i) => (
          <li key={i} className={styles.listItem}>
            <h3>{el.name}</h3>
            <a href={el.link} target="blank">
              <img src={el.image} alt={el.name} />
            </a>
          </li>
        ))}
      </ul>

      <h2 className={styles.patua}>{labels[lang].skills_to_learn}</h2>
      <ul className={styles.listCont}>
        {skillsToLearn.map((el, i) => (
          <li key={i} className={styles.listItem}>
            <h3>{el.name}</h3>
            <a href={el.link} target="blank">
              <img src={el.image} alt={el.name} />
            </a>
          </li>
        ))}
      </ul>

      {/* ── Sección nueva de certificados ── */}
      <h2 className={styles.patua}>{labels[lang].certificates}</h2>
      <ul className={styles.certList}>
        {certificates.map((cert) => (
          <li key={cert.id} className={styles.certItem}>
            <div className={styles.certInfo}>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <span className={styles.certInstitution}>{cert.institution}</span>
              <span className={styles.certDate}>
                {cert.duration ? `${cert.duration} · ` : ""}
                {cert.date}
              </span>
            </div>
            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className={styles.certLink}
            >
              {labels[lang].view_certificate}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Skills };