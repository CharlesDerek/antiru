(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3255],{94044:function(e,r,o){"use strict";o.d(r,{Z:function(){return l}});var t=o(67294),n=o(6454),s=o(76852),a=Math.pow(2,31)-1;function i(e,r,o){var t=o-Date.now();e.current=t<=a?setTimeout(r,t):setTimeout((function(){return i(e,r,o)}),a)}function l(){var e=(0,n.Z)(),r=(0,t.useRef)();return(0,s.Z)((function(){return clearTimeout(r.current)})),(0,t.useMemo)((function(){var o=function(){return clearTimeout(r.current)};return{set:function(t,n){void 0===n&&(n=0),e()&&(o(),n<=a?r.current=setTimeout(t,n):i(r,t,Date.now()+n))},clear:o}}),[])}},90012:function(e,r,o){"use strict";function t(e={}){return Array.isArray(e)?e:Object.keys(e).map((r=>(e[r].name=r,e[r])))}function n({enabled:e,enableEvents:r,placement:o,flip:n,offset:s,fixed:a,containerPadding:i,arrowElement:l,popperConfig:c={}}){var p,u,d,f;const v=function(e){const r={};return Array.isArray(e)?(null==e||e.forEach((e=>{r[e.name]=e})),r):e||r}(c.modifiers);return Object.assign({},c,{placement:o,enabled:e,strategy:a?"fixed":c.strategy,modifiers:t(Object.assign({},v,{eventListeners:{enabled:r},preventOverflow:Object.assign({},v.preventOverflow,{options:i?Object.assign({padding:i},null==(p=v.preventOverflow)?void 0:p.options):null==(u=v.preventOverflow)?void 0:u.options}),offset:{options:Object.assign({offset:s},null==(d=v.offset)?void 0:d.options)},arrow:Object.assign({},v.arrow,{enabled:!!l,options:Object.assign({},null==(f=v.arrow)?void 0:f.options,{element:l})}),flip:Object.assign({enabled:!!n},v.flip)}))})}o.d(r,{ZP:function(){return n}})},5680:function(e,r,o){"use strict";o.d(r,{f:function(){return u}});var t=o(90424),n=o(72950),s=o(67216),a=o(67294),i=o(78146),l=o(42473),c=o.n(l);const p=()=>{};const u=e=>e&&("current"in e?e.current:e),d={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};r.Z=function(e,r=p,{disabled:o,clickTrigger:l="click"}={}){const f=(0,a.useRef)(!1),v=(0,a.useRef)(!1),m=(0,a.useCallback)((r=>{const o=u(e);var n;c()(!!o,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),f.current=!o||!!((n=r).metaKey||n.altKey||n.ctrlKey||n.shiftKey)||!function(e){return 0===e.button}(r)||!!(0,t.Z)(o,r.target)||v.current,v.current=!1}),[e]),h=(0,i.Z)((r=>{const o=u(e);o&&(0,t.Z)(o,r.target)&&(v.current=!0)})),g=(0,i.Z)((e=>{f.current||r(e)}));(0,a.useEffect)((()=>{if(o||null==e)return;const r=(0,s.Z)(u(e));let t=(r.defaultView||window).event,a=null;d[l]&&(a=(0,n.Z)(r,d[l],h,!0));const i=(0,n.Z)(r,l,m,!0),c=(0,n.Z)(r,l,(e=>{e!==t?g(e):t=void 0}));let f=[];return"ontouchstart"in r.documentElement&&(f=[].slice.call(r.body.children).map((e=>(0,n.Z)(e,"mousemove",p)))),()=>{null==a||a(),i(),c(),f.forEach((e=>e()))}}),[e,o,l,m,h,g])}},77086:function(e,r,o){"use strict";o.d(r,{Z:function(){return P}});var t=o(67294),n=Object.prototype.hasOwnProperty;function s(e,r,o){for(o of e.keys())if(a(o,r))return o}function a(e,r){var o,t,i;if(e===r)return!0;if(e&&r&&(o=e.constructor)===r.constructor){if(o===Date)return e.getTime()===r.getTime();if(o===RegExp)return e.toString()===r.toString();if(o===Array){if((t=e.length)===r.length)for(;t--&&a(e[t],r[t]););return-1===t}if(o===Set){if(e.size!==r.size)return!1;for(t of e){if((i=t)&&"object"===typeof i&&!(i=s(r,i)))return!1;if(!r.has(i))return!1}return!0}if(o===Map){if(e.size!==r.size)return!1;for(t of e){if((i=t[0])&&"object"===typeof i&&!(i=s(r,i)))return!1;if(!a(t[1],r.get(i)))return!1}return!0}if(o===ArrayBuffer)e=new Uint8Array(e),r=new Uint8Array(r);else if(o===DataView){if((t=e.byteLength)===r.byteLength)for(;t--&&e.getInt8(t)===r.getInt8(t););return-1===t}if(ArrayBuffer.isView(e)){if((t=e.byteLength)===r.byteLength)for(;t--&&e[t]===r[t];);return-1===t}if(!o||"object"===typeof e){for(o in t=0,e){if(n.call(e,o)&&++t&&!n.call(r,o))return!1;if(!(o in r)||!a(e[o],r[o]))return!1}return Object.keys(r).length===t}}return e!==e&&r!==r}var i=o(6454);var l=function(e){var r=(0,i.Z)();return[e[0],(0,t.useCallback)((function(o){if(r())return e[1](o)}),[r,e[1]])]},c=o(66896),p=o(36531),u=o(82372),d=o(68855),f=o(19892),v=o(82122),m=o(77421),h=o(394);const g=(0,o(45704).kZ)({defaultModifiers:[f.Z,m.Z,p.Z,u.Z,v.Z,d.Z,h.Z,c.Z]}),b=["enabled","placement","strategy","modifiers"];const y={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},x={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:r,popper:o}=e.elements;if("removeAttribute"in r){const e=(r.getAttribute("aria-describedby")||"").split(",").filter((e=>e.trim()!==o.id));e.length?r.setAttribute("aria-describedby",e.join(",")):r.removeAttribute("aria-describedby")}},fn:({state:e})=>{var r;const{popper:o,reference:t}=e.elements,n=null==(r=o.getAttribute("role"))?void 0:r.toLowerCase();if(o.id&&"tooltip"===n&&"setAttribute"in t){const e=t.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(o.id))return;t.setAttribute("aria-describedby",e?`${e},${o.id}`:o.id)}}},Z=[];var P=function(e,r,o={}){let{enabled:n=!0,placement:s="bottom",strategy:i="absolute",modifiers:c=Z}=o,p=function(e,r){if(null==e)return{};var o,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(o,b);const u=(0,t.useRef)(c),d=(0,t.useRef)(),f=(0,t.useCallback)((()=>{var e;null==(e=d.current)||e.update()}),[]),v=(0,t.useCallback)((()=>{var e;null==(e=d.current)||e.forceUpdate()}),[]),[m,h]=l((0,t.useState)({placement:s,update:f,forceUpdate:v,attributes:{},styles:{popper:{},arrow:{}}})),P=(0,t.useMemo)((()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{const r={},o={};Object.keys(e.elements).forEach((t=>{r[t]=e.styles[t],o[t]=e.attributes[t]})),h({state:e,styles:r,attributes:o,update:f,forceUpdate:v,placement:e.placement})}})),[f,v,h]),j=(0,t.useMemo)((()=>(a(u.current,c)||(u.current=c),u.current)),[c]);return(0,t.useEffect)((()=>{d.current&&n&&d.current.setOptions({placement:s,strategy:i,modifiers:[...j,P,y]})}),[i,s,P,n,j]),(0,t.useEffect)((()=>{if(n&&null!=e&&null!=r)return d.current=g(e,r,Object.assign({},p,{placement:s,strategy:i,modifiers:[...j,x,P]})),()=>{null!=d.current&&(d.current.destroy(),d.current=void 0,h((e=>Object.assign({},e,{attributes:{},styles:{popper:{}}}))))}}),[n,e,r]),m}},11758:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popovers",function(){return o(2449)}])},41752:function(e,r,o){"use strict";var t=o(85893),n=o(67294),s=o(15660),a=o.n(s);o(94838),o(16089),o(67863),o(81233),o(46177),o(82911);r.Z=function(e){var r=e.language,o=e.className,s=e.children,i=e.style;return(0,n.useEffect)((function(){a().highlightAll()}),[s]),(0,t.jsx)("pre",{className:"line-numbers ".concat(o),style:i,children:(0,t.jsx)("code",{className:"language-".concat(r),children:s})})}},63001:function(e,r,o){"use strict";var t=o(85893),n=o(78182),s=o(69463),a=o(60489),i=o(41068);r.Z=function(e){return(0,t.jsx)("section",{id:e.id,className:"pb-5 mb-md-2",children:(0,t.jsxs)(a.Z.Container,{defaultActiveKey:"preview",transition:i.Z,children:[(0,t.jsx)("h2",{className:"h5 mb-3",children:e.title}),(0,t.jsxs)(n.Z,{className:"border-0 shadow-sm",children:[(0,t.jsx)(n.Z.Header,{children:(0,t.jsxs)(s.Z,{variant:"tabs",children:[(0,t.jsx)(s.Z.Item,{children:(0,t.jsxs)(s.Z.Link,{as:"button",eventKey:"preview",children:[(0,t.jsx)("i",{className:"fi-eye-on me-2"}),"Preview"]})}),(0,t.jsx)(s.Z.Item,{children:(0,t.jsxs)(s.Z.Link,{as:"button",eventKey:"code",children:[(0,t.jsx)("i",{className:"fi-code me-2"}),"Code"]})})]})}),(0,t.jsx)(n.Z.Body,{children:(0,t.jsx)(a.Z.Content,{children:e.children})})]})]})})}},2449:function(e,r,o){"use strict";o.r(r);var t=o(85893),n=o(8840),s=o(63001),a=o(60489),i=o(59862),l=o(40755),c=o(35005),p=o(41752);r.default=function(){return(0,t.jsxs)(n.Z,{pageTitle:"Popovers",pageDescription:"A pop-up box that appears when the user clicks/hovers on an element.",activeNav:"/components/popovers",docsLink:"https://react-bootstrap.github.io/components/overlays/#popovers",docsLinkLabel:"React Bootstrap docs",anchorLinks:[{label:"Static example",anchor:"popovers-static"},{label:"Live demo",anchor:"popovers-demo"},{label:"Toggle on click / hover",anchor:"popovers-toggle"}],children:[(0,t.jsxs)("section",{id:"popovers-static",className:"pb-5 mb-md-2",children:[(0,t.jsx)("h2",{className:"h5 mb-3",children:"Static example"}),(0,t.jsx)("div",{className:"card border-0 shadow-sm",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("style",{children:"\n              .example-popover .popover {\n                display: block;\n                position: relative;\n                width: 16.25rem;\n                margin: 1rem;\n                float: left;\n              }\n              .example-popover .bs-popover-top .popover-arrow,\n              .example-popover .bs-popover-bottom .popover-arrow {\n                left: 50% !important;\n                margin-left: -.126rem !important;\n              }\n              .example-popover .bs-popover-start .popover-arrow,\n              .example-popover .bs-popover-end .popover-arrow {\n                top: 50%;\n                margin-top: -.375rem;\n              }\n            "}),(0,t.jsxs)("div",{className:"example-popover",children:[(0,t.jsxs)(l.Z,{placement:"top",children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover top"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]}),(0,t.jsxs)(l.Z,{placement:"end",children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover right"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]}),(0,t.jsxs)(l.Z,{placement:"bottom",children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover bottom"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]}),(0,t.jsxs)(l.Z,{placement:"start",children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover left"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]})]})]})})]}),(0,t.jsxs)(s.Z,{id:"popovers-demo",title:"Live demo",children:[(0,t.jsx)(a.Z.Pane,{eventKey:"preview",children:(0,t.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,t.jsx)(i.Z,{placement:"top",overlay:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover top"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]}),children:(0,t.jsx)(c.Z,{variant:"accent",className:"me-3 mb-3",children:"Popover on top"})}),(0,t.jsx)(i.Z,{placement:"right",overlay:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover right"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]}),children:(0,t.jsx)(c.Z,{variant:"accent",className:"me-3 mb-3",children:"Popover on right"})}),(0,t.jsx)(i.Z,{placement:"bottom",overlay:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover bottom"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]}),children:(0,t.jsx)(c.Z,{variant:"accent",className:"me-3 mb-3",children:"Popover on bottom"})}),(0,t.jsx)(i.Z,{placement:"left",overlay:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover left"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]}),children:(0,t.jsx)(c.Z,{variant:"accent",className:"mb-3",children:"Popover on left"})})]})}),(0,t.jsx)(a.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import OverlayTrigger from 'react-bootstrap/OverlayTrigger'\nimport Popover from 'react-bootstrap/Popover'\nimport Button from 'react-bootstrap/Button'\n\n{/* Popover on the top */}\n<OverlayTrigger\n  placement='top'\n  overlay={\n    <Popover>\n      <Popover.Header as='h3'>Popover top</Popover.Header>\n      <Popover.Body>\n        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.\n      </Popover.Body>\n    </Popover>\n  }\n>\n  <Button variant='accent'>Popover on top</Button>\n</OverlayTrigger>\n\n{/* Popover on the right */}\n<OverlayTrigger\n  placement='right'\n  overlay={\n    <Popover>\n      <Popover.Header as='h3'>Popover right</Popover.Header>\n      <Popover.Body>\n        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.\n      </Popover.Body>\n    </Popover>\n  }\n>\n  <Button variant='accent'>Popover on right</Button>\n</OverlayTrigger>\n\n{/* Popover on the bottom */}\n<OverlayTrigger\n  placement='bottom'\n  overlay={\n    <Popover>\n      <Popover.Header as='h3'>Popover bottom</Popover.Header>\n      <Popover.Body>\n        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.\n      </Popover.Body>\n    </Popover>\n  }\n>\n  <Button variant='accent'>Popover on bottom</Button>\n</OverlayTrigger>\n\n{/* Popover on the left */}\n<OverlayTrigger\n  placement='left'\n  overlay={\n    <Popover>\n      <Popover.Header as='h3'>Popover left</Popover.Header>\n      <Popover.Body>\n        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.\n      </Popover.Body>\n    </Popover>\n  }\n>\n  <Button variant='accent'>Popover on left</Button>\n</OverlayTrigger>"})})]}),(0,t.jsxs)(s.Z,{id:"popovers-toggle",title:"Toggle on click / hover",children:[(0,t.jsx)(a.Z.Pane,{eventKey:"preview",children:(0,t.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,t.jsx)(i.Z,{trigger:"click",placement:"top",overlay:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover on click"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]}),children:(0,t.jsx)(c.Z,{variant:"primary",className:"me-3 mb-3",children:"Toggle popover on click"})}),(0,t.jsx)(i.Z,{placement:"top",overlay:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(l.Z.Header,{as:"h3",children:"Popover on hover"}),(0,t.jsx)(l.Z.Body,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem."})]}),children:(0,t.jsx)(c.Z,{variant:"outline-primary",className:"mb-3",children:"Toggle popover on hover"})})]})}),(0,t.jsx)(a.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import OverlayTrigger from 'react-bootstrap/OverlayTrigger'\nimport Popover from 'react-bootstrap/Popover'\nimport Button from 'react-bootstrap/Button'\n\n{/* Toggle popover on click */}\n<OverlayTrigger\n  trigger='click'\n  placement='top'\n  overlay={\n    <Popover>\n      <Popover.Header as='h3'>Popover on click</Popover.Header>\n      <Popover.Body>\n        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.\n      </Popover.Body>\n    </Popover>\n  }\n>\n  <Button variant='primary'>Toggle popover on click</Button>\n</OverlayTrigger>\n\n{/* Toggle popover on hover (hover is a default trigger) */}\n<OverlayTrigger\n  placement='top'\n  overlay={\n    <Popover>\n      <Popover.Header as='h3'>Popover on hover</Popover.Header>\n      <Popover.Body>\n        Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem.\n      </Popover.Body>\n    </Popover>\n  }\n>\n  <Button variant='outline-primary'>Toggle popover on hover</Button>\n</OverlayTrigger>"})})]})]})}},59862:function(e,r,o){"use strict";o.d(r,{Z:function(){return S}});var t=o(90424),n=o(67294),s=o(94044),a=(o(42473),o(15446)),i=o(35654),l=o(94184),c=o.n(l),p=o(73935),u=o(32092),d=o(77086),f=o(72950),v=o(67216),m=o(78146),h=o(5680);const g=()=>{};var b=function(e,r,{disabled:o,clickTrigger:t}={}){const s=r||g;(0,h.Z)(e,s,{disabled:o,clickTrigger:t});const a=(0,m.Z)((e=>{27===e.keyCode&&s(e)}));(0,n.useEffect)((()=>{if(o||null==e)return;const r=(0,v.Z)((0,h.f)(e));let t=(r.defaultView||window).event;const n=(0,f.Z)(r,"keyup",(e=>{e!==t?a(e):t=void 0}));return()=>{n()}}),[e,o,a])},y=o(54194),x=o(90012),Z=o(85893);const P=n.forwardRef(((e,r)=>{const{flip:o,offset:t,placement:s,containerPadding:a,popperConfig:l={},transition:c}=e,[f,v]=(0,u.Z)(),[m,h]=(0,u.Z)(),g=(0,i.Z)(v,r),P=(0,y.Z)(e.container),j=(0,y.Z)(e.target),[w,O]=(0,n.useState)(!e.show),k=(0,d.Z)(j,f,(0,x.ZP)({placement:s,enableEvents:!!e.show,containerPadding:a||5,flip:o,offset:t,arrowElement:m,popperConfig:l}));e.show?w&&O(!1):e.transition||w||O(!0);const B=(...r)=>{O(!0),e.onExited&&e.onExited(...r)},E=e.show||c&&!w;if(b(f,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!E)return null;let T=e.children(Object.assign({},k.attributes.popper,{style:k.styles.popper,ref:g}),{popper:k,placement:s,show:!!e.show,arrowProps:Object.assign({},k.attributes.arrow,{style:k.styles.arrow,ref:h})});if(c){const{onExit:r,onExiting:o,onEnter:t,onEntering:n,onEntered:s}=e;T=(0,Z.jsx)(c,{in:e.show,appear:!0,onExit:r,onExiting:o,onExited:B,onEnter:t,onEntering:n,onEntered:s,children:T})}return P?p.createPortal(T,P):null}));P.displayName="Overlay";var j=P,w=o(11132),O=o(76792),k=o(40755);var B=o(41068),E=o(8285);const T={transition:B.Z,rootClose:!1,show:!1,placement:"top"};const A=n.forwardRef((({children:e,transition:r,popperConfig:o={},...t},s)=>{const a=(0,n.useRef)({}),[l,p]=function(e){const r=(0,n.useRef)(null),o=(0,O.vE)(void 0,"popover"),t=(0,n.useMemo)((()=>({name:"offset",options:{offset:()=>r.current&&(0,w.Z)(r.current,o)?e||k.Z.POPPER_OFFSET:e||[0,0]}})),[e,o]);return[r,[t]]}(t.offset),u=(0,i.Z)(s,l),d=!0===r?B.Z:r||void 0;return(0,Z.jsx)(j,{...t,ref:u,popperConfig:{...o,modifiers:p.concat(o.modifiers||[])},transition:d,children:(o,{arrowProps:t,popper:s,show:i})=>{var l,p;!function(e,r){const{ref:o}=e,{ref:t}=r;e.ref=o.__wrapped||(o.__wrapped=e=>o((0,E.Z)(e))),r.ref=t.__wrapped||(t.__wrapped=e=>t((0,E.Z)(e)))}(o,t);const u=null==s?void 0:s.placement,d=Object.assign(a.current,{state:null==s?void 0:s.state,scheduleUpdate:null==s?void 0:s.update,placement:u,outOfBoundaries:(null==s||null==(l=s.state)||null==(p=l.modifiersData.hide)?void 0:p.isReferenceHidden)||!1});return"function"===typeof e?e({...o,placement:u,show:i,...!r&&i&&{className:"show"},popper:d,arrowProps:t}):n.cloneElement(e,{...o,placement:u,arrowProps:t,popper:d,className:c()(e.props.className,!r&&i&&"show"),style:{...e.props.style,...o.style}})}})}));A.displayName="Overlay",A.defaultProps=T;var C=A;function N(e,r,o){const[n]=r,s=n.currentTarget,a=n.relatedTarget||n.nativeEvent[o];a&&a===s||(0,t.Z)(s,a)||e(...r)}function q({trigger:e,overlay:r,children:o,popperConfig:t={},show:l,defaultShow:c=!1,onToggle:p,delay:u,placement:d,flip:f=d&&-1!==d.indexOf("auto"),...v}){const m=(0,n.useRef)(null),h=(0,i.Z)(m,o.ref),g=(0,s.Z)(),b=(0,n.useRef)(""),[y,x]=(0,a.$c)(l,c,p),P=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(u),{onFocus:j,onBlur:w,onClick:O}="function"!==typeof o?n.Children.only(o).props:{},k=(0,n.useCallback)((()=>{g.clear(),b.current="show",P.show?g.set((()=>{"show"===b.current&&x(!0)}),P.show):x(!0)}),[P.show,x,g]),B=(0,n.useCallback)((()=>{g.clear(),b.current="hide",P.hide?g.set((()=>{"hide"===b.current&&x(!1)}),P.hide):x(!1)}),[P.hide,x,g]),T=(0,n.useCallback)(((...e)=>{k(),null==j||j(...e)}),[k,j]),A=(0,n.useCallback)(((...e)=>{B(),null==w||w(...e)}),[B,w]),q=(0,n.useCallback)(((...e)=>{x(!y),null==O||O(...e)}),[O,x,y]),S=(0,n.useCallback)(((...e)=>{N(k,e,"fromElement")}),[k]),H=(0,n.useCallback)(((...e)=>{N(B,e,"toElement")}),[B]),_=null==e?[]:[].concat(e),R={ref:e=>{h((0,E.Z)(e))}};return-1!==_.indexOf("click")&&(R.onClick=q),-1!==_.indexOf("focus")&&(R.onFocus=T,R.onBlur=A),-1!==_.indexOf("hover")&&(R.onMouseOver=S,R.onMouseOut=H),(0,Z.jsxs)(Z.Fragment,{children:["function"===typeof o?o(R):(0,n.cloneElement)(o,R),(0,Z.jsx)(C,{...v,show:y,onHide:B,flip:f,placement:d,popperConfig:t,target:m.current,children:r})]})}q.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var S=q},40755:function(e,r,o){"use strict";o.d(r,{Z:function(){return f}});var t=o(94184),n=o.n(t),s=o(67294),a=o(76792),i=o(66611),l=(0,i.Z)("popover-header"),c=(0,i.Z)("popover-body"),p=o(79883),u=o(85893);const d=s.forwardRef((({bsPrefix:e,placement:r,className:o,style:t,children:s,body:i,arrowProps:l,popper:d,show:f,...v},m)=>{const h=(0,a.vE)(e,"popover"),g=(0,a.SC)(),[b]=(null==r?void 0:r.split("-"))||[],y=(0,p.z)(b,g);return(0,u.jsxs)("div",{ref:m,role:"tooltip",style:t,"x-placement":b,className:n()(o,h,b&&`bs-popover-${y}`),...v,children:[(0,u.jsx)("div",{className:"popover-arrow",...l}),i?(0,u.jsx)(c,{children:s}):s]})}));d.defaultProps={placement:"right"};var f=Object.assign(d,{Header:l,Body:c,POPPER_OFFSET:[0,8]})},79883:function(e,r,o){"use strict";o.d(r,{z:function(){return n}});var t=o(67294);t.Component;function n(e,r){let o=e;return"left"===e?o=r?"end":"start":"right"===e&&(o=r?"start":"end"),o}}},function(e){e.O(0,[3675,4222,4567,2141,8279,7472,8840,9774,2888,179],(function(){return r=11758,e(e.s=r);var r}));var r=e.O();_N_E=r}]);