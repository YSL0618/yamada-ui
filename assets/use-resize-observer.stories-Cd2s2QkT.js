import{j as n}from"./jsx-runtime-CfatFE5O.js";import{u as f}from"./index-gGKStiao.js";import{r as o}from"./index-ClcD9ViR.js";import{U as p}from"./factory-COau3w21.js";import{T as g}from"./text-BnztNdZ-.js";import{B as x}from"./button-Dh7D4tOu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-CLSKeq_H.js";import"./theme-provider-CNI9L2WW.js";import"./use-ripple-D0covPjN.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-ep9rrzy9.js";import"./loading-DYtJ9fc2.js";import"./icon-BodRPJCf.js";import"./use-var-YCfkKbSC.js";const d={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},h=()=>{const e=o.useRef(0),r=o.useRef(null),[i,c]=o.useState(d),t=o.useMemo(()=>p()?new ResizeObserver(([m])=>{m&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&c(m.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,i]},M={title:"Hooks / useResizeObserver"},s=()=>{const[e,{toggle:r}]=f(),[i,c]=h();return n.jsxs(n.Fragment,{children:[n.jsx(g,{children:JSON.stringify(c)}),n.jsx(x,{ref:i,h:e?"xl":"sm",w:e?"xl":"sm",onClick:r,children:"Click me to toggle the boolean value"})]})};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} h={flg ? "xl" : "sm"} w={flg ? "xl" : "sm"} onClick={toggle}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const N=["basic"];export{N as __namedExportsOrder,s as basic,M as default};
