import { skills } from "../../helpers/skills.labels"
import styles from './Skills.module.css'

export const Skills = () => {
  return (
    <div className="flex items-center justify-center w-85" >
      <ul className={styles.listCont}>

      {skills.map((el, i) => (
        <li key={i} className={styles.listItem}>
          <h3>{el.name}</h3>
          <a href={el.link} target="blank"><img src={el.image} alt={el.name}/></a>
        </li>
        ))}
        </ul>
    </div>
  )
}
