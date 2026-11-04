
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.15","title":"Atualização de rotina","changes":[]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793817259840--Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-CrRegpe-.js|assetsindex-oQJI0TB.css|assetsrefresh-cw-Bc4-XQTb.css|index.html";
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
const PRECACHE = ["./","./index.html","./assets/index-xJ_wrvM2.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-DJ0exKNz.js","./assets/refresh-cw-BR08_EjG.js","./assets/createLucideIcon-BQ5cl5Yz.js","./assets/chevron-down-pux2zzme.js","./assets/formatDuration-C5yj5Wne.js","./assets/eye-C-GLzcAs.js","./assets/streaks-DzrBG-pN.js","./assets/headphones-CDAzuaSU.js","./assets/heart-DGmn20n1.js","./assets/rotate-ccw-BeQFAbNL.js","./assets/pwa-bp4oTCKi.js","./assets/Modal-C_QHs58p.js","./assets/AuraCanvas-BphIP5Vp.js","./assets/auraProfiles-FxO7YKyj.js","./assets/useDevicePerformance-CbBYW4sy.js","./assets/Artwork-DMBZ2Fhh.js","./assets/disc-3-BcePnMHF.js","./assets/plus-CWn0gS45.js","./assets/shuffle-YRKy7NR2.js","./assets/sparkles-9bjHUE8U.js","./assets/user-round-9b_qB5cx.js","./assets/AddMusicDialog--ie6Zvcf.js","./assets/searchActivity-CfCcaQCH.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-BNt9PekC.js","./assets/appUpdates-CTfcnSS-.js","./assets/HomePage-C1_f1gC7.js","./assets/clock-3-D7OKFM-m.js","./assets/TrackList-D9akDDAT.js","./assets/SelectField-DA-o_DM1.js","./assets/check-D_jqmrKS.js","./assets/download-fEAX_Vco.js","./assets/upload-Dcar7EeI.js","./assets/collection-BlMrkXdJ.js","./assets/music-2-D5x4kbSh.js","./assets/SectionHeading-Bav2i-IS.js","./assets/AppLayout-BLYfNChk.css","./assets/ExplorePage-JS2KS5YP.css","./assets/LibraryPage-DcPS6Bbs.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/SelectField-C8XFYMfp.css","./assets/SettingsPage-DlNsMkUu.css","./assets/TrackList-CKFyNNI_.css","./assets/TvApp-C9B8ll7T.css","./assets/index-oQJI0_TB.css","./assets/refresh-cw-Bc4-XQTb.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-moon-symbol.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./find/index.html","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
  // FIND is a real embedded document, never the SPA navigation fallback.
  if (request.mode === 'navigate' && (url.pathname.endsWith('/find/index.html') || url.pathname.endsWith('/find/'))) {
    event.respondWith((async () => {
      const cache = await caches.open(await selectedBuild());
      const cached = await cache.match(new URL('./find/index.html', SCOPE_URL));
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) await cache.put(new URL('./find/index.html', SCOPE_URL), response.clone());
      return response;
    })());
    return;
  }
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
