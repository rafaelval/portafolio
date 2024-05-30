import { NavBar} from "./components/Navbar/Navbar"
import { Route, Routes, useNavigate } from "react-router-dom"
import { Home, Proyectos, Contact, NotFound, Skills } from "./pages"
import { routes } from "./routes/routes"
import { useEffect } from "react"



export const App = () => {

  const navigate = useNavigate()
  useEffect(() => {
   navigate(routes.home)// eslint-disable-next-line
  }, [])
  

  return (
    <div className="flex">
      <NavBar/>
      <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.areas} element={<Skills/>}/>
      <Route path={routes.proyectos} element={<Proyectos/>}/>
      <Route path={routes.contacto} element={<Contact/>}/>
      <Route path="/*" element={<NotFound/>}/>

    </Routes>
    </div>
  )
}

