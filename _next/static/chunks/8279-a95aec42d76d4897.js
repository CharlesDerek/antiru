"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8279],{45704:function(t,e,n){n.d(e,{kZ:function(){return b}});var r=n(50400),o=n(82163),i=n(62057),a=n(62556);var f=n(96333),u=n(4063),c=n(67252),s=n(60611),p=n(138);function d(t,e,n){void 0===n&&(n=!1);var d=(0,a.Re)(e),l=(0,a.Re)(e)&&function(t){var e=t.getBoundingClientRect(),n=(0,p.NM)(e.width)/t.offsetWidth||1,r=(0,p.NM)(e.height)/t.offsetHeight||1;return 1!==n||1!==r}(e),v=(0,c.Z)(e),h=(0,r.Z)(t,l),m={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(d||!d&&!n)&&(("body"!==(0,f.Z)(e)||(0,s.Z)(v))&&(m=function(t){return t!==(0,i.Z)(t)&&(0,a.Re)(t)?{scrollLeft:(e=t).scrollLeft,scrollTop:e.scrollTop}:(0,o.Z)(t);var e}(e)),(0,a.Re)(e)?((g=(0,r.Z)(e,!0)).x+=e.clientLeft,g.y+=e.clientTop):v&&(g.x=(0,u.Z)(v))),{x:h.left+m.scrollLeft-g.x,y:h.top+m.scrollTop-g.y,width:h.width,height:h.height}}var l=n(40583),v=n(31492),h=n(98552),m=n(87701);function g(t){var e=new Map,n=new Set,r=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),r}function Z(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}var y={placement:"bottom",modifiers:[],strategy:"absolute"};function w(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function b(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,o=e.defaultOptions,i=void 0===o?y:o;return function(t,e,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},y,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},f=[],u=!1,c={state:o,setOptions:function(n){var u="function"===typeof n?n(o.options):n;s(),o.options=Object.assign({},i,o.options,u),o.scrollParents={reference:(0,a.kK)(t)?(0,v.Z)(t):t.contextElement?(0,v.Z)(t.contextElement):[],popper:(0,v.Z)(e)};var p=function(t){var e=g(t);return m.xs.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}(function(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(t){return t.enabled})),o.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,i=t.effect;if("function"===typeof i){var a=i({state:o,name:e,instance:c,options:r}),u=function(){};f.push(a||u)}})),c.update()},forceUpdate:function(){if(!u){var t=o.elements,e=t.reference,n=t.popper;if(w(e,n)){o.rects={reference:d(e,(0,h.Z)(n),"fixed"===o.options.strategy),popper:(0,l.Z)(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(t){return o.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,f=i.options,s=void 0===f?{}:f,p=i.name;"function"===typeof a&&(o=a({state:o,options:s,name:p,instance:c})||o)}else o.reset=!1,r=-1}}},update:Z((function(){return new Promise((function(t){c.forceUpdate(),t(o)}))})),destroy:function(){s(),u=!0}};if(!w(t,e))return c;function s(){f.forEach((function(t){return t()})),f=[]}return c.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}},94985:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(62556);function o(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&(0,r.Zq)(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},50400:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(62556),o=n(138);function i(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),i=1,a=1;if((0,r.Re)(t)&&e){var f=t.offsetHeight,u=t.offsetWidth;u>0&&(i=(0,o.NM)(n.width)/u||1),f>0&&(a=(0,o.NM)(n.height)/f||1)}return{width:n.width/i,height:n.height/a,top:n.top/a,right:n.right/i,bottom:n.bottom/a,left:n.left/i,x:n.left/i,y:n.top/a}}},43062:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(62057);function o(t){return(0,r.Z)(t).getComputedStyle(t)}},67252:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(62556);function o(t){return(((0,r.kK)(t)?t.ownerDocument:t.document)||window.document).documentElement}},40583:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(50400);function o(t){var e=(0,r.Z)(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}},96333:function(t,e,n){function r(t){return t?(t.nodeName||"").toLowerCase():null}n.d(e,{Z:function(){return r}})},98552:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(62057),o=n(96333),i=n(43062),a=n(62556);function f(t){return["table","td","th"].indexOf((0,o.Z)(t))>=0}var u=n(95923);function c(t){return(0,a.Re)(t)&&"fixed"!==(0,i.Z)(t).position?t.offsetParent:null}function s(t){for(var e=(0,r.Z)(t),n=c(t);n&&f(n)&&"static"===(0,i.Z)(n).position;)n=c(n);return n&&("html"===(0,o.Z)(n)||"body"===(0,o.Z)(n)&&"static"===(0,i.Z)(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&(0,a.Re)(t)&&"fixed"===(0,i.Z)(t).position)return null;var n=(0,u.Z)(t);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&["html","body"].indexOf((0,o.Z)(n))<0;){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||e}},95923:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(96333),o=n(67252),i=n(62556);function a(t){return"html"===(0,r.Z)(t)?t:t.assignedSlot||t.parentNode||((0,i.Zq)(t)?t.host:null)||(0,o.Z)(t)}},62057:function(t,e,n){function r(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}n.d(e,{Z:function(){return r}})},82163:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(62057);function o(t){var e=(0,r.Z)(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}},4063:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(50400),o=n(67252),i=n(82163);function a(t){return(0,r.Z)((0,o.Z)(t)).left+(0,i.Z)(t).scrollLeft}},62556:function(t,e,n){n.d(e,{Re:function(){return i},Zq:function(){return a},kK:function(){return o}});var r=n(62057);function o(t){return t instanceof(0,r.Z)(t).Element||t instanceof Element}function i(t){return t instanceof(0,r.Z)(t).HTMLElement||t instanceof HTMLElement}function a(t){return"undefined"!==typeof ShadowRoot&&(t instanceof(0,r.Z)(t).ShadowRoot||t instanceof ShadowRoot)}},60611:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(43062);function o(t){var e=(0,r.Z)(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},31492:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(95923),o=n(60611),i=n(96333),a=n(62556);function f(t){return["html","body","#document"].indexOf((0,i.Z)(t))>=0?t.ownerDocument.body:(0,a.Re)(t)&&(0,o.Z)(t)?t:f((0,r.Z)(t))}var u=n(62057);function c(t,e){var n;void 0===e&&(e=[]);var i=f(t),a=i===(null==(n=t.ownerDocument)?void 0:n.body),s=(0,u.Z)(i),p=a?[s].concat(s.visualViewport||[],(0,o.Z)(i)?i:[]):i,d=e.concat(p);return a?d:d.concat(c((0,r.Z)(p)))}},87701:function(t,e,n){n.d(e,{BL:function(){return c},Ct:function(){return m},F2:function(){return i},I:function(){return o},Pj:function(){return d},YP:function(){return v},bw:function(){return h},d7:function(){return f},k5:function(){return l},mv:function(){return u},t$:function(){return a},ut:function(){return s},we:function(){return r},xs:function(){return g},zV:function(){return p}});var r="top",o="bottom",i="right",a="left",f="auto",u=[r,o,i,a],c="start",s="end",p="clippingParents",d="viewport",l="popper",v="reference",h=u.reduce((function(t,e){return t.concat([e+"-"+c,e+"-"+s])}),[]),m=[].concat(u,[f]).reduce((function(t,e){return t.concat([e,e+"-"+c,e+"-"+s])}),[]),g=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},66896:function(t,e,n){var r=n(6206),o=n(40583),i=n(94985),a=n(98552),f=n(11516),u=n(57516),c=n(63293),s=n(33706),p=n(87701);e.Z={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,i=t.name,d=t.options,l=n.elements.arrow,v=n.modifiersData.popperOffsets,h=(0,r.Z)(n.placement),m=(0,f.Z)(h),g=[p.t$,p.F2].indexOf(h)>=0?"height":"width";if(l&&v){var Z=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,(0,c.Z)("number"!==typeof t?t:(0,s.Z)(t,p.mv))}(d.padding,n),y=(0,o.Z)(l),w="y"===m?p.we:p.t$,b="y"===m?p.I:p.F2,x=n.rects.reference[g]+n.rects.reference[m]-v[m]-n.rects.popper[g],O=v[m]-n.rects.reference[m],k=(0,a.Z)(l),E=k?"y"===m?k.clientHeight||0:k.clientWidth||0:0,j=x/2-O/2,D=Z[w],L=E-y[g]-Z[b],R=E/2-y[g]/2+j,M=(0,u.u)(D,R,L),A=m;n.modifiersData[i]=((e={})[A]=M,e.centerOffset=M-R,e)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=e.elements.popper.querySelector(r)))&&(0,i.Z)(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},36531:function(t,e,n){var r=n(87701),o=n(98552),i=n(62057),a=n(67252),f=n(43062),u=n(6206),c=n(14943),s=n(138),p={top:"auto",right:"auto",bottom:"auto",left:"auto"};function d(t){var e,n=t.popper,u=t.popperRect,c=t.placement,d=t.variation,l=t.offsets,v=t.position,h=t.gpuAcceleration,m=t.adaptive,g=t.roundOffsets,Z=t.isFixed,y=l.x,w=void 0===y?0:y,b=l.y,x=void 0===b?0:b,O="function"===typeof g?g({x:w,y:x}):{x:w,y:x};w=O.x,x=O.y;var k=l.hasOwnProperty("x"),E=l.hasOwnProperty("y"),j=r.t$,D=r.we,L=window;if(m){var R=(0,o.Z)(n),M="clientHeight",A="clientWidth";if(R===(0,i.Z)(n)&&(R=(0,a.Z)(n),"static"!==(0,f.Z)(R).position&&"absolute"===v&&(M="scrollHeight",A="scrollWidth")),R=R,c===r.we||(c===r.t$||c===r.F2)&&d===r.ut)D=r.I,x-=(Z&&R===L&&L.visualViewport?L.visualViewport.height:R[M])-u.height,x*=h?1:-1;if(c===r.t$||(c===r.we||c===r.I)&&d===r.ut)j=r.F2,w-=(Z&&R===L&&L.visualViewport?L.visualViewport.width:R[A])-u.width,w*=h?1:-1}var F,P=Object.assign({position:v},m&&p),B=!0===g?function(t){var e=t.x,n=t.y,r=window.devicePixelRatio||1;return{x:(0,s.NM)(e*r)/r||0,y:(0,s.NM)(n*r)/r||0}}({x:w,y:x}):{x:w,y:x};return w=B.x,x=B.y,h?Object.assign({},P,((F={})[D]=E?"0":"",F[j]=k?"0":"",F.transform=(L.devicePixelRatio||1)<=1?"translate("+w+"px, "+x+"px)":"translate3d("+w+"px, "+x+"px, 0)",F)):Object.assign({},P,((e={})[D]=E?x+"px":"",e[j]=k?w+"px":"",e.transform="",e))}e.Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,f=n.roundOffsets,s=void 0===f||f,p={placement:(0,u.Z)(e.placement),variation:(0,c.Z)(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,d(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:s})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,d(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}}},82372:function(t,e,n){var r=n(62057),o={passive:!0};e.Z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,a=i.scroll,f=void 0===a||a,u=i.resize,c=void 0===u||u,s=(0,r.Z)(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return f&&p.forEach((function(t){t.addEventListener("scroll",n.update,o)})),c&&s.addEventListener("resize",n.update,o),function(){f&&p.forEach((function(t){t.removeEventListener("scroll",n.update,o)})),c&&s.removeEventListener("resize",n.update,o)}},data:{}}},68855:function(t,e,n){n.d(e,{Z:function(){return p}});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(t){return t.replace(/left|right|bottom|top/g,(function(t){return r[t]}))}var i=n(6206),a={start:"end",end:"start"};function f(t){return t.replace(/start|end/g,(function(t){return a[t]}))}var u=n(6486),c=n(14943),s=n(87701);var p={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var a=n.mainAxis,p=void 0===a||a,d=n.altAxis,l=void 0===d||d,v=n.fallbackPlacements,h=n.padding,m=n.boundary,g=n.rootBoundary,Z=n.altBoundary,y=n.flipVariations,w=void 0===y||y,b=n.allowedAutoPlacements,x=e.options.placement,O=(0,i.Z)(x),k=v||(O===x||!w?[o(x)]:function(t){if((0,i.Z)(t)===s.d7)return[];var e=o(t);return[f(t),e,f(e)]}(x)),E=[x].concat(k).reduce((function(t,n){return t.concat((0,i.Z)(n)===s.d7?function(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=n.boundary,a=n.rootBoundary,f=n.padding,p=n.flipVariations,d=n.allowedAutoPlacements,l=void 0===d?s.Ct:d,v=(0,c.Z)(r),h=v?p?s.bw:s.bw.filter((function(t){return(0,c.Z)(t)===v})):s.mv,m=h.filter((function(t){return l.indexOf(t)>=0}));0===m.length&&(m=h);var g=m.reduce((function(e,n){return e[n]=(0,u.Z)(t,{placement:n,boundary:o,rootBoundary:a,padding:f})[(0,i.Z)(n)],e}),{});return Object.keys(g).sort((function(t,e){return g[t]-g[e]}))}(e,{placement:n,boundary:m,rootBoundary:g,padding:h,flipVariations:w,allowedAutoPlacements:b}):n)}),[]),j=e.rects.reference,D=e.rects.popper,L=new Map,R=!0,M=E[0],A=0;A<E.length;A++){var F=E[A],P=(0,i.Z)(F),B=(0,c.Z)(F)===s.BL,V=[s.we,s.I].indexOf(P)>=0,W=V?"width":"height",I=(0,u.Z)(e,{placement:F,boundary:m,rootBoundary:g,altBoundary:Z,padding:h}),C=V?B?s.F2:s.t$:B?s.I:s.we;j[W]>D[W]&&(C=o(C));var H=o(C),N=[];if(p&&N.push(I[P]<=0),l&&N.push(I[C]<=0,I[H]<=0),N.every((function(t){return t}))){M=F,R=!1;break}L.set(F,N)}if(R)for(var q=function(t){var e=E.find((function(e){var n=L.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return M=e,"break"},T=w?3:1;T>0;T--){if("break"===q(T))break}e.placement!==M&&(e.modifiersData[r]._skip=!0,e.placement=M,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},19892:function(t,e,n){var r=n(87701),o=n(6486);function i(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function a(t){return[r.we,r.F2,r.I,r.t$].some((function(e){return t[e]>=0}))}e.Z={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,f=e.rects.popper,u=e.modifiersData.preventOverflow,c=(0,o.Z)(e,{elementContext:"reference"}),s=(0,o.Z)(e,{altBoundary:!0}),p=i(c,r),d=i(s,f,u),l=a(p),v=a(d);e.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:d,isReferenceHidden:l,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}}},82122:function(t,e,n){var r=n(6206),o=n(87701);e.Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,i=t.name,a=n.offset,f=void 0===a?[0,0]:a,u=o.Ct.reduce((function(t,n){return t[n]=function(t,e,n){var i=(0,r.Z)(t),a=[o.t$,o.we].indexOf(i)>=0?-1:1,f="function"===typeof n?n(Object.assign({},e,{placement:t})):n,u=f[0],c=f[1];return u=u||0,c=(c||0)*a,[o.t$,o.F2].indexOf(i)>=0?{x:c,y:u}:{x:u,y:c}}(n,e.rects,f),t}),{}),c=u[e.placement],s=c.x,p=c.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=p),e.modifiersData[i]=u}}},77421:function(t,e,n){var r=n(72581);e.Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=(0,r.Z)({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}}},394:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(87701),o=n(6206),i=n(11516);var a=n(57516),f=n(40583),u=n(98552),c=n(6486),s=n(14943),p=n(23607),d=n(138);var l={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,l=t.name,v=n.mainAxis,h=void 0===v||v,m=n.altAxis,g=void 0!==m&&m,Z=n.boundary,y=n.rootBoundary,w=n.altBoundary,b=n.padding,x=n.tether,O=void 0===x||x,k=n.tetherOffset,E=void 0===k?0:k,j=(0,c.Z)(e,{boundary:Z,rootBoundary:y,padding:b,altBoundary:w}),D=(0,o.Z)(e.placement),L=(0,s.Z)(e.placement),R=!L,M=(0,i.Z)(D),A="x"===M?"y":"x",F=e.modifiersData.popperOffsets,P=e.rects.reference,B=e.rects.popper,V="function"===typeof E?E(Object.assign({},e.rects,{placement:e.placement})):E,W="number"===typeof V?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),I=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,C={x:0,y:0};if(F){if(h){var H,N="y"===M?r.we:r.t$,q="y"===M?r.I:r.F2,T="y"===M?"height":"width",$=F[M],S=$+j[N],K=$-j[q],_=O?-B[T]/2:0,z=L===r.BL?P[T]:B[T],U=L===r.BL?-B[T]:-P[T],Y=e.elements.arrow,X=O&&Y?(0,f.Z)(Y):{width:0,height:0},G=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:(0,p.Z)(),J=G[N],Q=G[q],tt=(0,a.u)(0,P[T],X[T]),et=R?P[T]/2-_-tt-J-W.mainAxis:z-tt-J-W.mainAxis,nt=R?-P[T]/2+_+tt+Q+W.mainAxis:U+tt+Q+W.mainAxis,rt=e.elements.arrow&&(0,u.Z)(e.elements.arrow),ot=rt?"y"===M?rt.clientTop||0:rt.clientLeft||0:0,it=null!=(H=null==I?void 0:I[M])?H:0,at=$+et-it-ot,ft=$+nt-it,ut=(0,a.u)(O?(0,d.VV)(S,at):S,$,O?(0,d.Fp)(K,ft):K);F[M]=ut,C[M]=ut-$}if(g){var ct,st="x"===M?r.we:r.t$,pt="x"===M?r.I:r.F2,dt=F[A],lt="y"===A?"height":"width",vt=dt+j[st],ht=dt-j[pt],mt=-1!==[r.we,r.t$].indexOf(D),gt=null!=(ct=null==I?void 0:I[A])?ct:0,Zt=mt?vt:dt-P[lt]-B[lt]-gt+W.altAxis,yt=mt?dt+P[lt]+B[lt]-gt-W.altAxis:ht,wt=O&&mt?(0,a.q)(Zt,dt,yt):(0,a.u)(O?Zt:vt,dt,O?yt:ht);F[A]=wt,C[A]=wt-dt}e.modifiersData[l]=C}},requiresIfExists:["offset"]}},72581:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(6206),o=n(14943),i=n(11516),a=n(87701);function f(t){var e,n=t.reference,f=t.element,u=t.placement,c=u?(0,r.Z)(u):null,s=u?(0,o.Z)(u):null,p=n.x+n.width/2-f.width/2,d=n.y+n.height/2-f.height/2;switch(c){case a.we:e={x:p,y:n.y-f.height};break;case a.I:e={x:p,y:n.y+n.height};break;case a.F2:e={x:n.x+n.width,y:d};break;case a.t$:e={x:n.x-f.width,y:d};break;default:e={x:n.x,y:n.y}}var l=c?(0,i.Z)(c):null;if(null!=l){var v="y"===l?"height":"width";switch(s){case a.BL:e[l]=e[l]-(n[v]/2-f[v]/2);break;case a.ut:e[l]=e[l]+(n[v]/2-f[v]/2)}}return e}},6486:function(t,e,n){n.d(e,{Z:function(){return O}});var r=n(87701),o=n(62057),i=n(67252),a=n(4063);var f=n(43062),u=n(82163),c=n(138);var s=n(31492),p=n(98552),d=n(62556),l=n(50400),v=n(95923),h=n(94985),m=n(96333);function g(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Z(t,e){return e===r.Pj?g(function(t){var e=(0,o.Z)(t),n=(0,i.Z)(t),r=e.visualViewport,f=n.clientWidth,u=n.clientHeight,c=0,s=0;return r&&(f=r.width,u=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=r.offsetLeft,s=r.offsetTop)),{width:f,height:u,x:c+(0,a.Z)(t),y:s}}(t)):(0,d.kK)(e)?function(t){var e=(0,l.Z)(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):g(function(t){var e,n=(0,i.Z)(t),r=(0,u.Z)(t),o=null==(e=t.ownerDocument)?void 0:e.body,s=(0,c.Fp)(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),p=(0,c.Fp)(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),d=-r.scrollLeft+(0,a.Z)(t),l=-r.scrollTop;return"rtl"===(0,f.Z)(o||n).direction&&(d+=(0,c.Fp)(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:p,x:d,y:l}}((0,i.Z)(t)))}function y(t,e,n){var r="clippingParents"===e?function(t){var e=(0,s.Z)((0,v.Z)(t)),n=["absolute","fixed"].indexOf((0,f.Z)(t).position)>=0&&(0,d.Re)(t)?(0,p.Z)(t):t;return(0,d.kK)(n)?e.filter((function(t){return(0,d.kK)(t)&&(0,h.Z)(t,n)&&"body"!==(0,m.Z)(t)})):[]}(t):[].concat(e),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(e,n){var r=Z(t,n);return e.top=(0,c.Fp)(r.top,e.top),e.right=(0,c.VV)(r.right,e.right),e.bottom=(0,c.VV)(r.bottom,e.bottom),e.left=(0,c.Fp)(r.left,e.left),e}),Z(t,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}var w=n(72581),b=n(63293),x=n(33706);function O(t,e){void 0===e&&(e={});var n=e,o=n.placement,a=void 0===o?t.placement:o,f=n.boundary,u=void 0===f?r.zV:f,c=n.rootBoundary,s=void 0===c?r.Pj:c,p=n.elementContext,v=void 0===p?r.k5:p,h=n.altBoundary,m=void 0!==h&&h,Z=n.padding,O=void 0===Z?0:Z,k=(0,b.Z)("number"!==typeof O?O:(0,x.Z)(O,r.mv)),E=v===r.k5?r.YP:r.k5,j=t.rects.popper,D=t.elements[m?E:v],L=y((0,d.kK)(D)?D:D.contextElement||(0,i.Z)(t.elements.popper),u,s),R=(0,l.Z)(t.elements.reference),M=(0,w.Z)({reference:R,element:j,strategy:"absolute",placement:a}),A=g(Object.assign({},j,M)),F=v===r.k5?A:R,P={top:L.top-F.top+k.top,bottom:F.bottom-L.bottom+k.bottom,left:L.left-F.left+k.left,right:F.right-L.right+k.right},B=t.modifiersData.offset;if(v===r.k5&&B){var V=B[a];Object.keys(P).forEach((function(t){var e=[r.F2,r.I].indexOf(t)>=0?1:-1,n=[r.we,r.I].indexOf(t)>=0?"y":"x";P[t]+=V[n]*e}))}return P}},33706:function(t,e,n){function r(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}n.d(e,{Z:function(){return r}})},6206:function(t,e,n){function r(t){return t.split("-")[0]}n.d(e,{Z:function(){return r}})},23607:function(t,e,n){function r(){return{top:0,right:0,bottom:0,left:0}}n.d(e,{Z:function(){return r}})},11516:function(t,e,n){function r(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}n.d(e,{Z:function(){return r}})},14943:function(t,e,n){function r(t){return t.split("-")[1]}n.d(e,{Z:function(){return r}})},138:function(t,e,n){n.d(e,{Fp:function(){return r},NM:function(){return i},VV:function(){return o}});var r=Math.max,o=Math.min,i=Math.round},63293:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(23607);function o(t){return Object.assign({},(0,r.Z)(),t)}},57516:function(t,e,n){n.d(e,{q:function(){return i},u:function(){return o}});var r=n(138);function o(t,e,n){return(0,r.Fp)(t,(0,r.VV)(e,n))}function i(t,e,n){var r=o(t,e,n);return r>n?n:r}},42473:function(t){var e=function(){};t.exports=e}}]);