import { tareasIniciales } from '../data/tareas';
import TareaCard from './TareaCard';

function ListaTareas({ alCompletarTarea }) {
  return (
    <section>
      {tareasIniciales.map((tarea) => (
        <TareaCard 
          key={tarea.id} 
          {...tarea} 
          onCompletar={alCompletarTarea} 
        />
      ))}
    </section>
  );
}

export default ListaTareas;