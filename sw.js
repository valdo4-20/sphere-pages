
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792878422248-ist-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-ES6-6TD8.js|assetsindex-C13UKRjS.css|assetsmaplibre-gl-worker-UMzBwfZH.js";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-BJB9Ywut.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-CYPAawXv.js","./assets/achievementIcons-BYMWVcve.js","./assets/createLucideIcon-CdUcuwYH.js","./assets/disc-3-BuwCe9qQ.js","./assets/headphones-CqTHQbpW.js","./assets/list-music-D3bGnjLH.js","./assets/music-2-BxPxgVio.js","./assets/trophy-BeoeLyOc.js","./assets/FitnessFeature-CuM2DWEu.js","./assets/arrow-right-Br2-qqIn.js","./assets/check-abjasZo2.js","./assets/user-round-CMiV58AL.js","./assets/x-CuDyRyx0.js","./assets/Modal-fk7Q3Da5.js","./assets/platform-DOJ0tXS6.js","./assets/calendar-days-Cch4GT4k.js","./assets/rotate-ccw-CwHuXCdg.js","./assets/formatDuration-BFFmEHwr.js","./assets/lock-keyhole-BHZcCvGu.js","./assets/minimize-2-B0Dosrdp.js","./assets/maximize-2-pM88NUFb.js","./assets/AuraCanvas-C_rWtjY9.js","./assets/auraArtwork-DNpjNZHC.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-BOhQaZuj.js","./assets/useObjectUrl-CCEsljmB.js","./assets/plus-C1CBv0WH.js","./assets/refresh-cw-BRDo0GeQ.js","./assets/search-D8eTiRtE.js","./assets/settings-2-BAcMy5sl.js","./assets/shuffle-BVXjAiTU.js","./assets/pwa-Cy4oLSOi.js","./assets/AddMusicDialog-YmOPRD81.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-CHRJe18S.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-BU-maxbt.js","./assets/HomePage-Wvdzw2Dk.js","./assets/TrackList-C3jfhMMS.js","./assets/audio-waveform-DWZ_f3yB.js","./assets/circle-alert-DW2j9zZ9.js","./assets/download-CxGzqDjO.js","./assets/share-2-D8ieB2mL.js","./assets/upload-Dbj2g8Gw.js","./assets/SectionHeading-BzVt24mJ.js","./assets/collection-BlMrkXdJ.js","./assets/useClock-esFOC9xv.js","./assets/AchievementMedalViewer-DVt_Huvq.css","./assets/ExplorePage-BdotWGqg.css","./assets/FitnessPage-Dv9qXOa2.css","./assets/ProfileFriends-CHi9u4AB.css","./assets/SettingsPage-CVs4mJ8W.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-cxCM_SSb.css","./assets/achievementIcons-GW2SYbkT.css","./assets/index-C13UKRjS.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
