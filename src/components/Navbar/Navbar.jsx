import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Navbar.module.css";
import { menu } from "./menu";
import { labels } from "./navbar.labels";

export const Navbar = () => {
  const navigate = useNavigate();

  function handleChangePage(page) {
    navigate(page);
  }

  return (
    <div className={styles.contPrinc}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <div className={styles.businessCard}>
          <p>{labels.title_text}</p>
        </div>
      </div>

      <div className={styles.spans}>
        {menu.map((el, i) => (
          <div className={styles.itemmenu} key={i}>
            <p onClick={() => handleChangePage(el.route)}>
              {el.icon}
              {el.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
