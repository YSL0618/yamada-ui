import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as U}from"./components-DE0UBxZd.js";import{f as u}from"./forward-ref-DKTvpK5d.js";import{b as m,c as h,l as W,t as X,w as f,a5 as Y,a6 as Z}from"./factory-C2Uq3ahE.js";import{b as ee}from"./icon-sIHrqgYT.js";import{a as te}from"./use-component-style-Bx1vUO5y.js";import{o as re}from"./theme-provider-jP6jS-pg.js";import{G as se}from"./grid-Cwno_4NF.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bx4dOF2q.js";import"./index-DwVKC9Jw.js";import"./index-8jxD160K.js";import"./ui-provider-Cu1AqUuF.js";import"./index-CnSrmUBS.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-B7yikQzP.js";import"./index-BTZYfykl.js";import"./Combination-CONbhR2A.js";import"./loading-BNVTi1QG.js";import"./factory-uWFUvYzf.js";import"./container-portal-C3bX__47.js";import"./index-DxjWwZXO.js";import"./notice-B_nwBXae.js";import"./alert-Bdbz62Ge.js";import"./close-button-BxbDD0Pp.js";import"./use-ripple-Cy0wrTvg.js";import"./container-D9O-7ma4.js";import"./stack-BcAy0aux.js";import"./box-Bfrem8P5.js";import"./text-BJvDpKxV.js";import"./checkbox-C_K9haI-.js";import"./index-CIAQ5aMs.js";import"./index-JO6qx1eo.js";import"./form-control-Cvo0pEjR.js";import"./flex-DUnpOgsS.js";import"./index-BAUyeFMr.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-C6BB_r2F.js";import"./index-Cphrmm8n.js";import"./index-P1R8teSk.js";import"./index-C18qiKmS.js";import"./index-Bhd-KZw0.js";import"./index-DkkKXtPY.js";import"./slide-fade-CVIp2BLX.js";import"./motion-forward-ref-DCsEbWHi.js";import"./utils-BQr-qST1.js";import"./scale-fade-DOMI91dn.js";import"./index-aK7o6Gpo.js";import"./index-Bqz3rL1X.js";import"./select-DrMIp6gA.js";import"./option-CTJ4JvQy.js";import"./index-DIig5QpT.js";import"./popover-content-Br-m-ZU6.js";import"./index-BEMgSfZS.js";import"./index-Du0-7Fls.js";import"./index-YQxVgXoz.js";import"./extends-CF3RwP-h.js";import"./index-UM7KnhWq.js";const l=u(({className:t,...r},s)=>{const a={...x().helperMessage};return e.jsx(m.dd,{ref:s,className:h("ui-stat__helper-message",t),__css:a,...r})}),C=u(({className:t,type:r="increase",...s},n)=>{const j={...x().icon};return e.jsx(ee,{ref:n,className:h("ui-stat__icon",t),"aria-label":r==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:j,...s,children:r==="increase"?e.jsx(m.path,{fill:"$increase",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"}):e.jsx(m.path,{fill:"$decrease",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})})}),c=u(({className:t,...r},s)=>{const a={...x().label};return e.jsx(m.dt,{ref:s,className:h("ui-stat__label",t),__css:a,...r})}),p=u(({className:t,...r},s)=>{const a={...x().number};return e.jsx(m.dd,{ref:s,className:h("ui-stat__number",t),__css:a,...r})}),[ae,x]=W({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),o=u((t,r)=>{const[s,n]=te("Stat",t),{className:a,label:j,labelProps:A,number:G,numberProps:K,icon:w,iconProps:k,helperMessage:E,helperMessageProps:z,centerContent:R=!1,children:y,...$}=re(n),B={display:"flex",flexDirection:"column",alignItems:R?"center":"flex-start",...s.container},i=X(y),[O]=f(i,c),[q]=f(i,p),[J]=f(i,l),Q=Y(i)?y:Z(i,c,p,l);return e.jsx(ae,{value:s,children:e.jsxs(m.dl,{ref:r,className:h("ui-stat",a),__css:B,...$,children:[O??e.jsx(c,{...A,children:j}),q??e.jsx(p,{...K,children:G}),J??e.jsxs(l,{...z,children:[w?e.jsx(C,{type:w,...k}):null,E]}),Q]})})}),pt={title:"Components / Data Display / Stat",component:o},d=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"increase",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(c,{children:"Total Page Views"}),e.jsx(p,{children:"1,993,818"}),e.jsxs(l,{children:[e.jsx(C,{type:"increase"}),"21% more than last month"]})]})]}),S=()=>e.jsx(se,{w:"full",templateColumns:{base:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",md:"repeat(2, 1fr)",sm:"repeat(1, 1fr)"},gap:"md",children:U.map(t=>e.jsx(o,{colorScheme:t,label:"Total Likes",number:"818K",helperMessage:"21% more than last month"},t))}),g=()=>e.jsx(e.Fragment,{children:e.jsx(o,{label:"Downloads",number:"18K",icon:"increase",helperMessage:"From August 1 to August 18",centerContent:!0})}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"decrease",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(c,{children:"Total Page Views"}),e.jsx(p,{children:"1,993,818"}),e.jsxs(l,{children:[e.jsx(C,{type:"decrease"}),"21% more than last month"]})]})]});var M,_,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Total Page Views" number="1,993,818" icon="increase" helperMessage="21% more than last month" />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="increase" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>;
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var N,T,L;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns={{
    base: "repeat(4, 1fr)",
    lg: "repeat(3, 1fr)",
    md: "repeat(2, 1fr)",
    sm: "repeat(1, 1fr)"
  }} gap="md">
      {colorSchemes.map(colorScheme => <Stat key={colorScheme} colorScheme={colorScheme} label="Total Likes" number="818K" helperMessage="21% more than last month" />)}
    </Grid>;
}`,...(L=(T=S.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var V,D,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Downloads" number="18K" icon="increase" helperMessage="From August 1 to August 18" centerContent />
    </>;
}`,...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,F,v;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Total Page Views" number="1,993,818" icon="decrease" helperMessage="21% more than last month" />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="decrease" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>;
}`,...(v=(F=b.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};const ut=["basic","withColorScheme","withCenterContent","withDecrease"];export{ut as __namedExportsOrder,d as basic,pt as default,g as withCenterContent,S as withColorScheme,b as withDecrease};
