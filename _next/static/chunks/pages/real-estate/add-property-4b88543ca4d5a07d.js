(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5743,4902,5217],{94044:function(e,s,a){"use strict";a.d(s,{Z:function(){return o}});var l=a(67294),n=a(6454),r=a(76852),i=Math.pow(2,31)-1;function t(e,s,a){var l=a-Date.now();e.current=l<=i?setTimeout(s,l):setTimeout((function(){return t(e,s,a)}),i)}function o(){var e=(0,n.Z)(),s=(0,l.useRef)();return(0,r.Z)((function(){return clearTimeout(s.current)})),(0,l.useMemo)((function(){var a=function(){return clearTimeout(s.current)};return{set:function(l,n){void 0===n&&(n=0),e()&&(a(),n<=i?s.current=setTimeout(l,n):t(s,l,Date.now()+n))},clear:a}}),[])}},18236:function(e){e.exports=function(){"use strict";var e=function(e){var s=e.addFilter,a=e.utils,l=a.Type,n=a.replaceInString,r=a.toNaturalFileSize;return s("ALLOW_HOPPER_ITEM",(function(e,s){var a=s.query;if(!a("GET_ALLOW_FILE_SIZE_VALIDATION"))return!0;var l=a("GET_MAX_FILE_SIZE");if(null!==l&&e.size>=l)return!1;var n=a("GET_MIN_FILE_SIZE");return!(null!==n&&e.size<=n)})),s("LOAD_FILE",(function(e,s){var a=s.query;return new Promise((function(s,l){if(!a("GET_ALLOW_FILE_SIZE_VALIDATION"))return s(e);var i=a("GET_FILE_VALIDATE_SIZE_FILTER");if(i&&!i(e))return s(e);var t=a("GET_MAX_FILE_SIZE");if(null!==t&&e.size>=t)l({status:{main:a("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),sub:n(a("GET_LABEL_MAX_FILE_SIZE"),{filesize:r(t,".",a("GET_FILE_SIZE_BASE"),a("GET_FILE_SIZE_LABELS",a))})}});else{var o=a("GET_MIN_FILE_SIZE");if(null!==o&&e.size<=o)l({status:{main:a("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),sub:n(a("GET_LABEL_MIN_FILE_SIZE"),{filesize:r(o,".",a("GET_FILE_SIZE_BASE"),a("GET_FILE_SIZE_LABELS",a))})}});else{var c=a("GET_MAX_TOTAL_FILE_SIZE");if(null!==c&&a("GET_ACTIVE_ITEMS").reduce((function(e,s){return e+s.fileSize}),0)>c)return void l({status:{main:a("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),sub:n(a("GET_LABEL_MAX_TOTAL_FILE_SIZE"),{filesize:r(c,".",a("GET_FILE_SIZE_BASE"),a("GET_FILE_SIZE_LABELS",a))})}});s(e)}}}))})),{options:{allowFileSizeValidation:[!0,l.BOOLEAN],maxFileSize:[null,l.INT],minFileSize:[null,l.INT],maxTotalFileSize:[null,l.INT],fileValidateSizeFilter:[null,l.FUNCTION],labelMinFileSizeExceeded:["File is too small",l.STRING],labelMinFileSize:["Minimum file size is {filesize}",l.STRING],labelMaxFileSizeExceeded:["File is too large",l.STRING],labelMaxFileSize:["Maximum file size is {filesize}",l.STRING],labelMaxTotalFileSizeExceeded:["Maximum total size exceeded",l.STRING],labelMaxTotalFileSize:["Maximum total file size is {filesize}",l.STRING]}}};return"undefined"!==typeof window&&"undefined"!==typeof window.document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:e})),e}()},30492:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/real-estate/add-property",function(){return a(2775)}])},48436:function(e,s,a){"use strict";var l=a(85893),n=a(66261);s.Z=function(e){return(0,l.jsx)(n.rU,{activeClass:e.activeClass,to:e.to,spy:e.spy,smooth:e.smooth,offset:e.offset,duration:e.duration,className:e.className,children:e.children})}},2775:function(e,s,a){"use strict";a.r(s);var l=a(85893),n=a(67294),r=a(50596),i=a(5152),t=a(41664),o=a.n(t),c=a(10682),d=a(21608),m=a(31555),u=a(26699),p=a(51479),h=a(35005),x=a(2086),f=a(28984),b=a(85460),j=a(16518),v=a(88375),N=a(6212),Z=a(27977),g=a(75698),y=a(48436),w=a(73042),E=a(90521),k=a.n(E),_=a(18236),I=a.n(_),S=a(72965),L=a.n(S),T=a(85180),C=a.n(T),P=a(63567),F=a.n(P),A=a(53863),G=a.n(A),B=a(57333),z=(a(36208),a(6067),a(65254),(0,i.default)((function(){return Promise.all([a.e(9269),a.e(2280)]).then(a.bind(a,42280)).then((function(e){return e.MapContainer}))}),{loadableGenerated:{webpack:function(){return[42280]}},ssr:!1})),O=(0,i.default)((function(){return Promise.all([a.e(9269),a.e(2280)]).then(a.bind(a,42280)).then((function(e){return e.TileLayer}))}),{loadableGenerated:{webpack:function(){return[42280]}},ssr:!1}),M=(0,i.default)((function(){return Promise.all([a.e(9269),a.e(2280)]).then(a.bind(a,42280)).then((function(e){return e.Popup}))}),{loadableGenerated:{webpack:function(){return[42280]}},ssr:!1}),D=(0,i.default)((function(){return Promise.all([a.e(9269),a.e(8142)]).then(a.bind(a,8142))}),{loadableGenerated:{webpack:function(){return[8142]}},ssr:!1});s.default=function(){var e=(0,n.useState)(!1),s=e[0],a=e[1],i=(0,n.useState)(!1),t=i[0],E=i[1],_=(0,n.useState)(!1),S=_[0],T=_[1],P=[[{icon:"fi-wifi",title:"Free WiFi"},{icon:"fi-thermometer",title:"Heating"},{icon:"fi-dish",title:"Dishwasher"},{icon:"fi-parking",title:"Parking place"},{icon:"fi-snowflake",title:"Air conditioning"},{icon:"fi-iron",title:"Iron"},{icon:"fi-tv",title:"TV"},{icon:"fi-laundry",title:"Laundry"},{icon:"fi-cctv",title:"Security cameras"}],[{icon:"fi-no-smoke",title:"No smocking"},{icon:"fi-pet",title:"Cats"},{icon:"fi-swimming-pool",title:"Swimming pool"},{icon:"fi-double-bed",title:"Double bed"},{icon:"fi-bed",title:"Single bed"}]],A=(0,n.useState)("4"),R=A[0],V=A[1],q=(0,n.useState)("2"),H=q[0],$=q[1],X=(0,n.useState)("2"),U=X[0],W=X[1];(0,w.fo)(k(),I(),L(),C(),F(),G());var Q=(0,n.useState)([]),Y=Q[0],J=Q[1];return(0,l.jsxs)(r.Z,{pageTitle:"Add Property",activeNav:"Vendor",userLoggedIn:!0,children:[(0,l.jsxs)(N.Z,{fullscreen:!0,show:s,onHide:function(){return a(!1)},children:[(0,l.jsxs)(N.Z.Header,{closeButton:!0,children:[(0,l.jsx)("h3",{className:"h5 text-muted fw-normal modal-title d-none d-sm-block text-nowrap",children:"Property preview"}),(0,l.jsxs)("div",{className:"d-flex align-items-center justify-content-sm-end w-100 ms-sm-auto",children:[(0,l.jsx)(o(),{href:"/real-estate/property-promotion",passHref:!0,children:(0,l.jsx)(h.Z,{size:"sm",className:"me-4",children:"Save and continue"})}),(0,l.jsx)("span",{className:"fs-xs text-muted ms-auto ms-sm-0 me-2",children:"[ESC]"})]})]}),(0,l.jsx)(N.Z.Body,{className:"p-0",children:(0,l.jsxs)(c.Z,{className:"mt-2 mt-sm-0 py-4 py-sm-5",children:[(0,l.jsx)("h1",{className:"h2 mb-2",children:"Pine Apartments"}),(0,l.jsx)("p",{className:"mb-2 pb-1 fs-lg",children:"28 Jackson Ave Long Island City, NY 67234"}),(0,l.jsxs)("ul",{className:"d-flex mb-4 list-unstyled",children:[(0,l.jsxs)("li",{className:"me-3 pe-3 border-end",children:[(0,l.jsx)("b",{className:"me-1",children:"4"}),(0,l.jsx)("i",{className:"fi-bed mt-n1 lead align-middle text-muted"})]}),(0,l.jsxs)("li",{className:"me-3 pe-3 border-end",children:[(0,l.jsx)("b",{className:"me-1",children:"2"}),(0,l.jsx)("i",{className:"fi-bath mt-n1 lead align-middle text-muted"})]}),(0,l.jsxs)("li",{className:"me-3 pe-3 border-end",children:[(0,l.jsx)("b",{className:"me-1",children:"2"}),(0,l.jsx)("i",{className:"fi-car mt-n1 lead align-middle text-muted"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"56 "}),"sq.m"]})]}),(0,l.jsx)("div",{className:"overflow-auto pb-3 px-2 mx-n2 mb-4",children:(0,l.jsxs)(d.Z,{className:"row g-2 g-md-3",style:{minWidth:"30rem"},children:[(0,l.jsx)(m.Z,{xs:8,className:"d-flex",children:(0,l.jsx)(g.Z,{src:"/images/real-estate/single/01.jpg",width:859,height:606,alt:"Gallery thumbnail",className:"rounded rounded-md-3"})}),(0,l.jsxs)(m.Z,{xs:4,children:[(0,l.jsx)("div",{className:"d-flex mb-2 mb-md-3",children:(0,l.jsx)(g.Z,{src:"/images/real-estate/single/02.jpg",width:421,height:296,alt:"Gallery thumbnail",className:"rounded rounded-md-3"})}),(0,l.jsx)("div",{className:"d-flex",children:(0,l.jsx)(g.Z,{src:"/images/real-estate/single/03.jpg",width:421,height:296,alt:"Gallery thumbnail",className:"rounded rounded-md-3"})})]})]})}),(0,l.jsx)(d.Z,{children:(0,l.jsxs)(m.Z,{md:7,className:"mb-md-0 mb-4",children:[(0,l.jsx)(Z.Z,{bg:"success",className:"me-2 mb-3",children:"Verified"}),(0,l.jsx)(Z.Z,{bg:"info",className:"me-2 mb-3",children:"New"}),(0,l.jsxs)("h2",{className:"h3 mb-4 pb-4 border-bottom",children:["$2,000",(0,l.jsx)("span",{className:"d-inline-block ms-1 fs-base fw-normal text-body",children:"/month"})]}),(0,l.jsxs)("div",{className:"mb-4 pb-md-3",children:[(0,l.jsx)("h3",{className:"h4",children:"Overview"}),(0,l.jsx)("p",{className:"mb-1",children:"Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu."}),(0,l.jsx)(j.Z,{in:t,children:(0,l.jsx)("div",{id:"moreOverview",children:(0,l.jsx)("p",{className:"mb-1",children:"Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa."})})}),(0,l.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),E(!t)},"aria-controls":"moreOverview","aria-expanded":t,className:"collapse-label".concat(t?"":" collapsed"),children:t?"Show less":"Show more"})]}),(0,l.jsxs)("div",{className:"mb-4 pb-md-3",children:[(0,l.jsx)("h3",{className:"h4",children:"Property Details"}),(0,l.jsxs)("ul",{className:"list-unstyled mb-0",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Type: "}),"apartment"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Apartment area: "}),"56 sq.m"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Built: "}),"2015"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Bedrooms: "}),"4"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Bathrooms: "}),"2"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Parking places: "}),"2"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Pets allowed: "}),"cats only"]})]})]}),(0,l.jsxs)("div",{className:"mb-sm-3",children:[(0,l.jsx)("h3",{className:"h4",children:"Amenities"}),(0,l.jsx)(d.Z,{as:"ul",xs:1,md:2,lg:3,className:"list-unstyled gy-1 mb-1 text-nowrap",children:P[0].map((function(e,s){var a=e.icon,n=e.title;return(0,l.jsxs)(m.Z,{as:"li",children:[(0,l.jsx)("i",{className:"".concat(a," mt-n1 me-2 fs-lg align-middle")}),n]},s)}))}),(0,l.jsx)(j.Z,{in:S,children:(0,l.jsx)("div",{id:"moreAmenities",children:(0,l.jsx)(d.Z,{as:"ul",xs:1,md:2,lg:3,className:"list-unstyled gy-1 mb-1 text-nowrap",children:P[1].map((function(e,s){var a=e.icon,n=e.title;return(0,l.jsxs)(m.Z,{as:"li",children:[(0,l.jsx)("i",{className:"".concat(a," mt-n1 me-2 fs-lg align-middle")}),n]},s)}))})})}),(0,l.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),T(!S)},"aria-controls":"moreAmenities","aria-expanded":S,className:"collapse-label".concat(S?"":" collapsed"),children:S?"Show less":"Show more"})]})]})})]})})]}),(0,l.jsx)(c.Z,{className:"mt-5 mb-md-4 py-5",children:(0,l.jsxs)(d.Z,{children:[(0,l.jsxs)(m.Z,{lg:8,children:[(0,l.jsxs)(u.Z,{className:"mb-3 pt-2 pt-lg-3",children:[(0,l.jsx)(o(),{href:"/real-estate",passHref:!0,children:(0,l.jsx)(u.Z.Item,{children:"Home"})}),(0,l.jsx)(u.Z.Item,{active:!0,children:"Add property"})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("h1",{className:"h2 mb-0",children:"Add property"}),(0,l.jsx)("div",{className:"d-lg-none pt-3 mb-2",children:"65% content filled"}),(0,l.jsx)(p.Z,{variant:"warning",now:65,style:{height:".25rem"},className:"d-lg-none mb-4"})]}),(0,l.jsxs)("section",{id:"basic-info",className:"card card-body border-0 shadow-sm p-4 mb-4",children:[(0,l.jsxs)("h2",{className:"h4 mb-4",children:[(0,l.jsx)("i",{className:"fi-info-circle text-primary fs-5 mt-n1 me-2"}),"Basic info"]}),(0,l.jsxs)(b.Z.Group,{controlId:"ap-title",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["Title ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsx)(b.Z.Control,{defaultValue:"Pine Apartments",placeholder:"Title of your property",required:!0}),(0,l.jsx)(b.Z.Text,{children:"48 characters left"})]}),(0,l.jsxs)(d.Z,{children:[(0,l.jsxs)(b.Z.Group,{as:m.Z,md:6,controlId:"ab-category",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["Category ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsxs)(b.Z.Select,{defaultValue:"rent",required:!0,children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Choose category"}),(0,l.jsx)("option",{value:"rent",children:"For rent"}),(0,l.jsx)("option",{value:"sale",children:"For sale"})]})]}),(0,l.jsxs)(b.Z.Group,{as:m.Z,md:6,controlId:"ab-property-type",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["Property type ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsxs)(b.Z.Select,{defaultValue:"rent",required:!0,children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Choose property type"}),(0,l.jsx)("option",{value:"apartment",children:"Apartment"}),(0,l.jsx)("option",{value:"house",children:"House"}),(0,l.jsx)("option",{value:"commercial",children:"Commercial"}),(0,l.jsx)("option",{value:"daily",children:"Daily rental"}),(0,l.jsx)("option",{value:"new",children:"New building"})]})]})]}),(0,l.jsx)("div",{className:"form-label fw-bold pt-3 pb-2",children:"Are you listing on Finder as part of a company?"}),(0,l.jsx)(b.Z.Check,{type:"radio",name:"businessType",id:"business",value:"Business",label:"I am a registered business"}),(0,l.jsx)(b.Z.Check,{type:"radio",name:"businessType",id:"private",value:"Private seller",label:"I am a private seller",defaultChecked:!0})]}),(0,l.jsxs)("section",{id:"location",className:"card card-body border-0 shadow-sm p-4 mb-4",children:[(0,l.jsxs)("h2",{className:"h4 mb-4",children:[(0,l.jsx)("i",{className:"fi-map-pin text-primary fs-5 mt-n1 me-2"}),"Location"]}),(0,l.jsxs)(d.Z,{children:[(0,l.jsxs)(b.Z.Group,{as:m.Z,sm:6,controlId:"ap-country",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["Country / region ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsxs)(b.Z.Select,{defaultValue:"US",required:!0,children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Choose country"}),(0,l.jsx)("option",{value:"Australia",children:"Australia"}),(0,l.jsx)("option",{value:"Belgium",children:"Belgium"}),(0,l.jsx)("option",{value:"Germany",children:"Germany"}),(0,l.jsx)("option",{value:"Canada",children:"Canada"}),(0,l.jsx)("option",{value:"US",children:"United States"})]})]}),(0,l.jsxs)(b.Z.Group,{as:m.Z,sm:6,controlId:"ap-city",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["City ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsxs)(b.Z.Select,{defaultValue:"New York",required:!0,children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Choose city"}),(0,l.jsx)("option",{value:"Chicago",children:"Chicago"}),(0,l.jsx)("option",{value:"Dallas",children:"Dallas"}),(0,l.jsx)("option",{value:"Los Angeles",children:"Los Angeles"}),(0,l.jsx)("option",{value:"New York",children:"New York"}),(0,l.jsx)("option",{value:"San Diego",children:"San Diego"})]})]}),(0,l.jsxs)(b.Z.Group,{as:m.Z,sm:8,controlId:"ap-district",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["District ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsxs)(b.Z.Select,{defaultValue:"Queens",required:!0,children:[(0,l.jsx)("option",{value:"",disabled:!0,children:"Choose district"}),(0,l.jsx)("option",{value:"Brooklyn",children:"Brooklyn"}),(0,l.jsx)("option",{value:"Manhattan",children:"Manhattan"}),(0,l.jsx)("option",{value:"Staten Island",children:"Staten Island"}),(0,l.jsx)("option",{value:"The Bronx",children:"The Bronx"}),(0,l.jsx)("option",{value:"Queens",children:"Queens"})]})]}),(0,l.jsxs)(b.Z.Group,{as:m.Z,sm:4,controlId:"ap-zip",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["Zip code ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsx)(b.Z.Control,{defaultValue:"67234",placeholder:"Enter Zip code",required:!0})]}),(0,l.jsxs)(b.Z.Group,{as:m.Z,sm:12,controlId:"ap-address",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["Street address ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsx)(b.Z.Control,{defaultValue:"28 Jackson Avenue",required:!0})]})]}),(0,l.jsx)(b.Z.Label,{className:"fw-bold pt-3 pb-2",children:"Display on the map"}),(0,l.jsxs)(z,{center:[40.7447,-73.9485],zoom:13,scrollWheelZoom:!1,style:{height:"250px"},children:[(0,l.jsx)(O,{url:"https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx",tileSize:512,zoomOffset:-1,minZoom:1,attribution:"<a href='https://www.maptiler.com/copyright/' target='_blank'>&copy; MapTiler</a> <a href='https://www.openstreetmap.org/copyright' target='_blank'>&copy; OpenStreetMap contributors</a>"}),(0,l.jsx)(D,{position:[40.7447,-73.9485],icon:"dot",children:(0,l.jsx)(M,{children:(0,l.jsxs)("div",{className:"p-3",children:[(0,l.jsx)("h6",{children:"Pine Apartments"}),(0,l.jsx)("p",{className:"fs-xs text-muted pt-1 mt-n3 mb-0",children:"28 Jackson Ave Long Island City, NY"})]})})})]})]}),(0,l.jsxs)("section",{id:"details",className:"card card-body border-0 shadow-sm p-4 mb-4",children:[(0,l.jsxs)("h2",{className:"h4 mb-4",children:[(0,l.jsx)("i",{className:"fi-edit text-primary fs-5 mt-n1 me-2"}),"Property details"]}),(0,l.jsxs)(b.Z.Group,{controlId:"ap-area",className:"mb-4",style:{maxWidth:"25rem"},children:[(0,l.jsx)(b.Z.Label,{children:"Total area, sq.m"}),(0,l.jsx)(b.Z.Control,{type:"number",defaultValue:56,min:20,placeholder:"Enter your area"})]}),(0,l.jsxs)(b.Z.Group,{className:"mb-4",children:[(0,l.jsx)(b.Z.Label,{className:"d-block fw-bold mb-2 pb-1",children:"Bedrooms"}),(0,l.jsx)(x.Z,{size:"sm",children:[{name:"Studio",value:"studio"},{name:"1",value:"1"},{name:"2",value:"2"},{name:"3",value:"3"},{name:"4",value:"4"},{name:"5+",value:"5+"}].map((function(e,s){return(0,l.jsx)(f.Z,{type:"radio",id:"bedrooms-".concat(s),name:"bedrooms",value:e.value,checked:R===e.value,onChange:function(e){return V(e.currentTarget.value)},variant:"outline-secondary fw-normal",children:e.name},s)}))})]}),(0,l.jsxs)(b.Z.Group,{className:"mb-4",children:[(0,l.jsx)(b.Z.Label,{className:"d-block fw-bold mb-2 pb-1",children:"Bathrooms"}),(0,l.jsx)(x.Z,{size:"sm",children:[{name:"1",value:"1"},{name:"2",value:"2"},{name:"3",value:"3"},{name:"4",value:"4"}].map((function(e,s){return(0,l.jsx)(f.Z,{type:"radio",id:"bathrooms-".concat(s),name:"bathrooms",value:e.value,checked:H===e.value,onChange:function(e){return $(e.currentTarget.value)},variant:"outline-secondary fw-normal",children:e.name},s)}))})]}),(0,l.jsxs)(b.Z.Group,{className:"mb-4",children:[(0,l.jsx)(b.Z.Label,{className:"d-block fw-bold mb-2 pb-1",children:"Parking spots"}),(0,l.jsx)(x.Z,{size:"sm",children:[{name:"1",value:"1"},{name:"2",value:"2"},{name:"3",value:"3"},{name:"4",value:"4"}].map((function(e,s){return(0,l.jsx)(f.Z,{type:"radio",id:"parkings-".concat(s),name:"parkings",value:e.value,checked:U===e.value,onChange:function(e){return W(e.currentTarget.value)},variant:"outline-secondary fw-normal",children:e.name},s)}))})]}),(0,l.jsxs)(b.Z.Group,{className:"mb-4",children:[(0,l.jsx)(b.Z.Label,{className:"d-block fw-bold mb-2 pb-1",children:"Amenities"}),(0,l.jsx)(d.Z,{xs:1,sm:3,children:[{value:"WiFi",checked:!0},{value:"Pets-friendly",checked:!1},{value:"Dishwasher",checked:!1},{value:"Air conditioning",checked:!0},{value:"Pool",checked:!1},{value:"Iron",checked:!0},{value:"Balcony",checked:!1},{value:"Bar",checked:!1},{value:"Hair dryer",checked:!0},{value:"Garage",checked:!1},{value:"TV",checked:!0},{value:"Kitchen",checked:!0},{value:"Gym",checked:!1},{value:"Linens",checked:!0},{value:"Breakfast",checked:!1},{value:"Free parking",checked:!0},{value:"Heating",checked:!0},{value:"Security cameras",checked:!1}].map((function(e,s){return(0,l.jsx)(m.Z,{children:(0,l.jsx)(b.Z.Check,{type:"checkbox",id:"amenities-".concat(s),value:e.value,label:e.value,defaultChecked:e.checked})},s)}))})]}),(0,l.jsxs)(b.Z.Group,{className:"mb-4",children:[(0,l.jsx)(b.Z.Label,{className:"d-block fw-bold mb-2 pb-1",children:"Pets"}),(0,l.jsx)(d.Z,{xs:1,sm:3,children:(0,l.jsx)(m.Z,{children:[{value:"Cats allowed",checked:!1},{value:"Dogs allowed",checked:!1}].map((function(e,s){return(0,l.jsx)(b.Z.Check,{type:"checkbox",id:"pets-".concat(s),value:e.value,label:e.value,defaultChecked:e.checked},s)}))})})]}),(0,l.jsxs)(b.Z.Group,{controlId:"ap-description",children:[(0,l.jsx)(b.Z.Label,{children:"Description"}),(0,l.jsx)(b.Z.Control,{as:"textarea",rows:5,placeholder:"Describe your property"}),(0,l.jsx)(b.Z.Text,{children:"1500 characters left"})]})]}),(0,l.jsxs)("section",{id:"price",className:"card card-body border-0 shadow-sm p-4 mb-4",children:[(0,l.jsxs)("h2",{className:"h4 mb-4",children:[(0,l.jsx)("i",{className:"fi-cash text-primary fs-5 mt-n1 me-2"}),"Price"]}),(0,l.jsxs)(b.Z.Label,{htmlFor:"ap-price",children:["Price ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsxs)("div",{className:"d-sm-flex",children:[(0,l.jsxs)(b.Z.Select,{className:"w-25 me-2 mb-2",children:[(0,l.jsx)("option",{value:"usd",children:"$"}),(0,l.jsx)("option",{value:"eur",children:"\u20ac"}),(0,l.jsx)("option",{value:"gbp",children:"\xa3"}),(0,l.jsx)("option",{value:"jpy",children:"\xa5"})]}),(0,l.jsx)(b.Z.Control,{id:"ap-price",type:"number",min:200,step:50,className:"w-100 me-2 mb-2",required:!0}),(0,l.jsxs)(b.Z.Select,{defaultValue:"month",className:"w-50 mb-2",children:[(0,l.jsx)("option",{value:"day",children:"per day"}),(0,l.jsx)("option",{value:"week",children:"per week"}),(0,l.jsx)("option",{value:"month",children:"per month"}),(0,l.jsx)("option",{value:"year",children:"per year"})]})]})]}),(0,l.jsxs)("section",{id:"photos",className:"card card-body border-0 shadow-sm p-4 mb-4",children:[(0,l.jsxs)("h2",{className:"h4 mb-4",children:[(0,l.jsx)("i",{className:"fi-image text-primary fs-5 mt-n1 me-2"}),"Photos / video"]}),(0,l.jsxs)(v.Z,{variant:"info",className:"d-flex mb-4",children:[(0,l.jsx)("i",{className:"fi-alert-circle me-2 me-sm-3"}),(0,l.jsxs)("p",{className:"fs-sm mb-1",children:["The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.",(0,l.jsx)("br",{}),"The maximum video size is 10 MB. Formats: mp4, mov."]})]}),(0,l.jsx)(w.Q9,{files:Y,onupdatefiles:J,name:"gallery",labelIdle:'<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div>or drag them in</div>',acceptedFileTypes:["image/png","image/jpeg","video/mp4","video/mov"],allowMultiple:!0,maxFiles:4,maxFileSize:"2MB",className:"file-uploader file-uploader-grid"})]}),(0,l.jsxs)("section",{id:"contacts",className:"card card-body border-0 shadow-sm p-4 mb-4",children:[(0,l.jsxs)("h2",{className:"h4 mb-4",children:[(0,l.jsx)("i",{className:"fi-phone text-primary fs-5 mt-n1 me-2"}),"Contacts"]}),(0,l.jsxs)(d.Z,{children:[(0,l.jsxs)(b.Z.Group,{as:m.Z,sm:6,controlId:"ab-fn",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["First name ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsx)(b.Z.Control,{defaultValue:"Annette",placeholder:"Enter your first name",required:!0})]}),(0,l.jsxs)(b.Z.Group,{as:m.Z,sm:6,controlId:"ab-sn",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["Second name ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsx)(b.Z.Control,{defaultValue:"Black",placeholder:"Enter your second name",required:!0})]}),(0,l.jsxs)(b.Z.Group,{as:m.Z,sm:6,controlId:"ab-email",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["Email ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsx)(b.Z.Control,{type:"email",defaultValue:"annette_black@email.com",placeholder:"Enter your email address",required:!0})]}),(0,l.jsxs)(b.Z.Group,{as:m.Z,sm:6,controlId:"ab-phone",className:"mb-3",children:[(0,l.jsxs)(b.Z.Label,{children:["Phone number ",(0,l.jsx)("span",{className:"text-danger",children:"*"})]}),(0,l.jsx)(b.Z.Control,{as:B.Z,format:"+1(##) ###-####",defaultValue:"+1(39) 555-0107",placeholder:"+1(00) 000-0000",required:!0})]}),(0,l.jsxs)(b.Z.Group,{as:m.Z,xs:12,controlId:"ab-company",className:"mb-3",children:[(0,l.jsx)(b.Z.Label,{children:"Company"}),(0,l.jsx)(b.Z.Control,{placeholder:"Enter company name"})]})]})]}),(0,l.jsxs)("section",{className:"d-sm-flex justify-content-between pt-2",children:[(0,l.jsxs)(h.Z,{size:"lg",variant:"outline-primary d-block w-100 w-sm-auto mb-3 mb-sm-2",onClick:function(){return a(!0)},children:[(0,l.jsx)("i",{className:"fi-eye-on ms-n1 me-2"}),"Preview"]}),(0,l.jsx)(o(),{href:"/real-estate/property-promotion",passHref:!0,children:(0,l.jsx)(h.Z,{size:"lg",variant:"primary d-block w-100 w-sm-auto mb-2",children:"Save and continue"})})]})]}),(0,l.jsx)(m.Z,{lg:{span:3,offset:1},className:"d-none d-lg-block",children:(0,l.jsxs)("div",{className:"sticky-top pt-5",children:[(0,l.jsx)("h6",{className:"pt-5 mt-3 mb-2",children:"65% content filled"}),(0,l.jsx)(p.Z,{variant:"warning",now:65,style:{height:".25rem"},className:"mb-4"}),(0,l.jsx)("ul",{className:"list-unstyled",children:[{to:"basic-info",label:"Basic info",completed:!0},{to:"location",label:"Location",completed:!0},{to:"details",label:"Property details",completed:!0},{to:"price",label:"Price range",completed:!1},{to:"photos",label:"Photos / video",completed:!1},{to:"contacts",label:"Contacts",completed:!0}].map((function(e,s){return(0,l.jsxs)("li",{className:"d-flex align-items-center",children:[(0,l.jsx)("i",{className:"fi-check text-".concat(e.completed?"primary":"muted"," me-2")}),(0,l.jsx)(y.Z,{to:e.to,smooth:"easeInOutQuart",duration:600,offset:-95,className:"nav-link fw-normal ps-1 p-0",children:e.label})]},s)}))})]})})]})})]})}},65254:function(){},27977:function(e,s,a){"use strict";var l=a(94184),n=a.n(l),r=a(67294),i=a(76792),t=a(85893);const o=r.forwardRef((({bsPrefix:e,bg:s,pill:a,text:l,className:r,as:o="span",...c},d)=>{const m=(0,i.vE)(e,"badge");return(0,t.jsx)(o,{ref:d,...c,className:n()(r,m,a&&"rounded-pill",l&&`text-${l}`,s&&`bg-${s}`)})}));o.displayName="Badge",o.defaultProps={bg:"primary",pill:!1},s.Z=o},26699:function(e,s,a){"use strict";a.d(s,{Z:function(){return u}});var l=a(94184),n=a.n(l),r=a(67294),i=a(76792),t=a(13551),o=a(85893);const c=r.forwardRef((({bsPrefix:e,active:s,children:a,className:l,as:r="li",linkAs:c=t.Z,linkProps:d,href:m,title:u,target:p,...h},x)=>{const f=(0,i.vE)(e,"breadcrumb-item");return(0,o.jsx)(r,{ref:x,...h,className:n()(f,l,{active:s}),"aria-current":s?"page":void 0,children:s?a:(0,o.jsx)(c,{...d,href:m,title:u,target:p,children:a})})}));c.displayName="BreadcrumbItem",c.defaultProps={active:!1,linkProps:{}};var d=c;const m=r.forwardRef((({bsPrefix:e,className:s,listProps:a,children:l,label:r,as:t="nav",...c},d)=>{const m=(0,i.vE)(e,"breadcrumb");return(0,o.jsx)(t,{"aria-label":r,className:s,ref:d,...c,children:(0,o.jsx)("ol",{...a,className:n()(m,null==a?void 0:a.className),children:l})})}));m.displayName="Breadcrumb",m.defaultProps={label:"breadcrumb",listProps:{}};var u=Object.assign(m,{Item:d})},2086:function(e,s,a){"use strict";var l=a(94184),n=a.n(l),r=a(67294),i=a(76792),t=a(85893);const o=r.forwardRef((({bsPrefix:e,size:s,vertical:a,className:l,as:r="div",...o},c)=>{const d=(0,i.vE)(e,"btn-group");let m=d;return a&&(m=`${d}-vertical`),(0,t.jsx)(r,{...o,ref:c,className:n()(l,m,s&&`${d}-${s}`)})}));o.displayName="ButtonGroup",o.defaultProps={vertical:!1,role:"group"},s.Z=o},59862:function(e,s,a){"use strict";a.d(s,{Z:function(){return F}});var l=a(90424),n=a(67294),r=a(94044),i=(a(42473),a(15446)),t=a(35654),o=a(94184),c=a.n(o),d=a(73935),m=a(32092),u=a(77086),p=a(72950),h=a(67216),x=a(78146),f=a(5680);const b=()=>{};var j=function(e,s,{disabled:a,clickTrigger:l}={}){const r=s||b;(0,f.Z)(e,r,{disabled:a,clickTrigger:l});const i=(0,x.Z)((e=>{27===e.keyCode&&r(e)}));(0,n.useEffect)((()=>{if(a||null==e)return;const s=(0,h.Z)((0,f.f)(e));let l=(s.defaultView||window).event;const n=(0,p.Z)(s,"keyup",(e=>{e!==l?i(e):l=void 0}));return()=>{n()}}),[e,a,i])},v=a(54194),N=a(90012),Z=a(85893);const g=n.forwardRef(((e,s)=>{const{flip:a,offset:l,placement:r,containerPadding:i,popperConfig:o={},transition:c}=e,[p,h]=(0,m.Z)(),[x,f]=(0,m.Z)(),b=(0,t.Z)(h,s),g=(0,v.Z)(e.container),y=(0,v.Z)(e.target),[w,E]=(0,n.useState)(!e.show),k=(0,u.Z)(y,p,(0,N.ZP)({placement:r,enableEvents:!!e.show,containerPadding:i||5,flip:a,offset:l,arrowElement:x,popperConfig:o}));e.show?w&&E(!1):e.transition||w||E(!0);const _=(...s)=>{E(!0),e.onExited&&e.onExited(...s)},I=e.show||c&&!w;if(j(p,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!I)return null;let S=e.children(Object.assign({},k.attributes.popper,{style:k.styles.popper,ref:b}),{popper:k,placement:r,show:!!e.show,arrowProps:Object.assign({},k.attributes.arrow,{style:k.styles.arrow,ref:f})});if(c){const{onExit:s,onExiting:a,onEnter:l,onEntering:n,onEntered:r}=e;S=(0,Z.jsx)(c,{in:e.show,appear:!0,onExit:s,onExiting:a,onExited:_,onEnter:l,onEntering:n,onEntered:r,children:S})}return g?d.createPortal(S,g):null}));g.displayName="Overlay";var y=g,w=a(11132),E=a(76792),k=a(40755);var _=a(41068),I=a(8285);const S={transition:_.Z,rootClose:!1,show:!1,placement:"top"};const L=n.forwardRef((({children:e,transition:s,popperConfig:a={},...l},r)=>{const i=(0,n.useRef)({}),[o,d]=function(e){const s=(0,n.useRef)(null),a=(0,E.vE)(void 0,"popover"),l=(0,n.useMemo)((()=>({name:"offset",options:{offset:()=>s.current&&(0,w.Z)(s.current,a)?e||k.Z.POPPER_OFFSET:e||[0,0]}})),[e,a]);return[s,[l]]}(l.offset),m=(0,t.Z)(r,o),u=!0===s?_.Z:s||void 0;return(0,Z.jsx)(y,{...l,ref:m,popperConfig:{...a,modifiers:d.concat(a.modifiers||[])},transition:u,children:(a,{arrowProps:l,popper:r,show:t})=>{var o,d;!function(e,s){const{ref:a}=e,{ref:l}=s;e.ref=a.__wrapped||(a.__wrapped=e=>a((0,I.Z)(e))),s.ref=l.__wrapped||(l.__wrapped=e=>l((0,I.Z)(e)))}(a,l);const m=null==r?void 0:r.placement,u=Object.assign(i.current,{state:null==r?void 0:r.state,scheduleUpdate:null==r?void 0:r.update,placement:m,outOfBoundaries:(null==r||null==(o=r.state)||null==(d=o.modifiersData.hide)?void 0:d.isReferenceHidden)||!1});return"function"===typeof e?e({...a,placement:m,show:t,...!s&&t&&{className:"show"},popper:u,arrowProps:l}):n.cloneElement(e,{...a,placement:m,arrowProps:l,popper:u,className:c()(e.props.className,!s&&t&&"show"),style:{...e.props.style,...a.style}})}})}));L.displayName="Overlay",L.defaultProps=S;var T=L;function C(e,s,a){const[n]=s,r=n.currentTarget,i=n.relatedTarget||n.nativeEvent[a];i&&i===r||(0,l.Z)(r,i)||e(...s)}function P({trigger:e,overlay:s,children:a,popperConfig:l={},show:o,defaultShow:c=!1,onToggle:d,delay:m,placement:u,flip:p=u&&-1!==u.indexOf("auto"),...h}){const x=(0,n.useRef)(null),f=(0,t.Z)(x,a.ref),b=(0,r.Z)(),j=(0,n.useRef)(""),[v,N]=(0,i.$c)(o,c,d),g=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(m),{onFocus:y,onBlur:w,onClick:E}="function"!==typeof a?n.Children.only(a).props:{},k=(0,n.useCallback)((()=>{b.clear(),j.current="show",g.show?b.set((()=>{"show"===j.current&&N(!0)}),g.show):N(!0)}),[g.show,N,b]),_=(0,n.useCallback)((()=>{b.clear(),j.current="hide",g.hide?b.set((()=>{"hide"===j.current&&N(!1)}),g.hide):N(!1)}),[g.hide,N,b]),S=(0,n.useCallback)(((...e)=>{k(),null==y||y(...e)}),[k,y]),L=(0,n.useCallback)(((...e)=>{_(),null==w||w(...e)}),[_,w]),P=(0,n.useCallback)(((...e)=>{N(!v),null==E||E(...e)}),[E,N,v]),F=(0,n.useCallback)(((...e)=>{C(k,e,"fromElement")}),[k]),A=(0,n.useCallback)(((...e)=>{C(_,e,"toElement")}),[_]),G=null==e?[]:[].concat(e),B={ref:e=>{f((0,I.Z)(e))}};return-1!==G.indexOf("click")&&(B.onClick=P),-1!==G.indexOf("focus")&&(B.onFocus=S,B.onBlur=L),-1!==G.indexOf("hover")&&(B.onMouseOver=F,B.onMouseOut=A),(0,Z.jsxs)(Z.Fragment,{children:["function"===typeof a?a(B):(0,n.cloneElement)(a,B),(0,Z.jsx)(T,{...h,show:v,onHide:_,flip:p,placement:u,popperConfig:l,target:x.current,children:s})]})}P.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var F=P},40755:function(e,s,a){"use strict";a.d(s,{Z:function(){return p}});var l=a(94184),n=a.n(l),r=a(67294),i=a(76792),t=a(66611),o=(0,t.Z)("popover-header"),c=(0,t.Z)("popover-body"),d=a(79883),m=a(85893);const u=r.forwardRef((({bsPrefix:e,placement:s,className:a,style:l,children:r,body:t,arrowProps:o,popper:u,show:p,...h},x)=>{const f=(0,i.vE)(e,"popover"),b=(0,i.SC)(),[j]=(null==s?void 0:s.split("-"))||[],v=(0,d.z)(j,b);return(0,m.jsxs)("div",{ref:x,role:"tooltip",style:l,"x-placement":j,className:n()(a,f,j&&`bs-popover-${v}`),...h,children:[(0,m.jsx)("div",{className:"popover-arrow",...o}),t?(0,m.jsx)(c,{children:r}):r]})}));u.defaultProps={placement:"right"};var p=Object.assign(u,{Header:o,Body:c,POPPER_OFFSET:[0,8]})},51479:function(e,s,a){"use strict";var l=a(94184),n=a.n(l),r=a(67294),i=a(76792),t=a(53439),o=a(85893);function c(e,s,a){const l=(e-s)/(a-s)*100;return Math.round(1e3*l)/1e3}function d({min:e,now:s,max:a,label:l,visuallyHidden:r,striped:i,animated:t,className:d,style:m,variant:u,bsPrefix:p,...h},x){return(0,o.jsx)("div",{ref:x,...h,role:"progressbar",className:n()(d,`${p}-bar`,{[`bg-${u}`]:u,[`${p}-bar-animated`]:t,[`${p}-bar-striped`]:t||i}),style:{width:`${c(s,e,a)}%`,...m},"aria-valuenow":s,"aria-valuemin":e,"aria-valuemax":a,children:r?(0,o.jsx)("span",{className:"visually-hidden",children:l}):l})}const m=r.forwardRef((({isChild:e,...s},a)=>{if(s.bsPrefix=(0,i.vE)(s.bsPrefix,"progress"),e)return d(s,a);const{min:l,now:c,max:m,label:u,visuallyHidden:p,striped:h,animated:x,bsPrefix:f,variant:b,className:j,children:v,...N}=s;return(0,o.jsx)("div",{ref:a,...N,className:n()(j,f),children:v?(0,t.UI)(v,(e=>(0,r.cloneElement)(e,{isChild:!0}))):d({min:l,now:c,max:m,label:u,visuallyHidden:p,striped:h,animated:x,bsPrefix:f,variant:b},a)})}));m.displayName="ProgressBar",m.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},s.Z=m},28984:function(e,s,a){"use strict";var l=a(94184),n=a.n(l),r=a(67294),i=a(76792),t=a(35005),o=a(85893);const c=()=>{},d=r.forwardRef((({bsPrefix:e,name:s,className:a,checked:l,type:r,onChange:d,value:m,disabled:u,id:p,inputRef:h,...x},f)=>(e=(0,i.vE)(e,"btn-check"),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{className:e,name:s,type:r,value:m,ref:h,autoComplete:"off",checked:!!l,disabled:!!u,onChange:d||c,id:p}),(0,o.jsx)(t.Z,{...x,ref:f,className:n()(a,u&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:p})]}))));d.displayName="ToggleButton",s.Z=d},43489:function(e,s,a){"use strict";var l=a(94184),n=a.n(l),r=a(67294),i=a(76792),t=a(79883),o=a(85893);const c=r.forwardRef((({bsPrefix:e,placement:s,className:a,style:l,children:r,arrowProps:c,popper:d,show:m,...u},p)=>{e=(0,i.vE)(e,"tooltip");const h=(0,i.SC)(),[x]=(null==s?void 0:s.split("-"))||[],f=(0,t.z)(x,h);return(0,o.jsxs)("div",{ref:p,style:l,role:"tooltip","x-placement":x,className:n()(a,e,`bs-tooltip-${f}`),...u,children:[(0,o.jsx)("div",{className:"tooltip-arrow",...c}),(0,o.jsx)("div",{className:`${e}-inner`,children:r})]})}));c.defaultProps={placement:"right"},c.displayName="Tooltip",s.Z=c},79883:function(e,s,a){"use strict";a.d(s,{z:function(){return n}});var l=a(67294);l.Component;function n(e,s){let a=e;return"left"===e?a=s?"end":"start":"right"===e&&(a=s?"start":"end"),a}}},function(e){e.O(0,[7719,3675,4222,4567,2141,8279,9331,2063,5152,6041,5299,5592,7608,596,9774,2888,179],(function(){return s=30492,e(e.s=s);var s}));var s=e.O();_N_E=s}]);