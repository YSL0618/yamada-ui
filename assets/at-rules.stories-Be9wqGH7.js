import{j as e}from"./extends-CwFRzn3r.js";import{C as s}from"./center-B5cF8U0h.js";import{T as i}from"./text-C4kk1pFE.js";import{B as S}from"./box-BNUHdVqZ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-DfCPDZht.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-D0DGb12b.js";import"./theme-provider-Bw55Thfs.js";const R={title:"System / Styles / At-rules"},r=()=>e.jsx(s,{p:"md",rounded:"md",borderWidth:"1px",boxSize:"3xs",_media:[{type:"print",css:{color:"red"}}],children:e.jsx(i,{children:"Print me"})}),n=()=>e.jsx(s,{containerType:"size",p:"md",rounded:"md",borderWidth:"1px",resize:"both",overflow:"auto",boxSize:"3xs",children:e.jsx(i,{_container:[{minW:"320px",maxW:"560px",css:{color:"primary"}}],children:"Resize me"})}),o=()=>e.jsx(s,{containerName:"parent",containerType:"size",p:"md",rounded:"md",borderWidth:"1px",resize:"both",overflow:"auto",boxSize:"xs",children:e.jsx(s,{containerName:"child",containerType:"size",p:"md",rounded:"md",borderWidth:"1px",resize:"both",overflow:"auto",boxSize:"3xs",children:e.jsx(i,{_container:[{name:"parent",orientation:"portrait",css:{color:"primary"}},{name:"child",orientation:"landscape",css:{color:"danger"}}],children:"Resize me"})})}),t=()=>e.jsx(S,{_supports:[{query:"(display: flex)",css:{color:"red"}}],children:e.jsx(i,{children:"Supported flex"})});var a,d,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <Center p="md" rounded="md" borderWidth="1px" boxSize="3xs" _media={[{
    type: "print",
    css: {
      color: "red"
    }
  }]}>
      <Text>Print me</Text>
    </Center>;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Center containerType="size" p="md" rounded="md" borderWidth="1px" resize="both" overflow="auto" boxSize="3xs">
      <Text _container={[{
      minW: "320px",
      maxW: "560px",
      css: {
        color: "primary"
      }
    }]}>
        Resize me
      </Text>
    </Center>;
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Center containerName="parent" containerType="size" p="md" rounded="md" borderWidth="1px" resize="both" overflow="auto" boxSize="xs">
      <Center containerName="child" containerType="size" p="md" rounded="md" borderWidth="1px" resize="both" overflow="auto" boxSize="3xs">
        <Text _container={[{
        name: "parent",
        orientation: "portrait",
        css: {
          color: "primary"
        }
      }, {
        name: "child",
        orientation: "landscape",
        css: {
          color: "danger"
        }
      }]}>
          Resize me
        </Text>
      </Center>
    </Center>;
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,z,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Box _supports={[{
    query: "(display: flex)",
    css: {
      color: "red"
    }
  }]}>
      <Text>Supported flex</Text>
    </Box>;
}`,...(y=(z=t.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const B=["basic","container","withContainerName","supports"];export{B as __namedExportsOrder,r as basic,n as container,R as default,t as supports,o as withContainerName};
