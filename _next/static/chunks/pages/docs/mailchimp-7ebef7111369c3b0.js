(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2844],{89760:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/mailchimp",function(){return n(73211)}])},41752:function(e,t,n){"use strict";var i=n(85893),r=n(67294),s=n(15660),a=n.n(s);n(94838),n(16089),n(67863),n(81233),n(46177),n(82911);t.Z=function(e){var t=e.language,n=e.className,s=e.children,o=e.style;return(0,r.useEffect)((function(){a().highlightAll()}),[s]),(0,i.jsx)("pre",{className:"line-numbers ".concat(n),style:o,children:(0,i.jsx)("code",{className:"language-".concat(t),children:s})})}},53092:function(e,t,n){"use strict";var i=n(85893),r=n(67294);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,s=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(s.push(i.value),!t||s.length!==t);a=!0);}catch(c){o=!0,r=c}finally{try{a||null==n.return||n.return()}finally{if(o)throw r}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e){var t=e.action,n=e.antispam,s=e.placeholder,l=e.btnLabel,u=e.helperText,m=e.size,d=e.pill,p=e.light,b=e.className,f=o(e,["action","antispam","placeholder","btnLabel","helperText","size","pill","light","className"]),h=c(function(){var e=(0,r.useRef)(null);return[(0,r.useCallback)((function(t){var n=function(e){var t=e.target.querySelector(".subscription-form-antispam");e&&e.preventDefault(),""===t.value&&function(e){var t=e.querySelector('button[type="submit"]'),n=t.innerHTML,i=e.querySelector(".form-control"),r=e.querySelector(".subscription-status");t.innerHTML="Sending...";var s=e.action.replace("/post?","/post-json?"),a="&"+i.name+"="+encodeURIComponent(i.value),o=document.createElement("script");o.src=s+"&c=callback"+a,document.body.appendChild(o),window.callback=function(e){delete window.callback,document.body.removeChild(o),t.innerHTML=n,"success"===e.result?(i.classList.remove("is-invalid"),i.classList.add("is-valid"),r.classList.remove("status-error"),r.classList.add("status-success"),r.innerHTML=e.msg,setTimeout((function(){i.classList.remove("is-valid"),r.innerHTML="",r.classList.remove("status-success")}),7500)):(i.classList.remove("is-valid"),i.classList.add("is-invalid"),r.classList.remove("status-success"),r.classList.add("status-error"),r.innerHTML=e.msg.substring(4),setTimeout((function(){i.classList.remove("is-invalid"),r.innerHTML="",r.classList.remove("status-error")}),7500))}}(e.target)};t&&t.addEventListener("submit",n),e.current&&e.current.removeEventListener("submit",n),e.current=t}),[])]}(),1)[0];return(0,i.jsxs)("form",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({ref:h,action:t,method:"post",name:"mc-embedded-subscribe-form",target:"_blank",noValidate:!0},f,{className:"subscription-form".concat(b?" ".concat(b):""),children:[(0,i.jsxs)("div",{className:"form-group".concat(d?" rounded-pill":"").concat(p?" form-group-light":""),children:[(0,i.jsxs)("div",{className:"input-group".concat(m?" input-group-".concat(m):""," flex-nowrap"),children:[(0,i.jsx)("span",{className:"input-group-text text-muted",children:(0,i.jsx)("i",{className:"fi-mail"})}),(0,i.jsx)("input",{type:"email",className:"form-control",name:"EMAIL",placeholder:s})]}),(0,i.jsx)("button",{type:"submit",className:"btn btn-primary".concat(d?" rounded-pill":"").concat(m?" btn-".concat(m):""),name:"subscribe",children:l})]}),(0,i.jsx)("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true",children:(0,i.jsx)("input",{type:"text",className:"subscription-form-antispam",name:n,tabIndex:"-1"})}),(0,i.jsx)("div",{className:"subscription-status"}),(0,i.jsx)("div",{className:"form-text fs-xs mt-3".concat(p?" text-light opacity-70":""),children:u})]}))}},73211:function(e,t,n){"use strict";n.r(t);var i=n(85893),r=n(64196),s=n(78182),a=n(69463),o=n(60489),c=n(41068),l=n(41752),u=n(53092);t.default=function(){return(0,i.jsx)(r.Z,{pageTitle:"Mailchimp subscription form",activeNav:"/docs/mailchimp",children:(0,i.jsxs)("div",{className:"pb-5",children:[(0,i.jsx)("p",{children:"Mailchimp is a marketing automation platform and an email marketing service."}),(0,i.jsx)("p",{children:"In other words this Mailchimp widget will help you to collect user emails right from you website to run email marketing campaign via Mailchimp web application. Below is the live example of the widget that collects emails for Createx Studio. Switch to Code tab to see code example and instructions."}),(0,i.jsx)(o.Z.Container,{defaultActiveKey:"preview",transition:c.Z,children:(0,i.jsxs)(s.Z,{className:"border-0 shadow-sm",children:[(0,i.jsx)(s.Z.Header,{children:(0,i.jsxs)(a.Z,{variant:"tabs",children:[(0,i.jsx)(a.Z.Item,{children:(0,i.jsxs)(a.Z.Link,{as:"button",eventKey:"preview",children:[(0,i.jsx)("i",{className:"fi-eye-on me-2"}),"Preview"]})}),(0,i.jsx)(a.Z.Item,{children:(0,i.jsxs)(a.Z.Link,{as:"button",eventKey:"code",children:[(0,i.jsx)("i",{className:"fi-code me-2"}),"Code"]})})]})}),(0,i.jsx)(s.Z.Body,{children:(0,i.jsxs)(o.Z.Content,{children:[(0,i.jsxs)(o.Z.Pane,{eventKey:"preview",children:[(0,i.jsx)("h3",{className:"h6 mb-2 pb-1",children:"Subscribe"}),(0,i.jsx)(u.Z,{action:"https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&id=29ca296126",antispam:"b_c7103e2c981361a6639545bd5_29ca29612",placeholder:"Your email",btnLabel:"Subscribe*",helperText:"*Subscribe to our newsletter to receive early discount offers, updates and new products info.",size:"sm",style:{maxWidth:"24rem"}})]}),(0,i.jsx)(o.Z.Pane,{eventKey:"code",children:(0,i.jsx)(l.Z,{language:"jsx",children:"import Subscription from '../components/Subscription'\n\n{/* Widget: Subscription (MailChimp Ajax)\nInstructions how to get MailChimp action link:\n1. Log in to your MailChimp Dashboard / Audience / Manage Audience / Signup forms / Embedded forms\n2. In the provided code find form action link and copy it\n3. Paste it to the <Subscription /> component action prop\n4. Also in the form code provided by MailChimp find antispam input and copy it name attribute contents\n5. Paste what you have copied from name attribute to the antispam prop of <Subscription /> component */}\n\n<Subscription\n  action='mailchimp-embedded-form-atcion-link'\n  antispam='mailchimp-embedded-form-antispam-name-attribute'\n  placeholder='Your email'\n  btnLabel='Subscribe*'\n  helperText='*Subscribe to our newsletter to receive early discount offers, updates and new products info.'\n  size='sm'\n/>"})})]})})]})})]})})}}},function(e){e.O(0,[3675,4222,4567,2141,7472,4196,9774,2888,179],(function(){return t=89760,e(e.s=t);var t}));var t=e.O();_N_E=t}]);