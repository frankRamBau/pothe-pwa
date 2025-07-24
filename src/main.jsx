import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/globals.css';

import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() {
    console.log('✨ Nueva versión disponible. Actualiza la PWA.');
  },
  onOfflineReady() {
    console.log('✅ App lista para funcionar offline.');
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.PROD ? '/pothe-pwa/' : '/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);