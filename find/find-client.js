import config from './find-config.js';
export function apiUrl(path){return `${config.apiBase.replace(/\/$/,'')}${path}`;}
export async function fingerprint(blob,signal){
  signal?.throwIfAborted();
  const context=new AudioContext();
  let audio;
  try{audio=await context.decodeAudioData(await blob.arrayBuffer());}
  catch{throw new Error('Não foi possível ler esse áudio. Tente um WAV, MP3 ou uma nova gravação.');}
  finally{await context.close();}
  signal?.throwIfAborted();
  const duration=Math.min(12,audio.duration);
  if(duration<1)throw new Error('O trecho é muito curto. Grave pelo menos um segundo.');
  const render=new OfflineAudioContext(1,Math.floor(duration*16000),16000);
  const source=render.createBufferSource();source.buffer=audio;source.connect(render.destination);
  source.start(0,Math.max(0,(audio.duration-duration)/2),duration);
  const mono=(await render.startRendering()).getChannelData(0);
  signal?.throwIfAborted();
  return new Promise((resolve,reject)=>{
    const worker=new Worker(new URL('./fingerprint-worker.js',import.meta.url),{type:'module'});
    let timer;
    const finish=(error,value)=>{clearTimeout(timer);signal?.removeEventListener('abort',abort);worker.terminate();error?reject(error):resolve(value);};
    const abort=()=>finish(signal.reason||new DOMException('Cancelado','AbortError'));
    signal?.addEventListener('abort',abort,{once:true});
    timer=setTimeout(()=>finish(new Error('A análise demorou demais. Tente um trecho menor.')),30000);
    worker.onmessage=({data})=>data.error?finish(new Error(data.error)):finish(null,{signature:data.signature,timestamp:Date.now()});
    worker.onerror=()=>finish(new Error('Não foi possível carregar o motor FIND. Reabra a página e tente novamente.'));
    worker.postMessage({samples:mono},[mono.buffer]);
  });
}
export async function recognizeAudio(blob,type,signal){
  if(!navigator.onLine)throw new Error('Conecte-se à internet para identificar a música.');
  if(config.engine==='python')return fetch('/api/recognize',{method:'POST',headers:{'Content-Type':type||'application/octet-stream'},body:blob,signal});
  const signature=await fingerprint(blob,signal);
  return fetch(apiUrl('/api/recognize'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(signature),signal});
}
