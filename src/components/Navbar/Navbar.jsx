import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Navbar.module.css";
import { menu } from "./menu";
import { labels } from "../../helpers/navbar.labels";


export const NavBar = () => {

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

      {menu.map((el, i) => (
          <div className="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-zinc-50 hover:text-black focus:bg-zinc-50 focus:text-black focus:ring-0 active:bg-zinc-100 active:text-surface dark:hover:bg-neutral-700/60 dark:hover:text-white dark:focus:bg-neutral-700/60 dark:focus:text-white dark:active:bg-surface dark:active:text-white" key={i}>
            <p onClick={() => handleChangePage(el.route)}>
              {el.icon}
              {el.name}
            </p>
          </div>
        ))}
    </div>
  );
};
