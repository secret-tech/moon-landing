!function r(s,o,a){function l(i,e){if(!o[i]){if(!s[i]){var t="function"==typeof require&&require;if(!e&&t)return t(i,!0);if(c)return c(i,!0);throw new Error("Cannot find module '"+i+"'")}var n=o[i]={exports:{}};s[i][0].call(n.exports,function(e){var t=s[i][1][e];return l(t||e)},n,n.exports,r,s,o,a)}return o[i].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,o,t){!function(){"use strict";var u,e;function t(e){return void 0===this||Object.getPrototypeOf(this)!==t.prototype?new t(e):((u=this).version="3.3.6",u.tools=new s,u.isSupported()?(u.tools.extend(u.defaults,e||{}),u.defaults.container=f(u.defaults),u.store={elements:{},containers:[]},u.sequences={},u.history=[],u.uid=0,u.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),u)}function f(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(u.tools.isNode(e.container))return e.container;console.log('ScrollReveal: invalid container "'+e.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return u.defaults.container}function g(){return++u.uid}function m(e,t,i){t.container&&(t.container=i),e.config?e.config=u.tools.extendClone(e.config,t):e.config=u.tools.extendClone(u.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function p(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=i(e,0),e.styles.transition.delayed=i(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",n(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",n(e)}function i(e,t){var i=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+i.duration/1e3+"s "+i.easing+" "+t/1e3+"s, opacity "+i.duration/1e3+"s "+i.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+i.duration/1e3+"s "+i.easing+" "+t/1e3+"s, opacity "+i.duration/1e3+"s "+i.easing+" "+t/1e3+"s; "}function n(e){var t,i=e.config,n=e.styles.transform;t="top"===i.origin||"left"===i.origin?/^-/.test(i.distance)?i.distance.substr(1):"-"+i.distance:i.distance,parseInt(i.distance)&&(n.initial+=" translate"+i.axis+"("+t+")",n.target+=" translate"+i.axis+"(0)"),i.scale&&(n.initial+=" scale("+i.scale+")",n.target+=" scale(1)"),i.rotate.x&&(n.initial+=" rotateX("+i.rotate.x+"deg)",n.target+=" rotateX(0)"),i.rotate.y&&(n.initial+=" rotateY("+i.rotate.y+"deg)",n.target+=" rotateY(0)"),i.rotate.z&&(n.initial+=" rotateZ("+i.rotate.z+"deg)",n.target+=" rotateZ(0)"),n.initial+="; opacity: "+i.opacity+";",n.target+="; opacity: "+e.styles.computed.opacity+";"}function v(e){var t=e.config.container;t&&-1===u.store.containers.indexOf(t)&&u.store.containers.push(e.config.container),u.store.elements[e.id]=e}function y(){if(u.isSupported()){r();for(var e=0;e<u.store.containers.length;e++)u.store.containers[e].addEventListener("scroll",a),u.store.containers[e].addEventListener("resize",a);u.initialized||(window.addEventListener("scroll",a),window.addEventListener("resize",a),u.initialized=!0)}return u}function a(){e(r)}function r(){var n,r,i,s,o;u.tools.forOwn(u.sequences,function(e){o=u.sequences[e],i=!1;for(var t=0;t<o.elemIds.length;t++)s=o.elemIds[t],c(u.store.elements[s])&&!i&&(i=!0);o.active=i}),u.tools.forOwn(u.store.elements,function(e){var t,i;r=u.store.elements[e],i=(t=r).config.useDelay,n="always"===i||"onload"===i&&!u.initialized||"once"===i&&!t.seen,function(e){if(e.sequence){var t=u.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return c(e)&&!e.revealing&&!e.disabled}(r)?(r.config.beforeReveal(r.domEl),n?r.domEl.setAttribute("style",r.styles.inline+r.styles.transform.target+r.styles.transition.delayed):r.domEl.setAttribute("style",r.styles.inline+r.styles.transform.target+r.styles.transition.instant),l("reveal",r,n),r.revealing=!0,r.seen=!0,r.sequence&&function(e,t){var i=0,n=0,r=u.sequences[e.sequence.id];r.blocked=!0,t&&"onload"===e.config.useDelay&&(n=e.config.delay);e.sequence.timer&&(i=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer));e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,e.sequence.timer=null,a()},Math.abs(r.interval)+n-i)}(r,n)):function(e){if(e.sequence){var t=u.sequences[e.sequence.id];return!t.active&&e.config.reset&&e.revealing&&!e.disabled}return!c(e)&&e.config.reset&&e.revealing&&!e.disabled}(r)&&(r.config.beforeReset(r.domEl),r.domEl.setAttribute("style",r.styles.inline+r.styles.transform.initial+r.styles.transition.instant),l("reset",r),r.revealing=!1)})}function l(e,t,i){var n=0,r=0,s="after";switch(e){case"reveal":r=t.config.duration,i&&(r+=t.config.delay),s+="Reveal";break;case"reset":r=t.config.duration,s+="Reset"}t.timer&&(n=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[s](t.domEl),t.timer=null},r-n)}function b(e){for(var t=0,i=0,n=e.offsetHeight,r=e.offsetWidth;isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(i+=e.offsetLeft),e=e.offsetParent;);return{top:t,left:i,height:n,width:r}}function c(e){var t,i,n,r,s,o,a,l,c,d=b(e.domEl),h={width:(t=e.config.container).clientWidth,height:t.clientHeight},u=function(e){if(e&&e!==window.document.documentElement){var t=b(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}(e.config.container),f=e.config.viewFactor,g=d.height,m=d.width,p=d.top,v=d.left;return i=p+g*f,n=v+m*f,r=p+g-g*f,s=v+m-m*f,o=u.y+e.config.viewOffset.top,a=u.x+e.config.viewOffset.left,l=u.y-e.config.viewOffset.bottom+h.height,c=u.x-e.config.viewOffset.right+h.width,i<l&&o<r&&n<c&&a<s||"fixed"===window.getComputedStyle(e.domEl).position}function s(){}t.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},t.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},t.prototype.reveal=function(e,t,i,n){var r,s,o,a,l,c,d;if(void 0!==t&&"number"==typeof t?(i=t,t={}):null==t&&(t={}),!(s=function(e,t){{if("string"==typeof e)return Array.prototype.slice.call(t.querySelectorAll(e));if(u.tools.isNode(e))return[e];if(u.tools.isNodeList(e))return Array.prototype.slice.call(e)}return[]}(e,r=f(t))).length)return console.log('ScrollReveal: reveal on "'+e+'" failed, no elements found.'),u;i&&"number"==typeof i&&(c=g(),l=u.sequences[c]={id:c,interval:i,elemIds:[],active:!1});for(var h=0;h<s.length;h++)(a=s[h].getAttribute("data-sr-id"))?o=u.store.elements[a]:(o={id:g(),domEl:s[h],seen:!1,revealing:!1}).domEl.setAttribute("data-sr-id",o.id),l&&(o.sequence={id:l.id,index:l.elemIds.length},l.elemIds.push(o.id)),m(o,t,r),p(o),v(o),u.tools.isMobile()&&!o.config.mobile||!u.isSupported()?(o.domEl.setAttribute("style",o.styles.inline),o.disabled=!0):o.revealing||o.domEl.setAttribute("style",o.styles.inline+o.styles.transform.initial);return!n&&u.isSupported()&&(d={target:e,config:t,interval:i},u.history.push(d),u.initTimeout&&window.clearTimeout(u.initTimeout),u.initTimeout=window.setTimeout(y,0)),u},t.prototype.sync=function(){if(u.history.length&&u.isSupported()){for(var e=0;e<u.history.length;e++){var t=u.history[e];u.reveal(t.target,t.config,t.interval,!0)}y()}else console.log("ScrollReveal: sync failed, no reveals found.");return u},s.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},s.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},s.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},s.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var i in e)e.hasOwnProperty(i)&&t(i)},s.prototype.extend=function(t,i){return this.forOwn(i,function(e){this.isObject(i[e])?(t[e]&&this.isObject(t[e])||(t[e]={}),this.extend(t[e],i[e])):t[e]=i[e]}.bind(this)),t},s.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},s.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):void 0!==o&&o.exports?o.exports=t:window.ScrollReveal=t}()},{}],2:[function(e,t,i){var n,r;n="undefined"!=typeof self?self:this,r=function(){return function(i){function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r={};return n.m=i,n.c=r,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),s=function(){function i(e){var t=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.config=i.mergeSettings(e),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=i.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){t[e]=t[e].bind(t)}),this.init()}return r(i,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var i=document.createDocumentFragment();if(this.config.loop)for(var n=this.innerElements.length-this.perPage;n<this.innerElements.length;n++){var r=this.buildSliderFrameItem(this.innerElements[n].cloneNode(!0));i.appendChild(r)}for(var s=0;s<this.innerElements.length;s++){var o=this.buildSliderFrameItem(this.innerElements[s]);i.appendChild(o)}if(this.config.loop)for(var a=0;a<this.perPage;a++){var l=this.buildSliderFrameItem(this.innerElements[a].cloneNode(!0));i.appendChild(l)}this.sliderFrame.appendChild(i),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===n(this.config.perPage))for(var e in this.perPage=1,this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}},{key:"prev",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop)if(this.currentSlide-e<0){this.disableTransition();var n=this.currentSlide+this.innerElements.length,r=n+this.perPage,s=(this.config.rtl?1:-1)*r*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(s+o)+"px, 0, 0)",this.currentSlide=n-e}else this.currentSlide=this.currentSlide-e;else this.currentSlide=Math.max(this.currentSlide-e,0);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop)if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var n=this.currentSlide-this.innerElements.length,r=n+this.perPage,s=(this.config.rtl?1:-1)*r*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(s+o)+"px, 0, 0)",this.currentSlide=n+e}else this.currentSlide=this.currentSlide+e;else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,i=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,n=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+n+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+n+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,n=0<e&&this.currentSlide-i<0,r=e<0&&this.currentSlide+i>this.innerElements.length-this.perPage;0<e&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent(n||r)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),i=this.drag.endX-this.drag.startX,n=this.config.rtl?t+i:t-i;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=(this.config.loop?this.currentSlide+this.perPage:this.currentSlide)*(this.selectorWidth/this.perPage),i=this.drag.endX-this.drag.startX,n=this.config.rtl?t+i:t-i;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var i=e<this.currentSlide,n=this.currentSlide+this.perPage-1===e;(i||n)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var n=0<(t<=this.currentSlide)&&this.innerElements.length;this.currentSlide=n?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var i=document.createDocumentFragment(),n=0;n<this.innerElements.length;n++)i.appendChild(this.innerElements[n]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},i=e;for(var n in i)t[n]=i[n];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),i}();t.default=s,e.exports=t.default}])},"object"==typeof i&&"object"==typeof t?t.exports=r():"function"==typeof define&&define.amd?define("Siema",[],r):"object"==typeof i?i.Siema=r():n.Siema=r()},{}],3:[function(e,t,i){"use strict";var n=r(e("scrollreveal"));r(e("siema"));function r(e){return e&&e.__esModule?e:{default:e}}window.sr=(0,n.default)({duration:300,reset:!1,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",scale:1,opaicty:1,viewFactor:1e-5}),sr.reveal(".js-reveal-topbar",{delay:400,duration:300,distance:"-80px"}),sr.reveal(".js-reveal-landing",{delay:100,duration:300,distance:"80px"}),sr.reveal(".js-reveal-buttons",{delay:200,duration:300,distance:"80px"}),sr.reveal(".js-reveal-screenshots",{delay:300,duration:300,distance:"80px"}),sr.reveal(".js-reveal-benefits",{delay:300,duration:500,distance:"80px"}),sr.reveal(".js-reveal-free",{delay:500,duration:500,distance:"80px"}),sr.reveal(".js-reveal-team-title",{delay:100,duration:500,distance:"80px"}),sr.reveal(".js-reveal-team-first",{delay:200,duration:500,distance:"80px"}),sr.reveal(".js-reveal-team-second",{delay:300,duration:500,distance:"80px"}),sr.reveal(".js-reveal-team-third",{delay:400,duration:500,distance:"80px"}),sr.reveal(".js-reveal-contacts",{delay:200,duration:500,distance:"80px"}),sr.reveal(".js-reveal-donate",{delay:300,duration:500,distance:"80px"})},{scrollreveal:1,siema:2}]},{},[3]);