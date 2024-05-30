import { labels, skills, skillsToLearn } from "../../helpers/skills.labels"
import styles from './Skills.module.css'

export const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-85" >
      <h2 className="font-extrabold ">{labels.known_skills}</h2>
      <ul className={styles.listCont}>
      {skills.map((el, i) => (
        <li key={i} className={styles.listItem}>
          <h3>{el.name}</h3>
          <a href={el.link} target="blank"><img src={el.image} alt={el.name}/></a>
        </li>
        ))}
        </ul>
        <h2 className="font-extrabold ">{labels.skills_to_learn}</h2>
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
