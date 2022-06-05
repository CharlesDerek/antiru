(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5410],{60664:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/browser-support",function(){return r(58196)}])},75698:function(e,t,r){"use strict";var s=r(85893),o=r(25675),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.Z=function(e){var t,r,o,a=e.width,c=e.height,l=e.alt,d=e.placeholder,u=e.light;return(0,s.jsx)(n(),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(t){i(e,t,r[t])}))}return e}({},e,{placeholder:!1===d?"empty":"blur",blurDataURL:"data:image/svg+xml;base64,".concat((r=a,o=c,t='\n    <svg width="'.concat(r,'" height="').concat(o,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <defs>\n        <linearGradient id="g">\n          <stop stop-color="').concat(u?"#352e44":"#efedf0",'" offset="20%" />\n          <stop stop-color="').concat(u?"#1f1b2d":"#d8d7da",'" offset="50%" />\n          <stop stop-color="').concat(u?"#352e44":"#efedf0",'" offset="70%" />\n        </linearGradient>\n      </defs>\n      <rect width="').concat(r,'" height="').concat(o,'" fill="').concat(u?"#352e44":"#efedf0",'" />\n      <rect id="r" width="').concat(r,'" height="').concat(o,'" fill="url(#g)" />\n      <animate xlink:href="#r" attributeName="x" from="-').concat(r,'" to="').concat(r,'" dur="1s" repeatCount="indefinite"  />\n    </svg>'),window.btoa(t))),alt:l}))}},58196:function(e,t,r){"use strict";r.r(t);var s=r(85893),o=r(64196),n=r(75698);t.default=function(){return(0,s.jsx)(o.Z,{pageTitle:"Browser support",activeNav:"/docs/browser-support",children:(0,s.jsxs)("div",{className:"pb-5",children:[(0,s.jsxs)("p",{children:["Vendor prefixes are not used inside SCSS instead we use ",(0,s.jsx)("a",{href:"https://github.com/postcss/autoprefixer",className:"fw-bold",target:"_blank",rel:"noreferrer",children:"Autoprefixer"})," to handle intended browser support via CSS prefixes. After compilation CSS styles are passed through Autoprefixer to add necessary vendor prefixes. As you know vendor prefixes are important to ensure cross-browser compatibility of latest CSS3 features."]}),(0,s.jsx)("h2",{className:"h4 pt-3",children:"Customize browser support via Autoprefixer settings"}),(0,s.jsxs)("p",{children:["To customize Autoprfixer settings you need to go to ",(0,s.jsx)("code",{children:"package.json"})," and find ",(0,s.jsx)("code",{children:'"browserslist"'})," array. It's currently set to the Bootstrap's default list of browsers."]}),(0,s.jsx)("p",{children:"Generally it's a good practice to collect some analytics about what Browsers/OSs your visitors use. And then customize Autoprefixer settings based on this data."}),(0,s.jsxs)("p",{children:["For more information about available Browserlist options visit ",(0,s.jsx)("a",{href:"https://github.com/browserslist/browserslist",className:"fw-bold",target:"_blank",rel:"noreferrer",children:"https://github.com/browserslist/browserslist"}),"."]}),(0,s.jsx)("div",{className:"img-thumbnail mt-3",children:(0,s.jsx)(n.Z,{src:"/images/docs/browserlist.png",width:679,height:503,alt:"Browserlist"})})]})})}},27977:function(e,t,r){"use strict";var s=r(94184),o=r.n(s),n=r(67294),i=r(76792),a=r(85893);const c=n.forwardRef((({bsPrefix:e,bg:t,pill:r,text:s,className:n,as:c="span",...l},d)=>{const u=(0,i.vE)(e,"badge");return(0,a.jsx)(c,{ref:d,...l,className:o()(n,u,r&&"rounded-pill",s&&`text-${s}`,t&&`bg-${t}`)})}));c.displayName="Badge",c.defaultProps={bg:"primary",pill:!1},t.Z=c}},function(e){e.O(0,[3675,4222,4567,2141,4196,9774,2888,179],(function(){return t=60664,e(e.s=t);var t}));var t=e.O();_N_E=t}]);