(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6709],{16709:function(e,t,o){"use strict";var n=o(85893),r=o(67294),i=o(6926),a=o.n(i);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}t.Z=function(e){var t=e.options,o=e.children,i=s(e,["options","children"]),p=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=new(a())(p.current,t);return function(){e.destroy()}}),[o,t]),(0,n.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){l(e,t,o[t])}))}return e}({ref:p},i,{children:o}))}},6926:function(e,t,o){var n,r,i;"undefined"!==typeof window?window:o.g,r=[],void 0===(i="function"===typeof(n=function(){var e=function(t,o){"use strict";var n=Object.create(e.prototype),r=0,i=0,a=0,l=0,s=[],p=!0,c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},d=null,u=!1;try{var m=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("testPassive",null,m),window.removeEventListener("testPassive",null,m)}catch(L){}var f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,w=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var o in t)if(void 0!==e.style[t[o]+"Transform"])return t[o]+"Transform"}return"transform"}();function v(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach((function(n){"number"!==typeof n&&(o=!1),null!==e&&n<e&&(t=!1),e=n})),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(e){n.options[e]=o[e]})),o&&o.breakpoints&&v(),t||(t=".rellax");var x="string"===typeof t?document.querySelectorAll(t):[t];if(x.length>0){if(n.elems=x,n.options.wrapper&&!n.options.wrapper.nodeType){var b=document.querySelector(n.options.wrapper);if(!b)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=b}var h,y=function(e){var t=n.options.breakpoints;return e<t[0]?"xs":e>=t[0]&&e<t[1]?"sm":e>=t[1]&&e<t[2]?"md":"lg"},g=function(){for(var e=0;e<n.elems.length;e++){var t=O(n.elems[e]);s.push(t)}},A=function(){for(var e=0;e<s.length;e++)n.elems[e].style.cssText=s[e].style;s=[],i=window.innerHeight,l=window.innerWidth,h=y(l),z(),g(),k(),p&&(window.addEventListener("resize",A),p=!1,S())},O=function(e){var t,o=e.getAttribute("data-rellax-percentage"),r=e.getAttribute("data-rellax-speed"),a=e.getAttribute("data-rellax-xs-speed"),s=e.getAttribute("data-rellax-mobile-speed"),p=e.getAttribute("data-rellax-tablet-speed"),c=e.getAttribute("data-rellax-desktop-speed"),d=e.getAttribute("data-rellax-vertical-speed"),u=e.getAttribute("data-rellax-horizontal-speed"),m=e.getAttribute("data-rellax-vertical-scroll-axis"),f=e.getAttribute("data-rellax-horizontal-scroll-axis"),w=e.getAttribute("data-rellax-zindex")||0,v=e.getAttribute("data-rellax-min"),x=e.getAttribute("data-rellax-max"),b=e.getAttribute("data-rellax-min-x"),y=e.getAttribute("data-rellax-max-x"),g=e.getAttribute("data-rellax-min-y"),A=e.getAttribute("data-rellax-max-y"),O=!0;a||s||p||c?t={xs:a,sm:s,md:p,lg:c}:O=!1;var z=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(z=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var T=n.options.vertical&&(o||n.options.center)?z:0,S=n.options.horizontal&&(o||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,k=T+e.getBoundingClientRect().top,L=e.clientHeight||e.offsetHeight||e.scrollHeight,Y=S+e.getBoundingClientRect().left,j=e.clientWidth||e.offsetWidth||e.scrollWidth,X=o||(T-k+i)/(L+i),P=o||(S-Y+l)/(j+l);n.options.center&&(P=.5,X=.5);var R=O&&null!==t[h]?Number(t[h]):r||n.options.speed,W=d||n.options.verticalSpeed,q=u||n.options.horizontalSpeed,C=m||n.options.verticalScrollAxis,F=f||n.options.horizontalScrollAxis,N=E(P,X,R,W,q),M=e.style.cssText,H="",_=/transform\s*:/i.exec(M);if(_){var B=_.index,D=M.slice(B),I=D.indexOf(";");H=I?" "+D.slice(11,I).replace(/\s/g,""):" "+D.slice(11).replace(/\s/g,"")}return{baseX:N.x,baseY:N.y,top:k,left:Y,height:L,width:j,speed:R,verticalSpeed:W,horizontalSpeed:q,verticalScrollAxis:C,horizontalScrollAxis:F,style:M,transform:H,zindex:w,min:v,max:x,minX:b,maxX:y,minY:g,maxY:A}},z=function(){var e=r,t=a;if(r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=o-n.options.wrapper.offsetTop}return!(e==r||!n.options.vertical)||!(t==a||!n.options.horizontal)},E=function(e,t,o,r,i){var a={},l=(i||o)*(100*(1-e)),s=(r||o)*(100*(1-t));return a.x=n.options.round?Math.round(l):Math.round(100*l)/100,a.y=n.options.round?Math.round(s):Math.round(100*s)/100,a},T=function(){window.removeEventListener("resize",T),window.removeEventListener("orientationchange",T),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",T),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",T),d=c(S)},S=function(){z()&&!1===p?(k(),d=c(S)):(d=null,window.addEventListener("resize",T),window.addEventListener("orientationchange",T),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",T,!!u&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",T,!!u&&{passive:!0}))},k=function(){for(var e,t=0;t<n.elems.length;t++){var o=s[t].verticalScrollAxis.toLowerCase(),p=s[t].horizontalScrollAxis.toLowerCase(),c=-1!=o.indexOf("x")?r:0,d=-1!=o.indexOf("y")?r:0,u=-1!=p.indexOf("x")?a:0,m=(d+(-1!=p.indexOf("y")?a:0)-s[t].top+i)/(s[t].height+i),f=(c+u-s[t].left+l)/(s[t].width+l),v=(e=E(f,m,s[t].speed,s[t].verticalSpeed,s[t].horizontalSpeed)).y-s[t].baseY,x=e.x-s[t].baseX;null!==s[t].min&&(n.options.vertical&&!n.options.horizontal&&(v=v<=s[t].min?s[t].min:v),n.options.horizontal&&!n.options.vertical&&(x=x<=s[t].min?s[t].min:x)),null!=s[t].minY&&(v=v<=s[t].minY?s[t].minY:v),null!=s[t].minX&&(x=x<=s[t].minX?s[t].minX:x),null!==s[t].max&&(n.options.vertical&&!n.options.horizontal&&(v=v>=s[t].max?s[t].max:v),n.options.horizontal&&!n.options.vertical&&(x=x>=s[t].max?s[t].max:x)),null!=s[t].maxY&&(v=v>=s[t].maxY?s[t].maxY:v),null!=s[t].maxX&&(x=x>=s[t].maxX?s[t].maxX:x);var b=s[t].zindex,h="translate3d("+(n.options.horizontal?x:"0")+"px,"+(n.options.vertical?v:"0")+"px,"+b+"px) "+s[t].transform;n.elems[t].style[w]=h}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=s[e].style;p||(window.removeEventListener("resize",A),p=!0),f(d),d=null},A(),n.refresh=A,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e})?n.apply(t,r):n)||(e.exports=i)}}]);