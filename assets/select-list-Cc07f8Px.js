import{j as h}from"./jsx-runtime-CfatFE5O.js";import{u as it}from"./index-CgNA1xsw.js";import{r as s}from"./index-ClcD9ViR.js";import{c as rt,a as ut}from"./icon-DDeGQYl6.js";import{f as ie}from"./forward-ref-D13m8o2p.js";import{J as Ee,a0 as dt,n as pt,a as ce,C as Ye,d as ae,h as le,au as ft,P as Z,b as M,c as ee,L as Qe,af as Xe,y as mt,a2 as xt,a9 as ht,A as Ze,aq as bt,a3 as Ct,a4 as ge,u as vt,l as gt,a1 as _t,o as St}from"./factory-Dfrbb1EY.js";import{u as yt}from"./index-De_nPH_B.js";import{c as Ot}from"./index-O1jdRUiZ.js";import{u as Pt}from"./index-D4SEQqYY.js";import{u as It}from"./index-Y4TAv5_r.js";import{u as kt,f as jt}from"./form-control-C7lyVmHF.js";import{b as wt}from"./popover-trigger-4MaltcBz.js";const Dt=r=>{var a;return ft(r)&&!!((a=r.getAttribute("role"))!=null&&a.startsWith("option"))},Ft=r=>{const{closeOnSelect:a,fieldRef:c,focusedIndex:o,omitSelectedValues:i,placeholder:n,placeholderInOptions:b,setFocusedIndex:C,value:P,optionProps:u,onChange:g,onClose:j,onFocusNext:I}=U(),d=s.useId(),F=s.useRef(null);let{id:V,children:y,closeOnSelect:N,icon:m,isDisabled:x,isFocusable:w,value:_,...S}={...u,...r};const re=!!x&&!w,{descendants:W,index:H,register:te}=Nt({disabled:re}),ue=W.values().slice(0,H),de=!!n&&b,ye=de&&H===0,Y=Z(P),$=Y?!1:ue.some(({node:A})=>A.dataset.value===(_??"")),Q=!$&&(Y?P.includes(_??""):(_??"")===P),L=H===o;V??(V=d),!ye&&Ee(_)&&(dt(y)||pt(y)?_=y.toString():console.warn(`${Y?"MultiSelect":"Select"}: Cannot infer the option value of complex children. Pass a \`value\` prop or use a plain string as children to <Option>.`)),de&&H>0&&!_&&console.warn(`${Y?"MultiSelect":"Select"}: If placeholders are present, All options must be set value. If want to set an empty value, either don't set the placeholder or set 'placeholderInOptions' to false.`);const Oe=s.useCallback(A=>{if(A.preventDefault(),A.stopPropagation(),x||!Dt(A.currentTarget)){c.current&&c.current.focus();return}$||C(H),g(_??""),c.current&&c.current.focus(),(N??a)&&j(),i&&I()},[x,$,C,H,g,_,c,N,a,j,i,I]),R=s.useCallback((A={},pe=null)=>{const p={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"};return{ref:ce(F,pe,te),role:"option",...S,...A,id:V,style:i&&Q?p:void 0,"aria-disabled":Ye(x),"aria-selected":Q,"data-disabled":ae(x),"data-duplicated":ae($),"data-focus":ae(L),"data-value":_??"",tabIndex:-1,onClick:le(S.onClick,A.onClick,Oe)}},[V,_,S,x,L,$,Q,i,Oe,te]);return{children:y,customIcon:m,isFocused:L,isSelected:Q,getOptionProps:R}},_e=ie(({className:r,icon:a,...c},o)=>{const{styles:i}=U(),{children:n,customIcon:b,isSelected:C,getOptionProps:P}=Ft(c);a??(a=b);const u={alignItems:"center",color:"inherit",display:"flex",flex:"0 0 auto",gap:"0.75rem",outline:0,textAlign:"start",textDecoration:"none",userSelect:"none",width:"100%",...i.item};return h.jsxs(M.div,{className:ee("ui-select__item",r),__css:u,...P({},o),children:[a!==null?h.jsx(Ne,{opacity:C?1:0,children:a||h.jsx(Vt,{})}):null,h.jsx(M.span,{style:{flex:1},"data-label":!0,children:n})]})});_e.displayName="Option";_e.__ui__="Option";const Ne=ie(({className:r,...a},c)=>{const{styles:o}=U(),i={alignItems:"center",display:"inline-flex",flexShrink:0,fontSize:"0.85em",justifyContent:"center",...o.itemIcon};return h.jsx(M.span,{ref:c,className:ee("ui-select__item__icon",r),__css:i,...a})});Ne.displayName="OptionIcon";Ne.__ui__="OptionIcon";const Vt=()=>h.jsx("svg",{height:"1em",viewBox:"0 0 14 14",width:"1em",children:h.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),Et=({label:r,...a})=>{const{omitSelectedValues:c,value:o}=U(),i=et(),n=s.useRef(null),b=s.useId(),C=i.values(),g=(Z(o)&&c?i.values(({node:m})=>o.includes(m.dataset.value??"")):[]).map(({index:m})=>m),I=!C.filter(({index:m,node:x})=>{var w;return((w=x.parentElement)==null?void 0:w.dataset.label)===r&&!g.includes(m)}).length,[d,F]=Qe(a,Xe),V=s.useCallback((m={},x=null)=>{var _;const w={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"};return{ref:x,"aria-labelledby":(_=n.current)==null?void 0:_.id,role:"group",...m,...d,style:I?w:void 0}},[d,I]),y=s.useCallback(({id:m,...x}={},w=null)=>({id:m??b,ref:ce(w,n),role:"presentation",...x}),[b]),N=s.useCallback((m={},x=null)=>({ref:x,...m,...F,"data-label":r}),[F,r]);return{label:r,getContainerProps:V,getGroupProps:N,getLabelProps:y}},Le=ie(({className:r,children:a,color:c,h:o,height:i,minH:n,minHeight:b,labelProps:C,...P},u)=>{const{styles:g}=U(),{label:j,getContainerProps:I,getGroupProps:d,getLabelProps:F}=Et(P);return o??(o=i),n??(n=b),h.jsxs(M.section,{className:ee("ui-select__item","ui-select__item--group",r),__css:{color:c,h:"fit-content",w:"100%"},...I(),children:[h.jsx(M.header,{className:"ui-select__item__group-label",lineClamp:1,__css:g.groupLabel,...F(C),children:j}),h.jsx(M.div,{...d({},u),className:"ui-select__item__group",__css:{h:o,minH:n,...g.group},children:a})]})});Le.displayName="OptionGroup";Le.__ui__="OptionGroup";const{DescendantsContextProvider:Yt,useDescendant:Nt,useDescendants:Lt,useDescendantsContext:et}=Ot(),[Qt,U]=mt({name:"SelectContext",errorMessage:`useSelectContext returned is 'undefined'. Seems you forgot to wrap the components in "<Select />"`}),Xt=r=>{var We;const{animation:a,boundary:c,children:o,closeDelay:i,closeOnBlur:n=!0,closeOnEsc:b=!0,closeOnSelect:C=!0,defaultIsOpen:P,defaultValue:u,duration:g=.2,eventListeners:j,flip:I,gutter:d,isLazy:F,isOpen:V,items:y=[],lazyBehavior:N,matchWidth:m=!0,maxSelectValues:x,modifiers:w,offset:_,omitSelectedValues:S=!1,openDelay:re,placeholder:W,placeholderInOptions:H=!0,placement:te="bottom-start",preventOverflow:Se,strategy:ue,value:de,optionProps:ye,onChange:Y,onClose:$,onOpen:Q,...L}=kt(r),{"aria-readonly":Oe,...R}=xt(L,jt),[A,pe]=Qe(ht(L,["aria-readonly"]),Xe),p=Lt(),[G,O]=s.useState(-1),[Te,Ae]=s.useState(!1),fe=s.useRef(null),Be=s.useRef(null),q=s.useRef(new Set([])),[D,me]=yt({defaultValue:u,value:de,onChange:Y}),[X,Pe]=s.useState(void 0),xe=!!W&&H,se=G>-1,v=Z(D),Me=(v?!D.length:!D)&&!xe,K=p.values(({node:e})=>v&&D.includes(e.dataset.value??"")).map(({index:e})=>e),B=p.enabledValues(({index:e})=>!K.includes(e)),He=(We=p.value(G))==null?void 0:We.node.id,he=Ze(o),Ge=s.useMemo(()=>!he.length&&y.length?y.map((e,t)=>{if("value"in e){const{label:l,value:k,...J}=e;return h.jsx(_e,{value:k,...J,children:l},t)}else if("items"in e){const{items:l=[],label:k,...J}=e;return h.jsx(Le,{label:k,...J,children:l.map(({label:Fe,value:ve,...Ve},oe)=>h.jsx(_e,{value:ve,...Ve,children:Fe},oe))},t)}}).filter(Boolean):he,[he,y]),Ie=!he.length&&!Ge.length&&(v?!0:!xe),be=s.useCallback(()=>{const e=setTimeout(()=>{const t=p.enabledFirstValue();if(t)if(!v||!S)O(t.index);else if(K.includes(t.index)){const l=B[0];O((l==null?void 0:l.index)??-1)}else O(t.index)});q.current.add(e)},[p,B,v,S,K]),Ce=s.useCallback(()=>{const e=setTimeout(()=>{const t=p.enabledLastValue();if(t)if(!v||!S)O(t.index);else if(K.includes(t.index)){const l=B.reverse()[0];O((l==null?void 0:l.index)??-1)}else O(t.index)});q.current.add(e)},[p,B,v,S,K]),ke=s.useCallback(()=>{const e=setTimeout(()=>{const l=p.enabledValues().find(({node:k})=>v?D.includes(k.dataset.value??""):k.dataset.value===D);l&&O(l.index)});q.current.add(e)},[p,v,D]),ne=s.useCallback(()=>{const e=setTimeout(()=>{const t=p.enabledNextValue(G);if(t)if(!v||!S)O(t.index);else if(K.includes(t.index)){const l=B.find(({index:k})=>t.index<k)??B[0];O((l==null?void 0:l.index)??-1)}else O(t.index)});q.current.add(e)},[p,B,G,v,S,K,O]),je=s.useCallback(()=>{const e=setTimeout(()=>{const t=p.enabledPrevValue(G);if(t)if(!v||!S)O(t.index);else if(K.includes(t.index)){const l=B.reverse().find(({index:k})=>k<t.index)??B[0];O((l==null?void 0:l.index)??-1)}else O(t.index)});q.current.add(e)},[p,B,G,v,S,K,O]),z=Me||S?be:ke,Ke=Me||S?Ce:ke,nt=s.useCallback(e=>{const t=p.values();if(!t.length)return;const k=(Z(e)?e:[e]).map(J=>{const{index:Fe,node:ve}=t.find(({node:oe})=>oe.dataset.value===J)??{};if(!ve||xe&&Fe===0)return;const{innerHTML:Ve}=Array.from(ve.children).find(oe=>oe.getAttribute("data-label")!==null)??{};return Ve}).filter(J=>!Ee(J));Pe(v?k:k[0])},[p,v,xe]),we=s.useCallback(e=>{me(t=>Z(t)?t.includes(e)?t.filter(k=>k!==e):[...t,e]:e)},[me]),ot=s.useCallback(e=>{e.stopPropagation(),me([]),Pe(void 0)},[Pe,me]),{isOpen:f,onClose:E,onOpen:Ue}=Pt({defaultIsOpen:P,isOpen:V,onClose:$,onOpen:Q}),T=s.useCallback(()=>{R.disabled||R.readOnly||Ie||Te||Ue()},[R,Ie,Te,Ue]),De=s.useCallback(()=>{let e=p.value(G);if("disabled"in((e==null?void 0:e.node.dataset)??{})&&(e=void 0),!e)return;const t=e.node.dataset.value??"";we(t),C&&E(),S&&ne()},[C,p,G,S,we,E,ne]),ze=s.useCallback(()=>{f||(T(),z())},[f,z,T]),$e=s.useCallback(()=>{f||(T(),z())},[f,z,T]),qe=s.useCallback(e=>{const t=bt(e);Ct(fe.current,t)||n&&f&&E()},[n,f,E]),Je=s.useCallback(e=>{if(e.key===" "&&(e.key=e.code),R.disabled||R.readOnly)return;const l={ArrowDown:se?()=>ne():f?void 0:ge(T,z),ArrowUp:e.altKey&&f?E:se?()=>je():f?void 0:ge(T,Ke),End:f?Ce:void 0,Enter:se?De:f?void 0:ge(T,z),Escape:b?E:void 0,Home:f?be:void 0,Space:se?De:f?void 0:ge(T,z)}[e.key];l&&(e.preventDefault(),e.stopPropagation(),l())},[R.disabled,R.readOnly,se,f,T,z,Ke,De,be,Ce,b,E,ne,je]);It({ref:fe,enabled:f&&n,handler:E}),s.useEffect(()=>{if(!v||!S&&Ee(x))return;const e=D.length>0&&D.length===p.count(),t=D.length===x;e||t?(E(),Ae(!0)):Ae(!1)},[S,D,p,v,E,x]),vt(()=>{nt(D)},[D]),gt(()=>{f||O(-1)},[f]),_t(()=>{q.current.forEach(e=>clearTimeout(e)),q.current.clear()});const lt=s.useCallback(e=>({animation:a,boundary:c,closeDelay:i,closeOnBlur:n,duration:g,eventListeners:j,flip:I,gutter:d,isLazy:F,lazyBehavior:N,matchWidth:m,modifiers:w,offset:_,openDelay:re,placement:te,preventOverflow:Se,strategy:ue,...e,closeOnButton:!1,isOpen:f,trigger:"never",onClose:E,onOpen:T}),[n,re,i,F,N,a,g,_,d,Se,I,m,c,j,ue,te,w,f,T,E]),at=s.useCallback((e={},t=null)=>({ref:ce(fe,t),...A,...e,...R,onBlur:le(e.onBlur,L.onBlur,qe),onClick:le(e.onClick,L.onClick,ze)}),[A,R,qe,ze,L]),ct=s.useCallback(({"aria-label":e,...t}={},l=null)=>(e??(e=W??`Select ${v?"one or more options.":"an option."}`),{ref:ce(Be,l),"aria-activedescendant":He,"aria-haspopup":"listbox","aria-label":e,role:"combobox",tabIndex:0,...pe,...t,"data-active":ae(f),"data-placeholder":ae(v?!(X!=null&&X.length):X===void 0),onFocus:le(t.onFocus,L.onFocus,$e),onKeyDown:le(t.onKeyDown,L.onKeyDown,Je)}),[He,pe,f,v,X,W,L,$e,Je]);return{children:Ge,closeOnSelect:C,containerRef:fe,descendants:p,fieldRef:Be,focusedIndex:G,isEmpty:Ie,isOpen:f,label:X,omitSelectedValues:S,placeholder:W,placeholderInOptions:H,setFocusedIndex:O,value:D,formControlProps:R,getContainerProps:at,getFieldProps:ct,getPopoverProps:lt,optionProps:ye,onChange:we,onClear:ot,onClose:E,onFocusFirst:be,onFocusLast:Ce,onFocusNext:ne,onFocusPrev:je,onFocusSelected:ke,onOpen:T}},Re=ie(({className:r,children:a,__css:c,...o},i)=>{const{styles:n}=U(),b={alignItems:"center",cursor:"pointer",display:"inline-flex",justifyContent:"center",pointerEvents:"none",position:"absolute",top:"50%",transform:"translateY(-50%)",...n.icon,...c},P=Ze(a).map(u=>s.cloneElement(u,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1}));return h.jsx(M.div,{ref:i,className:ee("ui-select__icon",r),__css:b,...o,children:St(a)?P:h.jsx(rt,{})})});Re.displayName="SelectIcon";Re.__ui__="SelectIcon";const tt=({className:r,children:a,...c})=>{const o=s.useRef(null),{styles:i}=U(),n=c.disabled,b=it({ref:o,isDisabled:n,...c});return h.jsx(Re,{className:ee("ui-select__clear-icon",r),"aria-label":"Clear value",__css:i.clearIcon,...b,children:a??h.jsx(ut,{h:"0.5em",w:"0.5em"})})};tt.displayName="SelectClearIcon";tt.__ui__="SelectClearIcon";const Rt=()=>{const{focusedIndex:r,value:a}=U(),c=et(),o=s.useRef(null),i=s.useRef(-1),n=c.value(r),b=Z(a);s.useEffect(()=>{if(!o.current||!n||i.current===n.index)return;const u=o.current,g=n.node,j=u.clientHeight,I=u.scrollTop,d=I+j,F=g.clientHeight,V=g.offsetTop,y=V+F,N=I<=V&&y<=d,m=i.current<n.index;N||(y<=j?o.current.scrollTo({top:0}):m?o.current.scrollTo({top:y-j}):o.current.scrollTo({top:V+1})),i.current=n.index},[o,n]);const C=s.useCallback((u={},g=null)=>({ref:g,"aria-multiselectable":Ye(b),role:"listbox",...u}),[b]),P=s.useCallback((u={},g=null)=>({ref:ce(o,g),position:"relative",tabIndex:-1,...u}),[o]);return{getContainerProps:C,getListProps:P}},st=ie(({className:r,children:a,footer:c,header:o,maxW:i,maxWidth:n,minW:b,minWidth:C,w:P,width:u,contentProps:g,...j},I)=>{var y,N,m,x,w,_;const{styles:d}=U(),{getContainerProps:F,getListProps:V}=Rt();return u??(u=P),u??(u=((y=d.list)==null?void 0:y.width)??((N=d.list)==null?void 0:N.w)),C??(C=b),C??(C=((m=d.list)==null?void 0:m.minWidth)??((x=d.list)==null?void 0:x.minW)),n??(n=i),n??(n=((w=d.list)==null?void 0:w.maxWidth)??((_=d.list)==null?void 0:_.maxW)),h.jsxs(wt,{as:"div",className:"ui-select__content",maxWidth:n,minWidth:C,width:u,__css:{...d.content,maxWidth:n,minWidth:C,width:u},...F(g),children:[o?h.jsx(M.header,{className:"ui-select__header",__css:{...d.header},children:o}):null,h.jsx(M.div,{className:ee("ui-select__list",r),__css:{...d.list},...V(j,I),children:a}),c?h.jsx(M.footer,{className:"ui-select__footer",__css:{...d.footer},children:c}):null]})});st.displayName="SelectList";st.__ui__="SelectList";export{_e as O,Yt as S,Qt as a,Re as b,st as c,U as d,Le as e,tt as f,Xt as u};
