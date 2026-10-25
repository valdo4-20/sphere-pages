
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.1","title":"Sua música ganha memória.","changes":["Bestiário com ALMAS, retrospectivas e cartas baseadas nas suas escutas.","Novo ícone do PWA e interface mais organizada.","Correções de áudio, mix relacionado e identificação de artistas."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792937160724-setsauthErrorText-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsindex-CtLX4Yb7.css|assetslaboratory-annual-3OU5qksC.css";
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
const PRECACHE = ["./","./index.html","./assets/index-f6R8UfDp.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AlmaDelivery-DsvvaTnn.js","./assets/x-BuVl5q7N.js","./assets/createLucideIcon-5L-8I6cn.js","./assets/bestiary-D4aXxkKo.js","./assets/AppLayout-lRjIcEaL.js","./assets/calendar-days-CgsUvPVn.js","./assets/chevron-down-BRRm3qnk.js","./assets/achievementIcons-K76CWJay.js","./assets/disc-3-DhL5_9LG.js","./assets/headphones-DlY9ccar.js","./assets/list-music--d_XZva6.js","./assets/music-2-Bvux00Zm.js","./assets/trophy-IQOxm-Ew.js","./assets/ellipsis-BcF_bJEl.js","./assets/platform-Sh0KygvZ.js","./assets/AuraCanvas-BDCvbbfV.js","./assets/auraArtwork-RYQk92aV.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-CtsU64j6.js","./assets/play-CW9mE411.js","./assets/plus-B3Dl8laI.js","./assets/refresh-cw-BnMknEWJ.js","./assets/rotate-ccw-D06hBAoS.js","./assets/search-IHzO8cAq.js","./assets/settings-2-oWAKLFUZ.js","./assets/shuffle-BsMfrZyX.js","./assets/pwa-C0qxrGNF.js","./assets/Modal-DpxiQbC1.js","./assets/formatDuration-DmXwhxO4.js","./assets/user-round-yCVx8yij.js","./assets/users-DhyVEoXY.js","./assets/useClock-DWo4L9hL.js","./assets/AddMusicDialog-B7cYdLCd.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-C-FWRycu.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-DQ5_C0jx.js","./assets/ArtistPage-DlHUu1az.js","./assets/arrow-left-Bn2J0H2r.js","./assets/check-YBWVlmYB.js","./assets/download-CufApnAE.js","./assets/external-link-DkucCf8U.js","./assets/SectionHeading-Dr-6acWD.js","./assets/artistBiography-B6mNI0_W.js","./assets/collection-BlMrkXdJ.js","./assets/ArtistsPage-Cca_cPtH.js","./assets/BestiaryPage-40PwgZln.js","./assets/chevron-right-IrFdAsy4.js","./assets/annual-window-D2KXXJY2.js","./assets/DownloadsPage-Bq64SyBX.js","./assets/copy-YLcfGiTD.js","./assets/share-2-C4GEy-9l.js","./assets/ExplorePage-C3nS1khW.js","./assets/TrackList-CFCUhcM1.js","./assets/audio-waveform-1Rpd_X2_.js","./assets/circle-alert-BXzf44VN.js","./assets/upload-BbICE1ba.js","./assets/localRecommendations-DtNfO7Of.js","./assets/FriendRequestNotifications-DGk6xrK-.js","./assets/friendNotifications-CIqj7xiU.js","./assets/firebaseClient-CeCS_xNm.js","./assets/friendSocial-BNRvQEDZ.js","./assets/HomePage-Cgz9wQd9.js","./assets/arrow-right-CXzAmiez.js","./assets/LibraryPage-BjscJPTo.js","./assets/missingAudioNotice-x8TlPGwn.js","./assets/ProfileFriends-eAYEH7xE.js","./assets/bell-LruBYsr0.js","./assets/loader-circle-CaCVk-kP.js","./assets/browser-SVqs8N5c.js","./assets/sphereSocialProfile-CtJ8Yg5H.js","./assets/ProfileReactions-DFv0aHcD.js","./assets/ProfilePage-D9P6H4W9.js","./assets/book-open-Cx5TRxWb.js","./assets/smartphone-MVF1fOhA.js","./assets/achievementAssetData-DpuuUwp0.js","./assets/SettingsPage-mTMC8K1R.js","./assets/authErrorText-DRK0Trrq.js","./assets/AppLayout-CfHmNI37.css","./assets/ExplorePage-BdotWGqg.css","./assets/NewsTimeline-B1lzUkav.css","./assets/ProfileFriends-EDVWhShm.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-CmT4ph1b.css","./assets/ProfileReactions-BHCBtio5.css","./assets/RetrospectiveFilm-Cebz-yl7.css","./assets/SettingsPage-8N1xyHU0.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BF74cSe6.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/index-CtLX4Yb7.css","./assets/laboratory-annual-3OU5qksC.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
