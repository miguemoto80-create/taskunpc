import { useNavigate } from 'react-router-dom';

function NuevaTarea() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Crear Nueva Tarea</h2>
      <p>Formulario en construcción...</p>
      <button onClick={() => navigate('/')}>Cancelar</button>
    </div>
  );
}

export default NuevaTarea;