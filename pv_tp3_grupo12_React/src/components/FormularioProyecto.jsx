import { useState } from "react";

function FormularioProyecto({ onAgregar }) {
  const [form, setForm] = useState({
    titulo: "",
    categoria: "",
    estado: ""
  });

  const { titulo, categoria, estado } = form;

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
      descripcion: ["Agregá más detalles"],
      recursos: [],
      integrantes: []
    };

    onAgregar(nuevoProyecto);

    setForm({
      titulo: "",
      categoria: "",
      estado: ""
    });
  };

  return (
    <form className="form-agregar" onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        value={titulo}
        onChange={handleChange}
        placeholder="Título del proyecto"
        required
      />
      <input
        type="text"
        name="categoria"
        value={categoria}
        onChange={handleChange}
        placeholder="Categoría"
        required
      />
      <input
        type="text"
        name="estado"
        value={estado}
        onChange={handleChange}
        placeholder="Estado"
        required
      />
      <button className="btn-guardar" type="submit">Guardar</button>
    </form>
  );
}

export default FormularioProyecto;
