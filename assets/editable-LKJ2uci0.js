import{j as B}from"./jsx-runtime-CfatFE5O.js";import{u as de}from"./index-Hr0uPYc7.js";import{u as fe}from"./index-xVP_xMlv.js";import{r as n}from"./index-ClcD9ViR.js";import{c as be,f as me}from"./form-control-DiJsSBY_.js";import{p as pe,C as ge,b as z,c as q,k as Ce,_ as Ee,u as he,f as Pe,$ as Y,a as S,h as d}from"./factory-Db31n_eg.js";import{f as M}from"./forward-ref-D13m8o2p.js";import{a as _e}from"./use-component-style-5HWcAXul.js";import{o as ye}from"./theme-provider-C-TvIt_J.js";const xe=l=>{let{id:i,defaultValue:f,isPreviewFocusable:b=!0,placeholder:a,previewFocusable:m,selectAllOnFocus:R=!0,startWithEditView:L,submitOnBlur:N=!0,value:$,onCancel:_,onChange:j,onEdit:G,onSubmit:y,...H}=be(l);m??(m=b);const K=Ce(G),{disabled:r,readOnly:u,required:x,...c}=Ee(H,me),[s,F]=n.useState(!!L&&!r),[o,k]=de({defaultValue:f||"",value:$,onChange:j}),v=!s&&!r,D=o.length===0,[V,O]=n.useState(o),g=n.useRef(null),J=n.useRef(null),A=n.useRef(null),I=n.useRef(null),T=n.useRef(null);fe({ref:g,elements:[I,T],enabled:s}),he(()=>{var e,t;s&&((e=g.current)==null||e.focus(),R&&((t=g.current)==null||t.select()))},[]),Pe(()=>{var e,t,P;if(!s){(e=A.current)==null||e.focus();return}(t=g.current)==null||t.focus(),R&&((P=g.current)==null||P.select()),K()},[s,K,R]),n.useEffect(()=>{if(s)return;const e=g.current;(e==null?void 0:e.ownerDocument.activeElement)===e&&(e==null||e.blur())},[s]);const w=n.useCallback(e=>k(e.currentTarget.value),[k]),C=n.useCallback(()=>O(o),[o]),E=n.useCallback(()=>{v&&F(!0)},[v]),p=n.useCallback(()=>{F(!1),k(V),_==null||_(V)},[V,_,k]),h=n.useCallback(()=>{F(!1),O(o),y==null||y(o)},[y,o]),Q=n.useCallback(e=>{if(!(e.key!=="Escape"&&e.key!=="Enter"))if(e.preventDefault(),e.key==="Escape")p();else{const{metaKey:t,shiftKey:P}=e;!P&&!t&&h()}},[p,h]),X=n.useCallback(e=>{e.key==="Escape"&&(e.preventDefault(),p())},[p]),W=n.useCallback(e=>{if(!s)return;const t=e.currentTarget.ownerDocument,P=e.relatedTarget??t.activeElement,ue=Y(I.current,P),ce=Y(T.current,P);!ue&&!ce&&(N?h():p())},[s,N,h,p]),se=n.useCallback((e={},t=null)=>({...e,ref:S(t,J),children:D?a:o,hidden:s,tabIndex:v&&m?0:void 0,onFocus:d(e.onFocus,E,C)}),[s,v,m,D,E,C,a,o]),oe=n.useCallback((e={},t=null)=>({...c,...e,id:i,ref:S(t,g),disabled:r,hidden:!s,placeholder:a,readOnly:u,required:x,value:o,onBlur:d(e.onBlur,W),onChange:d(e.onChange,w),onFocus:d(e.onFocus,C),onKeyDown:d(e.onKeyDown,Q)}),[r,i,s,W,w,Q,C,a,u,x,c,o]),ae=n.useCallback((e={},t=null)=>({...c,...e,id:i,ref:S(t,g),disabled:r,hidden:!s,placeholder:a,readOnly:u,required:x,value:o,onBlur:d(e.onBlur,W),onChange:d(e.onChange,w),onFocus:d(e.onFocus,C),onKeyDown:d(e.onKeyDown,X)}),[r,i,s,W,w,X,C,a,u,x,c,o]),ie=n.useCallback((e={},t=null)=>({...c,...e,ref:S(t,A),type:"button",disabled:r,readOnly:u,onClick:d(e.onClick,E)}),[r,E,u,c]),re=n.useCallback((e={},t=null)=>({...c,...e,ref:S(T,t),type:"button",disabled:r,readOnly:u,onClick:d(e.onClick,h)}),[r,h,u,c]),le=n.useCallback((e={},t=null)=>({...c,...e,ref:S(I,t),type:"button",disabled:r,readOnly:u,onClick:d(e.onClick,p)}),[r,p,u,c]);return{editing:s,value:o,getCancelProps:le,getEditProps:ie,getInputProps:oe,getPreviewProps:se,getSubmitProps:re,getTextareaProps:ae,onCancel:p,onEdit:E,onSubmit:h}},Ne=()=>{const{editing:l,getCancelProps:i,getEditProps:f,getSubmitProps:b}=U();return{editing:l,isEditing:l,getCancelProps:i,getEditProps:f,getSubmitProps:b}},[ke,U]=pe({name:"EditableContext",errorMessage:"useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"}),Z=M(({errorBorderColor:l,focusBorderColor:i,...f},b)=>{const[a,m]=_e("Editable",{errorBorderColor:l,focusBorderColor:i,...f});let{className:R,children:L,defaultValue:N,isDisabled:$,isInvalid:_,isPreviewFocusable:j,isReadOnly:G,isRequired:y,placeholder:H,previewFocusable:K,selectAllOnFocus:r,startWithEditView:u,submitOnBlur:x,value:c,onCancel:s,onChange:F,onEdit:o,onSubmit:k,...v}=ye(m);K??(K=j);const{editing:D,getCancelProps:V,getEditProps:O,getInputProps:g,getPreviewProps:J,getSubmitProps:A,getTextareaProps:I,onCancel:T,onEdit:w,onSubmit:C}=xe({defaultValue:N,isDisabled:$,isInvalid:_,isPreviewFocusable:j,isReadOnly:G,isRequired:y,placeholder:H,selectAllOnFocus:r,startWithEditView:u,submitOnBlur:x,value:c,onCancel:s,onChange:F,onEdit:o,onSubmit:k}),E=ge(L,{editing:D,onCancel:T,onEdit:w,onSubmit:C}),p={...a.container};return B.jsx(ke,{value:{editing:D,styles:a,getCancelProps:V,getEditProps:O,getInputProps:g,getPreviewProps:J,getSubmitProps:A,getTextareaProps:I},children:B.jsx(z.div,{ref:b,className:q("ui-editable",R),...v,__css:p,children:E})})});Z.displayName="Editable";Z.__ui__="Editable";const ee=M(({className:l,...i},f)=>{const{styles:b,getPreviewProps:a}=U(),m={bg:"transparent",cursor:"text",display:"inline-block",fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",...b.preview};return B.jsx(z.span,{className:q("ui-editable__preview",l),...a(i,f),__css:m})});ee.displayName="EditablePreview";ee.__ui__="EditablePreview";const te=M(({className:l,...i},f)=>{const{styles:b,getInputProps:a}=U(),m={bg:"transparent",fontSize:"inherit",fontWeight:"inherit",outline:0,textAlign:"inherit",...b.input};return B.jsx(z.input,{className:q("ui-editable__input",l),...a(i,f),__css:m})});te.displayName="EditableInput";te.__ui__="EditableInput";const ne=M(({className:l,...i},f)=>{const{styles:b,getTextareaProps:a}=U(),m={bg:"transparent",fontSize:"inherit",fontWeight:"inherit",outline:0,textAlign:"inherit",...b.textarea};return B.jsx(z.textarea,{className:q("ui-editable__textarea",l),...a(i,f),__css:m})});ne.displayName="EditableTextarea";ne.__ui__="EditableTextarea";export{Z as E,ee as a,te as b,ne as c,Ne as u};
