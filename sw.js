
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.3","title":"Importe primeiro. Complete depois.","changes":["Importação sem consultas automáticas ao catálogo; sincronização de dados opcional.","A análise continua ao navegar e preserva os resultados já salvos.","Atualização confere a biblioteca e mantém o perfil selecionado antes de recarregar."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793164513059-setsauthErrorText-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsindex-DiPZVO7B.css|assetslaboratory-annual-3OU5qksC.css";
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
const PRECACHE = ["./","./index.html","./assets/index-BLariCse.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AlmaDelivery-CsrMMciZ.js","./assets/x-Ad78xJg6.js","./assets/createLucideIcon-NdeFjqA4.js","./assets/bestiary-D4aXxkKo.js","./assets/AppLayout-BFVCZI1X.js","./assets/calendar-days-CS0jse8L.js","./assets/rotate-ccw-9-NTQNnE.js","./assets/achievementIcons-CrASdM1G.js","./assets/disc-3-BtA9Etnd.js","./assets/headphones-DEFVg8eY.js","./assets/list-music-Dt7jtLSp.js","./assets/music-2-KTC9DO-E.js","./assets/trophy-BWGWA3su.js","./assets/ellipsis-D5M8MIXp.js","./assets/platform-CnqcrxHz.js","./assets/AuraCanvas-DwlT9yHG.js","./assets/auraArtwork-Eme7G8DZ.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-BCiqcG6X.js","./assets/play-CyYMQuI8.js","./assets/plus-DSuuioXj.js","./assets/refresh-cw-2Fo35crA.js","./assets/search-CL2RdmDf.js","./assets/settings-2-CiIwpI6G.js","./assets/shuffle-BMoh4DEs.js","./assets/pwa-DFKX32pX.js","./assets/Modal-_5XY36-w.js","./assets/formatDuration-Zl5nhL-F.js","./assets/user-round-D_TYT8H5.js","./assets/users-BKSlnoWg.js","./assets/useClock-BWSvEVsD.js","./assets/AddMusicDialog-BnLnFR5h.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-BrdlyENe.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-D6Knqd7H.js","./assets/ArtistPage-C3w81MfZ.js","./assets/arrow-left-CVUkCpM4.js","./assets/check-DGHH1iRy.js","./assets/download-CAz7JbgE.js","./assets/external-link-DoJ8V118.js","./assets/SectionHeading-BEJ8Key-.js","./assets/artistBiography-B6mNI0_W.js","./assets/collection-BlMrkXdJ.js","./assets/ArtistsPage-DmvGdR-4.js","./assets/BestiaryPage-cNGJz6u4.js","./assets/chevron-right-V7W8J-p7.js","./assets/annual-window-D2KXXJY2.js","./assets/DownloadsPage-CNd042Ju.js","./assets/copy-BExP31Xj.js","./assets/share-2-_4qegTvq.js","./assets/ExplorePage-R_5RBHrb.js","./assets/TrackList-DztVrQkw.js","./assets/audio-waveform-CYOinYNO.js","./assets/circle-alert-gYU6L-Go.js","./assets/upload-BWAw16jN.js","./assets/localRecommendations-DtNfO7Of.js","./assets/FriendRequestNotifications-DFO1gRR2.js","./assets/friendNotifications-DI-nwSBH.js","./assets/firebaseClient-Ba-MyQe-.js","./assets/friendSocial-Ro3VwT3U.js","./assets/HomePage-Bkz0UZvb.js","./assets/arrow-right-qe8s95BE.js","./assets/LibraryPage-DojXXR1D.js","./assets/catalog-BDCzuE7R.js","./assets/missingAudioNotice-x8TlPGwn.js","./assets/ProfileFriends-DluQlCXb.js","./assets/bell-Ck7EgzeF.js","./assets/loader-circle-DI_A99vX.js","./assets/browser-SVqs8N5c.js","./assets/sphereSocialProfile-2THZCX6s.js","./assets/ProfileReactions-CZb2Ojnh.js","./assets/ProfilePage-CLrZpuIV.js","./assets/book-open-DFyNL0Vx.js","./assets/smartphone-CXJz0D_R.js","./assets/achievementAssetData-DpuuUwp0.js","./assets/SettingsPage-BheG28sz.js","./assets/authErrorText-BrG2gJui.js","./assets/AppLayout-CfHmNI37.css","./assets/ExplorePage-BdotWGqg.css","./assets/NewsTimeline-B1lzUkav.css","./assets/ProfileFriends-EDVWhShm.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-CmT4ph1b.css","./assets/ProfileReactions-BHCBtio5.css","./assets/RetrospectiveFilm-Cebz-yl7.css","./assets/SettingsPage-8N1xyHU0.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-D9Xv1jMB.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/index-DiPZVO7B.css","./assets/laboratory-annual-3OU5qksC.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
