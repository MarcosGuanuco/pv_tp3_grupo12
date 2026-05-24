import { useState } from "react";
import { obtenerProyectos, buscarProyecto, eliminarProyecto} from "../services/proyectoService";
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
