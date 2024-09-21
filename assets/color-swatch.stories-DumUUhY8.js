import{j as r}from"./extends-CwFRzn3r.js";import{d as p}from"./index-B_KRzJwV.js";import{C as o}from"./color-swatch-D4dIPN0Z.js";import{W as a}from"./flex-Boa2DUBc.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-Bw55Thfs.js";import"./factory-DfCPDZht.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-D0DGb12b.js";const E={title:"Components / Data Display / ColorSwatch",component:o},e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(a,{gap:"md",children:[r.jsx(o,{color:"#4387f4"}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)"})]}),r.jsx(a,{gap:"md",children:Object.entries(p.colors.whiteAlpha).map(([l,n])=>r.jsx(o,{color:n},l))}),r.jsx(a,{gap:"md",children:Object.entries(p.colors.blackAlpha).map(([l,n])=>r.jsx(o,{color:n},l))})]}),s=()=>r.jsxs(a,{gap:"md",children:[r.jsx(o,{color:"#4387f4",variant:"basic"}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)",variant:"rounded"})]}),t=()=>r.jsxs(a,{gap:"md",children:[r.jsx(o,{color:"#4387f4",size:"sm"}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)",size:"md"}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)",size:"lg"})]}),c=()=>r.jsxs(a,{gap:"md",children:[r.jsx(o,{color:"#4387f4",withShadow:!1}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)",withShadow:!1}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)",withShadow:!1})]});var i,m,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <ColorSwatch color="#4387f4" />
        <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
        <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" />
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.whiteAlpha).map(([key, color]) => <ColorSwatch key={key} color={color} />)}
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.blackAlpha).map(([key, color]) => <ColorSwatch key={key} color={color} />)}
      </Wrap>
    </>;
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,w,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" variant="basic" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" variant="rounded" />
    </Wrap>;
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var g,u,j;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" size="sm" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" size="md" />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" size="lg" />
    </Wrap>;
}`,...(j=(u=t.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var x,f,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>;
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const V=["basic","withVariant","withSize","disabledShadow"];export{V as __namedExportsOrder,e as basic,E as default,c as disabledShadow,t as withSize,s as withVariant};
