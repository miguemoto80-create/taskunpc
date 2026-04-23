import { useParams, useNavigate } from 'react-router-dom';

function DetalleTarea() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Detalle de tarea #{id}</h2>
      <p>Información detallada sobre la tarea seleccionada.</p>
      
      <button onClick={() => navigate('/')}>
        Volver
      </button>
    </div>
  );
}

export default DetalleTarea;