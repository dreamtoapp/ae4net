// Empty service worker placeholder
// This file prevents 404 errors when browser checks for push notifications

self.addEventListener('install', (event) => {
  // Placeholder - no push notifications configured
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Placeholder - no push notifications configured
  event.waitUntil(self.clients.claim());
});

// No push notification handlers - this is just a placeholder

