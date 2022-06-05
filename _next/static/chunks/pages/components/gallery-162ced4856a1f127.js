(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1106],{28146:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/gallery",function(){return a(7959)}])},41752:function(e,l,a){"use strict";var t=a(85893),n=a(67294),s=a(15660),i=a.n(s);a(94838),a(16089),a(67863),a(81233),a(46177),a(82911);l.Z=function(e){var l=e.language,a=e.className,s=e.children,r=e.style;return(0,n.useEffect)((function(){i().highlightAll()}),[s]),(0,t.jsx)("pre",{className:"line-numbers ".concat(a),style:r,children:(0,t.jsx)("code",{className:"language-".concat(l),children:s})})}},54086:function(e,l,a){"use strict";var t=a(85893),n=a(75698);function s(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function i(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}l.Z=function(e){var l=e.thumb,a=e.video,r=e.imgAlt,o=e.caption,g=e.light,m=e.className,c=i(e,["thumb","video","imgAlt","caption","light","className"]);return(0,t.jsxs)("a",function(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(l){s(e,l,a[l])}))}return e}({},c,{"data-sub-html":"<h6 class='fs-sm text-light'>".concat(r||o,"</h6>"),className:"gallery-item d-flex".concat(a?" video-item":"").concat(m?" ".concat(m):""),children:[l&&(0,t.jsx)(n.Z,{src:l[0],width:l[1],height:l[2],alt:o||r,light:g?1:0}),o&&(0,t.jsx)("span",{className:"gallery-item-caption",children:o})]}))}},75698:function(e,l,a){"use strict";var t=a(85893),n=a(25675),s=a.n(n);function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}l.Z=function(e){var l,a,n,r=e.width,o=e.height,g=e.alt,m=e.placeholder,c=e.light;return(0,t.jsx)(s(),function(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(l){i(e,l,a[l])}))}return e}({},e,{placeholder:!1===m?"empty":"blur",blurDataURL:"data:image/svg+xml;base64,".concat((a=r,n=o,l='\n    <svg width="'.concat(a,'" height="').concat(n,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <defs>\n        <linearGradient id="g">\n          <stop stop-color="').concat(c?"#352e44":"#efedf0",'" offset="20%" />\n          <stop stop-color="').concat(c?"#1f1b2d":"#d8d7da",'" offset="50%" />\n          <stop stop-color="').concat(c?"#352e44":"#efedf0",'" offset="70%" />\n        </linearGradient>\n      </defs>\n      <rect width="').concat(a,'" height="').concat(n,'" fill="').concat(c?"#352e44":"#efedf0",'" />\n      <rect id="r" width="').concat(a,'" height="').concat(n,'" fill="url(#g)" />\n      <animate xlink:href="#r" attributeName="x" from="-').concat(a,'" to="').concat(a,'" dur="1s" repeatCount="indefinite"  />\n    </svg>'),window.btoa(l))),alt:g}))}},63001:function(e,l,a){"use strict";var t=a(85893),n=a(78182),s=a(69463),i=a(60489),r=a(41068);l.Z=function(e){return(0,t.jsx)("section",{id:e.id,className:"pb-5 mb-md-2",children:(0,t.jsxs)(i.Z.Container,{defaultActiveKey:"preview",transition:r.Z,children:[(0,t.jsx)("h2",{className:"h5 mb-3",children:e.title}),(0,t.jsxs)(n.Z,{className:"border-0 shadow-sm",children:[(0,t.jsx)(n.Z.Header,{children:(0,t.jsxs)(s.Z,{variant:"tabs",children:[(0,t.jsx)(s.Z.Item,{children:(0,t.jsxs)(s.Z.Link,{as:"button",eventKey:"preview",children:[(0,t.jsx)("i",{className:"fi-eye-on me-2"}),"Preview"]})}),(0,t.jsx)(s.Z.Item,{children:(0,t.jsxs)(s.Z.Link,{as:"button",eventKey:"code",children:[(0,t.jsx)("i",{className:"fi-code me-2"}),"Code"]})})]})}),(0,t.jsx)(n.Z.Body,{children:(0,t.jsx)(i.Z.Content,{children:e.children})})]})]})})}},7959:function(e,l,a){"use strict";a.r(l);var t=a(85893),n=a(8840),s=a(63001),i=a(88375),r=a(21608),o=a(31555),g=a(60489),m=a(78182),c=a(35005),p=a(41752),h=a(54086),d=a(38680),u=a(41997),y=a(52869),j=a(32508),x=a(22523),f=a(88116),b=a(98352);a(57814),a(50785),a(12160),a(48971),a(83912),a(21082),a(21669),a(36797);l.default=function(){return(0,t.jsxs)(n.Z,{pageTitle:"Gallery",pageDescription:"Lightbox component for presenting various types of media: Images, Videos, iFrames.",activeNav:"/components/gallery",anchorLinks:[{label:"Media: Image",anchor:"gallery-image"},{label:"Media: Video",anchor:"gallery-video"},{label:"Media: Iframe (Google map)",anchor:"gallery-iframe"},{label:"Grid with gutters",anchor:"gallery-grid-gutters"},{label:"Grid no gutters",anchor:"gallery-grid-nogutters"},{label:"Inside card",anchor:"gallery-card"},{label:"Inside carousel",anchor:"gallery-carousel"},{label:"Thumbnails",anchor:"gallery-thumbnails"}],children:[(0,t.jsx)(i.Z,{variant:"info",className:"mb-5",children:(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("i",{className:"fi-alert-circle lead me-2 me-sm-3"}),(0,t.jsx)("div",{className:"text-break",children:(0,t.jsxs)("p",{className:"mb-1",children:["Gallery component is powered by ",(0,t.jsx)(i.Z.Link,{href:"https://www.lightgalleryjs.com/docs/react/",target:"_blank",rel:"noreferrer",children:"lightGallery React"})," plugin."]})})]})}),(0,t.jsxs)(s.Z,{id:"gallery-image",title:"Media: Image",children:[(0,t.jsx)(g.Z.Pane,{eventKey:"preview",children:(0,t.jsx)(d.Z,{licenseKey:"D4194FDD-48924833-A54AECA3-D6F8E646",plugins:[y.Z,j.Z],children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/07.jpg",thumb:["antiru/images/real-estate/single/th07.jpg",400,244],caption:"Gallery image caption",className:"rounded",style:{maxWidth:"400px"}})})}),(0,t.jsx)(g.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import GalleryItem from '../components/GalleryItem'\nimport LightGallery from 'lightgallery/react'\nimport lgZoom from 'lightgallery/plugins/zoom'\nimport lgFullScreen from 'lightgallery/plugins/fullscreen'\nimport 'lightgallery/css/lightgallery.css'\nimport 'lightgallery/css/lg-zoom.css'\nimport 'lightgallery/css/lg-fullscreen.css'\n\n{/* Basic image gallery */}\n<LightGallery\n  plugins={[lgZoom, lgFullScreen]}\n>\n  <GalleryItem\n    href='/images/real-estate/single/07.jpg'\n    thumb={['/images/real-estate/single/th07.jpg', 400, 244]}\n    caption='Gallery image caption'\n    className='rounded'\n    style={{maxWidth: '400px'}}\n  />\n</LightGallery>"})})]}),(0,t.jsxs)(s.Z,{id:"gallery-video",title:"Media: Video",children:[(0,t.jsx)(g.Z.Pane,{eventKey:"preview",children:(0,t.jsx)(d.Z,{licenseKey:"D4194FDD-48924833-A54AECA3-D6F8E646",plugins:[x.Z],zoomFromOrigin:!1,youTubePlayerParams:{modestbranding:1,showinfo:0},children:(0,t.jsx)(h.Z,{href:"https://www.youtube.com/watch?v=BBOlp54-gW4",video:!0,thumb:["antiru/images/real-estate/single/th06.jpg",400,244],caption:"Gallery video caption",className:"rounded",style:{maxWidth:"400px"}})})}),(0,t.jsx)(g.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import GalleryItem from '../components/GalleryItem'\nimport LightGallery from 'lightgallery/react'\nimport lgVideo from 'lightgallery/plugins/video'\nimport 'lightgallery/css/lightgallery.css'\nimport 'lightgallery/css/lg-video.css'\n\n{/* Basic video (YouTube) gallery */}\n<LightGallery\n  plugins={[lgVideo]}\n  zoomFromOrigin={false}\n  youTubePlayerParams={{\n    modestbranding : 1,\n    showinfo : 0\n  }}\n>\n  <GalleryItem\n    href='https://www.youtube.com/watch?v=BBOlp54-gW4'\n    video\n    thumb={['/images/real-estate/single/th06.jpg', 400, 244]}\n    caption='Gallery video caption'\n    className='rounded'\n    style={{maxWidth: '400px'}}\n  />\n</LightGallery>"})})]}),(0,t.jsxs)(s.Z,{id:"gallery-video",title:"Media: Iframe (Google map)",children:[(0,t.jsx)(g.Z.Pane,{eventKey:"preview",children:(0,t.jsx)(d.Z,{licenseKey:"D4194FDD-48924833-A54AECA3-D6F8E646",plugins:[j.Z],children:(0,t.jsx)(h.Z,{href:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91476818218!2d-74.11976253858133!3d40.69740344296443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1568574342685!5m2!1sen!2sua","data-iframe":!0,thumb:["antiru/images/components/04.jpg",400,267],caption:"Google map embed",className:"rounded",style:{maxWidth:"400px"}})})}),(0,t.jsx)(g.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import GalleryItem from '../components/GalleryItem'\nimport LightGallery from 'lightgallery/react'\nimport lgFullScreen from 'lightgallery/plugins/fullscreen'\nimport 'lightgallery/css/lightgallery.css'\nimport 'lightgallery/css/lg-fullscreen.css'\n\n{/* Basic iframe (Google map) gallery */}\n<LightGallery\n  plugins={[lgFullScreen]}\n>\n  <GalleryItem\n    href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91476818218!2d-74.11976253858133!3d40.69740344296443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1568574342685!5m2!1sen!2sua'\n    data-iframe={true}\n    thumb={['/images/components/04.jpg', 400, 267]}\n    caption='Google map embed'\n    className='rounded'\n    style={{maxWidth: '400px'}}\n  />\n</LightGallery>"})})]}),(0,t.jsxs)(s.Z,{id:"gallery-grid-gutters",title:"Grid with gutters",children:[(0,t.jsx)(g.Z.Pane,{eventKey:"preview",children:(0,t.jsx)(d.Z,{selector:".gallery-item",licenseKey:"D4194FDD-48924833-A54AECA3-D6F8E646",plugins:[x.Z,y.Z,j.Z],zoomFromOrigin:!1,children:(0,t.jsxs)(r.Z,{className:"g-4",children:[(0,t.jsx)(o.Z,{xl:4,sm:6,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/03.jpg",thumb:["antiru/images/real-estate/single/th03.jpg",450,274],caption:"Gallery caption #1",className:"rounded"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/04.jpg",thumb:["antiru/images/real-estate/single/th04.jpg",450,274],caption:"Gallery caption #2",className:"rounded"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,children:(0,t.jsx)(h.Z,{href:"https://www.youtube.com/watch?v=BBOlp54-gW4",video:!0,thumb:["antiru/images/real-estate/single/th05.jpg",450,274],caption:"Gallery caption #3",className:"rounded"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/06.jpg",thumb:["antiru/images/real-estate/single/th06.jpg",450,274],caption:"Gallery caption #4",className:"rounded"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,children:(0,t.jsx)(h.Z,{href:"https://www.youtube.com/watch?v=DuLp5spvqXA",video:!0,thumb:["antiru/images/real-estate/single/th07.jpg",450,274],caption:"Gallery caption #5",className:"rounded"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/08.jpg",thumb:["antiru/images/real-estate/single/th08.jpg",450,274],caption:"Gallery caption #6",className:"rounded"})})]})})}),(0,t.jsx)(g.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import Row from 'react-bootstrap/Row'\nimport Col from 'react-bootstrap/Col'\nimport GalleryItem from '../components/GalleryItem'\nimport LightGallery from 'lightgallery/react'\nimport lgVideo from 'lightgallery/plugins/video'\nimport lgZoom from 'lightgallery/plugins/zoom'\nimport lgFullScreen from 'lightgallery/plugins/fullscreen'\nimport 'lightgallery/css/lightgallery.css'\nimport 'lightgallery/css/lg-video.css'\nimport 'lightgallery/css/lg-zoom.css'\nimport 'lightgallery/css/lg-fullscreen.css'\n\n{/* Gallery grid with gutters (mixed image/video content) */}\n<LightGallery\n  plugins={[lgVideo, lgZoom, lgFullScreen]}\n  selector='.gallery-item'\n  zoomFromOrigin={false}\n>\n  <Row className='g-4'>\n    <Col xl={4} sm={6}>\n      <GalleryItem\n        href='/images/real-estate/single/03.jpg'\n        thumb={['/images/real-estate/single/th03.jpg', 450, 274]}\n        caption='Gallery caption #1'\n        className='rounded'\n      />\n    </Col>\n    <Col xl={4} sm={6}>\n      <GalleryItem\n        href='/images/real-estate/single/04.jpg'\n        thumb={['/images/real-estate/single/th04.jpg', 450, 274]}\n        caption='Gallery caption #2'\n        className='rounded'\n      />\n    </Col>\n    <Col xl={4} sm={6}>\n      <GalleryItem\n        href='https://www.youtube.com/watch?v=BBOlp54-gW4'\n        video\n        thumb={['/images/real-estate/single/th05.jpg', 450, 274]}\n        caption='Gallery caption #3'\n        className='rounded'\n      />\n    </Col>\n    <Col xl={4} sm={6}>\n      <GalleryItem\n        href='/images/real-estate/single/06.jpg'\n        thumb={['/images/real-estate/single/th06.jpg', 450, 274]}\n        caption='Gallery caption #4'\n        className='rounded'\n      />\n    </Col>\n    <Col xl={4} sm={6}>\n      <GalleryItem\n        href='https://www.youtube.com/watch?v=DuLp5spvqXA'\n        video\n        thumb={['/images/real-estate/single/th07.jpg', 450, 274]}\n        caption='Gallery caption #5'\n        className='rounded'\n      />\n    </Col>\n    <Col xl={4} sm={6}>\n      <GalleryItem\n        href='/images/real-estate/single/08.jpg'\n        thumb={['/images/real-estate/single/th08.jpg', 450, 274]}\n        caption='Gallery caption #6'\n        className='rounded'\n      />\n    </Col>\n  </Row>\n</LightGallery>"})})]}),(0,t.jsxs)(s.Z,{id:"gallery-grid-nogutters",title:"Grid no gutters",children:[(0,t.jsx)(g.Z.Pane,{eventKey:"preview",children:(0,t.jsx)(d.Z,{selector:".gallery-item",licenseKey:"D4194FDD-48924833-A54AECA3-D6F8E646",plugins:[x.Z,y.Z,j.Z],zoomFromOrigin:!1,children:(0,t.jsxs)(r.Z,{className:"g-0",children:[(0,t.jsx)(o.Z,{xl:4,sm:6,className:"border border-light",children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/03.jpg",thumb:["antiru/images/real-estate/single/th03.jpg",450,274],caption:"Gallery caption #1"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,className:"border border-light",children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/04.jpg",thumb:["antiru/images/real-estate/single/th04.jpg",450,274],caption:"Gallery caption #2"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,className:"border border-light",children:(0,t.jsx)(h.Z,{href:"https://www.youtube.com/watch?v=BBOlp54-gW4",video:!0,thumb:["antiru/images/real-estate/single/th05.jpg",450,274],caption:"Gallery caption #3"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,className:"border border-light",children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/06.jpg",thumb:["antiru/images/real-estate/single/th06.jpg",450,274],caption:"Gallery caption #4"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,className:"border border-light",children:(0,t.jsx)(h.Z,{href:"https://www.youtube.com/watch?v=DuLp5spvqXA",video:!0,thumb:["antiru/images/real-estate/single/th07.jpg",450,274],caption:"Gallery caption #5"})}),(0,t.jsx)(o.Z,{xl:4,sm:6,className:"border border-light",children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/08.jpg",thumb:["antiru/images/real-estate/single/th08.jpg",450,274],caption:"Gallery caption #6"})})]})})}),(0,t.jsx)(g.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import Row from 'react-bootstrap/Row'\nimport Col from 'react-bootstrap/Col'\nimport GalleryItem from '../components/GalleryItem'\nimport LightGallery from 'lightgallery/react'\nimport lgVideo from 'lightgallery/plugins/video'\nimport lgZoom from 'lightgallery/plugins/zoom'\nimport lgFullScreen from 'lightgallery/plugins/fullscreen'\nimport 'lightgallery/css/lightgallery.css'\nimport 'lightgallery/css/lg-video.css'\nimport 'lightgallery/css/lg-zoom.css'\nimport 'lightgallery/css/lg-fullscreen.css'\n\n{/* Gallery grid with gutters (mixed image/video content) */}\n<LightGallery\n  plugins={[lgVideo, lgZoom, lgFullScreen]}\n  selector='.gallery-item'\n  zoomFromOrigin={false}\n>\n  <Row className='g-0'>\n    <Col xl={4} sm={6} className='border border-light'>\n      <GalleryItem\n        href='/images/real-estate/single/03.jpg'\n        thumb={['/images/real-estate/single/th03.jpg', 450, 274]}\n        caption='Gallery caption #1'\n      />\n    </Col>\n    <Col xl={4} sm={6} className='border border-light'>\n      <GalleryItem\n        href='/images/real-estate/single/04.jpg'\n        thumb={['/images/real-estate/single/th04.jpg', 450, 274]}\n        caption='Gallery caption #2'\n      />\n    </Col>\n    <Col xl={4} sm={6} className='border border-light'>\n      <GalleryItem\n        href='https://www.youtube.com/watch?v=BBOlp54-gW4'\n        video\n        thumb={['/images/real-estate/single/th05.jpg', 450, 274]}\n        caption='Gallery caption #3'\n      />\n    </Col>\n    <Col xl={4} sm={6} className='border border-light'>\n      <GalleryItem\n        href='/images/real-estate/single/06.jpg'\n        thumb={['/images/real-estate/single/th06.jpg', 450, 274]}\n        caption='Gallery caption #4'\n      />\n    </Col>\n    <Col xl={4} sm={6} className='border border-light'>\n      <GalleryItem\n        href='https://www.youtube.com/watch?v=DuLp5spvqXA'\n        video\n        thumb={['/images/real-estate/single/th07.jpg', 450, 274]}\n        caption='Gallery caption #5'\n      />\n    </Col>\n    <Col xl={4} sm={6} className='border border-light'>\n      <GalleryItem\n        href='/images/real-estate/single/08.jpg'\n        thumb={['/images/real-estate/single/th08.jpg', 450, 274]}\n        caption='Gallery caption #6'\n      />\n    </Col>\n  </Row>\n</LightGallery>"})})]}),(0,t.jsxs)(s.Z,{id:"gallery-card",title:"Inside card",children:[(0,t.jsx)(g.Z.Pane,{eventKey:"preview",children:(0,t.jsxs)(m.Z,{style:{maxWidth:"25rem"},children:[(0,t.jsx)(d.Z,{licenseKey:"D4194FDD-48924833-A54AECA3-D6F8E646",plugins:[y.Z,j.Z],children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/02.jpg",thumb:["antiru/images/real-estate/single/02.jpg",398,279],caption:"Gallery image caption",className:"card-img-top"})}),(0,t.jsxs)(m.Z.Body,{children:[(0,t.jsx)(m.Z.Title,{as:"h5",children:"Card with gallery thumbnail"}),(0,t.jsx)(m.Z.Text,{className:"fs-sm text-muted",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),(0,t.jsx)(c.Z,{size:"sm",children:"Go somewhere"})]})]})}),(0,t.jsx)(g.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import Card from 'react-bootstrap/Card'\nimport Button from 'react-bootstrap/Button'\nimport GalleryItem from '../components/GalleryItem'\nimport LightGallery from 'lightgallery/react'\nimport lgZoom from 'lightgallery/plugins/zoom'\nimport lgFullScreen from 'lightgallery/plugins/fullscreen'\nimport 'lightgallery/css/lightgallery.css'\nimport 'lightgallery/css/lg-zoom.css'\nimport 'lightgallery/css/lg-fullscreen.css'\n\n{/* Gallery inside card example */}\n<Card style={{maxWidth: '25rem'}}>\n  <LightGallery plugins={[lgZoom, lgFullScreen]}>\n    <GalleryItem\n      href='/images/real-estate/single/02.jpg'\n      thumb={['/images/real-estate/single/02.jpg', 398, 279]}\n      caption='Gallery image caption'\n      className=\"card-img-top\"\n    />\n  </LightGallery>\n  <Card.Body>\n    <Card.Title as='h5'>Card with gallery thumbnail</Card.Title>\n    <Card.Text className='fs-sm text-muted'>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</Card.Text>\n    <Button size='sm'>Go somewhere</Button>\n  </Card.Body>\n</Card>"})})]}),(0,t.jsxs)(s.Z,{id:"gallery-carousel",title:"Inside carousel",children:[(0,t.jsxs)(g.Z.Pane,{eventKey:"preview",children:[(0,t.jsxs)("div",{className:"position-relative px-5",children:[(0,t.jsx)(d.Z,{selector:".gallery-item",licenseKey:"D4194FDD-48924833-A54AECA3-D6F8E646",plugins:[x.Z,y.Z,j.Z],zoomFromOrigin:!1,children:(0,t.jsxs)(b.tq,{modules:[f.W_,f.tl],navigation:{prevEl:"#prev",nextEl:"#next"},pagination:{el:"#pagination",clickable:!0},loop:!0,grabCursor:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:16},576:{slidesPerView:2,spaceBetween:20},1500:{slidesPerView:3,spaceBetween:24}},children:[(0,t.jsx)(b.o5,{children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/03.jpg",thumb:["antiru/images/real-estate/single/th03.jpg",450,274],caption:"Gallery caption #1",className:"rounded"})}),(0,t.jsx)(b.o5,{children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/04.jpg",thumb:["antiru/images/real-estate/single/th04.jpg",450,274],caption:"Gallery caption #2",className:"rounded"})}),(0,t.jsx)(b.o5,{children:(0,t.jsx)(h.Z,{href:"https://www.youtube.com/watch?v=BBOlp54-gW4",video:!0,thumb:["antiru/images/real-estate/single/th05.jpg",450,274],caption:"Gallery caption #3",className:"rounded"})}),(0,t.jsx)(b.o5,{children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/06.jpg",thumb:["antiru/images/real-estate/single/th06.jpg",450,274],caption:"Gallery caption #4",className:"rounded"})}),(0,t.jsx)(b.o5,{children:(0,t.jsx)(h.Z,{href:"https://www.youtube.com/watch?v=DuLp5spvqXA",video:!0,thumb:["antiru/images/real-estate/single/th07.jpg",450,274],caption:"Gallery caption #5",className:"rounded"})}),(0,t.jsx)(b.o5,{children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/08.jpg",thumb:["antiru/images/real-estate/single/th08.jpg",450,274],caption:"Gallery caption #6",className:"rounded"})})]})}),(0,t.jsx)(c.Z,{id:"prev",variant:"prev"}),(0,t.jsx)(c.Z,{id:"next",variant:"next"})]}),(0,t.jsx)("div",{id:"pagination",className:"swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3"})]}),(0,t.jsx)(g.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import GalleryItem from '../components/GalleryItem'\nimport LightGallery from 'lightgallery/react'\nimport lgVideo from 'lightgallery/plugins/video'\nimport lgZoom from 'lightgallery/plugins/zoom'\nimport lgFullScreen from 'lightgallery/plugins/fullscreen'\nimport { Navigation, Pagination, EffectFade } from 'swiper'\nimport { Swiper, SwiperSlide } from 'swiper/react'\nimport 'lightgallery/css/lightgallery.css'\nimport 'lightgallery/css/lg-video.css'\nimport 'lightgallery/css/lg-zoom.css'\nimport 'lightgallery/css/lg-fullscreen.css'\nimport 'swiper/css'\nimport 'swiper/css/navigation'\nimport 'swiper/css/pagination'\n\n{/* Gallery inside carousel example */}\n<div className='position-relative px-5'>\n  <LightGallery\n    plugins={[lgVideo, lgZoom, lgFullScreen]}\n    selector='.gallery-item'\n    zoomFromOrigin={false}\n  > \n    \n    {/* Swiper carousel */}\n    <Swiper\n      modules={[Navigation, Pagination]}\n      navigation={{\n        prevEl: '#prev',\n        nextEl: '#next'\n      }}\n      pagination={{\n        el: '#pagination',\n        clickable: true\n      }}\n      loop\n      grabCursor\n      breakpoints={{\n        0: {\n          slidesPerView: 1,\n          spaceBetween: 16\n        },\n        576: {\n          slidesPerView: 2,\n          spaceBetween: 20\n        },\n        991: {\n          slidesPerView: 3,\n          spaceBetween: 24\n        }\n      }}\n    >\n      \n      {/* Item */}\n      <SwiperSlide>\n        <GalleryItem\n          href='/images/real-estate/single/03.jpg'\n          thumb={['/images/real-estate/single/th03.jpg', 450, 274]}\n          caption='Gallery caption #1'\n          className='rounded'\n        />\n      </SwiperSlide>\n\n      {/* Item */}\n      <SwiperSlide>\n        <GalleryItem\n          href='/images/real-estate/single/04.jpg'\n          thumb={['/images/real-estate/single/th04.jpg', 450, 274]}\n          caption='Gallery caption #2'\n          className='rounded'\n        />\n      </SwiperSlide>\n\n      {/* Item */}\n      <SwiperSlide>\n        <GalleryItem\n          href='https://www.youtube.com/watch?v=BBOlp54-gW4'\n          video\n          thumb={['/images/real-estate/single/th05.jpg', 450, 274]}\n          caption='Gallery caption #3'\n          className='rounded'\n        />\n      </SwiperSlide>\n\n      {/* Item */}\n      <SwiperSlide>\n        <GalleryItem\n          href='/images/real-estate/single/06.jpg'\n          thumb={['/images/real-estate/single/th06.jpg', 450, 274]}\n          caption='Gallery caption #4'\n          className='rounded'\n        />\n      </SwiperSlide>\n\n      {/* Item */}\n      <SwiperSlide>\n        <GalleryItem\n          href='https://www.youtube.com/watch?v=DuLp5spvqXA'\n          video\n          thumb={['/images/real-estate/single/th07.jpg', 450, 274]}\n          caption='Gallery caption #5'\n          className='rounded'\n        />\n      </SwiperSlide>\n\n      {/* Item */}\n      <SwiperSlide>\n        <GalleryItem\n          href='/images/real-estate/single/08.jpg'\n          thumb={['/images/real-estate/single/th08.jpg', 450, 274]}\n          caption='Gallery caption #6'\n          className='rounded'\n        />\n      </SwiperSlide>\n    </Swiper>\n  </LightGallery>\n\n  {/* External Prev/Next buttons */}\n  <Button id='prev' variant='prev' />\n  <Button id='next' variant='next' />\n</div>\n\n{/* External pagination (bullets) buttons */}\n<div id='pagination' className='swiper-pagination position-relative bottom-0 pt-2 mt-4 mb-lg-3'></div>"})})]}),(0,t.jsxs)(s.Z,{id:"gallery-thumbnails",title:"Thumbnails",children:[(0,t.jsx)(g.Z.Pane,{eventKey:"preview",children:(0,t.jsx)(d.Z,{selector:".gallery-item",licenseKey:"D4194FDD-48924833-A54AECA3-D6F8E646",plugins:[u.Z,y.Z,j.Z],zoomFromOrigin:!1,exThumbImage:"data-external-thumb-image",children:(0,t.jsxs)(r.Z,{className:"g-2 g-md-3",children:[(0,t.jsx)(o.Z,{sm:8,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/01.jpg",thumb:["antiru/images/real-estate/single/01.jpg",720,510],"data-external-thumb-image":"antiru/images/real-estate/single/01.jpg",imgAlt:"Image caption #1",className:"rounded-3"})}),(0,t.jsxs)(o.Z,{sm:4,children:[(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/02.jpg",thumb:["antiru/images/real-estate/single/02.jpg",450,316],"data-external-thumb-image":"antiru/images/real-estate/single/02.jpg",imgAlt:"Image caption #2",className:"rounded-3 mb-2 mb-md-3"}),(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/03.jpg",thumb:["antiru/images/real-estate/single/03.jpg",450,316],"data-external-thumb-image":"antiru/images/real-estate/single/th03.jpg",imgAlt:"Image caption #3",className:"rounded-3"})]}),(0,t.jsx)(o.Z,{xs:12,children:(0,t.jsxs)(r.Z,{className:"g-2 g-md-3",children:[(0,t.jsx)(o.Z,{sm:!0,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/04.jpg",thumb:["antiru/images/real-estate/single/th04.jpg",450,275],"data-external-thumb-image":"antiru/images/real-estate/single/th04.jpg",imgAlt:"Image caption #4",className:"rounded"})}),(0,t.jsx)(o.Z,{sm:!0,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/05.jpg",thumb:["antiru/images/real-estate/single/th05.jpg",450,275],"data-external-thumb-image":"antiru/images/real-estate/single/th05.jpg",imgAlt:"Image caption #5",className:"rounded"})}),(0,t.jsx)(o.Z,{sm:!0,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/06.jpg",thumb:["antiru/images/real-estate/single/th06.jpg",450,275],"data-external-thumb-image":"antiru/images/real-estate/single/th06.jpg",imgAlt:"Image caption #6",className:"rounded"})}),(0,t.jsx)(o.Z,{sm:!0,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/07.jpg",thumb:["antiru/images/real-estate/single/th07.jpg",450,275],"data-external-thumb-image":"antiru/images/real-estate/single/th07.jpg",imgAlt:"Image caption #7",className:"rounded"})}),(0,t.jsx)(o.Z,{sm:!0,children:(0,t.jsx)(h.Z,{href:"antiru/images/real-estate/single/08.jpg",thumb:["antiru/images/real-estate/single/th08.jpg",450,275],"data-external-thumb-image":"antiru/images/real-estate/single/th08.jpg",imgAlt:"Image caption #8",caption:(0,t.jsxs)(t.Fragment,{children:["+5 ",(0,t.jsx)("span",{className:"d-inline d-sm-none d-md-inline",children:"photos"})]}),className:"more-item rounded"})})]})})]})})}),(0,t.jsx)(g.Z.Pane,{eventKey:"code",children:(0,t.jsx)(p.Z,{language:"jsx",children:"import Row from 'react-bootstrap/Row'\nimport Col from 'react-bootstrap/Col'\nimport GalleryItem from '../components/GalleryItem'\nimport LightGallery from 'lightgallery/react'\nimport lgThumbnail from 'lightgallery/plugins/thumbnail'\nimport lgZoom from 'lightgallery/plugins/zoom'\nimport lgFullScreen from 'lightgallery/plugins/fullscreen'\nimport 'lightgallery/css/lightgallery.css'\nimport 'lightgallery/css/lg-thumbnail.css'\nimport 'lightgallery/css/lg-zoom.css'\nimport 'lightgallery/css/lg-fullscreen.css'\n\n{/* Gallery with thumbnails example */}\n<LightGallery\n  plugins={[lgThumbnail, lgZoom, lgFullScreen]}\n  selector='.gallery-item'\n  zoomFromOrigin={false}\n  exThumbImage='data-external-thumb-image'\n>\n<Row className='g-2 g-md-3'>\n  <Col sm={8}>\n    <GalleryItem\n      href='/images/real-estate/single/01.jpg'\n      thumb={['/images/real-estate/single/01.jpg', 720, 510]}\n      data-external-thumb-image='/images/real-estate/single/01.jpg'\n      imgAlt='Image caption #1'\n      className='rounded-3'\n    />\n  </Col>\n  <Col sm={4}>\n    <GalleryItem\n      href='/images/real-estate/single/02.jpg'\n      thumb={['/images/real-estate/single/02.jpg', 450, 316]}\n      data-external-thumb-image='/images/real-estate/single/02.jpg'\n      imgAlt='Image caption #2'\n      className='rounded-3 mb-2 mb-md-3'\n    />\n    <GalleryItem\n      href='/images/real-estate/single/03.jpg'\n      thumb={['/images/real-estate/single/03.jpg', 450, 316]}\n      data-external-thumb-image='/images/real-estate/single/th03.jpg'\n      imgAlt='Image caption #3'\n      className='rounded-3'\n    />\n  </Col>\n  <Col xs={12}>\n    <Row className='g-2 g-md-3'>\n      <Col sm={true}>\n        <GalleryItem\n          href='/images/real-estate/single/04.jpg'\n          thumb={['/images/real-estate/single/th04.jpg', 450, 275]}\n          data-external-thumb-image='/images/real-estate/single/th04.jpg'\n          imgAlt='Image caption #4'\n          className='rounded'\n        />\n      </Col>\n      <Col sm={true}>\n        <GalleryItem\n          href='/images/real-estate/single/05.jpg'\n          thumb={['/images/real-estate/single/th05.jpg', 450, 275]}\n          data-external-thumb-image='/images/real-estate/single/th05.jpg'\n          imgAlt='Image caption #5'\n          className='rounded'\n        />\n      </Col>\n      <Col sm={true}>\n        <GalleryItem\n          href='/images/real-estate/single/06.jpg'\n          thumb={['/images/real-estate/single/th06.jpg', 450, 275]}\n          data-external-thumb-image='/images/real-estate/single/th06.jpg'\n          imgAlt='Image caption #6'\n          className='rounded'\n        />\n      </Col>\n      <Col sm={true}>\n        <GalleryItem\n          href='/images/real-estate/single/07.jpg'\n          thumb={['/images/real-estate/single/th07.jpg', 450, 275]}\n          data-external-thumb-image='/images/real-estate/single/th07.jpg'\n          imgAlt='Image caption #7'\n          className='rounded'\n        />\n      </Col>\n      <Col sm={true}>\n        <GalleryItem\n          href='/images/real-estate/single/08.jpg'\n          thumb={['/images/real-estate/single/th08.jpg', 450, 275]}\n          data-external-thumb-image='/images/real-estate/single/th08.jpg'\n          imgAlt='Image caption #8'\n          caption={<>+5 <span className='d-inline d-sm-none d-md-inline'>photos</span></>}\n          className='more-item rounded'\n        />\n      </Col>\n    </Row>\n  </Col>\n</Row>\n</LightGallery>"})})]})]})}},88375:function(e,l,a){"use strict";var t=a(94184),n=a.n(t),s=a(67294),i=a(15446),r=a(78146),o=a(13551),g=a(76792),m=a(41068),c=a(41485),p=a(39602),h=a(66611),d=a(85893);const u=(0,p.Z)("h4");u.displayName="DivStyledAsH4";const y=(0,h.Z)("alert-heading",{Component:u}),j=(0,h.Z)("alert-link",{Component:o.Z}),x={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},f=s.forwardRef(((e,l)=>{const{bsPrefix:a,show:t,closeLabel:s,closeVariant:o,className:p,children:h,variant:u,onClose:y,dismissible:j,transition:x,...f}=(0,i.Ch)(e,{show:"onClose"}),b=(0,g.vE)(a,"alert"),w=(0,r.Z)((e=>{y&&y(!1,e)})),Z=!0===x?m.Z:x,v=(0,d.jsxs)("div",{role:"alert",...Z?void 0:f,ref:l,className:n()(p,b,u&&`${b}-${u}`,j&&`${b}-dismissible`),children:[j&&(0,d.jsx)(c.Z,{onClick:w,"aria-label":s,variant:o}),h]});return Z?(0,d.jsx)(Z,{unmountOnExit:!0,...f,ref:void 0,in:t,children:v}):t?v:null}));f.displayName="Alert",f.defaultProps=x,l.Z=Object.assign(f,{Link:j,Heading:y})}},function(e){e.O(0,[3675,4222,4567,2141,7472,94,1444,2523,5438,8840,9774,2888,179],(function(){return l=28146,e(e.s=l);var l}));var l=e.O();_N_E=l}]);