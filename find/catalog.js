function item(i){return {id:String(i.trackId||i.collectionId||''),title:i.trackName||i.collectionName||'',artist:i.artistName||'',album:i.collectionName||'',cover:(i.artworkUrl100||'').replace('100x100bb','600x600bb'),released:(i.releaseDate||'').slice(0,10),genre:i.primaryGenreName||'',artistId:String(i.artistId||''),albumId:String(i.collectionId||''),duration:i.trackTimeMillis||0,count:i.trackCount||0,copyright:i.copyright||''};}
const cache=new Map();
export async function loadCatalog(kind,id,signal){
 if(!['artist','album'].includes(kind)||!/^\d{1,20}$/.test(String(id)))throw new Error('Identificação do catálogo indisponível.');
 const key=kind+':'+id,old=cache.get(key);if(old&&Date.now()-old.at<300000)return old.value;
 const lookup=async entity=>{const response=await fetch('https://itunes.apple.com/lookup?'+new URLSearchParams({id:String(id),entity,country:'BR',limit:'25'}),{signal,credentials:'omit'});if(!response.ok)throw new Error('O catálogo está indisponível agora. Tente novamente.');const data=await response.json();if(!Array.isArray(data.results))throw new Error('O catálogo retornou uma resposta inválida.');return data.results;};
 let value;
 if(kind==='artist'){const [albums,songs]=await Promise.all([lookup('album'),lookup('song')]);value={name:[...albums,...songs].find(i=>i.wrapperType==='artist')?.artistName||'',albums:albums.filter(i=>i.wrapperType==='collection').map(item),songs:songs.filter(i=>i.kind==='song').map(item)};}
 else{const data=await lookup('song');value={album:item(data.find(i=>i.wrapperType==='collection')||{}),songs:data.filter(i=>i.kind==='song'&&String(i.collectionId)===String(id)).map(item)};}
 signal?.throwIfAborted();cache.set(key,{at:Date.now(),value});return value;
}
