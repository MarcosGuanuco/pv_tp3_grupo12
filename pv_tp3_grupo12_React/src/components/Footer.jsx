import unju from '../assets/unjuvirtual.png'
import '../css/Footer.css'
function Footer(){
    return(
        <footer className="footer">

            <div className="footer-grid">
                <img src={unju} alt="programacion" className='footer_img' />
                <h3>Trabajo Practico de Programación Visual</h3>
                <div>
                    <h3>Integrantes</h3>
                    <ul>
                        <li>Amador Juan Pablo - AmadorJuan</li>
                        <li>Guanuco Marcos - MarcosGuanuco</li>
                        <li>Torres Santiago - Santiago-Torres72</li>
                    </ul>
                </div>

            </div>

            <div className="footer-container">
                <p>&copy; 2026 - Proyecto ProgramacionVisual</p>
            </div>

        </footer>
    )
}
export default Footer;