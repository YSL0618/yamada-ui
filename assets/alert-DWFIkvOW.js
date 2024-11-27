import{j as c}from"./jsx-runtime-CfatFE5O.js";import{W as y,I as w,C}from"./icon-DDeGQYl6.js";import{L as T}from"./loading-C7VoLX3j.js";import{y as b,b as m,c as _}from"./factory-Dfrbb1EY.js";import{f}from"./forward-ref-D13m8o2p.js";import{u as x,o as D}from"./theme-provider-DSx3k1bh.js";import{a as P}from"./use-component-style-fOirb5M1.js";const S={error:{colorScheme:"danger",icon:y},info:{colorScheme:"info",icon:w},loading:{colorScheme:"primary",icon:T},success:{colorScheme:"success",icon:C},warning:{colorScheme:"warning",icon:y}},[k,A]=b({name:"AlertContext",errorMessage:`useAlert returned is 'undefined'. Seems you forgot to wrap the components in "<Alert />" `}),L=(o,e)=>{var s;return((s=e==null?void 0:e[o])==null?void 0:s.colorScheme)??S[o].colorScheme},M=(o,e)=>{var s;return((s=e==null?void 0:e[o])==null?void 0:s.icon)??S[o].icon},I=f(({colorScheme:o,status:e="info",...s},t)=>{var h,g;const{theme:r}=x(),n=((g=(h=r.__config)==null?void 0:h.alert)==null?void 0:g.statuses)??{};o??(o=L(e,n));const[i,p]=P("Alert",{...s,colorScheme:o}),{className:d,children:u,...l}=D(p),a={alignItems:"center",display:"flex",overflow:"hidden",position:"relative",w:"100%",...i.container};return c.jsx(k,{value:{status:e,styles:i},children:c.jsx(m.div,{ref:t,className:_("ui-alert",d),role:"alert",__css:a,...l,children:u})})});I.displayName="Alert";I.__ui__="Alert";const N=({className:o,variant:e="oval",children:s,...t})=>{var l,a;const{status:r,styles:n}=A(),{theme:i}=x(),p=((a=(l=i.__config)==null?void 0:l.alert)==null?void 0:a.statuses)??{},d=M(r,p),u={...n.icon,...r==="loading"?n.loading:{}};return c.jsx(m.span,{className:_("ui-alert__icon",o),display:"inherit",__css:u,...t,children:s||c.jsx(d,{...r==="loading"?{variant:e,color:"currentcolor"}:{boxSize:"100%"}})})};N.displayName="AlertIcon";N.__ui__="AlertIcon";const j=f(({className:o,...e},s)=>{const{styles:t}=A(),r={display:"block",...t.title};return c.jsx(m.p,{ref:s,className:_("ui-alert__title",o),__css:r,...e})});j.displayName="AlertTitle";j.__ui__="AlertTitle";const v=f(({className:o,...e},s)=>{const{styles:t}=A(),r={...t.description};return c.jsx(m.span,{ref:s,className:_("ui-alert__desc",o),__css:r,...e})});v.displayName="AlertDescription";v.__ui__="AlertDescription";export{I as A,N as a,j as b,v as c};
