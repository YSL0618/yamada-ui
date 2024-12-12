import{R as x}from"./index-ClcD9ViR.js";var ye=e=>e.type==="checkbox",te=e=>e instanceof Date,M=e=>e==null;const tt=e=>typeof e=="object";var S=e=>!M(e)&&!Array.isArray(e)&&tt(e)&&!te(e),rt=e=>S(e)&&e.target?ye(e.target)?e.target.checked:e.target.value:e,mt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,st=(e,s)=>e.has(mt(s)),xt=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let s;const t=Array.isArray(e),u=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(pe&&(e instanceof Blob||u))&&(t||S(e)))if(s=t?[]:{},!t&&!xt(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=N(e[a]));else return e;return s}var Ae=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,c=(e,s,t)=>{if(!s||!S(e))return t;const u=Ae(s.split(/[,[\].]+?/)).reduce((a,n)=>M(a)?a:a[n],e);return D(u)||u===e?D(e[s])?t:e[s]:u},q=e=>typeof e=="boolean",Te=e=>/^\w*$/.test(e),it=e=>Ae(e.replace(/["|']|\]/g,"").split(/\.|\[/)),w=(e,s,t)=>{let u=-1;const a=Te(s)?[s]:it(s),n=a.length,y=n-1;for(;++u<n;){const g=a[u];let m=t;if(u!==y){const k=e[g];m=S(k)||Array.isArray(k)?k:isNaN(+a[u+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;e[g]=m,e=e[g]}return e};const _e={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},wt=x.createContext(null),Le=()=>x.useContext(wt);var ut=(e,s,t,u=!0)=>{const a={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const y=n;return s._proxyFormState[y]!==$.all&&(s._proxyFormState[y]=!u||$.all),t&&(t[y]=!0),e[y]}});return a},P=e=>S(e)&&!Object.keys(e).length,at=(e,s,t,u)=>{t(e);const{name:a,...n}=e;return P(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(y=>s[y]===(!u||$.all))},ce=e=>Array.isArray(e)?e:[e],lt=(e,s,t)=>!e||!s||e===s||ce(e).some(u=>u&&(t?u===s:u.startsWith(s)||s.startsWith(u)));function Oe(e){const s=x.useRef(e);s.current=e,x.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function Dt(e){const s=Le(),{control:t=s.control,disabled:u,name:a,exact:n}=e||{},[y,g]=x.useState(t._formState),m=x.useRef(!0),k=x.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),V=x.useRef(a);return V.current=a,Oe({disabled:u,next:v=>m.current&&lt(V.current,v.name,n)&&at(v,k.current,t._updateFormState)&&g({...t._formState,...v}),subject:t._subjects.state}),x.useEffect(()=>(m.current=!0,k.current.isValid&&t._updateValid(!0),()=>{m.current=!1}),[t]),x.useMemo(()=>ut(y,t,k.current,!1),[y,t])}var G=e=>typeof e=="string",nt=(e,s,t,u,a)=>G(e)?(u&&s.watch.add(e),c(t,e,a)):Array.isArray(e)?e.map(n=>(u&&s.watch.add(n),c(t,n))):(u&&(s.watchAll=!0),t);function St(e){const s=Le(),{control:t=s.control,name:u,defaultValue:a,disabled:n,exact:y}=e||{},g=x.useRef(u);g.current=u,Oe({disabled:n,subject:t._subjects.values,next:V=>{lt(g.current,V.name,y)&&k(N(nt(g.current,t._names,V.values||t._formValues,!1,a)))}});const[m,k]=x.useState(t._getWatch(u,a));return x.useEffect(()=>t._removeUnmounted()),m}function Et(e){const s=Le(),{name:t,disabled:u,control:a=s.control,shouldUnregister:n}=e,y=st(a._names.array,t),g=St({control:a,name:t,defaultValue:c(a._formValues,t,c(a._defaultValues,t,e.defaultValue)),exact:!0}),m=Dt({control:a,name:t,exact:!0}),k=x.useRef(a.register(t,{...e.rules,value:g,...q(e.disabled)?{disabled:e.disabled}:{}})),V=x.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(m.errors,t)},isDirty:{enumerable:!0,get:()=>!!c(m.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!c(m.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!c(m.validatingFields,t)},error:{enumerable:!0,get:()=>c(m.errors,t)}}),[m,t]),v=x.useMemo(()=>({name:t,value:g,...q(u)||m.disabled?{disabled:m.disabled||u}:{},onChange:U=>k.current.onChange({target:{value:rt(U),name:t},type:_e.CHANGE}),onBlur:()=>k.current.onBlur({target:{value:c(a._formValues,t),name:t},type:_e.BLUR}),ref:U=>{const B=c(a._fields,t);B&&U&&(B._f.ref={focus:()=>U.focus(),select:()=>U.select(),setCustomValidity:E=>U.setCustomValidity(E),reportValidity:()=>U.reportValidity()})}}),[t,a._formValues,u,m.disabled,g,a._fields]);return x.useEffect(()=>{const U=a._options.shouldUnregister||n,B=(E,ue)=>{const I=c(a._fields,E);I&&I._f&&(I._f.mount=ue)};if(B(t,!0),U){const E=N(c(a._options.defaultValues,t));w(a._defaultValues,t,E),D(c(a._formValues,t))&&w(a._formValues,t,E)}return()=>{(y?U&&!a._state.action:U)?a.unregister(t):B(t,!1)}},[t,a,y,n]),x.useEffect(()=>{q(u)&&c(a._fields,t)&&a._updateDisabledField({disabled:u,fields:a._fields,name:t,value:c(a._fields,t)._f.value})},[u,t,a]),x.useMemo(()=>({field:v,formState:m,fieldState:V}),[v,m,V])}const Ht=e=>e.render(Et(e));var kt=(e,s,t,u,a)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[u]:a||!0}}:{},Ke=e=>({isOnSubmit:!e||e===$.onSubmit,isOnBlur:e===$.onBlur,isOnChange:e===$.onChange,isOnAll:e===$.all,isOnTouch:e===$.onTouched}),Ge=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(u=>e.startsWith(u)&&/^\.\w+/.test(e.slice(u.length))));const de=(e,s,t,u)=>{for(const a of t||Object.keys(e)){const n=c(e,a);if(n){const{_f:y,...g}=n;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],a)&&!u)return!0;if(y.ref&&s(y.ref,y.name)&&!u)return!0;if(de(g,s))break}else if(S(g)&&de(g,s))break}}};var Ct=(e,s,t)=>{const u=ce(c(e,t));return w(u,"root",s[t]),w(e,t,u),e},Ue=e=>e.type==="file",K=e=>typeof e=="function",be=e=>{if(!pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>G(e),Re=e=>e.type==="radio",Ve=e=>e instanceof RegExp;const Ye={value:!1,isValid:!1},ze={value:!0,isValid:!0};var ot=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:Ye}return Ye};const Je={isValid:!1,value:null};var ft=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Je):Je;function Qe(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||q(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var ie=e=>S(e)&&!Ve(e)?e:{value:e,message:""},Xe=async(e,s,t,u,a)=>{const{ref:n,refs:y,required:g,maxLength:m,minLength:k,min:V,max:v,pattern:U,validate:B,name:E,valueAsNumber:ue,mount:I,disabled:Q}=e._f,F=c(s,E);if(!I||Q)return{};const Y=y?y[0]:n,z=b=>{u&&Y.reportValidity&&(Y.setCustomValidity(q(b)?"":b||""),Y.reportValidity())},C={},re=Re(n),ge=ye(n),Z=re||ge,se=(ue||Ue(n))&&D(n.value)&&D(F)||be(n)&&n.value===""||F===""||Array.isArray(F)&&!F.length,W=kt.bind(null,E,t,C),he=(b,A,p,R=J.maxLength,H=J.minLength)=>{const j=b?A:p;C[E]={type:b?R:H,message:j,ref:n,...W(b?R:H,j)}};if(a?!Array.isArray(F)||!F.length:g&&(!Z&&(se||M(F))||q(F)&&!F||ge&&!ot(y).isValid||re&&!ft(y).isValid)){const{value:b,message:A}=ve(g)?{value:!!g,message:g}:ie(g);if(b&&(C[E]={type:J.required,message:A,ref:Y,...W(J.required,A)},!t))return z(A),C}if(!se&&(!M(V)||!M(v))){let b,A;const p=ie(v),R=ie(V);if(!M(F)&&!isNaN(F)){const H=n.valueAsNumber||F&&+F;M(p.value)||(b=H>p.value),M(R.value)||(A=H<R.value)}else{const H=n.valueAsDate||new Date(F),j=ne=>new Date(new Date().toDateString()+" "+ne),ae=n.type=="time",le=n.type=="week";G(p.value)&&F&&(b=ae?j(F)>j(p.value):le?F>p.value:H>new Date(p.value)),G(R.value)&&F&&(A=ae?j(F)<j(R.value):le?F<R.value:H<new Date(R.value))}if((b||A)&&(he(!!b,p.message,R.message,J.max,J.min),!t))return z(C[E].message),C}if((m||k)&&!se&&(G(F)||a&&Array.isArray(F))){const b=ie(m),A=ie(k),p=!M(b.value)&&F.length>+b.value,R=!M(A.value)&&F.length<+A.value;if((p||R)&&(he(p,b.message,A.message),!t))return z(C[E].message),C}if(U&&!se&&G(F)){const{value:b,message:A}=ie(U);if(Ve(b)&&!F.match(b)&&(C[E]={type:J.pattern,message:A,ref:n,...W(J.pattern,A)},!t))return z(A),C}if(B){if(K(B)){const b=await B(F,s),A=Qe(b,Y);if(A&&(C[E]={...A,...W(J.validate,A.message)},!t))return z(A.message),C}else if(S(B)){let b={};for(const A in B){if(!P(b)&&!t)break;const p=Qe(await B[A](F,s),Y,A);p&&(b={...p,...W(A,p.message)},z(p.message),t&&(C[E]=b))}if(!P(b)&&(C[E]={ref:Y,...b},!t))return C}}return z(!0),C};function pt(e,s){const t=s.slice(0,-1).length;let u=0;for(;u<t;)e=D(e)?u++:e[s[u++]];return e}function Tt(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function T(e,s){const t=Array.isArray(s)?s:Te(s)?[s]:it(s),u=t.length===1?e:pt(e,t),a=t.length-1,n=t[a];return u&&delete u[n],a!==0&&(S(u)&&P(u)||Array.isArray(u)&&Tt(u))&&T(e,t.slice(0,-1)),e}var Se=()=>{let e=[];return{get observers(){return e},next:a=>{for(const n of e)n.next&&n.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(n=>n!==a)}}),unsubscribe:()=>{e=[]}}},Ce=e=>M(e)||!tt(e);function X(e,s){if(Ce(e)||Ce(s))return e===s;if(te(e)&&te(s))return e.getTime()===s.getTime();const t=Object.keys(e),u=Object.keys(s);if(t.length!==u.length)return!1;for(const a of t){const n=e[a];if(!u.includes(a))return!1;if(a!=="ref"){const y=s[a];if(te(n)&&te(y)||S(n)&&S(y)||Array.isArray(n)&&Array.isArray(y)?!X(n,y):n!==y)return!1}}return!0}var ct=e=>e.type==="select-multiple",Lt=e=>Re(e)||ye(e),Ee=e=>be(e)&&e.isConnected,dt=e=>{for(const s in e)if(K(e[s]))return!0;return!1};function Fe(e,s={}){const t=Array.isArray(e);if(S(e)||t)for(const u in e)Array.isArray(e[u])||S(e[u])&&!dt(e[u])?(s[u]=Array.isArray(e[u])?[]:{},Fe(e[u],s[u])):M(e[u])||(s[u]=!0);return s}function yt(e,s,t){const u=Array.isArray(e);if(S(e)||u)for(const a in e)Array.isArray(e[a])||S(e[a])&&!dt(e[a])?D(s)||Ce(t[a])?t[a]=Array.isArray(e[a])?Fe(e[a],[]):{...Fe(e[a])}:yt(e[a],M(s)?{}:s[a],t[a]):t[a]=!X(e[a],s[a]);return t}var oe=(e,s)=>yt(e,s,Fe(s)),gt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:u})=>D(e)?e:s?e===""?NaN:e&&+e:t&&G(e)?new Date(e):u?u(e):e;function ke(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Ue(s)?s.files:Re(s)?ft(e.refs).value:ct(s)?[...s.selectedOptions].map(({value:t})=>t):ye(s)?ot(e.refs).value:gt(D(s.value)?e.ref.value:s.value,e)}var Ot=(e,s,t,u)=>{const a={};for(const n of e){const y=c(s,n);y&&w(a,n,y._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:u}},fe=e=>D(e)?e:Ve(e)?e.source:S(e)?Ve(e.value)?e.value.source:e.value:e;const Ze="AsyncFunction";var Ut=e=>!!e&&!!e.validate&&!!(K(e.validate)&&e.validate.constructor.name===Ze||S(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Ze)),Rt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function et(e,s,t){const u=c(e,t);if(u||Te(t))return{error:u,name:t};const a=t.split(".");for(;a.length;){const n=a.join("."),y=c(s,n),g=c(e,n);if(y&&!Array.isArray(y)&&t!==n)return{name:t};if(g&&g.type)return{name:n,error:g};a.pop()}return{name:t}}var Mt=(e,s,t,u,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(s||e):(t?u.isOnBlur:a.isOnBlur)?!e:(t?u.isOnChange:a.isOnChange)?e:!0,Bt=(e,s)=>!Ae(c(e,s)).length&&T(e,s);const Nt={mode:$.onSubmit,reValidateMode:$.onChange,shouldFocusError:!0};function Pt(e={}){let s={...Nt,...e},t={submitCount:0,isDirty:!1,isLoading:K(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},u={},a=S(s.defaultValues)||S(s.values)?N(s.defaultValues||s.values)||{}:{},n=s.shouldUnregister?{}:N(a),y={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},m,k=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Se(),array:Se(),state:Se()},U=Ke(s.mode),B=Ke(s.reValidateMode),E=s.criteriaMode===$.all,ue=r=>i=>{clearTimeout(k),k=setTimeout(r,i)},I=async r=>{if(!s.disabled&&(V.isValid||r)){const i=s.resolver?P((await Z()).errors):await W(u,!0);i!==t.isValid&&v.state.next({isValid:i})}},Q=(r,i)=>{!s.disabled&&(V.isValidating||V.validatingFields)&&((r||Array.from(g.mount)).forEach(l=>{l&&(i?w(t.validatingFields,l,i):T(t.validatingFields,l))}),v.state.next({validatingFields:t.validatingFields,isValidating:!P(t.validatingFields)}))},F=(r,i=[],l,d,f=!0,o=!0)=>{if(d&&l&&!s.disabled){if(y.action=!0,o&&Array.isArray(c(u,r))){const h=l(c(u,r),d.argA,d.argB);f&&w(u,r,h)}if(o&&Array.isArray(c(t.errors,r))){const h=l(c(t.errors,r),d.argA,d.argB);f&&w(t.errors,r,h),Bt(t.errors,r)}if(V.touchedFields&&o&&Array.isArray(c(t.touchedFields,r))){const h=l(c(t.touchedFields,r),d.argA,d.argB);f&&w(t.touchedFields,r,h)}V.dirtyFields&&(t.dirtyFields=oe(a,n)),v.state.next({name:r,isDirty:b(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else w(n,r,i)},Y=(r,i)=>{w(t.errors,r,i),v.state.next({errors:t.errors})},z=r=>{t.errors=r,v.state.next({errors:t.errors,isValid:!1})},C=(r,i,l,d)=>{const f=c(u,r);if(f){const o=c(n,r,D(l)?c(a,r):l);D(o)||d&&d.defaultChecked||i?w(n,r,i?o:ke(f._f)):R(r,o),y.mount&&I()}},re=(r,i,l,d,f)=>{let o=!1,h=!1;const _={name:r};if(!s.disabled){const L=!!(c(u,r)&&c(u,r)._f&&c(u,r)._f.disabled);if(!l||d){V.isDirty&&(h=t.isDirty,t.isDirty=_.isDirty=b(),o=h!==_.isDirty);const O=L||X(c(a,r),i);h=!!(!L&&c(t.dirtyFields,r)),O||L?T(t.dirtyFields,r):w(t.dirtyFields,r,!0),_.dirtyFields=t.dirtyFields,o=o||V.dirtyFields&&h!==!O}if(l){const O=c(t.touchedFields,r);O||(w(t.touchedFields,r,l),_.touchedFields=t.touchedFields,o=o||V.touchedFields&&O!==l)}o&&f&&v.state.next(_)}return o?_:{}},ge=(r,i,l,d)=>{const f=c(t.errors,r),o=V.isValid&&q(i)&&t.isValid!==i;if(s.delayError&&l?(m=ue(()=>Y(r,l)),m(s.delayError)):(clearTimeout(k),m=null,l?w(t.errors,r,l):T(t.errors,r)),(l?!X(f,l):f)||!P(d)||o){const h={...d,...o&&q(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...h},v.state.next(h)}},Z=async r=>{Q(r,!0);const i=await s.resolver(n,s.context,Ot(r||g.mount,u,s.criteriaMode,s.shouldUseNativeValidation));return Q(r),i},se=async r=>{const{errors:i}=await Z(r);if(r)for(const l of r){const d=c(i,l);d?w(t.errors,l,d):T(t.errors,l)}else t.errors=i;return i},W=async(r,i,l={valid:!0})=>{for(const d in r){const f=r[d];if(f){const{_f:o,...h}=f;if(o){const _=g.array.has(o.name),L=f._f&&Ut(f._f);L&&V.validatingFields&&Q([d],!0);const O=await Xe(f,n,E,s.shouldUseNativeValidation&&!i,_);if(L&&V.validatingFields&&Q([d]),O[o.name]&&(l.valid=!1,i))break;!i&&(c(O,o.name)?_?Ct(t.errors,O,o.name):w(t.errors,o.name,O[o.name]):T(t.errors,o.name))}!P(h)&&await W(h,i,l)}}return l.valid},he=()=>{for(const r of g.unMount){const i=c(u,r);i&&(i._f.refs?i._f.refs.every(l=>!Ee(l)):!Ee(i._f.ref))&&me(r)}g.unMount=new Set},b=(r,i)=>!s.disabled&&(r&&i&&w(n,r,i),!X(Me(),a)),A=(r,i,l)=>nt(r,g,{...y.mount?n:D(i)?a:G(r)?{[r]:i}:i},l,i),p=r=>Ae(c(y.mount?n:a,r,s.shouldUnregister?c(a,r,[]):[])),R=(r,i,l={})=>{const d=c(u,r);let f=i;if(d){const o=d._f;o&&(!o.disabled&&w(n,r,gt(i,o)),f=be(o.ref)&&M(i)?"":i,ct(o.ref)?[...o.ref.options].forEach(h=>h.selected=f.includes(h.value)):o.refs?ye(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(_=>_===h.value):f===h.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(h=>h.checked=h.value===f):Ue(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||v.values.next({name:r,values:{...n}})))}(l.shouldDirty||l.shouldTouch)&&re(r,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ne(r)},H=(r,i,l)=>{for(const d in i){const f=i[d],o=`${r}.${d}`,h=c(u,o);(g.array.has(r)||S(f)||h&&!h._f)&&!te(f)?H(o,f,l):R(o,f,l)}},j=(r,i,l={})=>{const d=c(u,r),f=g.array.has(r),o=N(i);w(n,r,o),f?(v.array.next({name:r,values:{...n}}),(V.isDirty||V.dirtyFields)&&l.shouldDirty&&v.state.next({name:r,dirtyFields:oe(a,n),isDirty:b(r,o)})):d&&!d._f&&!M(o)?H(r,o,l):R(r,o,l),Ge(r,g)&&v.state.next({...t}),v.values.next({name:y.mount?r:void 0,values:{...n}})},ae=async r=>{y.mount=!0;const i=r.target;let l=i.name,d=!0;const f=c(u,l),o=()=>i.type?ke(f._f):rt(r),h=_=>{d=Number.isNaN(_)||te(_)&&isNaN(_.getTime())||X(_,c(n,l,_))};if(f){let _,L;const O=o(),ee=r.type===_e.BLUR||r.type===_e.FOCUS_OUT,Vt=!Rt(f._f)&&!s.resolver&&!c(t.errors,l)&&!f._f.deps||Mt(ee,c(t.touchedFields,l),t.isSubmitted,B,U),we=Ge(l,g,ee);w(n,l,O),ee?(f._f.onBlur&&f._f.onBlur(r),m&&m(0)):f._f.onChange&&f._f.onChange(r);const De=re(l,O,ee,!1),Ft=!P(De)||we;if(!ee&&v.values.next({name:l,type:r.type,values:{...n}}),Vt)return V.isValid&&(s.mode==="onBlur"?ee&&I():I()),Ft&&v.state.next({name:l,...we?{}:De});if(!ee&&we&&v.state.next({...t}),s.resolver){const{errors:He}=await Z([l]);if(h(O),d){const At=et(t.errors,u,l),$e=et(He,u,At.name||l);_=$e.error,l=$e.name,L=P(He)}}else Q([l],!0),_=(await Xe(f,n,E,s.shouldUseNativeValidation))[l],Q([l]),h(O),d&&(_?L=!1:V.isValid&&(L=await W(u,!0)));d&&(f._f.deps&&ne(f._f.deps),ge(l,L,_,De))}},le=(r,i)=>{if(c(t.errors,i)&&r.focus)return r.focus(),1},ne=async(r,i={})=>{let l,d;const f=ce(r);if(s.resolver){const o=await se(D(r)?r:f);l=P(o),d=r?!f.some(h=>c(o,h)):l}else r?(d=(await Promise.all(f.map(async o=>{const h=c(u,o);return await W(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!d&&!t.isValid)&&I()):d=l=await W(u);return v.state.next({...!G(r)||V.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors}),i.shouldFocus&&!d&&de(u,le,r?f:g.mount),d},Me=r=>{const i={...y.mount?n:a};return D(r)?i:G(r)?c(i,r):r.map(l=>c(i,l))},Be=(r,i)=>({invalid:!!c((i||t).errors,r),isDirty:!!c((i||t).dirtyFields,r),error:c((i||t).errors,r),isValidating:!!c(t.validatingFields,r),isTouched:!!c((i||t).touchedFields,r)}),ht=r=>{r&&ce(r).forEach(i=>T(t.errors,i)),v.state.next({errors:r?t.errors:{}})},Ne=(r,i,l)=>{const d=(c(u,r,{_f:{}})._f||{}).ref,f=c(t.errors,r)||{},{ref:o,message:h,type:_,...L}=f;w(t.errors,r,{...L,...i,ref:d}),v.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&d&&d.focus&&d.focus()},vt=(r,i)=>K(r)?v.values.subscribe({next:l=>r(A(void 0,i),l)}):A(r,i,!0),me=(r,i={})=>{for(const l of r?ce(r):g.mount)g.mount.delete(l),g.array.delete(l),i.keepValue||(T(u,l),T(n,l)),!i.keepError&&T(t.errors,l),!i.keepDirty&&T(t.dirtyFields,l),!i.keepTouched&&T(t.touchedFields,l),!i.keepIsValidating&&T(t.validatingFields,l),!s.shouldUnregister&&!i.keepDefaultValue&&T(a,l);v.values.next({values:{...n}}),v.state.next({...t,...i.keepDirty?{isDirty:b()}:{}}),!i.keepIsValid&&I()},Pe=({disabled:r,name:i,field:l,fields:d,value:f})=>{if(q(r)&&y.mount||r){const o=r?void 0:D(f)?ke(l?l._f:c(d,i)._f):f;(r||!r&&!D(o))&&w(n,i,o),re(i,o,!1,!1,!0)}},xe=(r,i={})=>{let l=c(u,r);const d=q(i.disabled)||q(s.disabled);return w(u,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...i}}),g.mount.add(r),l?Pe({field:l,disabled:q(i.disabled)?i.disabled:s.disabled,name:r,value:i.value}):C(r,!0,i.value),{...d?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:fe(i.min),max:fe(i.max),minLength:fe(i.minLength),maxLength:fe(i.maxLength),pattern:fe(i.pattern)}:{},name:r,onChange:ae,onBlur:ae,ref:f=>{if(f){xe(r,i),l=c(u,r);const o=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=Lt(o),_=l._f.refs||[];if(h?_.find(L=>L===o):o===l._f.ref)return;w(u,r,{_f:{...l._f,...h?{refs:[..._.filter(Ee),o,...Array.isArray(c(a,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),C(r,!1,void 0,o)}else l=c(u,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(st(g.array,r)&&y.action)&&g.unMount.add(r)}}},Ie=()=>s.shouldFocusError&&de(u,le,g.mount),_t=r=>{q(r)&&(v.state.next({disabled:r}),de(u,(i,l)=>{const d=c(u,l);d&&(i.disabled=d._f.disabled||r,Array.isArray(d._f.refs)&&d._f.refs.forEach(f=>{f.disabled=d._f.disabled||r}))},0,!1))},qe=(r,i)=>async l=>{let d;if(l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist()),s.disabled){i&&await i({...t.errors},l);return}let f=N(n);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:h}=await Z();t.errors=o,f=h}else await W(u);if(T(t.errors,"root"),P(t.errors)){v.state.next({errors:{}});try{await r(f,l)}catch(o){d=o}}else i&&await i({...t.errors},l),Ie(),setTimeout(Ie);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:P(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},bt=(r,i={})=>{c(u,r)&&(D(i.defaultValue)?j(r,N(c(a,r))):(j(r,i.defaultValue),w(a,r,N(i.defaultValue))),i.keepTouched||T(t.touchedFields,r),i.keepDirty||(T(t.dirtyFields,r),t.isDirty=i.defaultValue?b(r,N(c(a,r))):b()),i.keepError||(T(t.errors,r),V.isValid&&I()),v.state.next({...t}))},We=(r,i={})=>{const l=r?N(r):a,d=N(l),f=P(r),o=f?a:d;if(i.keepDefaultValues||(a=l),!i.keepValues){if(i.keepDirtyValues){const h=new Set([...g.mount,...Object.keys(oe(a,n))]);for(const _ of Array.from(h))c(t.dirtyFields,_)?w(o,_,c(n,_)):j(_,c(o,_))}else{if(pe&&D(r))for(const h of g.mount){const _=c(u,h);if(_&&_._f){const L=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(be(L)){const O=L.closest("form");if(O){O.reset();break}}}}u={}}n=s.shouldUnregister?i.keepDefaultValues?N(a):{}:N(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!V.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!s.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!X(r,a)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&n?oe(a,n):t.dirtyFields:i.keepDefaultValues&&r?oe(a,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},je=(r,i)=>We(K(r)?r(n):r,i);return{control:{register:xe,unregister:me,getFieldState:Be,handleSubmit:qe,setError:Ne,_executeSchema:Z,_getWatch:A,_getDirty:b,_updateValid:I,_removeUnmounted:he,_updateFieldArray:F,_updateDisabledField:Pe,_getFieldArray:p,_reset:We,_resetDefaultValues:()=>K(s.defaultValues)&&s.defaultValues().then(r=>{je(r,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:_t,_subjects:v,_proxyFormState:V,_setErrors:z,get _fields(){return u},get _formValues(){return n},get _state(){return y},set _state(r){y=r},get _defaultValues(){return a},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ne,register:xe,handleSubmit:qe,watch:vt,setValue:j,getValues:Me,reset:je,resetField:bt,clearErrors:ht,unregister:me,setError:Ne,setFocus:(r,i={})=>{const l=c(u,r),d=l&&l._f;if(d){const f=d.refs?d.refs[0]:d.ref;f.focus&&(f.focus(),i.shouldSelect&&K(f.select)&&f.select())}},getFieldState:Be}}function $t(e={}){const s=x.useRef(),t=x.useRef(),[u,a]=x.useState({isDirty:!1,isValidating:!1,isLoading:K(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:K(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Pt(e),formState:u});const n=s.current.control;return n._options=e,Oe({subject:n._subjects.state,next:y=>{at(y,n._proxyFormState,n._updateFormState,!0)&&a({...n._formState})}}),x.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),x.useEffect(()=>{if(n._proxyFormState.isDirty){const y=n._getDirty();y!==u.isDirty&&n._subjects.state.next({isDirty:y})}},[n,u.isDirty]),x.useEffect(()=>{e.values&&!X(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,a(y=>({...y}))):n._resetDefaultValues()},[e.values,n]),x.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),x.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),x.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),x.useMemo(()=>({...s.current,formState:ut(u,n)}),[u,n])}export{Ht as C,$t as u};
