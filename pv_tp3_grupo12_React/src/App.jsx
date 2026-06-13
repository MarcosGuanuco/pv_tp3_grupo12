import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Nav from './components/Nav'
import ListaProyectos from './components/ListaProyectos'
import Footer from './components/Footer'
import Home from './components/home'
import Proyectos from './components/Proyectos'
import Detalles from './components/Detalles'
import DetallesProyectos from './components/DetallesProyectos'
import Perfil from './components/Perfil'
import Dashboard from './views/Dashboard'
import PerfilUsuario from './views/PerfilUsuario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Nav/>
    <main>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetallesProyectos />} />
          <Route path="/detalles" element={<Detalles />} />
          <Route path="/PerfilUsuario" element={<PerfilUsuario />} />
        </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
