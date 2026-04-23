import { useState } from 'react';
import Header from '../components/Header';
import TareaCard from '../components/TareaCard';
import { useTareas } from '../context/TareasContext';

function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState('todas'); 

  
  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'pendientes') return !tarea.completada;
    if (filtro === 'completadas') return tarea.completada;
    return true; // 'todas'
  });

  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={() => setFiltro('todas')} style={btnStyle(filtro === 'todas')}>Todas</button>
          <button onClick={() => setFiltro('pendientes')} style={btnStyle(filtro === 'pendientes')}>Pendientes</button>
          <button onClick={() => setFiltro('completadas')} style={btnStyle(filtro === 'completadas')}>Completadas</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {tareasFiltradas.map(t => (
            <TareaCard key={t.id} tarea={t} />
          ))}
        </div>
      </main>
    </>
  );
}


const btnStyle = (activo) => ({
  padding: '8px 16px',
  cursor: 'pointer',
  backgroundColor: activo ? '#007bff' : '#f0f0f0',
  color: activo ? 'white' : 'black',
  border: '1px solid #ccc',
  borderRadius: '4px'
});

export default Inicio;