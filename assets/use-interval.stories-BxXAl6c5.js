import{j as m}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u as p}from"./index-BBQOMox2.js";import{r as u}from"./index-BwDkhjyp.js";import{B as c}from"./box-BWBbGxVR.js";import"./factory-DqlmaKnk.js";import"./_commonjsHelpers-BosuxZz1.js";const v={title:"Hooks / useInterval"},t=()=>{const[a,o]=u.useState(1);return p(()=>o(n=>n+1),3e3),m.jsxs(c,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,t as basic,v as default};
