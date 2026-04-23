import { Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import DetalleTarea from './pages/DetalleTarea';
import NuevaTarea from './pages/NuevaTarea';

function App() {
  return (
    <div className="container">
      {/* Barra de navegación */}
      <nav style={{ 
        padding: '1rem', 
        display: 'flex', 
        gap: '15px', 
        borderBottom: '1px solid #ccc',
        marginBottom: '20px' 
      }}>
        <Link to="/">🏠 Inicio</Link>
        <Link to="/nueva">➕ Nueva Tarea</Link>
      </nav>

      {/* Definición de Rutas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        
        {/* Ruta por si el usuario escribe cualquier otra cosa */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}

export default App;