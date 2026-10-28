
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.10","title":"Mais perto, mais atualizado.","changes":["Opção de desfazer amizade no menu do perfil do amigo.","Fotos e nomes dos amigos acompanham as mudanças do perfil.","FIND consulta o catálogo de artista e álbum diretamente na Apple.","Novo endereço do símbolo evita reutilizar a logo de versões antigas."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793191316984-Text-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsfriendNotifications-ikRVUxsO.css|assetsindex-KFiMqRTN.css|index.html";
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
const PRECACHE = ["./","./index.html","./assets/index-C5k9f2RM.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-3Dsf0m_H.js","./assets/createLucideIcon-Cg9E_4-W.js","./assets/calendar-days-BlwxmNDf.js","./assets/chevron-down-CRr90xjw.js","./assets/achievementIcons-Dt-E5X6a.js","./assets/disc-3-jjjpCVF0.js","./assets/headphones-BQe9PiaN.js","./assets/list-music-BuPNzOaZ.js","./assets/music-2-l42dBIsy.js","./assets/trophy-BD388I5n.js","./assets/ellipsis-BrF8vO5v.js","./assets/platform-BYwbG198.js","./assets/AuraCanvas-CyuME77e.js","./assets/auraArtwork-C2UoUxX3.js","./assets/useDevicePerformance-BKRKuCML.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-21gwI_Ux.js","./assets/play-2dOiC9Go.js","./assets/plus-DpAIPaZq.js","./assets/LibrarySyncMotion-rsv8_AjG.js","./assets/rotate-ccw-BgbhKaRZ.js","./assets/search-BRj6dRli.js","./assets/settings-2-kQADaLfR.js","./assets/shuffle-CfRf52mj.js","./assets/pwa-DSqndxXZ.js","./assets/x-D37mdxbs.js","./assets/Modal-DopkYN-c.js","./assets/formatDuration-CI4yH3vR.js","./assets/trash-D12LhdS_.js","./assets/user-round-DfpHLDuB.js","./assets/users-CpCJRP5S.js","./assets/useClock-DRgnUwzM.js","./assets/rewindAvailability-Bdkz9fns.js","./assets/AddMusicDialog-Ny-kPULG.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-K35ZPyYF.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-CHkq4tjZ.js","./assets/updatePresentation-9NG35z7L.js","./assets/HomePage-CCTKNcRT.js","./assets/arrow-right-Bz-4v52d.js","./assets/TrackList-C50PHlBO.js","./assets/audio-waveform-Ds5UkS39.js","./assets/circle-alert-DwY18u0m.js","./assets/download-CL5Uap6G.js","./assets/share-2-Cyv4zkcu.js","./assets/upload-BzkVNd-1.js","./assets/SelectField-D1xJKpNp.js","./assets/check-DsingJD6.js","./assets/collection-BlMrkXdJ.js","./assets/annual-window-D2KXXJY2.js","./assets/SectionHeading-DIDIfOqk.js","./assets/AnnualCardGallery-3OU5qksC.css","./assets/AppLayout-DRN0p6MS.css","./assets/ExplorePage-BdotWGqg.css","./assets/LibraryPage-DcPS6Bbs.css","./assets/LibrarySyncMotion-BCzp1pe5.css","./assets/NewsTimeline-BMknzocL.css","./assets/ProfileFriends-CB7-ZjG2.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-DI_zTYup.css","./assets/ProfileReactions-Bc9I2Tnd.css","./assets/ReactionPreview-CcxOo9tV.css","./assets/RetrospectiveFilm-Sudcjdpg.css","./assets/SelectField-C8XFYMfp.css","./assets/SettingsPage-8N1xyHU0.css","./assets/SocialSpace-Bvzz3gN_.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BtUptMqH.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/friendNotifications-ikRVUxsO.css","./assets/index-KFiMqRTN.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-moon-symbol.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./find/index.html","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
