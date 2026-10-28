// Procedural light and flowing pigment: no video or image from the reference.
import {RecognitionAuraMotion} from './aura-motion.js';
export function createOrb(canvas) {
  const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: true });
  const motion=new RecognitionAuraMotion();
  let found=0,foundTarget=0;const tint=[.55,.44,.73];
  if (!gl) {
    canvas.parentElement.classList.add('is-fallback');
    canvas.style.cssText = 'inset:20% auto auto 50%;transform:translateX(-50%);width:60%;height:auto;aspect-ratio:1;border-radius:50%;border:1px solid #ffffffc0;background:radial-gradient(ellipse at 28% 22%,#fff9,transparent 32%),radial-gradient(at 30% 75%,#2cc8f5,transparent 65%),radial-gradient(at 80% 20%,#ef5ebd,#9c6ceb);box-shadow:inset 0 0 24px #ffffffa0,0 0 30px #d1bfe780';
    return { setEnergy: () => {}, setSamples: () => {}, setActive: () => {},setPalette:()=>{},setFound:()=>{} };
  }
  const vertex = `attribute vec2 p;varying vec2 uv;void main(){uv=p;gl_Position=vec4(p,0.,1.);}`;
  const fragment = `precision highp float;
  varying vec2 uv;uniform float t;uniform float energy;uniform float active;uniform float aspect;
  uniform vec3 tint;uniform float found;
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
  float fbm(vec2 p){float v=0.,a=.55;for(int i=0;i<4;i++){v+=a*noise(p);p=mat2(1.6,1.2,-1.2,1.6)*p+2.3;a*=.5;}return v;}
  vec3 pigment(float n){return mix(mix(vec3(.08,.70,1.),vec3(.55,.20,.96),smoothstep(.22,.64,n)),vec3(1.,.24,.65),smoothstep(.58,.86,n));}
  void main(){
    vec2 p=uv*vec2(aspect,1.)*1.5;
    float time=t*.33;float r=length(p);float a=atan(p.y,p.x);
    float radius=.86;float inside=1.-smoothstep(radius-.005,radius+.008,r);
    float depth=sqrt(max(0.,1.-r*r/(radius*radius)));
    // The glass sphere stays perfectly round; moving pigment is independent of it.
    vec2 lens=p/(.72+.28*depth);
    vec2 flow=vec2(fbm(lens*2.3+vec2(time*.45,-time*.3)),fbm(lens*2.3+vec2(-time*.32,time*.4)+8.));
    float n=fbm(lens*2.4+flow*3.5+vec2(time*.3,-time*.25));
    float folds=sin(lens.x*5.+lens.y*3.+flow.x*9.+n*5.-time*1.3);
    float ribbons=pow(.5+.5*folds,3.);
    vec3 ink=pigment(n+.14*sin(time+lens.y*3.));
    vec3 glass=mix(vec3(.92,.94,1.),ink,.64+.29*ribbons);
    glass+=vec3(.02,.035,.045)*depth;
    // Broad softbox highlight, a reflected arc, and a fine glass lip.
    float highlight=exp(-dot((p-vec2(-.28,.42))*vec2(2.9,5.5),(p-vec2(-.28,.42))*vec2(2.9,5.5)));
    float rim=exp(-abs(r-radius+.018)*95.);
    float arc=exp(-abs(r-.78)*80.)*smoothstep(.0,.6,p.y)*(1.-smoothstep(-.5,.4,p.x));
    glass=mix(glass,vec3(1.),highlight*.48+arc*.32);
    glass=mix(glass,vec3(.95,.98,1.),rim*.65);
    // The AURA travels inside the three expanding search rings themselves.
    float turbulence=fbm(p*3.0+vec2(time*.5,-time*.4));
    float auraAlpha=0.;
    for(int i=0;i<3;i++){
      float phase=fract(t*.32+float(i)/3.);
      float ringRadius=.90+phase*.55;
      float width=.014+.014*turbulence+energy*.008;
      float ring=exp(-pow((r-ringRadius)/width,2.));
      float glow=exp(-pow((r-ringRadius)/(.035+width),2.))*.22;
      float fade=sin(phase*3.14159265)*(1.-phase*.4);
      auraAlpha+=(ring*.7+glow)*fade;
    }
    vec3 aura=pigment(.5+.25*sin(a*2.+time)+.17*turbulence);
    vec3 col=mix(aura,glass,inside);
    float alpha=max(min(.85,auraAlpha)*active,inside*.97);
    col=mix(col,mix(tint,vec3(1.),.24),found*.35);
    // A translucent strand sweeps in front of the spherical surface.
    float front=exp(-pow((p.y-.27*sin(p.x*3.+time)-.13)/.075,2.))*.12*inside;
    col=mix(col,ink,front);
    gl_FragColor=vec4(col,alpha);
  }`;
  function shader(type, source) {
    const s = gl.createShader(type);gl.shaderSource(s, source);gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  }
  const program=gl.createProgram();
  gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);
  if (!gl.getProgramParameter(program,gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
  gl.useProgram(program);const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const p=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(p);gl.vertexAttribPointer(p,2,gl.FLOAT,false,0,0);
  const timeLocation=gl.getUniformLocation(program,'t'),energyLocation=gl.getUniformLocation(program,'energy'),activeLocation=gl.getUniformLocation(program,'active'),aspectLocation=gl.getUniformLocation(program,'aspect');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let last=0;
  const tintLocation=gl.getUniformLocation(program,'tint'),foundLocation=gl.getUniformLocation(program,'found');
  function draw(ms) {
    requestAnimationFrame(draw);
    if(document.hidden){last=ms;return;}if(ms-last<32) return;
    const dt=Math.min(.1,last?(ms-last)/1000:1/30);last=ms;
    const {energy,active,time}=motion.update(dt,reduced.matches);
    found+=(foundTarget-found)*(1-Math.exp(-dt*2.4));
    const width=Math.round(canvas.clientWidth*Math.min(devicePixelRatio,2)),height=Math.round(canvas.clientHeight*Math.min(devicePixelRatio,2));
    if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;gl.viewport(0,0,width,height);}
    gl.uniform1f(aspectLocation,width/height);gl.uniform1f(timeLocation,reduced.matches?1:time);gl.uniform1f(energyLocation,reduced.matches?0:energy);gl.uniform1f(activeLocation,reduced.matches?0:active);
    gl.uniform3fv(tintLocation,tint);gl.uniform1f(foundLocation,found);
    gl.drawArrays(gl.TRIANGLES,0,6);
  }
  requestAnimationFrame(draw);
  return {setEnergy:value=>motion.setEnergy(value),setSamples:chunk=>motion.setSamples(chunk),setActive:value=>motion.setActive(value),setFound:value=>{foundTarget=value?1:0;},setPalette:color=>{if(/^#[0-9a-f]{6}$/i.test(color)){for(let i=0;i<3;i++)tint[i]=parseInt(color.slice(1+i*2,3+i*2),16)/255;foundTarget=1;}}};
}
