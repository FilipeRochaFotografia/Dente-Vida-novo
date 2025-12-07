import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importante: Garante que o Tailwind/Estilos globais sejam carregados

// OTIMIZAÇÃO: Renderização direta usando a API de concorrência do React 18
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);