(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{9551:function(e,t,n){"use strict";n.r(t);n(7294);var r=n(8318),i=n(6941),a=n(8595),o=n(267),c=n(1252),s=n(6794),l=(n(5675),n(5893));t.default=function(e){var t=e.prof;return(0,l.jsx)(i.Z,{className:"section-lg bg-gradient-info shadow-lg border-0",children:(0,l.jsx)(a.Z,{className:"",children:(0,l.jsx)("div",{className:"p-2",children:(0,l.jsxs)(o.Z,{className:"",children:[(0,l.jsx)(c.Z,{className:"order-lg-2",lg:"4",children:(0,l.jsx)("img",{src:t.avatar_url,style:{width:"200px"},alt:"",className:"rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"})}),(0,l.jsxs)(c.Z,{lg:"8",className:"order-lg-1",children:[(0,l.jsx)("h2",{className:"text-white",children:"Contact me:"}),(0,l.jsx)("p",{className:"lead text-white mt-3",children:"Whether you want to discuss a project or just say hello, my inbox is always open."}),(0,l.jsx)("p",{className:"text-white mt-3",children:t.bio}),(0,l.jsxs)("div",{className:"my-3 icon-shape bg-gradient-white shadow rounded text-info",children:[(0,l.jsx)(r.UXH,{}),t.location]}),(0,l.jsx)(s.Z,{})]})]})})})})}},6794:function(e,t,n){"use strict";n(7294);var r=n(7975),i=n(2806),a=n(2091),o=n(5893);t.Z=function(){return(0,o.jsxs)("div",{className:"btn-wrapper text-lg",children:[i.KT.gmail&&(0,o.jsx)(r.Z,{className:"btn-icon-only rounded-circle ml-1 bg-white",color:"gmail",href:i.KT.gmail,rel:"noopener","aria-label":"Gmail",target:"_blank",onClick:function(){return window.location.href="mailto:hjtrhodes@gmail.com"},children:(0,o.jsx)("span",{className:"btn-inner--icon",children:(0,o.jsx)(a.SRX,{})})}),i.KT.linkedin&&(0,o.jsx)(r.Z,{className:"btn-icon-only rounded-circle ml-1",color:"twitter",rel:"noopener","aria-label":"Linkedin",href:i.KT.linkedin,target:"_blank",children:(0,o.jsx)("span",{className:"btn-inner--icon",children:(0,o.jsx)(a.ltd,{})})}),i.KT.github&&(0,o.jsx)(r.Z,{className:"btn-icon-only rounded-circle ml-1",color:"github",href:i.KT.github,rel:"noopener","aria-label":"Github",target:"_blank",children:(0,o.jsx)("span",{className:"btn-inner--icon",children:(0,o.jsx)(a.hJX,{})})})]})}},9917:function(e,t,n){"use strict";var r=n(3848),i=n(3115);var a=d(n(7294)),o=d(n(639)),c=n(8997),s=n(5809),l=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var m=new Set;var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t).concat(N(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(N(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(N(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||s.imageConfigDefault,v=w.deviceSizes,b=w.imageSizes,p=w.loader,x=w.path,j=(w.domains,[].concat(i(v),i(b)));function y(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,o=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,o=[];r=a.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c=.01*Math.min.apply(Math,o);return{widths:j.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return j.find((function(t){return t>=e}))||j[j.length-1]})))),kind:"x"}}(a,r,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:o,width:u[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t=h.get(p);if(t)return t(f({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(p))}function N(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),j.sort((function(e,t){return e-t}))},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=i.useRef(),l=i.useState(!1),u=r(l,2),d=u[0],f=u[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return i.useEffect((function(){if(!o&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[m,d]};var i=n(7294),a=n(3447),o="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},5675:function(e,t,n){n(9917)}}]);