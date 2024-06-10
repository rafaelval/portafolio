import { useSelector } from "react-redux";
import { skills, skillsToLearn } from "../../helpers/skills.labels"
import styles from './Skills.module.css'
import { labels } from "../../helpers/labels";

export const Skills = () => {

  const { lang } = useSelector((state) => state);
  return (
    <div className="flex flex-col items-center justify-center w-85" >
      <h2 className={styles.patua}>{labels[lang].known_skills}</h2>
      <ul className={styles.listCont}>
      {skills.map((el, i) => (
        <li key={i} className={styles.listItem}>
          <h3>{el.name}</h3>
          <a href={el.link} target="blank"><img src={el.image} alt={el.name}/></a>
        </li>
        ))}
        </ul>
        <h2 className={styles.patua}>{labels[lang].skills_to_learn}</h2>
        <ul className={styles.listCont}>
        {skillsToLearn.map((el, i) => (
        <li key={i} className={styles.listItem}>
          <h3>{el.name}</h3>
          <a href={el.link} target="blank"><img src={el.image} alt={el.name}/></a>
        </li>
        ))}
        </ul>
    </div>
  )
}
