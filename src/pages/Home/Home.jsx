import styles from './Home.module.css'


export const Home = () => {
  return (
    <div className={styles.contPrinc}>
      <div className={styles.card}>
      <h3>Hola, soy</h3>
      <h1>Rafael Valbuena Restrepo</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis, dolorum sunt illo similique tempora non doloremque maiores libero. Aut accusantium odio veritatis tempore adipisci similique necessitatibus autem velit exercitationem.</p>
      </div>
      
      
      <div className={styles.photo}></div>
    </div>
  )
}
