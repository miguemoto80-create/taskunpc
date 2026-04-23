import TareaCard from './TareaCard';
import { useTareas } from '../context/TareasContext';

function ListaTareas() {
  
  const { tareas } = useTareas();

  
  const estiloContenedor = {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  return (
    <div style={estiloContenedor}>
      {tareas.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>
          No hay tareas pendientes. ¡Buen trabajo!
        </p>
      ) : (
        tareas.map((tarea) => (
          <TareaCard 
            key={tarea.id} 
            tarea={tarea} 
          />
        ))
      )}
    </div>
  );
}

export default ListaTareas;