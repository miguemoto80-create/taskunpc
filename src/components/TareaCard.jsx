// src/components/TareaCard.jsx
function TareaCard({ titulo, materia, completada }) {
  return (
    <div className={`tarea-card ${completada ? 'completada' : ''}`}>
      <h3>{titulo}</h3>
      <span className="materia">{materia}</span>
    </div>
  );
}

export default TareaCard;