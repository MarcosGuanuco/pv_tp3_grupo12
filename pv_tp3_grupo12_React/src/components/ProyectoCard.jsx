function ProyectoCard({ proyecto, onEliminar, onVerDetalle }) {

  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>

      <button
        className="btn-detalles"
        onClick={() => onVerDetalle(proyecto)}
      >
        Ver detalles
      </button>

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