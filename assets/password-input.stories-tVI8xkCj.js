import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as g}from"./index-ClcD9ViR.js";import{u as Me}from"./index.esm-CEdvtQ_U.js";import{y as Be,A as Ne,b,c as R,a2 as Ee,L as qe,af as He,h as We,d as Ae}from"./factory-Dfrbb1EY.js";import{b as De}from"./icon-DDeGQYl6.js";import{f as B}from"./forward-ref-D13m8o2p.js";import{u as Le}from"./index-De_nPH_B.js";import{u as Te,f as Ze,d as x}from"./form-control-C7lyVmHF.js";import{a as ke}from"./use-component-style-fOirb5M1.js";import{o as Ge}from"./theme-provider-DSx3k1bh.js";import{S as Je,F as Ke}from"./smile-CYbvie-D.js";import{T as Qe}from"./text-ACfjY0cR.js";import{V as ze}from"./stack-DgGWIYtK.js";import{B as Oe}from"./button-DSDDuS_l.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-var-BQS3JFPa.js";import"./createLucideIcon-DHJHrKis.js";import"./use-ripple-KQOZlJVZ.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-Dgu6MzDY.js";import"./loading-C7VoLX3j.js";const[Ue,Re]=Be({name:"PasswordInputContext",errorMessage:`usePasswordInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PasswordInput />"`}),H=B(({className:r,children:n,...o},t)=>{const{styles:a}=Re(),u=Ne(n).map(i=>g.cloneElement(i,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1})),c={...a.icon};return e.jsx(b.button,{ref:t,type:"button",className:R("ui-password-input__icon",r),__css:c,...o,children:u})});H.displayName="PasswordInputIcon";H.__ui__="PasswordInputIcon";const W=({...r})=>e.jsxs(De,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...r,children:[e.jsx("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]});W.displayName="EyeIcon";W.__ui__="EyeIcon";const A=({...r})=>e.jsxs(De,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...r,children:[e.jsx("path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}),e.jsx("path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}),e.jsx("path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}),e.jsx("path",{d:"m2 2 20 20"})]});A.displayName="EyeOffIcon";A.__ui__="EyeOffIcon";const Xe=r=>{let{defaultIsVisible:n,defaultVisible:o,isVisible:t,visible:a,onVisibleChange:l,...u}=Te(r);const{"aria-readonly":c,...i}=Ee(u,Ze),[m,h]=qe(u,He),{disabled:f}=i;a??(a=t),o??(o=n);const[I,p]=Le({defaultValue:o,value:a,onChange:l}),P=g.useCallback(d=>{f||d.button!==0||(d.preventDefault(),p(w=>!w))},[f,p]),N=g.useCallback((d={},w=null)=>({ref:w,...m,...i,...d}),[m,i]),E=g.useCallback((d={},w=null)=>({ref:w,type:I?"text":"password",...h,"aria-readonly":c,...i,...d}),[I,h,c,i]),q=g.useCallback((d={},w=null)=>({ref:w,"aria-label":"Toggle password visibility",tabIndex:-1,...i,...d,onPointerDown:We(d.onPointerDown,P)}),[i,P]);return{setVisible:p,visible:I,getContainerProps:N,getIconProps:q,getInputProps:E}},s=B((r,n)=>{const[o,t]=ke("PasswordInput",r);let{className:a,h:l,height:u,minH:c,minHeight:i,visibilityIcon:m={off:e.jsx(A,{}),on:e.jsx(W,{})},containerProps:h,iconProps:f,inputProps:I,...p}=Ge(t);const{visible:P,getContainerProps:N,getIconProps:E,getInputProps:q}=Xe(p);l??(l=u),c??(c=i);const d={...o.container};return e.jsx(Ue,{value:{styles:o},children:e.jsxs(b.div,{className:R("ui-password-input",a),__css:d,...N(h),children:[e.jsx(L,{h:l,minH:c,...q(I,n)}),e.jsx(H,{...E(f),children:P?m.off:m.on})]})})});s.displayName="PasswordInput";s.__ui__="PasswordInput";const L=B(({className:r,...n},o)=>{const{styles:t}=Re(),a={...t.field};return e.jsx(b.input,{ref:o,className:R("ui-password-input__field",r),__css:a,...n})});L.displayName="PasswordInputField";L.__ui__="PasswordInputField";const Ye=r=>{switch(!0){case r<33:return{label:"Low",_selected:{bg:"red.500"}};case r<66:return{label:"Medium",_selected:{bg:"orange.500"}};default:return{label:"High",_selected:{bg:"green.500"}}}},T=B((r,n)=>{const[o,{className:t,max:a=4,value:l,withLabel:u=!0,getStrengthMeterIndicatorProps:c=Ye,...i}]=ke("PasswordInput",r),m=l/a*100,{label:h,...f}=c(m);return e.jsxs(b.div,{ref:n,className:R("ui-password-input__strength-meter",t),"aria-label":"Password strength meter","aria-valuemax":a,"aria-valuemin":0,"aria-valuenow":l,role:"meter",__css:{...o.strengthMeter},...i,children:[e.jsx(b.div,{ref:n,className:"ui-password-input__strength-meter-indicators",__css:{...o.strengthMeterIndicators},...i,children:Array.from({length:a}).map((I,p)=>e.jsx(b.div,{"data-selected":Ae(p<l),__css:{...o.strengthMeterIndicator},...f},p))}),u&&h?e.jsx(b.span,{__css:{...o.strengthMeterLabel},children:h}):null]})});T.displayName="PasswordInputStrengthMeter";T.__ui__="PasswordInputStrengthMeter";const Ps={component:s,title:"Components / Forms / PasswordInput"},v=()=>e.jsx(s,{placeholder:"your password"}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"xs",placeholder:"extra small size"}),e.jsx(s,{size:"sm",placeholder:"small size"}),e.jsx(s,{size:"md",placeholder:"medium size"}),e.jsx(s,{size:"lg",placeholder:"large size"})]}),j=()=>e.jsx(s,{defaultValue:"password",defaultVisible:!0,placeholder:"your password"}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",placeholder:"outline"}),e.jsx(s,{variant:"filled",placeholder:"filled"}),e.jsx(s,{variant:"flushed",placeholder:"flushed"}),e.jsx(s,{variant:"unstyled",placeholder:"unstyled"})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"default border color"}),e.jsx(s,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(s,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),C=()=>{const[r,n]=g.useState("Password"),o=t=>{let a=0;return t.length>=8&&a++,/[A-Z]/.test(t)&&a++,/[0-9]/.test(t)&&a++,/[^A-Za-z0-9]/.test(t)&&a++,a};return e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"your password",value:r,onChange:t=>n(t.target.value)}),e.jsx(T,{value:o(r)})]})},F=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(s,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(s,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(s,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(x,{helperMessage:"We'll never share your password.",isDisabled:!0,label:"Password",children:e.jsx(s,{placeholder:"your password"})})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(s,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(s,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(s,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(x,{helperMessage:"We'll never share your password.",isReadOnly:!0,label:"Password",children:e.jsx(s,{placeholder:"your password"})})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(s,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(s,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(s,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(x,{errorMessage:"Email is required.",isInvalid:!0,label:"Password",children:e.jsx(s,{placeholder:"your password"})})]}),D=()=>e.jsx(s,{placeholder:"your password",visibilityIcon:{off:e.jsx(Je,{}),on:e.jsx(Ke,{})}}),k=()=>{const[r,n]=g.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(Qe,{children:["Password visibility: ",r?"show":"hide"]}),e.jsx(s,{placeholder:"your password",visible:r,onVisibleChange:n})]})},z=()=>{var a;const{formState:{errors:r},handleSubmit:n,register:o}=Me(),t=l=>console.log("submit:",l);return e.jsxs(ze,{as:"form",onSubmit:n(t),children:[e.jsx(x,{errorMessage:(a=r.password)==null?void 0:a.message,isInvalid:!!r.password,label:"Password",children:e.jsx(s,{...o("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(Oe,{type:"submit",children:"Submit"})]})},O=()=>{var l;const r={password:"password"},{formState:{errors:n},handleSubmit:o,register:t}=Me({defaultValues:r}),a=u=>console.log("submit:",u);return e.jsxs(ze,{as:"form",onSubmit:o(a),children:[e.jsx(x,{errorMessage:(l=n.password)==null?void 0:l.message,isInvalid:!!n.password,label:"Password",children:e.jsx(s,{...t("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(Oe,{type:"submit",children:"Submit"})]})};var Z,G,J;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="your password" />;
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput size="xs" placeholder="extra small size" />
      <PasswordInput size="sm" placeholder="small size" />
      <PasswordInput size="md" placeholder="medium size" />
      <PasswordInput size="lg" placeholder="large size" />
    </>;
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <PasswordInput defaultValue="password" defaultVisible placeholder="your password" />;
}`,...($=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,se,re;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" placeholder="outline" />
      <PasswordInput variant="filled" placeholder="filled" />
      <PasswordInput variant="flushed" placeholder="flushed" />
      <PasswordInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(re=(se=S.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,oe,te;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput placeholder="default border color" />
      <PasswordInput focusBorderColor="green.500" placeholder="custom border color" />
      <PasswordInput errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(te=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,le,ie;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("Password");
  const getStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };
  return <>
      <PasswordInput placeholder="your password" value={value} onChange={e => setValue(e.target.value)} />

      <PasswordInputStrengthMeter value={getStrength(value)} />
    </>;
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ue,ce;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" isDisabled placeholder="outline" />
      <PasswordInput variant="filled" isDisabled placeholder="filled" />
      <PasswordInput variant="flushed" isDisabled placeholder="flushed" />
      <PasswordInput variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl helperMessage="We'll never share your password." isDisabled label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>;
}`,...(ce=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,he;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" isReadOnly placeholder="outline" />
      <PasswordInput variant="filled" isReadOnly placeholder="filled" />
      <PasswordInput variant="flushed" isReadOnly placeholder="flushed" />
      <PasswordInput variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl helperMessage="We'll never share your password." isReadOnly label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>;
}`,...(he=(me=V.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var we,ge,be;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" isInvalid placeholder="outline" />
      <PasswordInput variant="filled" isInvalid placeholder="filled" />
      <PasswordInput variant="flushed" isInvalid placeholder="flushed" />
      <PasswordInput variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="Email is required." isInvalid label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>;
}`,...(be=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,Ie,xe;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="your password" visibilityIcon={{
    off: <SmileIcon />,
    on: <FrownIcon />
  }} />;
}`,...(xe=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var Pe,ve,ye;k.parameters={...k.parameters,docs:{...(Pe=k.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return <>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput placeholder="your password" visible={visible} onVisibleChange={setVisible} />
    </>;
}`,...(ye=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var je,Se,_e;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  interface Data {
    password: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.password?.message} isInvalid={!!errors.password} label="Password">
        <PasswordInput {...register("password", {
        required: {
          message: "Password is required.",
          value: true
        }
      })} />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>;
}`,...(_e=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};var Ce,Fe,Ve;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  interface Data {
    password: string;
  }
  const defaultValues: Data = {
    password: "password"
  };
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.password?.message} isInvalid={!!errors.password} label="Password">
        <PasswordInput {...register("password", {
        required: {
          message: "Password is required.",
          value: true
        }
      })} />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>;
}`,...(Ve=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};const vs=["basic","withSize","withDefaultVisible","withVariants","withBorderColor","withStrengthMeter","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{vs as __namedExportsOrder,v as basic,k as customControl,D as customIcon,Ps as default,F as isDisabled,M as isInvalid,V as isReadonly,z as reactHookForm,O as reactHookFormWithDefaultValue,_ as withBorderColor,j as withDefaultVisible,y as withSize,C as withStrengthMeter,S as withVariants};
