import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as C,a as j,M as K}from"./menu-list-DTSiS2Z2.js";import{a as k}from"./popover-trigger-D8n20qZW.js";import{a as F}from"./icon-BodRPJCf.js";import{f as x}from"./forward-ref-D13m8o2p.js";import{e as N,b as M,a as E,c as h,d as U,h as L,$ as m}from"./factory-COau3w21.js";const _=x(({id:t,as:n,className:s,children:a,...p},f)=>{const{onKeyDownRef:d,onUpstreamRestoreFocus:w}=C()??{},{buttonRef:R,isOpen:r,onClose:y,onFocusFirstItem:u,onFocusLastItem:I,onOpen:o}=j(),b=l.useId();t??(t=b);const g=l.useCallback(i=>{const c={ArrowDown:m(o,u),ArrowUp:m(o,I),Enter:m(o,u)}[i.key];c&&(i.preventDefault(),c())},[u,I,o]),A=l.useCallback(i=>{const c={ArrowLeft:r?m(w,y):void 0,ArrowRight:r?void 0:m(o,u)}[i.key];c&&(i.preventDefault(),c())},[r,o,u,w,y]);N(d,A);const B=l.useMemo(()=>n?M(n):O,[n]);return e.jsx(k,{children:e.jsx(B,{id:t,ref:E(R,f),className:h("ui-menu",s),"aria-expanded":r,"aria-haspopup":"menu",...p,"data-active":U(r),onKeyDown:L(p.onKeyDown,g),children:a})})});_.displayName="MenuButton";_.__ui__="MenuButton";const O=x((t,n)=>{const{styles:s}=j(),a={alignItems:"center",appearance:"none",display:"inline-flex",outline:0,...s.button};return e.jsx(M.button,{ref:n,__css:a,...t})}),D=x(({className:t,children:n,icon:s,iconProps:a,innerProps:p,...f},d)=>e.jsxs(_,{ref:d,className:h("ui-menu__item-button",t),flex:"1",...f,children:[e.jsx(M.span,{as:"span",flex:"1",...p,children:n}),e.jsx(K,{...a,children:s??e.jsx(F,{fontSize:"1.5em",transform:"rotate(-90deg)"})})]}));D.displayName="MenuItemButton";D.__ui__="MenuItemButton";export{_ as M,D as a};
