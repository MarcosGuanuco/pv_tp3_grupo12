
import '../css/Header.css'
import react from '../assets/react.svg'
function Header(){
    return(
        <header className="header">
            <img src={react} alt="programacion" className='header_img' />

            <div className="header_texto">
                <h1 className='titulo'>PROGRAMACION VISUAL</h1>
                <p>Bienvenido a la aplicación</p>
            </div>
        </header>
    )
}

export default Header

