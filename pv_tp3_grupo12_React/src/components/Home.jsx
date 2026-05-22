import '../css/Home.css'

function Home() {
  return (
    <section className="contenedor1">
      <div className="cuerpo-container">

        <div className="bloque-container">
          <div className="bloque">
            <h3>Estadísticas</h3>
            <p>Estado del Proyecto</p>
            <p>Migracion de Trabajo Practico N°1 HTMLy CSS</p>
            <p>Creacion del Proyecto React</p>
          </div>
          <div className="bloque">
            <h3>Estadísticas</h3>
            <p>Estado del Proyecto</p>
            <p>Creacion de elementos Repatidos</p>
            <p>Crear los componenetes Header, Nav y Footer.jsx</p>
          </div>
          <div className="bloque">
            <h3>Estadísticas</h3>
            <p>Estado del Proyecto</p>
            <p>Creacion del componente funcionale reutilizables</p>
            <p>Creacion del componenete ListaProyectos.jsx</p>
          </div>
          <div className="bloque">
            <h3>Estadísticas</h3>
            <p>Estado del Proyecto</p>
            <p>Codificacion del contenido a los componentes Header, Nav y Footer.jsx</p>
            <p>Implementacion de los contenidos a los archivos .jxs</p>
          </div>
          <div className="bloque">
            <h3>Estadísticas</h3>
            <p>Estado del Proyecto</p>
            <p>Creacion del componente Principal</p>
            <p>Creacion del archivo Home.jsx</p>
          </div>
          <div className="bloque">
            <h3>Estadísticas</h3>
            <p>Estado del Proyecto</p>
            <p>Codificacion del contenido de Home.jsx</p>
            <p>Implementacion de contenido al archivo Home.jxs</p>
          </div>
          <div className="bloque">
            <h3>Estadísticas</h3>
            <p>Estado del Proyecto</p>
            <p>Tareas Pendiente</p>
            <p>Mensajes pendientes</p>
          </div>
          <div className="bloque">
            <h3>Estadísticas</h3>
            <p>Estado del Proyecto</p>
            <p>Tareas Pendiente</p>
            <p>Mensajes pendientes</p>
          </div>
        </div>

        <hr />

        {/* Sección de novedades */}
        <div className="nove">
          <label htmlFor="novedades">Sección de Novedades:</label>
          <select id="novedades" name="novedades" className="custom-select">
            <option value="co">1_Creacion</option>
            <option value="ve">2_Codificacion</option>
            <option value="ver">3_Corrección</option>
            <option value="co">4_Pendient</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default Home
