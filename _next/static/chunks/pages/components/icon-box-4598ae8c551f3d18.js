(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8224],{69574:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/icon-box",function(){return i(72504)}])},41752:function(e,n,i){"use strict";var a=i(85893),c=i(67294),o=i(15660),t=i.n(o);i(94838),i(16089),i(67863),i(81233),i(46177),i(82911);n.Z=function(e){var n=e.language,i=e.className,o=e.children,r=e.style;return(0,c.useEffect)((function(){t().highlightAll()}),[o]),(0,a.jsx)("pre",{className:"line-numbers ".concat(i),style:r,children:(0,a.jsx)("code",{className:"language-".concat(n),children:o})})}},9340:function(e,n,i){"use strict";var a=i(85893),c=i(41664),o=i.n(c);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(n){t(e,n,i[n])}))}return e}function s(e,n){if(null==e)return{};var i,a,c=function(e,n){if(null==e)return{};var i,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],n.indexOf(i)>=0||(c[i]=e[i]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(c[i]=e[i])}return c}n.Z=function(e){var n,i,c,t,d,l=e.href,m=e.media,x=e.mediaColor,h=e.mediaShape,b=e.imageSrc,p=e.title,u=e.titleSize,g=e.text,f=e.type,y=e.light,j=e.align,N=e.className,Z=s(e,["href","media","mediaColor","mediaShape","imageSrc","title","titleSize","text","type","light","align","className"]),v=h?" rounded-".concat(h):"",w=j?" text-".concat(j):"",I=y?" card-light":"",B=u?" fs-".concat(u):" fs-base",S=y?" text-light":"",C=y?" text-light opacity-60":" text-body",P=N?" ".concat(N):"";switch(n=y?" bg-faded-light text-light":x?" bg-faded-".concat(x," text-").concat(x):" bg-faded-primary text-primary",f){case"card":i="icon-box card card-body card-hover h-100 text-decoration-none"+I+w+P,c="icon-box-media mb-3"+n+v,t="icon-box-title mb-0"+B+S,d="fs-sm mt-2 mb-0"+C;break;case"card-shadow":i="icon-box card card-body h-100 border-0 shadow-sm card-hover text-decoration-none"+I+w+P,c="icon-box-media mb-3"+n+v,t="icon-box-title mb-0"+B+S,d="fs-sm mt-2 mb-0"+C;break;case"pill":i="icon-box card flex-row align-items-center card-hover rounded-pill text-decoration-none py-2 ps-2 pe-4"+I+w+P,c="icon-box-media rounded-pill me-2"+n,t="icon-box-title fs-sm ps-1 pe-1 mb-0"+S,d="d-none";break;case"pill-shadow":i="icon-box card flex-row align-items-center card-hover border-0 shadow-sm rounded-pill text-decoration-none py-2 ps-2 pe-4"+I+w+P,c="icon-box-media rounded-pill me-2"+n,t="icon-box-title fs-sm ps-1 pe-1 mb-0"+S,d="d-none";break;case"pill-rounded":i="icon-box card flex-row align-items-center card-hover text-decoration-none py-2 ps-2 pe-4"+I+w+P,c="icon-box-media me-2"+n,t="icon-box-title fs-sm ps-1 pe-1 mb-0"+S,d="d-none";break;case"pill-rounded-shadow":i="icon-box card flex-row align-items-center card-hover border-0 shadow-sm text-decoration-none py-2 ps-2 pe-4"+I+w+P,c="icon-box-media me-2"+n,t="icon-box-title fs-sm ps-1 pe-1 mb-0"+S,d="d-none";break;default:i="icon-box text-decoration-none"+w+P,c="icon-box-media mb-3"+n+v,t="icon-box-title mb-0"+B+S,d="fs-sm mt-2 mb-0"+C}var q,k=g?(0,a.jsx)("p",{className:d,children:g}):"";return m&&(q="image"===m?(0,a.jsx)("div",{className:c,style:{backgroundImage:"url("+b+")"}}):(0,a.jsx)("div",{className:c,children:(0,a.jsx)("i",{className:m})})),(0,a.jsx)(a.Fragment,{children:l?(0,a.jsx)(o(),{href:l,children:(0,a.jsxs)("a",r({className:i},Z,{children:[q,(0,a.jsx)("h3",{className:t,children:p}),k]}))}):(0,a.jsxs)("div",r({className:i},Z,{children:[q,(0,a.jsx)("h3",{className:t,children:p}),k]}))})}},63001:function(e,n,i){"use strict";var a=i(85893),c=i(78182),o=i(69463),t=i(60489),r=i(41068);n.Z=function(e){return(0,a.jsx)("section",{id:e.id,className:"pb-5 mb-md-2",children:(0,a.jsxs)(t.Z.Container,{defaultActiveKey:"preview",transition:r.Z,children:[(0,a.jsx)("h2",{className:"h5 mb-3",children:e.title}),(0,a.jsxs)(c.Z,{className:"border-0 shadow-sm",children:[(0,a.jsx)(c.Z.Header,{children:(0,a.jsxs)(o.Z,{variant:"tabs",children:[(0,a.jsx)(o.Z.Item,{children:(0,a.jsxs)(o.Z.Link,{as:"button",eventKey:"preview",children:[(0,a.jsx)("i",{className:"fi-eye-on me-2"}),"Preview"]})}),(0,a.jsx)(o.Z.Item,{children:(0,a.jsxs)(o.Z.Link,{as:"button",eventKey:"code",children:[(0,a.jsx)("i",{className:"fi-code me-2"}),"Code"]})})]})}),(0,a.jsx)(c.Z.Body,{children:(0,a.jsx)(t.Z.Content,{children:e.children})})]})]})})}},72504:function(e,n,i){"use strict";i.r(n);var a=i(85893),c=i(8840),o=i(63001),t=i(21608),r=i(31555),s=i(60489),d=i(9340),l=i(41752);n.default=function(){return(0,a.jsxs)(c.Z,{pageTitle:"Icon box",pageDescription:"A simple component to describe the various benefits of a product.",activeNav:"/components/icon-box",anchorLinks:[{label:"Media type and shape",anchor:"icon-box-media-type-shape"},{label:"Alignment",anchor:"icon-box-alignment"},{label:"Card style",anchor:"icon-box-card"},{label:"Pill style",anchor:"icon-box-pill"},{label:"Color variants",anchor:"icon-box-colors"},{label:"Light version",anchor:"icon-box-light"}],children:[(0,a.jsxs)(o.Z,{id:"icon-box-media-type-shape",title:"Media type and shape",children:[(0,a.jsxs)(s.Z.Pane,{eventKey:"preview",children:[(0,a.jsxs)("div",{className:"d-sm-flex",children:[(0,a.jsx)(d.Z,{media:"fi-bed",title:"Rounded font icon media",text:"Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",className:"pb-2 mb-4 me-sm-5",style:{maxWidth:"18rem"}}),(0,a.jsx)(d.Z,{media:"image",imageSrc:"antiru/images/job-board/blog/thumbs/01.jpg",title:"Rounded image media",text:"Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",className:"pb-2 mb-4",style:{maxWidth:"18rem"}})]}),(0,a.jsxs)("div",{className:"d-sm-flex",children:[(0,a.jsx)(d.Z,{media:"fi-cafe",mediaColor:"accent",mediaShape:"circle",title:"Cicle font icon media",text:"Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",className:"pb-2 mb-4 me-sm-5",style:{maxWidth:"18rem"}}),(0,a.jsx)(d.Z,{media:"image",mediaShape:"circle",imageSrc:"antiru/images/job-board/blog/thumbs/02.jpg",title:"Cicle image media",text:"Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",className:"pb-2 mb-4",style:{maxWidth:"18rem"}})]})]}),(0,a.jsx)(s.Z.Pane,{eventKey:"code",children:(0,a.jsx)(l.Z,{language:"jsx",children:"import IconBox from '../components/IconBox'\n\n{/* Icon box: Rounded font icon media */}\n<IconBox\n  media='fi-bed'\n  title='Rounded font icon media'\n  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'\n  className='pb-2 mb-4'\n/>\n\n{/* Icon box: Rounded image media */}\n<IconBox\n  media='image'\n  imageSrc='/images/job-board/blog/thumbs/01.jpg'\n  title='Rounded image media'\n  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'\n  className='pb-2 mb-4'\n/>\n\n{/* Icon box: Cicle font icon media (accent color) */}\n<IconBox\n  media='fi-cafe'\n  mediaColor='accent'\n  mediaShape='circle'\n  title='Cicle font icon media'\n  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'\n  className='pb-2 mb-4'\n/>\n\n{/* Icon box: Cicle image media */}\n<IconBox\n  media='image'\n  mediaShape='circle'\n  imageSrc='/images/job-board/blog/thumbs/02.jpg'\n  title='Cicle image media'\n  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'\n  className='pb-2 mb-4'\n/>"})})]}),(0,a.jsxs)(o.Z,{id:"icon-box-alignment",title:"Alignment",children:[(0,a.jsx)(s.Z.Pane,{eventKey:"preview",children:(0,a.jsxs)("div",{className:"d-sm-flex",children:[(0,a.jsx)(d.Z,{media:"fi-apartment",title:"Center aligned",text:"Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",align:"center",className:"pb-2 mb-4 me-sm-5",style:{maxWidth:"18rem"}}),(0,a.jsx)(d.Z,{media:"fi-apartment",title:"Right aligned",text:"Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",align:"end",className:"pb-2 mb-4",style:{maxWidth:"18rem"}})]})}),(0,a.jsx)(s.Z.Pane,{eventKey:"code",children:(0,a.jsx)(l.Z,{language:"jsx",children:"import IconBox from '../components/IconBox'\n\n{/* Center aligned */}\n<IconBox\n  media='fi-apartment'\n  title='Center aligned'\n  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'\n  align='center'\n  className='pb-2 mb-4'\n/>\n\n{/* Right aligned */}\n<IconBox\n  media='fi-apartment'\n  title='Right aligned'\n  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'\n  align='end'\n  className='pb-2 mb-4'\n/>"})})]}),(0,a.jsxs)(o.Z,{id:"icon-box-card",title:"Card style",children:[(0,a.jsx)(s.Z.Pane,{eventKey:"preview",children:(0,a.jsxs)("div",{className:"d-sm-flex",children:[(0,a.jsx)(d.Z,{href:"#",media:"fi-meds",mediaShape:"circle",title:"Border card",type:"card",align:"center",className:"mb-4 me-sm-4",style:{maxWidth:"12.5rem"}}),(0,a.jsx)(d.Z,{href:"#",media:"fi-house-chosen",mediaShape:"circle",title:"Shadow card",type:"card-shadow",align:"center",className:"mb-4 me-sm-4",style:{maxWidth:"12.5rem"}}),(0,a.jsx)(d.Z,{href:"#",media:"fi-spa",mediaShape:"circle",title:"Background card",type:"card",align:"center",className:"bg-secondary border-0 mb-4",style:{maxWidth:"12.5rem"}})]})}),(0,a.jsx)(s.Z.Pane,{eventKey:"code",children:(0,a.jsx)(l.Z,{language:"jsx",children:"import IconBox from '../components/IconBox'\n\n{/* Icon box card type with border */}\n<IconBox\n  href='#'\n  media='fi-meds'\n  mediaShape='circle'\n  title='Border card'\n  type='card'\n  align='center'\n  className='mb-4'\n/>\n\n{/* Icon box card type with shadow */}\n<IconBox\n  href='#'\n  media='fi-house-chosen'\n  mediaShape='circle'\n  title='Shadow card'\n  type='card-shadow'\n  align='center'\n  className='mb-4'\n/>\n\n{/* Icon box card type with color background */}\n<IconBox\n  href='#'\n  media='fi-spa'\n  mediaShape='circle'\n  title='Background card'\n  type='card'\n  align='center'\n  className='bg-secondary border-0 mb-4'\n/>"})})]}),(0,a.jsxs)(o.Z,{id:"icon-box-pill",title:"Pill style",children:[(0,a.jsxs)(s.Z.Pane,{eventKey:"preview",children:[(0,a.jsxs)("div",{className:"d-sm-flex",children:[(0,a.jsx)(d.Z,{href:"#",media:"fi-meds",title:"Border card",type:"pill-rounded",className:"mb-4 me-sm-4",style:{maxWidth:"14rem"}}),(0,a.jsx)(d.Z,{href:"#",media:"fi-house-chosen",title:"Shadow card",type:"pill-rounded-shadow",className:"mb-4 me-sm-4",style:{maxWidth:"14rem"}}),(0,a.jsx)(d.Z,{href:"#",media:"fi-spa",title:"Background card",type:"pill-rounded",className:"bg-secondary border-0 mb-4",style:{maxWidth:"14rem"}})]}),(0,a.jsxs)("div",{className:"d-sm-flex",children:[(0,a.jsx)(d.Z,{href:"#",media:"fi-meds",title:"Border card",type:"pill",className:"mb-4 me-sm-4",style:{maxWidth:"14rem"}}),(0,a.jsx)(d.Z,{href:"#",media:"fi-house-chosen",title:"Shadow card",type:"pill-shadow",className:"mb-4 me-sm-4",style:{maxWidth:"14rem"}}),(0,a.jsx)(d.Z,{href:"#",media:"fi-spa",title:"Background card",type:"pill",className:"bg-secondary border-0 mb-4",style:{maxWidth:"14rem"}})]})]}),(0,a.jsx)(s.Z.Pane,{eventKey:"code",children:(0,a.jsx)(l.Z,{language:"jsx",children:"import IconBox from '../components/IconBox'\n\n{/* Icon box horizontal card type with border (Rounded) */}\n<IconBox\n  href='#'\n  media='fi-meds'\n  title='Border card'\n  type='pill-rounded'\n  className='mb-4'\n/>\n\n{/* Icon box horizontal card type with shadow (Rounded) */}\n<IconBox\n  href='#'\n  media='fi-house-chosen'\n  title='Shadow card'\n  type='pill-rounded-shadow'\n  className='mb-4'\n/>\n\n{/* Icon box horizontal card type with color background (Rounded) */}\n<IconBox\n  href='#'\n  media='fi-spa'\n  title='Background card'\n  type='pill-rounded'\n  className='bg-secondary border-0 mb-4'\n/>\n\n{/* Icon box horizontal card type with border (Pill) */}\n<IconBox\n  href='#'\n  media='fi-meds'\n  title='Border card'\n  type='pill'\n  className='mb-4'\n/>\n\n{/* Icon box horizontal card type with shadow (Pill) */}\n<IconBox\n  href='#'\n  media='fi-house-chosen'\n  title='Shadow card'\n  type='pill-shadow'\n  className='mb-4'\n/>\n\n{/* Icon box horizontal card type with color background (Pill) */}\n<IconBox\n  href='#'\n  media='fi-spa'\n  title='Background card'\n  type='pill'\n  className='bg-secondary border-0 mb-4'\n/>"})})]}),(0,a.jsxs)(o.Z,{id:"icon-box-colors",title:"Color variants",children:[(0,a.jsx)(s.Z.Pane,{eventKey:"preview",children:(0,a.jsxs)(t.Z,{xs:2,sm:4,xxl:6,className:"g-4",children:[(0,a.jsx)(r.Z,{as:d.Z,media:"fi-apartment",mediaShape:"circle",title:"Primary icon box",align:"center",className:"pb-2"}),(0,a.jsx)(r.Z,{as:d.Z,media:"fi-bath",mediaShape:"circle",mediaColor:"accent",title:"Accent icon box",align:"center",className:"pb-2"}),(0,a.jsx)(r.Z,{as:d.Z,media:"fi-bed",mediaShape:"circle",mediaColor:"success",title:"Success icon box",align:"center",className:"pb-2"}),(0,a.jsx)(r.Z,{as:d.Z,media:"fi-billboard-house",mediaShape:"circle",mediaColor:"info",title:"Info icon box",align:"center",className:"pb-2"}),(0,a.jsx)(r.Z,{as:d.Z,media:"fi-cafe",mediaShape:"circle",mediaColor:"warning",title:"Warning icon box",align:"center",className:"pb-2"}),(0,a.jsx)(r.Z,{as:d.Z,media:"fi-cctv",mediaShape:"circle",mediaColor:"danger",title:"Danger icon box",align:"center",className:"pb-2"})]})}),(0,a.jsx)(s.Z.Pane,{eventKey:"code",children:(0,a.jsx)(l.Z,{language:"jsx",children:"import IconBox from '../components/IconBox'\n\n{/* Primary icon box */}\n<IconBox\n  media='fi-apartment'\n  mediaShape='circle'\n  title='Primary icon box'\n  align='center'\n/>\n\n{/* Accent icon box */}\n<IconBox\n  media='fi-bath'\n  mediaShape='circle'\n  mediaColor='accent'\n  title='Accent icon box'\n  align='center'\n/>\n\n{/* Success icon box */}\n<IconBox\n  media='fi-bed'\n  mediaShape='circle'\n  mediaColor='success'\n  title='Success icon box'\n  align='center'\n/>\n\n{/* Info icon box */}\n<IconBox\n  media='fi-billboard-house'\n  mediaShape='circle'\n  mediaColor='info'\n  title='Info icon box'\n  align='center'\n/>\n\n{/* Warning icon box */}\n<IconBox\n  media='fi-cafe'\n  mediaShape='circle'\n  mediaColor='warning'\n  title='Warning icon box'\n  align='center'\n/>\n\n{/* Danger icon box */}\n<IconBox\n  media='fi-cctv'\n  mediaShape='circle'\n  mediaColor='danger'\n  title='Danger icon box'\n  align='center'\n/>"})})]}),(0,a.jsxs)(o.Z,{id:"icon-box-light",title:"Light version",children:[(0,a.jsx)(s.Z.Pane,{eventKey:"preview",className:"m-n3 pt-4 p-3 bg-dark",children:(0,a.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,a.jsx)(d.Z,{media:"fi-spa",title:"Basic icon box",text:"Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",light:!0,align:"center",className:"pb-2 mb-4 me-sm-5",style:{maxWidth:"18rem"}}),(0,a.jsx)(d.Z,{href:"#",media:"fi-spa",mediaShape:"circle",title:"Card icon box",type:"card",light:!0,align:"center",className:"mb-4 me-4 me-sm-5",style:{maxWidth:"12.5rem"}}),(0,a.jsx)(d.Z,{href:"#",media:"fi-meds",title:"Pill icon box",type:"pill",light:!0,className:"mb-4",style:{maxWidth:"14rem"}})]})}),(0,a.jsx)(s.Z.Pane,{eventKey:"code",children:(0,a.jsx)(l.Z,{language:"jsx",children:"import IconBox from '../components/IconBox'\n\n{/* Light basic icon box */}\n<IconBox\n  media='fi-spa'\n  title='Basic icon box'\n  text='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.'\n  light\n  align='center'\n/>\n\n{/* Light card icon box */}\n<IconBox\n  href='#'\n  media='fi-spa'\n  mediaShape='circle'\n  title='Card icon box'\n  type='card'\n  light\n  align='center'\n/>\n\n{/* Light pill icon box */}\n<IconBox\n  href='#'\n  media='fi-meds'\n  title='Pill icon box'\n  type='pill'\n  light\n/>"})})]})]})}}},function(e){e.O(0,[3675,4222,4567,2141,7472,8840,9774,2888,179],(function(){return n=69574,e(e.s=n);var n}));var n=e.O();_N_E=n}]);