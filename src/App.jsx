import { NavBar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Contact, NotFound, Skills } from "./pages";
import { routes } from "./routes/routes";
import { Projects } from "./pages/Projects/Projects";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import styles from './App.module.css'
import { useDispatch, useSelector } from "react-redux";
import { handleMenu } from "./redux/actions";
import { useEffect } from "react";

export const App = () => {
  const dispatch =  useDispatch()
  const width = window.innerWidth

  const menu = useSelector((state) =>state.menuOpen)

  useEffect(() => {
    if(width > 430){
      dispatch(handleMenu(true))
    }// eslint-disable-next-line
}, [width]);

  const toggleMenu = ()=>{
      dispatch(handleMenu(!menu))
  }

  return (
    <div className="flex">
      <GiHamburgerMenu className={styles.hamburguerIcon} onClick={()=>toggleMenu()}/>
        {
          menu && 
      <NavBar />
        }
      <LanguageSwitcher />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.areas} element={<Skills />} />
        <Route path={routes.proyectos} element={<Projects />} />
        <Route path={routes.contacto} element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
