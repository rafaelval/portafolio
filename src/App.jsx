import { NavBar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Contact, NotFound, Skills } from "./pages";
import { routes } from "./routes/routes";
import { Projects } from "./pages/Projects/Projects";

export const App = () => {
  return (
    <div className="flex h-screen bg-center bg-cover">
      <NavBar />
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
