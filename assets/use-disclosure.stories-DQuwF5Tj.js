import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{u as a}from"./index-Bx4dOF2q.js";import{B as l}from"./button-Bi9n-vY3.js";import{D as x}from"./dialog-CPnATt8c.js";import{T as D}from"./text-BJvDpKxV.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-C2Uq3ahE.js";import"./extends-CF3RwP-h.js";import"./forward-ref-DKTvpK5d.js";import"./use-ripple-Cy0wrTvg.js";import"./factory-uWFUvYzf.js";import"./motion-Bd6WkMzw.js";import"./loading-BNVTi1QG.js";import"./icon-sIHrqgYT.js";import"./index-UM7KnhWq.js";import"./theme-provider-jP6jS-pg.js";import"./use-component-style-Bx1vUO5y.js";import"./index-Bhd-KZw0.js";import"./index-DkkKXtPY.js";import"./Combination-CONbhR2A.js";import"./slide-pS9Qlmet.js";import"./utils-BQr-qST1.js";import"./motion-forward-ref-DCsEbWHi.js";import"./fade-COEZUKNS.js";import"./close-button-BxbDD0Pp.js";import"./container-portal-C3bX__47.js";import"./index-DxjWwZXO.js";import"./defineProperty-UXmCCx-B.js";import"./inheritsLoose-DR8r8Ogv.js";import"./slide-fade-CVIp2BLX.js";import"./scale-fade-DOMI91dn.js";const $={title:"Hooks / useDisclosure"},r=()=>{const{isOpen:s,onOpen:e,onClose:o}=a();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:e,children:"Open Dialog"}),n.jsx(x,{isOpen:s,onClose:o,header:"孫悟空",cancel:"わけない",onCancel:o,success:"わける",onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:s,onToggle:e}=a();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:e,children:"Please Click"}),s?n.jsx(D,{children:"Hey!"}):null]})},t=()=>{const{isOpen:s,onOpen:e,onClose:o}=a({onOpen:(...c)=>{console.log("Args:",c)},onClose:(...c)=>{console.log("Args:",c)}});return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:()=>e("This is arg"),children:"Open Dialog"}),n.jsx(x,{isOpen:s,onClose:()=>o("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>o("This is arg"),success:"わける",onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header="孫悟空" cancel="わけない" onCancel={onClose} success="わける" onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,C,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(d=(C=i.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var h,O,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure({
    onOpen: (...args: string[]) => {
      console.log("Args:", args);
    },
    onClose: (...args: string[]) => {
      console.log("Args:", args);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={() => onClose("This is arg")} header="孫悟空" cancel="わけない" onCancel={() => onClose("This is arg")} success="わける" onSuccess={() => onClose("This is arg")}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(T=(O=t.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const nn=["basic","useToggle","withChain"];export{nn as __namedExportsOrder,r as basic,$ as default,i as useToggle,t as withChain};
