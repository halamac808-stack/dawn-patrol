/* Dawn Patrol service worker — v3
   Fixes the v2 trap: the cache name is new, so activate() clears the old one,
   and HTML is network-first so a fresh deploy shows up immediately instead of
   being shadowed by a cached copy. Everything else still works offline. */
const CACHE = 'dawn-patrol-v3';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // cache:'reload' bypasses the HTTP cache so we store the genuinely new files
      .then(c => Promise.all(SHELL.map(u =>
        fetch(new Request(u, { cache: 'reload' }))
          .then(r => r.ok ? c.put(u, r) : null)
          .catch(() => null)
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);

  // live data: never intercept
  if (u.hostname.endsWith('open-meteo.com')) return;
  if (u.hostname.endsWith('tile.openstreetmap.org')) return;

  const isHTML = e.request.mode === 'navigate' ||
                 (e.request.headers.get('accept') || '').includes('text/html');

  // HTML: network first, fall back to cache when offline
  if (isHTML) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok && u.origin === location.origin) {
            const cp = res.clone();
            caches.open(CACHE).then(c => c.put('./index.html', cp));
          }
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // everything else: cache first, then network
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok && u.origin === location.origin) {
        const cp = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, cp));
      }
      return res;
    }).catch(() => r))
  );
});
