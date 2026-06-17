import { createContext, useState, useEffect } from "react";
export const UsuarioContext = createContext();
export const UsuarioProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(() => {
    const guardado = localStorage.getItem("usuario");
    return guardado
      ? JSON.parse(guardado)
      : {
          nombre: "Lionel Messi",
          dni: "1234567890",
          rol: "Alumno",
          institucion: "Facultad de Ingenieria"
        };
  });

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  const actualizarUsuario = (nuevosDatos) => {
    setUsuario(nuevosDatos);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};