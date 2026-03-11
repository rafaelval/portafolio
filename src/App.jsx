import { NavBar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { routes } from "./routes/routes";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import { Loading } from "./components/Loading/Loading";
import styles from './App.module.css'
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

// Lazy load de páginas desde index.js
const Home = lazy(() => import("./pages/Home").then(mod => ({ default: mod.Home })));
const Skills = lazy(() => import("./pages/Skills").then(mod => ({ default: mod.Skills })));
const Projects = lazy(() => import("./pages/Projects").then(mod => ({ default: mod.Projects })));
const Contact = lazy(() => import("./pages/Contact").then(mod => ({ default: mod.Contact })));
const NotFound = lazy(() => import("./pages/NotFound").then(mod => ({ default: mod.NotFound })));

export const App = () => {
  const { menuOpen, toggleMenu } = useContext(AppContext);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 430;
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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.areas} element={<Skills />} />
          <Route path={routes.proyectos} element={<Projects />} />
          <Route path={routes.contacto} element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
