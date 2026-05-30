import progImg from "../assets/prog.jpg";
function ProyectoCard({ proyecto, onEliminar, onVerDetalle }) {

  const { id, titulo, imagen, categoria, estado } = proyecto;

  return (
    <div className="card">
      <h3>{titulo}</h3>
      <img src={progImg} alt="Imagen del proyecto" />
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>
      <div>
      <button
        className="btn-detalles"
        onClick={() => onVerDetalle(proyecto)}
      >
        Ver detalles
      </button>
      </div>
      <button
        className="btn-eliminar"
        onClick={() => onEliminar(id)}
      >
        Eliminar Proyecto
      </button>
    </div>
  );
}

export default ProyectoCard;