import { Navbar } from "./components/Navbar/Navbar"
import styles from './App.module.css'
import { Route, Routes } from "react-router-dom"
import { Home, Areas, Proyectos, Contact, NotFound } from "./pages"



export const App = () => {
  return (
    <div className={styles.princ}>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/areas" element={<Areas/>}/>
      <Route path="/proyectos" element={<Proyectos/>}/>
      <Route path="/contacto" element={<Contact/>}/>
      <Route path="/*" element={<NotFound/>}/>

    </Routes>
    </div>
  )
}

