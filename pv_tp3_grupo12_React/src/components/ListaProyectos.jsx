import { useState } from "react";
import { obtenerProyectos, buscarProyecto, eliminarProyecto, agregarProyecto} from "../services/proyectoService";
import '../css/ListaProyecto.css'

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");

  const handleBuscar = (e) =>{
    const texto = e.target.value;
    setBusqueda(texto);
    setProyectos(buscarProyecto(texto));

  };

  return (
    <main>
  <div className="container">
    <h2>Lista de Proyectos</h2>
    <form className="form-agregar" onSubmit={(e) => {
  e.preventDefault();
  const nuevoProyecto = {
    id: proyectos.length + 1,
    titulo: e.target.titulo.value,
    categoria: e.target.categoria.value,
    estado: e.target.estado.value
  };
  agregarProyecto(nuevoProyecto);
  setProyectos(obtenerProyectos());
  e.target.reset();
}}>
  <input type="text" name="titulo" placeholder="Título del proyecto" required />
  <input type="text" name="categoria" placeholder="Categoría" required />
  <input type="text" name="estado" placeholder="Estado" required />
  <button type="submit">Agregar Proyecto</button>
</form>

    <input type="text" placeholder="Buscar proyecto..." value={busqueda} onChange={handleBuscar}/>
    <div className="cards">
      {proyectos.map(p => (
        <div className="card" key={p.id}>
          <h3>{p.titulo}</h3>
          <p><strong>ID:</strong> {p.id}</p>
          <p><strong>Categoría:</strong> {p.categoria}</p>
          <p><strong>Estado:</strong> {p.estado}</p>
          
          <button onClick={() => {
            eliminarProyecto(p.id);
            setProyectos(obtenerProyectos());
            }}>
              Eliminar Proyecto
              </button>
              </div>
            ))}
            </div>
            </div>
            
            </main>
            );
          }

export default ListaProyectos;
