const CACHE='apm-crm-v1';const ASSETS=['./','./index.html','./backoffice.html','./assets/css/styles.css','./assets/js/app.js','./assets/js/backoffice.js','./manifest.webmanifest','./assets/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
