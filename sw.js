
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.1","title":"Sua música ganha memória.","changes":["Bestiário com ALMAS, retrospectivas e cartas baseadas nas suas escutas.","Novo ícone do PWA e interface mais organizada.","Correções de áudio, mix relacionado e identificação de artistas."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793162818527-setsauthErrorText-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsindex-CtLX4Yb7.css|assetslaboratory-annual-3OU5qksC.css";
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
const PRECACHE = ["./","./index.html","./assets/index-2bsrq81n.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AlmaDelivery-DVmEdDkv.js","./assets/x-Dydkwo0N.js","./assets/createLucideIcon-BM-pRxKb.js","./assets/bestiary-D4aXxkKo.js","./assets/AppLayout-BRCik6Gf.js","./assets/calendar-days-eqnB7aZM.js","./assets/chevron-down-DZQRu7xN.js","./assets/achievementIcons-Xy8keYbO.js","./assets/disc-3-W5UaPivu.js","./assets/headphones-Dtx4wKQg.js","./assets/list-music-CCFlqLsp.js","./assets/music-2-zcxfu82b.js","./assets/trophy-BM5bbry6.js","./assets/ellipsis-CBn5lWRV.js","./assets/platform-C1FmeyGe.js","./assets/AuraCanvas-DiGTId6S.js","./assets/auraArtwork-GLMBN2bQ.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-CiZqbv2M.js","./assets/play-B6sWz1wI.js","./assets/plus-BoMI2lrz.js","./assets/refresh-cw-DSsRaH-L.js","./assets/rotate-ccw-Bqv9wVL2.js","./assets/search-Bh9mXyBe.js","./assets/settings-2-DqQot0eS.js","./assets/shuffle-Dij14Km1.js","./assets/pwa-q0SGMUlq.js","./assets/Modal-BFKXlVpl.js","./assets/formatDuration-kJGlbEtr.js","./assets/user-round-DJRNRK3Z.js","./assets/users-Bt0eM5SK.js","./assets/useClock-CKpT3g7V.js","./assets/AddMusicDialog-DlqEt2ue.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-CjFax0RU.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-1IHb6J1R.js","./assets/ArtistPage-DYnDeiau.js","./assets/arrow-left-IPLnpWrj.js","./assets/check-Cc-oFxrA.js","./assets/download-B-wsTwI5.js","./assets/external-link-Ba43iybB.js","./assets/SectionHeading-BSHORexN.js","./assets/artistBiography-B6mNI0_W.js","./assets/collection-BlMrkXdJ.js","./assets/ArtistsPage-BEqEDTnR.js","./assets/BestiaryPage-Bs8liIJ8.js","./assets/chevron-right-DZxCsVt3.js","./assets/annual-window-D2KXXJY2.js","./assets/DownloadsPage-_HsAc1y9.js","./assets/copy-CDyUhkir.js","./assets/share-2-LvDXpulo.js","./assets/ExplorePage-GES0Ozy4.js","./assets/TrackList-CVa55XEP.js","./assets/audio-waveform-B8LVMEBx.js","./assets/circle-alert--cJ3cJH_.js","./assets/upload-CdloJ_AM.js","./assets/localRecommendations-DtNfO7Of.js","./assets/FriendRequestNotifications-uoQ-hC5S.js","./assets/friendNotifications-P7PuvKrr.js","./assets/firebaseClient-Doo_h-LX.js","./assets/friendSocial-CYpL4PCm.js","./assets/HomePage-BlGShd2o.js","./assets/arrow-right-LYpY-xHO.js","./assets/LibraryPage-CeRrTOBj.js","./assets/missingAudioNotice-x8TlPGwn.js","./assets/ProfileFriends-GEWMoKaf.js","./assets/bell-CYNptGFj.js","./assets/loader-circle-B7hWRpZp.js","./assets/browser-SVqs8N5c.js","./assets/sphereSocialProfile-5w7TVrF9.js","./assets/ProfileReactions-r-3qPxBE.js","./assets/ProfilePage-xk2reMQ-.js","./assets/book-open-Bpj-okr2.js","./assets/smartphone-CFbdnmy-.js","./assets/achievementAssetData-DpuuUwp0.js","./assets/SettingsPage-NgpLziLl.js","./assets/authErrorText-rMiIb5qt.js","./assets/AppLayout-CfHmNI37.css","./assets/ExplorePage-BdotWGqg.css","./assets/NewsTimeline-B1lzUkav.css","./assets/ProfileFriends-EDVWhShm.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-CmT4ph1b.css","./assets/ProfileReactions-BHCBtio5.css","./assets/RetrospectiveFilm-Cebz-yl7.css","./assets/SettingsPage-8N1xyHU0.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BF74cSe6.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/index-CtLX4Yb7.css","./assets/laboratory-annual-3OU5qksC.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
