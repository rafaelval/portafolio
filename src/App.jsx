import { Navbar } from "./components/Navbar/Navbar"
import styles from './App.module.css'
import { Route, Routes, useNavigate } from "react-router-dom"
import { Home, Areas, Proyectos, Contact, NotFound } from "./pages"
import { routes } from "./routes/routes"
import { useEffect } from "react"



export const App = () => {

  const navigate = useNavigate()
  useEffect(() => {
   navigate(routes.home)// eslint-disable-next-line
  }, [])
  

  return (
    <div className={styles.princ}>
      <Navbar/>
      <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.areas} element={<Areas/>}/>
      <Route path={routes.proyectos} element={<Proyectos/>}/>
      <Route path={routes.contacto} element={<Contact/>}/>
      <Route path="/*" element={<NotFound/>}/>

    </Routes>
    </div>
  )
}

