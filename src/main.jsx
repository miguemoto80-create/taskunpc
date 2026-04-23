import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { TareasProvider } from './context/TareasContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* El Provider debe envolver a App para que todo el proyecto tenga datos */}
      <TareasProvider>
        <App />
      </TareasProvider>
    </BrowserRouter>
  </React.StrictMode>
);