"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{7691:(M,y,l)=>{l.d(y,{i7:()=>o,LK:()=>s});var p=l(5083),c=l(467),u=function(f){return f.Prompt="PROMPT",f.Camera="CAMERA",f.Photos="PHOTOS",f}(u||{}),a=function(f){return f.Rear="REAR",f.Front="FRONT",f}(a||{}),s=function(f){return f.Uri="uri",f.Base64="base64",f.DataUrl="dataUrl",f}(s||{});class i extends p.E_{getPhoto(n){var e=this;return(0,c.A)(function*(){return new Promise(function(){var r=(0,c.A)(function*(d,v){if(n.webUseInput||n.source===u.Photos)e.fileInputExperience(n,d,v);else if(n.source===u.Prompt){let m=document.querySelector("pwa-action-sheet");m||(m=document.createElement("pwa-action-sheet"),document.body.appendChild(m)),m.header=n.promptLabelHeader||"Photo",m.cancelable=!1,m.options=[{title:n.promptLabelPhoto||"From Photos"},{title:n.promptLabelPicture||"Take Picture"}],m.addEventListener("onSelection",function(){var w=(0,c.A)(function*(h){0===h.detail?e.fileInputExperience(n,d,v):e.cameraExperience(n,d,v)});return function(h){return w.apply(this,arguments)}}())}else e.cameraExperience(n,d,v)});return function(d,v){return r.apply(this,arguments)}}())})()}pickImages(n){var e=this;return(0,c.A)(function*(){return new Promise(function(){var r=(0,c.A)(function*(d,v){e.multipleFileInputExperience(d,v)});return function(d,v){return r.apply(this,arguments)}}())})()}cameraExperience(n,e,r){var d=this;return(0,c.A)(function*(){if(customElements.get("pwa-camera-modal")){const v=document.createElement("pwa-camera-modal");v.facingMode=n.direction===a.Front?"user":"environment",document.body.appendChild(v);try{yield v.componentOnReady(),v.addEventListener("onPhoto",function(){var m=(0,c.A)(function*(w){const h=w.detail;null===h?r(new p.I9("User cancelled photos app")):h instanceof Error?r(h):e(yield d._getCameraPhoto(h,n)),v.dismiss(),document.body.removeChild(v)});return function(w){return m.apply(this,arguments)}}()),v.present()}catch{d.fileInputExperience(n,e,r)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),d.fileInputExperience(n,e,r)})()}fileInputExperience(n,e,r){let d=document.querySelector("#_capacitor-camera-input");const v=()=>{var m;null===(m=d.parentNode)||void 0===m||m.removeChild(d)};d||(d=document.createElement("input"),d.id="_capacitor-camera-input",d.type="file",d.hidden=!0,document.body.appendChild(d),d.addEventListener("change",m=>{const w=d.files[0];let h="jpeg";if("image/png"===w.type?h="png":"image/gif"===w.type&&(h="gif"),"dataUrl"===n.resultType||"base64"===n.resultType){const g=new FileReader;g.addEventListener("load",()=>{if("dataUrl"===n.resultType)e({dataUrl:g.result,format:h});else if("base64"===n.resultType){const E=g.result.split(",")[1];e({base64String:E,format:h})}v()}),g.readAsDataURL(w)}else e({webPath:URL.createObjectURL(w),format:h}),v()}),d.addEventListener("cancel",m=>{r(new p.I9("User cancelled photos app")),v()})),d.accept="image/*",d.capture=!0,n.source===u.Photos||n.source===u.Prompt?d.removeAttribute("capture"):n.direction===a.Front?d.capture="user":n.direction===a.Rear&&(d.capture="environment"),d.click()}multipleFileInputExperience(n,e){let r=document.querySelector("#_capacitor-camera-input-multiple");const d=()=>{var v;null===(v=r.parentNode)||void 0===v||v.removeChild(r)};r||(r=document.createElement("input"),r.id="_capacitor-camera-input-multiple",r.type="file",r.hidden=!0,r.multiple=!0,document.body.appendChild(r),r.addEventListener("change",v=>{const m=[];for(let w=0;w<r.files.length;w++){const h=r.files[w];let g="jpeg";"image/png"===h.type?g="png":"image/gif"===h.type&&(g="gif"),m.push({webPath:URL.createObjectURL(h),format:g})}n({photos:m}),d()}),r.addEventListener("cancel",v=>{e(new p.I9("User cancelled photos app")),d()})),r.accept="image/*",r.click()}_getCameraPhoto(n,e){return new Promise((r,d)=>{const v=new FileReader,m=n.type.split("/")[1];"uri"===e.resultType?r({webPath:URL.createObjectURL(n),format:m,saved:!1}):(v.readAsDataURL(n),v.onloadend=()=>{const w=v.result;r("dataUrl"===e.resultType?{dataUrl:w,format:m,saved:!1}:{base64String:w.split(",")[1],format:m,saved:!1})},v.onerror=w=>{d(w)})})}checkPermissions(){var n=this;return(0,c.A)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw n.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw n.unavailable("Camera permissions are not available in this browser")}})()}requestPermissions(){var n=this;return(0,c.A)(function*(){throw n.unimplemented("Not implemented on web.")})()}pickLimitedLibraryPhotos(){var n=this;return(0,c.A)(function*(){throw n.unavailable("Not implemented on web.")})()}getLimitedLibraryPhotos(){var n=this;return(0,c.A)(function*(){throw n.unavailable("Not implemented on web.")})()}}new i;const o=(0,p.F3)("Camera",{web:()=>new i})},4031:(M,y,l)=>{l.d(y,{c:()=>a});var p=l(8737),c=l(1086),u=l(8607);const a=(s,i)=>{let t,o;const f=(r,d,v)=>{if(typeof document>"u")return;const m=document.elementFromPoint(r,d);m&&i(m)&&!m.disabled?m!==t&&(e(),n(m,v)):e()},n=(r,d)=>{t=r,o||(o=t);const v=t;(0,p.w)(()=>v.classList.add("ion-activated")),d()},e=(r=!1)=>{if(!t)return;const d=t;(0,p.w)(()=>d.classList.remove("ion-activated")),r&&o!==t&&t.click(),t=void 0};return(0,u.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>f(r.currentX,r.currentY,c.a),onMove:r=>f(r.currentX,r.currentY,c.b),onEnd:()=>{e(!0),(0,c.h)(),o=void 0}})}},8438:(M,y,l)=>{l.d(y,{g:()=>c});var p=l(8476);const c=()=>{if(void 0!==p.w)return p.w.Capacitor}},5572:(M,y,l)=>{l.d(y,{c:()=>p,i:()=>c});const p=(u,a,s)=>"function"==typeof s?s(u,a):"string"==typeof s?u[s]===a[s]:Array.isArray(a)?a.includes(u):u===a,c=(u,a,s)=>void 0!==u&&(Array.isArray(u)?u.some(i=>p(i,a,s)):p(u,a,s))},3351:(M,y,l)=>{l.d(y,{g:()=>p});const p=(i,t,o,f,n)=>u(i[1],t[1],o[1],f[1],n).map(e=>c(i[0],t[0],o[0],f[0],e)),c=(i,t,o,f,n)=>n*(3*t*Math.pow(n-1,2)+n*(-3*o*n+3*o+f*n))-i*Math.pow(n-1,3),u=(i,t,o,f,n)=>s((f-=n)-3*(o-=n)+3*(t-=n)-(i-=n),3*o-6*t+3*i,3*t-3*i,i).filter(r=>r>=0&&r<=1),s=(i,t,o,f)=>{if(0===i)return((i,t,o)=>{const f=t*t-4*i*o;return f<0?[]:[(-t+Math.sqrt(f))/(2*i),(-t-Math.sqrt(f))/(2*i)]})(t,o,f);const n=(3*(o/=i)-(t/=i)*t)/3,e=(2*t*t*t-9*t*o+27*(f/=i))/27;if(0===n)return[Math.pow(-e,1/3)];if(0===e)return[Math.sqrt(-n),-Math.sqrt(-n)];const r=Math.pow(e/2,2)+Math.pow(n/3,3);if(0===r)return[Math.pow(e/2,.5)-t/3];if(r>0)return[Math.pow(-e/2+Math.sqrt(r),1/3)-Math.pow(e/2+Math.sqrt(r),1/3)-t/3];const d=Math.sqrt(Math.pow(-n/3,3)),v=Math.acos(-e/(2*Math.sqrt(Math.pow(-n/3,3)))),m=2*Math.pow(d,1/3);return[m*Math.cos(v/3)-t/3,m*Math.cos((v+2*Math.PI)/3)-t/3,m*Math.cos((v+4*Math.PI)/3)-t/3]}},7464:(M,y,l)=>{l.d(y,{i:()=>p});const p=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(M,y,l)=>{l.r(y),l.d(y,{startFocusVisible:()=>a});const p="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=s=>{let i=[],t=!0;const o=s?s.shadowRoot:document,f=s||document.body,n=w=>{i.forEach(h=>h.classList.remove(p)),w.forEach(h=>h.classList.add(p)),i=w},e=()=>{t=!1,n([])},r=w=>{t=u.includes(w.key),t||n([])},d=w=>{if(t&&void 0!==w.composedPath){const h=w.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));n(h)}},v=()=>{o.activeElement===f&&n([])};return o.addEventListener("keydown",r),o.addEventListener("focusin",d),o.addEventListener("focusout",v),o.addEventListener("touchstart",e,{passive:!0}),o.addEventListener("mousedown",e),{destroy:()=>{o.removeEventListener("keydown",r),o.removeEventListener("focusin",d),o.removeEventListener("focusout",v),o.removeEventListener("touchstart",e),o.removeEventListener("mousedown",e)},setFocus:n}}},1086:(M,y,l)=>{l.d(y,{I:()=>c,a:()=>t,b:()=>o,c:()=>i,d:()=>n,h:()=>f});var p=l(8438),c=function(e){return e.Heavy="HEAVY",e.Medium="MEDIUM",e.Light="LIGHT",e}(c||{});const a={getEngine(){const e=(0,p.g)();if(null!=e&&e.isPluginAvailable("Haptics"))return e.Plugins.Haptics},available(){if(!this.getEngine())return!1;const r=(0,p.g)();return"web"!==(null==r?void 0:r.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(e){const r=this.getEngine();r&&r.impact({style:e.style})},notification(e){const r=this.getEngine();r&&r.notification({type:e.type})},selection(){this.impact({style:c.Light})},selectionStart(){const e=this.getEngine();e&&e.selectionStart()},selectionChanged(){const e=this.getEngine();e&&e.selectionChanged()},selectionEnd(){const e=this.getEngine();e&&e.selectionEnd()}},s=()=>a.available(),i=()=>{s()&&a.selection()},t=()=>{s()&&a.selectionStart()},o=()=>{s()&&a.selectionChanged()},f=()=>{s()&&a.selectionEnd()},n=e=>{s()&&a.impact(e)}},909:(M,y,l)=>{l.d(y,{I:()=>i,a:()=>n,b:()=>s,c:()=>d,d:()=>m,f:()=>e,g:()=>f,i:()=>o,p:()=>v,r:()=>w,s:()=>r});var p=l(467),c=l(4920),u=l(4929);const s="ion-content",i=".ion-content-scroll-host",t=`${s}, ${i}`,o=h=>"ION-CONTENT"===h.tagName,f=function(){var h=(0,p.A)(function*(g){return o(g)?(yield new Promise(E=>(0,c.c)(g,E)),g.getScrollElement()):g});return function(E){return h.apply(this,arguments)}}(),n=h=>h.querySelector(i)||h.querySelector(t),e=h=>h.closest(t),r=(h,g)=>o(h)?h.scrollToTop(g):Promise.resolve(h.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),d=(h,g,E,b)=>o(h)?h.scrollByPoint(g,E,b):Promise.resolve(h.scrollBy({top:E,left:g,behavior:b>0?"smooth":"auto"})),v=h=>(0,u.b)(h,s),m=h=>{if(o(h)){const E=h.scrollY;return h.scrollY=!1,E}return h.style.setProperty("overflow","hidden"),!0},w=(h,g)=>{o(h)?h.scrollY=g:h.style.removeProperty("overflow")}},3992:(M,y,l)=>{l.d(y,{a:()=>p,b:()=>d,c:()=>t,d:()=>v,e:()=>P,f:()=>i,g:()=>m,h:()=>u,i:()=>c,j:()=>_,k:()=>L,l:()=>o,m:()=>e,n:()=>w,o:()=>n,p:()=>s,q:()=>a,r:()=>O,s:()=>C,t:()=>r,u:()=>E,v:()=>b,w:()=>f,x:()=>h,y:()=>g});const p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(M,y,l)=>{l.d(y,{c:()=>a,g:()=>s});var p=l(8476),c=l(4920),u=l(4929);const a=(t,o,f)=>{let n,e;if(void 0!==p.w&&"MutationObserver"in p.w){const m=Array.isArray(o)?o:[o];n=new MutationObserver(w=>{for(const h of w)for(const g of h.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&m.includes(g.slot))return f(),void(0,c.r)(()=>r(g))}),n.observe(t,{childList:!0,subtree:!0})}const r=m=>{var w;e&&(e.disconnect(),e=void 0),e=new MutationObserver(h=>{f();for(const g of h)for(const E of g.removedNodes)E.nodeType===Node.ELEMENT_NODE&&E.slot===o&&v()}),e.observe(null!==(w=m.parentElement)&&void 0!==w?w:m,{subtree:!0,childList:!0})},v=()=>{e&&(e.disconnect(),e=void 0)};return{destroy:()=>{n&&(n.disconnect(),n=void 0),v()}}},s=(t,o,f)=>{const n=null==t?0:t.toString().length,e=i(n,o);if(void 0===f)return e;try{return f(n,o)}catch(r){return(0,u.a)("Exception in provided `counterFormatter`.",r),e}},i=(t,o)=>`${t} / ${o}`},1622:(M,y,l)=>{l.r(y),l.d(y,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>O,keyboardDidClose:()=>h,keyboardDidOpen:()=>m,keyboardDidResize:()=>w,resetKeyboardAssist:()=>n,setKeyboardClose:()=>v,setKeyboardOpen:()=>d,startKeyboardAssist:()=>e,trackViewportChanges:()=>b});var p=l(4379);l(8438),l(8476);const a="ionKeyboardDidShow",s="ionKeyboardDidHide";let t={},o={},f=!1;const n=()=>{t={},o={},f=!1},e=_=>{if(p.K.getEngine())r(_);else{if(!_.visualViewport)return;o=O(_.visualViewport),_.visualViewport.onresize=()=>{b(_),m()||w(_)?d(_):h(_)&&v(_)}}},r=_=>{_.addEventListener("keyboardDidShow",L=>d(_,L)),_.addEventListener("keyboardDidHide",()=>v(_))},d=(_,L)=>{g(_,L),f=!0},v=_=>{E(_),f=!1},m=()=>!f&&t.width===o.width&&(t.height-o.height)*o.scale>150,w=_=>f&&!h(_),h=_=>f&&o.height===_.innerHeight,g=(_,L)=>{const P=new CustomEvent(a,{detail:{keyboardHeight:L?L.keyboardHeight:_.innerHeight-o.height}});_.dispatchEvent(P)},E=_=>{const L=new CustomEvent(s);_.dispatchEvent(L)},b=_=>{t=Object.assign({},o),o=O(_.visualViewport)},O=_=>({width:Math.round(_.width),height:Math.round(_.height),offsetTop:_.offsetTop,offsetLeft:_.offsetLeft,pageTop:_.pageTop,pageLeft:_.pageLeft,scale:_.scale})},4379:(M,y,l)=>{l.d(y,{K:()=>a,a:()=>u});var p=l(8438),c=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(c||{}),u=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(u||{});const a={getEngine(){const s=(0,p.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(i=>{if(i.code!==c.Unimplemented)throw i}):Promise.resolve(void 0)}}},4731:(M,y,l)=>{l.d(y,{c:()=>i});var p=l(467),c=l(8476),u=l(4379);const a=t=>{if(void 0===c.d||t===u.a.None||void 0===t)return null;const o=c.d.querySelector("ion-app");return null!=o?o:c.d.body},s=t=>{const o=a(t);return null===o?0:o.clientHeight},i=function(){var t=(0,p.A)(function*(o){let f,n,e,r;const d=function(){var g=(0,p.A)(function*(){const E=yield u.K.getResizeMode(),b=void 0===E?void 0:E.mode;f=()=>{void 0===r&&(r=s(b)),e=!0,v(e,b)},n=()=>{e=!1,v(e,b)},null==c.w||c.w.addEventListener("keyboardWillShow",f),null==c.w||c.w.addEventListener("keyboardWillHide",n)});return function(){return g.apply(this,arguments)}}(),v=(g,E)=>{o&&o(g,m(E))},m=g=>{if(0===r||r===s(g))return;const E=a(g);return null!==E?new Promise(b=>{const _=new ResizeObserver(()=>{E.clientHeight===r&&(_.disconnect(),b())});_.observe(E)}):void 0};return yield d(),{init:d,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",f),null==c.w||c.w.removeEventListener("keyboardWillHide",n),f=n=void 0},isKeyboardVisible:()=>e}});return function(f){return t.apply(this,arguments)}}()},7838:(M,y,l)=>{l.d(y,{c:()=>c});var p=l(467);const c=()=>{let u;return{lock:function(){var s=(0,p.A)(function*(){const i=u;let t;return u=new Promise(o=>t=o),void 0!==i&&(yield i),t});return function(){return s.apply(this,arguments)}}()}}},9001:(M,y,l)=>{l.d(y,{c:()=>u});var p=l(8476),c=l(4920);const u=(a,s,i)=>{let t;const o=()=>!(void 0===s()||void 0!==a.label||null===i()),n=()=>{const r=s();if(void 0===r)return;if(!o())return void r.style.removeProperty("width");const d=i().scrollWidth;if(0===d&&null===r.offsetParent&&void 0!==p.w&&"IntersectionObserver"in p.w){if(void 0!==t)return;const v=t=new IntersectionObserver(m=>{1===m[0].intersectionRatio&&(n(),v.disconnect(),t=void 0)},{threshold:.01,root:a});v.observe(r)}else r.style.setProperty("width",.75*d+"px")};return{calculateNotchWidth:()=>{o()&&(0,c.r)(()=>{n()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(M,y,l)=>{l.d(y,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(u,a,s)=>{const i=u*a/s-u+"ms",t=2*Math.PI*a/s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(u,a,s)=>{const i=a/s,t=u*i-u+"ms",o=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,a)=>({r:6,style:{left:32-32*a+"%","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,a,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":u*a/s-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":u*a/s-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,a,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":u*a/s-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":u*a/s-u+"ms"}})}}},7166:(M,y,l)=>{l.r(y),l.d(y,{createSwipeBackGesture:()=>s});var p=l(4920),c=l(7464),u=l(8607);l(1970);const s=(i,t,o,f,n)=>{const e=i.ownerDocument.defaultView;let r=(0,c.i)(i);const v=E=>r?-E.deltaX:E.deltaX;return(0,u.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:E=>(r=(0,c.i)(i),(E=>{const{startX:O}=E;return r?O>=e.innerWidth-50:O<=50})(E)&&t()),onStart:o,onMove:E=>{const O=v(E)/e.innerWidth;f(O)},onEnd:E=>{const b=v(E),O=e.innerWidth,_=b/O,L=(E=>r?-E.velocityX:E.velocityX)(E),P=L>=0&&(L>.2||b>O/2),D=(P?1-_:_)*O;let x=0;if(D>5){const A=D/Math.abs(L);x=Math.min(A,540)}n(P,_<=0?.01:(0,p.j)(0,_,.9999),x)}})}},2935:(M,y,l)=>{l.d(y,{w:()=>p});const p=(a,s,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(o=>{i(c(o,s))});return t.observe(a,{childList:!0,subtree:!0}),t},c=(a,s)=>{let i;return a.forEach(t=>{for(let o=0;o<t.addedNodes.length;o++)i=u(t.addedNodes[o],s)||i}),i},u=(a,s)=>{if(1!==a.nodeType)return;const i=a;return(i.tagName===s.toUpperCase()?[i]:Array.from(i.querySelectorAll(s))).find(o=>o.value===i.value)}}}]);