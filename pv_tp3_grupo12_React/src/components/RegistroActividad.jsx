import { Alert } from "@mui/material";

function RegistroActividad({ ultimaActualizacion }) {
  if (!ultimaActualizacion) {
    return <Alert severity="info">Sin cambios aún...</Alert>;
  }

  const fecha = ultimaActualizacion;

  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const anio = fecha.getFullYear();

  const horas = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");

  return (
    <Alert severity="success">
        Última actualización de la lista: {dia}/{mes}/{anio} a las {horas}:{minutos} hs.
      </Alert>
  );
}

export default RegistroActividad;