import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Navbar.module.css";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { RiSlideshowLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";

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
        <p>DESARROLLO FRONT END</p>
      </div>
      </div>
      
      <div className={styles.spans}>
        <div>
          <span onClick={() => handleChangePage("/")}>
            <BiHomeAlt />
            Home
          </span>
        </div>
        <div>
          <span onClick={() => handleChangePage("/areas")}>
            <MdOutlineDeveloperMode />
            Conocimientos
          </span>
        </div>
        <div>
          <span onClick={() => handleChangePage("/proyectos")}>
            <RiSlideshowLine />
            Proyectos
          </span>
        </div>
        <div>
          <span onClick={() => handleChangePage("/contacto")}>
            <GrContact />
            contacto
          </span>
        </div>
      </div>
    </div>
  );
};
