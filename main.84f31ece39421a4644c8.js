(()=>{var e,r,t,n,a={278:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof dashboard)return e();t.l("https://mfe-test.github.io/remote-react/remoteEntry.js",(t=>{if("undefined"!=typeof dashboard)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"dashboard")})).then((()=>dashboard))}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return a[e](t,t.exports,i),t.exports}i.m=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"."+{431:"df2fd97b9d59e060134c",448:"9f8192e1e4a03c54a11c"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="containter:",i.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var s,u;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var f=d[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){s=f;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+a),s.src=t),e[t]=[n];var c=(r,n)=>{s.onerror=s.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=c.bind(null,s.onerror),s.onload=c.bind(null,s.onload),u&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={448:[839]},n={839:["default","./Dashboard",278]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var s=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),a[e]=()=>{throw r},o.p=0},u=(e,t,n,a,i,u)=>{try{var d=e(t,n);if(!d||!d.then)return i(d,a,u);var l=d.then((e=>i(e,a)),s);if(!u)return l;r.push(o.p=l)}catch(e){s(e)}},d=(e,r,n)=>u(r.get,o[1],t,0,l,n),l=r=>{o.p=1,a[e]=e=>{e.exports=r()}};u(i,o[2],0,0,((e,r,t)=>e?u(i.I,o[0],0,e,d,t):s()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={}),i.S[t];var o=[];switch(t){case"default":(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=i(278);if(!a)return;var s=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return o.push(a.then(s,r));var u=s(a);u&&u.then&&o.push(u.catch(r))}catch(e){r(e)}})()}return o.length?e[t]=Promise.all(o).then((()=>e[t]=1)):e[t]=1}}})(),i.p="https://mfe-test.github.io/containter/",(()=>{var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=i.p+i.u(r),s=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,s,u]=t,d=0;for(n in s)i.o(s,n)&&(i.m[n]=s[n]);for(u&&u(i),r&&r(t);d<o.length;d++)a=o[d],i.o(e,a)&&e[a]&&e[a][0](),e[o[d]]=0},t=self.webpackChunkcontainter=self.webpackChunkcontainter||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),Promise.all([i.e(431),i.e(448)]).then(i.bind(i,448))})();
//# sourceMappingURL=main.84f31ece39421a4644c8.js.map