(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[590],{7631:function(e){e.exports=function(){"use strict";function e(){return"undefined"!==typeof window}function t(){var e=!1;try{var t={get passive(){e=!0}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(n){e=!1}return e}function n(){return!!(e()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame)}function s(e){return 9===e.nodeType}function i(e){return e&&e.document&&s(e.document)}function o(e){var t=e.document,n=t.body,s=t.documentElement;return{scrollHeight:function(){return Math.max(n.scrollHeight,s.scrollHeight,n.offsetHeight,s.offsetHeight,n.clientHeight,s.clientHeight)},height:function(){return e.innerHeight||s.clientHeight||n.clientHeight},scrollY:function(){return void 0!==e.pageYOffset?e.pageYOffset:(s||n.parentNode||n).scrollTop}}}function r(e){return{scrollHeight:function(){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},height:function(){return Math.max(e.offsetHeight,e.clientHeight)},scrollY:function(){return e.scrollTop}}}function a(e){return i(e)?o(e):r(e)}function l(e,n,s){var i,o=t(),r=!1,l=a(e),c=l.scrollY(),u={};function h(){var e=Math.round(l.scrollY()),t=l.height(),i=l.scrollHeight();u.scrollY=e,u.lastScrollY=c,u.direction=e>c?"down":"up",u.distance=Math.abs(e-c),u.isOutOfBounds=e<0||e+t>i,u.top=e<=n.offset[u.direction],u.bottom=e+t>=i,u.toleranceExceeded=u.distance>n.tolerance[u.direction],s(u),c=e,r=!1}function d(){r||(r=!0,i=requestAnimationFrame(h))}var p=!!o&&{passive:!0,capture:!1};return e.addEventListener("scroll",d,p),h(),{destroy:function(){cancelAnimationFrame(i),e.removeEventListener("scroll",d,p)}}}function c(e){return e===Object(e)?e:{down:e,up:e}}function u(e,t){t=t||{},Object.assign(this,u.options,t),this.classes=Object.assign({},u.options.classes,t.classes),this.elem=e,this.tolerance=c(this.tolerance),this.offset=c(this.offset),this.initialised=!1,this.frozen=!1}return u.prototype={constructor:u,init:function(){return u.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout((function(e){e.scrollTracker=l(e.scroller,{offset:e.offset,tolerance:e.tolerance},e.update.bind(e))}),100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){!this.hasClass("pinned")&&this.hasClass("unpinned")||(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(e){return"down"===e.direction&&!e.top&&e.toleranceExceeded},shouldPin:function(e){return"up"===e.direction&&e.toleranceExceeded||e.top},addClass:function(e){this.elem.classList.add.apply(this.elem.classList,this.classes[e].split(" "))},removeClass:function(e){this.elem.classList.remove.apply(this.elem.classList,this.classes[e].split(" "))},hasClass:function(e){return this.classes[e].split(" ").every((function(e){return this.classList.contains(e)}),this.elem)},update:function(e){e.isOutOfBounds||!0!==this.frozen&&(e.top?this.top():this.notTop(),e.bottom?this.bottom():this.notBottom(),this.shouldUnpin(e)?this.unpin():this.shouldPin(e)&&this.pin())}},u.options={tolerance:{up:0,down:0},offset:0,scroller:e()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},u.cutsTheMustard=n(),u}()},1590:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ie}});var s=n(7294),i=n(2091),o=n(2806),r=n(7631),a=n.n(r),l=(n(1664),n(7462)),c=n(3366),u=n(5697),h=n.n(u),d=n(3967),p=n.n(d),f=n(3663),g=["expand","className","cssModule","light","dark","fixed","sticky","color","tag"],m={light:h().bool,dark:h().bool,full:h().bool,fixed:h().string,sticky:h().string,color:h().string,role:h().string,tag:f.iC,className:h().string,cssModule:h().object,expand:h().oneOfType([h().bool,h().string])},v=function(e){var t,n=e.expand,i=e.className,o=e.cssModule,r=e.light,a=e.dark,u=e.fixed,h=e.sticky,d=e.color,m=e.tag,v=(0,c.Z)(e,g),b=(0,f.mx)(p()(i,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":r,"navbar-dark":a})["bg-"+d]=d,t["fixed-"+u]=u,t["sticky-"+h]=h,t)),o);return s.createElement(m,(0,l.Z)({},v,{className:b}))};v.propTypes=m,v.defaultProps={tag:"nav",expand:!1};var b=v,x=["className","cssModule","tag"],E={tag:f.iC,className:h().string,cssModule:h().object},j=function(e){var t=e.className,n=e.cssModule,i=e.tag,o=(0,c.Z)(e,x),r=(0,f.mx)(p()(t,"navbar-brand"),n);return s.createElement(i,(0,l.Z)({},o,{className:r}))};j.propTypes=E,j.defaultProps={tag:"a"};var N,y=j,k=n(7326),C=n(1721),O=n(4572),T=n(4317),M=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Z(Z({},T.Transition.propTypes),{},{isOpen:h().bool,children:h().oneOfType([h().arrayOf(h().node),h().node]),tag:f.iC,className:h().node,navbar:h().bool,cssModule:h().object,innerRef:h().oneOfType([h().func,h().string,h().object])}),H=Z(Z({},T.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:f.wF.Collapse}),L=((N={})[f.E5.ENTERING]="collapsing",N[f.E5.ENTERED]="collapse show",N[f.E5.EXITING]="collapsing",N[f.E5.EXITED]="collapse",N);function _(e){return e.scrollHeight}var R=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind((0,k.Z)(n))})),n}(0,C.Z)(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:_(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:_(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,i=t.isOpen,o=t.className,r=t.navbar,a=t.cssModule,u=t.children,h=(t.innerRef,(0,c.Z)(t,M)),d=this.state.height,g=(0,f.ei)(h,f.rb),m=(0,f.CE)(h,f.rb);return s.createElement(T.Transition,(0,l.Z)({},g,{in:i,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var i=function(e){return L[e]||"collapse"}(t),c=(0,f.mx)(p()(o,i,r&&"navbar-collapse"),a),h=null===d?null:{height:d};return s.createElement(n,(0,l.Z)({},m,{style:Z(Z({},m.style),h),className:c,ref:e.props.innerRef}),u)}))},t}(s.Component);R.propTypes=P,R.defaultProps=H;var z=R,S=["toggleEvents","defaultOpen"],B={defaultOpen:h().bool,toggler:h().string.isRequired,toggleEvents:h().arrayOf(h().string)},I={toggleEvents:f.mP},D=function(e){function t(t){var n;return(n=e.call(this,t)||this).togglers=null,n.removeEventListeners=null,n.toggle=n.toggle.bind((0,k.Z)(n)),n.state={isOpen:t.defaultOpen||!1},n}(0,C.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.togglers=(0,f.kQ)(this.props.toggler),this.togglers.length&&(this.removeEventListeners=(0,f.y_)(this.togglers,this.toggle,this.props.toggleEvents))},n.componentWillUnmount=function(){this.togglers.length&&this.removeEventListeners&&this.removeEventListeners()},n.toggle=function(e){this.setState((function(e){return{isOpen:!e.isOpen}})),e.preventDefault()},n.render=function(){return s.createElement(z,(0,l.Z)({isOpen:this.state.isOpen},(0,f.CE)(this.props,S)))},t}(s.Component);D.propTypes=B,D.defaultProps=I;var K=D,Y=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],F={tabs:h().bool,pills:h().bool,vertical:h().oneOfType([h().bool,h().string]),horizontal:h().string,justified:h().bool,fill:h().bool,navbar:h().bool,card:h().bool,tag:f.iC,className:h().string,cssModule:h().object},U=function(e){var t=e.className,n=e.cssModule,i=e.tabs,o=e.pills,r=e.vertical,a=e.horizontal,u=e.justified,h=e.fill,d=e.navbar,g=e.card,m=e.tag,v=(0,c.Z)(e,Y),b=(0,f.mx)(p()(t,d?"navbar-nav":"nav",!!a&&"justify-content-"+a,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(r),{"nav-tabs":i,"card-header-tabs":g&&i,"nav-pills":o,"card-header-pills":g&&o,"nav-justified":u,"nav-fill":h}),n);return s.createElement(m,(0,l.Z)({},v,{className:b}))};U.propTypes=F,U.defaultProps={tag:"ul",vertical:!1};var X=U,q=["className","cssModule","active","tag"],G={tag:f.iC,active:h().bool,className:h().string,cssModule:h().object},A=function(e){var t=e.className,n=e.cssModule,i=e.active,o=e.tag,r=(0,c.Z)(e,q),a=(0,f.mx)(p()(t,"nav-item",!!i&&"active"),n);return s.createElement(o,(0,l.Z)({},r,{className:a}))};A.propTypes=G,A.defaultProps={tag:"li"};var J=A,Q=["className","cssModule","active","tag","innerRef"],W={tag:f.iC,innerRef:h().oneOfType([h().object,h().func,h().string]),disabled:h().bool,active:h().bool,className:h().string,cssModule:h().object,onClick:h().func,href:h().any},V=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind((0,k.Z)(n)),n}(0,C.Z)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.active,o=e.tag,r=e.innerRef,a=(0,c.Z)(e,Q),u=(0,f.mx)(p()(t,"nav-link",{disabled:a.disabled,active:i}),n);return s.createElement(o,(0,l.Z)({},a,{ref:r,onClick:this.onClick,className:u}))},t}(s.Component);V.propTypes=W,V.defaultProps={tag:"a"};var $=V,ee=n(8595),te=n(267),ne=n(1252),se=n(5893),ie=function(){var e=(0,s.useState)(""),t=e[0],n=e[1];return(0,s.useEffect)((function(){new(a())(document.getElementById("navbar-main")).init()}),[]),(0,se.jsx)(se.Fragment,{children:(0,se.jsx)("header",{className:"header-global",children:(0,se.jsx)(b,{className:"navbar-main navbar-transparent navbar-light headroom",expand:"lg",id:"navbar-main",children:(0,se.jsxs)(ee.Z,{children:[(0,se.jsx)(y,{href:"/",className:"mr-lg-5",children:(0,se.jsx)("h2",{className:"text-white",id:"nav-title",children:o.c0.name})}),(0,se.jsx)("button",{className:"navbar-toggler","aria-label":"navbar_toggle",id:"navbar_global",children:(0,se.jsx)("span",{className:"navbar-toggler-icon"})}),(0,se.jsxs)(K,{toggler:"#navbar_global",navbar:!0,className:t,onExiting:function(){return n("collapsing-out")},onExited:function(){return n("")},children:[(0,se.jsx)("div",{className:"navbar-collapse-header",children:(0,se.jsxs)(te.Z,{children:[(0,se.jsx)(ne.Z,{className:"collapse-brand",xs:"6",children:(0,se.jsx)("h3",{className:"text-black",id:"nav-title",children:o.c0.name})}),(0,se.jsx)(ne.Z,{className:"collapse-close",xs:"6",children:(0,se.jsxs)("button",{className:"navbar-toggler",id:"navbar_global",children:[(0,se.jsx)("span",{}),(0,se.jsx)("span",{})]})})]})}),(0,se.jsxs)(X,{className:"align-items-lg-center ml-lg-auto",navbar:!0,children:[o.KT.facebook&&(0,se.jsx)(J,{children:(0,se.jsxs)($,{rel:"noopener","aria-label":"Facebook",className:"nav-link-icon",href:o.KT.facebook,target:"_blank",children:[(0,se.jsx)("i",{children:(0,se.jsx)(i.SRX,{})}),(0,se.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Facebook"})]})}),o.KT.instagram&&(0,se.jsx)(J,{children:(0,se.jsxs)($,{rel:"noopener","aria-label":"Instagram",className:"nav-link-icon",href:o.KT.instagram,target:"_blank",children:[(0,se.jsx)("i",{children:(0,se.jsx)(i.SRX,{})}),(0,se.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Instagram"})]})}),o.KT.github&&(0,se.jsx)(J,{children:(0,se.jsxs)($,{rel:"noopener","aria-label":"Github",className:"nav-link-icon",href:o.KT.github,target:"_blank",children:[(0,se.jsx)("i",{children:(0,se.jsx)(i.hJX,{})}),(0,se.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Github"})]})}),o.KT.linkedin&&(0,se.jsx)(J,{children:(0,se.jsxs)($,{rel:"noopener","aria-label":"Linkedin",className:"nav-link-icon",href:o.KT.linkedin,target:"_blank",children:[(0,se.jsx)("i",{children:(0,se.jsx)(i.ltd,{})}),(0,se.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Linkedin"})]})}),o.KT.twitter&&(0,se.jsx)(J,{children:(0,se.jsxs)($,{rel:"noopener","aria-label":"Twitter",className:"nav-link-icon",href:o.KT.twitter,target:"_blank",children:[(0,se.jsx)("i",{children:(0,se.jsx)(i.SRX,{})}),(0,se.jsx)("span",{className:"nav-link-inner--text d-lg-none ml-2",children:"Twitter"})]})})]})]})]})})})})}},2167:function(e,t,n){"use strict";var s=n(3848);var i,o=(i=n(7294))&&i.__esModule?i:{default:i},r=n(1063),a=n(4651),l=n(7426);var c={};function u(e,t,n,s){if(e&&r.isLocalURL(t)){e.prefetch(t,n,s).catch((function(e){0}));var i=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;c[t+"%"+n+(i?"%"+i:"")]=!0}}},7426:function(e,t,n){"use strict";var s=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!r,l=i.useRef(),c=i.useState(!1),u=s(c,2),h=u[0],d=u[1],p=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||h||e&&e.tagName&&(l.current=function(e,t,n){var s=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var s=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:i,elements:s}),n}(n),i=s.id,o=s.observer,r=s.elements;return r.set(e,t),o.observe(e),function(){r.delete(e),o.unobserve(e),0===r.size&&(o.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,h]);return i.useEffect((function(){if(!r&&!h){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[h]),[p,h]};var i=n(7294),o=n(3447),r="undefined"!==typeof IntersectionObserver;var a=new Map},1664:function(e,t,n){n(2167)}}]);