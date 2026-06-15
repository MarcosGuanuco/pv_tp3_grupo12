import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Container, Paper, Typography, List, ListItem, ListItemText, TextField, Button} from '@mui/material'
import '../css/PerfilUsuario.css'

function PerfilUsuario() {
    const { usuario, actualizarUsuario } = useContext(UsuarioContext);
    const [form, setForm] = useState(usuario || {
      nombre: "",
      dni: "",
      rol: "",
      institucion: ""
    });
     const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      actualizarUsuario(form);
    };
    return (
    <Container className="perfil-container">

      <Typography variant="h4" gutterBottom>
        Perfil del Usuario
      </Typography>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography><strong>Nombre:</strong> {usuario.nombre}</Typography>
        <Typography><strong>DNI:</strong> {usuario.dni}</Typography>
        <Typography><strong>Rol:</strong> {usuario.rol}</Typography>
        <Typography><strong>Institución:</strong> {usuario.institucion}</Typography>
      </Paper>

      <Typography variant="h5" gutterBottom>
        Editar Perfil
      </Typography>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <form onSubmit={handleSubmit}>
          <TextField label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="DNI" name="dni" value={form.dni} onChange={handleChange} fullWidth margin="normal"/>
          <TextField label="Rol" name="rol" value={form.rol} onChange={handleChange} fullWidth margin="normal"/>
          <TextField label="Institución" name="institucion" value={form.institucion} onChange={handleChange} fullWidth margin="normal"/>

          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Guardar cambios
          </Button>
        </form>
      </Paper>

      <Typography variant="h5" gutterBottom className="integrantes-title">
        Integrantes del Grupo
      </Typography>

      <Paper elevation={3} className="perfil-card">
        <List>
          <ListItem>
            <ListItemText primary="Amador Juan Pablo" secondary="AmadorJuan" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Torres Santiago" secondary="Santiago-Torres72" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Guanuco Marcos" secondary="MarcosGuanuco" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  )
}

export default PerfilUsuario
