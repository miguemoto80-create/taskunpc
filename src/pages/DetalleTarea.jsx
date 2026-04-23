import { useParams, useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';

function DetalleTarea() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { tareas, eliminarTarea } = useTareas();

  
  const tarea = tareas.find(t => t.id === Number(id));

  
  if (!tarea) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>⚠️ Tarea no encontrada</h2>
        <button onClick={() => navigate('/')}>Volver al Inicio</button>
      </div>
    );
  }

  const handleEliminar = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
      eliminarTarea(tarea.id);
      navigate('/'); 
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>
        ← Volver
      </button>

      <div style={{ 
        border: '1px solid #ddd', 
        padding: '25px', 
        borderRadius: '12px',
        backgroundColor: tarea.completada ? '#f8f9fa' : '#fff'
      }}>
        <h1 style={{ marginTop: 0 }}>{tarea.titulo}</h1>
        <hr />
        <p><strong>Materia:</strong> {tarea.materia || 'No especificada'}</p>
        <p><strong>Fecha límite:</strong> {tarea.fecha || 'Sin fecha'}</p>
        <p><strong>Estado:</strong> {tarea.completada ? '✅ Completada' : '⏳ Pendiente'}</p>

        <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
          <button 
            onClick={handleEliminar}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#dc3545', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Eliminar Tarea
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleTarea;