import{j as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as c}from"./index-BwDkhjyp.js";import{r as p}from"./index-B8XB3FuZ.js";import{l as v,u as f}from"./factory-DqlmaKnk.js";const d=({containerRef:a,appendToParentPortal:u=!0,isDisabled:s,children:e})=>s?e:a?l.jsx(C,{containerRef:a,appendToParentPortal:u,children:e}):l.jsx(j,{appendToParentPortal:u,children:e});d.className="ui-portal";d.selector=".ui-portal";const[x,P]=v({strict:!1,name:"PortalContext"}),j=({appendToParentPortal:a,children:u})=>{const[s,e]=c.useState(null),t=c.useRef(null),[,r]=c.useState({});c.useEffect(()=>r({}),[]);const i=P();return f(()=>{if(!s)return;const{ownerDocument:o}=s,n=a?i??o.body:o.body;if(!n)return;t.current=o.createElement("div"),t.current.className="ui-portal",n.appendChild(t.current),r({});const m=t.current;return()=>{n.contains(m)&&n.removeChild(m)}},[s]),t.current?p.createPortal(l.jsx(x,{value:t.current,children:u}),t.current):l.jsx("span",{ref:o=>o?e(o):void 0})},C=({children:a,containerRef:u,appendToParentPortal:s})=>{const e=u.current,t=e??(typeof window<"u"?document.body:void 0),r=c.useMemo(()=>{if(!e)return;const{ownerDocument:o}=e,n=o.createElement("div");return n&&(n.className="ui-portal"),n},[e]),[,i]=c.useState({});return f(()=>i({}),[]),f(()=>{if(!(!r||!t))return t.appendChild(r),()=>{t.removeChild(r)}},[r,t]),t&&r?p.createPortal(l.jsx(x,{value:s?r:null,children:a}),r):null};export{d as P};
