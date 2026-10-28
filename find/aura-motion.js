import {AuraAudioResponse} from './aura-response.js';

/** Shared AURA comfort response, adapted to a small translucent sphere. */
export class RecognitionAuraMotion {
  response=new AuraAudioResponse();
  energy=0;active=0;target=0;inputEnergy=0;squares=0;samples=0;time=0;
  setSamples(chunk){for(const sample of chunk){if(Number.isFinite(sample)){this.squares+=sample*sample;this.samples++;}}}
  setEnergy(value){this.inputEnergy=Number.isFinite(value)?Math.max(0,Math.min(1,value)):0;this.squares=0;this.samples=0;}
  setActive(value){this.target=value?1:0;}
  update(delta,reducedMotion=false){
    const dt=Number.isFinite(delta)?Math.max(0,Math.min(.1,delta)):0;
    if(this.samples){this.inputEnergy=1-Math.exp(-Math.sqrt(this.squares/this.samples)*3.2);this.squares=0;this.samples=0;}
    const input=this.inputEnergy;
    const levels=this.response.update({bass:input,mids:input*.75,treble:input*.4,energy:input,onset:0,beat:0},dt,true,reducedMotion);
    const musical=(levels.bass*.40+levels.mids*.22+levels.treble*.10+levels.pulse*.08)*.62;
    const blend=1-Math.exp(-dt*2.4);
    this.energy+=(musical-this.energy)*blend;
    this.active+=(this.target-this.active)*blend;
    this.time+=reducedMotion?0:dt*.62;
    return {energy:reducedMotion?0:this.energy,active:reducedMotion?0:this.active,time:reducedMotion?1:this.time};
  }
}
