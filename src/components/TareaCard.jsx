function TareaCard({ id, titulo, materia, completada, fecha, onCompletar }) {
  return (
    <article style={{ border: '1px solid #555', padding: '1rem', margin: '1rem' }}>
      <h3>{titulo}</h3>
      <p>{materia} · {fecha}</p>
      <span>{completada ? '✅ Hecho' : '⏳ Pendiente'}</span>
      
      <button onClick={() => onCompletar(id)}>
        Marcar como completada
      </button>
    </article>
  );
}

export default TareaCard;