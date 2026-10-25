
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.0","title":"Sua música ganha memória.","changes":["Bestiário com ALMAS, retrospectivas e cartas baseadas nas suas escutas.","Novo ícone do PWA e interface mais organizada.","Correções de áudio, mix relacionado e identificação de artistas."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792935966100-setsauthErrorText-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsindex-CtLX4Yb7.css|assetslaboratory-annual-3OU5qksC.css";
const SCOPE_URL = self.registration.scope;
const VERSION_META = 'sphere-version-choice';
const VERSION_KEY = new URL('./__sphere_selected_build__', SCOPE_URL).href;
async function selectedBuild() {
  const meta = await caches.open(VERSION_META);
  const selected = await meta.match(VERSION_KEY);
  return selected ? selected.text() : CACHE_NAME;
}
async function selectBuild(name) {
  const meta = await caches.open(VERSION_META);
  await meta.put(VERSION_KEY, new Response(name));
}
const PRECACHE = ["./","./index.html","./assets/index-BtNQlN6R.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-DvXf67X5.js","./assets/createLucideIcon-AaGC2S3A.js","./assets/calendar-days--UbaOlLA.js","./assets/chevron-down-D5d4_yAP.js","./assets/achievementIcons-BUyCCNru.js","./assets/disc-3-C607YS4L.js","./assets/headphones-DGlUvT5a.js","./assets/list-music-Bb6WVd5_.js","./assets/music-2-541eGl_1.js","./assets/trophy-CFe-Jn86.js","./assets/ellipsis-k4Aff9Rn.js","./assets/platform-CR2FVdRA.js","./assets/AuraCanvas-B2zhlYRu.js","./assets/auraArtwork-BQbD5AXR.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-CBYuLqCM.js","./assets/play-bwOilInd.js","./assets/plus-B8pE6n5b.js","./assets/refresh-cw-DpRk6A3K.js","./assets/rotate-ccw-ClngTywY.js","./assets/search-BAYzjFLj.js","./assets/settings-2-ZGs1Qb2d.js","./assets/shuffle-C7PBd6y6.js","./assets/pwa-Cf8XmKeA.js","./assets/x-Blw6vgSd.js","./assets/Modal-v8p-EuIT.js","./assets/formatDuration-DnSzudw8.js","./assets/user-round-gCKQLXpp.js","./assets/users-B4ghpuO6.js","./assets/useClock-ClPWVnPt.js","./assets/AddMusicDialog-KPnqEtmf.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-GsfyYi9u.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-CHXMvs6M.js","./assets/HomePage-B9XDu4Wb.js","./assets/arrow-right-COBWG-qH.js","./assets/TrackList-CkwStq4i.js","./assets/audio-waveform-CCJFbva_.js","./assets/circle-alert-CjeCJjoN.js","./assets/download-DJeOVEMo.js","./assets/share-2-Boin-YOe.js","./assets/upload-BmZvE5AH.js","./assets/collection-BlMrkXdJ.js","./assets/annual-window-D2KXXJY2.js","./assets/SectionHeading-CZuizP8b.js","./assets/AppLayout-CfHmNI37.css","./assets/ExplorePage-BdotWGqg.css","./assets/NewsTimeline-B1lzUkav.css","./assets/ProfileFriends-EDVWhShm.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-CmT4ph1b.css","./assets/ProfileReactions-BHCBtio5.css","./assets/RetrospectiveFilm-Cebz-yl7.css","./assets/SettingsPage-8N1xyHU0.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BF74cSe6.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/index-CtLX4Yb7.css","./assets/laboratory-annual-3OU5qksC.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const meta = await caches.open(VERSION_META);
    if (!(await meta.match(VERSION_KEY))) {
      const previous = (await caches.keys()).filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).sort((a, b) => Number(b.slice(CACHE_PREFIX.length).split('-')[0]) - Number(a.slice(CACHE_PREFIX.length).split('-')[0]));
      await selectBuild(previous[0] || CACHE_NAME);
    }
    await (await caches.open(CACHE_NAME)).addAll(PRECACHE);
  })());
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    const versions = keys.filter((key) => key.startsWith(CACHE_PREFIX)).sort((a, b) => Number(b.slice(CACHE_PREFIX.length).split('-')[0]) - Number(a.slice(CACHE_PREFIX.length).split('-')[0]));
    const selected = await selectedBuild();
    return Promise.all(versions.slice(3).filter(key => key !== selected).map((key) => caches.delete(key)));
  }).then(() => self.clients.claim()));
});
self.addEventListener('message', (event) => {
  if (event.data === 'SPHERE_UPDATE_INFO') event.waitUntil(selectedBuild().then(selected => event.ports[0]?.postMessage({ build: CACHE_NAME, selected, release: RELEASE })));
  if (['SPHERE_ACTIVATE_UPDATE', 'AURIVO_ACTIVATE_UPDATE', 'CYGNUS_ACTIVATE_UPDATE'].includes(event.data)) {
    event.waitUntil(selectBuild(CACHE_NAME).then(async () => {
      await self.skipWaiting();
      event.ports[0]?.postMessage({ activated: true });
    }));
  }
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
    event.respondWith(selectedBuild().then(name => caches.open(name)).then(async (cache) => (await cache.match(request, { ignoreSearch: true })) || (await cache.match(new URL('./', SCOPE_URL))) || cache.match(new URL('./index.html', SCOPE_URL))).then((cached) => cached || fetch(request)));
    return;
  }
  if (!['script', 'style', 'font', 'image'].includes(request.destination)) return;
  event.respondWith((async () => {
    const cacheNames = await caches.keys();
    const selected = await selectedBuild();
    const versions = [...new Set([selected, CACHE_NAME, ...cacheNames.filter((key) => key.startsWith(CACHE_PREFIX))])];
    for (const name of versions) {
      const cached = await (await caches.open(name)).match(request, { ignoreSearch: true });
      if (cached) return cached;
    }
    const response = await fetch(request);
    if (response.ok) void caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
    return response;
  })());
});
