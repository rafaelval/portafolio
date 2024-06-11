
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Navbar.module.css";
import {getMenu} from './menu'
import { labels } from "../../helpers/labels";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = useSelector(state=>state.lang)

  function handleChangePage(page) {
    navigate(page);
  }

  const menu = getMenu(lang)

  return (
    <div className={styles.contPrinc}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <div className={styles.businessCard}>
          <p className={styles.patua}>{labels[lang].title_text}</p>
        </div>
      </div>
      {menu.map((el, i) => (
        <div onClick={() => handleChangePage(el.route)}
          className={`block w-full p-4 transition duration-500 rounded-lg cursor-pointer ${
            location.pathname === el.route
              ? " bg-terciary text-white" // Estilo para la ruta activa
              : "hover:bg-zinc-50 hover:text-black focus:bg-zinc-50 focus: text-primary focus:ring-0 active:bg-zinc-100 active:text-surface dark:hover:bg-neutral-700/60 dark:hover:text-white dark:focus:bg-neutral-700/60 dark:focus:text-white dark:active:bg-surface dark:active:text-white"
          }`}
          key={i}
        >
          <p className="flex items-center">
            <span className="pr-2 " >{el.icon}</span> {el.name}
          </p>
        </div>
      ))}
    </div>
  );
};
