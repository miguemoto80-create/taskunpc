import { createContext, useContext, useState, useEffect } from 'react';
import { tareasIniciales } from '../data/tareas';

// 1. ESTA LÍNEA DEBE IR AQUÍ AFUERA (Es la base de todo)
const TareasContext = createContext();

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('taskunpc-tareas');
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem('taskunpc-tareas', JSON.stringify(tareas));
  }, [tareas]);

  const toggleTarea = (id) => {
    setTareas(prev => prev.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  return (
    <TareasContext.Provider value={{ tareas, toggleTarea }}>
      {children}
    </TareasContext.Provider>
  );
}

// 2. Aquí es donde usas la variable que definimos arriba
export function useTareas() {
  const context = useContext(TareasContext);
  
  if (!context) {
    throw new Error('useTareas debe usarse dentro de un TareasProvider');
  }
  
  return context;
}