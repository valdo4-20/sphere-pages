
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792881053485-ist-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-ES6-6TD8.js|assetsindex-DsUghbHJ.css|assetsmaplibre-gl-worker-UMzBwfZH.js";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-dCgAeSsZ.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-DnGd7kjk.js","./assets/achievementIcons-CxEsg65N.js","./assets/createLucideIcon-DSiMG2yZ.js","./assets/disc-3-D4OYIN45.js","./assets/headphones-CM75GN-d.js","./assets/list-music-Bnok9XFf.js","./assets/music-2-D_-gyYa6.js","./assets/trophy-Bwhbd9TT.js","./assets/FitnessFeature-Blz68_O4.js","./assets/arrow-right-BL_ruO25.js","./assets/check-DU1VtUuG.js","./assets/user-round-Cw-Ice6j.js","./assets/x-Dd1c7TYA.js","./assets/Modal-ToyHBzFC.js","./assets/platform-DOJ0tXS6.js","./assets/calendar-days-CrFG6wc1.js","./assets/rotate-ccw-BIPp9ifM.js","./assets/formatDuration-ClJwVKW-.js","./assets/lock-keyhole-Bnmwqoee.js","./assets/minimize-2-Cq_etSCp.js","./assets/maximize-2-SfF6r44C.js","./assets/AuraCanvas-DSIOzyGg.js","./assets/auraArtwork-DjN5sKHC.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-2thGRRRx.js","./assets/useObjectUrl-Bh2AaRaF.js","./assets/plus-DwsET6S2.js","./assets/refresh-cw-DRuXj0fD.js","./assets/search-Dv9nffkR.js","./assets/settings-2-yYv0NqxY.js","./assets/shuffle-DGZv0662.js","./assets/pwa-q7ElHxyk.js","./assets/AddMusicDialog-Cl5W6n1k.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-D1MBP9iw.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-sRLjOPTF.js","./assets/HomePage-DbTVTnDJ.js","./assets/TrackList-B6iDp6U6.js","./assets/audio-waveform-CHbNKaMB.js","./assets/circle-alert-BjAbFVnj.js","./assets/download-BEw510VQ.js","./assets/share-2-DBO1HY5e.js","./assets/upload-BF0frfeI.js","./assets/SectionHeading-Dsiv8qN1.js","./assets/collection-BlMrkXdJ.js","./assets/useClock-BzjhwCGI.js","./assets/AchievementMedalViewer-DVt_Huvq.css","./assets/ExplorePage-BdotWGqg.css","./assets/FitnessPage-Cbg2KnQI.css","./assets/ProfileFriends-CHi9u4AB.css","./assets/SettingsPage-CVs4mJ8W.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-GW2SYbkT.css","./assets/index-DsUghbHJ.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
