import '../css/Header.css'
import react from '../assets/react.svg'
import { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'

function Header(){
    const { usuario } = useContext(UsuarioContext);
    return(
        <header className="header">
            <img src={react} alt="programacion" className='header_img' />

            <div className="header_texto">
                <h1 className='titulo'>PROGRAMACION VISUAL</h1>
                <p>Bienvenido a la aplicación</p>
            </div>
            <div className="header-usuario">
                <span>{usuario.nombre}</span> - <span>{usuario.rol}</span>
            </div>
        </header>
    )
}

export default Header