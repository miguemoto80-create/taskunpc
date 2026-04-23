import Header from './components/Header';
import ListaTareas from './components/ListaTareas';
import { tareasIniciales } from './data/tareas';

function App() {
  const handleCompletar = (id) => {
    console.log(`Tarea con ID ${id} marcada para completar`);
  };

  const pendientes = tareasIniciales.filter(t => !t.completada).length;

  return (
    <>
      <Header totalPendientes={pendientes} />
      <main>
        <ListaTareas alCompletarTarea={handleCompletar} />
      </main>
    </>
  );
}

export default App;