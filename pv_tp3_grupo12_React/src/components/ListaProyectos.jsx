import { useState } from "react";
import Detalles from "./Detalles";
import {
  obtenerProyectos,
  buscarProyecto,
  eliminarProyecto,
  agregarProyecto
} from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import "../css/ListaProyecto.css";

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const [form, setForm] = useState({
    titulo: "",
    categoria: "",
    estado: ""
  });

  const { titulo, categoria, estado } = form;

  const handleBuscar = (e) => {
    const { value } = e.target;
    setBusqueda(value);
    setProyectos(buscarProyecto(value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProyecto = {
      id: Date.now(),
      titulo,
      categoria,
      estado,
      fecha: new Date().toLocaleDateString(),
      autores: ["Autor desconocido"],
      descripcion: [
        "Agregá más detalles"
      ],
      recursos: [],
      integrantes: []
    };

    agregarProyecto(nuevoProyecto);
    setProyectos(obtenerProyectos());

    setForm({
      titulo: "",
      categoria: "",
      estado: ""
    });
  };

  const eliminar = (id) => {
    eliminarProyecto(id);
    setProyectos(obtenerProyectos());
    setProyectoSeleccionado(null); // 
  };
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <main>
      <div className="container">
        <h2>Lista de Proyectos</h2>
        <div>
        <button onClick={() => setMostrarForm(!mostrarForm)}>
          {mostrarForm ? "Cerrar formulario" : "Agregar proyecto"}
          </button>
          </div>
        {mostrarForm && (
          <form className="form-agregar" onSubmit={handleSubmit}>
          <input type="text" name="titulo" value={titulo} onChange={handleChange} placeholder="Título del proyecto" required />
          <input type="text" name="categoria" value={categoria} onChange={handleChange}placeholder="Categoría"required/>
          <input type="text" name="estado" value={estado}  onChange={handleChange} placeholder="Estado" required /> 
          <button type="submit">Guardar</button>
          </form>
  
        )}
        <b></b>
        <input type="text" placeholder="Buscar proyecto..." value={busqueda} onChange={handleBuscar} />

        <div className="cards">
          {proyectos.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
              onEliminar={eliminar}
              onVerDetalle={setProyectoSeleccionado}
            />
          ))}
        </div>

        <Detalles proyecto={proyectoSeleccionado} />
      </div>
    </main>
  );
}

export default ListaProyectos;
