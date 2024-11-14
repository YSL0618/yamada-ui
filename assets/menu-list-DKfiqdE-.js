import{j as s}from"./jsx-runtime-CfatFE5O.js";import{u as ue}from"./index-BcE809qD.js";import{r as e}from"./index-ClcD9ViR.js";import{P as ie,b as le}from"./popover-trigger-C0a8uwwS.js";import{a as me}from"./use-component-style-CLSKeq_H.js";import{o as fe}from"./theme-provider-CNI9L2WW.js";import{p as H,f as ee,X as de,$ as G,a as ne,h as N,an as xe,b as T,c as K,d as pe,aq as _e}from"./factory-COau3w21.js";import{u as Me}from"./index-C58se0b8.js";import{f as P}from"./forward-ref-D13m8o2p.js";import{c as Ce}from"./index-Btt-sfjQ.js";const{DescendantsContextProvider:ye,useDescendant:Ie,useDescendants:be,useDescendantsContext:ke}=Ce(),[ve,z]=H({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),[Ve,he]=H({name:"ContextMenuContext",strict:!1}),[Re,we]=H({name:"UpstreamMenuContext",strict:!1}),[Fe,te]=H({name:"UpstreamMenuItemContext",strict:!1}),je=o=>{const{styles:i}=he()??{},[d,r]=me("Menu",o,{isProcessSkip:!!i,styles:i});let{closeOnBlur:l,closeOnSelect:v=!0,duration:M=.2,initialFocusRef:c,offset:C,placement:x,onClose:I,onOpen:b,...S}=fe(r);const{relatedRef:m,onDownstreamCloseMapRef:y,onUpstreamClose:h}=we()??{},{hasDownstreamRef:a,setDownstreamOpen:R}=te()??{},f=!!m;f?(x??(x="right-start"),C??(C=[-8,8]),l??(l=!1)):x??(x="bottom-start");const p=be(),[j,k]=e.useState(-1),n=e.useRef(null),V=e.useRef(null),_=e.useRef(new Set([])),E=e.useRef(null),L=e.useRef(new Map),A=e.useCallback(()=>{requestAnimationFrame(()=>{var t;return(t=n.current)==null?void 0:t.focus({preventScroll:!1})})},[]),q=e.useCallback(()=>{const t=setTimeout(()=>{if(c)return;const g=p.enabledFirstValue();g&&k(g.index)});_.current.add(t)},[p,c]),X=e.useCallback(()=>{const t=setTimeout(()=>{if(c)return;const g=p.enabledLastValue();g&&k(g.index)});_.current.add(t)},[p,c]),w=e.useCallback(()=>{b==null||b(),f||A()},[b,f,A]),$=e.useCallback(()=>{I==null||I();for(const t of L.current.values())t()},[I]),D=e.useId(),{isOpen:F,onClose:O,onOpen:B}=ue({...o,onClose:$,onOpen:w});return e.useEffect(()=>{const t=y==null?void 0:y.current;return t==null||t.set(D,O),()=>{t==null||t.delete(D)}},[D,O,y]),e.useEffect(()=>{R&&R(F)},[R,F]),e.useEffect(()=>(a&&(a.current=!0),()=>{a&&(a.current=!1)})),ee(()=>{F||k(-1)},[F]),de(()=>{_.current.forEach(t=>clearTimeout(t)),_.current.clear()}),s.jsx(ye,{value:p,children:s.jsx(Re,{value:{relatedRef:n,onDownstreamCloseMapRef:L,onUpstreamClose:G(h,O)},children:s.jsx(ve,{value:{buttonRef:V,closeOnSelect:v,focusedIndex:j,isNested:f,isOpen:F,menuRef:n,requestAnimationFrameId:E,setFocusedIndex:k,styles:d,onClose:O,onFocusFirstItem:q,onFocusLastItem:X,onOpen:B,onUpstreamClose:h},children:s.jsx(ie,{trigger:f?"hover":"click",...S,closeOnBlur:l,closeOnButton:!1,duration:M,initialFocusRef:c,isOpen:F,offset:C,placement:x,relatedRef:m,onClose:O,onOpen:B})})})})};je.__ui__="Menu";const De=o=>{var i;return _e(o)&&!!((i=o.getAttribute("role"))!=null&&i.startsWith("menuitem"))},J=P(({id:o,className:i,children:d,closeOnSelect:r,command:l,icon:v,isDisabled:M,isFocusable:c,...C},x)=>{var Y;const{closeOnSelect:I,focusedIndex:b,isNested:S,isOpen:m,menuRef:y,requestAnimationFrameId:h,setFocusedIndex:a,styles:R,onClose:f,onUpstreamClose:p}=z(),{onUpstreamRestoreFocus:j}=te()??{},[k,n]=e.useState(!1),V=e.useId(),_=e.useRef(null),E=e.useRef(!1),L=e.useRef(()=>{});o??(o=V);const A=M&&!c,q=(Y=_.current)==null?void 0:Y.getAttribute("type"),X=q?q==="checkbox"?"menuitemcheckbox":"menuitemradio":"menuitem",{index:w,register:$}=Ie({disabled:A}),D=w===b,F=e.useCallback(()=>{M||a(w)},[w,M,a]),O=e.useCallback(()=>{M||a(-1)},[a,M]),B=e.useCallback(u=>{if(!De(u.currentTarget))return;const U=E.current;(r??(!U&&I))&&(f(),p==null||p())},[r,I,f,p]),t=e.useCallback(()=>{a(w)},[a,w]),g=e.useCallback(()=>{var u;(u=_.current)==null||u.focus(),a(w)},[a,w]),ce=e.useCallback(u=>{u.key===" "&&(u.key=u.code);const Z={ArrowLeft:S?G(j,f):void 0,Space:E.current?void 0:G(p,f)}[u.key];Z&&(u.preventDefault(),u.stopPropagation(),Z())},[S,j,f,p]),re=Me({clickOnSpace:!1,focusOnClick:!1,...C,ref:ne($,_,x),isDisabled:M,isFocusable:c,onClick:N(C.onClick,B),onFocus:N(C.onFocus,t),onKeyDown:N(C.onKeyDown,ce,L.current),onMouseLeave:N(C.onMouseLeave,O),onMouseOver:N(C.onMouseOver,F)});ee(()=>{if(!m)return;const u=h.current;return D&&!A&&_.current?(u&&cancelAnimationFrame(u),h.current=requestAnimationFrame(()=>{var U;(U=_.current)==null||U.focus({preventScroll:!0}),h.current=null})):y.current&&!xe(y.current)&&y.current.focus({preventScroll:!0}),()=>{u&&cancelAnimationFrame(u)}},[D,A,y,m]),d=v||l?s.jsx(T.span,{style:{flex:1},children:d}):d;const ae={alignItems:"center",color:"inherit",display:"flex",flex:"0 0 auto",gap:"0.75rem",outline:0,textAlign:"start",textDecoration:"none",userSelect:"none",width:"100%",...R.item};return s.jsx(Fe,{value:{hasDownstreamRef:E,setDownstreamOpen:n,onKeyDownRef:L,onUpstreamRestoreFocus:g},children:s.jsxs(T.div,{id:o,className:K("ui-menu__item",i),"data-focus":pe(k),__css:ae,...re,role:X,tabIndex:!k&&D?0:-1,children:[v?s.jsx(W,{children:v}):null,d,l?s.jsx(Q,{children:l}):null]})})});J.displayName="MenuItem";J.__ui__="MenuItem";const se=P(({className:o,children:i,closeOnSelect:d=!1,icon:r,isChecked:l,...v},M)=>s.jsxs(J,{ref:M,className:K("ui-menu__item--option",o),"aria-checked":l,closeOnSelect:d,...v,children:[r!==null?s.jsx(W,{opacity:l?1:0,children:r||s.jsx(Oe,{})}):null,i]}));se.displayName="MenuOptionItem";se.__ui__="MenuOptionItem";const W=P(({className:o,...i},d)=>{const{styles:r}=z(),l={alignItems:"center",display:"inline-flex",flexShrink:0,fontSize:"0.85em",justifyContent:"center",...r.icon};return s.jsx(T.span,{ref:d,className:K("ui-menu__item__icon",o),"aria-hidden":!0,__css:l,...i})});W.displayName="MenuIcon";W.__ui__="MenuIcon";const Q=P(({className:o,...i},d)=>{const{styles:r}=z(),l={...r.command};return s.jsx(T.span,{ref:d,className:K("ui-menu__item__command",o),__css:l,...i})});Q.displayName="MenuCommand";Q.__ui__="MenuCommand";const Oe=()=>s.jsx("svg",{height:"1em",viewBox:"0 0 14 14",width:"1em",children:s.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),oe=P(({id:o,className:i,children:d,contentProps:r,...l},v)=>{var j,k;const{buttonRef:M,focusedIndex:c,menuRef:C,setFocusedIndex:x,styles:I,onClose:b}=z(),S=e.useId();o??(o=S);const m=ke(),y=(j=m.value(c))==null?void 0:j.node.id,h=e.useCallback(()=>{const n=m.enabledNextValue(c);n&&x(n.index)},[m,c,x]),a=e.useCallback(()=>{const n=m.enabledPrevValue(c);n&&x(n.index)},[m,c,x]),R=e.useCallback(()=>{const n=m.enabledFirstValue();n&&x(n.index)},[m,x]),f=e.useCallback(()=>{const n=m.enabledLastValue();n&&x(n.index)},[m,x]),p=e.useCallback(n=>{const _={ArrowDown:c===-1?R:h,ArrowUp:c===-1?f:a,End:f,Escape:b,Home:R,Tab:b}[n.key];_&&(n.preventDefault(),_(n))},[c,b,R,f,h,a]);return s.jsx(le,{id:o,as:"div",className:"ui-menu__content","aria-activedescendant":y,"aria-labelledby":(k=M.current)==null?void 0:k.id,role:"menu",__css:{...I.content},...r,onKeyDown:N(r==null?void 0:r.onKeyDown,p),children:s.jsx(T.div,{ref:ne(C,v),className:K("ui-menu__list",i),tabIndex:-1,__css:{...I.list},...l,children:d})})});oe.displayName="MenuList";oe.__ui__="MenuList";export{Ve as C,W as M,z as a,je as b,oe as c,J as d,he as e,se as f,te as u};
