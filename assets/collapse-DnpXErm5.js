import{j as f}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as x}from"./index-BwDkhjyp.js";import{A as I}from"./index-CSNxn7VS.js";import{M as _}from"./motion-CVEUpyyH.js";import{M as m,a as P,t as R}from"./utils-8zXyhOQf.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{c as b,P as k}from"./factory-DqlmaKnk.js";const B=e=>e!=null&&parseFloat(e.toString())>0,C={enter:({animationOpacity:e,endingHeight:t,transition:o,transitionEnd:a,delay:c,duration:r,enter:s}={})=>({...e?{opacity:1}:{},height:t,transition:P(o==null?void 0:o.enter)(c,r),transitionEnd:a==null?void 0:a.enter,...s}),exit:({animationOpacity:e,startingHeight:t,transition:o,transitionEnd:a,delay:c,duration:r,exit:s}={})=>({...e?{opacity:B(t)?1:0}:{},height:t,transition:R(o==null?void 0:o.exit)(c,r),transitionEnd:a==null?void 0:a.exit,...s})},F={initial:"exit",animate:"enter",exit:"exit",variants:C},L=T(({unmountOnExit:e,isOpen:t,animationOpacity:o=!0,startingHeight:a=0,endingHeight:c="auto",transition:r,transitionEnd:s,delay:i,duration:l,className:u,style:g,__css:h,...y},S)=>{const[N,w]=x.useState(!1);x.useEffect(()=>{k()&&w(!0)},[]);const M=parseFloat(a.toString())>0,j=t||e?"enter":"exit";t=e?t:!0,r=N?r??{enter:{height:{duration:l??.3,ease:m.ease},opacity:{duration:l??.4,ease:m.ease}},exit:{height:{duration:l??.3,ease:m.ease},opacity:{duration:l??.4,ease:m.ease}}}:{enter:{duration:0}},s=e?s:{...s,exit:{...s==null?void 0:s.exit,display:M?"block":"none"}};const p={animationOpacity:o,startingHeight:a,endingHeight:c,transition:r,transitionEnd:s,delay:i,duration:l},A={w:"100%",...h};return f.jsx(I,{initial:!1,custom:p,children:t?f.jsx(_,{ref:S,className:b("ui-collapse",u),...y,...F,custom:p,animate:j,initial:e?"exit":!1,__css:A,style:{overflow:"hidden",display:"block",...g}}):null})});export{L as C};
