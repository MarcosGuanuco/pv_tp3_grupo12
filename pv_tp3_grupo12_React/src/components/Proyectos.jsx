import '../css/Proyectos.css'

function Proyectos() {
  return (
    <>
    <aside>
        <h2>Filtros</h2>
        <label htmlFor="Categoria">Categoria</label>
        <select name="Categoria" id="Categoria">
            <option value="Todos">Todos los Proyectos</option>
            <option value="En-Curso">Proyectos en Curso</option>
            <option value="Completados">Proyectos Completados</option>
        </select>
        <label for="año">año</label>
            <select name="año" id="año">
                <option value="todos">Todos los años</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <label for="estado">estado</label>
            <select name="estado" id="estado">
                <option value="en-curso">En curso</option>
                <option value="completados">Finalizados</option>
            </select>
    </aside>
    <section>
        <div className="bloque-container">
            <article className='articulo'>
                <h2>Proyecto HTML/CSS</h2>
                <img src="/img/imagen.jpg" alt="imagen del proyecto 1" width="200" />
                <p>En este proyecto se desarrollaron las habilidades en HTML y CSS para crear una interfaz de usuario atractiva y funcional.</p>
                <p> categoria: Finalizado</p>
                <a href="#" >Ver más detalles</a>
            </article>
            <article className='articulo'>
                <h2>Proyecto JavaScript</h2>
                <img src="/img/imagen.jpg" alt="imagen del proyecto 1" width="200" />
                <p>En este proyecto se desarrollaron las habilidades en JavaScript para crear una experiencia de usuario interactiva y dinámica.</p>
                <p> categoria: Finalizado</p>
                <a href="#" >Ver más detalles</a>
            </article>
            <article className='articulo'>
                <h2>Proyecto Python</h2>
                <img src="/img/imagen.jpg" alt="imagen del proyecto 1" width="200" />
                <p>En este proyecto se desarrollaron las habilidades en Python para crear una aplicación de análisis de datos y visualización.</p>
                <p> categoria: en curso</p>
                <a href="#" >Ver más detalles</a>
            </article>
            <article className='articulo'>
                <h2>Proyecto React</h2>
                <img src="/img/imagen.jpg" alt="imagen del proyecto 1" width="200" />
                <p>En este proyecto se desarrollaron las habilidades en React para crear una interfaz de usuario moderna y responsiva.</p>
                <p> categoria: en curso</p>
                <a href="#">Ver más detalles</a>
            </article>
            <article className='articulo'>
                <h2>Proyecto Django</h2>
                <img src="/img/imagen.jpg" alt="imagen del proyecto 1" width="200" />
                <p>En este proyecto se desarrollaron las habilidades en Django para crear una aplicación web completa con funcionalidades avanzadas.</p>
                <p> categoria: finalizado</p>
                <a href="#" >Ver más detalles</a>
            </article>
            <article className='articulo'>
                <h2>Proyecto React N°2</h2>
                <img src="/img/imagen.jpg" alt="imagen del proyecto 1" width="200" />
                <p>En este proyecto refuerzan las habilidades de React profundizando aun mas y para crear interfaz de usuario moderna y responsiva mas pulidas.</p>
                <p> categoria: en curso</p>
                <a href="#">Ver más detalles</a>
            </article>
            <article className='articulo'>
                <h2>Proyecto Angular</h2>
                <img src="/img/imagen.jpg" alt="imagen del proyecto 1" width="200" />
                <p>En este proyecto se desarrollaron las habilidades en Angular para crear una aplicación web completa con funcionalidades avanzadas.</p>
                <p> categoria: en curso</p>
                <a href="#" >Ver más detalles</a>
            </article>
        </div>
    </section>
    </>
  )
}

export default Proyectos