(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function a(){}function A(e){return e()}function k(){return Object.create(null)}function _(e){e.forEach(A)}function L(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function j(e){return Object.keys(e).length===0}const q=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in q;function C(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function B(e){return document.createElement(e)}function I(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function T(e){return Array.from(e.childNodes)}let b;function h(e){b=e}const f=[],E=[];let d=[];const O=[],W=Promise.resolve();let g=!1;function F(){g||(g=!0,W.then(S))}function y(e){d.push(e)}const m=new Set;let u=0;function S(){if(u!==0)return;const e=b;do{try{for(;u<f.length;){const t=f[u];u++,h(t),H(t.$$)}}catch(t){throw f.length=0,u=0,t}for(h(null),f.length=0,u=0;E.length;)E.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];m.has(n)||(m.add(n),n())}d.length=0}while(f.length);for(;O.length;)O.pop()();g=!1,m.clear(),h(e)}function H(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}function K(e){const t=[],n=[];d.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),d=t}const z=new Set;function D(e,t){e&&e.i&&(z.delete(e),e.i(t))}const G=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...G];function J(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||y(()=>{const i=e.$$.on_mount.map(A).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...i):_(i),e.$$.on_mount=[]}),s.forEach(y)}function Q(e,t){const n=e.$$;n.fragment!==null&&(K(n.after_update),_(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function R(e,t){e.$$.dirty[0]===-1&&(f.push(e),F(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,o,r,s,i,M=[-1]){const p=b;h(e);const l=e.$$={fragment:null,ctx:[],props:s,update:a,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:k(),dirty:M,skip_bound:!1,root:t.target||p.$$.root};i&&i(l.root);let $=!1;if(l.ctx=n?n(e,t.props||{},(c,w,...x)=>{const v=x.length?x[0]:w;return l.ctx&&r(l.ctx[c],l.ctx[c]=v)&&(!l.skip_bound&&l.bound[c]&&l.bound[c](v),$&&R(e,c)),w}):[],l.update(),$=!0,_(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const c=T(t.target);l.fragment&&l.fragment.l(c),c.forEach(N)}else l.fragment&&l.fragment.c();t.intro&&D(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),S()}h(p)}class V{$destroy(){Q(this,1),this.$destroy=a}$on(t,n){if(!L(n))return a;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(e){let t;return{c(){t=B("h1"),t.textContent=`Hello ${Y.toLowerCase()}`,I(t,"class","svelte-1mwh9qx")},m(n,o){C(n,t,o)},p:a,i:a,o:a,d(n){n&&N(t)}}}let Y="world";class Z extends V{constructor(t){super(),U(this,t,null,X,P,{})}}new Z({target:document.getElementById("app")});
