import{j as u}from"./jsx-runtime-CfatFE5O.js";import{r as p}from"./index-ClcD9ViR.js";import{u as N,s as h}from"./use-image-IJDzTt_W.js";import{f as P}from"./forward-ref-D13m8o2p.js";import{u as w}from"./use-component-style-5HWcAXul.js";import{o as z}from"./theme-provider-C-TvIt_J.js";import{b,c as I}from"./factory-Db31n_eg.js";const d=P((o,m)=>{const[t,{size:x,..._}]=w("Image",o);let{src:k,srcSet:j,className:i,boxSize:r,crossOrigin:y,fallback:a,fallbackStrategy:E="beforeLoadOrError",fit:l,ignoreFallback:s,loading:c,referrerPolicy:F,onError:n,onLoad:f,...e}=z(_);r??(r=x),s=c!=null||s||!a;const g=p.useMemo(()=>({...t,boxSize:r,objectFit:l}),[t,r,l]),S=N({...o,ignoreFallback:s});return h(S,E)?p.isValidElement(a)?a:u.jsx(b.img,{ref:m,src:a,className:I("ui-image--fallback",i),__css:g,...s?{...e,onError:n,onLoad:f}:e}):u.jsx(b.img,{ref:m,src:k,srcSet:j,className:I("ui-image",i),crossOrigin:y,loading:c,referrerPolicy:F,__css:g,...s?{...e,onError:n,onLoad:f}:e})});d.displayName="Image";d.__ui__="Image";export{d as I};
