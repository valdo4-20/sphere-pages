
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792881391696-ist-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-ES6-6TD8.js|assetsindex-DARKJdZO.css|assetsmaplibre-gl-worker-UMzBwfZH.js";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-Cv18LKJG.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-DHeJtIa1.js","./assets/achievementIcons-C6IQ2z0L.js","./assets/createLucideIcon-C7JlGA-u.js","./assets/disc-3-4kgw3ZxJ.js","./assets/headphones-G_m3KTQs.js","./assets/list-music-C2PEo-K8.js","./assets/music-2-CMFKLgXw.js","./assets/trophy-BKb3b-x4.js","./assets/activity-DiyYWXXk.js","./assets/calendar-days-CYhU4E9Y.js","./assets/rotate-ccw-1M13Unak.js","./assets/formatDuration-DwhBnCeg.js","./assets/lock-keyhole-CSWJCkFD.js","./assets/minimize-2-C854pAiw.js","./assets/user-round-XpjJ0LbZ.js","./assets/maximize-2-DijHwvSx.js","./assets/AuraCanvas-Boo9cOOA.js","./assets/auraArtwork-DtFp18PK.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-DRjUf84T.js","./assets/useObjectUrl-CS7Wi0WE.js","./assets/plus-GcfPL9Xf.js","./assets/refresh-cw-1HhuPKE9.js","./assets/search-CHH_71-h.js","./assets/settings-2-f8Ea5gfl.js","./assets/shuffle-BbayhWHE.js","./assets/pwa-DKDznaQa.js","./assets/FitnessFeature-BPW4NUNN.js","./assets/arrow-right-C6IAyLrn.js","./assets/check-BYqJpPiu.js","./assets/x-y80s19Nt.js","./assets/Modal-CmvWrcz-.js","./assets/platform-DOJ0tXS6.js","./assets/AddMusicDialog-B6np3_2u.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-8r1_tqb-.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-BrGPwOv6.js","./assets/HomePage-Y3MY4qac.js","./assets/TrackList-B43ZQCdj.js","./assets/audio-waveform-BeG5QbDA.js","./assets/circle-alert-5UNEQN9Z.js","./assets/download-BwkBa9xm.js","./assets/share-2-CcYCSEGq.js","./assets/upload-CRjjCXpe.js","./assets/SectionHeading-BvVmUAoY.js","./assets/collection-BlMrkXdJ.js","./assets/useClock-wN1P3cyR.js","./assets/AchievementMedalViewer-DVt_Huvq.css","./assets/ExplorePage-BdotWGqg.css","./assets/FitnessPage-Cbg2KnQI.css","./assets/NewsTimeline-D_zYWADP.css","./assets/ProfileFriends-CHi9u4AB.css","./assets/SettingsPage-CVs4mJ8W.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-GW2SYbkT.css","./assets/index-DARKJdZO.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => {
    const versions = keys.filter((key) => key.startsWith(CACHE_PREFIX)).sort((a, b) => Number(b.slice(CACHE_PREFIX.length).split('-')[0]) - Number(a.slice(CACHE_PREFIX.length).split('-')[0]));
    return Promise.all(versions.slice(3).map((key) => caches.delete(key)));
  }).then(() => self.clients.claim()));
});
self.addEventListener('message', (event) => {
  if (['SPHERE_ACTIVATE_UPDATE', 'AURIVO_ACTIVATE_UPDATE', 'CYGNUS_ACTIVATE_UPDATE'].includes(event.data)) self.skipWaiting();
});
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = new URL('./#/profile', SCOPE_URL).href;
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(async (clients) => {
    const client = clients.find((item) => item.url.startsWith(SCOPE_URL));
    if (client) { await client.navigate(target); return client.focus(); }
    return self.clients.openWindow(target);
  }));
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(SCOPE_URL)) return;
  if (request.mode === 'navigate') {
    event.respondWith(caches.open(CACHE_NAME).then(async (cache) => (await cache.match(request, { ignoreSearch: true })) || (await cache.match(new URL('./', SCOPE_URL))) || cache.match(new URL('./index.html', SCOPE_URL))).then((cached) => cached || fetch(request)));
    return;
  }
  if (!['script', 'style', 'font', 'image'].includes(request.destination)) return;
  event.respondWith((async () => {
    const cacheNames = await caches.keys();
    const versions = [CACHE_NAME, ...cacheNames.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)];
    for (const name of versions) {
      const cached = await (await caches.open(name)).match(request, { ignoreSearch: true });
      if (cached) return cached;
    }
    const response = await fetch(request);
    if (response.ok) void caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
    return response;
  })());
});
