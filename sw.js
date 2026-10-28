
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.11","title":"Novos convites, um novo olhar.","changes":["Convites podem ser enviados novamente depois de desfazer uma amizade.","Limpeza dos registros aceitos antigos, preservando solicitações pendentes.","Símbolo claro no fundo escuro e transição para preto com a AURA.","Ícone da aba web sem fundo; ícone de instalação do PWA com fundo lilás."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793194897980-rText-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsfriendNotifications-ikRVUxsO.css|assetsindex-6Yczcqw.css|index.html";
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
const PRECACHE = ["./","./index.html","./assets/index-ej54UwPB.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-fzxJCvPi.js","./assets/createLucideIcon-CFSQfGn_.js","./assets/calendar-days-BUOis1Rv.js","./assets/chevron-down-CzWGNREr.js","./assets/achievementIcons-CgYp2Qvw.js","./assets/disc-3-Dh61iUys.js","./assets/headphones-CXmNjjh9.js","./assets/list-music-3ArEP8GM.js","./assets/music-2-BpJcf-gI.js","./assets/trophy-DME2e6cf.js","./assets/ellipsis-DRqWECMB.js","./assets/platform-DtExAYr8.js","./assets/AuraCanvas-PcdpBC4N.js","./assets/auraArtwork-D8N3gZrH.js","./assets/useDevicePerformance-AgLRQ4O_.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-DXY_P1p5.js","./assets/play-pcJ6_kj3.js","./assets/plus-BCKKY8iv.js","./assets/LibrarySyncMotion-BMfEIdQt.js","./assets/rotate-ccw-CiLGC2kc.js","./assets/search-DxtjMyTt.js","./assets/settings-2-Cau6kb8X.js","./assets/shuffle-CK1AW7Sa.js","./assets/pwa-Bi6uY5VG.js","./assets/x-BL9X6Er9.js","./assets/Modal-Cc0Wn2P2.js","./assets/trash-CA1VLCre.js","./assets/user-round-Bo_Q9Rh9.js","./assets/users-D18Mi7aZ.js","./assets/useClock-Cxxz30N7.js","./assets/rewindAvailability-Bdkz9fns.js","./assets/AddMusicDialog-CvU9WMkz.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-RcF4t4hz.js","./assets/formatDuration-DN0gn_Ni.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-BRs21sLX.js","./assets/updatePresentation-iBn-Ijd7.js","./assets/HomePage-WU_2bsZ7.js","./assets/arrow-right-BrOsbeTi.js","./assets/TrackList-Db62W1Yv.js","./assets/audio-waveform-4u4_eOKY.js","./assets/circle-alert-DaEKrCNf.js","./assets/download-BWKGqcmW.js","./assets/share-2-Bu9TbO-6.js","./assets/upload-CLAB1ulR.js","./assets/SelectField-CkvKQ9nA.js","./assets/check-BDnPTDeY.js","./assets/collection-BlMrkXdJ.js","./assets/annual-window-D2KXXJY2.js","./assets/SectionHeading-8TpLjSW9.js","./assets/AnnualCardGallery-3OU5qksC.css","./assets/AppLayout-hNy8gfX8.css","./assets/ExplorePage-BdotWGqg.css","./assets/LibraryPage-DcPS6Bbs.css","./assets/LibrarySyncMotion-BCzp1pe5.css","./assets/NewsTimeline-BU01Jxgm.css","./assets/ProfileFriends-CB7-ZjG2.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-DI_zTYup.css","./assets/ProfileReactions-CzSeeB3h.css","./assets/ReactionPreview-CcxOo9tV.css","./assets/RetrospectiveFilm-Sudcjdpg.css","./assets/SelectField-C8XFYMfp.css","./assets/SettingsPage-8N1xyHU0.css","./assets/SocialSpace-Bvzz3gN_.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BtUptMqH.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/friendNotifications-ikRVUxsO.css","./assets/index-6Yc_zcqw.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-moon-symbol.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./find/index.html","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
