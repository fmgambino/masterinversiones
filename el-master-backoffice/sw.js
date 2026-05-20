const CACHE='el-master-vip-v1'; const ASSETS=['./','./index.html','./css/styles.css','./js/app.js','./js/auth.js','./manifest.webmanifest','./assets/icon.svg','./assets/profile.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
