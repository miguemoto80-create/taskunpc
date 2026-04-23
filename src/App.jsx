import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Inicio from './pages/Inicio';
import DetalleTarea from './pages/DetalleTarea';
import NuevaTarea from './pages/NuevaTarea';
import { tareasIniciales } from './data/tareas';

function App() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('taskunpc-tareas');
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem('taskunpc-tareas', JSON.stringify(tareas));
  }, [tareas]);

  const handleCompletar = (id) => {
    const nuevas = tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    );
    setTareas(nuevas);
  };

  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Inicio</Link>
        <Link to="/nueva">Nueva Tarea</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio tareas={tareas} alCompletar={handleCompletar} />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
        <Route path="/nueva" element={<NuevaTarea />} />
      </Routes>
    </div>
  );
}

export default App;