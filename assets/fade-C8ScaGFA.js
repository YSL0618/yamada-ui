import{j as p}from"./jsx-runtime-CfatFE5O.js";import{A as F}from"./index-r0TXmcNt.js";import{m as _}from"./forward-ref-2BKBy0Yi.js";import{u as j}from"./use-component-style-5HWcAXul.js";import{o as P}from"./theme-provider-C-TvIt_J.js";import{m as N}from"./factory-BRZ9AYsk.js";import{c as h}from"./factory-Db31n_eg.js";import{t as v,a as A}from"./utils-KhqytcjU.js";const O={enter:({delay:o,duration:m,enter:r,transition:e,transitionEnd:t}={})=>({opacity:1,transition:v(e==null?void 0:e.enter)(o,m),transitionEnd:t==null?void 0:t.enter,...r}),exit:({delay:o,duration:m,exit:r,transition:e,transitionEnd:t}={})=>({opacity:0,transition:A(e==null?void 0:e.exit)(o,m),transitionEnd:t==null?void 0:t.exit,...r})},R={animate:"enter",exit:"exit",initial:"exit",variants:O},c=_((o,m)=>{const[r,e]=j("Fade",o);let{className:t,delay:x,duration:f,isOpen:u,open:s,transition:l,transitionEnd:n,unmountOnExit:a,...d}=P(e);s??(s=u);const y=s||a?"enter":"exit",i={delay:x,duration:f,transition:l,transitionEnd:n};return s=a?s&&a:!0,p.jsx(F,{custom:i,children:s?p.jsx(N.div,{ref:m,className:h("ui-fade",t),custom:i,...R,animate:y,__css:r,...d}):null})});c.displayName="Fade";c.__ui__="Fade";export{c as F,R as f};
