(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{78581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(44369)}])},75698:function(e,t,s){"use strict";var r=s(85893),n=s(25675),i=s.n(n);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}t.Z=function(e){var t,s,n,o=e.width,l=e.height,c=e.alt,d=e.placeholder,m=e.light;return(0,r.jsx)(i(),function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},r=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(t){a(e,t,s[t])}))}return e}({},e,{placeholder:!1===d?"empty":"blur",blurDataURL:"data:image/svg+xml;base64,".concat((s=o,n=l,t='\n    <svg width="'.concat(s,'" height="').concat(n,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <defs>\n        <linearGradient id="g">\n          <stop stop-color="').concat(m?"#352e44":"#efedf0",'" offset="20%" />\n          <stop stop-color="').concat(m?"#1f1b2d":"#d8d7da",'" offset="50%" />\n          <stop stop-color="').concat(m?"#352e44":"#efedf0",'" offset="70%" />\n        </linearGradient>\n      </defs>\n      <rect width="').concat(s,'" height="').concat(n,'" fill="').concat(m?"#352e44":"#efedf0",'" />\n      <rect id="r" width="').concat(s,'" height="').concat(n,'" fill="url(#g)" />\n      <animate xlink:href="#r" attributeName="x" from="-').concat(s,'" to="').concat(s,'" dur="1s" repeatCount="indefinite"  />\n    </svg>'),window.btoa(t))),alt:c}))}},15576:function(e,t,s){"use strict";var r=s(85893),n=s(67294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}t.Z=function(e){var t=e.children,s=e.className,o=a(e,["children","className"]),l=(0,n.useState)(!1),c=l[0],d=l[1];return(0,n.useEffect)((function(){var e=function(e){e.currentTarget.pageYOffset>20?d(!0):d(!1)};return window.pageYOffset>20?d(!0):d(!1),window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),(0,r.jsx)("header",function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},r=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(t){i(e,t,s[t])}))}return e}({},o,{className:"".concat(s||"").concat(c?" navbar-stuck":""),children:t}))}},53092:function(e,t,s){"use strict";var r=s(85893),n=s(67294);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var r,n,i=[],a=!0,o=!1;try{for(s=s.call(e);!(a=(r=s.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){o=!0,n=l}finally{try{a||null==s.return||s.return()}finally{if(o)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e){var t=e.action,s=e.antispam,i=e.placeholder,c=e.btnLabel,d=e.helperText,m=e.size,u=e.pill,p=e.light,h=e.className,f=o(e,["action","antispam","placeholder","btnLabel","helperText","size","pill","light","className"]),x=l(function(){var e=(0,n.useRef)(null);return[(0,n.useCallback)((function(t){var s=function(e){var t=e.target.querySelector(".subscription-form-antispam");e&&e.preventDefault(),""===t.value&&function(e){var t=e.querySelector('button[type="submit"]'),s=t.innerHTML,r=e.querySelector(".form-control"),n=e.querySelector(".subscription-status");t.innerHTML="Sending...";var i=e.action.replace("/post?","/post-json?"),a="&"+r.name+"="+encodeURIComponent(r.value),o=document.createElement("script");o.src=i+"&c=callback"+a,document.body.appendChild(o),window.callback=function(e){delete window.callback,document.body.removeChild(o),t.innerHTML=s,"success"===e.result?(r.classList.remove("is-invalid"),r.classList.add("is-valid"),n.classList.remove("status-error"),n.classList.add("status-success"),n.innerHTML=e.msg,setTimeout((function(){r.classList.remove("is-valid"),n.innerHTML="",n.classList.remove("status-success")}),7500)):(r.classList.remove("is-valid"),r.classList.add("is-invalid"),n.classList.remove("status-success"),n.classList.add("status-error"),n.innerHTML=e.msg.substring(4),setTimeout((function(){r.classList.remove("is-invalid"),n.innerHTML="",n.classList.remove("status-error")}),7500))}}(e.target)};t&&t.addEventListener("submit",s),e.current&&e.current.removeEventListener("submit",s),e.current=t}),[])]}(),1)[0];return(0,r.jsxs)("form",function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},r=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(t){a(e,t,s[t])}))}return e}({ref:x,action:t,method:"post",name:"mc-embedded-subscribe-form",target:"_blank",noValidate:!0},f,{className:"subscription-form".concat(h?" ".concat(h):""),children:[(0,r.jsxs)("div",{className:"form-group".concat(u?" rounded-pill":"").concat(p?" form-group-light":""),children:[(0,r.jsxs)("div",{className:"input-group".concat(m?" input-group-".concat(m):""," flex-nowrap"),children:[(0,r.jsx)("span",{className:"input-group-text text-muted",children:(0,r.jsx)("i",{className:"fi-mail"})}),(0,r.jsx)("input",{type:"email",className:"form-control",name:"EMAIL",placeholder:i})]}),(0,r.jsx)("button",{type:"submit",className:"btn btn-primary".concat(u?" rounded-pill":"").concat(m?" btn-".concat(m):""),name:"subscribe",children:c})]}),(0,r.jsx)("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true",children:(0,r.jsx)("input",{type:"text",className:"subscription-form-antispam",name:s,tabIndex:"-1"})}),(0,r.jsx)("div",{className:"subscription-status"}),(0,r.jsx)("div",{className:"form-text fs-xs mt-3".concat(p?" text-light opacity-70":""),children:d})]}))}},44369:function(e,t,s){"use strict";s.r(t);var r=s(85893),n=s(41664),i=s.n(n),a=s(75698),o=s(15576),l=s(53092),c=s(59126),d=s(10682),m=s(21608),u=s(31555),p=s(69463),h=s(59331),f=s(35005);t.default=function(){return(0,r.jsxs)("main",{className:"page-wrapper",children:[(0,r.jsx)(c.Z,{as:o.Z,expand:"md",className:"fixed-top",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(i(),{href:"/",passHref:!0,children:(0,r.jsx)(c.Z.Brand,{className:"me-2 me-xl-4",children:(0,r.jsx)(a.Z,{priority:!0,src:"antiru/images/logo/logo-dark.svg",width:116,height:32,alt:"Finder"})})}),(0,r.jsx)(c.Z.Toggle,{"aria-controls":"navbarNav",className:"ms-auto"}),(0,r.jsxs)(f.Z,{href:"https://themes.getbootstrap.com/product/finder-directory-listings-template-react/",size:"sm",className:"rounded-pill order-md-3 ms-2",target:"_blank",rel:"noreferrer",children:[(0,r.jsx)("i",{className:"fi-cart fs-base me-2"}),"Buy Finder"]}),(0,r.jsx)(c.Z.Collapse,{id:"navbarNav",className:"order-md-2",children:(0,r.jsxs)(p.Z,{navbarScroll:!0,style:{maxHeight:"35rem"},children:[(0,r.jsxs)(p.Z.Item,{as:h.Z,children:[(0,r.jsx)(h.Z.Toggle,{as:p.Z.Link,children:"Demos"}),(0,r.jsxs)(h.Z.Menu,{renderOnMount:!0,children:[(0,r.jsx)(i(),{href:"/real-estate",passHref:!0,children:(0,r.jsxs)(h.Z.Item,{children:[(0,r.jsx)("i",{className:"fi-building fs-base opacity-50 me-2"}),"Real Estate Demo"]})}),(0,r.jsx)(h.Z.Divider,{}),(0,r.jsx)(i(),{href:"/car-finder",passHref:!0,children:(0,r.jsxs)(h.Z.Item,{children:[(0,r.jsx)("i",{className:"fi-car fs-base opacity-50 me-2"}),"Car Finder Demo"]})}),(0,r.jsx)(h.Z.Divider,{}),(0,r.jsx)(i(),{href:"/job-board",passHref:!0,children:(0,r.jsxs)(h.Z.Item,{children:[(0,r.jsx)("i",{className:"fi-briefcase fs-base opacity-50 me-2"}),"Job Board Demo"]})}),(0,r.jsx)(h.Z.Divider,{}),(0,r.jsx)(i(),{href:"/city-guide",passHref:!0,children:(0,r.jsxs)(h.Z.Item,{children:[(0,r.jsx)("i",{className:"fi-map-pin fs-base opacity-50 me-2"}),"City Guide Demo"]})})]})]}),(0,r.jsx)(p.Z.Item,{children:(0,r.jsx)(i(),{href:"/components/typography",passHref:!0,children:(0,r.jsx)(p.Z.Link,{children:"UI Kit (Components)"})})}),(0,r.jsx)(p.Z.Item,{children:(0,r.jsx)(i(),{href:"/docs",passHref:!0,children:(0,r.jsx)(p.Z.Link,{children:"Documentation"})})})]})})]})}),(0,r.jsxs)("section",{className:"position-relative overflow-hidden py-5 mb-5",children:[(0,r.jsx)("div",{className:"d-none d-xl-block position-absolute top-0 start-0 h-100 bg-secondary",style:{width:"67%",borderBottomRightRadius:".75rem"}}),(0,r.jsx)("div",{className:"d-xl-none position-absolute top-0 start-0 w-100 h-100 bg-secondary"}),(0,r.jsxs)(d.Z,{className:"content-overlay mt-4 mb-2 mt-lg-5 mb-lg-4 pt-5 pb-md-2",children:[(0,r.jsx)("h1",{className:"display-4 text-center text-md-start",children:"Find your ideal"}),(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(u.Z,{md:2,className:"d-none d-md-block pt-4 mt-4",children:(0,r.jsx)(a.Z,{priority:!0,src:"antiru/images/intro/swirly-arrow.svg",width:120,height:120,alt:"Arrow"})}),(0,r.jsxs)(u.Z,{md:10,className:"d-md-flex mt-md-n4",children:[(0,r.jsx)("div",{className:"d-block hover-img-scale position-relative zindex-5 mt-md-5 mx-auto me-md-n5 mb-4 mb-md-0",style:{maxWidth:"633px"},children:(0,r.jsxs)("div",{className:"pt-md-5 mt-4 me-md-n5",children:[(0,r.jsx)("h2",{className:"h4 mb-2 pb-1 ms-md-3",children:(0,r.jsx)(i(),{href:"/real-estate",children:(0,r.jsxs)("a",{className:"nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start",children:[(0,r.jsx)("i",{className:"fi-building text-primary me-2 pe-1"}),(0,r.jsx)("span",{children:"Property"})]})})}),(0,r.jsxs)("div",{className:"position-relative zindex-0",children:[(0,r.jsx)("div",{className:"position-relative d-flex zindex-5",children:(0,r.jsx)(a.Z,{src:"antiru/images/intro/demos/real-estate.png",width:1266,height:788,alt:"Real Estate Demo"})}),(0,r.jsx)("div",{className:"d-none d-md-block position-absolute zindex-1",style:{top:"15px",left:"20px",width:"calc(100% - 40px)",height:"calc(100% - 50px)",boxShadow:"33px 26px 85px rgba(0, 0, 0, .14)"}})]})]})}),(0,r.jsxs)("div",{className:"d-block hover-img-scale position-relative mt-md-n5 mx-auto me-md-n3",style:{maxWidth:"550px"},children:[(0,r.jsx)("h2",{className:"h4 ms-md-3",children:(0,r.jsx)(i(),{href:"/job-board",children:(0,r.jsxs)("a",{className:"nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start",children:[(0,r.jsx)("i",{className:"fi-briefcase text-primary me-2 pe-1"}),(0,r.jsx)("span",{children:"Job"})]})})}),(0,r.jsx)(a.Z,{src:"antiru/images/intro/demos/job-board.png",width:1100,height:754,alt:"Job Board Demo"})]})]}),(0,r.jsxs)(u.Z,{md:12,className:"d-md-flex pt-2 pt-md-0 mt-md-n5",children:[(0,r.jsxs)("div",{className:"d-block hover-img-scale position-relative my-4 mt-md-5 mb-md-0 mx-auto ms-md-0 me-md-3",style:{maxWidth:"550px"},children:[(0,r.jsx)("h2",{className:"h4 ms-md-3",children:(0,r.jsx)(i(),{href:"/city-guide",children:(0,r.jsxs)("a",{className:"nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start",children:[(0,r.jsx)("i",{className:"fi-map-pin text-primary me-2 pe-1"}),(0,r.jsx)("span",{children:"City place"})]})})}),(0,r.jsx)(a.Z,{src:"antiru/images/intro/demos/city-guide.png",width:1100,height:648,alt:"City Guide Demo"})]}),(0,r.jsx)("div",{className:"d-block hover-img-scale position-relative mt-md-n5 mx-auto me-md-n3",style:{maxWidth:"636px"},children:(0,r.jsxs)("div",{className:"d-flex flex-column",children:[(0,r.jsx)("h2",{className:"h4 order-md-2 mb-4 mb-md-0 mt-md-4",children:(0,r.jsx)(i(),{href:"/car-finder",children:(0,r.jsxs)("a",{className:"nav-link stretched-link d-flex align-items-center justify-content-center justify-content-md-start",children:[(0,r.jsx)("i",{className:"fi-car text-primary me-2 pe-1"}),(0,r.jsx)("span",{children:"Car"})]})})}),(0,r.jsx)("div",{className:"d-flex order-md-1 mt-md-n2",children:(0,r.jsx)(a.Z,{src:"antiru/images/intro/demos/car-finder.png",width:1272,height:764,alt:"Car Finder Demo"})})]})})]})]})]})]}),(0,r.jsx)(d.Z,{as:"section",className:"pt-md-4 pt-xl-5 pb-lg-3 pb-xl-5",children:(0,r.jsxs)(m.Z,{className:"mb-5",children:[(0,r.jsxs)(u.Z,{lg:3,children:[(0,r.jsx)("h2",{className:"py-2 pb-md-3 pb-lg-4",children:"Finder feature highlights"}),(0,r.jsx)("div",{className:"d-none d-lg-block",children:(0,r.jsx)(a.Z,{priority:!0,src:"antiru/images/intro/turn-right-arrow.svg",width:80,height:80,alt:"Arrow"})})]}),(0,r.jsx)(u.Z,{lg:9,children:(0,r.jsx)(m.Z,{xs:1,sm:2,md:3,className:"gy-1 gy-md-3 gx-3 gx-lg-4",children:[{img:["antiru/images/intro/features/react.png","React logo"],title:"Powered by React / Next.js",text:"Finder is powered by React and Next.js framework. It supports hybrid static & server-side rendering, route pre-fetching, image optimization and more."},{img:["antiru/images/intro/features/bootstrap.png","Bootstrap logo"],title:"Built with Bootstrap 5",text:"Finder is the powerful front-end solution based on Bootstrap 5 \u2014 the world\u2019s most popular responsive, mobile-first component library."},{img:["antiru/images/intro/features/sass.png","Sass logo"],title:"Easy to customize with Sass",text:"Finder is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world."},{img:["antiru/images/intro/features/components.png","Components icon"],title:"50+ flexible components",text:"Besides styling all default Bootstrap 5 components Finder introduces lots of new flexible, customizable and reusable elements you can use across the website."},{img:["antiru/images/intro/features/nodejs.png","Node.js logo"],title:"Kick-start your development",text:"Start your development process fast and easy with Node.js Create Next App setup. Configuration files are included in download package. Full tasks automation."},{img:["antiru/images/intro/features/mobile.png","Mobile icon"],title:"Mobile friendly interface",text:"It's not a surprise that nowadays over 60% of users surf the inernet using their mobile devices. Finder is 100% responsive and optimized for small touch screens."},{img:["antiru/images/intro/features/vector.png","Vector icon"],title:"Vector based HD ready icons",text:"Finder is equiped with font-based icon pack to ensure that infographics and interface icons look sharp on any device with any screen resolution and pixel density."},{img:["antiru/images/intro/features/google-fonts.png","Google Fonts logo"],title:"Google fonts",text:"Finder uses Google font (Noto Sans) which is free, fast to load and of very high quality. Currently Google fonts library includes 1000+ font families to choose from."},{img:["antiru/images/intro/features/docs.png","Docs icon"],title:"Detailed documentation",text:"Download package includes offline and links to online documentation. It covers all important information about how to get started, customize template and components usage."}].map((function(e,t){return(0,r.jsx)(u.Z,{children:(0,r.jsxs)("div",{className:"card card-body card-hover bg-transparent h-100 border-0",children:[(0,r.jsx)("div",{className:"d-flex mb-3",style:{width:"56px"},children:(0,r.jsx)(a.Z,{src:e.img[0],width:112,height:112,alt:e.img[1]})}),(0,r.jsx)("h3",{className:"h6",children:e.title}),(0,r.jsx)("p",{className:"fs-sm mb-0",children:e.text})]})},t)}))})})]})}),(0,r.jsx)(d.Z,{as:"section",className:"position-relative zindex-1",children:(0,r.jsx)("div",{className:"bg-secondary rounded-3 px-3 py-5",children:(0,r.jsxs)("div",{className:"text-center py-sm-3 py-md-5",children:[(0,r.jsx)("h3",{className:"h5 fw-normal",children:"Still not convinced?"}),(0,r.jsx)("h2",{className:"pb-4",children:"Add premium support and lifetime updates to this!"}),(0,r.jsxs)(f.Z,{href:"https://themes.getbootstrap.com/product/finder-directory-listings-template-react/",variant:"primary rounded-pill",size:"lg",target:"_blank",rel:"noreferrer",children:[(0,r.jsx)("i",{className:"fi-cart fs-lg me-2"}),"Buy Finder"]})]})})}),(0,r.jsxs)("footer",{className:"position-relative pb-5",style:{marginTop:"-5.75rem",paddingTop:"9rem"},children:[(0,r.jsx)("div",{className:"d-none d-xxl-block position-absolute top-0 start-0 w-100 h-100 bg-dark",style:{borderTopLeftRadius:"1.875rem",borderTopRightRadius:"1.875rem"}}),(0,r.jsx)("div",{className:"d-xxl-none position-absolute top-0 start-0 w-100 h-100 bg-dark"}),(0,r.jsxs)(d.Z,{className:"content-overlay text-center py-md-3 py-lg-5",children:[(0,r.jsx)("h2",{className:"h3 text-light pb-3",children:"Subscribe to our newsletter"}),(0,r.jsx)(m.Z,{className:"justify-content-center mb-5 pb-lg-3",children:(0,r.jsx)(u.Z,{lg:6,md:7,sm:9,children:(0,r.jsx)(l.Z,{action:"https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&id=29ca296126",antispam:"b_c7103e2c981361a6639545bd5_29ca29612",placeholder:"Your email",btnLabel:"Subscribe*",helperText:"*Subscribe to our newsletter to receive early discount offers, updates and new products info.",pill:!0,light:!0})})}),(0,r.jsxs)("p",{className:"fs-sm mb-0",children:[(0,r.jsx)("span",{className:"text-light",children:"\xa9 All rights reserved. Made by "}),(0,r.jsx)("a",{href:"https://createx.studio/",target:"_blank",rel:"noreferrer",children:"Createx Studio"})]})]})]})]})}}},function(e){e.O(0,[3675,4222,4567,8279,9331,9774,2888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);