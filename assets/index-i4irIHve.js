import{r}from"./index-ClcD9ViR.js";import{k as U,G as H,X as Y,e as F}from"./factory-BPYpkDor.js";const M=(c,i)=>{const n=getComputedStyle(c);return["auto","overlay","scroll"].includes(n.overflow)?!0:i?["auto","overlay","scroll"].includes(n.overflowY):["auto","overlay","scroll"].includes(n.overflowX)},h=({behavior:c,isReverse:i,isVertical:n,position:a,root:t})=>{let d;const p=H(t)&&M(t,n)?t:document.body;n?d={behavior:c,top:a??(i?p.scrollHeight:0)}:d={behavior:c,left:a??(i?p.scrollWidth:0)},p===document.body?window.scrollTo(d):p.scrollTo(d)},j=(c,i)=>{const n=H(c)&&M(c,i)?c:document.body;return i?n.scrollHeight-n.scrollTop:n.scrollWidth-n.scrollLeft},A=({behavior:c,indexRef:i,initialLoad:n=!1,isDisabled:a=!1,isReverse:t=!1,orientation:d="vertical",resetRef:p,rootMargin:k,rootRef:e,startIndex:P=n?0:1,threshold:C,onLoad:W}={})=>{const y=r.useRef(null),b=r.useRef(P),v=r.useRef(!1),w=r.useRef(void 0),x=r.useRef(!1),T=r.useRef(0),[X,B]=r.useState(!1),S=U(W),f=d==="vertical",E=r.useMemo(()=>({root:e==null?void 0:e.current,rootMargin:k,threshold:C}),[k,e,C]),G=r.useCallback((l=1,s=!0)=>{if(b.current=l,B(!1),s){const o=e==null?void 0:e.current;h({behavior:c,isReverse:t,isVertical:f,root:o})}a||setTimeout(()=>{const o=w.current,u=y.current;u&&(o==null||o.observe(u))})},[a,t,e,f,c]),g=r.useCallback(()=>{const l=w.current,s=y.current;s&&(l==null||l.unobserve(s)),B(!0)},[]),I=r.useCallback(()=>new IntersectionObserver(async([s])=>{if(!(s!=null&&s.isIntersecting)||v.current)return;const o={entry:s,finish:g,index:b.current};v.current=!0;const u=e==null?void 0:e.current;if(u&&(u.ariaBusy="true"),t&&(T.current=j(u,f)),await S(o),t){const m=T.current;h({isVertical:f,position:m,root:u})}b.current+=1,v.current=!1,u&&(u.ariaBusy="false")},E),[g,S,E,e,t,f]);return r.useEffect(()=>{(async()=>{const s=y.current,o=x.current,u=b.current,m=e==null?void 0:e.current;if(n&&!o&&(v.current=!0,m&&(m.ariaBusy="true"),await S({finish:g,index:u}),b.current+=1,v.current=!1,m&&(m.ariaBusy="false")),a)return;w.current=I();const O=w.current;if(t&&!o){const L=e==null?void 0:e.current;h({isReverse:t,isVertical:f,root:L}),x.current=!0}return setTimeout(()=>{s&&O.observe(s)}),()=>{s&&O.unobserve(s)}})()},[I,n,a,t,f,g,S,e]),Y(()=>x.current=!1),F(p,G),F(i,l=>b.current=l),{ref:y,isFinish:X}};export{A as u};
