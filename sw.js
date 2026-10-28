
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.9","title":"Um novo olhar para o seu Sphere.","changes":["Nova identidade: símbolo de olhos de lua nas telas e ícone com volume nos aplicativos.","Novidades chega a 98%, com capítulos próprios para FIND e REWIND.","Modo leve opcional por aparelho, mantendo a AURA animada e a reprodução."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793189523582-Text-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsfriendNotifications-ikRVUxsO.css|assetsindex-DKk-1oGV.css|index.html";
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
const PRECACHE = ["./","./index.html","./assets/index-BGPJ_RVe.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-BQFXFfjD.js","./assets/createLucideIcon-DAUNnymJ.js","./assets/calendar-days-C51P8TYl.js","./assets/chevron-down-DQlW25eL.js","./assets/achievementIcons-DubvWeLB.js","./assets/disc-3-lWf1BMh0.js","./assets/headphones-tI2yJqk8.js","./assets/list-music-Clhy1YI8.js","./assets/music-2-BuZTE6Ow.js","./assets/trophy-mbUM_l8B.js","./assets/ellipsis-B9nztceu.js","./assets/platform-DWTTLdgT.js","./assets/AuraCanvas-C4VYLG9Z.js","./assets/auraArtwork-HUWF9NgT.js","./assets/useDevicePerformance-BjlT61fZ.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-C6-X78RR.js","./assets/play-Bcea_OCP.js","./assets/plus-CV4mceAf.js","./assets/LibrarySyncMotion-DbjdhAkU.js","./assets/rotate-ccw-JKsGvwXE.js","./assets/search-B-Z6uqO4.js","./assets/settings-2-BZuGNFkb.js","./assets/shuffle-GPmOZHib.js","./assets/pwa-DGEfa0gp.js","./assets/x-DY4fZzkQ.js","./assets/Modal-DVWwcWPU.js","./assets/formatDuration-BPh0Am79.js","./assets/trash-ATw6iyzp.js","./assets/user-round-BSShoGlf.js","./assets/users-D0jMeuRH.js","./assets/useClock-C1l4bAgH.js","./assets/rewindAvailability-Bdkz9fns.js","./assets/AddMusicDialog-Ct8djRqR.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-DczHq440.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-BPiitKtv.js","./assets/updatePresentation-C-eOOgMN.js","./assets/HomePage-Cgmm-vL5.js","./assets/arrow-right-BwjvJenp.js","./assets/TrackList-DhsDbVld.js","./assets/audio-waveform--SBVKaia.js","./assets/circle-alert-Cinn_4da.js","./assets/download-BLbz7yth.js","./assets/share-2-CjR972jz.js","./assets/upload-DgYcJemw.js","./assets/SelectField-BUyYWBJb.js","./assets/check-CFC1-Rg3.js","./assets/collection-BlMrkXdJ.js","./assets/annual-window-D2KXXJY2.js","./assets/SectionHeading-DFhKmLq-.js","./assets/AnnualCardGallery-3OU5qksC.css","./assets/AppLayout-DRN0p6MS.css","./assets/ExplorePage-BdotWGqg.css","./assets/LibraryPage-DcPS6Bbs.css","./assets/LibrarySyncMotion-BCzp1pe5.css","./assets/NewsTimeline-BMknzocL.css","./assets/ProfileFriends-CB7-ZjG2.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-DI_zTYup.css","./assets/ProfileReactions-Bc9I2Tnd.css","./assets/ReactionPreview-CcxOo9tV.css","./assets/RetrospectiveFilm-Sudcjdpg.css","./assets/SelectField-C8XFYMfp.css","./assets/SettingsPage-8N1xyHU0.css","./assets/SocialSpace-Bvzz3gN_.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BtUptMqH.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/friendNotifications-ikRVUxsO.css","./assets/index-DKk-1oGV.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./find/index.html","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
