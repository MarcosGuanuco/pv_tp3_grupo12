import { useParams } from "react-router-dom";
import { obtenerProyectos } from "../services/proyectoService";

function DetallesProyectos() {
  const { id } = useParams();

  const proyectos = obtenerProyectos();

  const proyecto = proyectos.find(p => p.id === Number(id));

  if (!proyecto) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <div className='contenedordetalles'>

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
  );
}

export default DetallesProyectos;