import{j as l}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{r as p}from"./index-ZuzByk-F.js";import{p as P,u as d}from"./factory-COau3w21.js";const[f,v]=P({name:"PortalContext",strict:!1}),j=({appendToParentPortal:a,children:s,containerRef:r})=>{const o=r.current,t=o??(typeof window<"u"?document.body:void 0),e=c.useMemo(()=>{if(!o)return;const{ownerDocument:n}=o,u=n.createElement("div");return u.className="ui-portal",u},[o]),[,i]=c.useState({});return d(()=>i({}),[]),d(()=>{if(!(!e||!t))return t.appendChild(e),()=>{t.removeChild(e)}},[e,t]),t&&e?p.createPortal(l.jsx(f,{value:a?e:null,children:s}),e):null},C=({appendToParentPortal:a,children:s})=>{const[r,o]=c.useState(null),t=c.useRef(null),[,e]=c.useState({});c.useEffect(()=>e({}),[]);const i=v();return d(()=>{if(!r)return;const{ownerDocument:n}=r,u=a?i??n.body:n.body;t.current=n.createElement("div"),t.current.className="ui-portal",u.appendChild(t.current),e({});const m=t.current;return()=>{u.contains(m)&&u.removeChild(m)}},[r]),t.current?p.createPortal(l.jsx(f,{value:t.current,children:s}),t.current):l.jsx("span",{ref:n=>n?o(n):void 0})},x=({appendToParentPortal:a=!0,children:s,containerRef:r,isDisabled:o})=>o?s:r?l.jsx(j,{containerRef:r,appendToParentPortal:a,children:s}):l.jsx(C,{appendToParentPortal:a,children:s});x.displayName="Portal";x.__ui__="Portal";export{x as P};
