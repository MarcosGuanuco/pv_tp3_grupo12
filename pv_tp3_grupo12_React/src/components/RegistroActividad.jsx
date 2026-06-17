import { Alert } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function RegistroActividad({ ultimaActualizacion }) {
  const primerRender = useRef(true);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    if (primerRender.current) {
      primerRender.current = false;
      return; // 
    }

    if (ultimaActualizacion) {
      setMostrar(true); // 
    }

  }, [ultimaActualizacion]);

  if (!mostrar) return null;

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