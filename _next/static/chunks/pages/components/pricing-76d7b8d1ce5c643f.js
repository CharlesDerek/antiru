(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9373],{30844:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/pricing",function(){return n(50547)}])},41752:function(e,t,n){"use strict";var i=n(85893),a=n(67294),l=n(15660),r=n.n(l);n(94838),n(16089),n(67863),n(81233),n(46177),n(82911);t.Z=function(e){var t=e.language,n=e.className,l=e.children,s=e.style;return(0,a.useEffect)((function(){r().highlightAll()}),[l]),(0,i.jsx)("pre",{className:"line-numbers ".concat(n),style:s,children:(0,i.jsx)("code",{className:"language-".concat(t),children:l})})}},75698:function(e,t,n){"use strict";var i=n(85893),a=n(25675),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(e){var t,n,a,s=e.width,c=e.height,o=e.alt,d=e.placeholder,p=e.light;return(0,i.jsx)(l(),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},e,{placeholder:!1===d?"empty":"blur",blurDataURL:"data:image/svg+xml;base64,".concat((n=s,a=c,t='\n    <svg width="'.concat(n,'" height="').concat(a,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <defs>\n        <linearGradient id="g">\n          <stop stop-color="').concat(p?"#352e44":"#efedf0",'" offset="20%" />\n          <stop stop-color="').concat(p?"#1f1b2d":"#d8d7da",'" offset="50%" />\n          <stop stop-color="').concat(p?"#352e44":"#efedf0",'" offset="70%" />\n        </linearGradient>\n      </defs>\n      <rect width="').concat(n,'" height="').concat(a,'" fill="').concat(p?"#352e44":"#efedf0",'" />\n      <rect id="r" width="').concat(n,'" height="').concat(a,'" fill="url(#g)" />\n      <animate xlink:href="#r" attributeName="x" from="-').concat(n,'" to="').concat(n,'" dur="1s" repeatCount="indefinite"  />\n    </svg>'),window.btoa(t))),alt:o}))}},48630:function(e,t,n){"use strict";var i=n(85893),a=n(41664),l=n.n(a),r=n(75698);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){s(e,t,n[t])}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t,n=e.image,a=e.title,s=e.price,d=e.period,p=e.options,h=e.button,u=e.light,g=e.featured,m=e.className,b=o(e,["image","title","price","period","options","button","light","featured","className"]),v=m?" ".concat(m):"";return t=g?u?"card card-light border-light card-active"+v:"card shadow"+v:u?"card card-light border-light"+v:"card"+v,(0,i.jsxs)("div",c({},b,{className:t,children:[(0,i.jsxs)("div",{className:"card-body",children:[n&&(0,i.jsx)("div",{className:"text-center mt-2 mb-4",children:(0,i.jsx)(r.Z,{src:n.src,width:parseInt(n.width),height:parseInt(n.height),alt:n.alt})}),a&&(0,i.jsx)("h3",{className:"h5 fw-normal text-center mb-1".concat(u?" text-light":""),children:a}),s&&(0,i.jsxs)("div",{className:"d-flex align-items-end justify-content-center mb-4",children:[(0,i.jsx)("div",{className:"h1 mb-0".concat(u?" text-light":""),children:s}),(0,i.jsxs)("div",{className:"pb-2 ps-2".concat(u?" text-light opacity-70":""),children:["/",d]})]}),p&&(0,i.jsx)("ul",{className:"list-unstyled d-block mb-0 mx-auto",style:{maxWidth:"16rem"},children:p.map((function(e,t){return(0,i.jsx)("li",{children:e.available?(0,i.jsxs)("div",{className:"d-flex",children:[(0,i.jsx)("i",{className:"fi-check text-primary fs-sm mt-1 me-2"}),(0,i.jsx)("span",{className:u?"text-light":"",children:e.title})]},t):(0,i.jsxs)("div",{className:"d-flex ".concat(u?"text-light opacity-50":"text-muted"),children:[(0,i.jsx)("i",{className:"fi-x fs-xs mt-2 me-2"}),(0,i.jsx)("span",{children:e.title})]},t)},t)}))})]}),h&&(0,i.jsx)("div",{className:"card-footer py-2 border-0",children:(0,i.jsx)("div",{className:"border-top text-center pt-4 pb-3".concat(u?" border-light":""),children:h.href?(0,i.jsx)(l(),{href:h.href,children:(0,i.jsx)("a",c({},h.props,{className:h.variant?"btn btn-".concat(h.variant):"btn btn-outline-primary",children:h.title}))}):(0,i.jsx)("button",c({},h.props,{type:"button",className:h.variant?"btn btn-".concat(h.variant):"btn btn-outline-primary",children:h.title}))})})]}))}},63001:function(e,t,n){"use strict";var i=n(85893),a=n(78182),l=n(69463),r=n(60489),s=n(41068);t.Z=function(e){return(0,i.jsx)("section",{id:e.id,className:"pb-5 mb-md-2",children:(0,i.jsxs)(r.Z.Container,{defaultActiveKey:"preview",transition:s.Z,children:[(0,i.jsx)("h2",{className:"h5 mb-3",children:e.title}),(0,i.jsxs)(a.Z,{className:"border-0 shadow-sm",children:[(0,i.jsx)(a.Z.Header,{children:(0,i.jsxs)(l.Z,{variant:"tabs",children:[(0,i.jsx)(l.Z.Item,{children:(0,i.jsxs)(l.Z.Link,{as:"button",eventKey:"preview",children:[(0,i.jsx)("i",{className:"fi-eye-on me-2"}),"Preview"]})}),(0,i.jsx)(l.Z.Item,{children:(0,i.jsxs)(l.Z.Link,{as:"button",eventKey:"code",children:[(0,i.jsx)("i",{className:"fi-code me-2"}),"Code"]})})]})}),(0,i.jsx)(a.Z.Body,{children:(0,i.jsx)(r.Z.Content,{children:e.children})})]})]})})}},50547:function(e,t,n){"use strict";n.r(t);var i=n(85893),a=n(8840),l=n(63001),r=n(60489),s=n(41752),c=n(48630);t.default=function(){var e=function(e){alert("You've chosen "+e.currentTarget.dataset.plan+" pricing plan")};return(0,i.jsxs)(a.Z,{pageTitle:"Pricing",pageDescription:"Quickly build pricing plans for subscription based pricing model.",activeNav:"/components/pricing",anchorLinks:[{label:"Basic example",anchor:"pricing-basic"},{label:"Light version",anchor:"pricing-light"}],children:[(0,i.jsxs)(l.Z,{id:"pricing-basic",title:"Basic example",children:[(0,i.jsx)(r.Z.Pane,{eventKey:"preview",children:(0,i.jsxs)("div",{className:"d-sm-flex",children:[(0,i.jsx)(c.Z,{image:{src:"antiru/images/pricing/icon-1.svg",width:"72",height:"88",alt:"Icon"},title:"Easy Start",price:"$5",period:"month",options:[{title:"3x more views",available:!0},{title:"Top ads for 3 days",available:!0},{title:"Moving up the list",available:!1},{title:"Featured badge in the results",available:!1}],button:{href:"#",title:"Choose plan",variant:"outline-primary rounded-pill",props:{onClick:e,"data-plan":"Easy Start"}},className:"w-100 mb-4 me-sm-4",style:{maxWidth:"25rem"}}),(0,i.jsx)(c.Z,{featured:!0,image:{src:"antiru/images/pricing/icon-2.svg",width:"72",height:"88",alt:"Icon"},title:"Fast Sale",price:"$15",period:"month",options:[{title:"10x more views",available:!0},{title:"Top ads for 5 days",available:!0},{title:"Moving up the list",available:!0},{title:"Featured badge in the results",available:!1}],button:{href:"#",title:"Choose plan",variant:"primary rounded-pill",props:{onClick:e,"data-plan":"Fast Sale"}},className:"w-100 mb-4",style:{maxWidth:"25rem"}})]})}),(0,i.jsx)(r.Z.Pane,{eventKey:"code",children:(0,i.jsx)(s.Z,{language:"jsx",children:"import PricingPlan from '../components/PricingPlan'\n\n{/* Button click handler */}\nconst handleClick = (e) => {\n  alert('You've chosen ' + e.currentTarget.dataset.plan + ' pricing plan')\n}\n\n{/* Default pricing plan */}\n<PricingPlan\n  image={{\n    src: '/images/pricing/icon-1.svg',\n    width: '72',\n    height: '88',\n    alt: 'Icon'\n  }}\n  title='Easy Start'\n  price='$5'\n  period='month'\n  options={[\n    {title: '3x more views', available: true},\n    {title: 'Top ads for 3 days', available: true},\n    {title: 'Moving up the list', available: false},\n    {title: 'Featured badge in the results', available: false}\n  ]}\n  button={{\n    href: '#',\n    title: 'Choose plan',\n    variant: 'outline-primary rounded-pill',\n    props: {\n      onClick: handleClick,\n      'data-plan': 'Easy Start'\n    }\n  }}\n/>\n\n{/* Featured (popular) pricing plan */}\n<PricingPlan\n  featured\n  image={{\n    src: '/images/pricing/icon-2.svg',\n    width: '72',\n    height: '88',\n    alt: 'Icon'\n  }}\n  title='Fast Sale'\n  price='$15'\n  period='month'\n  options={[\n    {title: '10x more views', available: true},\n    {title: 'Top ads for 5 days', available: true},\n    {title: 'Moving up the list', available: true},\n    {title: 'Featured badge in the results', available: false}\n  ]}\n  button={{\n    href: '#',\n    title: 'Choose plan',\n    variant: 'primary rounded-pill',\n    props: {\n      onClick: handleClick,\n      'data-plan': 'Fast Sale'\n    }\n  }}\n/>"})})]}),(0,i.jsxs)(l.Z,{id:"pricing-light",title:"Light version",children:[(0,i.jsx)(r.Z.Pane,{eventKey:"preview",className:"m-n3 p-3 bg-dark",children:(0,i.jsxs)("div",{className:"d-sm-flex",children:[(0,i.jsx)(c.Z,{light:!0,image:{src:"antiru/images/pricing/icon-1.svg",width:"72",height:"88",alt:"Icon"},title:"Easy Start",price:"$5",period:"month",options:[{title:"3x more views",available:!0},{title:"Top ads for 3 days",available:!0},{title:"Moving up the list",available:!1},{title:"Featured badge in the results",available:!1}],button:{href:"#",title:"Choose plan",variant:"outline-light rounded-pill",props:{onClick:e,"data-plan":"Easy Start"}},className:"w-100 mb-4 me-sm-4",style:{maxWidth:"25rem"}}),(0,i.jsx)(c.Z,{light:!0,featured:!0,image:{src:"antiru/images/pricing/icon-2.svg",width:"72",height:"88",alt:"Icon"},title:"Fast Sale",price:"$15",period:"month",options:[{title:"10x more views",available:!0},{title:"Top ads for 5 days",available:!0},{title:"Moving up the list",available:!0},{title:"Featured badge in the results",available:!1}],button:{href:"#",title:"Choose plan",variant:"primary rounded-pill",props:{onClick:e,"data-plan":"Fast Sale"}},className:"w-100 mb-4",style:{maxWidth:"25rem"}})]})}),(0,i.jsx)(r.Z.Pane,{eventKey:"code",children:(0,i.jsx)(s.Z,{language:"jsx",children:"import PricingPlan from '../components/PricingPlan'\n          \n{/* Button click handler */}\nconst handleClick = (e) => {\n  alert('You've chosen ' + e.currentTarget.dataset.plan + ' pricing plan')\n}\n\n{/* Light default pricing plan */}\n<PricingPlan\n  light\n  image={{\n    src: '/images/pricing/icon-1.svg',\n    width: '72',\n    height: '88',\n    alt: 'Icon'\n  }}\n  title='Easy Start'\n  price='$5'\n  period='month'\n  options={[\n    {title: '3x more views', available: true},\n    {title: 'Top ads for 3 days', available: true},\n    {title: 'Moving up the list', available: false},\n    {title: 'Featured badge in the results', available: false}\n  ]}\n  button={{\n    href: '#',\n    title: 'Choose plan',\n    variant: 'outline-light rounded-pill',\n    props: {\n      onClick: handleClick,\n      'data-plan': 'Easy Start'\n    }\n  }}\n/>\n\n{/* Light featured (popular) pricing plan */}\n<PricingPlan\n  light\n  featured\n  image={{\n    src: '/images/pricing/icon-2.svg',\n    width: '72',\n    height: '88',\n    alt: 'Icon'\n  }}\n  title='Fast Sale'\n  price='$15'\n  period='month'\n  options={[\n    {title: '10x more views', available: true},\n    {title: 'Top ads for 5 days', available: true},\n    {title: 'Moving up the list', available: true},\n    {title: 'Featured badge in the results', available: false}\n  ]}\n  button={{\n    href: '#',\n    title: 'Choose plan',\n    variant: 'primary rounded-pill',\n    props: {\n      onClick: handleClick,\n      'data-plan': 'Fast Sale'\n    }\n  }}\n/>"})})]})]})}}},function(e){e.O(0,[3675,4222,4567,2141,7472,8840,9774,2888,179],(function(){return t=30844,e(e.s=t);var t}));var t=e.O();_N_E=t}]);