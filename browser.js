// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,f){var l,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(t,e)||a.call(t,e)?(l=t.__proto__,t.__proto__=r,delete t[e],t[e]=f.value,t.__proto__=l):t[e]=f.value),y="get"in f,p="set"in f,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,f.get),p&&i&&i.call(t,e,f.set),t};function l(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",m=p()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[v],i=v,e=null!=(o=t)&&s.call(o,i);try{t[v]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[v]=r:delete t[v],n}:function(t){return b.call(t)},d=Number,_=d.prototype.toString,g=p();function h(t){return"object"==typeof t&&(t instanceof d||(g?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function j(t){return c(t)||h(t)}l(j,"isPrimitive",c),l(j,"isObject",h);var w=Number.POSITIVE_INFINITY,O=d.NEGATIVE_INFINITY,S=Math.floor;function T(t){return t<w&&t>O&&S(e=t)===e;var e}function I(t){return c(t)&&T(t)}function A(t){return h(t)&&T(t.valueOf())}function F(t){return I(t)||A(t)}function N(t){return I(t)&&t>0}function E(t){return A(t)&&t.valueOf()>0}function P(t){return N(t)||E(t)}function V(t){return Math.abs(t)}function k(t){return t!=t}function x(t){return 0===t&&1/t===w}l(F,"isPrimitive",I),l(F,"isObject",A),l(P,"isPrimitive",N),l(P,"isObject",E);var G="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,C="function"==typeof Float64Array?Float64Array:void 0,Y=function(){var t,e,r;if("function"!=typeof M)return!1;try{e=new M([1,3.14,-3.14,NaN]),r=e,t=(G&&r instanceof Float64Array||"[object Float64Array]"===m(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?C:function(){throw new Error("not implemented")};return function(t){var e;if(!N(t))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("1IL8B,Hs",t));return e=function(t){var e,r,n,o;if(!N(t))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+t+"`.");return e=new Y(t),r=O,o=-1,n=0,function(i){var u,a;if(0===arguments.length)return 0===n?null:r;if(o=(o+1)%t,n<t)n+=1,(k(i)||i>r||i===r&&x(i))&&(r=i);else if(k(i)||i>r)r=i;else if(e[o]===r&&i<r||k(e[o])){for(r=i,a=0;a<t;a++)if(a!==o){if(k(u=e[a])){r=u;break}(u>r||u===r&&x(u))&&(r=u)}}else if(e[o]===r&&i===r&&0===i)if(x(i))r=i;else if(x(e[o]))for(r=i,a=0;a<t;a++)if(a!==o&&x(e[a])){r=e[a];break}return e[o]=i,r}}(t),function(t){return 0===arguments.length?e():e(V(t))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmmaxabs=e();
//# sourceMappingURL=browser.js.map
