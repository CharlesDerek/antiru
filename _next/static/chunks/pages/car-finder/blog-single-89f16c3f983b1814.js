(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3444],{80555:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/car-finder/blog-single",function(){return s(2803)}])},53667:function(e,t,s){"use strict";var a=s(85893),i=s(75698);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(e,t){if(null==e)return{};var s,a,i=function(e,t){if(null==e)return{};var s,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}t.Z=function(e){var t=e.img,s=e.size,n=e.rounded,c=e.light,o=e.className,m=l(e,["img","size","rounded","light","className"]);return(0,a.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(t){r(e,t,s[t])}))}return e}({},m,{className:"position-relative ".concat(n?"rounded-".concat(n):"rounded-circle"," overflow-hidden").concat(o?" ".concat(o):""),style:s?{width:s[0],height:s[1]}:{width:"48px",height:"48px"},children:t&&(0,a.jsx)(i.Z,{src:t.src,layout:"fill",objectFit:"cover",quality:90,alt:t.alt,light:c?1:0})}))}},62192:function(e,t,s){"use strict";var a=s(85893);t.Z=function(e){var t,s=e.author.thumbShape?e.author.thumbShape:"rounded",i="flex-shrink-0 bg-repeat-0 bg-position-center bg-size-cover ".concat(s),r=e.author.thumbSrc,l=e.author.thumbSize+"px",n=e.author.name,c=e.author.position,o=e.light?" text-light":"",m=e.align?" text-"+e.align:"",d=e.align?" justify-content-"+e.align:"",u=e.className?" "+e.className:"",h=e.style,g=e.children;return t=r?(0,a.jsxs)("footer",{className:"d-flex text-start align-items-center".concat(d),children:[(0,a.jsx)("div",{className:i,style:{width:l,height:l,backgroundImage:"url("+r+")"}}),(0,a.jsxs)("div",{className:"ps-3",children:[(0,a.jsx)("h6",{className:"fs-base mb-0".concat(o),children:n}),(0,a.jsx)("div",{className:"opacity-50 fw-normal fs-sm".concat(o),children:c})]})]}):!r&&c?(0,a.jsxs)("footer",{children:[(0,a.jsx)("h6",{className:"fs-base mb-0".concat(o),children:n}),(0,a.jsx)("div",{className:"opacity-50 fw-normal fs-sm".concat(o),children:c})]}):(0,a.jsx)("footer",{className:"blockquote-footer".concat(o),children:n}),(0,a.jsxs)("blockquote",{className:"blockquote".concat(u).concat(m),style:h,children:[(0,a.jsx)("div",{className:"pb-1 mb-3".concat(o),children:g}),t]})}},64556:function(e,t,s){"use strict";var a=s(85893);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){if(null==e)return{};var s,a,i=function(e,t){if(null==e)return{};var s,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}t.Z=function(e){var t=e.author,s=e.badges,l=e.text,n=e.date,c=e.replyLabel,o=e.replyClick,m=e.children,d=e.light,u=e.className,h=r(e,["author","badges","text","date","replyLabel","replyClick","children","light","className"]),g=t.thumbShape?t.thumbShape:"rounded",p="flex-shrink-0 bg-repeat-0 bg-position-center bg-size-cover ".concat(g," me-3"),x=t.thumbSrc,b=t.thumbSize+"px",f=t.name,j=u?" ".concat(u):"";return(0,a.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(t){i(e,t,s[t])}))}return e}({},h,{className:"comment".concat(j).concat(d?" border-light":""),children:[(0,a.jsx)("p",{className:d?"text-light opacity-70":"",children:l}),(0,a.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,a.jsxs)("div",{className:"d-flex align-items-center pe-2",children:[x&&(0,a.jsx)("div",{className:p,style:{width:b,height:b,backgroundImage:"url("+x+")"}}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h6",{className:"fs-base mb-0".concat(d?" text-light":""),children:[f,s&&(0,a.jsx)(a.Fragment,{children:s.map((function(e,t){return(0,a.jsx)("span",{className:"badge bg-".concat(e[0]," ms-2 rounded-pill fs-xs"),children:e[1]},t)}))})]}),(0,a.jsx)("span",{className:"fs-sm ".concat(d?"text-light opacity-50":"text-muted"),children:n})]})]}),c&&(0,a.jsxs)("button",{type:"button",className:"btn btn-link btn-sm".concat(d?" btn-light":""),onClick:o,children:[(0,a.jsx)("i",{className:"fi-reply fs-lg me-2"}),(0,a.jsx)("span",{className:"fw-normal",children:c})]})]}),m]}))}},48436:function(e,t,s){"use strict";var a=s(85893),i=s(66261);t.Z=function(e){return(0,a.jsx)(i.rU,{activeClass:e.activeClass,to:e.to,spy:e.spy,smooth:e.smooth,offset:e.offset,duration:e.duration,className:e.className,children:e.children})}},2803:function(e,t,s){"use strict";s.r(t);var a=s(85893),i=s(67294),r=s(1852),l=s(35854),n=s(41664),c=s.n(n),o=s(10682),m=s(21608),d=s(31555),u=s(26699),h=s(35005),g=s(59862),p=s(43489),x=s(34077),b=s(85460),f=s(78182),j=s(62318),v=s(75698),N=s(62192),y=s(64556),Z=s(17871),w=s(61817),q=s(53667),k=s(6396),S=s(48436),C=s(41485),O=s(38680),P=s(22523),A=s(88116),z=s(98352);s(57814),s(83912),s(21082),s(21669);t.default=function(){(0,i.useEffect)((function(){var e=document.querySelector("body");return document.body.classList.add("fixed-bottom-btn"),function(){return e.classList.remove("fixed-bottom-btn")}}));var e=(0,r.useMediaQuery)({query:"(min-width: 992px)"}),t=(0,i.useRef)(null),s=(0,i.useState)(!1),n=s[0],E=s[1],I=function(){return E(!1)},T=(0,i.useState)(!1),D=T[0],H=T[1],F=[{authorImg:"/images/avatars/05.jpg",authorName:"Daniel Adams",date:"3 days ago",text:"Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis reprehenderit in voluptate velit.",replies:[{authorImg:"/images/avatars/06.jpg",authorName:"Kristin Watsons",date:"2 days ago",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",badges:[["info","Author"]]}]},{authorImg:"/images/avatars/04.jpg",authorName:"Darrel Steward",date:"1 week ago",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",replies:[]}];return(0,a.jsxs)(l.Z,{pageTitle:"Single Post",activeNav:"Pages",children:[(0,a.jsxs)(o.Z,{as:"section",className:"mt-5 mb-md-4 py-5",children:[(0,a.jsxs)(u.Z,{className:"breadcrumb-light mb-3 pt-md-3",children:[(0,a.jsx)(c(),{href:"/car-finder",passHref:!0,children:(0,a.jsx)(u.Z.Item,{children:"Home"})}),(0,a.jsx)(c(),{href:"/car-finder/blog",passHref:!0,children:(0,a.jsx)(u.Z.Item,{children:"News & reviews"})}),(0,a.jsx)(u.Z.Item,{active:!0,children:"This Year is All About New Harley Davidson"})]}),(0,a.jsx)("h1",{className:"h2 text-light pb-3",children:"This Year is All About New Harley Davidson"}),(0,a.jsx)(v.Z,{src:"/images/car-finder/blog/10.jpg",width:1296,height:600,alt:"Hero image",light:"true",className:"rounded-3"}),(0,a.jsxs)(m.Z,{className:"mt-4 pt-3",children:[(0,a.jsxs)(d.Z,{xs:12,lg:8,children:[(0,a.jsxs)("div",{className:"d-flex flex-wrap border-bottom border-light pb-3 mb-4",children:[(0,a.jsx)(c(),{href:"#",children:(0,a.jsx)("a",{className:"text-uppercase text-decoration-none border-end border-light pe-3 me-3 mb-2",children:"Reviews"})}),(0,a.jsxs)("div",{className:"d-flex align-items-center text-light border-end border-light pe-3 me-3 mb-2",children:[(0,a.jsx)("i",{className:"fi-calendar-alt opacity-70 me-2"}),(0,a.jsx)("span",{children:"Mar 25"})]}),(0,a.jsxs)("div",{className:"d-flex align-items-center text-light border-end border-light pe-3 me-3 mb-2",children:[(0,a.jsx)("i",{className:"fi-clock opacity-70 me-2"}),(0,a.jsx)("span",{children:"6 min read"})]}),(0,a.jsxs)(S.Z,{to:"comments",smooth:"easeInOutQuart",duration:600,offset:-110,className:"nav-link-light text-light d-flex align-items-center mb-2",children:[(0,a.jsx)("i",{className:"fi-chat-circle opacity-70 me-2"}),(0,a.jsx)("span",{children:"3 comments"})]})]}),(0,a.jsx)("p",{className:"fs-lg fw-bold text-light mb-4",children:"Feugiat eget gravida urna placerat posuere pulvinar. Id nibh hendrerit semper urna consequat. Mauris elit tellus risus ultricies ut consequat. Tempor tellus imperdiet nec velit fames pellentesque sed sed arcu. Neque quam id pellentesque in diam in."}),(0,a.jsx)("p",{className:"text-light opacity-70",children:"Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et vivamus."}),(0,a.jsx)("p",{className:"text-light opacity-70 pb-3",children:"Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu, dictumst tortor nisi, odio. A sit lectus sem velit orci, rhoncus pharetra facilisis. Cras sodales a, dui pellentesque enim odio rutrum leo. Auctor viverra sit sit ut. Massa, elit venenatis, ultrices viverra at sagittis, velit. Cursus tempus phasellus consectetur suspendisse a blandit pellentesque diam neque. Massa est nibh congue elit amet, diam faucibus. Morbi non est semper ullamcorper quam iaculis at."}),(0,a.jsxs)(O.Z,{selector:"#video-btn",licenseKey:"D4194FDD-48924833-A54AECA3-D6F8E646",plugins:[P.Z],zoomFromOrigin:!1,elementClassNames:"position-relative my-4 overflow-hidden",children:[(0,a.jsx)("div",{className:"d-flex",children:(0,a.jsx)(v.Z,{src:"/images/car-finder/blog/11.jpg",width:968,height:544,alt:"Article image",className:"rounded-3"})}),(0,a.jsx)(h.Z,{id:"video-btn",href:"https://www.youtube.com/watch?v=MHw6PI_6ygs",variant:"light-primary btn-icon text-primary rounded-circle",className:"position-absolute start-50 top-50 translate-middle zindex-5",style:{width:"4.5rem",height:"4.5rem"},children:(0,a.jsx)("i",{className:"fi-play-filled fs-sm"})}),(0,a.jsx)("span",{className:"position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-3 opacity-40 zindex-1"})]}),(0,a.jsx)("p",{className:"text-light opacity-70 pt-2",children:"Velit dignissim pharetra ut augue. Nunc felis neque non sagittis. Sodales eros suspendisse scelerisque varius neque elit elementum quis. Ut euismod id auctor donec consectetur massa. Sed vitae accumsan lorem pharetra dictum eget vestibulum. Non blandit viverra laoreet amet, maecenas auctor leo justo, sit. Vitae vulputate gravida est feugiat. Adipiscing tristique mauris, eu sit tortor. Velit in scelerisque sit tincidunt habitant urna nec. Justo, non massa metus convallis cursus lorem volutpat eu duis. Ipsum dolor feugiat est tristique."}),(0,a.jsx)(N.Z,{light:!0,author:{name:"Annette Black"},className:"mb-4",children:"Consequat posuere egestas elit nunc eget elementum sed proin eget. Eget at elementum vestibulum ut eget. Etiam cursus magnis diam id dignissim sit nulla sit. Arcu eu enim nunc rutrum. Auctor venenatis aliquam quam sit."}),(0,a.jsx)("p",{className:"text-light opacity-70",children:"Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae."}),(0,a.jsx)("p",{className:"text-light opacity-70",children:"Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque."}),(0,a.jsx)("div",{className:"pt-4 pb-5 mb-md-3",children:(0,a.jsxs)("div",{className:"d-md-flex align-items-center justify-content-between border-top border-light pt-4",children:[(0,a.jsxs)("div",{className:"d-flex align-items-center me-3 mb-3 mb-md-0",children:[(0,a.jsx)("span",{className:"d-none d-sm-block text-light fw-bold text-nowrap mb-2 me-2 pe-1",children:"Tags:"}),(0,a.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,a.jsx)(c(),{href:"#",passHref:!0,children:(0,a.jsx)(h.Z,{size:"xs",variant:"translucent-light rounded-pill fs-sm fw-normal me-2 mb-2",children:"Reviews"})}),(0,a.jsx)(c(),{href:"#",passHref:!0,children:(0,a.jsx)(h.Z,{size:"xs",variant:"translucent-light rounded-pill fs-sm fw-normal me-2 mb-2",children:"Bikes"})}),(0,a.jsx)(c(),{href:"#",passHref:!0,children:(0,a.jsx)(h.Z,{size:"xs",variant:"translucent-light rounded-pill fs-sm fw-normal mb-2",children:"Harley Davidson"})})]})]}),(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[(0,a.jsx)("span",{className:"text-light fw-bold text-nowrap pe-1 mb-2",children:"Share:"}),(0,a.jsxs)("div",{className:"d-flex",children:[(0,a.jsx)(g.Z,{placement:"top",overlay:(0,a.jsx)(p.Z,{children:"Share with Facebook"}),children:(0,a.jsx)(h.Z,{size:"xs",variant:"icon btn-translucent-light rounded-circle shadow-sm mb-2 ms-2",children:(0,a.jsx)("i",{className:"fi-facebook"})})}),(0,a.jsx)(g.Z,{placement:"top",overlay:(0,a.jsx)(p.Z,{children:"Share with Twitter"}),children:(0,a.jsx)(h.Z,{size:"xs",variant:"icon btn-translucent-light rounded-circle shadow-sm mb-2 ms-2",children:(0,a.jsx)("i",{className:"fi-twitter"})})}),(0,a.jsx)(g.Z,{placement:"top",overlay:(0,a.jsx)(p.Z,{children:"Share with LinkedIn"}),children:(0,a.jsx)(h.Z,{size:"xs",variant:"icon btn-translucent-light rounded-circle shadow-sm mb-2 ms-2",children:(0,a.jsx)("i",{className:"fi-linkedin"})})})]})]})]})}),(0,a.jsxs)("div",{id:"comments",className:"mb-4 mb-md-5",children:[(0,a.jsx)("h3",{className:"mb-2 text-light",children:"3 comments"}),F.map((function(e,t){return(0,a.jsx)(y.Z,{light:!0,author:{thumbSrc:e.authorImg,thumbSize:48,thumbShape:"rounded-circle",name:e.authorName},badges:e.badges,text:e.text,date:e.date,replyLabel:"Reply",replyClick:function(){return console.log("Hook any action to Reply button!")},className:t===F.length-1?"border-0 pb-0":"",children:e.replies.map((function(e,t){return(0,a.jsx)(y.Z,{light:!0,author:{thumbSrc:e.authorImg,thumbSize:48,thumbShape:"rounded-circle",name:e.authorName},badges:e.badges,text:e.text,date:e.date},t)}))},t)}))]}),(0,a.jsx)("h3",{className:"mb-4 pb-sm-2 text-light",children:"Leave your comment"}),(0,a.jsxs)(m.Z,{as:b.Z,noValidate:!0,validated:D,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),H(!0)},className:"gy-md-4 gy-3 pb-sm-2",children:[(0,a.jsxs)(d.Z,{sm:6,as:b.Z.Group,controlId:"c-name",children:[(0,a.jsx)(b.Z.Label,{className:"text-light",children:"Name"}),(0,a.jsx)(b.Z.Control,{className:"form-control-light",size:"lg",placeholder:"Enter your name",required:!0}),(0,a.jsx)(b.Z.Control.Feedback,{type:"invalid",children:"Please enter your name."})]}),(0,a.jsxs)(d.Z,{sm:6,as:b.Z.Group,controlId:"c-email",children:[(0,a.jsx)(b.Z.Label,{className:"text-light",children:"Email"}),(0,a.jsx)(b.Z.Control,{className:"form-control-light",size:"lg",type:"email",placeholder:"Enter your email",required:!0}),(0,a.jsx)(b.Z.Control.Feedback,{type:"invalid",children:"Please provide a valid email address."})]}),(0,a.jsxs)(d.Z,{xs:12,as:b.Z.Group,controlId:"c-text",children:[(0,a.jsx)(b.Z.Label,{className:"text-light",children:"Comment"}),(0,a.jsx)(b.Z.Control,{className:"form-control-light",size:"lg",as:"textarea",rows:"4",placeholder:"Type comment here",required:!0}),(0,a.jsx)(b.Z.Control.Feedback,{type:"invalid",children:"Please type your comment."})]}),(0,a.jsx)(d.Z,{xs:12,children:(0,a.jsx)(h.Z,{type:"submit",size:"lg",variant:"primary",className:"w-sm-auto w-100 mt-2",children:"Post comment"})})]})]}),(0,a.jsx)(d.Z,{ref:t,as:"aside",lg:4,children:(0,a.jsxs)(x.Z,{show:!!e||n,onHide:I,backdrop:!e,scroll:!!e,container:t,placement:"end",className:"offcanvas-expand-lg bg-dark",children:[(0,a.jsxs)(x.Z.Header,{className:"shadow-sm mb-2",children:[(0,a.jsx)(x.Z.Title,{as:"h5",className:"text-light",children:"Sidebar"}),(0,a.jsx)(C.Z,{variant:"white",onClick:I,"aria-label":"Close modal",className:"position-absolute top-0 end-0 mt-3 me-3"})]}),(0,a.jsxs)(x.Z.Body,{children:[(0,a.jsxs)("div",{className:"position-relative mb-4",children:[(0,a.jsx)(b.Z.Control,{className:"form-control-light pe-5",placeholder:"Search..."}),(0,a.jsx)("i",{className:"fi-search position-absolute top-50 end-0 translate-middle-y me-3 text-light opacity-70"})]}),(0,a.jsx)(f.Z,{className:"card-flush card-light border-light bg-transparent pb-2 pb-lg-0 mb-4",children:(0,a.jsxs)(f.Z.Body,{className:"d-flex align-items-start",children:[(0,a.jsx)(q.Z,{img:{src:"/images/avatars/32.jpg",alt:"Avatar"},size:[80,80]}),(0,a.jsxs)("div",{className:"ps-3",children:[(0,a.jsx)("h4",{className:"h5 mb-2",children:(0,a.jsx)(c(),{href:"#",children:(0,a.jsx)("a",{className:"nav-link-light stretched-link p-0 fw-bold",children:"Kristin Watson"})})}),(0,a.jsx)("span",{className:"d-block mb-3 fs-sm opacity-70",children:"Chief Editor at Finder"}),(0,a.jsxs)("div",{className:"position-relative zindex-5 text-nowrap",children:[(0,a.jsx)(k.Z,{href:"#",variant:"solid",light:!0,brand:"facebook",roundedCircle:!0,className:"me-2 mb-2"}),(0,a.jsx)(k.Z,{href:"#",variant:"solid",light:!0,brand:"twitter",roundedCircle:!0,className:"me-2 mb-2"}),(0,a.jsx)(k.Z,{href:"#",variant:"solid",light:!0,brand:"instagram",roundedCircle:!0,className:"mb-2"})]})]})]})}),(0,a.jsx)(f.Z,{className:"card-flush card-light border-light bg-transparent pb-2 pb-lg-0 mb-4",children:(0,a.jsxs)(f.Z.Body,{children:[(0,a.jsx)("h4",{className:"h5 text-light",children:"Recent Posts"}),(0,a.jsx)("div",{children:[{href:"/car-finder/blog-single",img:"/images/car-finder/blog/th01.jpg",category:["#","Travel"],title:"Across Arctic on Old Good Land Rover Defender",date:"May 08",comments:"4 comments"},{href:"/car-finder/blog-single",img:"/images/car-finder/blog/th02.jpg",category:["#","Reviews"],title:"First ATV from KTM. Test Drive in Sahara",date:"Apr 27",comments:"9 comments"},{href:"/car-finder/blog-single",img:"/images/car-finder/blog/th03.jpg",category:["#","Reviews"],title:"All New Aston Martin Superleggera",date:"Mar 19",comments:"15 comments"}].map((function(e,t){return(0,a.jsxs)("article",{className:"d-flex align-items-start position-relative mt-4",children:[(0,a.jsx)(q.Z,{img:{src:e.img,alt:"Avatar"},rounded:3,size:[80,80],className:"flex-shrink-0"}),(0,a.jsxs)("div",{className:"ps-3",children:[(0,a.jsx)("span",{className:"fs-xs text-uppercase text-primary",children:e.category[1]}),(0,a.jsx)("h4",{className:"fs-base pt-1 mb-2",children:(0,a.jsx)("a",{className:"nav-link-light stretched-link",href:e.href,children:e.title})}),(0,a.jsxs)("div",{className:"d-flex fs-xs",children:[(0,a.jsxs)("span",{className:"me-2 pe-1 opacity-70",children:[(0,a.jsx)("i",{className:"fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"}),e.date]}),(0,a.jsxs)("span",{className:"opacity-70",children:[(0,a.jsx)("i",{className:"fi-chat-circle opacity-70 mt-n1 me-1 align-middle"}),e.comments]})]})]})]},t)}))})]})}),(0,a.jsx)(f.Z,{className:"card-flush card-light border-light bg-transparent pb-2 pb-lg-0 mb-4",children:(0,a.jsxs)(f.Z.Body,{children:[(0,a.jsx)("h3",{className:"h5 text-light",children:"Editor's Choice"}),(0,a.jsx)(z.tq,{modules:[A.W_],slidesPerView:1,navigation:{prevEl:"#prev",nextEl:"#next"},loop:!0,grabCursor:!0,style:{margin:"-20px"},children:[{href:"/car-finder/blog-single",img:"/images/car-finder/blog/04.jpg",category:["#","Automotive News"],title:"Volkswagen: Never Done Innovating",author:["#","/images/avatars/08.jpg","Darrell Steward"],date:"Apr 15",comments:"No comments"},{href:"/job-board/blog-single",img:"/images/car-finder/blog/08.jpg",category:["#","Automotive News"],title:"Closer Look at Electric Bike Startup",author:["#","/images/avatars/07.jpg","Cody Fisher"],date:"Feb 28",comments:"5 comments"}].map((function(e,t){return(0,a.jsx)(z.o5,{as:"article",className:"h-auto",style:{padding:"20px"},children:(0,a.jsx)(w.Z,{href:e.href,img:{src:e.img,size:[374,180],alt:"Image"},category:{href:e.category[0],title:e.category[1]},title:e.title,author:{href:e.author[0],img:e.author[1],name:e.author[2]},date:e.date,comments:e.comments,light:!0,className:"bg-transparent"})},t)}))}),(0,a.jsxs)("div",{className:"mt-3 mx-n2",children:[(0,a.jsx)(h.Z,{id:"prev",variant:"prev btn-light",className:"position-relative mx-2"}),(0,a.jsx)(h.Z,{id:"next",variant:"next btn-light",className:"position-relative mx-2"})]})]})}),(0,a.jsx)(f.Z,{className:"card-flush card-light border-light bg-transparent pb-2 pb-lg-0 mb-4",children:(0,a.jsxs)(f.Z.Body,{children:[(0,a.jsx)("h4",{className:"h5 text-light",children:"Subscribe to our newsletter"}),(0,a.jsx)("p",{className:"fs-sm mb-3 text-light opacity-70",children:"We will send you hottest news as soon as they are posted in the picked category."}),(0,a.jsxs)(Z.Z,{light:!0,children:[(0,a.jsxs)(j.Z,{size:"sm",children:[(0,a.jsx)(j.Z.Text,{className:"text-muted",children:(0,a.jsx)("i",{className:"fi-mail text-light opacity-70"})}),(0,a.jsx)(b.Z.Control,{placeholder:"Your email"})]}),(0,a.jsx)(h.Z,{size:"sm",variant:"primary",children:"Subscribe"})]}),(0,a.jsxs)(b.Z.Text,{className:"d-block pt-3 text-light opacity-70",children:["* By signing up you agree to our",(0,a.jsx)(c(),{href:"#",children:(0,a.jsx)("a",{className:"ms-1",children:"Privacy policy."})})]})]})})]})]})})]})]}),(0,a.jsxs)(h.Z,{size:"sm",className:"w-100 rounded-0 fixed-bottom d-lg-none",onClick:function(){return E(!0)},children:[(0,a.jsx)("i",{className:"fi-sidebar-left me-2"}),"Sidebar"]})]})}},78182:function(e,t,s){"use strict";s.d(t,{Z:function(){return q}});var a=s(94184),i=s.n(a),r=s(67294),l=s(76792),n=s(66611),c=s(39602),o=s(85893);const m=r.forwardRef((({bsPrefix:e,className:t,variant:s,as:a="img",...r},n)=>{const c=(0,l.vE)(e,"card-img");return(0,o.jsx)(a,{ref:n,className:i()(s?`${c}-${s}`:c,t),...r})}));m.displayName="CardImg";var d=m,u=s(49059);const h=r.forwardRef((({bsPrefix:e,className:t,as:s="div",...a},n)=>{const c=(0,l.vE)(e,"card-header"),m=(0,r.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,o.jsx)(u.Z.Provider,{value:m,children:(0,o.jsx)(s,{ref:n,...a,className:i()(t,c)})})}));h.displayName="CardHeader";var g=h;const p=(0,c.Z)("h5"),x=(0,c.Z)("h6"),b=(0,n.Z)("card-body"),f=(0,n.Z)("card-title",{Component:p}),j=(0,n.Z)("card-subtitle",{Component:x}),v=(0,n.Z)("card-link",{Component:"a"}),N=(0,n.Z)("card-text",{Component:"p"}),y=(0,n.Z)("card-footer"),Z=(0,n.Z)("card-img-overlay"),w=r.forwardRef((({bsPrefix:e,className:t,bg:s,text:a,border:r,body:n,children:c,as:m="div",...d},u)=>{const h=(0,l.vE)(e,"card");return(0,o.jsx)(m,{ref:u,...d,className:i()(t,h,s&&`bg-${s}`,a&&`text-${a}`,r&&`border-${r}`),children:n?(0,o.jsx)(b,{children:c}):c})}));w.displayName="Card",w.defaultProps={body:!1};var q=Object.assign(w,{Img:d,Title:f,Subtitle:j,Body:b,Link:v,Text:N,Header:g,Footer:y,ImgOverlay:Z})}},function(e){e.O(0,[3675,4222,4567,2141,8279,9331,2063,94,3968,4841,1444,2523,5592,5854,1817,9774,2888,179],(function(){return t=80555,e(e.s=t);var t}));var t=e.O();_N_E=t}]);