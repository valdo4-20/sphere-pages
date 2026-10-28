
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.5","title":"Cada conquista, uma nova forma.","changes":["Símbolos preenchidos e legíveis nas medalhas.","Gemas com lapidação 3D e cores próprias para cada raridade.","Halo nas conquistas desbloqueadas e resposta suave ao toque.","Animações respeitam movimento reduzido e pausam com a página oculta."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793181891794-stiary-K3ttfzEW.css|assetsfriendNotifications-ikRVUxsO.css|assetsindex-MVmSLagz.css|assetslaboratory-annual-3OU5qksC.css";
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
const PRECACHE = ["./","./index.html","./assets/index-ynzNOoyL.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-BS7D8z0-.js","./assets/createLucideIcon-DsK3yWN0.js","./assets/calendar-days-l0t7v7pp.js","./assets/chevron-down-BA9UA4Ne.js","./assets/achievementIcons-CICsypzZ.js","./assets/disc-3-XPo4y6ST.js","./assets/headphones-Bc2Ta_uE.js","./assets/list-music-B1MSModz.js","./assets/music-2-CVi0IGZX.js","./assets/trophy-K181Swid.js","./assets/ellipsis-DDrb1mGN.js","./assets/platform-DfQ_UcEk.js","./assets/AuraCanvas-CKGQbNu-.js","./assets/auraArtwork-DI-QdMJG.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-BUPGAK_E.js","./assets/play-BHsY-mci.js","./assets/plus-DxfBDaTA.js","./assets/LibrarySyncMotion-JZoW2SFn.js","./assets/rotate-ccw-CfGFPCh-.js","./assets/search-CJmMEzUd.js","./assets/settings-2-CTxFsNn1.js","./assets/shuffle-DURdnWgS.js","./assets/pwa-DfAenh3D.js","./assets/x-8fx6x49W.js","./assets/Modal-KTkhj8s3.js","./assets/formatDuration-B3o9qiju.js","./assets/trash-Dpdrr9X_.js","./assets/user-round-BkSXN8Ys.js","./assets/users-W1pShgWc.js","./assets/useClock-D8v35dMw.js","./assets/AddMusicDialog-BwZIiTdb.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-Dr9Skyh4.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-fILp5Wbz.js","./assets/updatePresentation-RmL-ciIf.js","./assets/HomePage-BbCNenrk.js","./assets/arrow-right-BKqpbHLs.js","./assets/TrackList-DjtXKlEu.js","./assets/audio-waveform-B4ANbSik.js","./assets/circle-alert-DvmDfGkX.js","./assets/download-CNqQ8dVX.js","./assets/share-2-BeXw8GoY.js","./assets/upload-BA6igrWD.js","./assets/SelectField-DtKyx1-t.js","./assets/check-Df5BygxQ.js","./assets/collection-BlMrkXdJ.js","./assets/annual-window-D2KXXJY2.js","./assets/SectionHeading-C8CpcPgb.js","./assets/AppLayout-83ziMWkM.css","./assets/ExplorePage-BdotWGqg.css","./assets/LibraryPage-DcPS6Bbs.css","./assets/LibrarySyncMotion-BCzp1pe5.css","./assets/NewsTimeline-BZ7mqwpe.css","./assets/ProfileFriends-Dt4n6A4-.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-DI_zTYup.css","./assets/ProfileReactions-DrPMU1xN.css","./assets/ReactionPreview-CcxOo9tV.css","./assets/RetrospectiveFilm-Cebz-yl7.css","./assets/SelectField-C8XFYMfp.css","./assets/SettingsPage-8N1xyHU0.css","./assets/SocialSpace-D-TzHNXw.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BtUptMqH.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/friendNotifications-ikRVUxsO.css","./assets/index-MVmSLagz.css","./assets/laboratory-annual-3OU5qksC.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
