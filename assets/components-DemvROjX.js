import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{u as ot}from"./index-CYZlXLuv.js";import{r as a}from"./index-uCp2LrAq.js";import{u as Ee}from"./index-DMXcxA-U.js";import{U as at}from"./ui-provider-B0qSiYNs.js";import{C as rt}from"./container-BvbqXqT5.js";import{H as lt,V as Ae}from"./stack-DeQ5YYY4.js";import{B as ct}from"./box-ANpItPfh.js";import{T as De}from"./text-MYjKvx39.js";import{t as Be}from"./index-BkEwqnoP.js";import{u as Se}from"./index-Dc2KQwVC.js";import{a as Le,u as Oe,f as $e,F as Ce}from"./form-control-WczVVmWv.js";import{F as it}from"./flex-BWicnFVx.js";import{k as oe,l as je,t as _e,c as U,F as Fe,V as ut,b as _,a0 as dt,u as ke,f as Ue,a as ae,d as F,h as N,y as ve,ae as ht,x as Te,a2 as mt,a3 as pt,a4 as ft,T as gt,o as bt,s as xt}from"./factory-Bf0a1C4O.js";import{A as Ct}from"./index-B5H6KlGO.js";import{m as me}from"./motion-B-hZ6xRg.js";import{a as pe}from"./use-component-style-C0MoE1pt.js";import{o as fe}from"./theme-provider-zwL-D6eR.js";import{f as se}from"./forward-ref-Dr5Hqd9a.js";import{u as kt,a as vt,b as yt}from"./index-fRq0EYJS.js";import{r as Ne,v as Ve,c as ye,p as Pt}from"./number-49BHn0Cl.js";import{T as St}from"./tooltip-BaddgUAF.js";import{c as jt}from"./index-Bh6_N6k1.js";import{L as _t}from"./index-n0cfV_bg.js";import{M as wt}from"./motion-BPPCNfSa.js";import{S as It}from"./select-inP6-iK1.js";const Me=e=>e&&Fe(e)&&Fe(e.target),Rt=({value:e,defaultValue:l=[],onChange:r,isNative:c,...s})=>{const o=oe(r),[i,d]=Se({value:e,defaultValue:l,onChange:o}),h=a.useCallback(p=>{const x=Me(p)?p.target.checked:!i.includes(p),v=Me(p)?p.target.value:p,T=x?[...i,v]:i.filter(D=>String(D)!==String(v));d(T)},[i,d]),m=a.useCallback((p,x=null)=>({...p,ref:x,[c?"checked":"isChecked"]:i.some(v=>String(p==null?void 0:p.value)===String(v)),onChange:h}),[h,c,i]);return{props:s,value:i,setValue:d,onChange:h,getCheckboxProps:m}},[Dt,Ft]=je({strict:!1,name:"CheckboxGroupContext"}),Tt=a.forwardRef(({className:e,size:l,variant:r,colorScheme:c,children:s,items:o=[],direction:i="column",gap:d,...h},m)=>{const{value:p,onChange:x,props:v}=Rt(h),{isRequired:T,isReadOnly:D,isDisabled:O,isInvalid:B,...y}=Le(v),P=_e(s);let w=[];return!P.length&&o.length&&(w=o.map(({label:L,value:I,...b},V)=>t.jsx(qe,{value:I,...b,children:L},V))),t.jsx(Dt,{value:{size:l,variant:r,colorScheme:c,isRequired:T,isReadOnly:D,isDisabled:O,isInvalid:B,value:p,onChange:x},children:t.jsx(it,{ref:m,className:U("ui-checkbox-group",e),role:"group",direction:i,gap:d??(i==="row"?"1rem":void 0),...y,children:s??w})})});Tt.displayName="CheckboxGroup";const ze=({id:e,...l})=>{e??(e=a.useId());const{id:r,name:c,value:s,isChecked:o,defaultIsChecked:i,tabIndex:d,required:h,disabled:m,readOnly:p,isIndeterminate:x,onChange:v,onFocus:T,onBlur:D,...O}=Oe({id:e,...l}),[{"aria-readonly":B,...y},P]=dt(O,$e),[w,L]=a.useState(!1),[I,b]=a.useState(!1),[V,M]=a.useState(!1),[K,E]=a.useState(!1),R=a.useRef(null),[W,ne]=a.useState(!0),[ee,J]=a.useState(!!i),H=o!==void 0,u=H?o:ee,g=oe(f=>{if(p||m){f.preventDefault();return}H||J(!u||x?!0:f.target.checked),v==null||v(f)},[p,m,H,u,x]),q=oe(T),A=oe(D),G=a.useCallback(({key:f})=>{f===" "&&E(!0)},[E]),S=a.useCallback(({key:f})=>{f===" "&&E(!1)},[E]);a.useEffect(()=>Be(L),[]),ke(()=>{R.current&&(R.current.indeterminate=!!x)},[x]),Ue(()=>{m&&b(!1)},[m,b]),ke(()=>{var f;(f=R.current)!=null&&f.form&&(R.current.form.onreset=()=>J(!!i))},[]),ke(()=>{R.current&&R.current.checked!==u&&J(R.current.checked)},[R.current]);const j=a.useCallback((f={},X=null)=>({...y,...f,ref:ae(X,$=>{$&&ne($.tagName==="LABEL")}),"data-checked":F(u),onClick:N(f.onClick,()=>{var $;W||(($=R.current)==null||$.click(),requestAnimationFrame(()=>{var le;return(le=R.current)==null?void 0:le.focus()}))})}),[u,W,y]),Q=a.useCallback((f={},X=null)=>({...y,...f,ref:X,"data-active":F(K),"data-hover":F(V),"data-checked":F(u),"data-focus":F(I),"data-focus-visible":F(I&&w),"data-indeterminate":F(x),"aria-hidden":!0,onMouseDown:N(f.onMouseDown,$=>{I&&$.preventDefault(),E(!0)}),onMouseUp:N(f.onMouseUp,()=>E(!1)),onMouseEnter:N(f.onMouseEnter,()=>M(!0)),onMouseLeave:N(f.onMouseLeave,()=>M(!1))}),[K,u,I,V,w,x,y]),Z=a.useCallback((f={},X=null)=>({...y,...f,ref:ae(R,X),id:e,type:"checkbox",name:c,value:s,tabIndex:d,required:h,disabled:m,readOnly:p,checked:u,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:N(f.onChange,g),onBlur:N(f.onBlur,A,()=>b(!1)),onFocus:N(f.onFocus,q,()=>b(!0)),onKeyDown:N(f.onKeyDown,G),onKeyUp:N(f.onKeyUp,S)}),[y,e,c,s,d,h,m,p,u,g,A,q,G,S]),re=a.useCallback((f={},X=null)=>({...y,...f,ref:X,"data-checked":F(u),onMouseDown:N(f.onMouseDown,$=>{$.preventDefault(),$.stopPropagation()}),onTouchStart:N(f.onTouchStart,$=>{$.preventDefault(),$.stopPropagation()})}),[u,y]);return{props:P,isFocusVisible:w,isFocused:I,isHovered:V,isActive:K,isChecked:u,isIndeterminate:x,getContainerProps:j,getIconProps:Q,getInputProps:Z,getLabelProps:re}},qe=a.forwardRef((e,l)=>{const r=Ft(),{value:c,...s}={...r},o=Le(e),[i,d]=pe("Checkbox",{...s,...e}),{className:h,gap:m="0.5rem",isRequired:p=s.isRequired??o.isRequired,isReadOnly:x=s.isReadOnly??o.isReadOnly,isDisabled:v=s.isDisabled??o.isDisabled,isInvalid:T=s.isInvalid??o.isInvalid,iconProps:D,inputProps:O,labelProps:B,children:y,...P}=fe(d),w=c&&P.value?c.includes(P.value):P.isChecked,L=s.onChange&&P.value?ut(s.onChange,P.onChange):P.onChange,{isChecked:I,isIndeterminate:b,getContainerProps:V,getInputProps:M,getIconProps:K,getLabelProps:E,props:R}=ze({...P,isRequired:p,isReadOnly:x,isDisabled:v,isInvalid:T,isChecked:w,onChange:L}),{children:W,...ne}={...D},ee=a.cloneElement(W??t.jsx(Nt,{}),{__css:{opacity:I||b?1:0,transform:I||b?"scale(1)":"scale(0.95)",transitionProperty:"transform",transitionDuration:"normal"},isIndeterminate:b,isChecked:I,isRequired:p,isReadOnly:x,isDisabled:v,isInvalid:T});return t.jsxs(_.label,{className:U("ui-checkbox",h),...V(),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:m,...i.container},...R,children:[t.jsx(_.input,{className:"ui-checkbox__input",...M(O,l)}),t.jsx(_.span,{className:"ui-checkbox__icon",__css:{pointerEvents:x?"none":void 0,position:"relative",display:"inline-block",userSelect:"none",...i.icon},...K(ne),children:ee}),t.jsx(_.span,{className:"ui-checkbox__label",__css:{...i.label},...E(B),children:y})]})});qe.displayName="Checkbox";const Nt=({isIndeterminate:e,isChecked:l,isRequired:r,isReadOnly:c,isDisabled:s,isInvalid:o,...i})=>t.jsx(Ct,{initial:!1,children:e||l?t.jsx(_.div,{__css:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:t.jsx(_.div,{as:me.div,variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e?t.jsx(Mt,{...i}):t.jsx(Vt,{...i})})}):null}),Vt=e=>t.jsx(_.svg,{as:me.svg,width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:t.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})}),Mt=e=>t.jsx(_.svg,{as:me.svg,width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4},...e,children:t.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})}),{DescendantsContextProvider:Et,useDescendants:At,useDescendant:Bt}=jt(),[Lt,Ke]=je({strict:!1,name:"SegmentedControlContext"}),Ot=se((e,l)=>{const[r,c]=pe("SegmentedControl",e);let{className:s,id:o,name:i,isReadOnly:d,isDisabled:h,children:m,items:p=[],value:x,defaultValue:v,onChange:T,...D}=fe(c);o??(o=a.useId()),i??(i=`segmented-control-${a.useId()}`);const O=oe(T),B=At(),[y,P]=a.useState(-1),[w,L]=a.useState(!1),I=a.useRef(null),[b,V]=Se({value:x,defaultValue:v,onChange:O}),M=a.useCallback(u=>{if(h||d){u.preventDefault();return}V(u.target.value)},[h,d,V]),K=a.useCallback((u,g)=>{if(!h)if(g){const q=B.enabledNextValue(u);q&&P(q.index)}else P(u)},[B,h]),E=a.useCallback(()=>P(-1),[]),R=a.useCallback((u={},g=null)=>({...D,...u,ref:ae(I,g),id:o,"aria-disabled":ve(h),"data-readonly":F(d),onBlur:N(u.onBlur,E)}),[o,h,d,E,D]),W=a.useCallback(({index:u,isDisabled:g,isReadOnly:q,...A},G=null)=>{const S=A.disabled??g??h,j=A.readOnly??q??d,Q=A.value===b;return{...A,ref:G,id:`${o}-${u}`,type:"radio",name:i,disabled:S||j,readOnly:j,checked:Q,"aria-disabled":ve(S),"data-readonly":F(j),"data-checked":F(Q),"data-focus":F(u===y),style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:N(A.onChange,Z=>!S&&!j?M(Z):{})}},[h,d,b,o,i,y,M]),ne=a.useCallback(({index:u,isDisabled:g,isReadOnly:q,...A},G=null)=>{const S=A.disabled??g??h,j=A.readOnly??q??d,Q=A.value===b,Z=u===y;return{...A,ref:G,"aria-disabled":ve(S),"data-readonly":F(j),"data-checked":F(Q),"data-focus":F(Z),"data-focus-visible":F(Z&&w),onFocus:N(A.onFocus,()=>K(u,S||j||!1)),...S||j?{_hover:{},_active:{},_focus:{},_invalid:{},_focusVisible:{}}:{}}},[y,h,w,d,K,b]);a.useEffect(()=>Be(L),[]);const ee={display:"inline-flex",alignItems:"center",...r.container},J=_e(m);let H=[];if(!J.length&&p.length?H=p.map(({label:u,value:g,...q},A)=>t.jsx(he,{value:g,...q,children:u},A)):H=J,b==null&&v==null)for(const u of H){if(u.type!==he&&u.type.displayName!==he.displayName)continue;const g=u.props.value;V(g);break}return t.jsx(Et,{value:B,children:t.jsx(Lt,{value:{getInputProps:W,getLabelProps:ne,styles:r,selectedValue:b},children:t.jsx(_t,{id:o,children:t.jsx(_.div,{...R({},l),className:U("ui-segmented-control",s),__css:ee,children:H})})})})}),he=se(({className:e,disabled:l,readOnly:r,isDisabled:c,isReadOnly:s,value:o,onChange:i,children:d,motionProps:h,...m},p)=>{const[,x]=ht({rerender:!0}),{selectedValue:v,getInputProps:T,getLabelProps:D,styles:O}=Ke(),{index:B,register:y}=Bt({disabled:c||s}),P={index:B,value:o,disabled:l,readOnly:r,isDisabled:c,isReadOnly:s},w={position:"relative",cursor:"pointer",flex:"1 1 0%",display:"inline-flex",justifyContent:"center",alignItems:"center",...O.button},L=v===o;return t.jsxs(_.label,{...D(P),className:U("ui-segmented-control__button",e),__css:w,...m,children:[t.jsx(_.input,{...T({onChange:i,...P},ae(y,p))}),L&&x?t.jsx($t,{...h}):null,t.jsx(_.span,{zIndex:"1",children:d})]})});he.displayName="SegmentedControlButton";const $t=({className:e,transition:l,...r})=>{const{styles:c}=Ke(),s={position:"absolute",w:"100%",h:"100%",...c.cursor};return t.jsx(wt,{className:U("ui-segmented-control__cursor",e),layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.4,...l},__css:s,...r})},Ut=({focusThumbOnChange:e=!0,...l})=>{e||(l.isReadOnly=!0);let{id:r,name:c,min:s=0,max:o=100,step:i=1,defaultValue:d,orientation:h="horizontal",isReversed:m,required:p,disabled:x,readOnly:v,value:T,onChange:D,onChangeStart:O,onChangeEnd:B,onFocus:y,onBlur:P,"aria-readonly":w,"aria-valuetext":L,...I}=Oe(l);const b=gt(I,$e);if(o<s)throw new Error("Do not assign a number less than 'min' to 'max'");const V=oe(O),M=oe(B),[K,E]=Se({value:T,defaultValue:d??s+(o-s)/2,onChange:D}),[R,W]=a.useState(!1),[ne,ee]=a.useState(!1),J=!(x||v),H=(o-s)/10,u=i||(o-s)/100,g=ye(K,s,o),q=o-g+s,G=Ve(m?q:g,s,o),S=h==="vertical",j=kt({min:s,max:o,step:i,value:g,isInteractive:J,focusThumbOnChange:e}),Q=a.useRef(null),Z=a.useRef(null),re=a.useRef(null),f=a.useRef(null),X=vt(f);yt(Z,{onSessionStart:n=>{const{isInteractive:C,value:k}=j.current;C&&(W(!0),we(),le(n),V(k))},onSessionEnd:()=>{const{isInteractive:n,value:C}=j.current;n&&(W(!1),M(C))},onMove:n=>{const{isInteractive:C}=j.current;C&&le(n)}});const $=a.useCallback(n=>{var Re;if(!re.current)return;const{min:C,max:k,step:z}=j.current;Q.current="pointer";const{bottom:te,left:be,height:et,width:tt}=re.current.getBoundingClientRect(),{clientX:st,clientY:nt}=((Re=n.touches)==null?void 0:Re[0])??n;let xe=(S?te-nt:st-be)/(S?et:tt);m&&(xe=1-xe);let ue=Pt(xe,C,k);return z&&(ue=parseFloat(Ne(ue,C,z))),ue=ye(ue,C,k),ue},[S,m,j]),le=n=>{const{value:C}=j.current,k=$(n);k!=null&&k!==C&&E(k)},we=a.useCallback(()=>{const{focusThumbOnChange:n}=j.current;n&&setTimeout(()=>{var C;return(C=f.current)==null?void 0:C.focus()})},[j]),Y=a.useCallback(n=>{const{isInteractive:C,min:k,max:z}=j.current;C&&(n=parseFloat(Ne(n,k,u)),n=ye(n,k,z),E(n))},[u,E,j]),ce=a.useCallback((n=u)=>Y(m?g-n:g+n),[Y,m,u,g]),ie=a.useCallback((n=u)=>Y(m?g+n:g-n),[Y,m,u,g]),He=a.useCallback(()=>Y(d||0),[Y,d]),Ge=a.useCallback(n=>Y(n),[Y]),Ie=a.useCallback(n=>{const{min:C,max:k}=j.current,te={ArrowRight:()=>ce(),ArrowUp:()=>ce(),ArrowLeft:()=>ie(),ArrowDown:()=>ie(),PageUp:()=>ce(H),PageDown:()=>ie(H),Home:()=>Y(C),End:()=>Y(k)}[n.key];te&&(n.preventDefault(),n.stopPropagation(),te(n),Q.current="keyboard")},[Y,j,ie,ce,H]);Ue(()=>{const{value:n}=j.current;we(),Q.current==="keyboard"&&M(n)},[g,M]);const Xe=a.useCallback((n={},C=null)=>{const{width:k,height:z}=X??{width:0,height:0},te={...n.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...S?{paddingLeft:k/2,paddingRight:k/2}:{paddingTop:z/2,paddingBottom:z/2}};return{...I,...n,ref:ae(C,Z),tabIndex:-1,style:te}},[S,I,X]),We=a.useCallback((n={},C=null)=>({"aria-readonly":w,...b,...n,id:r,ref:C,type:"hidden",name:c,value:g,required:p,disabled:x,readOnly:v}),[w,x,b,r,c,v,p,g]),Ye=a.useCallback((n={},C=null)=>{const k={...n.style,position:"absolute",...S?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...b,...n,ref:ae(C,re),style:k}},[S,b]),Je=a.useCallback((n={},C=null)=>{const k=Math.abs(m?100-G:G),z={...n.style,position:"absolute",...S?{left:"50%",transform:"translateX(-50%)",height:`${k}%`,...m?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${k}%`,...m?{right:"0%"}:{left:"0%"}}};return{...b,...n,ref:C,style:z}},[m,S,b,G]),Qe=a.useCallback((n,C=null)=>{let k=Ve(n.value,s,o);k=m?100-k:k;const z={...n.style,position:"absolute",pointerEvents:"none",...S?{bottom:`${k}%`}:{left:`${k}%`}};return{...b,...n,ref:C,"aria-hidden":!0,"data-invalid":F(n.value<s||o<n.value),"data-highlighted":F(n.value<=g),style:z}},[m,S,o,s,b,g]),Ze=a.useCallback((n={},C=null)=>{const k=G,{width:z,height:te}=X??{width:0,height:0},be={...n.style,position:"absolute",userSelect:"none",touchAction:"none",...S?{bottom:`calc(${k}% - ${te/2}px)`}:{left:`calc(${k}% - ${z/2}px)`}};return{"aria-label":"Slider thumb","aria-readonly":w,...b,...n,ref:ae(C,f),tabIndex:J&&e?0:void 0,role:"slider","aria-valuemin":s,"aria-valuemax":o,"aria-valuenow":g,"data-active":F(R&&e),"aria-orientation":h,"aria-valuetext":L??g.toString(),onKeyDown:N(n.onKeyDown,Ie),onFocus:N(n.onFocus,y,()=>ee(!0)),onBlur:N(n.onBlur,P,()=>ee(!1)),style:be}},[G,X,S,w,b,J,e,s,o,g,R,h,Ie,y,P,L]);return{value:g,isFocused:ne,isDragging:R,isVertical:S,stepUp:ce,stepDown:ie,reset:He,stepTo:Ge,getContainerProps:Xe,getInputProps:We,getTrackProps:Ye,getFilledTrackProps:Je,getMarkProps:Qe,getThumbProps:Ze}},[zt,ge]=je({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),qt=se((e,l)=>{const[r,c]=pe("Slider",e),{className:s,children:o,inputProps:i,trackProps:d,filledTrackProps:h,thumbProps:m,trackColor:p,filledTrackColor:x,trackSize:v,thumbColor:T,thumbSize:D,...O}=fe(c),{isVertical:B,getContainerProps:y,getInputProps:P,getTrackProps:w,getFilledTrackProps:L,getMarkProps:I,getThumbProps:b}=Ut(O),V={...r.container},M=_e(o),[K]=Te(M,Pe),[E]=Te(M,de),R=mt(M,de),W=pt(M)?o:ft(M,Pe,de);return t.jsx(zt,{value:{isVertical:B,getTrackProps:w,getFilledTrackProps:L,getMarkProps:I,getThumbProps:b,trackProps:d,trackColor:p,trackSize:v,filledTrackProps:h,filledTrackColor:x,thumbProps:m,thumbColor:T,thumbSize:D,styles:r},children:t.jsxs(_.div,{className:U("ui-slider",s),__css:V,...y(),children:[t.jsx(_.input,{...P(i,l)}),K??t.jsx(Pe,{}),W,E??(R?null:t.jsx(de,{}))]})})}),Pe=se(({className:e,children:l,filledTrackProps:r,...c},s)=>{const{styles:o,trackProps:i,trackColor:d,trackSize:h,isVertical:m,getTrackProps:p}=ge(),x={...o.track};return t.jsx(_.div,{className:U("ui-slider__track",e),__css:x,...p({...d?{bg:d}:{},...h?m?{w:h}:{h}:{},...i,...c},s),children:l??t.jsx(Kt,{...r})})}),Kt=se(({className:e,...l},r)=>{const{styles:c,filledTrackProps:s,filledTrackColor:o,getFilledTrackProps:i}=ge(),d={...c.filledTrack};return t.jsx(_.div,{className:U("ui-slider__track-filled",e),__css:d,...i({...o?{bg:o}:{},...s,...l},r)})}),Ss=se(({className:e,...l},r)=>{const{styles:c,getMarkProps:s}=ge(),o={display:"inline-flex",justifyContent:"center",alignItems:"center",...c.mark};return t.jsx(_.div,{className:U("ui-slider__mark",e),__css:o,...s(l,r)})}),de=se(({className:e,...l},r)=>{const{styles:c,thumbProps:s,thumbColor:o,thumbSize:i,getThumbProps:d}=ge(),h={...c.thumb};return t.jsx(_.div,{className:U("ui-slider__thumb",e),__css:h,...d({...o?{bg:o}:{},...i?{boxSize:i}:{},...s,...l},r)})}),Ht=se((e,l)=>{const[r,c]=pe("Switch",e),{className:s,gap:o="0.5rem",children:i,icon:d,inputProps:h,labelProps:m,isReverse:p,flexDirection:x,transition:v={type:"spring",stiffness:700,damping:40},...T}=fe(c),{isChecked:D,isFocused:O,isHovered:B,isActive:y,getContainerProps:P,getIconProps:w,getInputProps:L,getLabelProps:I,props:b}=ze(T),V=d?a.cloneElement(d,{isChecked:D,isFocused:O,isHovered:B,isActive:y}):null;return t.jsxs(_.label,{ref:l,className:U("ui-switch",s),__css:{cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:x??(p?"row-reverse":"row"),alignItems:"center",verticalAlign:"top",gap:o,...r.container},...P(),...b,children:[t.jsx(_.input,{role:"switch","aria-checked":D,className:U("ui-switch__input",s),...L(h,l)}),V??t.jsx(_.span,{className:U("ui-switch__track",s),__css:{boxSizing:"content-box",display:"inline-flex",justifyContent:"flex-start",alignItems:"center",flexShrink:0,...r.track},...w(),children:t.jsx(_.span,{as:me.span,className:U("ui-switch__thumb",s),"data-checked":F(D),layout:!0,transition:v,__css:{...r.thumb}})}),i?t.jsx(_.span,{className:U("ui-switch__label",s),__css:{...r.label},...I(m),children:i}):null]})}),js=["primary","secondary","success","warning","danger","gray","neutral","red","rose","pink","flashy","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia"],_s=({children:e})=>t.jsx(at,{children:t.jsx(Gt,{children:e})}),Gt=({children:e})=>{const{changeColorMode:l}=bt(),r=Ee()?"dark":"light";return a.useEffect(()=>{l(r)},[r,l]),t.jsx(rt,{children:e})},ws=({name:e,colors:l})=>Object.entries(l[e]).map(([r,c])=>t.jsx(Xt,{name:e,hue:r,value:c},r)),Xt=({name:e,hue:l,value:r})=>{const c=Ee()?"dark":"light";return t.jsxs(lt,{children:[t.jsx(ct,{bg:l?`${e}.${l}`:e,minW:"12",minH:"12",rounded:"md",boxShadow:"inner"}),t.jsxs(Ae,{gap:"1",children:[t.jsxs(De,{m:"0",fontWeight:"semibold",lineClamp:1,children:[e.charAt(0).toUpperCase()+e.slice(1)," ",l]}),t.jsx(De,{m:"0",lineClamp:1,children:xt(r)?c==="light"?r[0]:r[1]:r})]})]},l)},Is=({component:e,variant:l,size:r,colorScheme:c,items:s,...o})=>{const i={variant:l,size:r,colorScheme:c};return t.jsx(Ae,{w:"auto",...o,children:s.map((d,h)=>t.jsx(Wt,{component:e,item:{...i,...d}},h))})},Wt=({component:e,item:l})=>{const{label:r,...c}=l,{isOpen:s,onOpen:o,onClose:i}=ot();switch(e){case"Select":return t.jsx(Ce,{label:r,children:t.jsx(It,{...c})});case"SegmentedControl":return t.jsx(Ce,{label:r,children:t.jsx(Ot,{...c})});case"Slider":return t.jsx(Ce,{label:r,children:t.jsx(qt,{onMouseEnter:o,onMouseLeave:i,...c,children:t.jsx(St,{placement:"top",label:c.value,isOpen:s,children:t.jsx(de,{})})})});default:return t.jsx(Ht,{...c,children:r})}};export{qe as C,_s as J,Is as P,Ot as S,Tt as a,ze as b,js as c,he as d,qt as e,Ss as f,de as g,Pe as h,Kt as i,Ht as j,Xt as k,ws as l,Rt as u};
