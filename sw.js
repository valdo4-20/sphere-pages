
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.2","title":"Amigos na mesma sintonia.","changes":["Convites recebidos, enviados e amizades atualizados em tempo real.","Correção do envio de convites por QR code e nome de usuário.","Recuperação do armazenamento no Android, atalhos visíveis e Topázio com cor própria."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1793163646828-setsauthErrorText-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsindex-B-abzglH.css|assetslaboratory-annual-3OU5qksC.css";
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
const PRECACHE = ["./","./index.html","./assets/index-TjN_ma0M.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AlmaDelivery-DDxlTper.js","./assets/x-DXXorGnD.js","./assets/createLucideIcon-BbraXmvw.js","./assets/bestiary-D4aXxkKo.js","./assets/AppLayout-D_atqCiz.js","./assets/calendar-days-BgZl18st.js","./assets/rotate-ccw-BAGVrnjW.js","./assets/achievementIcons-D5FKWVKZ.js","./assets/disc-3-jjHUR3tL.js","./assets/headphones-7Bg5sqKp.js","./assets/list-music-CCuWyROA.js","./assets/music-2-DbOl8Lpg.js","./assets/trophy-DDF85Ize.js","./assets/ellipsis-Cw3J54mv.js","./assets/platform-Ciae8JpQ.js","./assets/AuraCanvas-BYcTWTkh.js","./assets/auraArtwork-Bnf40bl4.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-BgaqMX05.js","./assets/play-BXyuznOl.js","./assets/plus-CmA0dl11.js","./assets/refresh-cw-Byo2pJMs.js","./assets/search-CpBj9g9L.js","./assets/settings-2-DtDz6KFo.js","./assets/shuffle-C3vwIN9K.js","./assets/pwa-GsMoBK5A.js","./assets/Modal-CsoEH3uq.js","./assets/formatDuration-xAmHjMVU.js","./assets/user-round-BojeIdsD.js","./assets/users-DrHnUjwK.js","./assets/useClock-CZvhErRv.js","./assets/AddMusicDialog-BAy3oKZX.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-BRbTPRYo.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-Cm3K7UJU.js","./assets/ArtistPage-CAzMTDXJ.js","./assets/arrow-left-7mevn0eC.js","./assets/check-B5DKcDUr.js","./assets/download-BRcuj8QY.js","./assets/external-link-CxyQnvsy.js","./assets/SectionHeading-BLD6_Oun.js","./assets/artistBiography-B6mNI0_W.js","./assets/collection-BlMrkXdJ.js","./assets/ArtistsPage-D-homLF7.js","./assets/BestiaryPage-6ohTCayx.js","./assets/chevron-right-CNzzH_uA.js","./assets/annual-window-D2KXXJY2.js","./assets/DownloadsPage-BJeO0LjV.js","./assets/copy-BFmLkoky.js","./assets/share-2-BS_t-1Kq.js","./assets/ExplorePage-DdW5axgY.js","./assets/TrackList-EcK_9TkM.js","./assets/audio-waveform-DvLbZmoC.js","./assets/circle-alert-cFTuw0pE.js","./assets/upload-BPA_LqnW.js","./assets/localRecommendations-DtNfO7Of.js","./assets/FriendRequestNotifications-BpkUyUtU.js","./assets/friendNotifications-Dt0fuyxe.js","./assets/firebaseClient-DhG46X2i.js","./assets/friendSocial-C4Gg40Wt.js","./assets/HomePage-DkL29npo.js","./assets/arrow-right-10A657Gq.js","./assets/LibraryPage-CjOr_Plw.js","./assets/missingAudioNotice-x8TlPGwn.js","./assets/ProfileFriends-BsicNBvW.js","./assets/bell-CO7QrBpN.js","./assets/loader-circle-C2sN1ee6.js","./assets/browser-SVqs8N5c.js","./assets/sphereSocialProfile-C_NVegD5.js","./assets/ProfileReactions-BXk3LG4W.js","./assets/ProfilePage-x29qTrpx.js","./assets/book-open-CBrXcbQy.js","./assets/smartphone-CURsEy5d.js","./assets/achievementAssetData-DpuuUwp0.js","./assets/SettingsPage-CS5KN-Ul.js","./assets/authErrorText-CG_LsxRT.js","./assets/AppLayout-CfHmNI37.css","./assets/ExplorePage-BdotWGqg.css","./assets/NewsTimeline-B1lzUkav.css","./assets/ProfileFriends-EDVWhShm.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-CmT4ph1b.css","./assets/ProfileReactions-BHCBtio5.css","./assets/RetrospectiveFilm-Cebz-yl7.css","./assets/SettingsPage-8N1xyHU0.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-D9Xv1jMB.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/index-B-abzglH.css","./assets/laboratory-annual-3OU5qksC.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
