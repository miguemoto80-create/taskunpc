import { createContext, useContext, useState, useEffect } from 'react';
import { tareasIniciales } from '../data/tareas';


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

  
  const agregarTarea = (nuevaTarea) => {
    const tareaConId = { 
      ...nuevaTarea, 
      id: Date.now(), 
      completada: false 
    };
    setTareas(prevTareas => [...prevTareas, tareaConId]);
  };

  
  const eliminarTarea = (id) => {
    setTareas(prev => prev.filter(t => t.id !== id));
  };

  
  return (
    <TareasContext.Provider value={{ 
      tareas, 
      toggleTarea, 
      agregarTarea, 
      eliminarTarea 
    }}>
      {children}
    </TareasContext.Provider>
  );
}


export function useTareas() {
  const context = useContext(TareasContext);
  if (!context) {
    throw new Error('useTareas debe usarse dentro de un TareasProvider');
  }
  return context;
}