import '../css/Nav.css'
import { NavLink } from 'react-router-dom'
function Nav(){
    return(
        <nav id='menu'>
            <ul>
            <NavLink to="/" className="nav-item">Inicio</NavLink>
            <NavLink to="/proyectos" className="nav-item">Proyectos</NavLink>
            <NavLink to="/detalles" className="nav-item">Detalles</NavLink>
            <NavLink to="/perfil" className="nav-item">Perfil</NavLink>
            </ul>
        </nav>
    )
}

export default Nav