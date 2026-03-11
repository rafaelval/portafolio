import { NavBar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Contact, NotFound, Skills } from "./pages";
import { routes } from "./routes/routes";
import { Projects } from "./pages/Projects/Projects";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import styles from './App.module.css'
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";

export const App = () => {
  const { menuOpen, toggleMenu } = useContext(AppContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 430;
      setIsMobile(isSmallScreen);
      if (!isSmallScreen && !menuOpen) {
        toggleMenu(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen, toggleMenu]);

  return (
    <div className="flex">
      <GiHamburgerMenu className={styles.hamburguerIcon} onClick={() => toggleMenu(!menuOpen)} />
      {menuOpen && <NavBar />}
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
