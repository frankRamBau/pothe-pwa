// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
// import './styles/globals.css';

// import { registerSW } from 'virtual:pwa-register';

// registerSW({
//   onNeedRefresh() {
//     console.log('✨ Nueva versión disponible. Actualiza la PWA.');
//   },
//   onOfflineReady() {
//     console.log('✅ App lista para funcionar offline.');
//   },
// });

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename={import.meta.env.PROD ? '/pothe-pwa/' : '/'}>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
// import './styles/globals.css';

// import { registerSW } from 'virtual:pwa-register';

// let updateSW = null;

// const updateSW_func = registerSW({
//   onNeedRefresh() {
//     console.log('✨ Nueva versión disponible. Mostrando notificación al usuario.');

//     window.dispatchEvent(new CustomEvent('pwa-update-available', {
//       detail: { updateSW: updateSW_func }
//     }));
//   },

//   onOfflineReady() {
//     console.log('✅ App lista para funcionar offline.');

//     window.dispatchEvent(new CustomEvent('pwa-offline-ready'));
//   },

//   onRegisterError(error) {
//     console.error('❌ Error registrando Service Worker:', error);
//   },

//   immediate: true,
// });

// updateSW = updateSW_func;

// setInterval(() => {
//   if (updateSW) {
//     updateSW(true);
//   }
// }, 5 * 60 * 1000);

// window.addEventListener('focus', () => {
//   if (updateSW) {
//     updateSW(true);
//   }
// });

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename={import.meta.env.PROD ? '/pothe-pwa/' : '/'}>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HeadProvider } from "react-head"; // ← Importar HeadProvider
import App from "./App.jsx";
import "./styles/globals.css";

import { registerSW } from "virtual:pwa-register";

let updateSW = null;

const updateSW_func = registerSW({
  onNeedRefresh() {
    console.log(
      "✨ Nueva versión disponible. Mostrando notificación al usuario."
    );

    window.dispatchEvent(
      new CustomEvent("pwa-update-available", {
        detail: { updateSW: updateSW_func },
      })
    );
  },

  onOfflineReady() {
    console.log("✅ App lista para funcionar offline.");

    window.dispatchEvent(new CustomEvent("pwa-offline-ready"));
  },

  onRegisterError(error) {
    console.error("❌ Error registrando Service Worker:", error);
  },

  immediate: true,
});

updateSW = updateSW_func;

setInterval(() => {
  if (updateSW) {
    updateSW(true);
  }
}, 5 * 60 * 1000);

window.addEventListener("focus", () => {
  if (updateSW) {
    updateSW(true);
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeadProvider>
      <BrowserRouter basename={import.meta.env.PROD ? "/pothe-pwa/" : "/"}>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </React.StrictMode>
);
