// proyectoService.js
let proyectos = [
    {id:1, titulo:"Proyecto HTML/CSS", categoria:"Web", estado:"Finalizado"},
    {id:2, titulo:"Proyecto JavaScript", categoria:"Web", estado:"Finalizado"},
    {id:3, titulo:"Proyecto Python", categoria:"App", estado:"Finalizado"},
    {id:4, titulo:"Proyecto React", categoria:"Web", estado:"en curso"},
    {id:5, titulo:"Proyecto Django", categoria:"Web", estado:"en curso"}
];

export const obtenerProyectos = () => [...proyectos];

export const buscarProyecto = (texto) => {
  return proyectos.filter(p => p.titulo.toLowerCase().includes(texto.toLowerCase()));
};
  
export const eliminarProyecto = (id) => {
  proyectos = proyectos.filter(p => p.id !== id);
};