function TaskItem() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <p><strong>Tarea:</strong> Estudiar para el examen de React</p>
      <p><strong>Estado:</strong> Pendiente ⏳</p>
    </div>
  );
}

export default TaskItem;