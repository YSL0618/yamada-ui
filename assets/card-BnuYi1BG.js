import{j as o}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{l as y,b as n,c}from"./factory-DqlmaKnk.js";import{f as i}from"./forward-ref-BmTAT9U5.js";import{a as p}from"./use-component-style-C3e1SZSW.js";import{o as C}from"./theme-provider-DKpED47L.js";const[_,l]=y({name:"CardContext",errorMessage:`useCard returned is 'undefined'. Seems you forgot to wrap the components in "<Card />" `}),w=i((e,t)=>{const[s,a]=p("Card",e),{className:r,direction:d="column",justify:m,align:f,...u}=C(a),x={display:"flex",flexDirection:d,justifyContent:m,alignItems:f,wordWrap:"break-word",...s.container};return o.jsx(_,{value:s,children:o.jsx(n.article,{ref:t,className:c("ui-card",r),__css:x,...u})})}),I=i(({className:e,...t},s)=>{const r={display:"flex",justifyContent:"flex-start",alignItems:"center",...l().header};return o.jsx(n.header,{ref:s,className:c("ui-card__header",e),__css:r,...t})}),v=i(({className:e,...t},s)=>{const r={display:"flex",flexDirection:"column",alignItems:"flex-start",...l().body};return o.jsx(n.div,{ref:s,className:c("ui-card__body",e),__css:r,...t})}),P=i(({className:e,...t},s)=>{const r={display:"flex",justifyContent:"flex-start",alignItems:"center",...l().footer};return o.jsx(n.footer,{ref:s,className:c("ui-card__footer",e),__css:r,...t})});export{w as C,I as a,v as b,P as c};
