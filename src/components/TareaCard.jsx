import { Link } from 'react-router-dom';

function TareaCard({ id, titulo, materia, completada, fecha }) {
  return (
    <article style={{ border: '1px solid #555', padding: '1rem', margin: '1rem' }}>
      <h3>{titulo}</h3>
      <p>{materia} — {fecha}</p>
      <p>Estado: {completada ? '✅ Terminada' : '⏳ Pendiente'}</p>
      
      <Link to={`/tarea/${id}`} style={{ marginRight: '10px' }}>
        Ver detalles
      </Link>
    </article>
  );
}

export default TareaCard;