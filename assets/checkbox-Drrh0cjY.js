import{j as t}from"./jsx-runtime-CfatFE5O.js";import{t as re}from"./index-CRS5qAAq.js";import{r as o}from"./index-ClcD9ViR.js";import{p as ie,$ as le,b as D,c as ue,Y as de,k as V,u as G,f as he,a as ee,d as m,h as i}from"./factory-COau3w21.js";import{a as pe,u as fe,f as ke}from"./form-control-Co-DCdKP.js";import{A as me}from"./index-r0TXmcNt.js";import{a as xe}from"./use-component-style-CLSKeq_H.js";import{o as Ce}from"./theme-provider-CNI9L2WW.js";import{m as T}from"./factory-ep9rrzy9.js";const[Fe,be]=ie({name:"CheckboxGroupContext",strict:!1}),ye=({id:n,...j})=>{const b=o.useId();n??(n=b);const{id:R,name:l,defaultIsChecked:f,isChecked:h,isIndeterminate:u,tabIndex:w,value:F,onChange:_,...S}=fe({id:n,...j}),[{"aria-readonly":N,disabled:d,readOnly:x,required:M,onBlur:B,onFocus:L,...s},q]=de(S,ke),[v,g]=o.useState(!1),[p,y]=o.useState(!1),[I,A]=o.useState(!1),[P,k]=o.useState(!1),a=o.useRef(null),[E,O]=o.useState(!0),[se,K]=o.useState(!!f),U=h!==void 0,c=U?h:se,Y=V(e=>{if(x||d){e.preventDefault();return}U||K(!c||u?!0:e.target.checked),_==null||_(e)},[x,d,U,c,u]),$=V(L),z=V(B),J=o.useCallback(({key:e})=>{e===" "&&k(!0)},[k]),Q=o.useCallback(({key:e})=>{e===" "&&k(!1)},[k]);o.useEffect(()=>re(g),[]),G(()=>{a.current&&(a.current.indeterminate=!!u)},[u]),he(()=>{d&&y(!1)},[d,y]),G(()=>{var e;(e=a.current)!=null&&e.form&&(a.current.form.onreset=()=>K(!!f))},[]),G(()=>{a.current&&a.current.checked!==c&&K(a.current.checked)},[a.current]);const te=o.useCallback((e={},C=null)=>({...s,...e,ref:ee(C,r=>{r&&O(r.tagName==="LABEL")}),"data-checked":m(c),onClick:i(e.onClick,()=>{var r;E||((r=a.current)==null||r.click(),requestAnimationFrame(()=>{var Z;return(Z=a.current)==null?void 0:Z.focus()}))})}),[c,E,s]),ne=o.useCallback((e={},C=null)=>({...s,...e,ref:C,"aria-hidden":!0,"data-active":m(P),"data-checked":m(c),"data-focus":m(p),"data-focus-visible":m(p&&v),"data-hover":m(I),"data-indeterminate":m(u),onMouseDown:i(e.onMouseDown,r=>{p&&r.preventDefault(),k(!0)}),onMouseEnter:i(e.onMouseEnter,()=>A(!0)),onMouseLeave:i(e.onMouseLeave,()=>A(!1)),onMouseUp:i(e.onMouseUp,()=>k(!1))}),[P,c,p,I,v,u,s]),ae=o.useCallback((e={},C=null)=>({...s,...e,id:n,ref:ee(a,C),type:"checkbox",name:l,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-checked":u?"mixed":c,checked:c,disabled:d,readOnly:x,required:M,tabIndex:w,value:F,onBlur:i(e.onBlur,z,()=>y(!1)),onChange:i(e.onChange,Y),onFocus:i(e.onFocus,$,()=>y(!0)),onKeyDown:i(e.onKeyDown,J),onKeyUp:i(e.onKeyUp,Q)}),[u,s,n,l,F,w,M,d,x,c,Y,z,$,J,Q]),ce=o.useCallback((e={},C=null)=>({...s,...e,ref:C,"data-checked":m(c),onMouseDown:i(e.onMouseDown,r=>{r.preventDefault(),r.stopPropagation()}),onTouchStart:i(e.onTouchStart,r=>{r.preventDefault(),r.stopPropagation()})}),[c,s]);return{isActive:P,isChecked:c,isFocused:p,isFocusVisible:v,isHovered:I,isIndeterminate:u,props:q,getContainerProps:te,getIconProps:ne,getInputProps:ae,getLabelProps:ce}},oe=o.forwardRef((n,j)=>{const b=be(),{value:R,...l}={...b},f=pe(n),[h,u]=xe("Checkbox",{...l,...n}),{className:w,children:F,gap:_="0.5rem",isDisabled:S=l.isDisabled??f.isDisabled,isInvalid:N=l.isInvalid??f.isInvalid,isReadOnly:d=l.isReadOnly??f.isReadOnly,isRequired:x=l.isRequired??f.isRequired,iconProps:M,inputProps:B,labelProps:L,...s}=Ce(u),q=R&&s.value?R.includes(s.value):s.isChecked,v=l.onChange&&s.value?le(l.onChange,s.onChange):s.onChange,{isChecked:g,isIndeterminate:p,props:y,getContainerProps:I,getIconProps:A,getInputProps:P,getLabelProps:k}=ye({...s,isChecked:q,isDisabled:S,isInvalid:N,isReadOnly:d,isRequired:x,onChange:v}),{children:a,...E}={...M},O=o.cloneElement(a??t.jsx(X,{}),{isChecked:g,isDisabled:S,isIndeterminate:p,isInvalid:N,isReadOnly:d,isRequired:x,__css:{opacity:g||p?1:0,transform:g||p?"scale(1)":"scale(0.95)",transitionDuration:"normal",transitionProperty:"transform"}});return t.jsxs(D.label,{className:ue("ui-checkbox",w),...I(),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:_,position:"relative",verticalAlign:"top",...h.container},...y,children:[t.jsx(D.input,{className:"ui-checkbox__input",...P(B,j)}),t.jsx(D.span,{className:"ui-checkbox__icon",__css:{display:"inline-block",pointerEvents:d?"none":void 0,position:"relative",userSelect:"none",...h.icon},...A(E),children:O}),t.jsx(D.span,{className:"ui-checkbox__label",__css:{...h.label},...k(L),children:F})]})});oe.displayName="Checkbox";oe.__ui__="Checkbox";const X=({isChecked:n,isDisabled:j,isIndeterminate:b,isInvalid:R,isReadOnly:l,isRequired:f,...h})=>t.jsx(me,{initial:!1,children:b||n?t.jsx(D.div,{__css:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},children:t.jsx(T.div,{style:{alignItems:"center",display:"flex",justifyContent:"center"},animate:"checked",exit:"unchecked",initial:"unchecked",variants:{checked:{scale:1},unchecked:{scale:.5}},children:b?t.jsx(W,{...h}):t.jsx(H,{...h})})}):null});X.displayName="CheckboxIcon";X.__ui__="CheckboxIcon";const H=n=>t.jsx(T.svg,{style:{fill:"none",stroke:"currentColor",strokeDasharray:16,strokeWidth:2},variants:{checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}},unchecked:{opacity:0,strokeDashoffset:16}},viewBox:"0 0 12 10",width:"1.2em",...n,children:t.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})});H.displayName="CheckboxCheckIcon";H.__ui__="CheckboxCheckIcon";const W=n=>t.jsx(T.svg,{style:{stroke:"currentColor",strokeWidth:4},variants:{checked:{opacity:1,scaleX:1,transition:{opacity:{duration:.02},scaleX:{duration:0}}},unchecked:{opacity:0,scaleX:.65}},viewBox:"0 0 24 24",width:"1.2em",...n,children:t.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})});W.displayName="CheckboxIndeterminateIcon";W.__ui__="CheckboxIndeterminateIcon";export{oe as C,Fe as a,ye as u};
