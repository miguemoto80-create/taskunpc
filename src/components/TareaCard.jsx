import { useTareas } from '../context/TareasContext';
import { Link } from 'react-router-dom';

function TareaCard({ tarea }) {
  
  const { toggleTarea } = useTareas();

  
  const estiloTarjeta = {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: tarea.completada ? '#f9f9f9' : '#fff',
    opacity: tarea.completada ? 0.6 : 1, 
  };

  const estiloTexto = {
    textDecoration: tarea.completada ? 'line-through' : 'none', 
    color: tarea.completada ? '#888' : '#333'
  };

  return (
    <div style={estiloTarjeta}>
      <div>
        {/* Checkbox para el toggle */}
        <input 
          type="checkbox" 
          checked={tarea.completada} 
          onChange={() => toggleTarea(tarea.id)} 
          style={{ marginRight: '10px' }}
        />
        <span style={estiloTexto}>{tarea.titulo}</span>
      </div>
      
      <Link to={`/tarea/${tarea.id}`} style={{ fontSize: '0.8rem', color: '#007bff' }}>
        Ver detalle
      </Link>
    </div>
  );
}

export default TareaCard;