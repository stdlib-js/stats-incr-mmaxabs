// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":u(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=p.call(i,w,"$1e"),i=p.call(i,v,"e"),i=p.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=p.call(i,g,"e+0$1"),i=p.call(i,d,"e-0$1"),e.alternate&&(i=p.call(i,h,"$1."),i=p.call(i,y,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):l.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var S=String.fromCharCode,k=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,i,a,o,u,l,f,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,f=0;f<e.length;f++)if(s(i=e[f]))u+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,k(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),u+=i.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=T.exec(e);i;)(r=e.slice(n,T.lastIndex-i[0].length)).length&&t.push(r),t.push(I(i)),n=T.lastIndex,i=T.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function V(e){return"string"==typeof e}function O(e){var r,t;if(!V(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return F.apply(null,r)}var N=Object.prototype,P=N.toString,$=N.__defineGetter__,C=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__,M=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(R.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function Z(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return L&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",B=U()?function(e){var r,t,i,n,a;if(null==e)return X.call(e);t=e[q],a=q,r=null!=(n=e)&&Y.call(n,a);try{e[q]=void 0}catch(r){return X.call(e)}return i=X.call(e),r?e[q]=t:delete e[q],i}:function(e){return X.call(e)},D=Number,H=D.prototype.toString,J=U();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function Q(e){return W(e)||K(e)}Z(Q,"isPrimitive",W),Z(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=D.NEGATIVE_INFINITY,te=Math.floor;function ie(e){return e<ee&&e>re&&te(r=e)===r;var r}function ne(e){return W(e)&&ie(e)}function ae(e){return K(e)&&ie(e.valueOf())}function oe(e){return ne(e)||ae(e)}function ce(e){return ne(e)&&e>0}function se(e){return ae(e)&&e.valueOf()>0}function ue(e){return ce(e)||se(e)}function le(e){return Math.abs(e)}function fe(e){return e!=e}function pe(e){return 0===e&&1/e===ee}Z(oe,"isPrimitive",ne),Z(oe,"isObject",ae),Z(ue,"isPrimitive",ce),Z(ue,"isObject",se);var ge="function"==typeof Float64Array,de="function"==typeof Float64Array?Float64Array:null,he="function"==typeof Float64Array?Float64Array:void 0,ye=function(){var e,r,t;if("function"!=typeof de)return!1;try{r=new de([1,3.14,-3.14,NaN]),t=r,e=(ge&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?he:function(){throw new Error("not implemented")};return function(e){var r;if(!ce(e))throw new TypeError(O("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=function(e){var r,t,i,n;if(!ce(e))throw new TypeError(O("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new ye(e),t=re,n=-1,i=0,function(a){var o,c;if(0===arguments.length)return 0===i?null:t;if(n=(n+1)%e,i<e)i+=1,(fe(a)||a>t||a===t&&pe(a))&&(t=a);else if(fe(a)||a>t)t=a;else if(r[n]===t&&a<t||fe(r[n])){for(t=a,c=0;c<e;c++)if(c!==n){if(fe(o=r[c])){t=o;break}(o>t||o===t&&pe(o))&&(t=o)}}else if(r[n]===t&&a===t&&0===a)if(pe(a))t=a;else if(pe(r[n]))for(t=a,c=0;c<e;c++)if(c!==n&&pe(r[c])){t=r[c];break}return r[n]=a,t}}(e),function(e){return 0===arguments.length?r():r(le(e))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmmaxabs=r();
//# sourceMappingURL=browser.js.map
