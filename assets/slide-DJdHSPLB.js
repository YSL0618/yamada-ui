import{j as u}from"./extends-CwFRzn3r.js";import{u as P}from"./index-BukEwq1c.js";import{A as R}from"./index-CGy0U2a3.js";import{b as a,t as T,a as j}from"./utils-Bot02Mqw.js";import{m as y}from"./forward-ref-scR1bmHx.js";import{u as I}from"./use-component-style-DhRiPQIp.js";import{o as w}from"./theme-provider-Cr3m0r8P.js";import{m as b}from"./factory-CWrzRNZL.js";import{c as v}from"./factory-DBrfn43w.js";const l=(s="right")=>{switch(s){case"right":return a.slideRight;case"left":return a.slideLeft;case"bottom":return a.slideDown;case"top":return a.slideUp}},V={enter:({delay:s,duration:r,enter:o,placement:i,transition:e,transitionEnd:t}={})=>({...l(i).enter,transition:T(e==null?void 0:e.enter)(s,r),transitionEnd:t==null?void 0:t.enter,...o}),exit:({delay:s,duration:r,exit:o,placement:i,transition:e,transitionEnd:t}={})=>({...l(i).exit,transition:j(e==null?void 0:e.exit)(s,r),transitionEnd:t==null?void 0:t.exit,...o})},C={animate:"enter",exit:"exit",initial:"exit",variants:V},x=y((s,r)=>{const[o,i]=I("Slide",s);let{className:e,delay:t,duration:d={enter:.4,exit:.3},isOpen:m,placement:f,transition:_,transitionEnd:S,unmountOnExit:c,__css:N,...h}=w(i);const g=m||c?"enter":"exit",n=P(f),p={delay:t,duration:d,placement:n,transition:_,transitionEnd:S};m=c?m&&c:!0;const{position:A}=l(n),O={...o,...N,...A};return u.jsx(R,{custom:p,children:m?u.jsx(b.div,{ref:r,className:v("ui-slide",e),custom:p,...C,animate:g,__css:O,...h}):null})});x.displayName="Slide";x.__ui__="Slide";export{x as S};
