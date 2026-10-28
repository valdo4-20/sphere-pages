
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.14","title":"Atualização crítica: processo de atualização mais seguro.","changes":["Correção crítica no processo de atualização: a nova versão só é ativada após sua confirmação.","Ícone maskable do Android atualizado para usar a identidade atual do Sphere.","Ícones do aplicativo web versionados para solicitar a atualização do ícone instalado no Android.","Convites podem ser enviados novamente depois de desfazer uma amizade.","Limpeza dos registros aceitos antigos, preservando solicitações pendentes.","Símbolo claro no fundo escuro e transição para preto com a AURA.","Ícone da aba web sem fundo; ícone de instalação do PWA com fundo lilás."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793207697763-rText-oq2Jzlz.css|assetsbestiary-K3ttfzEW.css|assetsfriendNotifications-ikRVUxsO.css|assetsindex-BIaQ-gku.css|index.html";
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
const PRECACHE = ["./","./index.html","./assets/index-CbpiAcs0.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-DuW-sNs6.js","./assets/createLucideIcon-C21NPQLx.js","./assets/library-DEeup4y8.js","./assets/chevron-down-Cenl4VwR.js","./assets/achievementIcons-BRawzYk5.js","./assets/disc-3-D25D1yrn.js","./assets/headphones-DRZiABqf.js","./assets/list-music-60aaPq2_.js","./assets/music-2-BN_RT-dM.js","./assets/trophy-DAUWlP7B.js","./assets/ellipsis-CNferXYJ.js","./assets/pwa-UGT6F5Bu.js","./assets/x-l9ms7Uxn.js","./assets/Modal-DVP2O6FT.js","./assets/platform-D2bIRbzn.js","./assets/appUpdates-D_pXPF0Z.js","./assets/AuraCanvas-C1FZ-pG4.js","./assets/useDevicePerformance-Ng1GVVmM.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/auraArtwork-c-jj4X38.js","./assets/pause-BC_-jLQV.js","./assets/play-B8ANandO.js","./assets/plus-D_a5g2C0.js","./assets/LibrarySyncMotion-Ca3kGNMd.js","./assets/rotate-ccw-jgqZ1GIE.js","./assets/search-C_P_d0mL.js","./assets/settings-2-CnPTZ7Ei.js","./assets/shuffle-Bmo3ZV7K.js","./assets/sparkles-CH2SbPFA.js","./assets/trash-Dru975OK.js","./assets/user-round-s_CFCH0v.js","./assets/users-cnmqESau.js","./assets/useClock-D30N2SVa.js","./assets/rewindAvailability-Bdkz9fns.js","./assets/AddMusicDialog-CSXMPW2b.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-C7fzsgiS.js","./assets/formatDuration-DN0gn_Ni.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-7hofta0c.js","./assets/updatePresentation-DjYbYpJp.js","./assets/HomePage-FITT6P50.js","./assets/arrow-right-rGUEaEDA.js","./assets/TrackList-CLE4v-Iu.js","./assets/audio-waveform-CD9BfDWD.js","./assets/circle-alert-DARCxIiq.js","./assets/download-Cq7JNljJ.js","./assets/share-2-2BZN0edU.js","./assets/upload-BuHYK0qD.js","./assets/SelectField-BV62Zmsl.js","./assets/check-4FzN8bct.js","./assets/collection-BlMrkXdJ.js","./assets/annual-window-D2KXXJY2.js","./assets/firebaseClient-BVYkpIDe.js","./assets/recentFriendListening-B6pxJebM.js","./assets/SectionHeading-BoKD5UBO.js","./assets/AnnualCardGallery-DaoG5gFB.css","./assets/AppLayout-BLYfNChk.css","./assets/ExplorePage-JS2KS5YP.css","./assets/FriendRequestNotifications-DXjecUna.css","./assets/LibraryPage-DcPS6Bbs.css","./assets/LibrarySyncMotion-Bc4-XQTb.css","./assets/NewsTimeline-CzvplUeD.css","./assets/ProfileFriends-BDLuq15_.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-BkYWHIhy.css","./assets/ProfileReactions-CDE5qMzA.css","./assets/ReactionPreview-BV09Sbmr.css","./assets/RetrospectiveFilm-DtugPk_E.css","./assets/SelectField-C8XFYMfp.css","./assets/SettingsPage-DfpndAzd.css","./assets/SocialSpace-Bvzz3gN_.css","./assets/TrackList-CKFyNNI_.css","./assets/TvApp-CCWiDxAD.css","./assets/achievementIcons-BtUptMqH.css","./assets/authErrorText-_oq2Jzlz.css","./assets/bestiary-K3ttfzEW.css","./assets/friendNotifications-ikRVUxsO.css","./assets/index-BIaQ-gku.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-moon-symbol.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./find/index.html","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
