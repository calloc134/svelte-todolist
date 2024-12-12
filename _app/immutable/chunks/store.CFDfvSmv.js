import{ap as E,X as T,af as P,D,ao as V,aq as W,ar as Y,H as C,as as S,a5 as $,at as K,aj as X,au as N,O as y,N as A,K as x,c as b,a9 as z,av as F,aw as G,ad as J,a8 as Q,ax as U,a4 as Z,a as ee,p as re,h as m,e as te,j as ae,n as O,k as ne,a3 as se,o as ie,B as ue}from"./runtime.BUQce5Kf.js";import{b as oe}from"./disclose-version.4KsYXkRJ.js";let H=!1;function fe(){H||(H=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function j(e){var r=P,a=D;E(null),T(null);try{return e()}finally{E(r),T(a)}}function ge(e,r,a,n=a){e.addEventListener(r,()=>j(a));const s=e.__on_r;s?e.__on_r=()=>{s(),n()}:e.__on_r=n,fe()}const ce=new Set,I=new Set;function le(e,r,a,n){function s(t){if(n.capture||p.call(r,t),!t.cancelBubble)return j(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{r.addEventListener(e,s,n)}):r.addEventListener(e,s,n),s}function ye(e,r,a,n,s){var t={capture:n,passive:s},o=le(e,r,a,t);(r===document.body||r===window||r===document)&&V(()=>{r.removeEventListener(e,o,t)})}function p(e){var k;var r=this,a=r.ownerDocument,n=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],t=s[0]||e.target,o=0,v=e.__root;if(v){var l=s.indexOf(v);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var d=s.indexOf(r);if(d===-1)return;l<=d&&(o=l)}if(t=s[o]||e.target,t!==r){Y(e,"currentTarget",{configurable:!0,get(){return t||a}});var L=P,f=D;E(null),T(null);try{for(var i,u=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+n];if(_!==void 0&&!t.disabled)if(C(_)){var[B,...M]=_;B.apply(t,[e,...M])}else _.call(t,e)}catch(g){i?u.push(g):i=g}if(e.cancelBubble||c===r||c===null)break;t=c}if(i){for(let g of u)queueMicrotask(()=>{throw g});throw i}}finally{e.__root=r,delete e.currentTarget,E(L),T(f)}}}const de=["touchstart","touchmove"];function _e(e){return de.includes(e)}function we(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ve(e,r){return q(e,r)}function Ee(e,r){S(),r.intro=r.intro??!1;const a=r.target,n=m,s=b;try{for(var t=$(a);t&&(t.nodeType!==8||t.data!==K);)t=X(t);if(!t)throw N;y(!0),A(t),x();const o=q(e,{...r,anchor:t});if(b===null||b.nodeType!==8||b.data!==z)throw F(),N;return y(!1),o}catch(o){if(o===N)return r.recover===!1&&G(),S(),J(a),y(!1),ve(e,r);throw o}finally{y(n),A(s)}}const h=new Map;function q(e,{target:r,anchor:a,props:n={},events:s,context:t,intro:o=!0}){S();var v=new Set,l=f=>{for(var i=0;i<f.length;i++){var u=f[i];if(!v.has(u)){v.add(u);var c=_e(u);r.addEventListener(u,p,{passive:c});var _=h.get(u);_===void 0?(document.addEventListener(u,p,{passive:c}),h.set(u,1)):h.set(u,_+1)}}};l(Q(ce)),I.add(l);var d=void 0,L=U(()=>{var f=a??r.appendChild(Z());return ee(()=>{if(t){re({});var i=ae;i.c=t}s&&(n.$$events=s),m&&oe(f,null),d=e(f,n)||{},m&&(D.nodes_end=b),t&&te()}),()=>{var c;for(var i of v){r.removeEventListener(i,p);var u=h.get(i);--u===0?(document.removeEventListener(i,p),h.delete(i)):h.set(i,u)}I.delete(l),R.delete(d),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return R.set(d,L),d}let R=new WeakMap;function Te(e){const r=R.get(e);r&&r()}function he(e,r,a){if(e==null)return r(void 0),O;const n=ne(()=>e.subscribe(r,a));return n.unsubscribe?()=>n.unsubscribe():n}let w=!1;function Le(e,r,a){const n=a[r]??(a[r]={store:null,source:se(void 0),unsubscribe:O});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=O;else{var s=!0;n.unsubscribe=he(e,t=>{s?n.source.v=t:ue(n.source,t)}),s=!1}return ie(n.source)}function Ne(){const e={};return V(()=>{for(var r in e)e[r].unsubscribe()}),e}function Se(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{we as a,Le as b,Se as c,fe as d,ye as e,Ee as h,ge as l,ve as m,Ne as s,Te as u};
