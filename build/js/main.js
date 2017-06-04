/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
// ------------------------
// JS код для главного меню
// ------------------------

function toggleClass(element, className){
		if (!element || !className){
				return;
		}
		var classString = element.className, nameIndex = classString.indexOf(className);
		if (nameIndex == -1) {
				classString += " " + className;
		}
		else {
				classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
		}
		element.className = classString;
}

var elNav = document.getElementById("main-nav");
if(elNav){
	document.getElementById("main-nav").addEventListener("click", function() {
		toggleClass(document.getElementById("main-nav"), "nav-is-visible");
	});
}
// ------------------------
// JS код для страницы блинк
// ------------------------

// Определение ширины дисплея
var x = screen.width;
var y = screen.height;

// Перезагрузка страницы при смене оринетации вьюпорта
window.addEventListener("orientationchange", function() {
		location.reload();
});

// Добавление контейнера (100% вьюпорта) для окружности
var addLinearCont = function() {
	document.getElementById("anim-main").classList.add("linear-cont");
};

// Удаление контейнера (100% вьюпорта) для окружности и окружности
var removeContCircle = function() {
	document.getElementById("anim-circle").classList.add("main-circle-hide");
	document.getElementById("anim-main").classList.remove("linear-cont");
};

// Добавление окружности
var addMainCircle = function() {
	document.getElementById("anim-circle").classList.add("main-circle");
};

// Скрытие кнопки запуска "Начать" и навигации
var hideBtn = function() {
	document.getElementById("startanim").classList.add("btn-hide");
	document.getElementById("main-nav").classList.add("cd-stretchy-nav-hide");
};

// Открытие кнопки "На главную" и навигации
var showBtn = function() {
	document.getElementById("tomain").classList.remove("btn-end-hide");
	document.getElementById("tomain").classList.add("btn-end-show");
	document.getElementById("main-nav").classList.remove("cd-stretchy-nav-hide");
};

// Запуск анимации мигания окружности
var addCircleBlinking = function() {
	document.getElementById("anim-circle").classList.add("circle-blinking");
};

// Запуск анимации мигания окружности после круговой анимации
var addCircleOrbitBlinking = function() {
	document.getElementById("anim-circle").classList.remove("orbit-circle");
	document.getElementById("anim-circle").classList.remove("orbit-circle-4x3");
	document.getElementById("anim-circle").classList.add("main-circle");
	document.getElementById("anim-circle").classList.add("circle-blinking");
};

// Удаление анимации мигания окружности
var removeCircleBlinking = function() {
	document.getElementById("anim-circle").classList.remove("circle-blinking");
};

// Запуск анимации движения окружности (верх - низ)
var addTopBotAnim = function() {
	document.getElementById("anim-main").classList.add("circle-top-bot");
};

// Запуск анимации движения окружности (лево - право)
// и удаление анимации движения окружности (верх - низ)
var addLeftRightAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-top-bot");
	document.getElementById("anim-main").classList.add("circle-left-right");
};

// Запуск анимации движения окружности по диагонали (верх право - низ лево)
// и удаление анимации движения окружности (лево - право)
var addTopRightBotLeftAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-left-right");
	document.getElementById("anim-main").classList.add("circle-topright-botleft");
};

// Запуск анимации движения окружности по диагонали (верх лево - низ право)
// и удаление анимации движения окружности по диагонали (верх право - низ лево)
var addTopLeftBotRightAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-topright-botleft");
	document.getElementById("anim-main").classList.add("circle-topleft-botright");
};

// Запуск анимации движения окружности по квадрату (по часовой стрелке)
// и удаление анимации движения окружности по диагонали (верх лево - низ право)
var addCircleSquareClockwise = function() {
	document.getElementById("anim-main").classList.remove("circle-topleft-botright");
	document.getElementById("anim-main").classList.add("circle-square-clockwise");
};

// Запуск анимации движения окружности по квадрату (против часовой стрелки)
// и удаление анимации движения окружности по квадрату (по часовой стрелке)
var addCircleSquareCounterclockWise = function() {
	document.getElementById("anim-main").classList.remove("circle-square-clockwise");
	document.getElementById("anim-main").classList.add("circle-square-counterclock-wise");
};

// Запуск анимации движения окружности по кругу (по часовой стрелке)
// и удаление анимации движения окружности по квадрату (против часовой стрелки)
var addCircleOrbitClockwise = function() {
	document.getElementById("anim-main").classList.remove("circle-square-counterclock-wise");
	document.getElementById("anim-circle").classList.remove("main-circle");
	if (x >= y) {
		document.getElementById("anim-circle").classList.add("orbit-circle");
	}
	else {
		document.getElementById("anim-circle").classList.add("orbit-circle-4x3");
		}
	document.getElementById("anim-main").classList.add("circle-orbit-clockwise");
};

// Запуск анимации движения окружности по кругу (против часовой стрелки)
// и удаление анимации движения окружности по кругу (по часовой стрелке)
var addCircleOrbitCounterclockWise = function() {
	document.getElementById("anim-main").classList.remove("circle-orbit-clockwise");
	document.getElementById("anim-main").classList.add("circle-orbit-counterclock-wise");
};

// Запуск анимации движения окружности змейкой (лево - право)
// и удаление анимации движения окружности по кругу (против часовой стрелки)
var addCircleSnakeRightLeft = function() {
	document.getElementById("anim-main").classList.remove("circle-orbit-counterclock-wise");
	document.getElementById("anim-main").classList.add("circle-snake-right-left");
};

// Запуск упражнений
// Проверка на существование элемента кнопки
var elAnim = document.getElementById("startanim");
if(elAnim){
	startanim.onclick = function() {
		setTimeout(addLinearCont, 500);
		setTimeout(addMainCircle, 500);
		// Скрытие контейнера таймера
		setTimeout(addCircleBlinking, 1000);
		setTimeout(removeCircleBlinking, 16000);
		setTimeout(hideBtn, 500);
		setTimeout(addTopBotAnim, 22000);
		setTimeout(addLeftRightAnim, 42000);
		if(x > 1 && x <= 1083) {
			setTimeout(addCircleBlinking, 59000);
			setTimeout(removeCircleBlinking, 74000);

			setTimeout(addTopRightBotLeftAnim, 79000);

			setTimeout(addTopLeftBotRightAnim, 96000);

			setTimeout(addCircleBlinking, 113000);
			setTimeout(removeCircleBlinking, 128000);

			setTimeout(addCircleSquareClockwise, 133000);

			setTimeout(addCircleBlinking, 171000);
			setTimeout(removeCircleBlinking, 186000);

			setTimeout(addCircleSquareCounterclockWise, 191000);

			setTimeout(addCircleBlinking, 231000);
			setTimeout(removeCircleBlinking, 246000);

			setTimeout(addCircleOrbitClockwise, 251000);
			setTimeout(addCircleOrbitCounterclockWise, 270000);

			setTimeout(addCircleOrbitBlinking, 291000);
			setTimeout(removeCircleBlinking, 306000);

			setTimeout(addCircleSnakeRightLeft, 311000);
			
			setTimeout(removeContCircle, 342000);
			setTimeout(showBtn, 343000);
		}
		else if(x > 1083 && x <= 1643) {
			setTimeout(addCircleBlinking, 62000);
			setTimeout(removeCircleBlinking, 77000);

			setTimeout(addTopRightBotLeftAnim, 82000);

			setTimeout(addTopLeftBotRightAnim, 102000);

			setTimeout(addCircleBlinking, 122000);
			setTimeout(removeCircleBlinking, 137000);

			setTimeout(addCircleSquareClockwise, 142000);

			setTimeout(addCircleBlinking, 186000);
			setTimeout(removeCircleBlinking, 201000);

			setTimeout(addCircleSquareCounterclockWise, 206000);

			setTimeout(addCircleBlinking, 250000);
			setTimeout(removeCircleBlinking, 265000);

			setTimeout(addCircleOrbitClockwise, 270000);
			setTimeout(addCircleOrbitCounterclockWise, 289000);

			setTimeout(addCircleOrbitBlinking, 310000);
			setTimeout(removeCircleBlinking, 325000);

			setTimeout(addCircleSnakeRightLeft, 330000);

			setTimeout(removeContCircle, 361000);
			setTimeout(showBtn, 362000);
		}
		else if(x > 1643 && x <= 3008) {
			setTimeout(addCircleBlinking, 65000);
			setTimeout(removeCircleBlinking, 80000);

			setTimeout(addTopRightBotLeftAnim, 85000);

			setTimeout(addTopLeftBotRightAnim, 108000);

			setTimeout(addCircleBlinking, 131000);
			setTimeout(removeCircleBlinking, 146000);

			setTimeout(addCircleSquareClockwise, 151000);

			setTimeout(addCircleBlinking, 201000);
			setTimeout(removeCircleBlinking, 216000);

			setTimeout(addCircleSquareCounterclockWise, 221000);

			setTimeout(addCircleBlinking, 271000);
			setTimeout(removeCircleBlinking, 286000);

			setTimeout(addCircleOrbitClockwise, 291000);
			setTimeout(addCircleOrbitCounterclockWise, 310000);

			setTimeout(addCircleOrbitBlinking, 331000);
			setTimeout(removeCircleBlinking, 346000);

			setTimeout(addCircleSnakeRightLeft, 351000);

			setTimeout(removeContCircle, 382000);
			setTimeout(showBtn, 383000);
		}
		else if (x > 3008) {
			setTimeout(addCircleBlinking, 74000);
			setTimeout(removeCircleBlinking, 89000);

			setTimeout(addTopRightBotLeftAnim, 94000);

			setTimeout(addTopLeftBotRightAnim, 126000);

			setTimeout(addCircleBlinking, 158000);
			setTimeout(removeCircleBlinking, 173000);

			setTimeout(addCircleSquareClockwise, 178000);

			setTimeout(addCircleBlinking, 234000);
			setTimeout(removeCircleBlinking, 249000);

			setTimeout(addCircleSquareCounterclockWise, 254000);

			setTimeout(addCircleBlinking, 310000);
			setTimeout(removeCircleBlinking, 325000);

			setTimeout(addCircleOrbitClockwise, 330000);
			setTimeout(addCircleOrbitCounterclockWise, 349000);

			setTimeout(addCircleOrbitBlinking, 370000);
			setTimeout(removeCircleBlinking, 385000);

			setTimeout(addCircleSnakeRightLeft, 390000);

			setTimeout(removeContCircle, 421000);
			setTimeout(showBtn, 422000);
		}
	};
}

// Генератор градиентов
var elGradient = document.getElementById("gradient");
if(elGradient) {
	// target to give background to
	var $div = document.getElementById("gradient");
	// Rgb vals of the gradients
	var gradients = [
		{ start: [11,72,107], stop: [103,178,111] },
		{ start: [24, 90, 157], stop: [68,160,141] },
		{ start: [11, 135, 147], stop: [69,104,220] }
	];
	// How long for each transition
	var transition_time = 14;

	// Internal type vars
	var currentIndex = 0; // where we are in the gradients array
	var nextIndex = 1; // what index of the gradients array is next
	var steps_count = 0; // steps counter
	var steps_total = Math.round(transition_time*60); // total amount of steps
	var rgb_steps = {
		start: [0,0,0],
		stop: [0,0,0]
	}; // How much to alter each rgb value
	var rgb_values = {
		start: [0,0,0],
		stop: [0,0,0]
	}; // The current rgb values, gets altered by rgb steps on each interval
	var prefixes = ["-webkit-","-moz-","-o-","-ms-",""]; // for looping through adding styles
	var div_style = $div.style; // short cut to actually adding styles
	var color1, color2;

	// Sets next current and next index of gradients array
	function set_next(num) {
		return (num + 1 < gradients.length) ? num + 1 : 0;
	}

	// Work out how big each rgb step is
	function calc_step_size(a,b) {
		return (a - b) / steps_total;
	}

	// Populate the rgb_values and rgb_steps objects
	function calc_steps() {
		for (var key in rgb_values) {
			if (rgb_values.hasOwnProperty(key)) {
				for(var i = 0; i < 3; i++) {
					rgb_values[key][i] = gradients[currentIndex][key][i];
					rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i],rgb_values[key][i]);
				}
			}
		}
	}

	// Update current rgb vals, update DOM element with new CSS background
	function updateGradient(){
		// update the current rgb vals
		for (var key in rgb_values) {
			if (rgb_values.hasOwnProperty(key)) {
				for(var i = 0; i < 3; i++) {
					rgb_values[key][i] += rgb_steps[key][i];
				}
			}
		}

		// Generate CSS rgb values
		var t_color1 = "rgb("+(rgb_values.start[0] | 0)+","+(rgb_values.start[1] | 0)+","+(rgb_values.start[2] | 0)+")";
		var t_color2 = "rgb("+(rgb_values.stop[0] | 0)+","+(rgb_values.stop[1] | 0)+","+(rgb_values.stop[2] | 0)+")";

		// Has anything changed on this interation
		if (t_color1 != color1 || t_color2 != color2) {

			// Update cols strings
			color1 = t_color1;
			color2 = t_color2;

			// Update DOM element style attribute
			div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from("+color1+"), to("+color2+"))";
			for (var i = 0; i < 4; i++) {
				div_style.backgroundImage = prefixes[i]+"linear-gradient(45deg, "+color1+", "+color2+")";
			}
		}

		// We did another step
		steps_count++;
		// Did we do too many steps?
		if (steps_count > steps_total) {
			// Reset steps count
			steps_count = 0;
			// Set new indexs
			currentIndex = set_next(currentIndex);
			nextIndex = set_next(nextIndex);
			// Calc steps
			calc_steps();
		}

		if (div_style.backgroundImage.indexOf("gradient") != -1) {
			window.requestAnimationFrame(updateGradient);
		}
	}

	// Initial step calc
	calc_steps();

	// Start
	window.requestAnimationFrame(updateGradient);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIE1vZGVybml6ciAyLjguMyAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAmIEJTRFxuICogQnVpbGQ6IGh0dHA6Ly9tb2Rlcm5penIuY29tL2Rvd25sb2FkLyMtZm9udGZhY2UtYmFja2dyb3VuZHNpemUtYm9yZGVyaW1hZ2UtYm9yZGVycmFkaXVzLWJveHNoYWRvdy1mbGV4Ym94LWhzbGEtbXVsdGlwbGViZ3Mtb3BhY2l0eS1yZ2JhLXRleHRzaGFkb3ctY3NzYW5pbWF0aW9ucy1jc3Njb2x1bW5zLWdlbmVyYXRlZGNvbnRlbnQtY3NzZ3JhZGllbnRzLWNzc3JlZmxlY3Rpb25zLWNzc3RyYW5zZm9ybXMtY3NzdHJhbnNmb3JtczNkLWNzc3RyYW5zaXRpb25zLWFwcGxpY2F0aW9uY2FjaGUtY2FudmFzLWNhbnZhc3RleHQtZHJhZ2FuZGRyb3AtaGFzaGNoYW5nZS1oaXN0b3J5LWF1ZGlvLXZpZGVvLWluZGV4ZWRkYi1pbnB1dC1pbnB1dHR5cGVzLWxvY2Fsc3RvcmFnZS1wb3N0bWVzc2FnZS1zZXNzaW9uc3RvcmFnZS13ZWJzb2NrZXRzLXdlYnNxbGRhdGFiYXNlLXdlYndvcmtlcnMtZ2VvbG9jYXRpb24taW5saW5lc3ZnLXNtaWwtc3ZnLXN2Z2NsaXBwYXRocy10b3VjaC13ZWJnbC1zaGl2LWNzc2NsYXNzZXMtYWRkdGVzdC1wcmVmaXhlZC10ZXN0c3R5bGVzLXRlc3Rwcm9wLXRlc3RhbGxwcm9wcy1oYXNldmVudC1wcmVmaXhlcy1kb21wcmVmaXhlcy1sb2FkXG4gKi9cbjt3aW5kb3cuTW9kZXJuaXpyPWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBDKGEpe2ouY3NzVGV4dD1hfWZ1bmN0aW9uIEQoYSxiKXtyZXR1cm4gQyhuLmpvaW4oYStcIjtcIikrKGJ8fFwiXCIpKX1mdW5jdGlvbiBFKGEsYil7cmV0dXJuIHR5cGVvZiBhPT09Yn1mdW5jdGlvbiBGKGEsYil7cmV0dXJuISF+KFwiXCIrYSkuaW5kZXhPZihiKX1mdW5jdGlvbiBHKGEsYil7Zm9yKHZhciBkIGluIGEpe3ZhciBlPWFbZF07aWYoIUYoZSxcIi1cIikmJmpbZV0hPT1jKXJldHVybiBiPT1cInBmeFwiP2U6ITB9cmV0dXJuITF9ZnVuY3Rpb24gSChhLGIsZCl7Zm9yKHZhciBlIGluIGEpe3ZhciBmPWJbYVtlXV07aWYoZiE9PWMpcmV0dXJuIGQ9PT0hMT9hW2VdOkUoZixcImZ1bmN0aW9uXCIpP2YuYmluZChkfHxiKTpmfXJldHVybiExfWZ1bmN0aW9uIEkoYSxiLGMpe3ZhciBkPWEuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxlPShhK1wiIFwiK3Auam9pbihkK1wiIFwiKStkKS5zcGxpdChcIiBcIik7cmV0dXJuIEUoYixcInN0cmluZ1wiKXx8RShiLFwidW5kZWZpbmVkXCIpP0coZSxiKTooZT0oYStcIiBcIitxLmpvaW4oZCtcIiBcIikrZCkuc3BsaXQoXCIgXCIpLEgoZSxiLGMpKX1mdW5jdGlvbiBKKCl7ZS5pbnB1dD1mdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspdVtjW2RdXT1jW2RdaW4gaztyZXR1cm4gdS5saXN0JiYodS5saXN0PSEhYi5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIikmJiEhYS5IVE1MRGF0YUxpc3RFbGVtZW50KSx1fShcImF1dG9jb21wbGV0ZSBhdXRvZm9jdXMgbGlzdCBwbGFjZWhvbGRlciBtYXggbWluIG11bHRpcGxlIHBhdHRlcm4gcmVxdWlyZWQgc3RlcFwiLnNwbGl0KFwiIFwiKSksZS5pbnB1dHR5cGVzPWZ1bmN0aW9uKGEpe2Zvcih2YXIgZD0wLGUsZixoLGk9YS5sZW5ndGg7ZDxpO2QrKylrLnNldEF0dHJpYnV0ZShcInR5cGVcIixmPWFbZF0pLGU9ay50eXBlIT09XCJ0ZXh0XCIsZSYmKGsudmFsdWU9bCxrLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTt2aXNpYmlsaXR5OmhpZGRlbjtcIiwvXnJhbmdlJC8udGVzdChmKSYmay5zdHlsZS5XZWJraXRBcHBlYXJhbmNlIT09Yz8oZy5hcHBlbmRDaGlsZChrKSxoPWIuZGVmYXVsdFZpZXcsZT1oLmdldENvbXB1dGVkU3R5bGUmJmguZ2V0Q29tcHV0ZWRTdHlsZShrLG51bGwpLldlYmtpdEFwcGVhcmFuY2UhPT1cInRleHRmaWVsZFwiJiZrLm9mZnNldEhlaWdodCE9PTAsZy5yZW1vdmVDaGlsZChrKSk6L14oc2VhcmNofHRlbCkkLy50ZXN0KGYpfHwoL14odXJsfGVtYWlsKSQvLnRlc3QoZik/ZT1rLmNoZWNrVmFsaWRpdHkmJmsuY2hlY2tWYWxpZGl0eSgpPT09ITE6ZT1rLnZhbHVlIT1sKSksdFthW2RdXT0hIWU7cmV0dXJuIHR9KFwic2VhcmNoIHRlbCB1cmwgZW1haWwgZGF0ZXRpbWUgZGF0ZSBtb250aCB3ZWVrIHRpbWUgZGF0ZXRpbWUtbG9jYWwgbnVtYmVyIHJhbmdlIGNvbG9yXCIuc3BsaXQoXCIgXCIpKX12YXIgZD1cIjIuOC4zXCIsZT17fSxmPSEwLGc9Yi5kb2N1bWVudEVsZW1lbnQsaD1cIm1vZGVybml6clwiLGk9Yi5jcmVhdGVFbGVtZW50KGgpLGo9aS5zdHlsZSxrPWIuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGw9XCI6KVwiLG09e30udG9TdHJpbmcsbj1cIiAtd2Via2l0LSAtbW96LSAtby0gLW1zLSBcIi5zcGxpdChcIiBcIiksbz1cIldlYmtpdCBNb3ogTyBtc1wiLHA9by5zcGxpdChcIiBcIikscT1vLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLHI9e3N2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9LHM9e30sdD17fSx1PXt9LHY9W10sdz12LnNsaWNlLHgseT1mdW5jdGlvbihhLGMsZCxlKXt2YXIgZixpLGosayxsPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxtPWIuYm9keSxuPW18fGIuY3JlYXRlRWxlbWVudChcImJvZHlcIik7aWYocGFyc2VJbnQoZCwxMCkpd2hpbGUoZC0tKWo9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGouaWQ9ZT9lW2RdOmgrKGQrMSksbC5hcHBlbmRDaGlsZChqKTtyZXR1cm4gZj1bXCImIzE3MztcIiwnPHN0eWxlIGlkPVwicycsaCwnXCI+JyxhLFwiPC9zdHlsZT5cIl0uam9pbihcIlwiKSxsLmlkPWgsKG0/bDpuKS5pbm5lckhUTUwrPWYsbi5hcHBlbmRDaGlsZChsKSxtfHwobi5zdHlsZS5iYWNrZ3JvdW5kPVwiXCIsbi5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGs9Zy5zdHlsZS5vdmVyZmxvdyxnLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsZy5hcHBlbmRDaGlsZChuKSksaT1jKGwsYSksbT9sLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobCk6KG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSxnLnN0eWxlLm92ZXJmbG93PWspLCEhaX0sej1mdW5jdGlvbigpe2Z1bmN0aW9uIGQoZCxlKXtlPWV8fGIuY3JlYXRlRWxlbWVudChhW2RdfHxcImRpdlwiKSxkPVwib25cIitkO3ZhciBmPWQgaW4gZTtyZXR1cm4gZnx8KGUuc2V0QXR0cmlidXRlfHwoZT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGUuc2V0QXR0cmlidXRlJiZlLnJlbW92ZUF0dHJpYnV0ZSYmKGUuc2V0QXR0cmlidXRlKGQsXCJcIiksZj1FKGVbZF0sXCJmdW5jdGlvblwiKSxFKGVbZF0sXCJ1bmRlZmluZWRcIil8fChlW2RdPWMpLGUucmVtb3ZlQXR0cmlidXRlKGQpKSksZT1udWxsLGZ9dmFyIGE9e3NlbGVjdDpcImlucHV0XCIsY2hhbmdlOlwiaW5wdXRcIixzdWJtaXQ6XCJmb3JtXCIscmVzZXQ6XCJmb3JtXCIsZXJyb3I6XCJpbWdcIixsb2FkOlwiaW1nXCIsYWJvcnQ6XCJpbWdcIn07cmV0dXJuIGR9KCksQT17fS5oYXNPd25Qcm9wZXJ0eSxCOyFFKEEsXCJ1bmRlZmluZWRcIikmJiFFKEEuY2FsbCxcInVuZGVmaW5lZFwiKT9CPWZ1bmN0aW9uKGEsYil7cmV0dXJuIEEuY2FsbChhLGIpfTpCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIgaW4gYSYmRShhLmNvbnN0cnVjdG9yLnByb3RvdHlwZVtiXSxcInVuZGVmaW5lZFwiKX0sRnVuY3Rpb24ucHJvdG90eXBlLmJpbmR8fChGdW5jdGlvbi5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihiKXt2YXIgYz10aGlzO2lmKHR5cGVvZiBjIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgZD13LmNhbGwoYXJndW1lbnRzLDEpLGU9ZnVuY3Rpb24oKXtpZih0aGlzIGluc3RhbmNlb2YgZSl7dmFyIGE9ZnVuY3Rpb24oKXt9O2EucHJvdG90eXBlPWMucHJvdG90eXBlO3ZhciBmPW5ldyBhLGc9Yy5hcHBseShmLGQuY29uY2F0KHcuY2FsbChhcmd1bWVudHMpKSk7cmV0dXJuIE9iamVjdChnKT09PWc/ZzpmfXJldHVybiBjLmFwcGx5KGIsZC5jb25jYXQody5jYWxsKGFyZ3VtZW50cykpKX07cmV0dXJuIGV9KSxzLmZsZXhib3g9ZnVuY3Rpb24oKXtyZXR1cm4gSShcImZsZXhXcmFwXCIpfSxzLmNhbnZhcz1mdW5jdGlvbigpe3ZhciBhPWIuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyZXR1cm4hIWEuZ2V0Q29udGV4dCYmISFhLmdldENvbnRleHQoXCIyZFwiKX0scy5jYW52YXN0ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuISFlLmNhbnZhcyYmISFFKGIuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIikuZmlsbFRleHQsXCJmdW5jdGlvblwiKX0scy53ZWJnbD1mdW5jdGlvbigpe3JldHVybiEhYS5XZWJHTFJlbmRlcmluZ0NvbnRleHR9LHMudG91Y2g9ZnVuY3Rpb24oKXt2YXIgYztyZXR1cm5cIm9udG91Y2hzdGFydFwiaW4gYXx8YS5Eb2N1bWVudFRvdWNoJiZiIGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaD9jPSEwOnkoW1wiQG1lZGlhIChcIixuLmpvaW4oXCJ0b3VjaC1lbmFibGVkKSwoXCIpLGgsXCIpXCIsXCJ7I21vZGVybml6cnt0b3A6OXB4O3Bvc2l0aW9uOmFic29sdXRlfX1cIl0uam9pbihcIlwiKSxmdW5jdGlvbihhKXtjPWEub2Zmc2V0VG9wPT09OX0pLGN9LHMuZ2VvbG9jYXRpb249ZnVuY3Rpb24oKXtyZXR1cm5cImdlb2xvY2F0aW9uXCJpbiBuYXZpZ2F0b3J9LHMucG9zdG1lc3NhZ2U9ZnVuY3Rpb24oKXtyZXR1cm4hIWEucG9zdE1lc3NhZ2V9LHMud2Vic3FsZGF0YWJhc2U9ZnVuY3Rpb24oKXtyZXR1cm4hIWEub3BlbkRhdGFiYXNlfSxzLmluZGV4ZWREQj1mdW5jdGlvbigpe3JldHVybiEhSShcImluZGV4ZWREQlwiLGEpfSxzLmhhc2hjaGFuZ2U9ZnVuY3Rpb24oKXtyZXR1cm4geihcImhhc2hjaGFuZ2VcIixhKSYmKGIuZG9jdW1lbnRNb2RlPT09Y3x8Yi5kb2N1bWVudE1vZGU+Nyl9LHMuaGlzdG9yeT1mdW5jdGlvbigpe3JldHVybiEhYS5oaXN0b3J5JiYhIWhpc3RvcnkucHVzaFN0YXRlfSxzLmRyYWdhbmRkcm9wPWZ1bmN0aW9uKCl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVyblwiZHJhZ2dhYmxlXCJpbiBhfHxcIm9uZHJhZ3N0YXJ0XCJpbiBhJiZcIm9uZHJvcFwiaW4gYX0scy53ZWJzb2NrZXRzPWZ1bmN0aW9uKCl7cmV0dXJuXCJXZWJTb2NrZXRcImluIGF8fFwiTW96V2ViU29ja2V0XCJpbiBhfSxzLnJnYmE9ZnVuY3Rpb24oKXtyZXR1cm4gQyhcImJhY2tncm91bmQtY29sb3I6cmdiYSgxNTAsMjU1LDE1MCwuNSlcIiksRihqLmJhY2tncm91bmRDb2xvcixcInJnYmFcIil9LHMuaHNsYT1mdW5jdGlvbigpe3JldHVybiBDKFwiYmFja2dyb3VuZC1jb2xvcjpoc2xhKDEyMCw0MCUsMTAwJSwuNSlcIiksRihqLmJhY2tncm91bmRDb2xvcixcInJnYmFcIil8fEYoai5iYWNrZ3JvdW5kQ29sb3IsXCJoc2xhXCIpfSxzLm11bHRpcGxlYmdzPWZ1bmN0aW9uKCl7cmV0dXJuIEMoXCJiYWNrZ3JvdW5kOnVybChodHRwczovLyksdXJsKGh0dHBzOi8vKSxyZWQgdXJsKGh0dHBzOi8vKVwiKSwvKHVybFxccypcXCguKj8pezN9Ly50ZXN0KGouYmFja2dyb3VuZCl9LHMuYmFja2dyb3VuZHNpemU9ZnVuY3Rpb24oKXtyZXR1cm4gSShcImJhY2tncm91bmRTaXplXCIpfSxzLmJvcmRlcmltYWdlPWZ1bmN0aW9uKCl7cmV0dXJuIEkoXCJib3JkZXJJbWFnZVwiKX0scy5ib3JkZXJyYWRpdXM9ZnVuY3Rpb24oKXtyZXR1cm4gSShcImJvcmRlclJhZGl1c1wiKX0scy5ib3hzaGFkb3c9ZnVuY3Rpb24oKXtyZXR1cm4gSShcImJveFNoYWRvd1wiKX0scy50ZXh0c2hhZG93PWZ1bmN0aW9uKCl7cmV0dXJuIGIuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZS50ZXh0U2hhZG93PT09XCJcIn0scy5vcGFjaXR5PWZ1bmN0aW9uKCl7cmV0dXJuIEQoXCJvcGFjaXR5Oi41NVwiKSwvXjAuNTUkLy50ZXN0KGoub3BhY2l0eSl9LHMuY3NzYW5pbWF0aW9ucz1mdW5jdGlvbigpe3JldHVybiBJKFwiYW5pbWF0aW9uTmFtZVwiKX0scy5jc3Njb2x1bW5zPWZ1bmN0aW9uKCl7cmV0dXJuIEkoXCJjb2x1bW5Db3VudFwiKX0scy5jc3NncmFkaWVudHM9ZnVuY3Rpb24oKXt2YXIgYT1cImJhY2tncm91bmQtaW1hZ2U6XCIsYj1cImdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCBib3R0b20sZnJvbSgjOWY5KSx0byh3aGl0ZSkpO1wiLGM9XCJsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsIzlmOSwgd2hpdGUpO1wiO3JldHVybiBDKChhK1wiLXdlYmtpdC0gXCIuc3BsaXQoXCIgXCIpLmpvaW4oYithKStuLmpvaW4oYythKSkuc2xpY2UoMCwtYS5sZW5ndGgpKSxGKGouYmFja2dyb3VuZEltYWdlLFwiZ3JhZGllbnRcIil9LHMuY3NzcmVmbGVjdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gSShcImJveFJlZmxlY3RcIil9LHMuY3NzdHJhbnNmb3Jtcz1mdW5jdGlvbigpe3JldHVybiEhSShcInRyYW5zZm9ybVwiKX0scy5jc3N0cmFuc2Zvcm1zM2Q9ZnVuY3Rpb24oKXt2YXIgYT0hIUkoXCJwZXJzcGVjdGl2ZVwiKTtyZXR1cm4gYSYmXCJ3ZWJraXRQZXJzcGVjdGl2ZVwiaW4gZy5zdHlsZSYmeShcIkBtZWRpYSAodHJhbnNmb3JtLTNkKSwoLXdlYmtpdC10cmFuc2Zvcm0tM2QpeyNtb2Rlcm5penJ7bGVmdDo5cHg7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjNweDt9fVwiLGZ1bmN0aW9uKGIsYyl7YT1iLm9mZnNldExlZnQ9PT05JiZiLm9mZnNldEhlaWdodD09PTN9KSxhfSxzLmNzc3RyYW5zaXRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEkoXCJ0cmFuc2l0aW9uXCIpfSxzLmZvbnRmYWNlPWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIHkoJ0Bmb250LWZhY2Uge2ZvbnQtZmFtaWx5OlwiZm9udFwiO3NyYzp1cmwoXCJodHRwczovL1wiKX0nLGZ1bmN0aW9uKGMsZCl7dmFyIGU9Yi5nZXRFbGVtZW50QnlJZChcInNtb2Rlcm5penJcIiksZj1lLnNoZWV0fHxlLnN0eWxlU2hlZXQsZz1mP2YuY3NzUnVsZXMmJmYuY3NzUnVsZXNbMF0/Zi5jc3NSdWxlc1swXS5jc3NUZXh0OmYuY3NzVGV4dHx8XCJcIjpcIlwiO2E9L3NyYy9pLnRlc3QoZykmJmcuaW5kZXhPZihkLnNwbGl0KFwiIFwiKVswXSk9PT0wfSksYX0scy5nZW5lcmF0ZWRjb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIHkoW1wiI1wiLGgsXCJ7Zm9udDowLzAgYX0jXCIsaCwnOmFmdGVye2NvbnRlbnQ6XCInLGwsJ1wiO3Zpc2liaWxpdHk6aGlkZGVuO2ZvbnQ6M3B4LzEgYX0nXS5qb2luKFwiXCIpLGZ1bmN0aW9uKGIpe2E9Yi5vZmZzZXRIZWlnaHQ+PTN9KSxhfSxzLnZpZGVvPWZ1bmN0aW9uKCl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwidmlkZW9cIiksYz0hMTt0cnl7aWYoYz0hIWEuY2FuUGxheVR5cGUpYz1uZXcgQm9vbGVhbihjKSxjLm9nZz1hLmNhblBsYXlUeXBlKCd2aWRlby9vZ2c7IGNvZGVjcz1cInRoZW9yYVwiJykucmVwbGFjZSgvXm5vJC8sXCJcIiksYy5oMjY0PWEuY2FuUGxheVR5cGUoJ3ZpZGVvL21wNDsgY29kZWNzPVwiYXZjMS40MkUwMUVcIicpLnJlcGxhY2UoL15ubyQvLFwiXCIpLGMud2VibT1hLmNhblBsYXlUeXBlKCd2aWRlby93ZWJtOyBjb2RlY3M9XCJ2cDgsIHZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sXCJcIil9Y2F0Y2goZCl7fXJldHVybiBjfSxzLmF1ZGlvPWZ1bmN0aW9uKCl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIiksYz0hMTt0cnl7aWYoYz0hIWEuY2FuUGxheVR5cGUpYz1uZXcgQm9vbGVhbihjKSxjLm9nZz1hLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sXCJcIiksYy5tcDM9YS5jYW5QbGF5VHlwZShcImF1ZGlvL21wZWc7XCIpLnJlcGxhY2UoL15ubyQvLFwiXCIpLGMud2F2PWEuY2FuUGxheVR5cGUoJ2F1ZGlvL3dhdjsgY29kZWNzPVwiMVwiJykucmVwbGFjZSgvXm5vJC8sXCJcIiksYy5tNGE9KGEuY2FuUGxheVR5cGUoXCJhdWRpby94LW00YTtcIil8fGEuY2FuUGxheVR5cGUoXCJhdWRpby9hYWM7XCIpKS5yZXBsYWNlKC9ebm8kLyxcIlwiKX1jYXRjaChkKXt9cmV0dXJuIGN9LHMubG9jYWxzdG9yYWdlPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShoLGgpLGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGgpLCEwfWNhdGNoKGEpe3JldHVybiExfX0scy5zZXNzaW9uc3RvcmFnZT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShoLGgpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oaCksITB9Y2F0Y2goYSl7cmV0dXJuITF9fSxzLndlYndvcmtlcnM9ZnVuY3Rpb24oKXtyZXR1cm4hIWEuV29ya2VyfSxzLmFwcGxpY2F0aW9uY2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4hIWEuYXBwbGljYXRpb25DYWNoZX0scy5zdmc9ZnVuY3Rpb24oKXtyZXR1cm4hIWIuY3JlYXRlRWxlbWVudE5TJiYhIWIuY3JlYXRlRWxlbWVudE5TKHIuc3ZnLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3R9LHMuaW5saW5lc3ZnPWZ1bmN0aW9uKCl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBhLmlubmVySFRNTD1cIjxzdmcvPlwiLChhLmZpcnN0Q2hpbGQmJmEuZmlyc3RDaGlsZC5uYW1lc3BhY2VVUkkpPT1yLnN2Z30scy5zbWlsPWZ1bmN0aW9uKCl7cmV0dXJuISFiLmNyZWF0ZUVsZW1lbnROUyYmL1NWR0FuaW1hdGUvLnRlc3QobS5jYWxsKGIuY3JlYXRlRWxlbWVudE5TKHIuc3ZnLFwiYW5pbWF0ZVwiKSkpfSxzLnN2Z2NsaXBwYXRocz1mdW5jdGlvbigpe3JldHVybiEhYi5jcmVhdGVFbGVtZW50TlMmJi9TVkdDbGlwUGF0aC8udGVzdChtLmNhbGwoYi5jcmVhdGVFbGVtZW50TlMoci5zdmcsXCJjbGlwUGF0aFwiKSkpfTtmb3IodmFyIEsgaW4gcylCKHMsSykmJih4PUsudG9Mb3dlckNhc2UoKSxlW3hdPXNbS10oKSx2LnB1c2goKGVbeF0/XCJcIjpcIm5vLVwiKSt4KSk7cmV0dXJuIGUuaW5wdXR8fEooKSxlLmFkZFRlc3Q9ZnVuY3Rpb24oYSxiKXtpZih0eXBlb2YgYT09XCJvYmplY3RcIilmb3IodmFyIGQgaW4gYSlCKGEsZCkmJmUuYWRkVGVzdChkLGFbZF0pO2Vsc2V7YT1hLnRvTG93ZXJDYXNlKCk7aWYoZVthXSE9PWMpcmV0dXJuIGU7Yj10eXBlb2YgYj09XCJmdW5jdGlvblwiP2IoKTpiLHR5cGVvZiBmIT1cInVuZGVmaW5lZFwiJiZmJiYoZy5jbGFzc05hbWUrPVwiIFwiKyhiP1wiXCI6XCJuby1cIikrYSksZVthXT1ifXJldHVybiBlfSxDKFwiXCIpLGk9az1udWxsLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gbChhLGIpe3ZhciBjPWEuY3JlYXRlRWxlbWVudChcInBcIiksZD1hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXXx8YS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGMuaW5uZXJIVE1MPVwieDxzdHlsZT5cIitiK1wiPC9zdHlsZT5cIixkLmluc2VydEJlZm9yZShjLmxhc3RDaGlsZCxkLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIG0oKXt2YXIgYT1zLmVsZW1lbnRzO3JldHVybiB0eXBlb2YgYT09XCJzdHJpbmdcIj9hLnNwbGl0KFwiIFwiKTphfWZ1bmN0aW9uIG4oYSl7dmFyIGI9althW2hdXTtyZXR1cm4gYnx8KGI9e30saSsrLGFbaF09aSxqW2ldPWIpLGJ9ZnVuY3Rpb24gbyhhLGMsZCl7Y3x8KGM9Yik7aWYoaylyZXR1cm4gYy5jcmVhdGVFbGVtZW50KGEpO2R8fChkPW4oYykpO3ZhciBnO3JldHVybiBkLmNhY2hlW2FdP2c9ZC5jYWNoZVthXS5jbG9uZU5vZGUoKTpmLnRlc3QoYSk/Zz0oZC5jYWNoZVthXT1kLmNyZWF0ZUVsZW0oYSkpLmNsb25lTm9kZSgpOmc9ZC5jcmVhdGVFbGVtKGEpLGcuY2FuSGF2ZUNoaWxkcmVuJiYhZS50ZXN0KGEpJiYhZy50YWdVcm4/ZC5mcmFnLmFwcGVuZENoaWxkKGcpOmd9ZnVuY3Rpb24gcChhLGMpe2F8fChhPWIpO2lmKGspcmV0dXJuIGEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2M9Y3x8bihhKTt2YXIgZD1jLmZyYWcuY2xvbmVOb2RlKCksZT0wLGY9bSgpLGc9Zi5sZW5ndGg7Zm9yKDtlPGc7ZSsrKWQuY3JlYXRlRWxlbWVudChmW2VdKTtyZXR1cm4gZH1mdW5jdGlvbiBxKGEsYil7Yi5jYWNoZXx8KGIuY2FjaGU9e30sYi5jcmVhdGVFbGVtPWEuY3JlYXRlRWxlbWVudCxiLmNyZWF0ZUZyYWc9YS5jcmVhdGVEb2N1bWVudEZyYWdtZW50LGIuZnJhZz1iLmNyZWF0ZUZyYWcoKSksYS5jcmVhdGVFbGVtZW50PWZ1bmN0aW9uKGMpe3JldHVybiBzLnNoaXZNZXRob2RzP28oYyxhLGIpOmIuY3JlYXRlRWxlbShjKX0sYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50PUZ1bmN0aW9uKFwiaCxmXCIsXCJyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1mLmNsb25lTm9kZSgpLGM9bi5jcmVhdGVFbGVtZW50O2guc2hpdk1ldGhvZHMmJihcIittKCkuam9pbigpLnJlcGxhY2UoL1tcXHdcXC1dKy9nLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNyZWF0ZUVsZW0oYSksYi5mcmFnLmNyZWF0ZUVsZW1lbnQoYSksJ2MoXCInK2ErJ1wiKSd9KStcIik7cmV0dXJuIG59XCIpKHMsYi5mcmFnKX1mdW5jdGlvbiByKGEpe2F8fChhPWIpO3ZhciBjPW4oYSk7cmV0dXJuIHMuc2hpdkNTUyYmIWcmJiFjLmhhc0NTUyYmKGMuaGFzQ1NTPSEhbChhLFwiYXJ0aWNsZSxhc2lkZSxkaWFsb2csZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfW1hcmt7YmFja2dyb3VuZDojRkYwO2NvbG9yOiMwMDB9dGVtcGxhdGV7ZGlzcGxheTpub25lfVwiKSksa3x8cShhLGMpLGF9dmFyIGM9XCIzLjcuMFwiLGQ9YS5odG1sNXx8e30sZT0vXjx8Xig/OmJ1dHRvbnxtYXB8c2VsZWN0fHRleHRhcmVhfG9iamVjdHxpZnJhbWV8b3B0aW9ufG9wdGdyb3VwKSQvaSxmPS9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaSxnLGg9XCJfaHRtbDVzaGl2XCIsaT0wLGo9e30sazsoZnVuY3Rpb24oKXt0cnl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiYVwiKTthLmlubmVySFRNTD1cIjx4eXo+PC94eXo+XCIsZz1cImhpZGRlblwiaW4gYSxrPWEuY2hpbGROb2Rlcy5sZW5ndGg9PTF8fGZ1bmN0aW9uKCl7Yi5jcmVhdGVFbGVtZW50KFwiYVwiKTt2YXIgYT1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtyZXR1cm4gdHlwZW9mIGEuY2xvbmVOb2RlPT1cInVuZGVmaW5lZFwifHx0eXBlb2YgYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50PT1cInVuZGVmaW5lZFwifHx0eXBlb2YgYS5jcmVhdGVFbGVtZW50PT1cInVuZGVmaW5lZFwifSgpfWNhdGNoKGMpe2c9ITAsaz0hMH19KSgpO3ZhciBzPXtlbGVtZW50czpkLmVsZW1lbnRzfHxcImFiYnIgYXJ0aWNsZSBhc2lkZSBhdWRpbyBiZGkgY2FudmFzIGRhdGEgZGF0YWxpc3QgZGV0YWlscyBkaWFsb2cgZmlnY2FwdGlvbiBmaWd1cmUgZm9vdGVyIGhlYWRlciBoZ3JvdXAgbWFpbiBtYXJrIG1ldGVyIG5hdiBvdXRwdXQgcHJvZ3Jlc3Mgc2VjdGlvbiBzdW1tYXJ5IHRlbXBsYXRlIHRpbWUgdmlkZW9cIix2ZXJzaW9uOmMsc2hpdkNTUzpkLnNoaXZDU1MhPT0hMSxzdXBwb3J0c1Vua25vd25FbGVtZW50czprLHNoaXZNZXRob2RzOmQuc2hpdk1ldGhvZHMhPT0hMSx0eXBlOlwiZGVmYXVsdFwiLHNoaXZEb2N1bWVudDpyLGNyZWF0ZUVsZW1lbnQ6byxjcmVhdGVEb2N1bWVudEZyYWdtZW50OnB9O2EuaHRtbDU9cyxyKGIpfSh0aGlzLGIpLGUuX3ZlcnNpb249ZCxlLl9wcmVmaXhlcz1uLGUuX2RvbVByZWZpeGVzPXEsZS5fY3Nzb21QcmVmaXhlcz1wLGUuaGFzRXZlbnQ9eixlLnRlc3RQcm9wPWZ1bmN0aW9uKGEpe3JldHVybiBHKFthXSl9LGUudGVzdEFsbFByb3BzPUksZS50ZXN0U3R5bGVzPXksZS5wcmVmaXhlZD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI/SShhLGIsYyk6SShhLFwicGZ4XCIpfSxnLmNsYXNzTmFtZT1nLmNsYXNzTmFtZS5yZXBsYWNlKC8oXnxcXHMpbm8tanMoXFxzfCQpLyxcIiQxJDJcIikrKGY/XCIganMgXCIrdi5qb2luKFwiIFwiKTpcIlwiKSxlfSh0aGlzLHRoaXMuZG9jdW1lbnQpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09by5jYWxsKGEpfWZ1bmN0aW9uIGUoYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9ZnVuY3Rpb24gZigpe31mdW5jdGlvbiBnKGEpe3JldHVybiFhfHxcImxvYWRlZFwiPT1hfHxcImNvbXBsZXRlXCI9PWF8fFwidW5pbml0aWFsaXplZFwiPT1hfWZ1bmN0aW9uIGgoKXt2YXIgYT1wLnNoaWZ0KCk7cT0xLGE/YS50P20oZnVuY3Rpb24oKXsoXCJjXCI9PWEudD9CLmluamVjdENzczpCLmluamVjdEpzKShhLnMsMCxhLmEsYS54LGEuZSwxKX0sMCk6KGEoKSxoKCkpOnE9MH1mdW5jdGlvbiBpKGEsYyxkLGUsZixpLGope2Z1bmN0aW9uIGsoYil7aWYoIW8mJmcobC5yZWFkeVN0YXRlKSYmKHUucj1vPTEsIXEmJmgoKSxsLm9ubG9hZD1sLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGIpKXtcImltZ1wiIT1hJiZtKGZ1bmN0aW9uKCl7dC5yZW1vdmVDaGlsZChsKX0sNTApO2Zvcih2YXIgZCBpbiB5W2NdKXlbY10uaGFzT3duUHJvcGVydHkoZCkmJnlbY11bZF0ub25sb2FkKCl9fXZhciBqPWp8fEIuZXJyb3JUaW1lb3V0LGw9Yi5jcmVhdGVFbGVtZW50KGEpLG89MCxyPTAsdT17dDpkLHM6YyxlOmYsYTppLHg6an07MT09PXlbY10mJihyPTEseVtjXT1bXSksXCJvYmplY3RcIj09YT9sLmRhdGE9YzoobC5zcmM9YyxsLnR5cGU9YSksbC53aWR0aD1sLmhlaWdodD1cIjBcIixsLm9uZXJyb3I9bC5vbmxvYWQ9bC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtrLmNhbGwodGhpcyxyKX0scC5zcGxpY2UoZSwwLHUpLFwiaW1nXCIhPWEmJihyfHwyPT09eVtjXT8odC5pbnNlcnRCZWZvcmUobCxzP251bGw6biksbShrLGopKTp5W2NdLnB1c2gobCkpfWZ1bmN0aW9uIGooYSxiLGMsZCxmKXtyZXR1cm4gcT0wLGI9Ynx8XCJqXCIsZShhKT9pKFwiY1wiPT1iP3Y6dSxhLGIsdGhpcy5pKyssYyxkLGYpOihwLnNwbGljZSh0aGlzLmkrKywwLGEpLDE9PXAubGVuZ3RoJiZoKCkpLHRoaXN9ZnVuY3Rpb24gaygpe3ZhciBhPUI7cmV0dXJuIGEubG9hZGVyPXtsb2FkOmosaTowfSxhfXZhciBsPWIuZG9jdW1lbnRFbGVtZW50LG09YS5zZXRUaW1lb3V0LG49Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXSxvPXt9LnRvU3RyaW5nLHA9W10scT0wLHI9XCJNb3pBcHBlYXJhbmNlXCJpbiBsLnN0eWxlLHM9ciYmISFiLmNyZWF0ZVJhbmdlKCkuY29tcGFyZU5vZGUsdD1zP2w6bi5wYXJlbnROb2RlLGw9YS5vcGVyYSYmXCJbb2JqZWN0IE9wZXJhXVwiPT1vLmNhbGwoYS5vcGVyYSksbD0hIWIuYXR0YWNoRXZlbnQmJiFsLHU9cj9cIm9iamVjdFwiOmw/XCJzY3JpcHRcIjpcImltZ1wiLHY9bD9cInNjcmlwdFwiOnUsdz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PW8uY2FsbChhKX0seD1bXSx5PXt9LHo9e3RpbWVvdXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5sZW5ndGgmJihhLnRpbWVvdXQ9YlswXSksYX19LEEsQjtCPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGE9YS5zcGxpdChcIiFcIiksYj14Lmxlbmd0aCxjPWEucG9wKCksZD1hLmxlbmd0aCxjPXt1cmw6YyxvcmlnVXJsOmMscHJlZml4ZXM6YX0sZSxmLGc7Zm9yKGY9MDtmPGQ7ZisrKWc9YVtmXS5zcGxpdChcIj1cIiksKGU9eltnLnNoaWZ0KCldKSYmKGM9ZShjLGcpKTtmb3IoZj0wO2Y8YjtmKyspYz14W2ZdKGMpO3JldHVybiBjfWZ1bmN0aW9uIGcoYSxlLGYsZyxoKXt2YXIgaT1iKGEpLGo9aS5hdXRvQ2FsbGJhY2s7aS51cmwuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KFwiP1wiKS5zaGlmdCgpLGkuYnlwYXNzfHwoZSYmKGU9ZChlKT9lOmVbYV18fGVbZ118fGVbYS5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdXSksaS5pbnN0ZWFkP2kuaW5zdGVhZChhLGUsZixnLGgpOih5W2kudXJsXT9pLm5vZXhlYz0hMDp5W2kudXJsXT0xLGYubG9hZChpLnVybCxpLmZvcmNlQ1NTfHwhaS5mb3JjZUpTJiZcImNzc1wiPT1pLnVybC5zcGxpdChcIi5cIikucG9wKCkuc3BsaXQoXCI/XCIpLnNoaWZ0KCk/XCJjXCI6YyxpLm5vZXhlYyxpLmF0dHJzLGkudGltZW91dCksKGQoZSl8fGQoaikpJiZmLmxvYWQoZnVuY3Rpb24oKXtrKCksZSYmZShpLm9yaWdVcmwsaCxnKSxqJiZqKGkub3JpZ1VybCxoLGcpLHlbaS51cmxdPTJ9KSkpfWZ1bmN0aW9uIGgoYSxiKXtmdW5jdGlvbiBjKGEsYyl7aWYoYSl7aWYoZShhKSljfHwoaj1mdW5jdGlvbigpe3ZhciBhPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtrLmFwcGx5KHRoaXMsYSksbCgpfSksZyhhLGosYiwwLGgpO2Vsc2UgaWYoT2JqZWN0KGEpPT09YSlmb3IobiBpbiBtPWZ1bmN0aW9uKCl7dmFyIGI9MCxjO2ZvcihjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmYisrO3JldHVybiBifSgpLGEpYS5oYXNPd25Qcm9wZXJ0eShuKSYmKCFjJiYhLS1tJiYoZChqKT9qPWZ1bmN0aW9uKCl7dmFyIGE9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2suYXBwbHkodGhpcyxhKSxsKCl9Ompbbl09ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2EmJmEuYXBwbHkodGhpcyxiKSxsKCl9fShrW25dKSksZyhhW25dLGosYixuLGgpKX1lbHNlIWMmJmwoKX12YXIgaD0hIWEudGVzdCxpPWEubG9hZHx8YS5ib3RoLGo9YS5jYWxsYmFja3x8ZixrPWosbD1hLmNvbXBsZXRlfHxmLG0sbjtjKGg/YS55ZXA6YS5ub3BlLCEhaSksaSYmYyhpKX12YXIgaSxqLGw9dGhpcy55ZXBub3BlLmxvYWRlcjtpZihlKGEpKWcoYSwwLGwsMCk7ZWxzZSBpZih3KGEpKWZvcihpPTA7aTxhLmxlbmd0aDtpKyspaj1hW2ldLGUoaik/ZyhqLDAsbCwwKTp3KGopP0Ioaik6T2JqZWN0KGopPT09aiYmaChqLGwpO2Vsc2UgT2JqZWN0KGEpPT09YSYmaChhLGwpfSxCLmFkZFByZWZpeD1mdW5jdGlvbihhLGIpe3pbYV09Yn0sQi5hZGRGaWx0ZXI9ZnVuY3Rpb24oYSl7eC5wdXNoKGEpfSxCLmVycm9yVGltZW91dD0xZTQsbnVsbD09Yi5yZWFkeVN0YXRlJiZiLmFkZEV2ZW50TGlzdGVuZXImJihiLnJlYWR5U3RhdGU9XCJsb2FkaW5nXCIsYi5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEE9ZnVuY3Rpb24oKXtiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQSwwKSxiLnJlYWR5U3RhdGU9XCJjb21wbGV0ZVwifSwwKSksYS55ZXBub3BlPWsoKSxhLnllcG5vcGUuZXhlY3V0ZVN0YWNrPWgsYS55ZXBub3BlLmluamVjdEpzPWZ1bmN0aW9uKGEsYyxkLGUsaSxqKXt2YXIgaz1iLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksbCxvLGU9ZXx8Qi5lcnJvclRpbWVvdXQ7ay5zcmM9YTtmb3IobyBpbiBkKWsuc2V0QXR0cmlidXRlKG8sZFtvXSk7Yz1qP2g6Y3x8ZixrLm9ucmVhZHlzdGF0ZWNoYW5nZT1rLm9ubG9hZD1mdW5jdGlvbigpeyFsJiZnKGsucmVhZHlTdGF0ZSkmJihsPTEsYygpLGsub25sb2FkPWsub25yZWFkeXN0YXRlY2hhbmdlPW51bGwpfSxtKGZ1bmN0aW9uKCl7bHx8KGw9MSxjKDEpKX0sZSksaT9rLm9ubG9hZCgpOm4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoayxuKX0sYS55ZXBub3BlLmluamVjdENzcz1mdW5jdGlvbihhLGMsZCxlLGcsaSl7dmFyIGU9Yi5jcmVhdGVFbGVtZW50KFwibGlua1wiKSxqLGM9aT9oOmN8fGY7ZS5ocmVmPWEsZS5yZWw9XCJzdHlsZXNoZWV0XCIsZS50eXBlPVwidGV4dC9jc3NcIjtmb3IoaiBpbiBkKWUuc2V0QXR0cmlidXRlKGosZFtqXSk7Z3x8KG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSxuKSxtKGMsMCkpfX0odGhpcyxkb2N1bWVudCksTW9kZXJuaXpyLmxvYWQ9ZnVuY3Rpb24oKXt5ZXBub3BlLmFwcGx5KHdpbmRvdyxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKSl9O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBKUyDQutC+0LQg0LTQu9GPINCz0LvQsNCy0L3QvtCz0L4g0LzQtdC90Y5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpe1xuXHRcdGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgY2xhc3NTdHJpbmcgPSBlbGVtZW50LmNsYXNzTmFtZSwgbmFtZUluZGV4ID0gY2xhc3NTdHJpbmcuaW5kZXhPZihjbGFzc05hbWUpO1xuXHRcdGlmIChuYW1lSW5kZXggPT0gLTEpIHtcblx0XHRcdFx0Y2xhc3NTdHJpbmcgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0XHRjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nLnN1YnN0cigwLCBuYW1lSW5kZXgpICsgY2xhc3NTdHJpbmcuc3Vic3RyKG5hbWVJbmRleCtjbGFzc05hbWUubGVuZ3RoKTtcblx0XHR9XG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc1N0cmluZztcbn1cblxudmFyIGVsTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdlwiKTtcbmlmKGVsTmF2KXtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dG9nZ2xlQ2xhc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdlwiKSwgXCJuYXYtaXMtdmlzaWJsZVwiKTtcblx0fSk7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEpTINC60L7QtCDQtNC70Y8g0YHRgtGA0LDQvdC40YbRiyDQsdC70LjQvdC6XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8g0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDRiNC40YDQuNC90Ysg0LTQuNGB0L/Qu9C10Y9cbnZhciB4ID0gc2NyZWVuLndpZHRoO1xudmFyIHkgPSBzY3JlZW4uaGVpZ2h0O1xuXG4vLyDQn9C10YDQtdC30LDQs9GA0YPQt9C60LAg0YHRgtGA0LDQvdC40YbRiyDQv9GA0Lgg0YHQvNC10L3QtSDQvtGA0LjQvdC10YLQsNGG0LjQuCDQstGM0Y7Qv9C+0YDRgtCwXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60L7QvdGC0LXQudC90LXRgNCwICgxMDAlINCy0YzRjtC/0L7RgNGC0LApINC00LvRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIGFkZExpbmVhckNvbnQgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImxpbmVhci1jb250XCIpO1xufTtcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCAoMTAwJSDQstGM0Y7Qv9C+0YDRgtCwKSDQtNC70Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0Lgg0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciByZW1vdmVDb250Q2lyY2xlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tY2lyY2xlLWhpZGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lYXItY29udFwiKTtcbn07XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgYWRkTWFpbkNpcmNsZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNpcmNsZVwiKTtcbn07XG5cbi8vINCh0LrRgNGL0YLQuNC1INC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCBcItCd0LDRh9Cw0YLRjFwiINC4INC90LDQstC40LPQsNGG0LjQuFxudmFyIGhpZGVCdG4gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydGFuaW1cIikuY2xhc3NMaXN0LmFkZChcImJ0bi1oaWRlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbmF2XCIpLmNsYXNzTGlzdC5hZGQoXCJjZC1zdHJldGNoeS1uYXYtaGlkZVwiKTtcbn07XG5cbi8vINCe0YLQutGA0YvRgtC40LUg0LrQvdC+0L/QutC4IFwi0J3QsCDQs9C70LDQstC90YPRjlwiINC4INC90LDQstC40LPQsNGG0LjQuFxudmFyIHNob3dCdG4gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1lbmQtaGlkZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LmFkZChcImJ0bi1lbmQtc2hvd1wiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2Qtc3RyZXRjaHktbmF2LWhpZGVcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQvNC40LPQsNC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIGFkZENpcmNsZUJsaW5raW5nID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1ibGlua2luZ1wiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC80LjQs9Cw0L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L7RgdC70LUg0LrRgNGD0LPQvtCy0L7QuSDQsNC90LjQvNCw0YbQuNC4XG52YXIgYWRkQ2lyY2xlT3JiaXRCbGlua2luZyA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJvcmJpdC1jaXJjbGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9yYml0LWNpcmNsZS00eDNcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tY2lyY2xlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtYmxpbmtpbmdcIik7XG59O1xuXG4vLyDQo9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LzQuNCz0LDQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciByZW1vdmVDaXJjbGVCbGlua2luZyA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtYmxpbmtpbmdcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4ICjQstC10YDRhSAtINC90LjQtylcbnZhciBhZGRUb3BCb3RBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtdG9wLWJvdFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNC70LXQstC+IC0g0L/RgNCw0LLQvilcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4ICjQstC10YDRhSAtINC90LjQtylcbnZhciBhZGRMZWZ0UmlnaHRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtdG9wLWJvdFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1sZWZ0LXJpZ2h0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0L/RgNCw0LLQviAtINC90LjQtyDQu9C10LLQvilcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4ICjQu9C10LLQviAtINC/0YDQsNCy0L4pXG52YXIgYWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLWxlZnQtcmlnaHRcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtdG9wcmlnaHQtYm90bGVmdFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC70LXQstC+IC0g0L3QuNC3INC/0YDQsNCy0L4pXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0L/RgNCw0LLQviAtINC90LjQtyDQu9C10LLQvilcbnZhciBhZGRUb3BMZWZ0Qm90UmlnaHRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtdG9wcmlnaHQtYm90bGVmdFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3BsZWZ0LWJvdHJpZ2h0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0LvQtdCy0L4gLSDQvdC40Lcg0L/RgNCw0LLQvilcbnZhciBhZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3BsZWZ0LWJvdHJpZ2h0XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXNxdWFyZS1jbG9ja3dpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1KVxudmFyIGFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1zcXVhcmUtY2xvY2t3aXNlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXNxdWFyZS1jb3VudGVyY2xvY2std2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG52YXIgYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1zcXVhcmUtY291bnRlcmNsb2NrLXdpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tY2lyY2xlXCIpO1xuXHRpZiAoeCA+PSB5KSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwib3JiaXQtY2lyY2xlXCIpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm9yYml0LWNpcmNsZS00eDNcIik7XG5cdFx0fVxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLW9yYml0LWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60YDRg9Cz0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG52YXIgYWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtb3JiaXQtY2xvY2t3aXNlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLW9yYml0LWNvdW50ZXJjbG9jay13aXNlXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQt9C80LXQudC60L7QuSAo0LvQtdCy0L4gLSDQv9GA0LDQstC+KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG52YXIgYWRkQ2lyY2xlU25ha2VSaWdodExlZnQgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1vcmJpdC1jb3VudGVyY2xvY2std2lzZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1zbmFrZS1yaWdodC1sZWZ0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INGD0L/RgNCw0LbQvdC10L3QuNC5XG4vLyDQn9GA0L7QstC10YDQutCwINC90LAg0YHRg9GJ0LXRgdGC0LLQvtCy0LDQvdC40LUg0Y3Qu9C10LzQtdC90YLQsCDQutC90L7Qv9C60LhcbnZhciBlbEFuaW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0YW5pbVwiKTtcbmlmKGVsQW5pbSl7XG5cdHN0YXJ0YW5pbS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0c2V0VGltZW91dChhZGRMaW5lYXJDb250LCA1MDApO1xuXHRcdHNldFRpbWVvdXQoYWRkTWFpbkNpcmNsZSwgNTAwKTtcblx0XHQvLyDQodC60YDRi9GC0LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCDRgtCw0LnQvNC10YDQsFxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDEwMDApO1xuXHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE2MDAwKTtcblx0XHRzZXRUaW1lb3V0KGhpZGVCdG4sIDUwMCk7XG5cdFx0c2V0VGltZW91dChhZGRUb3BCb3RBbmltLCAyMjAwMCk7XG5cdFx0c2V0VGltZW91dChhZGRMZWZ0UmlnaHRBbmltLCA0MjAwMCk7XG5cdFx0aWYoeCA+IDEgJiYgeCA8PSAxMDgzKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCA1OTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCA3NDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgNzkwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDk2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTEzMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDEyODAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxMzMwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxNzEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTg2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAxOTEwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAyMzEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMjQ2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMjUxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAyNzAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDI5MTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAzMDYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzMTEwMDApO1xuXHRcdFx0XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNvbnRDaXJjbGUsIDM0MjAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHNob3dCdG4sIDM0MzAwMCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYoeCA+IDEwODMgJiYgeCA8PSAxNjQzKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCA2MjAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCA3NzAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgODIwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDEwMjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDEyMjAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxMzcwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTQyMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTg2MDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDIwMTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMjA2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMjUwMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI2NTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDI3MDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMjg5MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAzMTAwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMzI1MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzMwMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDb250Q2lyY2xlLCAzNjEwMDApO1xuXHRcdFx0c2V0VGltZW91dChzaG93QnRuLCAzNjIwMDApO1xuXHRcdH1cblx0XHRlbHNlIGlmKHggPiAxNjQzICYmIHggPD0gMzAwOCkge1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgNjUwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgODAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDg1MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCAxMDgwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxMzEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTQ2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDE1MTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDIwMTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyMTYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDIyMTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDI3MTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyODYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAyOTEwMDApO1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDMxMDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMzMxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDM0NjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDM1MTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ29udENpcmNsZSwgMzgyMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoc2hvd0J0biwgMzgzMDAwKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoeCA+IDMwMDgpIHtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDc0MDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDg5MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BSaWdodEJvdExlZnRBbmltLCA5NDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgMTI2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTU4MDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE3MzAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxNzgwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAyMzQwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMjQ5MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAyNTQwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAzMTAwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMzI1MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMzMwMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAzNDkwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDM3MDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAzODUwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzOTAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNvbnRDaXJjbGUsIDQyMTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHNob3dCdG4sIDQyMjAwMCk7XG5cdFx0fVxuXHR9O1xufVxuXG4vLyDQk9C10L3QtdGA0LDRgtC+0YAg0LPRgNCw0LTQuNC10L3RgtC+0LJcbnZhciBlbEdyYWRpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmFkaWVudFwiKTtcbmlmKGVsR3JhZGllbnQpIHtcblx0Ly8gdGFyZ2V0IHRvIGdpdmUgYmFja2dyb3VuZCB0b1xuXHR2YXIgJGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JhZGllbnRcIik7XG5cdC8vIFJnYiB2YWxzIG9mIHRoZSBncmFkaWVudHNcblx0dmFyIGdyYWRpZW50cyA9IFtcblx0XHR7IHN0YXJ0OiBbMTEsNzIsMTA3XSwgc3RvcDogWzEwMywxNzgsMTExXSB9LFxuXHRcdHsgc3RhcnQ6IFsyNCwgOTAsIDE1N10sIHN0b3A6IFs2OCwxNjAsMTQxXSB9LFxuXHRcdHsgc3RhcnQ6IFsxMSwgMTM1LCAxNDddLCBzdG9wOiBbNjksMTA0LDIyMF0gfVxuXHRdO1xuXHQvLyBIb3cgbG9uZyBmb3IgZWFjaCB0cmFuc2l0aW9uXG5cdHZhciB0cmFuc2l0aW9uX3RpbWUgPSAxNDtcblxuXHQvLyBJbnRlcm5hbCB0eXBlIHZhcnNcblx0dmFyIGN1cnJlbnRJbmRleCA9IDA7IC8vIHdoZXJlIHdlIGFyZSBpbiB0aGUgZ3JhZGllbnRzIGFycmF5XG5cdHZhciBuZXh0SW5kZXggPSAxOyAvLyB3aGF0IGluZGV4IG9mIHRoZSBncmFkaWVudHMgYXJyYXkgaXMgbmV4dFxuXHR2YXIgc3RlcHNfY291bnQgPSAwOyAvLyBzdGVwcyBjb3VudGVyXG5cdHZhciBzdGVwc190b3RhbCA9IE1hdGgucm91bmQodHJhbnNpdGlvbl90aW1lKjYwKTsgLy8gdG90YWwgYW1vdW50IG9mIHN0ZXBzXG5cdHZhciByZ2Jfc3RlcHMgPSB7XG5cdFx0c3RhcnQ6IFswLDAsMF0sXG5cdFx0c3RvcDogWzAsMCwwXVxuXHR9OyAvLyBIb3cgbXVjaCB0byBhbHRlciBlYWNoIHJnYiB2YWx1ZVxuXHR2YXIgcmdiX3ZhbHVlcyA9IHtcblx0XHRzdGFydDogWzAsMCwwXSxcblx0XHRzdG9wOiBbMCwwLDBdXG5cdH07IC8vIFRoZSBjdXJyZW50IHJnYiB2YWx1ZXMsIGdldHMgYWx0ZXJlZCBieSByZ2Igc3RlcHMgb24gZWFjaCBpbnRlcnZhbFxuXHR2YXIgcHJlZml4ZXMgPSBbXCItd2Via2l0LVwiLFwiLW1vei1cIixcIi1vLVwiLFwiLW1zLVwiLFwiXCJdOyAvLyBmb3IgbG9vcGluZyB0aHJvdWdoIGFkZGluZyBzdHlsZXNcblx0dmFyIGRpdl9zdHlsZSA9ICRkaXYuc3R5bGU7IC8vIHNob3J0IGN1dCB0byBhY3R1YWxseSBhZGRpbmcgc3R5bGVzXG5cdHZhciBjb2xvcjEsIGNvbG9yMjtcblxuXHQvLyBTZXRzIG5leHQgY3VycmVudCBhbmQgbmV4dCBpbmRleCBvZiBncmFkaWVudHMgYXJyYXlcblx0ZnVuY3Rpb24gc2V0X25leHQobnVtKSB7XG5cdFx0cmV0dXJuIChudW0gKyAxIDwgZ3JhZGllbnRzLmxlbmd0aCkgPyBudW0gKyAxIDogMDtcblx0fVxuXG5cdC8vIFdvcmsgb3V0IGhvdyBiaWcgZWFjaCByZ2Igc3RlcCBpc1xuXHRmdW5jdGlvbiBjYWxjX3N0ZXBfc2l6ZShhLGIpIHtcblx0XHRyZXR1cm4gKGEgLSBiKSAvIHN0ZXBzX3RvdGFsO1xuXHR9XG5cblx0Ly8gUG9wdWxhdGUgdGhlIHJnYl92YWx1ZXMgYW5kIHJnYl9zdGVwcyBvYmplY3RzXG5cdGZ1bmN0aW9uIGNhbGNfc3RlcHMoKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIHJnYl92YWx1ZXMpIHtcblx0XHRcdGlmIChyZ2JfdmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0XHRcdHJnYl92YWx1ZXNba2V5XVtpXSA9IGdyYWRpZW50c1tjdXJyZW50SW5kZXhdW2tleV1baV07XG5cdFx0XHRcdFx0cmdiX3N0ZXBzW2tleV1baV0gPSBjYWxjX3N0ZXBfc2l6ZShncmFkaWVudHNbbmV4dEluZGV4XVtrZXldW2ldLHJnYl92YWx1ZXNba2V5XVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBVcGRhdGUgY3VycmVudCByZ2IgdmFscywgdXBkYXRlIERPTSBlbGVtZW50IHdpdGggbmV3IENTUyBiYWNrZ3JvdW5kXG5cdGZ1bmN0aW9uIHVwZGF0ZUdyYWRpZW50KCl7XG5cdFx0Ly8gdXBkYXRlIHRoZSBjdXJyZW50IHJnYiB2YWxzXG5cdFx0Zm9yICh2YXIga2V5IGluIHJnYl92YWx1ZXMpIHtcblx0XHRcdGlmIChyZ2JfdmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0XHRcdHJnYl92YWx1ZXNba2V5XVtpXSArPSByZ2Jfc3RlcHNba2V5XVtpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIENTUyByZ2IgdmFsdWVzXG5cdFx0dmFyIHRfY29sb3IxID0gXCJyZ2IoXCIrKHJnYl92YWx1ZXMuc3RhcnRbMF0gfCAwKStcIixcIisocmdiX3ZhbHVlcy5zdGFydFsxXSB8IDApK1wiLFwiKyhyZ2JfdmFsdWVzLnN0YXJ0WzJdIHwgMCkrXCIpXCI7XG5cdFx0dmFyIHRfY29sb3IyID0gXCJyZ2IoXCIrKHJnYl92YWx1ZXMuc3RvcFswXSB8IDApK1wiLFwiKyhyZ2JfdmFsdWVzLnN0b3BbMV0gfCAwKStcIixcIisocmdiX3ZhbHVlcy5zdG9wWzJdIHwgMCkrXCIpXCI7XG5cblx0XHQvLyBIYXMgYW55dGhpbmcgY2hhbmdlZCBvbiB0aGlzIGludGVyYXRpb25cblx0XHRpZiAodF9jb2xvcjEgIT0gY29sb3IxIHx8IHRfY29sb3IyICE9IGNvbG9yMikge1xuXG5cdFx0XHQvLyBVcGRhdGUgY29scyBzdHJpbmdzXG5cdFx0XHRjb2xvcjEgPSB0X2NvbG9yMTtcblx0XHRcdGNvbG9yMiA9IHRfY29sb3IyO1xuXG5cdFx0XHQvLyBVcGRhdGUgRE9NIGVsZW1lbnQgc3R5bGUgYXR0cmlidXRlXG5cdFx0XHRkaXZfc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCItd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgZnJvbShcIitjb2xvcjErXCIpLCB0byhcIitjb2xvcjIrXCIpKVwiO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0ZGl2X3N0eWxlLmJhY2tncm91bmRJbWFnZSA9IHByZWZpeGVzW2ldK1wibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBcIitjb2xvcjErXCIsIFwiK2NvbG9yMitcIilcIjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBXZSBkaWQgYW5vdGhlciBzdGVwXG5cdFx0c3RlcHNfY291bnQrKztcblx0XHQvLyBEaWQgd2UgZG8gdG9vIG1hbnkgc3RlcHM/XG5cdFx0aWYgKHN0ZXBzX2NvdW50ID4gc3RlcHNfdG90YWwpIHtcblx0XHRcdC8vIFJlc2V0IHN0ZXBzIGNvdW50XG5cdFx0XHRzdGVwc19jb3VudCA9IDA7XG5cdFx0XHQvLyBTZXQgbmV3IGluZGV4c1xuXHRcdFx0Y3VycmVudEluZGV4ID0gc2V0X25leHQoY3VycmVudEluZGV4KTtcblx0XHRcdG5leHRJbmRleCA9IHNldF9uZXh0KG5leHRJbmRleCk7XG5cdFx0XHQvLyBDYWxjIHN0ZXBzXG5cdFx0XHRjYWxjX3N0ZXBzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpdl9zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5kZXhPZihcImdyYWRpZW50XCIpICE9IC0xKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUdyYWRpZW50KTtcblx0XHR9XG5cdH1cblxuXHQvLyBJbml0aWFsIHN0ZXAgY2FsY1xuXHRjYWxjX3N0ZXBzKCk7XG5cblx0Ly8gU3RhcnRcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVHcmFkaWVudCk7XG59Il0sImZpbGUiOiJtYWluLmpzIn0=
