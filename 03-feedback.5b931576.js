!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},i=function(e){try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,m="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,g=m||v||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,h=function(){return g.Date.now()};function S(e,t,n){var r,o,i,a,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(u);function v(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function g(e){return l=e,f=setTimeout(S,t),s?v(e):a}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function S(){var e=h();if(p(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?b(n,i-(e-l)):n}(e))}function w(e){return f=void 0,m&&r?v(e):(r=o=void 0,a)}function T(){var e=h(),n=p(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return g(c);if(d)return f=setTimeout(S,t),v(c)}return void 0===f&&(f=setTimeout(S,t)),a}return t=O(t)||0,j(n)&&(s=!!n.leading,i=(d="maxWait"in n)?y(O(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?a:w(h())},T}function j(t){var n=void 0===t?"undefined":e(a)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(a)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=l.test(t);return r||s.test(t)?d(t.slice(2),r?2:8):c.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(u);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var w,T=document.querySelector(".feedback-form"),x=document.querySelector(".feedback-form textarea"),N=document.querySelector(".feedback-form input"),E="feedback-form-state",k=[];w=o(E),x.value=w?w[w.length-1].message:"",N.value=w?w[w.length-1].email:"",T.addEventListener("input",e(t)((function(e){e.preventDefault(),k.push({email:"".concat(T.elements.email.value),message:"".concat(T.elements.message.value)}),r(E,k)}),500)),T.addEventListener("submit",(function(e){e.preventDefault();var t=o(E);if(!t)return;console.log(t[t.length-1].email),console.log(t[t.length-1].message),T.reset(),i(E)}))}();
//# sourceMappingURL=03-feedback.5b931576.js.map
