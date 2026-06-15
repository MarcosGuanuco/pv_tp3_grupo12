import { useState, useEffect, useRef } from "react";
import Detalles from "./Detalles";
import { obtenerProyectos, eliminarProyecto, agregarProyecto } from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import "../css/ListaProyecto.css";
import RegistroActividad from "./RegistroActividad";
import FormularioProyecto from "./FormularioProyecto";

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);

  const handleBuscar = (e) => {
    setBusqueda(e.target.value);
  };

  const agregar = (nuevoProyecto) => {
    agregarProyecto(nuevoProyecto);
    setProyectos(obtenerProyectos());
  };

  const eliminar = (id) => {
    eliminarProyecto(id);
    setProyectos(obtenerProyectos());
  };


  const [mostrarForm, setMostrarForm] = useState(false);
  const detallesRef = useRef(null);

  const primeraCarga = useRef(true);
  const proyectosFiltrados = proyectos.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  useEffect(() => {
    if (primeraCarga.current) {
      primeraCarga.current = false;
      return;
    }
    setUltimaActualizacion(new Date());
  }, [proyectos]);

  return (
    <main>
      <div className="container">
        <h2>Lista de Proyectos</h2>
        <div>
          <button className="btn-desplegable" onClick={() => setMostrarForm(!mostrarForm)}>
            {mostrarForm ? "Cerrar" : "Agregar proyecto"}
          </button>
        </div>

        {mostrarForm && (
          <FormularioProyecto onAgregar={agregar} />
        )}

        <input
          type="text"
          placeholder="Buscar proyecto..."
          value={busqueda}
          onChange={handleBuscar}
        />

        <div className="cards">
          {proyectosFiltrados.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              onEliminar={eliminar}
            />
          ))}
        </div>

        {ultimaActualizacion && (
          <RegistroActividad ultimaActualizacion={ultimaActualizacion} />
        )}

        <div ref={detallesRef}></div>

      </div>
    </main>
  );
}

export default ListaProyectos;