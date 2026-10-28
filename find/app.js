import {loadCatalog} from './catalog.js';
import {recognizeAudio} from './find-client.js';
import {createOrb} from './orb.js';
const $=id=>document.getElementById(id);
const orb=createOrb($('orb'));
const listen=$('listen'),cancel=$('cancel'),file=$('audioFile');
let busy=false,session=null,controller=null;
let currentTrack=null;
let recognizedTrack=null;
let catalogRequest=null;
let history=[];
try {history=JSON.parse(localStorage.getItem('sphere-recognition-beta-history')||'[]');if(!Array.isArray(history))history=[];}catch{}
const allowedUrl=(value)=>{try{const u=new URL(value);return u.protocol==='https:'?u.href:'';}catch{return '';}};
const embedded=new URLSearchParams(location.search).has('embedded');
if(embedded)document.documentElement.classList.add('embedded');
if(new URLSearchParams(location.search).get('surface')==='page'){
  document.documentElement.classList.add('in-sphere');
  new ResizeObserver(()=>parent.postMessage({type:'sphere-recognition-height',height:document.body.scrollHeight},location.origin)).observe(document.body);
}
function state(title,detail,kind=''){$('status').textContent=title;$('detail').textContent=detail;document.body.className=kind;orb.setActive(kind==='recording'||kind==='loading');listen.querySelector('span').textContent=kind==='loading'?'Identificando…':kind==='recording'?'Escutando…':kind==='preparing'?'Preparando…':kind==='found'?'Identificar outra música':'Identificar música';}
function setBusy(value){busy=value;listen.disabled=value;file.disabled=value;$('uploadLabel').hidden=value;if(!value)orb.setActive(false);}
function image(element,url){const safe=allowedUrl(url);element.hidden=!safe;if(safe){element.src=safe;element.onerror=()=>{element.hidden=true;};}else element.removeAttribute('src');}
function saveHistory(){try{localStorage.setItem('sphere-recognition-beta-history',JSON.stringify(history));}catch{}renderHistory();}
function renderHistory(){
  $('history').replaceChildren();$('historySection').hidden=!history.length;
  for(const item of history.slice(0,8)){
    const row=document.createElement('button');row.type='button';row.className='history-item';row.addEventListener('click',()=>openDiscovery(item));
    const cover=document.createElement('img');cover.alt='';cover.referrerPolicy='no-referrer';image(cover,item.cover);
    const text=document.createElement('div'),title=document.createElement('strong'),artist=document.createElement('small'),time=document.createElement('time');
    title.textContent=item.title;artist.textContent=item.artist;time.textContent=new Date(item.at).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
    text.append(title,artist);row.append(cover,text,time);$('history').append(row);
  }
}
function display(track){
  currentTrack=track;recognizedTrack=track;
  $('result').hidden=false;$('title').textContent=track.title;$('artist').textContent=track.artist;$('album').textContent=track.album;
  image($('cover'),track.cover);
  history=[{...track,at:Date.now()},...history.filter(item=>item.id!==track.id)].slice(0,8);saveHistory();
  applyPalette(track);openDiscovery(track);
}
function applyPalette(track){
  const color=/^#[0-9a-f]{6}$/i.test(track.color||'')?track.color:'#8b70ba';
  const accent=/^#[0-9a-f]{6}$/i.test(track.accent||'')?track.accent:'#9bd8e8';
  document.documentElement.style.setProperty('--discovery-color',color);document.documentElement.style.setProperty('--discovery-accent',accent);
  orb.setPalette(color);
}
function openDiscovery(track){
  catalogRequest?.abort();
  applyPalette(track);
  currentTrack=track;image($('discoveryCover'),track.cover);$('discoveryTitle').textContent=track.title;$('discoveryArtist').textContent=track.artist;
  const facts=$('discoveryFacts');facts.replaceChildren();
  for(const [label,value] of [['Artista',track.artist],['Álbum',track.album],['Gênero',track.genre],['Lançamento',track.released],['Selo',track.label],['Duração',track.duration?`${Math.floor(track.duration/60000)}:${String(Math.floor(track.duration/1000)%60).padStart(2,'0')}`:'']]){
    if(!value)continue;const row=document.createElement('div'),name=document.createElement('dt'),text=document.createElement('dd');name.textContent=label;
    if(label==='Artista'||label==='Álbum'){
      const action=document.createElement('button');action.className='fact-link';action.textContent=value+' →';action.addEventListener('click',()=>selectTab(label==='Artista'?'artist':'album'));text.append(action);
    }else text.textContent=value;
    row.append(name,text);facts.append(row);
  }
  selectTab('song');if(!$('discovery').open)$('discovery').showModal();
  if(embedded)parent.postMessage({type:'sphere-recognition-discovery',open:true},location.origin);
}
function catalogHeading(text){const title=document.createElement('h3');title.textContent=text;$('catalogContent').append(title);}
function catalogCards(items,kind){
  const list=document.createElement('div');list.className=kind==='album'?'catalog-albums':'catalog-songs';
  for(const item of items){
    const button=document.createElement('button');button.type='button';button.className='catalog-card';
    const art=document.createElement('img');art.alt='';art.referrerPolicy='no-referrer';image(art,item.cover);
    const copy=document.createElement('span'),name=document.createElement('strong'),meta=document.createElement('small');name.textContent=item.title;meta.textContent=kind==='album'?item.released?.slice(0,4)||item.artist:item.album||item.artist;copy.append(name,meta);button.append(art,copy);
    button.addEventListener('click',()=>{openDiscovery(item);if(kind==='album')selectTab('album');});list.append(button);
  }
  $('catalogContent').append(list);
}
async function selectTab(kind){
  catalogRequest?.abort();
  document.querySelector('.discovery-content').scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  for(const tab of ['song','artist','album'])$(tab+'Tab').setAttribute('aria-pressed',String(tab===kind));
  $('songPanel').hidden=kind!=='song';$('catalogPanel').hidden=kind==='song';
  if(kind==='song')return;
  $('catalogContent').replaceChildren();
  const id=currentTrack?.[kind==='artist'?'artistId':'albumId'];
  if(!id){$('catalogStatus').textContent=`Ainda não temos os dados de ${kind==='artist'?'artista':'álbum'} desta descoberta no catálogo. Uma nova identificação pode atualizar os dados.`;return;}
  $('catalogStatus').textContent='Consultando informações…';
  const request=new AbortController();catalogRequest=request;
  try{
    const data=await loadCatalog(kind,id,request.signal);
    if(request.signal.aborted)return;
    if(kind==='artist'){
      catalogHeading(data.name||currentTrack.artist);
      if(data.albums.length){catalogHeading('Álbuns');catalogCards(data.albums,'album');}
      if(data.songs.length){catalogHeading('Músicas do artista');catalogCards(data.songs,'song');}
      $('catalogStatus').textContent=data.albums.length||data.songs.length?'':'Nenhuma faixa ou álbum disponível neste catálogo.';
    }else{
      catalogHeading(data.album.title||currentTrack.album);
      const info=document.createElement('p');info.className='album-info';info.textContent=[data.album.artist,data.album.released,data.album.genre,data.album.count?`${data.album.count} faixas`:''].filter(Boolean).join(' · ');$('catalogContent').append(info);
      catalogCards(data.songs,'song');
      if(data.album.copyright){const credit=document.createElement('p');credit.className='catalog-note';credit.textContent=data.album.copyright;$('catalogContent').append(credit);}
      $('catalogStatus').textContent=data.songs.length?'':'As faixas deste álbum não estão disponíveis no catálogo.';
    }
  }catch(error){if(error.name!=='AbortError')$('catalogStatus').textContent=error.message||'Não foi possível consultar o catálogo.';}
}
for(const tab of ['song','artist','album'])$(tab+'Tab').addEventListener('click',()=>selectTab(tab));
$('discovery').addEventListener('close',()=>{catalogRequest?.abort();if(embedded)parent.postMessage({type:'sphere-recognition-discovery',open:false},location.origin);});
$('trackDetails').addEventListener('click',()=>{if(recognizedTrack)openDiscovery(recognizedTrack);});
for(const [id,tab] of [['title','song'],['artist','artist'],['album','album']])$(id).addEventListener('click',()=>{if(recognizedTrack){openDiscovery(recognizedTrack);selectTab(tab);}});
$('identifyAgain').addEventListener('click',()=>{$('discovery').close();start();});
addEventListener('message',event=>{
  if(event.origin!==location.origin||event.source!==parent)return;
  if(event.data?.type==='sphere-recognition-stop'){if(session)stop();controller?.abort();}
  if(event.data?.type==='sphere-recognition-theme'&&['light','dark'].includes(event.data.theme))document.documentElement.dataset.theme=event.data.theme;
});
async function identify(blob,type){
  window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  state('Identificando…','','loading');
  controller=new AbortController();const timeout=setTimeout(()=>controller?.abort(),65000);
  const waiting=setTimeout(()=>{if(busy)state('Ainda procurando…','Aguardando o serviço de reconhecimento.','loading');},8000);
  try{
    const response=await recognizeAudio(blob,type,controller.signal);
    const data=await response.json();if(!response.ok)throw new Error(data.error||'O reconhecimento está indisponível.');
    if(data.matched){display(data.track);state('Música identificada.','','found');}
    else state('Ainda não encontramos essa música.','Tente outro trecho, com a música mais alta e menos ruído ao redor.');
  }catch(error){state('Não foi possível identificar.',error.name==='AbortError'?'A consulta demorou demais. Tente novamente.':error.message);}
  finally{clearTimeout(timeout);clearTimeout(waiting);controller=null;setBusy(false);orb.setEnergy(0);}
}
function wav(chunks,length,rate){
  const buffer=new ArrayBuffer(44+length*2),view=new DataView(buffer);
  const text=(offset,s)=>{for(let i=0;i<s.length;i++)view.setUint8(offset+i,s.charCodeAt(i));};
  text(0,'RIFF');view.setUint32(4,36+length*2,true);text(8,'WAVE');text(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,rate,true);view.setUint32(28,rate*2,true);view.setUint16(32,2,true);view.setUint16(34,16,true);text(36,'data');view.setUint32(40,length*2,true);
  let offset=44;for(const chunk of chunks){for(const sample of chunk){if(offset>=buffer.byteLength)break;const s=Math.max(-1,Math.min(1,sample));view.setInt16(offset,s<0?s*32768:s*32767,true);offset+=2;}}
  return new Blob([buffer],{type:'audio/wav'});
}
function release(s){
  clearTimeout(s.timer);clearTimeout(s.permissionTimer);s.stream?.getTracks().forEach(track=>track.stop());s.node?.disconnect();s.source?.disconnect();
  if(s.context&&s.context.state!=='closed')s.context.close().catch(()=>{});
  $('cancel').hidden=true;orb.setEnergy(0);
}
async function start(){
  window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  if(busy)return;orb.setFound(false);setBusy(true);$('result').hidden=true;$('cancel').hidden=false;state('Preparando…','Permita o microfone.','preparing');
  const s={chunks:[],length:0,cancelled:false};session=s;
  try{
    if(!navigator.mediaDevices?.getUserMedia)throw new Error('Este navegador não oferece acesso ao microfone. Abra no Chrome/Edge ou escolha um arquivo.');
    const permission=navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false},video:false}).then(stream=>{
      if(s.cancelled){stream.getTracks().forEach(track=>track.stop());throw new Error('Escuta cancelada.');}return stream;
    });
    s.stream=await Promise.race([permission,new Promise((_,reject)=>{s.permissionTimer=setTimeout(()=>reject(new Error('O navegador não liberou o microfone. Abra este endereço no Chrome/Edge ou escolha um arquivo de áudio.')),20000);})]);
    clearTimeout(s.permissionTimer);
    if(s.cancelled){release(s);return;}
    s.context=new AudioContext();await s.context.resume();await s.context.audioWorklet.addModule(new URL('./capture.js',import.meta.url));
    if(s.cancelled){release(s);return;}
    s.source=s.context.createMediaStreamSource(s.stream);s.node=new AudioWorkletNode(s.context,'sphere-capture');
    // Worklet produces silence on its output, so the mic is never played back.
    s.source.connect(s.node);s.node.connect(s.context.destination);
    const limit=Math.round(s.context.sampleRate*12);
    const finish=()=>{
      if(s.cancelled||session!==s)return;s.cancelled=true;session=null;release(s);
      if(s.length<s.context.sampleRate){setBusy(false);state('A escuta foi interrompida.','Verifique o microfone e tente novamente.');return;}
      const audio=wav(s.chunks,Math.min(s.length,limit),s.context.sampleRate);s.chunks=[];identify(audio,'audio/wav');
    };
    s.node.port.onmessage=event=>{
      if(s.cancelled)return;const chunk=event.data;s.chunks.push(chunk);s.length+=chunk.length;
      orb.setSamples(chunk);
      if(s.length>=limit)finish();
    };
    s.stream.getAudioTracks()[0].onended=()=>{if(!s.cancelled){stop();state('O microfone foi desconectado.','Conecte-o novamente ou escolha um arquivo.');}};
    s.timer=setTimeout(finish,15000);$('cancel').hidden=false;state('Escutando…','Ouvindo um trecho de até 12 segundos.','recording');
  }catch(error){
    const wasCancelled=s.cancelled;s.cancelled=true;release(s);if(session!==s)return;session=null;setBusy(false);if(wasCancelled)return;
    const messages={NotAllowedError:'O acesso ao microfone foi negado. Permita nas configurações do navegador ou escolha um arquivo.',NotFoundError:'Nenhum microfone encontrado. Conecte um ou escolha um arquivo.',NotReadableError:'O microfone está ocupado ou indisponível. Feche outros apps e tente novamente.'};
    state('Não conseguimos iniciar a escuta.',messages[error.name]||error.message);
  }
}
function stop(){if(session){session.cancelled=true;release(session);session=null;}setBusy(false);state('','');}
listen.addEventListener('click',start);cancel.addEventListener('click',stop);
file.addEventListener('change',async()=>{
  const audio=file.files[0];file.value='';if(!audio||busy)return;
  if(audio.size>18*1024*1024){state('Esse arquivo é grande demais.','Escolha um áudio de até 18 MB.');return;}
  orb.setFound(false);setBusy(true);$('result').hidden=true;await identify(audio,audio.type);
});
$('clearHistory').addEventListener('click',()=>{history=[];saveHistory();});
addEventListener('pagehide',()=>{if(session){session.cancelled=true;release(session);}controller?.abort();});
renderHistory();
