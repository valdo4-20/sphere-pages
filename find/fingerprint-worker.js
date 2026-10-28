import init, {DecodedSignature} from './vendor/shazamio-core/web/shazamio-core.js';
onmessage=async ({data})=>{
  let signature;
  try{
    await init();
    signature=DecodedSignature.new(data.samples,16000,1);
    postMessage({signature:{uri:signature.uri,samplems:signature.samplems}});
  }catch{postMessage({error:'Não foi possível analisar esse áudio. Tente outra gravação.'});}
  finally{signature?.free();}
};
