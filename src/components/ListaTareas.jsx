import { tareasIniciales } from '../data/tareas';
import TareaCard from './TareaCard';

function ListaTareas() {
  return (
    <section>
      {tareasIniciales.map((tarea) => (
        // Usamos {...tarea} para pasar todas las propiedades de un solo golpe
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </section>
  );
}

export default ListaTareas;