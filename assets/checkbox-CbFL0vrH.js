import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as f}from"./index-ClcD9ViR.js";import{y as u,a4 as F,b as r,c as L}from"./factory-Dfrbb1EY.js";import{u as T}from"./use-checkbox-DuFV5g_J.js";import{e as V}from"./form-control-C7lyVmHF.js";import{A as z}from"./index-r0TXmcNt.js";import{a as H}from"./use-component-style-fOirb5M1.js";import{o as J}from"./theme-provider-DSx3k1bh.js";import{m as h}from"./factory-Dgu6MzDY.js";const[ie,K]=u({name:"CheckboxGroupContext",strict:!1}),[te,re]=u({name:"CheckboxCardGroupContext",strict:!1}),[ae,ce]=u({name:"CheckboxCardContext",errorMessage:`useCheckboxCardContext returned is 'undefined'. Seems you forgot to wrap the components in "<CheckboxCard />"`}),v=f.forwardRef((o,m)=>{const a=K(),{value:c,...s}={...a},t=V(o),[i,I]=H("Checkbox",{...s,...o}),{className:g,children:P,gap:j="0.5rem",isDisabled:k=s.isDisabled??t.isDisabled,isInvalid:b=s.isInvalid??t.isInvalid,isReadOnly:_=s.isReadOnly??t.isReadOnly,isRequired:y=s.isRequired??t.isRequired,label:R,iconProps:D,inputProps:N,labelProps:w,...n}=J(I),G=c&&n.value?c.includes(n.value):n.isChecked,q=s.onChange&&n.value?F(s.onChange,n.onChange):n.onChange,{isChecked:l,isIndeterminate:d,props:O,getContainerProps:A,getIconProps:E,getInputProps:S,getLabelProps:X}=T({...n,isChecked:G,isDisabled:k,isInvalid:b,isReadOnly:_,isRequired:y,onChange:q}),{children:B,...M}={...D},W=f.cloneElement(B??e.jsx(p,{}),{isChecked:l,isDisabled:k,isIndeterminate:d,isInvalid:b,isReadOnly:_,isRequired:y,__css:{opacity:l||d?1:0,transform:l||d?"scale(1)":"scale(0.95)",transitionDuration:"normal",transitionProperty:"transform"}});return e.jsxs(r.label,{className:L("ui-checkbox",g),...A(),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:j,position:"relative",verticalAlign:"top",...i.container},...O,children:[e.jsx(r.input,{className:"ui-checkbox__input",...S(N,m)}),e.jsx(r.div,{className:"ui-checkbox__icon",__css:{display:"inline-block",position:"relative",userSelect:"none",...i.icon},...E(M),children:W}),e.jsx(r.span,{className:"ui-checkbox__label",__css:{...i.label},...X(w),children:P??R})]})});v.displayName="Checkbox";v.__ui__="Checkbox";const p=({isChecked:o,isDisabled:m,isIndeterminate:a,isInvalid:c,isReadOnly:s,isRequired:t,...i})=>e.jsx(z,{initial:!1,children:a||o?e.jsx(r.div,{__css:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},children:e.jsx(h.div,{style:{alignItems:"center",display:"flex",justifyContent:"center"},animate:"checked",exit:"unchecked",initial:"unchecked",variants:{checked:{scale:1},unchecked:{scale:.5}},children:a?e.jsx(C,{...i}):e.jsx(x,{...i})})}):null});p.displayName="CheckboxIcon";p.__ui__="CheckboxIcon";const x=o=>e.jsx(h.svg,{style:{fill:"none",stroke:"currentColor",strokeDasharray:16,strokeWidth:2},variants:{checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}},unchecked:{opacity:0,strokeDashoffset:16}},viewBox:"0 0 12 10",width:"1.2em",...o,children:e.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})});x.displayName="CheckboxCheckIcon";x.__ui__="CheckboxCheckIcon";const C=o=>e.jsx(h.svg,{style:{stroke:"currentColor",strokeWidth:4},variants:{checked:{opacity:1,scaleX:1,transition:{opacity:{duration:.02},scaleX:{duration:0}}},unchecked:{opacity:0,scaleX:.65}},viewBox:"0 0 24 24",width:"1.2em",...o,children:e.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})});C.displayName="CheckboxIndeterminateIcon";C.__ui__="CheckboxIndeterminateIcon";export{v as C,ie as a,re as b,p as c,ae as d,te as e,ce as u};
