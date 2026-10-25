
// Stable internal prefix keeps installed app cache rotation compatible.
const RELEASE = {"version":"1.1.1","title":"Sua música ganha memória.","changes":["Bestiário com ALMAS, retrospectivas e cartas baseadas nas suas escutas.","Novo ícone do PWA e interface mais organizada.","Correções de áudio, mix relacionado e identificação de artistas."]};
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792936852625-setsauthErrorText-CVs4mJ8W.css|assetsbestiary-K3ttfzEW.css|assetsindex-CtLX4Yb7.css|assetslaboratory-annual-3OU5qksC.css";
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
const PRECACHE = ["./","./index.html","./assets/index-B6F7vs7C.js","./assets/rolldown-runtime-hePW80VL.js","./assets/AppLayout-CbbGIro2.js","./assets/createLucideIcon-DYICBphL.js","./assets/calendar-days-CuYwv2Lb.js","./assets/chevron-down-DctrTPsx.js","./assets/achievementIcons-D7eBJBmo.js","./assets/disc-3-BbuC5CTM.js","./assets/headphones-D5122j87.js","./assets/list-music-Dr5KAsez.js","./assets/music-2-CKiqbrk1.js","./assets/trophy-CwYsVktr.js","./assets/ellipsis-D8ShE4w_.js","./assets/platform-Dpq_oUQe.js","./assets/AuraCanvas-Bj79hbg-.js","./assets/auraArtwork-4_re-LwA.js","./assets/auraProfiles-9Yh1IVs4.js","./assets/pause-BMscAMfL.js","./assets/play-DhCcfoiL.js","./assets/plus-BQx-q8Ds.js","./assets/refresh-cw-C3wS5oDs.js","./assets/rotate-ccw-DWkjSxUU.js","./assets/search-DlmeEOnZ.js","./assets/settings-2-BhrG2-uU.js","./assets/shuffle-CJuGBdoV.js","./assets/pwa-B6fJd8wY.js","./assets/x-DzdPkCUw.js","./assets/Modal-DgTBnINM.js","./assets/formatDuration-DniIPoxj.js","./assets/user-round-k1e0sITv.js","./assets/users-1ojkYJje.js","./assets/useClock-Cqi-j1Np.js","./assets/AddMusicDialog-snH3-1q4.js","./assets/searchActivity-CfCcaQCH.js","./assets/Artwork-DZxWBq2l.js","./assets/auraCatalog-DENAxrW2.js","./assets/lyrics-Cpwe5pf-.js","./assets/ArtistPage-BSWMJ3rv.js","./assets/arrow-left-CWfC1U66.js","./assets/check-DWU4PgJx.js","./assets/download-D_hI5DS2.js","./assets/external-link-CT7nEU-7.js","./assets/SectionHeading-PAefAIIv.js","./assets/artistBiography-B6mNI0_W.js","./assets/collection-BlMrkXdJ.js","./assets/ArtistsPage-BmsSGhgA.js","./assets/BestiaryPage-Bre4ndks.js","./assets/chevron-right-C40AWhgL.js","./assets/bestiary-D4aXxkKo.js","./assets/annual-window-D2KXXJY2.js","./assets/DownloadsPage-CSBFkDE4.js","./assets/copy-DNEhrRGq.js","./assets/share-2-FxpJfG_4.js","./assets/ExplorePage-tenWLS9f.js","./assets/TrackList-NOOuy_Tf.js","./assets/audio-waveform-61sX1iHb.js","./assets/circle-alert-eDPlbSpB.js","./assets/upload-Crsb4av9.js","./assets/localRecommendations-DtNfO7Of.js","./assets/HomePage-BHmg3xBD.js","./assets/arrow-right-HNmco7wI.js","./assets/LibraryPage-DE4Kmmn7.js","./assets/missingAudioNotice-x8TlPGwn.js","./assets/ProfileFriends-kNHIUnwk.js","./assets/bell-DZ013-j2.js","./assets/loader-circle-MgipeZzc.js","./assets/friendNotifications-B1nXCbTO.js","./assets/firebaseClient-CzvJPwGS.js","./assets/friendSocial-BoB09IVs.js","./assets/browser-SVqs8N5c.js","./assets/sphereSocialProfile-BvIuU6o0.js","./assets/ProfileReactions-DjSuyhjY.js","./assets/ProfilePage-CYccDe43.js","./assets/book-open-BWtJ67s1.js","./assets/smartphone-s42Ae0Ua.js","./assets/achievementAssetData-DpuuUwp0.js","./assets/SettingsPage-CYnWb3JU.js","./assets/authErrorText-D_IajqBb.js","./assets/AppLayout-CfHmNI37.css","./assets/ExplorePage-BdotWGqg.css","./assets/NewsTimeline-B1lzUkav.css","./assets/ProfileFriends-EDVWhShm.css","./assets/ProfileImageCropper-C7QS2NH-.css","./assets/ProfilePage-CmT4ph1b.css","./assets/ProfileReactions-BHCBtio5.css","./assets/RetrospectiveFilm-Cebz-yl7.css","./assets/SettingsPage-8N1xyHU0.css","./assets/TrackList-hvV6KgT_.css","./assets/TvApp-DVSRaY-w.css","./assets/achievementIcons-BF74cSe6.css","./assets/authErrorText-CVs4mJ8W.css","./assets/bestiary-K3ttfzEW.css","./assets/index-CtLX4Yb7.css","./assets/laboratory-annual-3OU5qksC.css","./manifest.webmanifest","./sphere-favicon.ico","./sphere-app-icon-180.png","./sphere-app-icon-192.png","./sphere-app-icon-512.png","./sphere-app-icon-maskable-512.png","./sphere-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./sphere-mascot-new.png","./sphere-opening-art.svg","./sphere-splash-art.svg","./studio-caju-intro.png","./studio-caju-logo.png","./sphere-mascot-animated.png","./privacy.md","./emoji/mega-pack/ATTRIBUTION.md","./emoji/mega-pack/heart.png","./emoji/mega-pack/fire.png","./emoji/mega-pack/smile.png","./emoji/mega-pack/hug.png","./emoji/mega-pack/hundred.png","./emoji/mega-pack/music.png","./emoji/mega-pack/thought.png","./emoji/mega-pack/brazil.png","./emoji/mega-pack/rainbow.png","./emoji/mega-pack/gem.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
