import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import progImg from "../assets/prog.jpg";
import { useNavigate } from "react-router-dom";

function ProyectoCard({ proyecto, onEliminar }) {
  const { id, titulo, categoria, estado } = proyecto;
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardMedia
        component="img"
        height="140"
        image={progImg}
        alt="Imagen del proyecto"
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>ID:</strong> {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Categoría:</strong> {categoria}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Estado:</strong> {estado}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
        size="small"
        variant="contained"
        onClick={() => navigate(`/proyectos/${proyecto.id}`)}>
          Ver detalles
          </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => onEliminar(id)}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProyectoCard;
