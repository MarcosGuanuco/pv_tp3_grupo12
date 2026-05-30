let proyectos = [
  {
    id: 1,
    titulo: "Proyecto HTML/CSS",
    categoria: "Web",
    estado: "Finalizado",
    fecha: "01/04/2026",
    autores: ["Amador Juan Pablo", "Guanuco Marcos Ezequiel"],
    descripcion: [
      "Se desarrolló una página web utilizando HTML y CSS.",
      "Se aplicaron conceptos de maquetación, estilos y diseño responsive."
    ],
    recursos: [
      { nombre: "PDF", link: "#" }
    ],
    integrantes: [
      { nombre: "Ana", rol: "Frontend" }
    ]
  },
  {
    id:2, 
    titulo:"Proyecto JavaScript", 
    categoria:"Web", 
    estado: "Finalizado",
    fecha: "01/04/2026",
    autores: ["Amador Juan Pablo", "Guanuco Marcos Ezequiel"],
     descripcion: [
    "Este proyecto se centró en el uso de JavaScript para agregar interactividad a una página web. Se desarrollaron funciones para manipular el DOM y responder a eventos del usuario.",
    "También se trabajó con estructuras de control, arrays y objetos. El objetivo fue comprender el comportamiento dinámico de las páginas web."
  ],
    recursos: [
      { nombre: "PDF", link: "#" }
    ],
    integrantes: [
      { nombre: "Ana", rol: "Frontend" }
    ]
  },
    {
      id:3, 
      titulo:"Proyecto Python", 
      categoria:"App", 
      estado:"Finalizado",
      fecha: "01/04/2026",
    autores: ["Amador Juan Pablo", "Guanuco Marcos Ezequiel"],
    descripcion: [
    "Este proyecto consistió en el desarrollo de programas básicos utilizando Python, aplicando estructuras condicionales y funciones.",
    "Además, se trabajó con listas y archivos para resolver problemas. El objetivo fue adquirir una base sólida en programación."
  ],
    recursos: [
      { nombre: "PDF", link: "#" }
    ],
    integrantes: [
      { nombre: "Ana", rol: "Frontend" }
    ]
  },
    {
      id:4, 
      titulo:"Proyecto React",
      categoria:"Web", 
      estado:"en curso",
      fecha: "01/04/2026",
    autores: ["Amador Juan Pablo", "Guanuco Marcos Ezequiel"],
    descripcion: [
    "Este proyecto se desarrolló utilizando React para crear interfaces dinámicas mediante componentes reutilizables.",
    "Se trabajó con props y estado para manejar la información. El objetivo fue comprender el desarrollo moderno basado en componentes."
  ],
    recursos: [
      { nombre: "PDF", link: "#" }
    ],
    integrantes: [
      { nombre: "Ana", rol: "Frontend" }
    ]
  },
    {
      id:5, 
      titulo:"Proyecto Django", 
      categoria:"Web", 
      estado:"en curso",
      fecha: "01/04/2026",
    autores: ["Amador Juan Pablo", "Guanuco Marcos Ezequiel"],
    descripcion: [
    "Este proyecto amplió los conocimientos en React mediante el uso de hooks y manejo avanzado de estado. Se implementaron funcionalidades como useState y useEffect para controlar el ciclo de vida de los componentes. Además, se trabajó con consumo de APIs para mostrar datos dinámicos. Se mejoró la organización del código mediante componentes reutilizables. El objetivo fue profundizar en el desarrollo de aplicaciones modernas y escalables."
  ],
    recursos: [
      { nombre: "PDF", link: "#" }
    ],
    integrantes: [
      { nombre: "Ana", rol: "Frontend" }
    ]
  },
];

export const obtenerProyectos = () => [...proyectos];

export const buscarProyecto = (texto) => {
  return proyectos.filter(p => p.titulo.toLowerCase().includes(texto.toLowerCase()));
};
  
export const eliminarProyecto = (id) => {
  proyectos = proyectos.filter(p => p.id !== id);
};

export const agregarProyecto = (proyecto) => {
  proyectos.push(proyecto);
};