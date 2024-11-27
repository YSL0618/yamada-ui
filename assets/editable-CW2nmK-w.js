import{j as B}from"./jsx-runtime-CfatFE5O.js";import{u as de}from"./index-De_nPH_B.js";import{u as fe}from"./index-BVP762bF.js";import{r as n}from"./index-ClcD9ViR.js";import{u as be,f as me}from"./form-control-C7lyVmHF.js";import{y as pe,I as ge,b as z,c as q,p as Ce,a2 as Ee,u as he,l as Pe,a3 as Z,a as S,h as d}from"./factory-Dfrbb1EY.js";import{f as M}from"./forward-ref-D13m8o2p.js";import{a as ye}from"./use-component-style-fOirb5M1.js";import{o as _e}from"./theme-provider-DSx3k1bh.js";const xe=l=>{let{id:i,defaultValue:f,isPreviewFocusable:b=!0,placeholder:o,previewFocusable:m,selectAllOnFocus:R=!0,startWithEditView:L,submitOnBlur:N=!0,value:G,onCancel:y,onChange:j,onEdit:H,onSubmit:_,...J}=be(l);m??(m=b);const K=Ce(H),{disabled:r,readOnly:u,required:x,...c}=Ee(J,me),[s,F]=n.useState(!!L&&!r),[a,v]=de({defaultValue:f||"",value:G,onChange:j}),k=!s&&!r,D=a.length===0,[I,O]=n.useState(a),g=n.useRef(null),Q=n.useRef(null),A=n.useRef(null),V=n.useRef(null),T=n.useRef(null);fe({ref:g,elements:[V,T],enabled:s}),he(()=>{var e,t;s&&((e=g.current)==null||e.focus(),R&&((t=g.current)==null||t.select()))},[]),Pe(()=>{var e,t,P;if(!s){(e=A.current)==null||e.focus();return}(t=g.current)==null||t.focus(),R&&((P=g.current)==null||P.select()),K()},[s,K,R]),n.useEffect(()=>{if(s)return;const e=g.current;(e==null?void 0:e.ownerDocument.activeElement)===e&&(e==null||e.blur())},[s]);const w=n.useCallback(e=>v(e.currentTarget.value),[v]),C=n.useCallback(()=>O(a),[a]),E=n.useCallback(()=>{k&&F(!0)},[k]),p=n.useCallback(()=>{F(!1),v(I),y==null||y(I)},[I,y,v]),h=n.useCallback(()=>{F(!1),O(a),_==null||_(a)},[_,a]),X=n.useCallback(e=>{if(!(e.key!=="Escape"&&e.key!=="Enter"))if(e.preventDefault(),e.key==="Escape")p();else{const{metaKey:t,shiftKey:P}=e;!P&&!t&&h()}},[p,h]),Y=n.useCallback(e=>{e.key==="Escape"&&(e.preventDefault(),p())},[p]),W=n.useCallback(e=>{if(!s)return;const t=e.currentTarget.ownerDocument,P=e.relatedTarget??t.activeElement,ue=Z(V.current,P),ce=Z(T.current,P);!ue&&!ce&&(N?h():p())},[s,N,h,p]),se=n.useCallback((e={},t=null)=>({...e,ref:S(t,Q),children:D?o:a,hidden:s,tabIndex:k&&m?0:void 0,onFocus:d(e.onFocus,E,C)}),[s,k,m,D,E,C,o,a]),ae=n.useCallback((e={},t=null)=>({...c,...e,id:i,ref:S(t,g),disabled:r,hidden:!s,placeholder:o,readOnly:u,required:x,value:a,onBlur:d(e.onBlur,W),onChange:d(e.onChange,w),onFocus:d(e.onFocus,C),onKeyDown:d(e.onKeyDown,X)}),[r,i,s,W,w,X,C,o,u,x,c,a]),oe=n.useCallback((e={},t=null)=>({...c,...e,id:i,ref:S(t,g),disabled:r,hidden:!s,placeholder:o,readOnly:u,required:x,value:a,onBlur:d(e.onBlur,W),onChange:d(e.onChange,w),onFocus:d(e.onFocus,C),onKeyDown:d(e.onKeyDown,Y)}),[r,i,s,W,w,Y,C,o,u,x,c,a]),ie=n.useCallback((e={},t=null)=>({...c,...e,ref:S(t,A),type:"button",disabled:r,readOnly:u,onClick:d(e.onClick,E)}),[r,E,u,c]),re=n.useCallback((e={},t=null)=>({...c,...e,ref:S(T,t),type:"button",disabled:r,readOnly:u,onClick:d(e.onClick,h)}),[r,h,u,c]),le=n.useCallback((e={},t=null)=>({...c,...e,ref:S(V,t),type:"button",disabled:r,readOnly:u,onClick:d(e.onClick,p)}),[r,p,u,c]);return{editing:s,value:a,getCancelProps:le,getEditProps:ie,getInputProps:ae,getPreviewProps:se,getSubmitProps:re,getTextareaProps:oe,onCancel:p,onEdit:E,onSubmit:h}},Ne=()=>{const{editing:l,getCancelProps:i,getEditProps:f,getSubmitProps:b}=U();return{editing:l,isEditing:l,getCancelProps:i,getEditProps:f,getSubmitProps:b}},[ve,U]=pe({name:"EditableContext",errorMessage:"useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"}),$=M(({errorBorderColor:l,focusBorderColor:i,...f},b)=>{const[o,m]=ye("Editable",{errorBorderColor:l,focusBorderColor:i,...f});let{className:R,children:L,defaultValue:N,isDisabled:G,isInvalid:y,isPreviewFocusable:j,isReadOnly:H,isRequired:_,placeholder:J,previewFocusable:K,selectAllOnFocus:r,startWithEditView:u,submitOnBlur:x,value:c,onCancel:s,onChange:F,onEdit:a,onSubmit:v,...k}=_e(m);K??(K=j);const{editing:D,getCancelProps:I,getEditProps:O,getInputProps:g,getPreviewProps:Q,getSubmitProps:A,getTextareaProps:V,onCancel:T,onEdit:w,onSubmit:C}=xe({defaultValue:N,isDisabled:G,isInvalid:y,isPreviewFocusable:j,isReadOnly:H,isRequired:_,placeholder:J,selectAllOnFocus:r,startWithEditView:u,submitOnBlur:x,value:c,onCancel:s,onChange:F,onEdit:a,onSubmit:v}),E=ge(L,{editing:D,onCancel:T,onEdit:w,onSubmit:C}),p={...o.container};return B.jsx(ve,{value:{editing:D,styles:o,getCancelProps:I,getEditProps:O,getInputProps:g,getPreviewProps:Q,getSubmitProps:A,getTextareaProps:V},children:B.jsx(z.div,{ref:b,className:q("ui-editable",R),...k,__css:p,children:E})})});$.displayName="Editable";$.__ui__="Editable";const ee=M(({className:l,...i},f)=>{const{styles:b,getPreviewProps:o}=U(),m={bg:"transparent",cursor:"text",display:"inline-block",fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",...b.preview};return B.jsx(z.span,{className:q("ui-editable__preview",l),...o(i,f),__css:m})});ee.displayName="EditablePreview";ee.__ui__="EditablePreview";const te=M(({className:l,...i},f)=>{const{styles:b,getInputProps:o}=U(),m={bg:"transparent",fontSize:"inherit",fontWeight:"inherit",outline:0,textAlign:"inherit",...b.input};return B.jsx(z.input,{className:q("ui-editable__input",l),...o(i,f),__css:m})});te.displayName="EditableInput";te.__ui__="EditableInput";const ne=M(({className:l,...i},f)=>{const{styles:b,getTextareaProps:o}=U(),m={bg:"transparent",fontSize:"inherit",fontWeight:"inherit",outline:0,textAlign:"inherit",...b.textarea};return B.jsx(z.textarea,{className:q("ui-editable__textarea",l),...o(i,f),__css:m})});ne.displayName="EditableTextarea";ne.__ui__="EditableTextarea";export{$ as E,ee as a,te as b,ne as c,Ne as u};
