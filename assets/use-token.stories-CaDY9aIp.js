import{j as g}from"./jsx-runtime-CfatFE5O.js";import{r as k}from"./index-ClcD9ViR.js";import{u as $}from"./theme-provider-CNI9L2WW.js";import{I as x,V as i,E as b,J as n}from"./factory-COau3w21.js";import{B as V}from"./box-Co1KKng-.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h=(o,t)=>{const{theme:e}=$(),{colorMode:s}=x();return k.useMemo(()=>y(o,t)(e,s),[o,t,e,s])},y=(o,t)=>(e,s)=>{let r=i(e,`${o}.${t}`);if(b(r))if(r=i(e,`semantics.${o}.${t}`),n(r)?r=[i(e,`${o}.${r[0]}`,r[0]),i(e,`${o}.${r[1]}`,r[1])]:r=i(e,`${o}.${r}`)??r,n(r)){const[c,l]=r;if(r=s==="light"?c:l,n(r)){const[p,f]=r;return s==="light"?p:f}else return r}else return r;else if(n(r)){const[c,l]=r;return s==="light"?c:l}else return r},O={title:"Hooks / useToken"},a=()=>{const o=h("colors","primary");return g.jsxs(V,{bg:o,color:"white",p:"md",rounded:"md",children:['Primary for color tokens is "',o,'"']})};var u,m,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const bg = useToken("colors", "primary");
  return <Box bg={bg} color="white" p="md" rounded="md">
      Primary for color tokens is "{bg}"
    </Box>;
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const P=["basic"];export{P as __namedExportsOrder,a as basic,O as default};
