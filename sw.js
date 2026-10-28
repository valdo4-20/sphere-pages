
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.11","title":"Novos convites, um novo olhar.","changes":["Convites podem ser enviados novamente depois de desfazer uma amizade.","Limpeza dos registros aceitos antigos, preservando solicitações pendentes.","Símbolo claro no fundo escuro e transição para preto com a AURA.","Ícone da aba web sem fundo; ícone de instalação do PWA com fundo lilás."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793196571446-rText-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsfriendNotifications-ikRVUxsO.css|assetsindex-6Yczcqw.css|index.html";
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
const PRECACHE = ["./","./index.html","./assets/index-oejSGtA3.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-eF0ZbuGZ.js","./assets/createLucideIcon-BukYBJ1W.js","./assets/calendar-days-ChdXJv6s.js","./assets/chevron-down-B6Vty3tD.js","./assets/achievementIcons-BsKBzeEX.js","./assets/disc-3-BihWCx4Q.js","./assets/headphones-wP7bT2hf.js","./assets/list-music-eEsOkbAw.js","./assets/music-2-DQOK4rCG.js","./assets/trophy-C-D-RfeR.js","./assets/ellipsis-Diayd1Rm.js","./assets/platform-jErCK_EX.js","./assets/AuraCanvas-CGMmR3-j.js","./assets/auraArtwork-B7Lqm5cY.js","./assets/useDevicePerformance-BXyNnQaj.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-Bx0Lqi1i.js","./assets/play-qB8IoPKi.js","./assets/plus-BepUYRcu.js","./assets/LibrarySyncMotion-Ccw2iC7N.js","./assets/rotate-ccw-D_EHLLXl.js","./assets/search-CCVVKOWz.js","./assets/settings-2-CeB9JK7i.js","./assets/shuffle-DboQQh9H.js","./assets/pwa-DcuPCDJC.js","./assets/x-BD9ZoNHB.js","./assets/Modal-auH70Zmi.js","./assets/trash-DiiDKQF1.js","./assets/user-round-B0hbl5fe.js","./assets/users-DfFwt5dl.js","./assets/useClock-CV5Q5EeS.js","./assets/rewindAvailability-Bdkz9fns.js","./assets/AddMusicDialog-alARhcJM.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-BVc4M7bT.js","./assets/formatDuration-DN0gn_Ni.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-B1Rx-XaC.js","./assets/updatePresentation-iBn-Ijd7.js","./assets/HomePage-1qTzm0bg.js","./assets/arrow-right-DzHbcd_3.js","./assets/TrackList-BdaSqLF4.js","./assets/audio-waveform-BJet94ht.js","./assets/circle-alert-CfSr64vw.js","./assets/download-iDlMC_YN.js","./assets/share-2-E7bYUjXT.js","./assets/upload-COSSWnyu.js","./assets/SelectField-2lgU7yxH.js","./assets/check-DQp3G6fL.js","./assets/collection-BlMrkXdJ.js","./assets/annual-window-D2KXXJY2.js","./assets/SectionHeading-CVWFadNe.js","./assets/AnnualCardGallery-3OU5qksC.css","./assets/AppLayout-hNy8gfX8.css","./assets/ExplorePage-BdotWGqg.css","./assets/FriendRequestNotifications-DXjecUna.css","./assets/LibraryPage-DcPS6Bbs.css","./assets/LibrarySyncMotion-Bc4-XQTb.css","./assets/NewsTimeline-BU01Jxgm.css","./assets/ProfileFriends-BJiHksbo.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-DI_zTYup.css","./assets/ProfileReactions-CzSeeB3h.css","./assets/ReactionPreview-CcxOo9tV.css","./assets/RetrospectiveFilm-Sudcjdpg.css","./assets/SelectField-C8XFYMfp.css","./assets/SettingsPage-8N1xyHU0.css","./assets/SocialSpace-Bvzz3gN_.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BtUptMqH.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/friendNotifications-ikRVUxsO.css","./assets/index-6Yc_zcqw.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-moon-symbol.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./find/index.html","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
