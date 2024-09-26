import{j as e}from"./extends-CwFRzn3r.js";import{r as l}from"./index-BwDkhjyp.js";import{u as Ue,C as We}from"./index.esm-DXPXqkjk.js";import{b as n,c as Xe,d as s,e as D,f as B,g as Ye}from"./components-Bn8vSq6n.js";import{u as Ze}from"./index-Du0-7Fls.js";import{T as i}from"./text-CxEGNgXo.js";import{C as er}from"./center-DS2plk9R.js";import{B as P}from"./button-knJHP-Ba.js";import{V as Ne}from"./stack-c0WUIOCC.js";import{T as rr}from"./tooltip-rjHfP52r.js";import{F as O}from"./form-control-DAXawruh.js";import{A as I}from"./activity-Cjq2WSgV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./index-B6ycpjcM.js";import"./factory-BgMvz7NM.js";import"./theme-provider-Bpmh2ODM.js";import"./ui-provider-DY2oYN-S.js";import"./index-AqDG4z1T.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-TBFbx4D4.js";import"./index-CjGDoYdX.js";import"./Combination-IUp2vs9T.js";import"./loading-B_aB2PJP.js";import"./icon-CvhI1IwG.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-D3MffxdG.js";import"./use-var-Dgk44aKJ.js";import"./factory-yZQlYpPU.js";import"./portal-C14XFhbI.js";import"./index-B8XB3FuZ.js";import"./notice-DVwxRQgn.js";import"./alert-B0TkXEfE.js";import"./close-button-CrGbJmFz.js";import"./use-ripple-BWg06y-U.js";import"./container-CS7gHKs5.js";import"./box-Bx0dCD5X.js";import"./checkbox-CHh1Q5wt.js";import"./index-zVjQQjxl.js";import"./index-Dz6agydm.js";import"./index-B4mTSuWb.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./index-DkfW55MP.js";import"./index-BAaRSIWS.js";import"./select-B5zLdiRc.js";import"./select-list-czIeuCwx.js";import"./index-Br7ZWcgB.js";import"./index-i7wmI0W_.js";import"./index-BzBNm7Tp.js";import"./popover-content-BSy-Q-lS.js";import"./index-DX38EdL3.js";import"./index-UbUyUaFk.js";import"./index-eVjHUBC4.js";import"./index-B9IsUjMJ.js";import"./index-CzplldKp.js";import"./slide-fade-oCi7TKjr.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bm7s5BqF.js";import"./scale-fade-BQTws92u.js";import"./lucide-icon-2cUstn0F.js";const cn={title:"Components / Forms / Slider",component:n},m=()=>e.jsx(n,{}),c=()=>e.jsx(n,{defaultValue:50}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"sm",defaultValue:25}),e.jsx(n,{size:"md",defaultValue:50}),e.jsx(n,{size:"lg",defaultValue:75})]}),p=()=>e.jsx(e.Fragment,{children:Xe.map(r=>e.jsx(n,{colorScheme:r},r))}),h=()=>e.jsx(n,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReversed:!0}),e.jsx(n,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),g=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,min:0,max:200,onChange:a})]})},x=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,step:10,onChange:a})]})},v=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,step:10,focusThumbOnChange:!1}),e.jsxs(er,{w:"full",gap:"md",children:[e.jsx(P,{isDisabled:r===0,onClick:()=>a(o=>o!==0?o-10:o),children:"-10"}),e.jsx(P,{isDisabled:r===100,colorScheme:"blue",onClick:()=>a(o=>o!==100?o+10:o),children:"+10"})]})]})},b=()=>e.jsxs(Ne,{gap:"lg",children:[e.jsxs(n,{size:"sm",children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(n,{size:"md",children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(n,{size:"lg",children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),j=()=>{const[r,a]=l.useState(50),[o,{on:t,off:u}]=Ze(!1);return e.jsxs(n,{value:r,onChange:a,mt:"10",onMouseEnter:t,onMouseLeave:u,children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(rr,{placement:"top",label:`${r}%`,isOpen:o,children:e.jsx(D,{})})]})},C=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsx(O,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(n,{})})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsx(O,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(n,{})})]}),f=()=>{const[r,a]=l.useState(15);return e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:r<20,value:r,onChange:a}),e.jsx(O,{isInvalid:r<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e.jsx(n,{value:r,onChange:a})})]})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(n,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(n,{children:[e.jsx(B,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(D,{bg:"blue.700"})]}),e.jsxs(n,{children:[e.jsx(B,{bg:"red.200",children:e.jsx(Ye,{bg:"red.500"})}),e.jsx(D,{bg:"red.700"})]})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(I,{})}}),e.jsx(n,{children:e.jsx(D,{color:"blue.500",boxSize:"6",children:e.jsx(I,{})})})]}),V=()=>{const[r,a]=l.useState(50);return e.jsx(e.Fragment,{children:e.jsxs(n,{value:r,onChange:a,mt:"10",children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(s,{value:r,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[r,"%"]})]})})},T=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,onChange:a})]})},F=()=>{const[r,a]=l.useState(50),[o,t]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r,", Start Value: ",o]}),e.jsx(n,{value:r,onChange:a,onChangeStart:t})]})},y=()=>{const[r,a]=l.useState(50),[o,t]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r,", End Value: ",o]}),e.jsx(n,{value:r,onChange:a,onChangeEnd:t})]})},z=()=>{var R;const r={slider:50},{control:a,handleSubmit:o,watch:t,formState:{errors:u}}=Ue({defaultValues:r}),Qe=E=>console.log("submit:",E);return console.log("watch:",t()),e.jsxs(Ne,{as:"form",onSubmit:o(Qe),children:[e.jsx(O,{isInvalid:!!u.slider,label:"Volume",errorMessage:(R=u.slider)==null?void 0:R.message,children:e.jsx(We,{name:"slider",control:a,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:E})=>e.jsx(n,{...E})})}),e.jsx(P,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var A,H,L;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var _,$,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(q=($=c.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>;
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <Slider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Slider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,ae,se;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,te;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>;
}`,...(te=(le=x.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ie,ue,me;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} focusThumbOnChange={false} />

      <Center w="full" gap="md">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>
        <Button isDisabled={value === 100} colorScheme="blue" onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </Center>
    </>;
}`,...(me=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ce,de,pe;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <VStack gap="lg">
      <Slider size="sm">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="md">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="lg">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>
    </VStack>;
}`,...(pe=(de=b.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,Se,ge;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [isOpen, {
    on,
    off
  }] = useBoolean(false);
  return <Slider value={value} onChange={onChange} mt="10" onMouseEnter={on} onMouseLeave={off}>
      <SliderMark value={25} w="10" ml="-5">
        25%
      </SliderMark>
      <SliderMark value={50} w="10" ml="-5">
        50%
      </SliderMark>
      <SliderMark value={75} w="10" ml="-5">
        75%
      </SliderMark>

      <Tooltip placement="top" label={\`\${value}%\`} isOpen={isOpen}>
        <SliderThumb />
      </Tooltip>
    </Slider>;
}`,...(ge=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var xe,ve,be;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(be=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var je,Ce,ke;k.parameters={...k.parameters,docs:{...(je=k.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(ke=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var fe,we,Me;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value < 20} label="volume (sound)" errorMessage="Volume should be set to 20 or higher.">
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Me=(we=f.parameters)==null?void 0:we.docs)==null?void 0:Me.source}}};var Ve,Te,Fe;w.parameters={...w.parameters,docs:{...(Ve=w.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <Slider trackColor="orange.200" filledTrackColor="orange.500" thumbColor="orange.700" />

      <Slider trackProps={{
      bg: "green.200"
    }} filledTrackProps={{
      bg: "green.500"
    }} thumbProps={{
      bg: "green.700"
    }} />

      <Slider>
        <SliderTrack bg="blue.200" filledTrackProps={{
        bg: "blue.500"
      }} />
        <SliderThumb bg="blue.700" />
      </Slider>

      <Slider>
        <SliderTrack bg="red.200">
          <SliderFilledTrack bg="red.500" />
        </SliderTrack>

        <SliderThumb bg="red.700" />
      </Slider>
    </>;
}`,...(Fe=(Te=w.parameters)==null?void 0:Te.docs)==null?void 0:Fe.source}}};var ye,ze,De;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <Slider thumbProps={{
      color: "blue.500",
      boxSize: "6",
      children: <Activity />
    }} />

      <Slider>
        <SliderThumb color="blue.500" boxSize="6">
          <Activity />
        </SliderThumb>
      </Slider>
    </>;
}`,...(De=(ze=M.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Oe,Ee,Pe;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Slider value={value} onChange={onChange} mt="10">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
        <SliderMark value={value} bg="blue.500" color="white" py="0.5" rounded="md" w="10" mt="-10" ml="-5">
          {value}%
        </SliderMark>
      </Slider>
    </>;
}`,...(Pe=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var Re,Be,Ie;T.parameters={...T.parameters,docs:{...(Re=T.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(Ie=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Ie.source}}};var Ae,He,Le;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Le=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var _e,$e,qe;y.parameters={...y.parameters,docs:{...(_e=y.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(qe=($e=y.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var Ge,Je,Ke;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  interface Data {
    slider: number;
  }
  const defaultValues: Data = {
    slider: 50
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
      <FormControl isInvalid={!!errors.slider} label="Volume" errorMessage={errors.slider?.message}>
        <Controller name="slider" control={control} rules={{
        max: {
          value: 50,
          message: "The maximum value is 50."
        }
      }} render={({
        field
      }) => <Slider {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ke=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const dn=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{dn as __namedExportsOrder,m as basic,w as customColor,T as customControl,V as customMark,M as customThumb,cn as default,C as isDisabled,f as isInvalid,k as isReadonly,y as onChangeEnd,F as onChangeStart,z as reactHookForm,p as withColorScheme,c as withDefaultValue,v as withFocusThumbOnChange,b as withMark,g as withMinMax,h as withOrientation,S as withReversed,d as withSize,x as withStep,j as withTooltip};
