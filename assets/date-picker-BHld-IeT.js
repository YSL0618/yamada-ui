import{j as s}from"./jsx-runtime-CfatFE5O.js";import{u as dt}from"./index-CgNA1xsw.js";import{r as a}from"./index-ClcD9ViR.js";import{d as $,i as Qe,a as Xe,b as ft,C as mt}from"./calendar-B7kWmlXt.js";import{u as Ct}from"./index-De_nPH_B.js";import{u as Pt}from"./index-D4SEQqYY.js";import{u as kt}from"./index-Y4TAv5_r.js";import{u as ht,f as gt}from"./form-control-C7lyVmHF.js";import{u as _t}from"./i18n-provider-BEOsEj1w.js";import{u as yt,o as bt}from"./theme-provider-DSx3k1bh.js";import{a2 as Dt,L as vt,af as xt,aq as It,a3 as jt,a as oe,h as K,d as Ze,y as Ot,l as te,ar as wt,b as G,c as J,I as Ft,A as Vt,o as Nt}from"./factory-Dfrbb1EY.js";import{P as St,b as Bt,a as Et}from"./popover-trigger-4MaltcBz.js";import{P as Rt}from"./portal-ZwKcqPm6.js";import{b as Tt,a as Mt}from"./icon-DDeGQYl6.js";import{f as ae}from"./forward-ref-D13m8o2p.js";import{a as Ht}from"./use-component-style-fOirb5M1.js";const zt=k=>{var qe,Ge;const{locale:d}=_t(),{theme:c}=yt();let{type:m,allowInput:n=!0,allowInputBeyond:u=!1,amountOfMonths:r,animation:f,autoFocus:p=!0,boundary:C,calendarColorScheme:V,calendarSize:N,calendarVariant:M,closeDelay:S,closeOnBlur:b=!0,closeOnEsc:D=!0,dateFormat:H,defaultIsOpen:W,defaultMonth:z,defaultType:L,defaultValue:B,disableOutsideDays:v,duration:E=.2,enableMultiple:R,enableRange:h,eventListeners:T,excludeDate:P,firstDayOfWeek:t,flip:i,gutter:x,hiddenOutsideDays:le,holidays:ce,inputFormat:U="YYYY/MM/DD",isLazy:ue,isOpen:et,lazyBehavior:pe,locale:I,matchWidth:de,maxDate:g,maxSelectValues:fe,minDate:_,minSelectValues:me,modifiers:Ce,month:Pe,monthFormat:ke,offset:he,openDelay:ge,paginateBy:_e,parseDate:Q,pattern:tt=/[^0-9\-\/]/g,placement:ye="bottom-start",preventOverflow:be,strategy:De,today:ve,value:xe,weekdayFormat:Ie,weekendDays:je,withControls:Oe,withHeader:we,withLabel:Fe,withWeekdays:Ve,yearFormat:Ne,calendarProps:Se,onChange:Be,onChangeMonth:Ee,onChangeType:Re,onClear:X,onClose:ot,onDelete:Te,onEnter:Me,onOpen:at,__selectType:He,...j}=ht(k);const{"aria-readonly":Yt,...O}=Dt(j,gt),[ze,nt]=vt(j,xt),{isOpen:l,onClose:w,onOpen:Le}=Pt({defaultIsOpen:W,isOpen:et,onClose:ot,onOpen:at}),Z=a.useRef(null),q=a.useRef(null),{disabled:A,readOnly:Y}=O;I??(I=((Ge=(qe=c.__config)==null?void 0:qe.date)==null?void 0:Ge.locale)??d);const st=a.useCallback(e=>{let o=Q==null?void 0:Q(e);if(!o&&$(e).isValid()&&(o=$(e,U,I).toDate()),o!=null&&!(P!=null&&P(o)))return u||(g&&Qe(o,g)&&(o=g),_&&Xe(o,_)&&(o=_)),o},[u,P,U,I,g,_,Q]),rt=a.useCallback(e=>{if(e!=null&&!(P!=null&&P(e)))return u||(g&&Qe(e,g)&&(e=g),_&&Xe(e,_)&&(e=_)),$(e).locale(I).format(U)},[u,P,U,I,g,_]),y=a.useCallback(()=>{var e;A||Y||(Le(),p&&n&&((e=q.current)==null||e.focus()))},[p,n,A,Y,Le]),Ae=a.useCallback(()=>{var e;l?p&&n&&((e=q.current)==null||e.focus()):y()},[p,n,l,y]),Ye=a.useCallback(()=>{l||y()},[l,y]),Ke=a.useCallback(e=>{const o=It(e);jt(Z.current,o)||b&&l&&w()},[b,l,w]),We=a.useCallback(e=>{if(e.key===" "&&(e.key=e.code),A||Y)return;const Je={Backspace:Te,Enter:l?Me:F=>{F.preventDefault(),F.stopPropagation(),y()},Escape:D?F=>{F.preventDefault(),F.stopPropagation(),w()}:void 0,Space:l?void 0:F=>{F.preventDefault(),F.stopPropagation(),y()}}[e.key];Je&&Je(e)},[D,A,Y,l,w,Me,Te,y]),Ue=a.useCallback(e=>{var o;e.stopPropagation(),X==null||X(),p&&n&&l&&((o=q.current)==null||o.focus())},[p,n,l,X]);kt({ref:Z,enabled:l&&b,handler:w});const it=a.useCallback((e={},o=null)=>({ref:oe(Z,o),...ze,...O,...e,onBlur:K(e.onBlur,j.onBlur,Ke),onClick:K(e.onClick,j.onClick,Ae)}),[ze,O,Ke,Ae,j]),lt=a.useCallback(e=>({animation:f,boundary:C,closeDelay:S,duration:E,eventListeners:T,flip:i,gutter:x,isLazy:ue,lazyBehavior:pe,matchWidth:de,modifiers:Ce,offset:he,openDelay:ge,placement:ye,preventOverflow:be,strategy:De,...e,closeOnBlur:!1,closeOnButton:!1,isOpen:l,trigger:"never",onClose:w,onOpen:y}),[f,C,S,E,T,i,x,ue,l,pe,de,Ce,he,w,y,ge,ye,be,De]),ct=a.useCallback((e={},o=null)=>({"aria-haspopup":"dialog","data-active":Ze(l),"data-not-allowed":Ze(!Y&&!A&&!n),role:"combobox",tabIndex:-1,...O,...e,ref:oe(q,o),onFocus:K(e.onFocus,j.onFocus,Ye),onKeyDown:K(e.onKeyDown,j.onKeyDown,We)}),[n,A,Y,O,l,j,Ye,We]),ut=a.useCallback(e=>({...e,type:m,colorScheme:V,size:N,variant:M,amountOfMonths:r,dateFormat:H,defaultMonth:z,defaultType:L,disableOutsideDays:v,firstDayOfWeek:t,hiddenOutsideDays:le,holidays:ce,maxSelectValues:fe,minSelectValues:me,month:Pe,monthFormat:ke,paginateBy:_e,today:ve,weekdayFormat:Ie,weekendDays:je,withControls:Oe,withHeader:we,withLabel:Fe,withWeekdays:Ve,yearFormat:Ne,onChangeMonth:Ee,onChangeType:Re,...Se,defaultValue:B,enableMultiple:R,enableRange:h,excludeDate:P,locale:I,maxDate:g,minDate:_,value:xe,onChange:Be,__selectType:He}),[le,fe,me,R,h,r,V,Se,N,M,H,z,L,B,v,P,t,ce,I,g,_,Pe,ke,Be,Ee,Re,_e,ve,m,xe,Ie,je,Oe,we,Fe,Ve,Ne,He]),pt=a.useCallback(({clear:e,...o})=>({...o,...O,onClick:K(o.onClick,e?Ue:void 0)}),[O,Ue]);return{allowInput:n,containerRef:Z,dateToString:rt,inputFormat:U,inputRef:q,isOpen:l,locale:I,pattern:tt,stringToDate:st,formControlProps:O,getCalendarProps:ut,getContainerProps:it,getFieldProps:ct,getIconProps:pt,getPopoverProps:lt,inputProps:nt,onClose:w,onOpen:y}},[Lt,ne]=Ot({name:"DatePickerContext",errorMessage:`useDatePickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<DatePicker />"`}),At=({closeOnSelect:k=!0,defaultValue:d,placeholder:c,value:m,onChange:n,...u})=>{const[r,f]=Ct({defaultValue:d,value:m,onChange:n,onUpdate:(t,i)=>!ft(t,i)}),{allowInput:p,dateToString:C,inputFormat:V,inputRef:N,locale:M,pattern:S,stringToDate:b,formControlProps:D,getCalendarProps:H,getContainerProps:W,getFieldProps:z,getIconProps:L,getPopoverProps:B,inputProps:v,onClose:E}=zt({...u,defaultValue:d,value:r,onChange:t=>{const i=C(t);f(t),h(i),k&&t&&E()},onClear:()=>{f(void 0),h(void 0)},onClose:()=>{var i;const t=C(r);h(t),(i=u.onClose)==null||i.call(u)}}),[R,h]=a.useState(C(r)),T=a.useCallback(t=>{let i=t.target.value;i=i.replace(S,"");const x=b(i);h(i),x&&$(x).isValid()?f(x):f(void 0)},[S,b,h,f]);te(()=>{f(m)},[m]),te(()=>{if(N.current&&wt(N.current))return;const t=C(r);h(t)},[r]),te(()=>{const t=C(r);h(t)},[M,V]);const P=a.useCallback((t={},i=null)=>{const x={...t.style,...v.style,...D.disabled||!p?{pointerEvents:"none"}:{}};return{autoComplete:"off",placeholder:c,tabIndex:p?0:-1,...D,...v,...t,ref:i,style:x,value:R??"",onChange:K(t.onChange,T)}},[v,p,c,D,R,T]);return{value:r,getCalendarProps:H,getContainerProps:W,getFieldProps:z,getIconProps:L,getInputProps:P,getPopoverProps:B,onClose:E}},$e=ae((k,d)=>{const[c,m]=Ht("DatePicker",k);let{className:n,children:u,color:r,h:f,height:p,isClearable:C=!0,minH:V,minHeight:N,clearIconProps:M,containerProps:S,contentProps:b,fieldProps:D,iconProps:H,inputProps:W,portalProps:z={isDisabled:!0},...L}=bt(m);const{value:B,getCalendarProps:v,getContainerProps:E,getFieldProps:R,getIconProps:h,getInputProps:T,getPopoverProps:P,onClose:t}=At(L);f??(f=p),V??(V=N);const i={color:r,h:"fit-content",w:"100%",...c.container};return s.jsx(Lt,{value:c,children:s.jsx(St,{...P(),children:s.jsxs(G.div,{className:J("ui-date-picker",n),__css:i,...E(S),children:[s.jsxs(G.div,{className:"ui-date-picker__inner",__css:{position:"relative",...c.inner},children:[s.jsx(se,{...R({h:f,minH:V,...D},d),inputProps:T(W)}),C&&B?s.jsx(ie,{...h({clear:!0,...M})}):s.jsx(ee,{...h({clear:!1,...H})})]}),s.jsx(Rt,{...z,children:s.jsxs(Bt,{as:"div",className:"ui-date-picker__content",__css:{...c.content},...b,children:[s.jsx(mt,{className:"ui-date-picker__calendar",...v()}),Ft(u,{value:B,onClose:t})]})})]})})})});$e.displayName="DatePicker";$e.__ui__="DatePicker";const se=ae(({className:k,h:d,minH:c,inputProps:m,...n},u)=>{const r=ne(),{ref:f,...p}=m??{},C={alignItems:"center",display:"flex",h:d,minH:c,pe:"2rem",...r.field};return s.jsx(Et,{children:s.jsx(G.div,{className:J("ui-date-picker__field",k),__css:C,...n,children:s.jsx(G.input,{ref:oe(u,f),className:"ui-date-picker__field__input","aria-label":"Input date value",display:"inline-block",w:"100%",...p})})})});se.displayName="DatePickerField";se.__ui__="DatePickerField";const ee=ae(({className:k,children:d,__css:c,...m},n)=>{const r={alignItems:"center",cursor:"pointer",display:"inline-flex",justifyContent:"center",pointerEvents:"none",position:"absolute",top:"50%",transform:"translateY(-50%)",...ne().icon,...c},p=Vt(d).map(C=>a.cloneElement(C,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1}));return s.jsx(G.div,{ref:n,className:J("ui-date-picker__icon",k),__css:r,...m,children:Nt(d)?p:s.jsx(re,{})})});ee.displayName="DatePickerIcon";ee.__ui__="DatePickerIcon";const re=({className:k,...d})=>s.jsx(Tt,{className:J("ui-date-picker__icon__calendar",k),viewBox:"0 0 24 24",...d,children:s.jsx("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",fill:"currentColor"})});re.displayName="DatePickerCalendarIcon";re.__ui__="DatePickerCalendarIcon";const ie=({className:k,children:d,...c})=>{const m=a.useRef(null),n=ne(),u=c.disabled,r=dt({ref:m,isDisabled:u,...c});return s.jsx(ee,{className:J("ui-date-picker__icon--clear",k),"aria-label":"Clear value",__css:n.clearIcon,...r,children:d??s.jsx(Mt,{h:"0.5em",w:"0.5em"})})};ie.displayName="DatePickerClearIcon";ie.__ui__="DatePickerClearIcon";export{$e as D,Lt as a,se as b,ie as c,ee as d,ne as e,zt as u};
