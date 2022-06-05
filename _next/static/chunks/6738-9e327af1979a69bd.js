"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6738],{53667:function(e,s,a){var n=a(85893),i=a(75698);function r(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function t(e,s){if(null==e)return{};var a,n,i=function(e,s){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],s.indexOf(a)>=0||(i[a]=e[a]);return i}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}s.Z=function(e){var s=e.img,a=e.size,l=e.rounded,c=e.light,d=e.className,m=t(e,["img","size","rounded","light","className"]);return(0,n.jsx)("div",function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(s){r(e,s,a[s])}))}return e}({},m,{className:"position-relative ".concat(l?"rounded-".concat(l):"rounded-circle"," overflow-hidden").concat(d?" ".concat(d):""),style:a?{width:a[0],height:a[1]}:{width:"48px",height:"48px"},children:s&&(0,n.jsx)(i.Z,{src:s.src,layout:"fill",objectFit:"cover",quality:90,alt:s.alt,light:c?1:0})}))}},96738:function(e,s,a){var n=a(85893),i=a(67294),r=a(41664),t=a.n(r),l=a(10682),c=a(26699),d=a(53667),m=a(69463),o=a(16518),f=a(59862),u=a(43489),h=a(35005);s.Z=function(e){var s=e.accountPageTitle,a=e.activeAccountNav,r=e.children;(0,i.useEffect)((function(){var e=document.querySelector("body");return document.body.classList.add("bg-secondary"),function(){return e.classList.remove("bg-secondary")}}));var b=(0,i.useState)(!1),x=b[0],j=b[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"position-absolute top-0 start-0 w-100 bg-dark",style:{height:"398px"}}),(0,n.jsxs)(l.Z,{as:"section",className:"content-overlay mt-5 mb-md-4 py-5",children:[(0,n.jsxs)(c.Z,{className:"breadcrumb-light mb-3 mb-md-4 pt-md-3",children:[(0,n.jsx)(t(),{href:"/job-board",passHref:!0,children:(0,n.jsx)(c.Z.Item,{children:"Home"})}),(0,n.jsx)(t(),{href:"/job-board/account-profile",passHref:!0,children:(0,n.jsx)(c.Z.Item,{children:"Account"})}),(0,n.jsx)(c.Z.Item,{active:!0,children:s})]}),(0,n.jsxs)("div",{className:"bg-light shadow-sm rounded-3 p-4 p-md-5 mb-2",children:[(0,n.jsxs)("div",{className:"d-flex align-items-start justify-content-between pb-4 mb-2",children:[(0,n.jsxs)("div",{className:"d-flex align-items-start",children:[(0,n.jsxs)("div",{className:"position-relative flex-shrink-0",children:[(0,n.jsx)(d.Z,{img:{src:"/antiru/images/avatars/37.png",alt:"Avatar"},size:[100,100]}),(0,n.jsx)(f.Z,{placement:"top",overlay:(0,n.jsx)(u.Z,{children:"Change image"}),children:(0,n.jsx)(h.Z,{size:"xs",variant:"light btn-icon rounded-circle shadow-sm",className:"position-absolute end-0 bottom-0",children:(0,n.jsx)("i",{className:"fi-pencil fs-xs"})})})]}),(0,n.jsxs)("div",{className:"ps-3 ps-sm-4",children:[(0,n.jsx)("h3",{className:"h5",children:"Annette Black"}),(0,n.jsxs)("ul",{className:"list-unstyled fs-sm mb-0",children:[(0,n.jsxs)("li",{className:"d-flex text-nav text-break",children:[(0,n.jsx)("i",{className:"fi-mail opacity-60 mt-1 me-2"}),(0,n.jsx)("span",{children:"annette_black@email.com"})]}),(0,n.jsxs)("li",{className:"d-flex text-nav text-break",children:[(0,n.jsx)("i",{className:"fi-phone opacity-60 mt-1 me-2"}),(0,n.jsx)("span",{children:"(302) 555-0107"})]})]})]})]}),(0,n.jsx)(t(),{href:"/signin-light",passHref:!0,children:(0,n.jsxs)("a",{className:"nav-link p-0 d-none d-md-block",children:[(0,n.jsx)("i",{className:"fi-logout mt-n1 me-2"}),"Sign out"]})})]}),(0,n.jsxs)(h.Z,{size:"lg",variant:"outline-primary rounded-pill",onClick:function(){return j(!x)},"aria-controls":"account-menu","aria-expanded":x,className:"d-md-none w-100",children:[(0,n.jsx)("i",{className:"fi-align-justify me-2"}),"Account Menu"]}),(0,n.jsx)(o.Z,{in:x,children:(0,n.jsx)("div",{id:"account-menu-mobile",className:"d-md-block",children:(0,n.jsxs)(m.Z,{variant:"pills",defaultActiveKey:a,className:"flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md",children:[(0,n.jsx)(m.Z.Item,{className:"mb-md-0 me-md-2 pe-md-1",children:(0,n.jsx)(t(),{href:"/job-board/account-profile",passHref:!0,children:(0,n.jsxs)(m.Z.Link,{children:[(0,n.jsx)("i",{className:"fi-settings mt-n1 me-2 fs-base"}),"Profile Settings"]})})}),(0,n.jsx)(m.Z.Item,{className:"mb-md-0 me-md-2 pe-md-1",children:(0,n.jsx)(t(),{href:"/job-board/account-resumes",passHref:!0,children:(0,n.jsxs)(m.Z.Link,{children:[(0,n.jsx)("i",{className:"fi-file mt-n1 me-2 fs-base"}),"My Resumes"]})})}),(0,n.jsx)(m.Z.Item,{className:"mb-md-0 me-md-2 pe-md-1",children:(0,n.jsx)(t(),{href:"/job-board/account-saved-jobs",passHref:!0,children:(0,n.jsxs)(m.Z.Link,{children:[(0,n.jsx)("i",{className:"fi-heart mt-n1 me-2 fs-base"}),"Saved Jobs"]})})}),(0,n.jsx)(m.Z.Item,{className:"mb-md-0 me-md-2 pe-md-1",children:(0,n.jsx)(t(),{href:"/job-board/account-notifications",passHref:!0,children:(0,n.jsxs)(m.Z.Link,{children:[(0,n.jsx)("i",{className:"fi-bell mt-n1 me-2 fs-base"}),"Notifications"]})})}),(0,n.jsx)(m.Z.Item,{className:"mb-md-0 me-md-2 pe-md-1 d-md-none",children:(0,n.jsx)(t(),{href:"/signin-light",passHref:!0,children:(0,n.jsxs)(m.Z.Link,{children:[(0,n.jsx)("i",{className:"fi-logout mt-n1 me-2 fs-base"}),"Sign Out"]})})})]})})}),r]})]})]})}},26699:function(e,s,a){a.d(s,{Z:function(){return f}});var n=a(94184),i=a.n(n),r=a(67294),t=a(76792),l=a(13551),c=a(85893);const d=r.forwardRef((({bsPrefix:e,active:s,children:a,className:n,as:r="li",linkAs:d=l.Z,linkProps:m,href:o,title:f,target:u,...h},b)=>{const x=(0,t.vE)(e,"breadcrumb-item");return(0,c.jsx)(r,{ref:b,...h,className:i()(x,n,{active:s}),"aria-current":s?"page":void 0,children:s?a:(0,c.jsx)(d,{...m,href:o,title:f,target:u,children:a})})}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var m=d;const o=r.forwardRef((({bsPrefix:e,className:s,listProps:a,children:n,label:r,as:l="nav",...d},m)=>{const o=(0,t.vE)(e,"breadcrumb");return(0,c.jsx)(l,{"aria-label":r,className:s,ref:m,...d,children:(0,c.jsx)("ol",{...a,className:i()(o,null==a?void 0:a.className),children:n})})}));o.displayName="Breadcrumb",o.defaultProps={label:"breadcrumb",listProps:{}};var f=Object.assign(o,{Item:m})}}]);