const C = "mdesk-v3.52";
self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== C) await caches.delete(k);
  await clients.claim();
})()));
/* network-first: the app updates the moment a deploy lands; the cache only
   serves when offline. (The old cache-first worker pinned users to stale
   versions forever - the v3.41..v3.51 "fix changed nothing" mystery.) */
self.addEventListener("fetch", e => {
  e.respondWith((async () => {
    try {
      const net = await fetch(e.request);
      const c = await caches.open(C);
      c.put(e.request, net.clone());
      return net;
    } catch {
      const hit = await caches.match(e.request);
      return hit || caches.match(self.registration.scope);
    }
  })());
});
