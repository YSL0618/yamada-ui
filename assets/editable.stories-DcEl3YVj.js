import{j as e}from"./extends-CwFRzn3r.js";import{u as xe,C as I}from"./index.esm-DXPXqkjk.js";import{E as r,a,b as t,c as pe,u as he}from"./editable-Dedc-84p.js";import{P as je}from"./pencil-CnVtm8mj.js";import{F as n}from"./form-control-DTumWR9y.js";import{V as fe}from"./stack-C8qilfIS.js";import{B as ge,a as F}from"./button-Bx26J9Y6.js";import{I as S}from"./icon-button-Dcr2DVaV.js";import{C as we}from"./check-D169AQv0.js";import{X as ve}from"./x-UXhVIpCU.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-tU9OGY6h.js";import"./factory-CYpx3TMG.js";import"./index-CuMoPEvO.js";import"./index-DEy_TXYI.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-CfUS8Ki1.js";import"./theme-provider-BZKkW4ID.js";import"./lucide-icon-cfLZgeB_.js";import"./icon-FPUxZQsz.js";import"./use-var-B0r_2U-t.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./loading-DndL1UZp.js";const Qe={title:"Components / Forms / Editable",component:r},o=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),d=()=>e.jsxs(r,{defaultValue:`私の戦闘力は530000です。
ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,h:"4lh",children:[e.jsx(a,{}),e.jsx(pe,{h:"4lh"})]}),u=()=>e.jsxs(r,{startWithEditView:!0,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{"aria-label":"Input character serif"})]}),c=()=>e.jsxs(r,{isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),m=()=>e.jsxs(r,{submitOnBlur:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),b=()=>e.jsxs(r,{selectAllOnFocus:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),p=()=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"default border color",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{focusBorderColor:"green.500",defaultValue:"custom border color",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{isInvalid:!0,errorBorderColor:"orange.500",defaultValue:"custom border color",children:[e.jsx(a,{}),e.jsx(t,{})]})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{isDisabled:!0,defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{isDisabled:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{isReadOnly:!0,defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{isReadOnly:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{isInvalid:!0,defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{isInvalid:!0,label:"Email address",errorMessage:"Email is required.",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),f=()=>{const w=()=>{const{isEditing:i,getSubmitProps:v,getCancelProps:V,getEditProps:s}=he();return i?e.jsxs(F,{size:"sm",gap:"sm",children:[e.jsx(S,{icon:e.jsx(we,{}),...v(),"aria-label":"Submit"}),e.jsx(S,{icon:e.jsx(ve,{}),...V(),"aria-label":"Cancel"})]}):e.jsx(F,{size:"sm",gap:"sm",children:e.jsx(S,{icon:e.jsx(je,{}),...s(),"aria-label":"Edit"})})};return e.jsxs(r,{display:"flex",gap:"sm",isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{w:"full"}),e.jsx(t,{}),e.jsx(w,{})]})},g=()=>{var C,P;const w={input:"",textarea:""},{control:i,handleSubmit:v,watch:V,formState:{errors:s}}=xe({defaultValues:w}),Ee=l=>console.log("submit:",l);return console.log("watch:",V()),e.jsxs(fe,{as:"form",onSubmit:v(Ee),children:[e.jsx(n,{isInvalid:!!s.input,label:"Name",errorMessage:(C=s.input)==null?void 0:C.message,children:e.jsx(I,{name:"input",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:l})=>e.jsxs(r,{placeholder:"孫悟空",...l,children:[e.jsx(a,{}),e.jsx(t,{})]})})}),e.jsx(n,{isInvalid:!!s.textarea,label:"Feedback",errorMessage:(P=s.textarea)==null?void 0:P.message,children:e.jsx(I,{name:"textarea",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:l})=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",...l,children:[e.jsx(a,{}),e.jsx(pe,{})]})})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var y,B,O;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(O=(B=o.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var q,D,M;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Editable defaultValue={\`私の戦闘力は530000です。\\nですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……\`} h="4lh">
      <EditablePreview />
      <EditableTextarea h="4lh" />
    </Editable>;
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var k,T,W;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Editable startWithEditView defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput aria-label="Input character serif" />
    </Editable>;
}`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var R,G,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Editable isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(z=(G=c.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var A,H,N;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Editable submitOnBlur={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var X,_,J;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Editable selectAllOnFocus={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(J=(_=b.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,L,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Editable placeholder="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(Q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,Y,Z;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Editable defaultValue="default border color">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable focusBorderColor="green.500" defaultValue="custom border color">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable isInvalid errorBorderColor="orange.500" defaultValue="custom border color">
        <EditablePreview />
        <EditableInput />
      </Editable>
    </>;
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Editable isDisabled defaultValue="your email address">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isDisabled label="Email address" helperMessage="We'll never share your email.">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Editable isReadOnly defaultValue="your email address">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isReadOnly label="Email address" helperMessage="We'll never share your email.">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,ne,ie;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Editable isInvalid defaultValue="your email address">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isInvalid label="Email address" errorMessage="Email is required.">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(ie=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,de,ue;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const CustomControls = () => {
    const {
      isEditing,
      getSubmitProps,
      getCancelProps,
      getEditProps
    } = useEditableControl();
    return isEditing ? <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Check />} {...getSubmitProps()} aria-label="Submit" />
        <IconButton icon={<X />} {...getCancelProps()} aria-label="Cancel" />
      </ButtonGroup> : <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Pencil />} {...getEditProps()} aria-label="Edit" />
      </ButtonGroup>;
  };
  return <Editable display="flex" gap="sm" isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview w="full" />
      <EditableInput />
      <CustomControls />
    </Editable>;
}`,...(ue=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,me,be;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  interface Data {
    input: string;
    textarea: string;
  }
  const defaultValues: Data = {
    input: "",
    textarea: ""
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.input} label="Name" errorMessage={errors.input?.message}>
        <Controller name="input" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Editable placeholder="孫悟空" {...field}>
              <EditablePreview />
              <EditableInput />
            </Editable>} />
      </FormControl>

      <FormControl isInvalid={!!errors.textarea} label="Feedback" errorMessage={errors.textarea?.message}>
        <Controller name="textarea" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Editable placeholder="オッス！オラ悟空！" {...field}>
              <EditablePreview />
              <EditableTextarea />
            </Editable>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(be=(me=g.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const Ue=["basic","withTextarea","withStartWithEditView","withIsPreviewFocusable","withSubmitOnBlur","withSelectAllOnFocus","withPlaceholder","withBorderColor","isDisabled","isReadonly","isInvalid","customControl","reactHookForm"];export{Ue as __namedExportsOrder,o as basic,f as customControl,Qe as default,x as isDisabled,j as isInvalid,h as isReadonly,g as reactHookForm,E as withBorderColor,c as withIsPreviewFocusable,p as withPlaceholder,b as withSelectAllOnFocus,u as withStartWithEditView,m as withSubmitOnBlur,d as withTextarea};
