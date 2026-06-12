import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

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
    <Box
      component="form"
      className="form-agregar"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "0 auto" }}
    >
      <TextField
        label="Título del proyecto"
        name="titulo"
        value={titulo}
        onChange={handleChange}
        required
      />
      <TextField
        label="Categoría"
        name="categoria"
        value={categoria}
        onChange={handleChange}
        required
      />
      <TextField
        label="Estado"
        name="estado"
        value={estado}
        onChange={handleChange}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Guardar
      </Button>
    </Box>
  );
}

export default FormularioProyecto;
