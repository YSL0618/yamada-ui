import{j as o}from"./jsx-runtime-CfatFE5O.js";import{u as C}from"./use-color-slider-CCbeuTKn.js";import{p as O,b as a,c as l}from"./factory-Db31n_eg.js";import{f as n}from"./forward-ref-D13m8o2p.js";import{a as M}from"./use-component-style-5HWcAXul.js";import{o as R}from"./theme-provider-C-TvIt_J.js";const[$,c]=O({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<HueSlider />" `}),A=(s,t,r)=>{let e=[{bgGradient:`linear(to-r, ${[...Array(7)].map((i,u)=>`hsl(${Math.round(s+(t-s)/6*u)}, 100%, 50%)`).join(", ")})`}];return r&&(e=[...e,{boxShadow:"rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset"}]),e},h=n((s,t)=>{const[r,e]=M("HueSlider",s),{className:i,max:u=360,min:_=0,withShadow:S=!0,overlays:x=A(_,u,S),inputProps:y,thumbProps:H,trackProps:v,__css:b,...f}=R(e),{getContainerProps:j,getInputProps:g,getThumbProps:P,getTrackProps:N}=C({max:u,min:_,step:1,...f,channel:"hue"}),T={position:"relative",...r.container,...b};return o.jsx($,{value:{styles:r},children:o.jsxs(a.div,{className:l("ui-hue-slider",i),__css:T,...j(),children:[o.jsx(a.input,{...g(y,t)}),x.map((k,w)=>o.jsx(d,{...k},w)),o.jsx(m,{...N(v),children:o.jsx(p,{...P(H)})})]})})});h.displayName="HueSlider";h.__ui__="HueSlider";const d=n(({className:s,...t},r)=>{const{styles:e}=c(),i={bottom:0,left:0,position:"absolute",right:0,top:0,...e.overlay};return o.jsx(a.div,{ref:r,className:l("ui-hue-slider__overlay",s),__css:i,...t})});d.displayName="HueSliderOverlay";d.__ui__="HueSliderOverlay";const m=n(({className:s,...t},r)=>{const{styles:e}=c(),i={h:"100%",position:"relative",w:"100%",...e.track};return o.jsx(a.div,{ref:r,className:l("ui-hue-slider__track",s),__css:i,...t})});m.displayName="HueSliderTrack";m.__ui__="HueSliderTrack";const p=n(({className:s,...t},r)=>{const{styles:e}=c(),i={...e.thumb};return o.jsx(a.div,{ref:r,className:l("ui-hue-slider__thumb",s),__css:i,...t})});p.displayName="HueSliderThumb";p.__ui__="HueSliderThumb";export{h as H};
