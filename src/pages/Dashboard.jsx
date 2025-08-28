// import { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { saveAs } from 'file-saver';
// import * as XLSX from 'xlsx';
// import { Link } from 'react-router-dom';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import OneSignal from 'react-onesignal';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
// const socket = io(BACKEND_URL);
// const VAPID_PUBLIC_KEY = 'BDVdUnU_s9JGfHw-pt8gZPRwDiZg90QXGJqZ1m6mJNr7CnjU6nFCR4-ZgFKEPQGMMwn92kFtSqyZSdEOqjr8rQA'; // Pon aquí tu clave pública de VAPID

// function arrayBufferToBase64(buffer) {
//   const bytes = new Uint8Array(buffer);
//   let binary = '';
//   for (let i = 0; i < bytes.byteLength; i++) {
//     binary += String.fromCharCode(bytes[i]);
//   }
//   return window.btoa(binary);
// }
// function urlBase64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/-/g, '+')
//     .replace(/_/g, '/');

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for(let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }


// function registrarServiceWorkerYSuscribir() {
//   if ('serviceWorker' in navigator && 'PushManager' in window) {
//     navigator.serviceWorker.register('/sw.js')
//       .then(registration => {
//         console.log('Service Worker registrado', registration);

//         return registration.pushManager.getSubscription()
//           .then(subscription => {
//             if (subscription) {
//               return subscription;
//             }
//             // Solicitar permiso y suscribir
//             return registration.pushManager.subscribe({
//               userVisibleOnly: true,
//               applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
//             });
//           });
//       })
//       .then(subscription => {
//         console.log('Suscripción obtenida:', subscription);

//         // Serializar correctamente la suscripción con las keys en base64
//         const subscriptionJson = {
//           endpoint: subscription.endpoint,
//           expirationTime: subscription.expirationTime,
//           keys: {
//             p256dh: arrayBufferToBase64(subscription.getKey('p256dh')),
//             auth: arrayBufferToBase64(subscription.getKey('auth')),
//           }
//         };

//         // Enviar la suscripción serializada al backend
//         fetch(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe`, {
//           method: 'POST',
//           body: JSON.stringify(subscriptionJson),
//           headers: { 'Content-Type': 'application/json' }
//         })
//         .then(res => {
//           if (res.ok) {
//             console.log('Suscripción enviada correctamente al backend');
//           } else {
//             console.error('Error al enviar suscripción al backend');
//           }
//         })
//         .catch(err => {
//           console.error('Error en fetch suscripción:', err);
//         });
//       })
//       .catch(error => {
//         console.error('Error al registrar SW o suscribirse:', error);
//       });
//   } else {
//     console.warn('Push messaging no está soportado en este navegador');
//   }
// }

import React from 'react';
import { Spinner } from 'react-bootstrap'; // Asegúrate de tener react-bootstrap instalado
import { WifiOff } from 'lucide-react'; // Importa el icono de desconexión

export default function Dashboard() {
 



return (
    <div style={styles.container}>
      <div style={styles.message}>
        <WifiOff size={40} color="#dc3545" style={styles.icon} />
        <h2>Oops! The site is experiencing issues.</h2>
        <p>Please check the IP address or contact the site owner.</p>
      </div>
      <Spinner animation="border" variant="primary" style={styles.spinner} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    padding: '20px',
  },
  message: {
    marginBottom: '20px',
  },
  spinner: {
    width: '3rem',
    height: '3rem',
  },
  icon: {
    marginBottom: '10px',
  },
};

