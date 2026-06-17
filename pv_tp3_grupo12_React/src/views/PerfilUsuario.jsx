import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Container, Paper, Typography, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import '../css/PerfilUsuario.css';

function PerfilUsuario() {
  const { usuario, actualizarUsuario } = useContext(UsuarioContext);
  const [form, setForm] = useState(usuario);
  const [editando, setEditando] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarUsuario(form);
    setEditando(false);
  };

  return (
    <Container className="perfil-container">
      <Typography variant="h4" gutterBottom className="perfil-title">
        Perfil del Usuario
      </Typography>

      <Paper elevation={3} className="perfil-card">
        {!editando ? (
          <>
            <List>
              <ListItem>
                <ListItemText primary="Nombre" secondary={usuario.nombre} />
              </ListItem>
              <ListItem>
                <ListItemText primary="DNI" secondary={usuario.dni} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Rol" secondary={usuario.rol} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Institución" secondary={usuario.institucion} />
              </ListItem>
            </List>
            <Button variant="contained" onClick={() => setEditando(true)}>
              Editar Perfil
            </Button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="DNI" name="dni" value={form.dni} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Rol" name="rol" value={form.rol} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Institución" name="institucion" value={form.institucion} onChange={handleChange} fullWidth margin="normal" />
            <Button type="submit" variant="contained" color="primary">
              Guardar Cambios
            </Button>
          </form>
        )}
      </Paper>
    </Container>
  );
}

export default PerfilUsuario;
