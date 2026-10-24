
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792879052985-ist-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-ES6-6TD8.js|assetsindex-C13UKRjS.css|assetsmaplibre-gl-worker-UMzBwfZH.js";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-D-ND3g4w.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-VX4KEyMO.js","./assets/achievementIcons-DkaChfze.js","./assets/createLucideIcon-DPXD9I5A.js","./assets/disc-3-JkiHwqed.js","./assets/headphones-DZMwOrDK.js","./assets/list-music-DxwfVaO7.js","./assets/music-2-B4YjkZQV.js","./assets/trophy-CmGPf261.js","./assets/FitnessFeature-BSvpKkNz.js","./assets/arrow-right-BYLn2BgN.js","./assets/check-DIe3nGeV.js","./assets/user-round-Dlwd-D4l.js","./assets/x-B5Fm6jqv.js","./assets/Modal-RwbTixtX.js","./assets/platform-DOJ0tXS6.js","./assets/calendar-days-IrK0e9ey.js","./assets/rotate-ccw-DYi89V-M.js","./assets/formatDuration-CqWvNn0r.js","./assets/lock-keyhole-CPx-OwUE.js","./assets/minimize-2-DQjs3kL1.js","./assets/maximize-2-DxtEQTO7.js","./assets/AuraCanvas-D_dmvmWZ.js","./assets/auraArtwork-DDxw-Hty.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-CH2JYVsI.js","./assets/useObjectUrl-CUzCqJ_s.js","./assets/plus-DJIFeMUg.js","./assets/refresh-cw-novSeB-5.js","./assets/search-Firl0KrD.js","./assets/settings-2-DGWq0GiY.js","./assets/shuffle-DI4L1ice.js","./assets/pwa-JUWjLuM2.js","./assets/AddMusicDialog-B5SXnwx8.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-DE43hIYL.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-Cf-3byoE.js","./assets/HomePage-B1_P-tCF.js","./assets/TrackList-DqsnHYlG.js","./assets/audio-waveform-CCo9Re69.js","./assets/circle-alert-CKz39_d9.js","./assets/download-Bxb_YiI2.js","./assets/share-2-CGTgG_QF.js","./assets/upload-BgZiwW5v.js","./assets/SectionHeading-BacbMl56.js","./assets/collection-BlMrkXdJ.js","./assets/useClock-CUqn6kUy.js","./assets/AchievementMedalViewer-DVt_Huvq.css","./assets/ExplorePage-BdotWGqg.css","./assets/FitnessPage-BmS9J4Zc.css","./assets/ProfileFriends-CHi9u4AB.css","./assets/SettingsPage-CVs4mJ8W.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-cxCM_SSb.css","./assets/achievementIcons-GW2SYbkT.css","./assets/index-C13UKRjS.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
