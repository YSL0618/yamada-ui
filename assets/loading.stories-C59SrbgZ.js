import{j as n}from"./jsx-runtime-CfatFE5O.js";import{u as A}from"./index-C5Gv9kmK.js";import{r as x}from"./index-ClcD9ViR.js";import{U as d}from"./ui-provider-DT4ZJWc8.js";import{e as l}from"./extend-config-DGv21Tk6.js";import{u as m}from"./loading-provider-BNFf8qfE.js";import{C as p}from"./center-DTRX5VMi.js";import{W as g}from"./flex-B9Z-GWmv.js";import{B as a}from"./button-BN1WQcNU.js";import{M as f}from"./motion-BQ1UnLTP.js";import{L as P}from"./loading-Bd8HLEYZ.js";import{V as T}from"./stack-D7aiW26x.js";import{T as h}from"./text-Y1d9IDh4.js";import{j as U}from"./factory-BPYpkDor.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CCPRJsEV.js";import"./theme-provider-Bsm-0rKu.js";import"./proxy-DwHv-pG9.js";import"./notice-06IzLkX9.js";import"./alert-DuAaTs7C.js";import"./icon-DT11Nal8.js";import"./use-component-style-CYL4T5vM.js";import"./use-var-DoLXLJEg.js";import"./forward-ref-D13m8o2p.js";import"./close-button-BMgTv_5f.js";import"./use-ripple-EznoQwCc.js";import"./index-2WvfircW.js";import"./factory-BiXCYStP.js";import"./portal-Bwu6AgAB.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./Combination-__ZWiWyr.js";import"./forward-ref-2BKBy0Yi.js";const xn={title:"System / Theme / Loading"},L=async i=>new Promise(o=>{setTimeout(o,i)}),r=()=>{const i=l({loading:{background:{duration:5e3,icon:{variant:"grid"}},page:{duration:5e3,icon:{variant:"grid"}},screen:{duration:5e3,icon:{variant:"grid"}}}});return n.jsx(d,{config:i,children:n.jsx(z,{})})},s=()=>{const i=l({loading:{background:{icon:{variant:"dots"}},page:{icon:{variant:"dots"}},screen:{icon:{variant:"dots"},initialState:!0}}});return n.jsx(d,{config:i,children:n.jsx(E,{})})},c=()=>{const i=l({loading:{custom:{component:({duration:o,initialState:t,message:e,onFinish:u})=>(A(u,o),n.jsx(f,{sx:{alignItems:"center",bg:"blackAlpha.600",bottom:0,display:"flex",h:"100vh",justifyContent:"center",left:0,p:"md",position:"fixed",right:0,top:0,w:"100vw",zIndex:9999},animate:"animate",exit:"exit",initial:t?!1:"initial",variants:{animate:{opacity:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,transition:{duration:.4,ease:[.4,0,1,1]}},initial:{opacity:0}},children:n.jsxs(f,{sx:{alignItems:"center",bg:["white","black"],boxShadow:["lg","dark-lg"],display:"flex",flexDirection:"column",gap:"sm",justifyContent:"center",maxW:"md",p:"md",rounded:"md"},animate:"animate",exit:"exit",initial:t?!1:"initial",variants:{animate:{opacity:1,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.95,transition:{duration:.4,ease:[.4,0,1,1]}},initial:{opacity:0,scale:.95}},children:[n.jsx(P,{variant:"dots",fontSize:"6xl"}),n.jsxs(T,{align:"center",gap:"sm",mb:"md",children:[n.jsx(h,{children:"Downloading files…"}),e?U(e)?e:n.jsx(h,{lineClamp:3,children:e}):null]}),n.jsx(a,{size:"sm",onClick:u,children:"Play to background"})]})}))}}});return n.jsx(d,{config:i,children:n.jsx(M,{})})},z=()=>{const{background:i,page:o,screen:t}=m();return n.jsx(p,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(g,{gap:"md",children:[n.jsx(a,{onClick:()=>t.start(),children:"Start screen loading"}),n.jsx(a,{onClick:()=>o.start(),children:"Start page loading"}),n.jsx(a,{onClick:()=>i.start(),children:"Start background loading"})]})})},E=()=>{const{background:i,page:o,screen:t}=m(),e=x.useCallback(async()=>{await L(5e3),t.finish()},[t]);return x.useEffect(()=>{e()},[e]),n.jsx(p,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(g,{gap:"md",children:[n.jsx(a,{onClick:()=>t.start(),children:"Start screen loading"}),n.jsx(a,{onClick:()=>o.start(),children:"Start page loading"}),n.jsx(a,{onClick:()=>i.start(),children:"Start background loading"})]})})},M=()=>{const{custom:i}=m();return n.jsx(p,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(g,{gap:"md",children:n.jsx(a,{onClick:()=>i.start({duration:1e4}),children:"Start custom loading"})})})};var v,j,k;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      background: {
        duration: 5000,
        icon: {
          variant: "grid"
        }
      },
      page: {
        duration: 5000,
        icon: {
          variant: "grid"
        }
      },
      screen: {
        duration: 5000,
        icon: {
          variant: "grid"
        }
      }
    }
  });
  return <UIProvider config={config}>
      <App />
    </UIProvider>;
}`,...(k=(j=r.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var b,y,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      background: {
        icon: {
          variant: "dots"
        }
      },
      page: {
        icon: {
          variant: "dots"
        }
      },
      screen: {
        icon: {
          variant: "dots"
        },
        initialState: true
      }
    }
  });
  return <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>;
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,w,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      custom: {
        component: ({
          duration,
          initialState,
          message,
          onFinish
        }) => {
          useTimeout(onFinish, duration);
          return <Motion sx={{
            alignItems: "center",
            bg: "blackAlpha.600",
            bottom: 0,
            display: "flex",
            h: "100vh",
            justifyContent: "center",
            left: 0,
            p: "md",
            position: "fixed",
            right: 0,
            top: 0,
            w: "100vw",
            zIndex: 9999
          }} animate="animate" exit="exit" initial={!initialState ? "initial" : false} variants={{
            animate: {
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 1, 1]
              }
            },
            initial: {
              opacity: 0
            }
          }}>
              <Motion sx={{
              alignItems: "center",
              bg: ["white", "black"],
              boxShadow: ["lg", "dark-lg"],
              display: "flex",
              flexDirection: "column",
              gap: "sm",
              justifyContent: "center",
              maxW: "md",
              p: "md",
              rounded: "md"
            }} animate="animate" exit="exit" initial={!initialState ? "initial" : false} variants={{
              animate: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }
              },
              exit: {
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 1, 1]
                }
              },
              initial: {
                opacity: 0,
                scale: 0.95
              }
            }}>
                <Loading variant="dots" fontSize="6xl" />

                <VStack align="center" gap="sm" mb="md">
                  <Text>Downloading files…</Text>
                  {message ? isValidElement(message) ? message : <Text lineClamp={3}>{message}</Text> : null}
                </VStack>

                <Button size="sm" onClick={onFinish}>
                  Play to background
                </Button>
              </Motion>
            </Motion>;
        }
      }
    }
  });
  return <UIProvider config={config}>
      <CustomApp />
    </UIProvider>;
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const fn=["basic","useInitialState","useCustomLoading"];export{fn as __namedExportsOrder,r as basic,xn as default,c as useCustomLoading,s as useInitialState};
