import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from './Navbar.module.css'

export const Navbar = () => {
      const navigate = useNavigate()

function handleChangePage(page){
      navigate(page)
}

  return (
    <div className={styles.contPrinc}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="businessCard">
        <p>DESARROLLO FRONT END</p>
      </div>
      <div>
        <span onClick={()=> handleChangePage('/')}>Home</span>
      </div>
      <div>
        <span onClick={()=> handleChangePage('/areas')}>Conocimientos</span>
      </div>
      <div>
        <span onClick={()=> handleChangePage('/proyectos')}>Proyectos</span>
      </div>
      <div>
        <span onClick={()=> handleChangePage('/contacto')}>contacto</span>
      </div>
    </div>
  );
};
