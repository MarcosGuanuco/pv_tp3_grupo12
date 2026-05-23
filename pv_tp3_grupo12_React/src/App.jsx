import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import ListaProyectos from './components/ListaProyectos'
import Footer from './components/Footer'
import Home from './components/home'
import Proyectos from './components/Proyectos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Nav/>
    <main>
      <ListaProyectos/>
    </main>
    <Footer/>
    </>
  )
}

export default App
