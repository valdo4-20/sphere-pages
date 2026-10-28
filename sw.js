
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.4","title":"Mais perto, no seu ritmo.","changes":["Amigos com perfis renovados, reações animadas e um Espaço para compartilhar cards e GIFs.","Escutas recentes opcionais, visíveis apenas para seus amigos.","Importação mais leve, busca na biblioteca e análise opcional ao navegar.","Botões, fotos e avisos com alinhamento e proporções corrigidos."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793179972418-stiary-K3ttfzEW.css|assetsfriendNotifications-ikRVUxsO.css|assetsindex-MVmSLagz.css|assetslaboratory-annual-3OU5qksC.css";
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
const PRECACHE = ["./","./index.html","./assets/index-B8EApVoT.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-BzIISLWY.js","./assets/createLucideIcon-CR9-Sq6r.js","./assets/calendar-days-B7Ir03Nx.js","./assets/chevron-down-_Jqm4ug2.js","./assets/achievementIcons-DMXBaMfZ.js","./assets/disc-3-DGhI33V1.js","./assets/headphones-Cu1suc4K.js","./assets/list-music-DIl6sq1x.js","./assets/music-2-DyVxuH8f.js","./assets/trophy-D8aYqWis.js","./assets/ellipsis-XJ7ixSqt.js","./assets/platform-DjMB2Zn8.js","./assets/AuraCanvas-0yXwp5ad.js","./assets/auraArtwork-Cr3E8fF5.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-CivUA8Xn.js","./assets/play-aQA02S-R.js","./assets/plus-CbQ_hdpG.js","./assets/LibrarySyncMotion-DD_MZYwK.js","./assets/rotate-ccw-CqyBWEiE.js","./assets/search-Dx8TvsEj.js","./assets/settings-2-Dud4y840.js","./assets/shuffle-DF4Bxf8B.js","./assets/pwa-dpa4CYCD.js","./assets/x-ClVNdHDF.js","./assets/Modal-DQpfH2w4.js","./assets/formatDuration-CPgf1m-z.js","./assets/trash-cYwXWNW5.js","./assets/user-round-DaDx9PFi.js","./assets/users-D8lxPqFo.js","./assets/useClock-CYOlcndf.js","./assets/AddMusicDialog-Do5CTUHO.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-D-wvvCOG.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-C4L4ra0x.js","./assets/updatePresentation-Dpq22Ghz.js","./assets/HomePage-DsZY9LXj.js","./assets/arrow-right-BV2SlCFL.js","./assets/TrackList-BQwoSa9T.js","./assets/audio-waveform-DUx0_3IF.js","./assets/circle-alert-C66taWLl.js","./assets/download-Dc5Qhu6Y.js","./assets/share-2-DQaRg9zn.js","./assets/upload-DGaE8ksz.js","./assets/SelectField-tAiaBM3B.js","./assets/check-CgXg9UlI.js","./assets/collection-BlMrkXdJ.js","./assets/annual-window-D2KXXJY2.js","./assets/SectionHeading-DFv2FFHj.js","./assets/AppLayout-83ziMWkM.css","./assets/ExplorePage-BdotWGqg.css","./assets/LibraryPage-DcPS6Bbs.css","./assets/LibrarySyncMotion-BCzp1pe5.css","./assets/NewsTimeline-BZ7mqwpe.css","./assets/ProfileFriends-Dt4n6A4-.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-DI_zTYup.css","./assets/ProfileReactions-DrPMU1xN.css","./assets/ReactionPreview-CcxOo9tV.css","./assets/RetrospectiveFilm-Cebz-yl7.css","./assets/SelectField-C8XFYMfp.css","./assets/SettingsPage-8N1xyHU0.css","./assets/SocialSpace-D-TzHNXw.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BtUptMqH.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/friendNotifications-ikRVUxsO.css","./assets/index-MVmSLagz.css","./assets/laboratory-annual-3OU5qksC.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
