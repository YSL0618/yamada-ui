import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{e as f,C as a,c as j,d as t}from"./menu-list-DZtggnAz.js";import{r as g}from"./index-uCp2LrAq.js";import{P as I}from"./popover-anchor-BI_PURc7.js";import{a as b}from"./popover-content-T-x7oVfE.js";import{f as T}from"./forward-ref-Dr5Hqd9a.js";import{b as s,c as y,h as v}from"./factory-Bf0a1C4O.js";import{M as P}from"./menu-divider-CmAVLNLt.js";import{C as R}from"./center-CSFPO4u1.js";import{T as _}from"./text-MYjKvx39.js";import"./index-Bh6_N6k1.js";import"./index-CYZlXLuv.js";import"./use-component-style-C0MoE1pt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-zwL-D6eR.js";import"./index-BeEgGBIl.js";import"./index-DnMy6eVY.js";import"./index-C2NYhR29.js";import"./index-CBqzus2r.js";import"./index-BPmMvQRx.js";import"./index-jdyvIJfp.js";import"./index-BaBVWS6a.js";import"./index-FZO-VaWv.js";import"./motion-B-hZ6xRg.js";import"./slide-fade-vi8PuXWc.js";import"./index-B5H6KlGO.js";import"./motion-BPPCNfSa.js";import"./utils-BQuDdpot.js";import"./scale-fade-BYznkx0n.js";import"./close-button-qBeYcal4.js";import"./use-ripple-op6oFSyJ.js";import"./icon-CVBZDjqd.js";import"./index-BJ39ysE2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger as={Center} w="full" h="xs" borderWidth="1px" borderStyle="dashed" p="md" rounded="md">
        <Text>Right click here</Text>
      </ContextMenuTrigger>

      <MenuList>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuDivider />
        <MenuItem isDisabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </ContextMenu>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ue=["basic"];export{ue as __namedExportsOrder,r as basic,de as default};
