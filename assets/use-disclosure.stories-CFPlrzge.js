import{j as n}from"./jsx-runtime-CfatFE5O.js";import{u as m,a as w}from"./index-BcE809qD.js";import{B as p}from"./button-Dh7D4tOu.js";import{D as u}from"./dialog-nE-i38Da.js";import{T as s}from"./text-BnztNdZ-.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-COau3w21.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-D0covPjN.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-ep9rrzy9.js";import"./loading-DYtJ9fc2.js";import"./icon-BodRPJCf.js";import"./use-component-style-CLSKeq_H.js";import"./theme-provider-CNI9L2WW.js";import"./use-var-YCfkKbSC.js";import"./modal-CtUR96b1.js";import"./index-J4x_JfHv.js";import"./index-BjGf4nWH.js";import"./Combination-CkmEMpJG.js";import"./fade-CoSeI2Us.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-COso-ZNO.js";import"./close-button-EOT3XTCt.js";import"./slide-DgW2UPxK.js";import"./slide-fade-CGUrMJaL.js";import"./scale-fade-CFljfXl2.js";import"./portal-CgvdJ0pj.js";import"./index-ZuzByk-F.js";import"./defineProperty-UXmCCx-B.js";const cn={title:"Hooks / useDisclosure"},i=()=>{const{isOpen:e,onClose:o,onOpen:r}=m();return n.jsxs(n.Fragment,{children:[n.jsx(p,{onClick:r,children:"Open Dialog"}),n.jsx(u,{cancel:"わけない",header:"孫悟空",isOpen:e,success:"わける",onCancel:o,onClose:o,onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},t=()=>{const{isOpen:e,onToggle:o}=m();return n.jsxs(n.Fragment,{children:[n.jsx(p,{onClick:o,children:"Please Click"}),e?n.jsx(s,{children:"Hey!"}):null]})},l=()=>{const{isOpen:e,onClose:o,onOpen:r}=m({onClose:(...c)=>{console.log("Args:",c)},onOpen:(...c)=>{console.log("Args:",c)}});return n.jsxs(n.Fragment,{children:[n.jsx(p,{onClick:()=>r("This is arg"),children:"Open Dialog"}),n.jsx(u,{cancel:"わけない",header:"孫悟空",isOpen:e,success:"わける",onCancel:()=>o("This is arg"),onClose:()=>o("This is arg"),onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},a=()=>{const{isOpen:e,onClose:o,onOpen:r,onSuccess:c}=w(),f=async()=>{try{await r(),console.log("あるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return n.jsxs(n.Fragment,{children:[n.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),n.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),n.jsx(p,{onClick:f,children:"わけない"}),n.jsxs(u,{size:"2xl",cancel:"わけない",header:"ミスター・サタン",isOpen:e,success:"わける",onCancel:o,onClose:o,onSuccess:c,children:[n.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),n.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),n.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]})]})};var g,C,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog cancel="わけない" header="孫悟空" isOpen={isOpen} success="わける" onCancel={onClose} onClose={onClose} onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(h=(C=i.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var d,x,O;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(O=(x=t.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var T,j,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onClose,
    onOpen
  } = useDisclosure({
    onClose: (...args: string[]) => {
      console.log("Args:", args);
    },
    onOpen: (...args: string[]) => {
      console.log("Args:", args);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Dialog cancel="わけない" header="孫悟空" isOpen={isOpen} success="わける" onCancel={() => onClose("This is arg")} onClose={() => onClose("This is arg")} onSuccess={() => onClose("This is arg")}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(D=(j=l.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var k,S,B;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onClose,
    onOpen,
    onSuccess
  } = usePromiseDisclosure();
  const onClick = async () => {
    try {
      await onOpen();
      console.log("あるじゃねえか、サタン!!!");
      console.log("おめえはホントに世界の…");
      console.log("救世主かもな!!!!");
    } catch {
      console.error("地球は滅亡しました");
    }
  };
  return <>
      <Text>だ…大地よ海よ　そして生きているすべての　みんな…</Text>
      <Text>このオラにほんのちょっとずつだけ元気をわけてくれ…！！！</Text>

      <Button onClick={onClick}>わけない</Button>

      <Dialog size="2xl" cancel="わけない" header="ミスター・サタン" isOpen={isOpen} success="わける" onCancel={onClose} onClose={onClose} onSuccess={onSuccess}>
        <Text>き、きさまらいいかげんにしろーーーっ!!!</Text>
        <Text>さっさと協力しないかーーーっ!!!</Text>
        <Text>
          このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!
        </Text>
      </Dialog>
    </>;
}`,...(B=(S=a.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const tn=["basic","useToggle","withChain","withPromise"];export{tn as __namedExportsOrder,i as basic,cn as default,t as useToggle,l as withChain,a as withPromise};
