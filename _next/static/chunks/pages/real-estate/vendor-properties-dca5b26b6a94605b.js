(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4671,4902],{94044:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(67294),r=a(6454),i=a(76852),n=Math.pow(2,31)-1;function l(e,t,a){var s=a-Date.now();e.current=s<=n?setTimeout(t,s):setTimeout((function(){return l(e,t,a)}),n)}function o(){var e=(0,r.Z)(),t=(0,s.useRef)();return(0,i.Z)((function(){return clearTimeout(t.current)})),(0,s.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(s,r){void 0===r&&(r=0),e()&&(a(),r<=n?t.current=setTimeout(s,r):l(t,s,Date.now()+r))},clear:a}}),[])}},80355:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/real-estate/vendor-properties",function(){return a(1027)}])},53667:function(e,t,a){"use strict";var s=a(85893),r=a(75698);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}t.Z=function(e){var t=e.img,a=e.size,l=e.rounded,o=e.light,c=e.className,d=n(e,["img","size","rounded","light","className"]);return(0,s.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){i(e,t,a[t])}))}return e}({},d,{className:"position-relative ".concat(l?"rounded-".concat(l):"rounded-circle"," overflow-hidden").concat(c?" ".concat(c):""),style:a?{width:a[0],height:a[1]}:{width:"48px",height:"48px"},children:t&&(0,s.jsx)(r.Z,{src:t.src,layout:"fill",objectFit:"cover",quality:90,alt:t.alt,light:o?1:0})}))}},6492:function(e,t,a){"use strict";var s=a(85893),r=a(5152),i=a(41664),n=a.n(i),l=a(59331);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){o(e,t,a[t])}))}return e}function d(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=(0,r.default)((function(){return a.e(9974).then(a.bind(a,29974))}),{loadableGenerated:{webpack:function(){return[29974]}}}),u=(0,r.default)((function(){return Promise.all([a.e(94),a.e(6198)]).then(a.bind(a,20384))}),{loadableGenerated:{webpack:function(){return[20384]}}});t.Z=function(e){var t=e.images,a=e.href,r=e.title,i=e.category,o=e.location,p=e.price,g=e.badges,f=e.wishlistButton,h=e.dropdown,x=e.footer,b=e.horizontal,j=e.light,v=e.className,y=d(e,["images","href","title","category","location","price","badges","wishlistButton","dropdown","footer","horizontal","light","className"]),N=b?" card-horizontal":"",w=v?" ".concat(v):"";return(0,s.jsxs)("div",c({},y,{className:j?"card card-light card-hover".concat(N).concat(w):"card card-hover shadow-sm border-0".concat(N).concat(w),children:[t&&(0,s.jsx)(s.Fragment,{children:t.length>1?(0,s.jsx)(u,{horizontal:!!b,images:t,href:a,badges:g,wishlistButton:f,light:j?1:0}):(0,s.jsx)(m,{horizontal:!!b,images:t,href:a,badges:g,wishlistButton:f,light:j?1:0})}),(0,s.jsxs)("div",{className:"card-body position-relative pb-3",children:[h&&(0,s.jsxs)(l.Z,{className:"dropdown position-absolute zindex-5 top-0 end-0 mt-3 me-3",children:[(0,s.jsx)(l.Z.Toggle,{variant:"".concat(j?"translucent-light":"light shadow-sm"," btn-icon btn-xs rounded-circle"),children:(0,s.jsx)("i",{className:"fi-dots-vertical"})}),(0,s.jsx)(l.Z.Menu,{variant:j?"dark":"",className:"my-1",children:h.map((function(e,t){return e.href?(0,s.jsx)(n(),{href:e.href,passHref:!0,children:(0,s.jsxs)(l.Z.Item,c({},e.props,{children:[(0,s.jsx)("i",{className:"".concat(e.icon).concat(j?"":" opacity-60"," me-2")}),e.label]}))},t):(0,s.jsxs)(l.Z.Item,c({as:"button"},e.props,{children:[(0,s.jsx)("i",{className:"".concat(e.icon).concat(j?"":" opacity-60"," me-2")}),e.label]}),t)}))})]}),i&&(0,s.jsx)("div",{className:"mb-1 fs-xs text-uppercase text-primary",children:i}),r&&(0,s.jsx)("h3",{className:"h6 mb-2 fs-base",children:a?(0,s.jsx)(n(),{href:a,children:(0,s.jsx)("a",{className:j?"nav-link-light stretched-link":"nav-link stretched-link",children:r})}):(0,s.jsx)("span",{className:j?"text-light":"",children:r})}),o&&(0,s.jsx)("p",{className:"mb-2 fs-sm ".concat(j?"text-light opacity-50":"text-muted"),children:o}),p&&(0,s.jsxs)("div",{className:"fw-bold",children:[(0,s.jsx)("i",{className:"fi-cash mt-n1 me-2 lead align-middle".concat(j?" opacity-50":" opacity-70")}),(0,s.jsx)("span",{className:j?"opacity-70":"",children:p})]}),b&&(0,s.jsx)(s.Fragment,{children:x&&(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center justify-content-sm-start border-top".concat(j?" border-light":""," pt-3 pb-2 mt-3 text-nowrap"),children:x.map((function(e,t){return(0,s.jsxs)("span",{className:"d-inline-block me-4 fs-sm",children:[e[1],(0,s.jsx)("i",{className:"".concat(e[0]," ms-1 mt-n1 fs-lg text-muted")})]},t)}))})})]}),!b&&(0,s.jsx)(s.Fragment,{children:x&&(0,s.jsx)("div",{className:"card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap",children:x.map((function(e,t){return(0,s.jsxs)("span",{className:"d-inline-block mx-1 px-2 fs-sm",children:[e[1],(0,s.jsx)("i",{className:"".concat(e[0]," ms-1 mt-n1 fs-lg text-muted")})]},t)}))})})]}))}},1027:function(e,t,a){"use strict";a.r(t);var s=a(85893),r=a(67294),i=a(50596),n=a(11163),l=a(41664),o=a.n(l),c=a(10682),d=a(21608),m=a(31555),u=a(26699),p=a(16518),g=a(6212),f=a(85460),h=a(35005),x=a(69463),b=a(53667),j=a(46463),v=a(6396),y=a(6492);t.default=function(){var e="sale"===(0,n.useRouter)().query.category?"sale":"rent",t=(0,r.useState)(!1),a=t[0],l=t[1],N=(0,r.useState)(!1),w=N[0],Z=N[1],P=(0,r.useState)(!1),k=P[0],O=P[1];return(0,s.jsxs)(i.Z,{pageTitle:"Vendor Properties",activeNav:"Vendor",userLoggedIn:!0,children:[(0,s.jsxs)(g.Z,{centered:!0,show:a,onHide:function(){return l(!1)},children:[(0,s.jsx)(g.Z.Header,{closeButton:!0,children:(0,s.jsx)(g.Z.Title,{as:"h3",className:"fs-base",children:"Message to Floyd Miles"})}),(0,s.jsx)(g.Z.Body,{children:(0,s.jsxs)(f.Z,{noValidate:!0,validated:w,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),Z(!0)},children:[(0,s.jsxs)(f.Z.Group,{className:"mb-4",children:[(0,s.jsx)(f.Z.Control,{as:"textarea",rows:6,placeholder:"Type your message here",required:!0}),(0,s.jsx)(f.Z.Control.Feedback,{type:"invalid",children:"Please type your message before sending."})]}),(0,s.jsxs)(h.Z,{type:"submit",className:"mb-2",children:[(0,s.jsx)("i",{className:"fi-send me-2"}),"Send message"]})]})})]}),(0,s.jsxs)(c.Z,{className:"mt-5 mb-md-4 py-5",children:[(0,s.jsxs)(u.Z,{className:"mb-4 pt-md-3",children:[(0,s.jsx)(o(),{href:"/real-estate",passHref:!0,children:(0,s.jsx)(u.Z.Item,{children:"Home"})}),(0,s.jsx)(o(),{href:"#",passHref:!0,children:(0,s.jsx)(u.Z.Item,{children:"Agents"})}),(0,s.jsx)(u.Z.Item,{active:!0,children:"Floyd Miles"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(m.Z,{as:"aside",md:4,lg:3,className:"mb-5 mb-md-0",children:(0,s.jsxs)("div",{className:"pe-lg-3",children:[(0,s.jsx)(b.Z,{img:{src:"images/avatars/31.jpg",alt:"Floyd Miles"},size:[120,120],className:"mx-auto mx-md-0 mb-3"}),(0,s.jsx)("h2",{className:"h4 text-center text-md-start mb-1",children:"Floyd Miles"}),(0,s.jsx)("p",{className:"text-center text-md-start mb-2 pb-1",children:"Imperial Property Group Agent"}),(0,s.jsxs)("div",{className:"d-flex justify-content-center justify-content-md-start align-items-center border-bottom pb-4 mb-4",children:[(0,s.jsx)(j.Z,{rating:4.8}),(0,s.jsx)(o(),{href:"/real-estate/vendor-reviews",children:(0,s.jsx)("a",{className:"ms-2",children:"45 reviews"})})]}),(0,s.jsxs)("div",{className:"border-bottom pb-4 mb-4",children:[(0,s.jsx)("p",{className:"fs-sm mb-0",children:"Hello! I will select the best accommodation for you. Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel metus odio at faucibus ac. Neque id placerat et id ut acultricies commodo."}),(0,s.jsx)(p.Z,{in:k,children:(0,s.jsx)("div",{id:"moreAbout",children:(0,s.jsx)("p",{className:"fs-sm mb-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."})})}),(0,s.jsx)("div",{className:"text-center text-md-start",children:(0,s.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),O(!k)},"aria-controls":"moreAbout","aria-expanded":k,className:"collapse-label fs-sm".concat(k?"":" collapsed"),children:k?"Show less":"Show more"})})]}),(0,s.jsxs)("ul",{className:"d-table list-unstyled mx-auto mx-md-0 mb-3 mb-md-4",children:[(0,s.jsx)("li",{className:"mb-2",children:(0,s.jsxs)("a",{href:"tel:3025550107",className:"nav-link fw-normal p-0",children:[(0,s.jsx)("i",{className:"fi-phone text-primary mt-n1 me-2 align-middle"}),"(302) 555-0107"]})}),(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:"mailto:floyd_miles@email.com",className:"nav-link fw-normal p-0",children:[(0,s.jsx)("i",{className:"fi-mail text-primary mt-n1 me-2 align-middle"}),"floyd_miles@email.com"]})})]}),(0,s.jsxs)("div",{className:"text-center text-md-start",children:[(0,s.jsx)(v.Z,{href:"#",variant:"solid",brand:"facebook",roundedCircle:!0,className:"me-2"}),(0,s.jsx)(v.Z,{href:"#",variant:"solid",brand:"linkedin",roundedCircle:!0})]}),(0,s.jsx)("div",{className:"text-center text-md-start pt-md-2 mt-4",children:(0,s.jsxs)(h.Z,{onClick:function(){return l(!0)},children:[(0,s.jsx)("i",{className:"fi-chat-left fs-sm me-2"}),"Direct message"]})})]})}),(0,s.jsxs)(m.Z,{md:8,lg:9,children:[(0,s.jsx)("h1",{className:"h2 text-center text-sm-start mb-4",children:"Property offers"}),(0,s.jsxs)("div",{className:"d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4",children:[(0,s.jsxs)(x.Z,{variant:"tabs",className:"flex-nowrap fs-sm mb-sm-0",children:[(0,s.jsx)(x.Z.Item,{children:(0,s.jsx)(o(),{href:"/real-estate/vendor-properties?category=rent",passHref:!0,children:(0,s.jsx)(x.Z.Link,{active:"rent"===e,children:"For rent"})})}),(0,s.jsx)(x.Z.Item,{children:(0,s.jsx)(o(),{href:"/real-estate/vendor-properties?category=sale",passHref:!0,children:(0,s.jsx)(x.Z.Link,{active:"sale"===e,children:"For sale"})})})]}),(0,s.jsxs)(f.Z.Group,{controlId:"sortby",className:"d-flex align-items-center flex-shrink-0 ms-sm-4",children:[(0,s.jsxs)(f.Z.Label,{className:"text-body fs-sm me-2 mb-0 pe-1 text-nowrap",children:[(0,s.jsx)("i",{className:"fi-arrows-sort text-muted mt-n1 me-2"}),"Sort by:"]}),(0,s.jsxs)(f.Z.Select,{size:"sm",children:[(0,s.jsx)("option",{value:"Newest",children:"Newest"}),(0,s.jsx)("option",{value:"Popularity",children:"Popularity"}),(0,s.jsx)("option",{value:"Low - Hight Price",children:"Low - Hight Price"}),(0,s.jsx)("option",{value:"High - Low Price",children:"High - Low Price"})]})]})]}),"sale"===e?(0,s.jsx)(d.Z,{xs:1,sm:2,lg:3,className:"g-4 g-md-3 g-lg-4 py-2",children:[{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/34.jpg",475,310,"Image"],["images/real-estate/catalog/34.jpg",475,310,"Image"]],title:"White Cottage | 70 sq.m",location:"79 Albany Post Road Hyde Park, NY",price:"$84,000",badges:[["success","Verified"]],amenities:[2,1,1]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/35.jpg",475,310,"Image"],["images/real-estate/catalog/35.jpg",475,310,"Image"]],title:"Country House | 120 sq.m",location:"6954 Grand AveMaspeth, NY 11378",price:"$162,000",badges:[["info","New"]],amenities:[4,2,2]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/36.jpg",475,310,"Image"],["images/real-estate/catalog/36.jpg",475,310,"Image"]],title:"Ellis Studio | 40 sq.m",location:"3 E Evergreen Rd New City, NY 10956",price:"$50,000",badges:[],amenities:[2,1,1]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/37.jpg",475,310,"Image"],["images/real-estate/catalog/37.jpg",475,310,"Image"]],title:"Luxury Rental Villa | 180 sq.m",location:"118-11 Sutphin Blvd Jamaica, NY 11434",price:"$300,500",badges:[["success","Verified"]],amenities:[4,2,2]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/38.jpg",475,310,"Image"],["images/real-estate/catalog/38.jpg",475,310,"Image"]],title:"Modern House | 170 sq.m",location:"82 Nassau St New York, NY 10038",price:"$620,400",badges:[["success","Verified"]],amenities:[5,2,2]}].map((function(e,t){return(0,s.jsx)(m.Z,{children:(0,s.jsx)(y.Z,{href:e.href,images:e.images,title:e.title,category:e.category,location:e.location,price:e.price,badges:e.badges,wishlistButton:{tooltip:"Add to Wishlist",props:{onClick:function(){return console.log("Property added to your Wishlist!")}}},footer:[["fi-bed",e.amenities[0]],["fi-bath",e.amenities[1]],["fi-car",e.amenities[2]]],className:"h-100"})},t)}))}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,{xs:1,sm:2,lg:3,className:"g-4 g-md-3 g-lg-4 pt-2",children:[{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/01.jpg",475,310,"Image"],["images/real-estate/catalog/01.jpg",475,310,"Image"]],title:"3-bed Apartment | 67 sq.m",location:"3811 Ditmars Blvd Astoria, NY 11105",price:"$1,650",badges:[["success","Verified"],["info","New"]],amenities:[3,2,1]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/02.jpg",475,310,"Image"],["images/real-estate/catalog/02.jpg",475,310,"Image"]],title:"Family Home | 120 sq.m",location:"67-04 Myrtle Ave Glendale, NY 11385",price:"From $4,500",badges:[["success","Verified"],["danger","Featured"]],amenities:[4,2,2]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/03.jpg",475,310,"Image"],["images/real-estate/catalog/03.jpg",475,310,"Image"]],title:"Greenpoint Rentals | 85 sq.m",location:"1510 Castle Hill Ave Bronx, NY 10462",price:"$1,850",badges:[["success","Verified"]],amenities:[2,1,0]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/30.jpg",475,310,"Image"],["images/real-estate/catalog/30.jpg",475,310,"Image"]],title:"Crystal Apartment| 60 sq.m",location:"495 Henry St Brooklyn, NY 11231",price:"$1,300",badges:[],amenities:[2,1,1]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/31.jpg",475,310,"Image"],["images/real-estate/catalog/31.jpg",475,310,"Image"]],title:"Pine Apartments | 56 sq.m",location:"7865 Ditmars Blvd Astoria, NY 11105",price:"$2,000",badges:[["info","New"]],amenities:[4,2,2]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/32.jpg",475,310,"Image"],["images/real-estate/catalog/32.jpg",475,310,"Image"]],title:"Tiffany Studio | 35 sq.m",location:"79 Albany Post Road, NY 12538",price:"$700",badges:[],amenities:[1,1,1]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/04.jpg",475,310,"Image"],["images/real-estate/catalog/04.jpg",475,310,"Image"]],title:"Studio | 32 sq.m",location:"140-60 Beech Ave Flushing, NY 11355",price:"$680",badges:[["success","Verified"],["info","New"]],amenities:[1,1,1]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/05.jpg",475,310,"Image"],["images/real-estate/catalog/05.jpg",475,310,"Image"]],title:"Terra Nova Apartments | 85 sq.m",location:"21 India St Brooklyn, NY 11222",price:"$2,400",badges:[["success","Verified"]],amenities:[5,2,2]},{href:"/real-estate/single-v1",images:[["images/real-estate/catalog/33.jpg",475,310,"Image"],["images/real-estate/catalog/33.jpg",475,310,"Image"]],title:"O\u2019Farrell Rooms | 40 sq.m",location:"460 E Fordham Rd Bronx, NY 10458",price:"From $550",badges:[["success","Verified"],["danger","Featured"]],amenities:[2,1,0]}].map((function(e,t){return(0,s.jsx)(m.Z,{children:(0,s.jsx)(y.Z,{href:e.href,images:e.images,title:e.title,category:e.category,location:e.location,price:e.price,badges:e.badges,wishlistButton:{tooltip:"Add to Wishlist",props:{onClick:function(){return console.log("Property added to your Wishlist!")}}},footer:[["fi-bed",e.amenities[0]],["fi-bath",e.amenities[1]],["fi-car",e.amenities[2]]],className:"h-100"})},t)}))}),(0,s.jsx)("div",{className:"text-center mt-1 pt-4",children:(0,s.jsxs)("a",{href:"#",className:"d-inline-block fw-bold text-decoration-none p-2 pb-0",children:[(0,s.jsx)("i",{className:"fi-refresh fs-sm me-2"}),"Load more"]})})]})]})]})]})]})}},26699:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var s=a(94184),r=a.n(s),i=a(67294),n=a(76792),l=a(13551),o=a(85893);const c=i.forwardRef((({bsPrefix:e,active:t,children:a,className:s,as:i="li",linkAs:c=l.Z,linkProps:d,href:m,title:u,target:p,...g},f)=>{const h=(0,n.vE)(e,"breadcrumb-item");return(0,o.jsx)(i,{ref:f,...g,className:r()(h,s,{active:t}),"aria-current":t?"page":void 0,children:t?a:(0,o.jsx)(c,{...d,href:m,title:u,target:p,children:a})})}));c.displayName="BreadcrumbItem",c.defaultProps={active:!1,linkProps:{}};var d=c;const m=i.forwardRef((({bsPrefix:e,className:t,listProps:a,children:s,label:i,as:l="nav",...c},d)=>{const m=(0,n.vE)(e,"breadcrumb");return(0,o.jsx)(l,{"aria-label":i,className:t,ref:d,...c,children:(0,o.jsx)("ol",{...a,className:r()(m,null==a?void 0:a.className),children:s})})}));m.displayName="Breadcrumb",m.defaultProps={label:"breadcrumb",listProps:{}};var u=Object.assign(m,{Item:d})},59862:function(e,t,a){"use strict";a.d(t,{Z:function(){return H}});var s=a(90424),r=a(67294),i=a(94044),n=(a(42473),a(15446)),l=a(35654),o=a(94184),c=a.n(o),d=a(73935),m=a(32092),u=a(77086),p=a(72950),g=a(67216),f=a(78146),h=a(5680);const x=()=>{};var b=function(e,t,{disabled:a,clickTrigger:s}={}){const i=t||x;(0,h.Z)(e,i,{disabled:a,clickTrigger:s});const n=(0,f.Z)((e=>{27===e.keyCode&&i(e)}));(0,r.useEffect)((()=>{if(a||null==e)return;const t=(0,g.Z)((0,h.f)(e));let s=(t.defaultView||window).event;const r=(0,p.Z)(t,"keyup",(e=>{e!==s?n(e):s=void 0}));return()=>{r()}}),[e,a,n])},j=a(54194),v=a(90012),y=a(85893);const N=r.forwardRef(((e,t)=>{const{flip:a,offset:s,placement:i,containerPadding:n,popperConfig:o={},transition:c}=e,[p,g]=(0,m.Z)(),[f,h]=(0,m.Z)(),x=(0,l.Z)(g,t),N=(0,j.Z)(e.container),w=(0,j.Z)(e.target),[Z,P]=(0,r.useState)(!e.show),k=(0,u.Z)(w,p,(0,v.ZP)({placement:i,enableEvents:!!e.show,containerPadding:n||5,flip:a,offset:s,arrowElement:f,popperConfig:o}));e.show?Z&&P(!1):e.transition||Z||P(!0);const O=(...t)=>{P(!0),e.onExited&&e.onExited(...t)},I=e.show||c&&!Z;if(b(p,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!I)return null;let E=e.children(Object.assign({},k.attributes.popper,{style:k.styles.popper,ref:x}),{popper:k,placement:i,show:!!e.show,arrowProps:Object.assign({},k.attributes.arrow,{style:k.styles.arrow,ref:h})});if(c){const{onExit:t,onExiting:a,onEnter:s,onEntering:r,onEntered:i}=e;E=(0,y.jsx)(c,{in:e.show,appear:!0,onExit:t,onExiting:a,onExited:O,onEnter:s,onEntering:r,onEntered:i,children:E})}return N?d.createPortal(E,N):null}));N.displayName="Overlay";var w=N,Z=a(11132),P=a(76792),k=a(40755);var O=a(41068),I=a(8285);const E={transition:O.Z,rootClose:!1,show:!1,placement:"top"};const C=r.forwardRef((({children:e,transition:t,popperConfig:a={},...s},i)=>{const n=(0,r.useRef)({}),[o,d]=function(e){const t=(0,r.useRef)(null),a=(0,P.vE)(void 0,"popover"),s=(0,r.useMemo)((()=>({name:"offset",options:{offset:()=>t.current&&(0,Z.Z)(t.current,a)?e||k.Z.POPPER_OFFSET:e||[0,0]}})),[e,a]);return[t,[s]]}(s.offset),m=(0,l.Z)(i,o),u=!0===t?O.Z:t||void 0;return(0,y.jsx)(w,{...s,ref:m,popperConfig:{...a,modifiers:d.concat(a.modifiers||[])},transition:u,children:(a,{arrowProps:s,popper:i,show:l})=>{var o,d;!function(e,t){const{ref:a}=e,{ref:s}=t;e.ref=a.__wrapped||(a.__wrapped=e=>a((0,I.Z)(e))),t.ref=s.__wrapped||(s.__wrapped=e=>s((0,I.Z)(e)))}(a,s);const m=null==i?void 0:i.placement,u=Object.assign(n.current,{state:null==i?void 0:i.state,scheduleUpdate:null==i?void 0:i.update,placement:m,outOfBoundaries:(null==i||null==(o=i.state)||null==(d=o.modifiersData.hide)?void 0:d.isReferenceHidden)||!1});return"function"===typeof e?e({...a,placement:m,show:l,...!t&&l&&{className:"show"},popper:u,arrowProps:s}):r.cloneElement(e,{...a,placement:m,arrowProps:s,popper:u,className:c()(e.props.className,!t&&l&&"show"),style:{...e.props.style,...a.style}})}})}));C.displayName="Overlay",C.defaultProps=E;var S=C;function F(e,t,a){const[r]=t,i=r.currentTarget,n=r.relatedTarget||r.nativeEvent[a];n&&n===i||(0,s.Z)(i,n)||e(...t)}function _({trigger:e,overlay:t,children:a,popperConfig:s={},show:o,defaultShow:c=!1,onToggle:d,delay:m,placement:u,flip:p=u&&-1!==u.indexOf("auto"),...g}){const f=(0,r.useRef)(null),h=(0,l.Z)(f,a.ref),x=(0,i.Z)(),b=(0,r.useRef)(""),[j,v]=(0,n.$c)(o,c,d),N=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(m),{onFocus:w,onBlur:Z,onClick:P}="function"!==typeof a?r.Children.only(a).props:{},k=(0,r.useCallback)((()=>{x.clear(),b.current="show",N.show?x.set((()=>{"show"===b.current&&v(!0)}),N.show):v(!0)}),[N.show,v,x]),O=(0,r.useCallback)((()=>{x.clear(),b.current="hide",N.hide?x.set((()=>{"hide"===b.current&&v(!1)}),N.hide):v(!1)}),[N.hide,v,x]),E=(0,r.useCallback)(((...e)=>{k(),null==w||w(...e)}),[k,w]),C=(0,r.useCallback)(((...e)=>{O(),null==Z||Z(...e)}),[O,Z]),_=(0,r.useCallback)(((...e)=>{v(!j),null==P||P(...e)}),[P,v,j]),H=(0,r.useCallback)(((...e)=>{F(k,e,"fromElement")}),[k]),T=(0,r.useCallback)(((...e)=>{F(O,e,"toElement")}),[O]),B=null==e?[]:[].concat(e),R={ref:e=>{h((0,I.Z)(e))}};return-1!==B.indexOf("click")&&(R.onClick=_),-1!==B.indexOf("focus")&&(R.onFocus=E,R.onBlur=C),-1!==B.indexOf("hover")&&(R.onMouseOver=H,R.onMouseOut=T),(0,y.jsxs)(y.Fragment,{children:["function"===typeof a?a(R):(0,r.cloneElement)(a,R),(0,y.jsx)(S,{...g,show:j,onHide:O,flip:p,placement:u,popperConfig:s,target:f.current,children:t})]})}_.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var H=_},40755:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var s=a(94184),r=a.n(s),i=a(67294),n=a(76792),l=a(66611),o=(0,l.Z)("popover-header"),c=(0,l.Z)("popover-body"),d=a(79883),m=a(85893);const u=i.forwardRef((({bsPrefix:e,placement:t,className:a,style:s,children:i,body:l,arrowProps:o,popper:u,show:p,...g},f)=>{const h=(0,n.vE)(e,"popover"),x=(0,n.SC)(),[b]=(null==t?void 0:t.split("-"))||[],j=(0,d.z)(b,x);return(0,m.jsxs)("div",{ref:f,role:"tooltip",style:s,"x-placement":b,className:r()(a,h,b&&`bs-popover-${j}`),...g,children:[(0,m.jsx)("div",{className:"popover-arrow",...o}),l?(0,m.jsx)(c,{children:i}):i]})}));u.defaultProps={placement:"right"};var p=Object.assign(u,{Header:o,Body:c,POPPER_OFFSET:[0,8]})},43489:function(e,t,a){"use strict";var s=a(94184),r=a.n(s),i=a(67294),n=a(76792),l=a(79883),o=a(85893);const c=i.forwardRef((({bsPrefix:e,placement:t,className:a,style:s,children:i,arrowProps:c,popper:d,show:m,...u},p)=>{e=(0,n.vE)(e,"tooltip");const g=(0,n.SC)(),[f]=(null==t?void 0:t.split("-"))||[],h=(0,l.z)(f,g);return(0,o.jsxs)("div",{ref:p,style:s,role:"tooltip","x-placement":f,className:r()(a,e,`bs-tooltip-${h}`),...u,children:[(0,o.jsx)("div",{className:"tooltip-arrow",...c}),(0,o.jsx)("div",{className:`${e}-inner`,children:i})]})}));c.defaultProps={placement:"right"},c.displayName="Tooltip",t.Z=c},79883:function(e,t,a){"use strict";a.d(t,{z:function(){return r}});var s=a(67294);s.Component;function r(e,t){let a=e;return"left"===e?a=t?"end":"start":"right"===e&&(a=t?"start":"end"),a}}},function(e){e.O(0,[3675,4222,4567,2141,8279,9331,2063,5152,5592,7608,596,9774,2888,179],(function(){return t=80355,e(e.s=t);var t}));var t=e.O();_N_E=t}]);