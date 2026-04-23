import Header from '../components/Header';
import ListaTareas from '../components/ListaTareas';

function Inicio({ tareas, alCompletar }) {
  const pendientes = tareas ? tareas.filter(t => !t.completada).length : 0;

  return (
    <>
      <Header totalPendientes={pendientes} />
      <main>
        <ListaTareas tareas={tareas} alCompletarTarea={alCompletar} />
      </main>
    </>
  );
}

export default Inicio;