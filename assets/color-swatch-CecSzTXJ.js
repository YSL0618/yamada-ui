import{j as a}from"./jsx-runtime-X2b_N9AH.js";import{f as x}from"./forward-ref-Dr5Hqd9a.js";import{a as b}from"./use-component-style-C0MoE1pt.js";import{o as g}from"./theme-provider-zwL-D6eR.js";import{b as s,c as v}from"./factory-Bf0a1C4O.js";const k=(r,o)=>{let e=[{bgImage:"linear-gradient(45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--ui-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--ui-checkers) 75%), linear-gradient(-45deg, var(--ui-body) 75%, var(--ui-checkers) 75%)",bgSize:"8px 8px",bgPosition:"0 0, 0 4px, 4px -4px, -4px 0",var:[{__prefix:"ui",name:"checkers",token:"colors",value:["blackAlpha.300","whiteAlpha.300"]},{__prefix:"ui",name:"body",token:"colors",value:["whiteAlpha.500","blackAlpha.500"]}]},{background:r}];return o&&(e=[...e,{boxShadow:"rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset"}]),e},C=x((r,o)=>{const[e,i]=b("ColorSwatch",r),{className:l,color:n="#ffffff00",withShadow:c=!0,overlays:p=k(n,c),isRounded:t,__css:d,...f}=g(i),u={position:"relative",_before:{content:'""',display:"block",h:0,pb:"100%"},"& > *":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",w:"100%",h:"100%"},...e.container,...d};return a.jsx(s.div,{ref:o,className:v("ui-color-swatch",l),...t?{rounded:"fallback(full, 9999px)"}:{},__css:u,...f,children:a.jsx(s.div,{...t?{rounded:"fallback(full, 9999px)"}:{},children:p.map((h,m)=>a.jsx(s.div,{__css:{position:"absolute",top:0,left:0,right:0,bottom:0,...e.overlay},...t?{rounded:"fallback(full, 9999px)"}:{},...h},m))})})});export{C};
