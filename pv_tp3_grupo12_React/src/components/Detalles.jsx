import '../css/Detalles.css'
function Detalles({ proyecto }) {
  
  if (!proyecto) {
    return <p>Selecciona un proyecto</p>;
  }
  
  return (
    <div className='contenedordetalles'>

      <section className="secciondetalles">
        <h1>{proyecto.titulo}</h1>
        <h4>Fecha: {proyecto.fecha}</h4>

        <h4>Autores:</h4>
        <ul>
          {proyecto.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>

        <h2>Descripción</h2>
        {proyecto.descripcion.map((texto, index) => (
          <p key={index}>{texto}</p>
        ))}
      </section>

      <section className="secciondetalles">
        <h2>Recursos</h2>
        <ul>
          {proyecto.recursos.map((recurso, index) => (
            <li key={index}>
              <a href={recurso.link} target="_blank">
                {recurso.nombre}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="secciondetalles">
        <h2>Integrantes</h2>
        <ul>
          {proyecto.integrantes.map((persona, index) => (
            <li key={index}>
              {persona.nombre} - Rol: {persona.rol}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
export default Detalles;