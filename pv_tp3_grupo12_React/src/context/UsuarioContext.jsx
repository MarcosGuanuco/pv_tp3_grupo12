import { createContext, useState } from "react";
export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: "Lionel Messi",
    dni: "1234567890",
    rol: "Alumno",
    institucion: "Facultad de Ingenieria"
  });

  const actualizarUsuario = (nuevosDatos) => {
    setUsuario(nuevosDatos);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};