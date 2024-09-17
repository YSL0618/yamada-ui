import{j as c}from"./extends-CwFRzn3r.js";import{a as p,b,c as f}from"./index-BxBWkPyk.js";import{B as u}from"./box-B5FcoOR4.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-CpaSpGZh.js";import"./factory-BjF4_dRw.js";const h={title:"Hooks / useBreakpointEffect"},s=()=>{const[n,e]=p({base:"desktop",md:"tablet",sm:"mobile"});return b(t=>{e(t==="sm"?"mobile":t==="md"?"tablet":"desktop")},[]),c.jsxs(u,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current device is "',n,'"']})},r=()=>{const[n,e]=p({base:"desktop",md:"tablet",sm:"mobile"});return f(t=>{e(t==="sm"?"mobile":t==="md"?"tablet":"desktop")},[]),c.jsxs(u,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current device is "',n,'"']})};var o,i,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    md: "tablet",
    sm: "mobile"
  });
  useBreakpointEffect(breakpoint => {
    if (breakpoint === "sm") {
      setDevice("mobile");
    } else if (breakpoint === "md") {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
  }, []);
  return <Box bg={{
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  }} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      The current device is "{device}"
    </Box>;
}`,...(a=(i=s.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    md: "tablet",
    sm: "mobile"
  });
  useUpdateBreakpointEffect(breakpoint => {
    if (breakpoint === "sm") {
      setDevice("mobile");
    } else if (breakpoint === "md") {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
  }, []);
  return <Box bg={{
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  }} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      The current device is "{device}"
    </Box>;
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const E=["basic","skipSideEffects"];export{E as __namedExportsOrder,s as basic,h as default,r as skipSideEffects};
