import{j as s}from"./jsx-runtime-CfatFE5O.js";import{f as x}from"./forward-ref-D13m8o2p.js";import{a as w}from"./use-component-style-fOirb5M1.js";import{o as k}from"./theme-provider-DSx3k1bh.js";import{b as l,c as v,a0 as y}from"./factory-Dfrbb1EY.js";const _=(r,a)=>{let e=[{bgImage:"linear-gradient(45deg, $checkers 25%, transparent 25%), linear-gradient(-45deg, $checkers 25%, transparent 25%), linear-gradient(45deg, transparent 75%, $checkers 75%), linear-gradient(-45deg, $body 75%, $checkers 75%)",bgPosition:"0 0, 0 4px, 4px -4px, -4px 0",bgSize:"8px 8px",vars:[{name:"checkers",token:"colors",value:["blackAlpha.300","whiteAlpha.300"]},{name:"body",token:"colors",value:["whiteAlpha.500","blackAlpha.500"]}]},{background:r}];return a&&(e=[...e,{boxShadow:"rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset"}]),e},i=x((r,a)=>{const[e,n]=w("ColorSwatch",r);let{className:c,color:t="#ffffff00",fullRounded:o,isRounded:p,withShadow:d=!0,overlays:f=_(t,d),__css:h,...m}=k(n);o??(o=p);const u={"& > *":{alignItems:"center",bottom:"0",display:"flex",h:"100%",justifyContent:"center",left:"0",overflow:"hidden",position:"absolute",right:"0",top:"0",w:"100%"},position:"relative",_before:{content:'""',display:"block",h:0,pb:"100%"},...e.container,...h};return s.jsx(l.div,{ref:a,className:v("ui-color-swatch",c),"aria-label":y(t)?t:void 0,"aria-roledescription":"color swatch",role:"img",...o?{rounded:"fallback(full, 9999px)"}:{},__css:u,...m,children:s.jsx(l.div,{...o?{rounded:"fallback(full, 9999px)"}:{},children:f.map((b,g)=>s.jsx(l.div,{__css:{bottom:0,left:0,position:"absolute",right:0,top:0,...e.overlay},...o?{rounded:"fallback(full, 9999px)"}:{},...b},g))})})});i.displayName="ColorSwatch";i.__ui__="ColorSwatch";export{i as C};
