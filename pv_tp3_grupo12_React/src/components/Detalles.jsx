import '../css/Detalles.css'
function Detalles({ proyecto }) {
  
  if (!proyecto) {
    return <p>Selecciona un proyecto</p>;
  }
  const { titulo, fecha, autores, descripcion, recursos, integrantes } = proyecto;
  
  return (
    <div className='contenedordetalles'>

      <section className="secciondetalles">
        <h1>{titulo}</h1>
        <h4>Fecha: {fecha}</h4>

        <h2>Autores</h2>
        <ul>
           {autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>

        <h2>Descripción</h2>
        {descripcion.map((texto, index) => (
          <p key={index}>{texto}</p>
        ))}
      </section>

      <section className="secciondetalles">
        <h2>Recursos</h2>
        <ul>
          {recursos.map((recurso, index) => (
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
          {integrantes.map((persona, index) => (
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