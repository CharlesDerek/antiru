(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1712],{94044:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(67294),r=n(6454),i=n(76852),s=Math.pow(2,31)-1;function l(e,t,n){var o=n-Date.now();e.current=o<=s?setTimeout(t,o):setTimeout((function(){return l(e,t,n)}),s)}function a(){var e=(0,r.Z)(),t=(0,o.useRef)();return(0,i.Z)((function(){return clearTimeout(t.current)})),(0,o.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(o,r){void 0===r&&(r=0),e()&&(n(),r<=s?t.current=setTimeout(o,r):l(t,o,Date.now()+r))},clear:n}}),[])}},90012:function(e,t,n){"use strict";function o(e={}){return Array.isArray(e)?e:Object.keys(e).map((t=>(e[t].name=t,e[t])))}function r({enabled:e,enableEvents:t,placement:n,flip:r,offset:i,fixed:s,containerPadding:l,arrowElement:a,popperConfig:c={}}){var u,p,d,f;const m=function(e){const t={};return Array.isArray(e)?(null==e||e.forEach((e=>{t[e.name]=e})),t):e||t}(c.modifiers);return Object.assign({},c,{placement:n,enabled:e,strategy:s?"fixed":c.strategy,modifiers:o(Object.assign({},m,{eventListeners:{enabled:t},preventOverflow:Object.assign({},m.preventOverflow,{options:l?Object.assign({padding:l},null==(u=m.preventOverflow)?void 0:u.options):null==(p=m.preventOverflow)?void 0:p.options}),offset:{options:Object.assign({offset:i},null==(d=m.offset)?void 0:d.options)},arrow:Object.assign({},m.arrow,{enabled:!!a,options:Object.assign({},null==(f=m.arrow)?void 0:f.options,{element:a})}),flip:Object.assign({enabled:!!r},m.flip)}))})}n.d(t,{ZP:function(){return r}})},5680:function(e,t,n){"use strict";n.d(t,{f:function(){return p}});var o=n(90424),r=n(72950),i=n(67216),s=n(67294),l=n(78146),a=n(42473),c=n.n(a);const u=()=>{};const p=e=>e&&("current"in e?e.current:e),d={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};t.Z=function(e,t=u,{disabled:n,clickTrigger:a="click"}={}){const f=(0,s.useRef)(!1),m=(0,s.useRef)(!1),h=(0,s.useCallback)((t=>{const n=p(e);var r;c()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),f.current=!n||!!((r=t).metaKey||r.altKey||r.ctrlKey||r.shiftKey)||!function(e){return 0===e.button}(t)||!!(0,o.Z)(n,t.target)||m.current,m.current=!1}),[e]),v=(0,l.Z)((t=>{const n=p(e);n&&(0,o.Z)(n,t.target)&&(m.current=!0)})),b=(0,l.Z)((e=>{f.current||t(e)}));(0,s.useEffect)((()=>{if(n||null==e)return;const t=(0,i.Z)(p(e));let o=(t.defaultView||window).event,s=null;d[a]&&(s=(0,r.Z)(t,d[a],v,!0));const l=(0,r.Z)(t,a,h,!0),c=(0,r.Z)(t,a,(e=>{e!==o?b(e):o=void 0}));let f=[];return"ontouchstart"in t.documentElement&&(f=[].slice.call(t.body.children).map((e=>(0,r.Z)(e,"mousemove",u)))),()=>{null==s||s(),l(),c(),f.forEach((e=>e()))}}),[e,n,a,h,v,b])}},77086:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var o=n(67294),r=Object.prototype.hasOwnProperty;function i(e,t,n){for(n of e.keys())if(s(n,t))return n}function s(e,t){var n,o,l;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((o=e.length)===t.length)for(;o--&&s(e[o],t[o]););return-1===o}if(n===Set){if(e.size!==t.size)return!1;for(o of e){if((l=o)&&"object"===typeof l&&!(l=i(t,l)))return!1;if(!t.has(l))return!1}return!0}if(n===Map){if(e.size!==t.size)return!1;for(o of e){if((l=o[0])&&"object"===typeof l&&!(l=i(t,l)))return!1;if(!s(o[1],t.get(l)))return!1}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((o=e.byteLength)===t.byteLength)for(;o--&&e.getInt8(o)===t.getInt8(o););return-1===o}if(ArrayBuffer.isView(e)){if((o=e.byteLength)===t.byteLength)for(;o--&&e[o]===t[o];);return-1===o}if(!n||"object"===typeof e){for(n in o=0,e){if(r.call(e,n)&&++o&&!r.call(t,n))return!1;if(!(n in t)||!s(e[n],t[n]))return!1}return Object.keys(t).length===o}}return e!==e&&t!==t}var l=n(6454);var a=function(e){var t=(0,l.Z)();return[e[0],(0,o.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]},c=n(66896),u=n(36531),p=n(82372),d=n(68855),f=n(19892),m=n(82122),h=n(77421),v=n(394);const b=(0,n(45704).kZ)({defaultModifiers:[f.Z,h.Z,u.Z,p.Z,m.Z,d.Z,v.Z,c.Z]}),g=["enabled","placement","strategy","modifiers"];const y={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},w={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const e=(t.getAttribute("aria-describedby")||"").split(",").filter((e=>e.trim()!==n.id));e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:o}=e.elements,r=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===r&&"setAttribute"in o){const e=o.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;o.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},x=[];var Z=function(e,t,n={}){let{enabled:r=!0,placement:i="bottom",strategy:l="absolute",modifiers:c=x}=n,u=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,g);const p=(0,o.useRef)(c),d=(0,o.useRef)(),f=(0,o.useCallback)((()=>{var e;null==(e=d.current)||e.update()}),[]),m=(0,o.useCallback)((()=>{var e;null==(e=d.current)||e.forceUpdate()}),[]),[h,v]=a((0,o.useState)({placement:i,update:f,forceUpdate:m,attributes:{},styles:{popper:{},arrow:{}}})),Z=(0,o.useMemo)((()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{const t={},n={};Object.keys(e.elements).forEach((o=>{t[o]=e.styles[o],n[o]=e.attributes[o]})),v({state:e,styles:t,attributes:n,update:f,forceUpdate:m,placement:e.placement})}})),[f,m,v]),j=(0,o.useMemo)((()=>(s(p.current,c)||(p.current=c),p.current)),[c]);return(0,o.useEffect)((()=>{d.current&&r&&d.current.setOptions({placement:i,strategy:l,modifiers:[...j,Z,y]})}),[l,i,Z,r,j]),(0,o.useEffect)((()=>{if(r&&null!=e&&null!=t)return d.current=b(e,t,Object.assign({},u,{placement:i,strategy:l,modifiers:[...j,w,Z]})),()=>{null!=d.current&&(d.current.destroy(),d.current=void 0,v((e=>Object.assign({},e,{attributes:{},styles:{popper:{}}}))))}}),[r,e,t]),h}},34043:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tooltips",function(){return n(90019)}])},41752:function(e,t,n){"use strict";var o=n(85893),r=n(67294),i=n(15660),s=n.n(i);n(94838),n(16089),n(67863),n(81233),n(46177),n(82911);t.Z=function(e){var t=e.language,n=e.className,i=e.children,l=e.style;return(0,r.useEffect)((function(){s().highlightAll()}),[i]),(0,o.jsx)("pre",{className:"line-numbers ".concat(n),style:l,children:(0,o.jsx)("code",{className:"language-".concat(t),children:i})})}},63001:function(e,t,n){"use strict";var o=n(85893),r=n(78182),i=n(69463),s=n(60489),l=n(41068);t.Z=function(e){return(0,o.jsx)("section",{id:e.id,className:"pb-5 mb-md-2",children:(0,o.jsxs)(s.Z.Container,{defaultActiveKey:"preview",transition:l.Z,children:[(0,o.jsx)("h2",{className:"h5 mb-3",children:e.title}),(0,o.jsxs)(r.Z,{className:"border-0 shadow-sm",children:[(0,o.jsx)(r.Z.Header,{children:(0,o.jsxs)(i.Z,{variant:"tabs",children:[(0,o.jsx)(i.Z.Item,{children:(0,o.jsxs)(i.Z.Link,{as:"button",eventKey:"preview",children:[(0,o.jsx)("i",{className:"fi-eye-on me-2"}),"Preview"]})}),(0,o.jsx)(i.Z.Item,{children:(0,o.jsxs)(i.Z.Link,{as:"button",eventKey:"code",children:[(0,o.jsx)("i",{className:"fi-code me-2"}),"Code"]})})]})}),(0,o.jsx)(r.Z.Body,{children:(0,o.jsx)(s.Z.Content,{children:e.children})})]})]})})}},90019:function(e,t,n){"use strict";n.r(t);var o=n(85893),r=n(8840),i=n(63001),s=n(60489),l=n(59862),a=n(43489),c=n(35005),u=n(41752);t.default=function(){return(0,o.jsxs)(r.Z,{pageTitle:"Tooltips",pageDescription:"Custom tooltips for local title storage.",activeNav:"/components/tooltips",docsLink:"https://react-bootstrap.github.io/components/overlays/#tooltips",docsLinkLabel:"React Bootstrap docs",anchorLinks:[{label:"Static example",anchor:"tooltips-static"},{label:"Live demo",anchor:"tooltips-demo"}],children:[(0,o.jsxs)("section",{id:"tooltips-static",className:"pb-5 mb-md-2",children:[(0,o.jsx)("h2",{className:"h5 mb-3",children:"Static example"}),(0,o.jsx)("div",{className:"card border-0 shadow-sm",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("style",{children:"\n              .example-tooltip .tooltip {\n                display: inline-block;\n                position: relative;\n                margin: .625rem 1.25rem;\n                opacity: 1;\n                z-index: 1;\n              }\n              .example-tooltip .tooltip.bs-tooltip-top .tooltip-arrow,\n              .example-tooltip .tooltip.bs-tooltip-bottom .tooltip-arrow {\n                left: 50%;\n                margin-left: -.375rem;\n              }\n              .example-tooltip .tooltip.bs-tooltip-end .tooltip-arrow,\n              .example-tooltip .tooltip.bs-tooltip-start .tooltip-arrow {\n                top: 50%;\n                margin-top: -.375rem;\n              }\n            "}),(0,o.jsxs)("div",{className:"example-tooltip",children:[(0,o.jsx)(a.Z,{show:"true",placement:"top",children:"Tooltip on the top"}),(0,o.jsx)(a.Z,{show:"true",placement:"end",children:"Tooltip on the right"}),(0,o.jsx)(a.Z,{show:"true",placement:"bottom",children:"Tooltip on the bottom"}),(0,o.jsx)(a.Z,{show:"true",placement:"start",children:"Tooltip on the left"}),(0,o.jsxs)(a.Z,{show:"true",placement:"top",children:[(0,o.jsx)("i",{children:"Tooltip"})," ",(0,o.jsx)("u",{children:"with"})," ",(0,o.jsx)("strong",{children:"JSX"})]})]})]})})]}),(0,o.jsxs)(i.Z,{id:"tooltips-demo",title:"Live demo",children:[(0,o.jsx)(s.Z.Pane,{eventKey:"preview",children:(0,o.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,o.jsx)(l.Z,{placement:"top",overlay:(0,o.jsx)(a.Z,{children:"Tooltp on top"}),children:(0,o.jsx)(c.Z,{variant:"outline-secondary",className:"me-3 mb-3",children:"Tooltp on top"})}),(0,o.jsx)(l.Z,{placement:"right",overlay:(0,o.jsx)(a.Z,{children:"Tooltp on right"}),children:(0,o.jsx)(c.Z,{variant:"outline-secondary",className:"me-3 mb-3",children:"Tooltp on right"})}),(0,o.jsx)(l.Z,{placement:"bottom",overlay:(0,o.jsx)(a.Z,{children:"Tooltp on bottom"}),children:(0,o.jsx)(c.Z,{variant:"outline-secondary",className:"me-3 mb-3",children:"Tooltp on bottom"})}),(0,o.jsx)(l.Z,{placement:"left",overlay:(0,o.jsx)(a.Z,{children:"Tooltp on left"}),children:(0,o.jsx)(c.Z,{variant:"outline-secondary",className:"me-3 mb-3",children:"Tooltp on left"})}),(0,o.jsx)(l.Z,{placement:"top",overlay:(0,o.jsxs)(a.Z,{children:[(0,o.jsx)("i",{children:"Tooltip"})," ",(0,o.jsx)("u",{children:"with"})," ",(0,o.jsx)("strong",{children:"JSX"})]}),children:(0,o.jsx)(c.Z,{variant:"outline-secondary",className:"mb-3",children:"Tooltp with JSX"})})]})}),(0,o.jsx)(s.Z.Pane,{eventKey:"code",children:(0,o.jsx)(u.Z,{language:"jsx",children:"import OverlayTrigger from 'react-bootstrap/OverlayTrigger'\nimport Tooltip from 'react-bootstrap/Tooltip'\nimport Button from 'react-bootstrap/Button'\n\n{/* Tooltip on the top */}\n<OverlayTrigger\n  placement='top'\n  overlay={<Tooltip>Tooltp on top</Tooltip>}\n>\n  <Button variant='outline-secondary'>Tooltp on top</Button>\n</OverlayTrigger>\n\n{/* Tooltip on the right */}\n<OverlayTrigger\n  placement='right'\n  overlay={<Tooltip>Tooltp on right</Tooltip>}\n>\n  <Button variant='outline-secondary'>Tooltp on right</Button>\n</OverlayTrigger>\n\n{/* Tooltip on the bottom */}\n<OverlayTrigger\n  placement='bottom'\n  overlay={<Tooltip>Tooltp on bottom</Tooltip>}\n>\n  <Button variant='outline-secondary'>Tooltp on bottom</Button>\n</OverlayTrigger>\n\n{/* Tooltip on the left */}\n<OverlayTrigger\n  placement='left'\n  overlay={<Tooltip>Tooltp on left</Tooltip>}\n>\n  <Button variant='outline-secondary'>Tooltp on left</Button>\n</OverlayTrigger>\n\n{/* Tooltp with JSX */}\n<OverlayTrigger\n  placement='top'\n  overlay={<Tooltip><i>Tooltip</i> <u>with</u> <strong>JSX</strong></Tooltip>}\n>\n  <Button variant='outline-secondary'>Tooltp with JSX</Button>\n</OverlayTrigger>"})})]})]})}},59862:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var o=n(90424),r=n(67294),i=n(94044),s=(n(42473),n(15446)),l=n(35654),a=n(94184),c=n.n(a),u=n(73935),p=n(32092),d=n(77086),f=n(72950),m=n(67216),h=n(78146),v=n(5680);const b=()=>{};var g=function(e,t,{disabled:n,clickTrigger:o}={}){const i=t||b;(0,v.Z)(e,i,{disabled:n,clickTrigger:o});const s=(0,h.Z)((e=>{27===e.keyCode&&i(e)}));(0,r.useEffect)((()=>{if(n||null==e)return;const t=(0,m.Z)((0,v.f)(e));let o=(t.defaultView||window).event;const r=(0,f.Z)(t,"keyup",(e=>{e!==o?s(e):o=void 0}));return()=>{r()}}),[e,n,s])},y=n(54194),w=n(90012),x=n(85893);const Z=r.forwardRef(((e,t)=>{const{flip:n,offset:o,placement:i,containerPadding:s,popperConfig:a={},transition:c}=e,[f,m]=(0,p.Z)(),[h,v]=(0,p.Z)(),b=(0,l.Z)(m,t),Z=(0,y.Z)(e.container),j=(0,y.Z)(e.target),[T,O]=(0,r.useState)(!e.show),E=(0,d.Z)(j,f,(0,w.ZP)({placement:i,enableEvents:!!e.show,containerPadding:s||5,flip:n,offset:o,arrowElement:h,popperConfig:a}));e.show?T&&O(!1):e.transition||T||O(!0);const k=(...t)=>{O(!0),e.onExited&&e.onExited(...t)},C=e.show||c&&!T;if(g(f,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!C)return null;let N=e.children(Object.assign({},E.attributes.popper,{style:E.styles.popper,ref:b}),{popper:E,placement:i,show:!!e.show,arrowProps:Object.assign({},E.attributes.arrow,{style:E.styles.arrow,ref:v})});if(c){const{onExit:t,onExiting:n,onEnter:o,onEntering:r,onEntered:i}=e;N=(0,x.jsx)(c,{in:e.show,appear:!0,onExit:t,onExiting:n,onExited:k,onEnter:o,onEntering:r,onEntered:i,children:N})}return Z?u.createPortal(N,Z):null}));Z.displayName="Overlay";var j=Z,T=n(11132),O=n(76792),E=n(40755);var k=n(41068),C=n(8285);const N={transition:k.Z,rootClose:!1,show:!1,placement:"top"};const P=r.forwardRef((({children:e,transition:t,popperConfig:n={},...o},i)=>{const s=(0,r.useRef)({}),[a,u]=function(e){const t=(0,r.useRef)(null),n=(0,O.vE)(void 0,"popover"),o=(0,r.useMemo)((()=>({name:"offset",options:{offset:()=>t.current&&(0,T.Z)(t.current,n)?e||E.Z.POPPER_OFFSET:e||[0,0]}})),[e,n]);return[t,[o]]}(o.offset),p=(0,l.Z)(i,a),d=!0===t?k.Z:t||void 0;return(0,x.jsx)(j,{...o,ref:p,popperConfig:{...n,modifiers:u.concat(n.modifiers||[])},transition:d,children:(n,{arrowProps:o,popper:i,show:l})=>{var a,u;!function(e,t){const{ref:n}=e,{ref:o}=t;e.ref=n.__wrapped||(n.__wrapped=e=>n((0,C.Z)(e))),t.ref=o.__wrapped||(o.__wrapped=e=>o((0,C.Z)(e)))}(n,o);const p=null==i?void 0:i.placement,d=Object.assign(s.current,{state:null==i?void 0:i.state,scheduleUpdate:null==i?void 0:i.update,placement:p,outOfBoundaries:(null==i||null==(a=i.state)||null==(u=a.modifiersData.hide)?void 0:u.isReferenceHidden)||!1});return"function"===typeof e?e({...n,placement:p,show:l,...!t&&l&&{className:"show"},popper:d,arrowProps:o}):r.cloneElement(e,{...n,placement:p,arrowProps:o,popper:d,className:c()(e.props.className,!t&&l&&"show"),style:{...e.props.style,...n.style}})}})}));P.displayName="Overlay",P.defaultProps=N;var S=P;function _(e,t,n){const[r]=t,i=r.currentTarget,s=r.relatedTarget||r.nativeEvent[n];s&&s===i||(0,o.Z)(i,s)||e(...t)}function B({trigger:e,overlay:t,children:n,popperConfig:o={},show:a,defaultShow:c=!1,onToggle:u,delay:p,placement:d,flip:f=d&&-1!==d.indexOf("auto"),...m}){const h=(0,r.useRef)(null),v=(0,l.Z)(h,n.ref),b=(0,i.Z)(),g=(0,r.useRef)(""),[y,w]=(0,s.$c)(a,c,u),Z=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(p),{onFocus:j,onBlur:T,onClick:O}="function"!==typeof n?r.Children.only(n).props:{},E=(0,r.useCallback)((()=>{b.clear(),g.current="show",Z.show?b.set((()=>{"show"===g.current&&w(!0)}),Z.show):w(!0)}),[Z.show,w,b]),k=(0,r.useCallback)((()=>{b.clear(),g.current="hide",Z.hide?b.set((()=>{"hide"===g.current&&w(!1)}),Z.hide):w(!1)}),[Z.hide,w,b]),N=(0,r.useCallback)(((...e)=>{E(),null==j||j(...e)}),[E,j]),P=(0,r.useCallback)(((...e)=>{k(),null==T||T(...e)}),[k,T]),B=(0,r.useCallback)(((...e)=>{w(!y),null==O||O(...e)}),[O,w,y]),A=(0,r.useCallback)(((...e)=>{_(E,e,"fromElement")}),[E]),R=(0,r.useCallback)(((...e)=>{_(k,e,"toElement")}),[k]),L=null==e?[]:[].concat(e),M={ref:e=>{v((0,C.Z)(e))}};return-1!==L.indexOf("click")&&(M.onClick=B),-1!==L.indexOf("focus")&&(M.onFocus=N,M.onBlur=P),-1!==L.indexOf("hover")&&(M.onMouseOver=A,M.onMouseOut=R),(0,x.jsxs)(x.Fragment,{children:["function"===typeof n?n(M):(0,r.cloneElement)(n,M),(0,x.jsx)(S,{...m,show:y,onHide:k,flip:f,placement:d,popperConfig:o,target:h.current,children:t})]})}B.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var A=B},40755:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(94184),r=n.n(o),i=n(67294),s=n(76792),l=n(66611),a=(0,l.Z)("popover-header"),c=(0,l.Z)("popover-body"),u=n(79883),p=n(85893);const d=i.forwardRef((({bsPrefix:e,placement:t,className:n,style:o,children:i,body:l,arrowProps:a,popper:d,show:f,...m},h)=>{const v=(0,s.vE)(e,"popover"),b=(0,s.SC)(),[g]=(null==t?void 0:t.split("-"))||[],y=(0,u.z)(g,b);return(0,p.jsxs)("div",{ref:h,role:"tooltip",style:o,"x-placement":g,className:r()(n,v,g&&`bs-popover-${y}`),...m,children:[(0,p.jsx)("div",{className:"popover-arrow",...a}),l?(0,p.jsx)(c,{children:i}):i]})}));d.defaultProps={placement:"right"};var f=Object.assign(d,{Header:a,Body:c,POPPER_OFFSET:[0,8]})},43489:function(e,t,n){"use strict";var o=n(94184),r=n.n(o),i=n(67294),s=n(76792),l=n(79883),a=n(85893);const c=i.forwardRef((({bsPrefix:e,placement:t,className:n,style:o,children:i,arrowProps:c,popper:u,show:p,...d},f)=>{e=(0,s.vE)(e,"tooltip");const m=(0,s.SC)(),[h]=(null==t?void 0:t.split("-"))||[],v=(0,l.z)(h,m);return(0,a.jsxs)("div",{ref:f,style:o,role:"tooltip","x-placement":h,className:r()(n,e,`bs-tooltip-${v}`),...d,children:[(0,a.jsx)("div",{className:"tooltip-arrow",...c}),(0,a.jsx)("div",{className:`${e}-inner`,children:i})]})}));c.defaultProps={placement:"right"},c.displayName="Tooltip",t.Z=c},79883:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var o=n(67294);o.Component;function r(e,t){let n=e;return"left"===e?n=t?"end":"start":"right"===e&&(n=t?"start":"end"),n}}},function(e){e.O(0,[3675,4222,4567,2141,8279,7472,8840,9774,2888,179],(function(){return t=34043,e(e.s=t);var t}));var t=e.O();_N_E=t}]);