
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.1","title":"Sua música ganha memória.","changes":["Bestiário com ALMAS, retrospectivas e cartas baseadas nas suas escutas.","Novo ícone do PWA e interface mais organizada.","Correções de áudio, mix relacionado e identificação de artistas."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792942295708-setsauthErrorText-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsindex-CtLX4Yb7.css|assetslaboratory-annual-3OU5qksC.css";
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
const PRECACHE = ["./","./index.html","./assets/index-wWvzYjBS.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AlmaDelivery-7Hj_Il2t.js","./assets/x-CQj9wI9w.js","./assets/createLucideIcon-BhyW1Ws7.js","./assets/bestiary-D4aXxkKo.js","./assets/AppLayout-Hf8WdOjV.js","./assets/calendar-days-DHgnO-MX.js","./assets/chevron-down-D78V2OBd.js","./assets/achievementIcons-DoyY4IWw.js","./assets/disc-3-DtXng_Wk.js","./assets/headphones-CdkgTp1T.js","./assets/list-music-DtGTQMqS.js","./assets/music-2-BmUj5mfD.js","./assets/trophy-DApETPkZ.js","./assets/ellipsis-Be77pX_e.js","./assets/platform-fRNdQGri.js","./assets/AuraCanvas-B100wg5x.js","./assets/auraArtwork-CfGiW4PV.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-BG7V5A_V.js","./assets/play-CXwoc0LJ.js","./assets/plus-DG1qq3yN.js","./assets/refresh-cw-BgDduBZv.js","./assets/rotate-ccw-CGRf0CCk.js","./assets/search-BdeF-j6E.js","./assets/settings-2-7BcEu8Xd.js","./assets/shuffle-CXJT2-Ti.js","./assets/pwa-D74xtsnK.js","./assets/Modal-ulwMiHKg.js","./assets/formatDuration-Dad7PscH.js","./assets/user-round-CGkcbv5p.js","./assets/users-CFIwToX2.js","./assets/useClock-ufYy1qIj.js","./assets/AddMusicDialog-BH4QC9Pk.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-CAGXC0FH.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-CyWww3CX.js","./assets/ArtistPage-CQFkd8j7.js","./assets/arrow-left-DJBB59TT.js","./assets/check-C4-5wzxo.js","./assets/download-BKZuj4V8.js","./assets/external-link-D6HPecNm.js","./assets/SectionHeading-m1n5BZC9.js","./assets/artistBiography-B6mNI0_W.js","./assets/collection-BlMrkXdJ.js","./assets/ArtistsPage-BzcgSF36.js","./assets/BestiaryPage-bYlFEdQX.js","./assets/chevron-right-DKL43eVC.js","./assets/annual-window-D2KXXJY2.js","./assets/DownloadsPage-dJJQ0phP.js","./assets/copy-DyU6fxcl.js","./assets/share-2-XUK7V74r.js","./assets/ExplorePage-DuOU6kYK.js","./assets/TrackList-BQAT-FQp.js","./assets/audio-waveform--YKb84QJ.js","./assets/circle-alert-CsBheBHF.js","./assets/upload-BDliMyKI.js","./assets/localRecommendations-DtNfO7Of.js","./assets/FriendRequestNotifications-Ta9psiEL.js","./assets/friendNotifications-YVmQ4gxC.js","./assets/firebaseClient-BshNDr6I.js","./assets/friendSocial-BW-AI7VU.js","./assets/HomePage-DLkbwsC9.js","./assets/arrow-right-CBNErAtc.js","./assets/LibraryPage-CRwjAS1C.js","./assets/missingAudioNotice-x8TlPGwn.js","./assets/ProfileFriends-C-nY6qM5.js","./assets/bell-qbHHUN41.js","./assets/loader-circle-BGQs5xjx.js","./assets/browser-SVqs8N5c.js","./assets/sphereSocialProfile-BW6j1L20.js","./assets/ProfileReactions-3bIa_jd6.js","./assets/ProfilePage-CjjFuXcO.js","./assets/book-open-pzcJhODF.js","./assets/smartphone-BbVu7M8_.js","./assets/achievementAssetData-DpuuUwp0.js","./assets/SettingsPage-BFGYnEnE.js","./assets/authErrorText-D5xmpDKS.js","./assets/AppLayout-CfHmNI37.css","./assets/ExplorePage-BdotWGqg.css","./assets/NewsTimeline-B1lzUkav.css","./assets/ProfileFriends-EDVWhShm.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-CmT4ph1b.css","./assets/ProfileReactions-BHCBtio5.css","./assets/RetrospectiveFilm-Cebz-yl7.css","./assets/SettingsPage-8N1xyHU0.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BF74cSe6.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/index-CtLX4Yb7.css","./assets/laboratory-annual-3OU5qksC.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
