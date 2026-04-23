import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
// 1. Importas el proveedor que creamos
import { TareasProvider } from './context/TareasContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 2. Envuelves el App con el Provider */}
      <TareasProvider>
        <App />
      </TareasProvider>
    </BrowserRouter>
  </React.StrictMode>
);