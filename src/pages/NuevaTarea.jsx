import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';

function NuevaTarea() {
  const [form, setForm] = useState({ titulo: '', materia: '', fecha: '' });
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titulo.trim()) return alert("El título es obligatorio");
    
    agregarTarea(form); 
    navigate('/');     
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          name="titulo"
          placeholder="Título de la tarea"
          value={form.titulo}
          onChange={handleChange}
          required
          style={{ padding: '8px' }}
        />
        <input
          name="materia"
          placeholder="Materia (ej. Programación)"
          value={form.materia}
          onChange={handleChange}
          style={{ padding: '8px' }}
        />
        <input
          name="fecha"
          type="date"
          value={form.fecha}
          onChange={handleChange}
          style={{ padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
          Guardar Tarea
        </button>
        <button type="button" onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default NuevaTarea;