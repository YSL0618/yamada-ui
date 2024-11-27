import{y as B,L as X,p as y,d as u,h as r,a as Y,w as T}from"./factory-Dfrbb1EY.js";import{t as Z}from"./index-DImDLiuZ.js";import{r as o}from"./index-ClcD9ViR.js";import{u as N,f as ee}from"./form-control-C7lyVmHF.js";import{u as oe}from"./index-De_nPH_B.js";const[ue,le]=B({name:"RadioGroupContext",strict:!1}),[de,ie]=B({name:"RadioCardGroupContext",strict:!1}),[fe,Ce]=B({name:"RadioCardContext",errorMessage:`useRadioCardContext returned is 'undefined'. Seems you forgot to wrap the components in "<RadioCard />"`}),he=({id:s,...h})=>{const w=o.useId();s??(s=w);let{id:S,name:x,checked:b,defaultChecked:m,defaultIsChecked:M,isChecked:D,value:d,onChange:i,...v}=N({id:s,...h});b??(b=D),m??(m=M);const[{"aria-readonly":E,disabled:l,readOnly:p,required:P,onBlur:a,onFocus:n,...t},_]=X(v,ee),[g,H]=o.useState(!1),[f,U]=o.useState(!1),[F,q]=o.useState(!1),[G,k]=o.useState(!1),[O,$]=o.useState(!!m),K=b!==void 0,c=K?b:O;o.useEffect(()=>Z(H),[]);const I=y(e=>{if(p||l){e.preventDefault();return}K||$(e.target.checked),i==null||i(e)},[p,l,K]),L=y(n),A=y(a),V=o.useCallback(({key:e})=>{e===" "&&k(!0)},[k]),j=o.useCallback(({key:e})=>{e===" "&&k(!1)},[k]),z=o.useCallback((e={},C=null)=>({...t,...e,ref:C,"data-checked":u(c),"data-focus":u(f),"data-focus-visible":u(f&&g)}),[c,t,f,g]),J=o.useCallback((e={},C=null)=>({...t,...e,ref:C,"aria-hidden":!0,"data-active":u(G),"data-checked":u(c),"data-focus":u(f),"data-focus-visible":u(f&&g),"data-hover":u(F),onMouseDown:r(e.onMouseDown,()=>k(!0)),onMouseEnter:r(e.onMouseEnter,()=>q(!0)),onMouseLeave:r(e.onMouseLeave,()=>q(!1)),onMouseUp:r(e.onMouseUp,()=>k(!1))}),[c,G,f,g,F,t]),Q=o.useCallback((e={},C=null)=>({...t,...e,id:s,ref:C,type:"radio",name:x,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-checked":c,checked:c,disabled:l,readOnly:p,required:P,value:d,onBlur:r(e.onBlur,A,()=>U(!1)),onChange:r(e.onChange,I),onFocus:r(e.onFocus,L,()=>U(!0)),onKeyDown:r(e.onKeyDown,V),onKeyUp:r(e.onKeyUp,j)}),[t,s,x,d,P,l,p,c,I,A,L,V,j]),W=o.useCallback((e={},C=null)=>({...t,...e,ref:C,"data-checked":u(c),onMouseDown:r(e.onMouseDown,R=>{R.preventDefault(),R.stopPropagation()}),onTouchStart:r(e.onTouchStart,R=>{R.preventDefault(),R.stopPropagation()})}),[c,t]);return{active:G,checked:c,focused:f,focusVisible:g,hovered:F,props:_,getContainerProps:z,getIconProps:J,getInputProps:Q,getLabelProps:W}},te=s=>s&&T(s)&&T(s.target),pe=({id:s,name:h,defaultValue:w,isNative:S,value:x,onChange:b,...m})=>{const M=o.useId();s??(s=M),h??(h=`radio-${s}`);const D=y(b),[d,i]=oe({defaultValue:w,value:x,onChange:D}),v=o.useRef(null),E=o.useCallback(()=>{const a=v.current;if(!a)return;let n="input:not(:disabled):checked",t=a.querySelector(n);t?t.focus():(n="input:not(:disabled)",t=a.querySelector(n),t==null||t.focus())},[]),l=o.useCallback(a=>{const n=te(a)?a.target.value:a;i(n)},[i]),p=o.useCallback((a={},n=null)=>({role:"radiogroup",...a,ref:Y(n,v)}),[]),P=o.useCallback((a={},n=null)=>{const t=a.value===d;return{...a,ref:n,name:h,"aria-checked":t,[S?"checked":"isChecked"]:d!=null?t:void 0,onChange:l}},[h,d,l,S]);return{id:s,name:h,props:m,setValue:i,value:d,getContainerProps:p,getRadioProps:P,onChange:l,onFocus:E}};export{ue as R,he as a,pe as b,Ce as c,ie as d,fe as e,de as f,le as u};
