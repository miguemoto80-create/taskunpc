import Header from './components/Header';
import ListaTareas from './components/ListaTareas';
import { tareasIniciales } from './data/tareas';

function App() {
  // Lógica: Filtramos las que NO están completadas y contamos cuántas son
  const pendientes = tareasIniciales.filter(t => !t.completada).length;

  return (
    <>
      <Header totalPendientes={pendientes} />
      <main style={{ padding: '20px' }}>
        <ListaTareas />
      </main>
    </>
  );
}

export default App;