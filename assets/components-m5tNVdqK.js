import{j as n}from"./jsx-runtime-CfatFE5O.js";import{o as je,S as at,C as lt}from"./theme-provider-BsBO7Bt7.js";import{H as it,V as He}from"./stack-C0yA_Fgo.js";import{B as ct}from"./box-D-QJtIN2.js";import{T as Me}from"./text-62Futka0.js";import{u as ut}from"./index-B1nZG4Mb.js";import{r as c}from"./index-ClcD9ViR.js";import{u as dt}from"./use-checkbox-CGCpte5c.js";import{f as q}from"./forward-ref-D13m8o2p.js";import{a as we}from"./use-component-style-DXYrx7jC.js";import{A as Ue,q as he,C as ve,d as z,a as ce,h as se,g as We,b as j,c as N,as as mt,B as Ae,ag as ht,a5 as pt,a6 as ft,a2 as bt,n as gt,o as Be,O as xt,P as Ct}from"./factory-Nur_zO5a.js";import{m as Pe}from"./factory-C7oui4wX.js";import{u as St,f as _t,d as ke}from"./form-control-zj-lY-eQ.js";import{u as Ke}from"./index-DKQLNlvR.js";import{u as vt,a as kt,b as yt}from"./index-B_YN6e7D.js";import{r as Oe,v as Le,c as ye,p as Pt}from"./number-CcP_arM8.js";import{m as jt}from"./use-var-BmU0CMcq.js";import{T as wt}from"./tooltip-8cg3dupo.js";import{c as Tt}from"./index-hBuKIhm7.js";import{t as Nt}from"./index-BEKWAhRA.js";import{L as Rt}from"./index-S7lgn1rl.js";import{S as Vt}from"./select-T1HpgUPI.js";const{DescendantsContextProvider:Ft,useDescendant:Dt,useDescendants:zt}=Tt(),[Et,Xe]=Ue({name:"SegmentedControlContext",errorMessage:`useSegmentedControl returned is 'undefined'. Seems you forgot to wrap the components in "<SegmentedControl />"`}),Te=q((o,s)=>{const[t,a]=we("SegmentedControl",o);let{id:r,name:i,className:p,children:b,defaultValue:g,disabled:f,isDisabled:m,isReadOnly:h,items:R=[],readOnly:u,value:O,onChange:E,...w}=je(a);const I=c.useId();r??(r=I),i??(i=`segmented-control-${I}`),f??(f=m),u??(u=h);const $=he(E),M=zt(),[k,V]=c.useState(-1),[L,U]=c.useState(!1),F=c.useRef(null),[A,Y]=Ke({defaultValue:g,value:O,onChange:$}),y=c.useCallback(x=>{if(f||u){x.preventDefault();return}Y(x.target.value)},[f,u,Y]),Q=c.useCallback((x,P)=>{if(!f)if(P){const D=M.enabledNextValue(x);D&&V(D.index)}else V(x)},[M,f]),Z=c.useCallback(()=>V(-1),[]),me=c.useCallback((x={},P=null)=>({"aria-disabled":ve(f),"data-readonly":z(u),role:"radiogroup",...w,...x,id:r,ref:ce(F,P),onBlur:se(x.onBlur,Z)}),[r,f,u,Z,w]),fe=c.useCallback(({index:x,isDisabled:P,isReadOnly:D,...S},C=null)=>{const W=S.disabled??P??f,K=S.readOnly??D??u,H=S.value===A;return{...S,id:`${r}-${x}`,ref:C,type:"radio",name:i,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-disabled":ve(W),"data-checked":z(H),"data-focus":z(x===k),"data-readonly":z(K),checked:H,disabled:W||K,readOnly:K,onChange:se(S.onChange,_=>!W&&!K?y(_):{})}},[f,u,A,r,i,k,y]),ne=c.useCallback(({index:x,isDisabled:P,isReadOnly:D,...S},C=null)=>{const W=S.disabled??P??f,K=S.readOnly??D??u,H=S.value===A,_=x===k;return{...S,ref:C,"aria-disabled":ve(W),"data-checked":z(H),"data-focus":z(_),"data-focus-visible":z(_&&L),"data-readonly":z(K),onFocus:se(S.onFocus,()=>Q(x,W||K||!1)),...W||K?{_active:{},_focus:{},_focusVisible:{},_hover:{},_invalid:{}}:{}}},[k,f,u,L,Q,A]);c.useEffect(()=>Nt(U),[]);const ee={alignItems:"center",display:"inline-flex",...t.container},re=We(b);let G=[];if(!re.length&&R.length?G=R.map(({label:x,value:P,...D},S)=>n.jsx(ue,{value:P,...D,children:x},S)):G=re,A==null&&g==null)for(const x of G){if(x.type!==ue&&x.type.displayName!==ue.displayName)continue;const P=x.props.value;Y(P);break}return n.jsx(Ft,{value:M,children:n.jsx(Et,{value:{styles:t,value:A,getInputProps:fe,getLabelProps:ne},children:n.jsx(Rt,{id:r,children:n.jsx(j.div,{...me({},s),className:N("ui-segmented-control",p),__css:ee,children:G})})})})});Te.displayName="SegmentedControl";Te.__ui__="SegmentedControl";const ue=q(({className:o,children:s,disabled:t,isDisabled:a,isReadOnly:r,readOnly:i,value:p,motionProps:b,onChange:g,...f},m)=>{t??(t=a),i??(i=r);const[,h]=mt({rerender:!0}),{styles:R,value:u,getInputProps:O,getLabelProps:E}=Xe(),{index:w,register:I}=Dt({disabled:t||i}),$={disabled:t,index:w,isDisabled:a,isReadOnly:r,readOnly:i,value:p},M={alignItems:"center",cursor:"pointer",display:"inline-flex",flex:"1 1 0%",justifyContent:"center",position:"relative",...R.button},k=p===u;return n.jsxs(j.label,{...E($),className:N("ui-segmented-control__button",o),__css:M,...f,children:[n.jsx(j.input,{...O({onChange:g,...$},ce(I,m))}),k&&h?n.jsx(Ne,{...b}):null,n.jsx(j.span,{zIndex:"1",children:s})]})});ue.displayName="SegmentedControlButton";ue.__ui__="SegmentedControlButton";const Ne=({className:o,transition:s,...t})=>{const{styles:a}=Xe(),r={h:"100%",position:"absolute",w:"100%",...a.cursor};return n.jsx(Pe.div,{className:N("ui-segmented-control__cursor",o),layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.4,...s},__css:r,...t})};Ne.displayName="SegmentedControlCursor";Ne.__ui__="SegmentedControlCursor";const It=(o,s)=>{var t,a,r,i,p,b,g,f,m,h;return o??((t=s.thumb)==null?void 0:t.boxSize)??((a=s.thumb)==null?void 0:a.minBoxSize)??((r=s.thumb)==null?void 0:r.width)??((i=s.thumb)==null?void 0:i.w)??((p=s.thumb)==null?void 0:p.minWidth)??((b=s.thumb)==null?void 0:b.minW)??((g=s.thumb)==null?void 0:g.height)??((f=s.thumb)==null?void 0:f.h)??((m=s.thumb)==null?void 0:m.minHeight)??((h=s.thumb)==null?void 0:h.minH)??"3.5"},$t=({focusThumbOnChange:o=!0,...s})=>{o||(s.isReadOnly=!0);let{id:t,name:a,"aria-label":r,"aria-labelledby":i,"aria-valuetext":p,defaultValue:b,getAriaValueText:g,isReversed:f,max:m=100,min:h=0,orientation:R="horizontal",reversed:u,step:O=1,thumbSize:E,value:w,onChange:I,onChangeEnd:$,onChangeStart:M,...k}=St(s);const{"aria-readonly":V,disabled:L,readOnly:U,required:F,onBlur:A,onFocus:Y,...y}=bt(k,_t);if(u??(u=f),m<h)throw new Error("Do not assign a number less than 'min' to 'max'");const Q=he(M),Z=he($),me=he(g),[fe,ne]=Ke({defaultValue:b??h+(m-h)/2,value:w,onChange:I}),[ee,re]=c.useState(!1),[G,x]=c.useState(!1),P=!(L||U),D=(m-h)/10,S=O||(m-h)/100,C=ye(fe,h,m),W=m-C+h,H=Le(u?W:C,h,m),_=R==="vertical",T=vt({focusThumbOnChange:o,interactive:P,max:m,min:h,step:O,value:C}),be=c.useRef(null),De=c.useRef(null),ge=c.useRef(null),xe=c.useRef(null),te=kt(xe);yt(De,{onMove:e=>{const{interactive:d}=T.current;d&&ze(e)},onSessionEnd:()=>{const{interactive:e,value:d}=T.current;e&&(re(!1),Z(d))},onSessionStart:e=>{const{interactive:d,value:l}=T.current;d&&(re(!0),Ee(),ze(e),Q(l))}});const qe=c.useCallback(e=>{var $e;if(!ge.current)return;const{max:d,min:l,step:v}=T.current;be.current="pointer";const{bottom:X,height:le,left:Ce,width:Se}=ge.current.getBoundingClientRect(),{clientX:rt,clientY:ot}=(($e=e.touches)==null?void 0:$e[0])??e;let _e=(_?X-ot:rt-Ce)/(_?le:Se);u&&(_e=1-_e);let ie=Pt(_e,l,d);return v&&(ie=parseFloat(Oe(ie,l,v))),ie=ye(ie,l,d),ie},[_,u,T]),ze=e=>{const{value:d}=T.current,l=qe(e);l!=null&&l!==d&&ne(l)},Ee=c.useCallback(()=>{const{focusThumbOnChange:e}=T.current;e&&setTimeout(()=>{var d;return(d=xe.current)==null?void 0:d.focus()})},[T]),B=c.useCallback(e=>{const{interactive:d,max:l,min:v}=T.current;d&&(e=parseFloat(Oe(e,v,S)),e=ye(e,v,l),ne(e))},[S,ne,T]),oe=c.useCallback((e=S)=>B(u?C-e:C+e),[B,u,S,C]),ae=c.useCallback((e=S)=>B(u?C+e:C-e),[B,u,S,C]),Ge=c.useCallback(()=>B(b||0),[B,b]),Je=c.useCallback(e=>B(e),[B]),Ie=c.useCallback(e=>{const{max:d,min:l}=T.current,X={ArrowDown:()=>ae(),ArrowLeft:()=>ae(),ArrowRight:()=>oe(),ArrowUp:()=>oe(),End:()=>B(d),Home:()=>B(l),PageDown:()=>ae(D),PageUp:()=>oe(D)}[e.key];X&&(e.preventDefault(),e.stopPropagation(),X(e),be.current="keyboard")},[B,T,ae,oe,D]);gt(()=>{const{value:e}=T.current;Ee(),be.current==="keyboard"&&Z(e)},[C,Z]);const Qe=c.useCallback((e={},d=null)=>{let{height:l,width:v}=te??{height:"var(--ui-thumb-size)",width:"var(--ui-thumb-size)"};Be(v)&&(v=`${v}px`),Be(l)&&(l=`${l}px`);const X=_?{paddingLeft:`calc(${v} / 2)`,paddingRight:`calc(${v} / 2)`}:{paddingBottom:`calc(${l} / 2)`,paddingTop:`calc(${l} / 2)`},le={...e.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...X};return{...k,...e,ref:ce(d,De),style:le,tabIndex:-1,vars:jt(k.vars,[{name:"thumb-size",token:"sizes",value:E,__prefix:"ui"}])}},[_,k,te,E]),Ze=c.useCallback((e={},d=null)=>({"aria-readonly":V,...y,...e,id:t,ref:d,type:"hidden",name:a,disabled:L,readOnly:U,required:F,value:C}),[V,L,y,t,a,U,F,C]),et=c.useCallback((e={},d=null)=>{const l={...e.style,position:"absolute",..._?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...y,...e,ref:ce(d,ge),style:l}},[_,y]),tt=c.useCallback((e={},d=null)=>{const l=Math.abs(u?100-H:H),v={...e.style,position:"absolute",..._?{height:`${l}%`,left:"50%",transform:"translateX(-50%)",...u?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${l}%`,...u?{right:"0%"}:{left:"0%"}}};return{...y,...e,ref:d,style:v}},[u,_,y,H]),st=c.useCallback((e,d=null)=>{let l=Le(e.value,h,m);l=u?100-l:l;const v={...e.style,pointerEvents:"none",position:"absolute",..._?{bottom:`${l}%`}:{left:`${l}%`}};return{...y,...e,ref:d,style:v,"aria-hidden":!0,"data-highlighted":z(e.value<=C),"data-invalid":z(e.value<h||m<e.value)}},[u,_,m,h,y,C]),nt=c.useCallback((e={},d=null)=>{const l=H;let v="var(--ui-thumb-size)",X="var(--ui-thumb-size)";te&&(v=`${te.width}px`,X=`${te.height}px`);const le=`calc(${l}% - (${X} / 2))`,Ce=`calc(${l}% - (${v} / 2))`,Se={...e.style,position:"absolute",touchAction:"none",userSelect:"none",..._?{bottom:le}:{left:Ce}};return{"aria-label":r??"Slider thumb","aria-labelledby":i,"aria-readonly":V,...y,...e,ref:ce(d,xe),style:Se,"aria-orientation":R,"aria-valuemax":m,"aria-valuemin":h,"aria-valuenow":C,"aria-valuetext":p??me(C)??C.toString(),"data-active":z(ee&&o),role:"slider",tabIndex:P&&o?0:void 0,onBlur:se(e.onBlur,A,()=>x(!1)),onFocus:se(e.onFocus,Y,()=>x(!0)),onKeyDown:se(e.onKeyDown,Ie)}},[H,te,_,r,i,V,y,R,m,h,C,p,me,ee,o,P,A,Y,Ie]);return{dragging:ee,focused:G,isDragging:ee,isFocused:G,isVertical:_,reset:Ge,stepDown:ae,stepTo:Je,stepUp:oe,value:C,vertical:_,getContainerProps:Qe,getFilledTrackProps:tt,getInputProps:Ze,getMarkProps:st,getThumbProps:nt,getTrackProps:et}},[Mt,pe]=Ue({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),Re=q((o,s)=>{const[t,a]=we("Slider",o),{className:r,children:i,filledTrackColor:p,thumbColor:b,thumbSize:g,trackColor:f,trackSize:m,filledTrackProps:h,inputProps:R,thumbProps:u,trackProps:O,...E}=je(a),{isVertical:w,getContainerProps:I,getFilledTrackProps:$,getInputProps:M,getMarkProps:k,getThumbProps:V,getTrackProps:L}=$t({...E,thumbSize:It(g,t)}),U={...t.container},F=We(i),A=Ae(F,de),Y=Ae(F,J),y=ht(F,J),Q=pt(F)?i:ft(F,de,J);return n.jsx(Mt,{value:{filledTrackColor:p,isVertical:w,styles:t,thumbColor:b,thumbSize:g,trackColor:f,trackSize:m,filledTrackProps:h,getFilledTrackProps:$,getMarkProps:k,getThumbProps:V,getTrackProps:L,thumbProps:u,trackProps:O},children:n.jsxs(j.div,{className:N("ui-slider",r),__css:U,...I(),children:[n.jsx(j.input,{...M(R,s)}),A??n.jsx(de,{}),Q,Y??(y?null:n.jsx(J,{}))]})})});Re.displayName="Slider";Re.__ui__="Slider";const de=q(({className:o,children:s,filledTrackProps:t,...a},r)=>{const{isVertical:i,styles:p,trackColor:b,trackSize:g,getTrackProps:f,trackProps:m}=pe(),h={...p.track};return n.jsx(j.div,{className:N("ui-slider__track",o),__css:h,...f({...b?{bg:b}:{},...g?i?{w:g}:{h:g}:{},...m,...a},r),children:s??n.jsx(Ve,{...t})})});de.displayName="SliderTrack";de.__ui__="SliderTrack";const Ve=q(({className:o,...s},t)=>{const{filledTrackColor:a,styles:r,filledTrackProps:i,getFilledTrackProps:p}=pe(),b={...r.filledTrack};return n.jsx(j.div,{className:N("ui-slider__track-filled",o),__css:b,...p({...a?{bg:a}:{},...i,...s},t)})});Ve.displayName="SliderFilledTrack";Ve.__ui__="SliderFilledTrack";const Ye=q(({className:o,...s},t)=>{const{styles:a,getMarkProps:r}=pe(),i={alignItems:"center",display:"inline-flex",justifyContent:"center",...a.mark};return n.jsx(j.div,{className:N("ui-slider__mark",o),__css:i,...r(s,t)})});Ye.displayName="SliderMark";Ye.__ui__="SliderMark";const J=q(({className:o,...s},t)=>{const{styles:a,thumbColor:r,thumbSize:i,getThumbProps:p,thumbProps:b}=pe(),g={...a.thumb};return n.jsx(j.div,{className:N("ui-slider__thumb",o),__css:g,...p({...r?{bg:r}:{},...i?{boxSize:i}:{},...b,...s},t)})});J.displayName="SliderThumb";J.__ui__="SliderThumb";const Fe=q((o,s)=>{const[t,a]=we("Switch",o);let{className:r,children:i,flexDirection:p,gap:b="0.5rem",icon:g,isReverse:f,reverse:m,transition:h={type:"spring",damping:40,stiffness:700},inputProps:R,labelProps:u,...O}=je(a);m??(m=f);const{active:E,checked:w,focused:I,hovered:$,props:M,getContainerProps:k,getIconProps:V,getInputProps:L,getLabelProps:U}=dt({selectOnEnter:!0,...O}),F=g?c.cloneElement(g,{active:E,checked:w,focused:I,hovered:$,isActive:E,isChecked:w,isFocused:I,isHovered:$}):null;return n.jsxs(j.label,{ref:s,className:N("ui-switch",r),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",flexDirection:p??(m?"row-reverse":"row"),gap:b,position:"relative",verticalAlign:"top",...t.container},...k(),...M,children:[n.jsx(j.input,{className:N("ui-switch__input",r),"aria-checked":w,role:"switch",...L(R,s)}),F??n.jsx(Pe.div,{layout:!0,layoutRoot:!0,children:n.jsx(j.div,{className:N("ui-switch__track",r),__css:{alignItems:"center",boxSizing:"content-box",display:"inline-flex",flexShrink:0,justifyContent:"flex-start",...t.track},...V(),children:n.jsx(Pe.div,{className:N("ui-switch__thumb",r),"data-checked":z(w),layout:!0,transition:h,__css:{...t.thumb}})})}),i?n.jsx(j.span,{className:N("ui-switch__label",r),__css:{...t.label},...U(u),children:i}):null]})});Fe.displayName="Switch";Fe.__ui__="Switch";const ds=[...at,...lt],ms=({name:o,colors:s})=>Object.entries(s[o]??{}).map(([t,a])=>n.jsx(At,{name:o,tone:t,value:a},t)),At=({name:o,tone:s,value:t})=>{const{colorMode:a}=xt();return n.jsxs(it,{children:[n.jsx(ct,{bg:s?`${o}.${s}`:o,boxShadow:"inner",minH:"12",minW:"12",rounded:"md"}),n.jsxs(He,{gap:"1",children:[n.jsxs(Me,{fontWeight:"semibold",lineClamp:1,m:"0",children:[o.charAt(0).toUpperCase()+o.slice(1)," ",s]}),n.jsx(Me,{lineClamp:1,m:"0",children:Ct(t)?a==="light"?t[0]:t[1]:t})]})]},s)},hs=({colorScheme:o,size:s,variant:t,component:a,items:r,...i})=>{const p={colorScheme:o,size:s,variant:t};return n.jsx(He,{w:"auto",...i,children:r.map((b,g)=>n.jsx(Bt,{component:a,item:{...p,...b}},g))})},Bt=({component:o,item:s})=>{const{label:t,...a}=s,{isOpen:r,onClose:i,onOpen:p}=ut();switch(o){case"Select":return n.jsx(ke,{label:t,children:n.jsx(Vt,{...a})});case"SegmentedControl":return n.jsx(ke,{label:t,children:n.jsx(Te,{...a})});case"Slider":return n.jsx(ke,{label:t,children:n.jsx(Re,{onMouseEnter:p,onMouseLeave:i,...a,children:n.jsx(wt,{label:a.value,open:r,placement:"top",children:n.jsx(J,{})})})});default:return n.jsx(Fe,{...a,children:t})}};export{At as C,hs as P,Te as S,ue as a,Re as b,ds as c,Ye as d,J as e,de as f,Ve as g,Fe as h,ms as i,It as j};
