import{u as F}from"./index-CUasfp9R.js";import{r as f}from"./index-ClcD9ViR.js";import{O as p,P as d,f as E,Q as A,R as b,u as h,S as g}from"./factory-BPYpkDor.js";const q=s=>{const e=s.current;if(!e)return!1;const r=A(e);return!r||e.contains(r)?!1:!!b(r)},S=(s,{focusRef:e,shouldFocus:r,visible:o})=>{const t=r&&!o;E(()=>{if(!t||q(s))return;const n=e.current||s.current;n&&requestAnimationFrame(()=>{n.focus()})},[t,s,e])},V=(s,{focusRef:e,preventScroll:r,shouldFocus:o,visible:t}={preventScroll:!0,shouldFocus:!1})=>{const n=d(s)?s.current:s,l=o&&t,a=f.useRef(l),c=f.useRef(t);h(()=>{!c.current&&t&&(a.current=l),c.current=t},[t,l]);const u=f.useCallback(()=>{if(!(!t||!n||!a.current)&&(a.current=!1,!n.contains(document.activeElement)))if(e!=null&&e.current)requestAnimationFrame(()=>{var i;(i=e.current)==null||i.focus({preventScroll:r})});else{const i=g(n);i.length>0&&requestAnimationFrame(()=>{var m;(m=i[0])==null||m.focus({preventScroll:r})})}},[t,r,n,e]);E(()=>{requestAnimationFrame(()=>{u()})},[u]),F(n,"transitionend",u)},x=({ref:s,elements:e,enabled:r})=>{const o=()=>{var t;return((t=s.current)==null?void 0:t.ownerDocument)??document};F(o,"pointerdown",t=>{if(!p()||!r)return;const n=t.target,a=(e??[s]).some(c=>{const u=d(c)?c.current:c;return(u==null?void 0:u.contains(n))||u===n});o().activeElement!==n&&a&&(t.preventDefault(),n.focus())})};export{S as a,V as b,x as u};
