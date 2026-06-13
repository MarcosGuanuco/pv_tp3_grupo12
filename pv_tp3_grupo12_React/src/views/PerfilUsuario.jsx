import { Container, Paper, Typography, List, ListItem, ListItemText } from '@mui/material'
import '../css/PerfilUsuario.css'

function PerfilUsuario() {
  return (
    <Container className="perfil-container">
      <Typography variant="h4" gutterBottom className="perfil-title">
        Perfil del Usuario
      </Typography>

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
