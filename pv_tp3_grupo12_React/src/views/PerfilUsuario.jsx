import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Container, Paper, Typography, List, ListItem, ListItemText, TextField, Button, Avatar, Snackbar } from '@mui/material';
import '../css/PerfilUsuario.css';

function PerfilUsuario() {
  const { usuario, actualizarUsuario } = useContext(UsuarioContext);
  const [form, setForm] = useState(usuario);
  const [editando, setEditando] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.dni) return alert("Completa todos los campos");
    actualizarUsuario(form);
    setEditando(false);
    setMensaje(true);
  };

  return (
    <Container className="perfil-container">
      <Typography variant="h4" gutterBottom className="perfil-title">
        Perfil del Usuario
      </Typography>

      <Paper elevation={3} className="perfil-card" style={{ padding: "20px", textAlign: "center" }}>
        <Avatar sx={{ bgcolor: "#007bff", width: 80, height: 80, margin: "auto" }}>
          {usuario.nombre.charAt(0)}
        </Avatar>

        {!editando ? (
          <>
            <List>
              <ListItem><ListItemText primary="Nombre" secondary={usuario.nombre} /></ListItem>
              <ListItem><ListItemText primary="DNI" secondary={usuario.dni} /></ListItem>
              <ListItem><ListItemText primary="Rol" secondary={usuario.rol} /></ListItem>
              <ListItem><ListItemText primary="Institución" secondary={usuario.institucion} /></ListItem>
            </List>
            <Button variant="outlined" onClick={() => setEditando(true)}>Editar Perfil</Button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="DNI" name="dni" value={form.dni} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Rol" name="rol" value={form.rol} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Institución" name="institucion" value={form.institucion} onChange={handleChange} fullWidth margin="normal" />
            <Button type="submit" variant="contained" color="primary">Guardar Cambios</Button>
            <Button variant="text" onClick={() => setEditando(false)}>Cancelar</Button>
          </form>
        )}
      </Paper>

      <Snackbar
        open={mensaje}
        autoHideDuration={3000}
        onClose={() => setMensaje(false)}
        message="Perfil actualizado correctamente"
      />
    </Container>
  );
}

export default PerfilUsuario;
