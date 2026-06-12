import '../css/Dashboard.css'
import { Container, Typography, Grid, Card, CardContent } from '@mui/material'

function Dashboard() {
  return (
    <Container className="dashboard-container">

      <Typography variant="h4" gutterBottom className="dashboard-title">
        Bienvenido al Dashboard
      </Typography>

      <Typography variant="body1" gutterBottom className="dashboard-description">
        Esta página web funciona como el portafolio académico digital del equipo, diseñado específicamente para recopilar y exhibir los proyectos prácticos desarrollados a lo largo de la materia. El objetivo principal del sitio es demostrar el dominio de los conceptos teóricos vistos en clase mediante su aplicación en casos reales. Funciona tanto como un registro de la evolución académica del grupo como una plataforma de entrega formal para que el docente pueda evaluar el progreso y los resultados obtenidos.
      </Typography>

      <Grid container spacing={4} className="metrics-container">
        <Grid item xs={12} md={4}>
          <Card className="metric-card">
            <CardContent>
              <Typography variant="h6">Total de proyectos</Typography>
              <Typography variant="body2">12</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="metric-card">
            <CardContent>
              <Typography variant="h6">Proyectos en curso</Typography>
              <Typography variant="body2">5</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="metric-card">
            <CardContent>
              <Typography variant="h6">Proyectos finalizados</Typography>
              <Typography variant="body2">7</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="metric-card">
            <CardContent>
              <Typography variant="h6">Proximos Proyectos</Typography>
              <Typography variant="body2">2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="metric-card">
            <CardContent>
              <Typography variant="h6">Propuestas de grupo</Typography>
              <Typography variant="body2">3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="metric-card">
            <CardContent>
              <Typography variant="h6">Proyectos Pausados</Typography>
              <Typography variant="body2">2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="metric-card">
            <CardContent>
              <Typography variant="h6">Trabajos de Materia</Typography>
              <Typography variant="body2">7</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="metric-card">
            <CardContent>
              <Typography variant="h6">Proyectos Actualizados</Typography>
              <Typography variant="body2">4</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard
