import { obtenerProyectos } from "../services/proyectoService";
import '../css/Detalles.css'

function Detalles() {

  const proyectos = obtenerProyectos();

  return (
    <div>
      {proyectos.map((proyecto) => (
        
        <div key={proyecto.id} className='contenedordetalles'>

          <section className="secciondetalles">
            <h1>{proyecto.titulo}</h1>
            <h4>Fecha: {proyecto.fecha}</h4>

            <h2>Autores</h2>
            <ul>
              {proyecto.autores.map((autor, i) => (
                <li key={i}>{autor}</li>
              ))}
            </ul>

            <h2>Descripción</h2>
            {proyecto.descripcion.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </section>

        </div>

      ))}
    </div>
  );
}

export default Detalles;