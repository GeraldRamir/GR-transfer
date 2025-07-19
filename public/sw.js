self.addEventListener('push', function(event) {
  let data = {};

  if (event.data) {
    data = event.data.json();
  }

  const options = {
    body: data.body || 'Notificación Push',
    icon: '/icon-192x192.png',  // Puedes agregar un icono
    badge: '/badge-72x72.png',  // Opcional
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Título', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      if (clientList.length > 0) {
        return clientList[0].focus();
      }
      return clients.openWindow('/');
    })
  );
});
