import{j as t}from"./extends-CwFRzn3r.js";import{u as _}from"./index-BM4h2_aq.js";import{r as s}from"./index-BwDkhjyp.js";import{R as T}from"./Combination-IUp2vs9T.js";import{L as F}from"./loading-iPLDeGho.js";import{b as N,e as g,f as U,g as q,j as G}from"./factory-DBrfn43w.js";import{A as H}from"./index-CGy0U2a3.js";import{P as J}from"./portal-Dkok86ly.js";import{m as C}from"./factory-CWrzRNZL.js";const M=s.createContext({}),b=()=>({finish:s.createRef(),force:s.createRef(),isLoading:s.createRef(),start:s.createRef(),update:s.createRef()}),j=e=>({finish:()=>{var a,n;return(n=(a=e.current.finish).current)==null?void 0:n.call(a)},force:a=>{var n,o;return(o=(n=e.current.force).current)==null?void 0:o.call(n,a)},isLoading:()=>{var a,n;return((n=(a=e.current.isLoading).current)==null?void 0:n.call(a))??!1},start:a=>{var n,o;return(o=(n=e.current.start).current)==null?void 0:o.call(n,a)},update:a=>{var n,o;return(o=(n=e.current.update).current)==null?void 0:o.call(n,a)}}),K=e=>e+1,Q=e=>e===0?e:e-1,re=({background:e,children:a,custom:n,page:o,screen:c})=>{const l=s.useRef(b()),r=s.useRef(b()),f=s.useRef(b()),d=s.useRef(b()),k=j(l),p=j(r),L=j(f),v=j(d),y={background:L,custom:v,page:p,screen:k};return t.jsxs(M.Provider,{value:y,children:[a,t.jsx(h,{controlRefs:l,...c,component:(c==null?void 0:c.component)??((i,m)=>t.jsx(O,{ref:m,...i}))}),t.jsx(h,{controlRefs:r,...o,component:(o==null?void 0:o.component)??((i,m)=>t.jsx(E,{ref:m,...i}))}),t.jsx(h,{controlRefs:f,...e,blockScrollOnMount:(e==null?void 0:e.blockScrollOnMount)??!1,component:(e==null?void 0:e.component)??((i,m)=>t.jsx(A,{ref:m,...i}))}),t.jsx(h,{blockScrollOnMount:(e==null?void 0:e.blockScrollOnMount)??!1,controlRefs:d,...n,component:n==null?void 0:n.component})]})},h=({allowPinchZoom:e=!1,appendToParentPortal:a,blockScrollOnMount:n=!0,component:o,containerRef:c,controlRefs:l,duration:r=null,icon:f,initialState:d,text:k})=>{const p=s.useRef(!1),[{duration:L,loadingCount:v,message:y},i]=s.useState({duration:r,loadingCount:d?1:0,message:void 0}),{finish:m,force:W,isLoading:B,start:D,update:P}=s.useMemo(()=>({finish:()=>{p.current=!1,i(({loadingCount:u})=>({duration:r,loadingCount:Q(u),message:void 0}))},force:({duration:u=r,loadingCount:x=0,message:w})=>{p.current=!!x,i({duration:u,loadingCount:x,message:w})},isLoading:()=>p.current,start:({duration:u=r,message:x}={})=>{p.current=!0,i(({loadingCount:w})=>({duration:u,loadingCount:K(w),message:x}))},update:u=>i(x=>({...x,...u}))}),[r]);g(l.current.isLoading,B),g(l.current.start,D),g(l.current.finish,m),g(l.current.update,P),g(l.current.force,W);const V={duration:L,icon:f,initialState:d,message:y,text:k,onFinish:m};return U(()=>{(d||q(r))&&i({duration:r,loadingCount:d?1:0,message:void 0})},[d,r]),t.jsx(H,{initial:!1,children:v?t.jsx(J,{appendToParentPortal:a,containerRef:c,children:t.jsx(T,{allowPinchZoom:e,enabled:n,forwardProps:!0,children:t.jsx(z,{component:o,...V})})}):null})},z=s.forwardRef(({component:e,...a},n)=>typeof e=="function"?e(a,n):null);z.displayName="Render";const S=({message:e,...a})=>e?G(e)?e:t.jsx(N.p,{...a,children:e}):null,X=(e="fade")=>({animate:{opacity:1,scale:e==="scaleFade"?1:void 0,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:e==="scaleFade"?.95:void 0,transition:{duration:.4,ease:[.4,0,1,1]}},initial:{opacity:0,scale:e==="scaleFade"?.95:void 0}}),I=(e="fill")=>({alignItems:"center",bg:e==="fill"?["fallback(white, #fbfbfb)","fallback(black, #141414)"]:"fallback(blackAlpha.600, rgba(0, 0, 0, 0.48))",bottom:0,display:"flex",h:"100dvh",justifyContent:"center",left:0,p:"fallback(4, 1rem)",position:"fixed",right:0,top:0,w:"100vw",zIndex:"fallback(beerus, 9999)"}),R=(e,a="fade")=>({animate:"animate",exit:"exit",initial:e?!1:"initial",variants:X(a)}),O=s.memo(s.forwardRef(({duration:e,icon:a,initialState:n,message:o,text:c,onFinish:l},r)=>{const f={alignItems:"center",display:"flex",flexDirection:"column",gap:"fallback(2, 0.5rem)",justifyContent:"center",maxW:"24rem"};return _(l,e),t.jsx(C.div,{ref:r,className:"ui-loading-screen",...R(n),__css:I(),children:t.jsxs(N.div,{__css:f,children:[t.jsx(F,{fontSize:"6xl",...a}),t.jsx(S,{lineClamp:3,message:o,...c})]})})}));O.displayName="ScreenComponent";const E=s.memo(s.forwardRef(({duration:e,icon:a,initialState:n,message:o,text:c,onFinish:l},r)=>{const f={alignItems:"center",bg:["fallback(white, #fbfbfb)","fallback(black, #141414)"],boxShadow:["fallback(lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))","fallback(dark-lg, 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4))"],display:"flex",flexDirection:"column",gap:"fallback(2, 0.5rem)",justifyContent:"center",maxW:"24rem",p:"fallback(4, 1rem)",rounded:"fallback(md, 0.375rem)"};return _(l,e),t.jsx(C.div,{ref:r,className:"ui-loading-page",...R(n),__css:I("transparent"),children:t.jsxs(C.div,{className:"ui-loading-page__inner",...R(n,"scaleFade"),__css:f,children:[t.jsx(F,{fontSize:"6xl",...a}),t.jsx(S,{lineClamp:3,message:o,...c})]})})}));E.displayName="PageComponent";const A=s.memo(s.forwardRef(({duration:e,icon:a,initialState:n,message:o,text:c,onFinish:l},r)=>{const f={alignItems:"center",bg:["fallback(white, #fbfbfb)","fallback(black, #141414)"],bottom:"fallback(4, 1rem)",boxShadow:["fallback(3xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 -25px 50px -12px rgba(0, 0, 0, 0.25))","fallback(dark-lg, 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4))"],display:"flex",gap:"fallback(2, 0.5rem)",justifyContent:"center",maxW:"20rem",p:"fallback(2, 0.5rem)",position:"fixed",right:"fallback(4, 1rem)",rounded:"fallback(md, 0.375rem)",zIndex:"fallback(beerus, 9999)"};return _(l,e),t.jsxs(C.div,{ref:r,className:"ui-loading-background",...R(n,"scaleFade"),__css:f,children:[t.jsx(F,{fontSize:"xl",...a}),t.jsx(S,{fontSize:"sm",lineClamp:1,message:o,...c})]})}));A.displayName="BackgroundComponent";const le=()=>{const{background:e,custom:a,page:n,screen:o}=s.useContext(M);return{background:e,custom:a,page:n,screen:o}};export{re as L,le as u};
