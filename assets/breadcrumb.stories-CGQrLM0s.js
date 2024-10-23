import{j as e}from"./extends-CwFRzn3r.js";import{r as l}from"./index-BwDkhjyp.js";import{u as U}from"./index-BukEwq1c.js";import{b as Ge}from"./icon-CVPWgGuL.js";import{p as Re,q as ke,B as Fe,b as L,c as O,g as X}from"./factory-DBrfn43w.js";import{f as k}from"./forward-ref-BWI-Phbn.js";import{a as Ve}from"./use-component-style-DhRiPQIp.js";import{o as qe}from"./theme-provider-Cr3m0r8P.js";import{b as Ce,c as Me,d as V}from"./menu-list-DjIR53X5.js";import{M as Pe}from"./menu-button-CghlM06M.js";import{C as Oe}from"./chevrons-right-BW3ziwCR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C_z-NEqe.js";import"./use-var-DcJHaFAf.js";import"./index-Dbjktjet.js";import"./popover-trigger-C4B9Wa4t.js";import"./close-button-BDLDbh2v.js";import"./use-ripple-C_jFl7Io.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-CWrzRNZL.js";import"./slide-fade-DV-SS8EA.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bot02Mqw.js";import"./scale-fade-CARss9Lv.js";import"./index-DX5CNJFl.js";import"./index-CoJrGj-T.js";import"./index-C9q_kkfb.js";import"./index-Ds_xHjLF.js";import"./index-pFyedNCb.js";import"./index-BD-dMYlD.js";import"./index-ByFQ-olM.js";import"./lucide-icon-CsDBQyHf.js";const[Te,T]=Re({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),m=k((s,i)=>{const[a,t]=Ve("Breadcrumb",s),{className:u,children:d,ellipsis:x,endBoundaries:W,gap:I="fallback(2, 0.5rem)",items:h=[],separator:g="/",startBoundaries:z,listProps:B,...Ee}=qe(t);let c=U(z),o=U(W);c===0&&(c=1),o===0&&(o=1),c&&(o??(o=1)),o&&(c??(c=1));const C=X(c)&&X(o),H=C&&c+o<h.length,ye={alignItems:"center",display:"flex",...a.container},M=ke(d),J=M.length,P=l.useCallback(p=>{if(!x)return null;const j=p??h.slice(c,h.length-o);return Fe(x,{items:j})},[x,o,h,c]),we=l.useMemo(()=>{if(J)return M.map((p,j)=>l.cloneElement(p,{gap:I,isLastChild:M.length===j+1,separator:g}));{let p=[];return h.map((j,b)=>{const{name:K,isCurrentPage:Se,isEllipsisPage:ve,containerProps:Ne,...Q}=j,A=h.length===b+1,_={gap:I,isCurrentPage:Se,separator:g,...Ne};if(!C&&ve)return p.push(j),A?e.jsx(r,{..._,isLastChild:!0,children:P([j])??e.jsx(f,{})},b):null;if(C&&H){const D=h.length-b-1;if(c<=b&&o<=D)return c===b?e.jsx(r,{..._,children:P()??e.jsx(f,{})},b):null}if(p.length){const D=P(p)??e.jsx(f,{});return p=[],e.jsxs(l.Fragment,{children:[e.jsx(r,{..._,children:D}),e.jsx(r,{..._,isLastChild:A,children:e.jsx(n,{...Q,children:K})})]},b)}else return e.jsx(r,{..._,isLastChild:A,children:e.jsx(n,{...Q,children:K})},b)})}},[J,M,g,I,h,C,H,c,o,P]);return e.jsx(Te,{value:a,children:e.jsx(L.nav,{ref:i,className:O("ui-breadcrumb",u),"aria-label":"Breadcrumb",__css:a.container,...Ee,children:e.jsx(L.ol,{className:"ui-breadcrumb__list",...B,__css:ye,children:we})})})});m.displayName="Breadcrumb";m.__ui__="Breadcrumb";const r=k(({className:s,children:i,gap:a,isCurrentPage:t,isLastChild:u,separator:d,...x},W)=>{const I=T(),g=ke(i).map(B=>B.type===n?l.cloneElement(B,{isCurrentPage:t}):B.type===q?l.cloneElement(B,{children:B.props.children||d,gap:a}):B),z={alignItems:"center",display:"inline-flex",...I.item};return e.jsxs(L.li,{ref:W,className:O("ui-breadcrumb__item",s),__css:z,...x,children:[g,u?null:e.jsx(q,{gap:a,children:d})]})});r.displayName="BreadcrumbItem";r.__ui__="BreadcrumbItem";const n=k(({href:s,className:i,children:a,isCurrentPage:t,...u},d)=>{const x=T();return e.jsx(L.a,{ref:d,as:t?"span":"a",href:t?void 0:s,className:O("ui-breadcrumb__link",i),"aria-current":t?"page":void 0,__css:x.link,...u,children:a})});n.displayName="BreadcrumbLink";n.__ui__="BreadcrumbLink";const q=k(({children:s,gap:i,...a},t)=>{const u=T(),d={mx:i,...u.separator};return e.jsx(L.span,{ref:t,className:"ui-breadcrumb__item__separator",__css:d,...a,children:s})});q.displayName="BreadcrumbSeparator";q.__ui__="BreadcrumbSeparator";const f=k(({className:s,children:i,...a},t)=>{const d={...T().ellipsis};return i??e.jsxs(Ge,{ref:t,className:O("ui-breadcrumb__item__ellipsis",s),"aria-label":"ellipsis",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 36 24",xmlns:"http://www.w3.org/2000/svg",__css:d,...a,children:[e.jsx("circle",{cx:"10",cy:"12",fill:"currentColor",r:"2"}),e.jsx("circle",{cx:"20",cy:"12",fill:"currentColor",r:"2"}),e.jsx("circle",{cx:"30",cy:"12",fill:"currentColor",r:"2"})]})});f.displayName="BreadcrumbEllipsis";f.__ui__="BreadcrumbEllipsis";const Ir={component:m,title:"Components / Navigation / Breadcrumb"},E=()=>e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),y=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(m,{items:s})},w=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(m,{endBoundaries:1,items:s,startBoundaries:1})},S=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編",isEllipsisPage:!0},{href:"/",name:"人造人間編",isEllipsisPage:!0},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(m,{items:s})},v=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(m,{ellipsis:({items:i})=>e.jsxs(Ce,{children:[e.jsx(Pe,{children:e.jsx(f,{})}),e.jsx(Me,{children:i.map(({href:a,name:t},u)=>e.jsx(V,{as:"a",href:a,children:t},u))})]}),endBoundaries:1,items:s,startBoundaries:1})},N=()=>e.jsxs(m,{separator:"-",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),G=()=>e.jsxs(m,{separator:e.jsx(Oe,{color:"gray.300"}),children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),R=()=>e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsx(f,{})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),F=()=>e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsxs(Ce,{children:[e.jsx(Pe,{children:e.jsx(f,{})}),e.jsxs(Me,{children:[e.jsx(V,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(V,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(V,{as:"a",href:"/",children:"フリーザ編"})]})]})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]});var Y,Z,$;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...($=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編"
  }, {
    href: "/",
    name: "人造人間編"
  }, {
    href: "/",
    name: "魔人ブウ編",
    isCurrentPage: true
  }], []);
  return <Breadcrumb items={items} />;
}`,...(ne=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ae,te;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編"
  }, {
    href: "/",
    name: "人造人間編"
  }, {
    href: "/",
    name: "魔人ブウ編",
    isCurrentPage: true
  }], []);
  return <Breadcrumb endBoundaries={1} items={items} startBoundaries={1} />;
}`,...(te=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var me,ie,ce;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編",
    isEllipsisPage: true
  }, {
    href: "/",
    name: "人造人間編",
    isEllipsisPage: true
  }, {
    href: "/",
    name: "魔人ブウ編",
    isCurrentPage: true
  }], []);
  return <Breadcrumb items={items} />;
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,oe;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編"
  }, {
    href: "/",
    name: "人造人間編"
  }, {
    href: "/",
    name: "魔人ブウ編",
    isCurrentPage: true
  }], []);
  return <Breadcrumb ellipsis={({
    items
  }) => {
    return <Menu>
            <MenuButton>
              <BreadcrumbEllipsis />
            </MenuButton>

            <MenuList>
              {items.map(({
          href,
          name
        }, index) => <MenuItem key={index} as="a" href={href}>
                  {name}
                </MenuItem>)}
            </MenuList>
          </Menu>;
  }} endBoundaries={1} items={items} startBoundaries={1} />;
}`,...(oe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var le,he,Be;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Breadcrumb separator="-">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(Be=(he=N.parameters)==null?void 0:he.docs)==null?void 0:Be.source}}};var pe,be,fe;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Breadcrumb separator={<ChevronsRight color="gray.300" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(fe=(be=G.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,je,Ie;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">孫悟空少年編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(Ie=(je=R.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var ge,_e,Le;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">孫悟空少年編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Menu>
          <MenuButton>
            <BreadcrumbEllipsis />
          </MenuButton>

          <MenuList>
            <MenuItem as="a" href="/">
              ピッコロ大魔王編
            </MenuItem>
            <MenuItem as="a" href="/">
              サイヤ人編
            </MenuItem>
            <MenuItem as="a" href="/">
              フリーザ編
            </MenuItem>
          </MenuList>
        </Menu>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(Le=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};const gr=["basic","withItems","withBoundaries","customBoundaries","customEllipsis","withSeparator","withCustomSeparator","withEllipsis","withMenu"];export{gr as __namedExportsOrder,E as basic,S as customBoundaries,v as customEllipsis,Ir as default,w as withBoundaries,G as withCustomSeparator,R as withEllipsis,y as withItems,F as withMenu,N as withSeparator};
