/*! For license information please see 5268.7ff13f56.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5268],{52924:function(e,t,n){n.d(t,{Z:function(){return b}});var o=n(87462),r=n(63366),u=n(67294),l=n(86010),i=n(5922),c=n(27192),a=n(28979);function s(e){return(0,a.Z)("TabPanelUnstyled",e)}(0,n(76087).Z)("TabPanelUnstyled",["root","hidden"]);var d=n(12474);var f=e=>{const{value:t}=e,n=(0,d._i)();if(null===n)throw new Error("No TabContext provided");const o=t!==n.value,r=(0,d.uU)(n,t),u=(0,d.pQ)(n,t);return{hidden:o,getRootProps:()=>({"aria-labelledby":u,hidden:o,id:r})}},p=n(85893);const v=["children","className","value","components","componentsProps","component"];var b=u.forwardRef((function(e,t){var n,u;const{children:a,className:d,components:b={},componentsProps:m={},component:Z}=e,h=(0,r.Z)(e,v),{hidden:y,getRootProps:g}=f(e),w=(0,o.Z)({},e,{hidden:y}),C=(e=>{const{hidden:t}=e,n={root:["root",t&&"hidden"]};return(0,c.Z)(n,s,{})})(w),P=null!=(n=null!=Z?Z:b.Root)?n:"div",x=(0,i.Z)(P,(0,o.Z)({},h,m.root),w);return(0,p.jsx)(P,(0,o.Z)({},g(),{ref:t,role:"tabpanel"},x,{className:(0,l.Z)(C.root,null==(u=m.root)?void 0:u.className,d),children:!y&&a}))}))},59622:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(87462),r=n(63366),u=n(67294),l=n(86010),i=n(30067),c=n(27192),a=n(5922),s=n(28979);function d(e){return(0,s.Z)("TabUnstyled",e)}(0,n(76087).Z)("TabUnstyled",["root","selected","disabled"]);var f=n(12474),p=n(99962),v=n(7960),b=n(30437);const m=["getRootProps"];var Z=e=>{const{value:t,onChange:n,onClick:l,onFocus:c}=e,a=function(e){var t;const{component:n,components:r={},disabled:l=!1,href:c,ref:a,tabIndex:s=0,to:d,type:f}=e,m=u.useRef(),[Z,h]=u.useState(!1),{isFocusVisibleRef:y,onFocus:g,onBlur:w,ref:C}=(0,p.Z)(),[P,x]=u.useState(!1);l&&P&&x(!1),u.useEffect((()=>{y.current=P}),[P,y]);const R=e=>t=>{var n;P&&t.preventDefault(),null==(n=e.onMouseLeave)||n.call(e,t)},k=e=>t=>{var n;w(t),!1===y.current&&x(!1),null==(n=e.onBlur)||n.call(e,t)},T=e=>t=>{var n,o;m.current||(m.current=t.currentTarget),g(t),!0===y.current&&(x(!0),null==(o=e.onFocusVisible)||o.call(e,t)),null==(n=e.onFocus)||n.call(e,t)},E=null!=(t=null!=n?n:r.Root)?t:"button",$=()=>{const e=m.current;return"button"!==E&&!("A"===(null==e?void 0:e.tagName)&&null!=e&&e.href)},F=e=>t=>{var n;t.target!==t.currentTarget||l||h(!0),null==(n=e.onMouseDown)||n.call(e,t)},M=e=>t=>{var n;t.target===t.currentTarget&&h(!1),null==(n=e.onMouseUp)||n.call(e,t)},N=e=>t=>{var n,o;t.target===t.currentTarget&&$()&&" "===t.key&&t.preventDefault(),t.target!==t.currentTarget||" "!==t.key||l||h(!0),null==(n=e.onKeyDown)||n.call(e,t),t.target===t.currentTarget&&$()&&"Enter"===t.key&&!l&&(t.preventDefault(),null==(o=e.onClick)||o.call(e,t))},S=e=>t=>{var n,o;t.target===t.currentTarget&&h(!1),null==(n=e.onKeyUp)||n.call(e,t),t.target===t.currentTarget&&$()&&" "===t.key&&!t.defaultPrevented&&(null==(o=e.onClick)||o.call(e,t))},U=(0,i.Z)(C,m),V=(0,i.Z)(a,U),[D,A]=u.useState(""),L=e=>{var t;A(null!=(t=null==e?void 0:e.tagName)?t:""),(0,v.Z)(V,e)},_={};return"BUTTON"===D?(_.type=null!=f?f:"button",_.disabled=l):""!==D&&(c||d||(_.role="button"),l&&(_["aria-disabled"]=l)),{getRootProps:t=>{const n=(0,b.Z)(e),r=(0,o.Z)({},n,t),u={onBlur:k(r),onFocus:T(r),onKeyDown:N(r),onKeyUp:S(r),onMouseDown:F(r),onMouseLeave:R(r),onMouseUp:M(r)},i=(0,o.Z)({},r,u);return delete i.onFocusVisible,(0,o.Z)({tabIndex:l?-1:s,type:f,ref:L},_,i)},focusVisible:P,setFocusVisible:x,disabled:l,active:Z}}(e),{getRootProps:s}=a,d=(0,r.Z)(a,m),Z=(0,f._i)();if(null===Z)throw new Error("No TabContext provided");const h=null!=t?t:0,y=Z.value===h,g=Z.selectionFollowsFocus,w={role:"tab","aria-controls":(0,f.uU)(Z,h),id:(0,f.pQ)(Z,h),"aria-selected":y,disabled:d.disabled},C=e=>{g&&!y&&(n&&n(e,h),Z.onSelected(e,h)),c&&c(e)},P=e=>{y||(n&&n(e,h),Z.onSelected(e,h)),l&&l(e)};return(0,o.Z)({getRootProps:e=>{const t=s((0,o.Z)({onClick:P,onFocus:C},e));return(0,o.Z)({},t,w)}},d,{selected:y})},h=n(85893);const y=["action","children","value","className","disabled","onChange","onClick","onFocus","component","components","componentsProps"];var g=u.forwardRef((function(e,t){var n,s;const{action:f,children:p,className:v,disabled:b=!1,component:m,components:g={},componentsProps:w={}}=e,C=(0,r.Z)(e,y),P=u.useRef(),x=(0,i.Z)(P,t),{active:R,focusVisible:k,setFocusVisible:T,selected:E,getRootProps:$}=Z((0,o.Z)({},e,{ref:x}));u.useImperativeHandle(f,(()=>({focusVisible:()=>{T(!0),P.current.focus()}})),[T]);const F=(0,o.Z)({},e,{active:R,focusVisible:k,disabled:b,selected:E}),M=(e=>{const{selected:t,disabled:n}=e,o={root:["root",t&&"selected",n&&"disabled"]};return(0,c.Z)(o,d,{})})(F),N=null!=(n=null!=m?m:g.Root)?n:"button",S=(0,a.Z)(N,(0,o.Z)({},C,w.root),F);return(0,h.jsx)(N,(0,o.Z)({},$(),S,{className:(0,l.Z)(M.root,null==(s=w.root)?void 0:s.className,v),ref:t,children:p}))}))},37934:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(87462),r=n(63366),u=n(67294),l=n(86010),i=n(27192),c=n(5922),a=n(28979);function s(e){return(0,a.Z)("TabsListUnstyled",e)}(0,n(76087).Z)("TabsListUnstyled",["root","horizontal","vertical"]);var d=n(30067),f=n(57094),p=(n(59864),n(12474)),v=n(30437);const b=(e,t)=>e?e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild:null,m=(e,t)=>e?e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild:null,Z=(e,t,n)=>{let o=!1,r=n(e,t);for(;e&&r;){if(r===e.firstChild){if(o)return;o=!0}const t=r.disabled||"true"===r.getAttribute("aria-disabled");if(r.hasAttribute("tabindex")&&!t)return void r.focus();r=n(e,r)}};var h=e=>{const{"aria-label":t,"aria-labelledby":n,children:r,ref:l}=e,i=u.createRef(),c=(0,d.Z)(i,l),a=(0,p._i)();if(null===a)throw new Error("No TabContext provided");const{value:s,orientation:h="horizontal",direction:y="ltr"}=a,g="rtl"===y,w=e=>t=>{var n;(e=>{const t=i.current,n=(0,f.Z)(t).activeElement;if("tab"!==(null==n?void 0:n.getAttribute("role")))return;let o="horizontal"===h?"ArrowLeft":"ArrowUp",r="horizontal"===h?"ArrowRight":"ArrowDown";switch("horizontal"===h&&g&&(o="ArrowRight",r="ArrowLeft"),e.key){case o:e.preventDefault(),Z(t,n,m);break;case r:e.preventDefault(),Z(t,n,b);break;case"Home":e.preventDefault(),Z(t,null,b);break;case"End":e.preventDefault(),Z(t,null,m)}})(t),null==(n=e.onKeyDown)||n.call(e,t)},C=u.useCallback((()=>{const e=new Map;let t=0;return u.Children.map(r,(n=>{if(!u.isValidElement(n))return null;const r=void 0===n.props.value?t:n.props.value;return e.set(r,t),t+=1,u.cloneElement(n,(0,o.Z)({value:r},1===t&&!1===s&&!n.props.tabIndex||s===r?{tabIndex:0}:{tabIndex:-1}))}))}),[r,s]);return{isRtl:g,orientation:h,value:s,processChildren:C,getRootProps:r=>{const u=(0,v.Z)(e),l=(0,o.Z)({},u,r),i={onKeyDown:w(l)},a=(0,o.Z)({},l,i);return(0,o.Z)({"aria-label":t,"aria-labelledby":n,"aria-orientation":"vertical"===h?"vertical":null,role:"tablist",ref:c},a)}}},y=n(85893);const g=["className","children","component","components","componentsProps"];var w=u.forwardRef(((e,t)=>{var n,u;const{className:a,component:d,components:f={},componentsProps:p={}}=e,v=(0,r.Z)(e,g),{isRtl:b,orientation:m,getRootProps:Z,processChildren:w}=h((0,o.Z)({},e,{ref:t})),C=(0,o.Z)({},e,{isRtl:b,orientation:m}),P=(e=>{const{orientation:t}=e,n={root:["root",t]};return(0,i.Z)(n,s,{})})(C),x=null!=(n=null!=d?d:f.Root)?n:"div",R=(0,c.Z)(x,(0,o.Z)({},v,p.root),C),k=w();return(0,y.jsx)(x,(0,o.Z)({},Z(),R,{className:(0,l.Z)(a,null==(u=p.root)?void 0:u.className,P.root),children:k}))}))},12474:function(e,t,n){n.d(t,{_i:function(){return u},uU:function(){return l},pQ:function(){return i}});var o=n(67294);const r=o.createContext(null);function u(){return o.useContext(r)}function l(e,t){const{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-P-${t}`}function i(e,t){const{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-T-${t}`}t.ZP=r},73584:function(e,t,n){n.d(t,{Z:function(){return Z}});var o=n(87462),r=n(63366),u=n(67294),l=n(86010),i=n(5922),c=n(27192),a=n(28979);function s(e){return(0,a.Z)("TabsUnstyled",e)}(0,n(76087).Z)("TabsUnstyled",["root","horizontal","vertical"]);var d=n(8925),f=n(57579);var p=e=>{const{value:t,defaultValue:n,onChange:o,orientation:r,direction:l,selectionFollowsFocus:i}=e,[c,a]=(0,d.Z)({controlled:t,default:n,name:"Tabs",state:"value"}),s=(0,f.Z)(),p=u.useCallback(((e,t)=>{a(t),o&&o(e,t)}),[o,a]);return{getRootProps:()=>({}),tabsContextValue:u.useMemo((()=>({idPrefix:s,value:c,onSelected:p,orientation:r,direction:l,selectionFollowsFocus:i})),[s,c,p,r,l,i])}},v=n(12474),b=n(85893);const m=["children","className","value","defaultValue","orientation","direction","component","components","componentsProps","onChange","selectionFollowsFocus"];var Z=u.forwardRef(((e,t)=>{var n,u;const{children:a,className:d,orientation:f="horizontal",direction:Z="ltr",component:h,components:y={},componentsProps:g={}}=e,w=(0,r.Z)(e,m),{tabsContextValue:C,getRootProps:P}=p(e),x=(0,o.Z)({},e,{orientation:f,direction:Z}),R=(e=>{const{orientation:t}=e,n={root:["root",t]};return(0,c.Z)(n,s,{})})(x),k=null!=(n=null!=h?h:y.Root)?n:"div",T=(0,i.Z)(k,(0,o.Z)({},w,g.root),x);return(0,b.jsx)(k,(0,o.Z)({},P(),T,{ref:t,className:(0,l.Z)(R.root,null==(u=g.root)?void 0:u.className,d),children:(0,b.jsx)(v.ZP.Provider,{value:C,children:a})}))}))},27192:function(e,t,n){function o(e,t,n){const o={};return Object.keys(e).forEach((r=>{o[r]=e[r].reduce(((e,o)=>(o&&(n&&n[o]&&e.push(n[o]),e.push(t(o))),e)),[]).join(" ")})),o}n.d(t,{Z:function(){return o}})},49981:function(e,t){const n=e=>e,o=(()=>{let e=n;return{configure(t){e=t},generate:t=>e(t),reset(){e=n}}})();t.Z=o},28979:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(49981);const r={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function u(e,t){return r[t]||`${o.Z.generate(e)}-${t}`}},76087:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(28979);function r(e,t){const n={};return t.forEach((t=>{n[t]=(0,o.Z)(e,t)})),n}},5922:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(87462);var r=function(e){return"string"==typeof e};function u(e,t={},n){return r(e)?t:(0,o.Z)({},t,{ownerState:(0,o.Z)({},t.ownerState,n)})}},30437:function(e,t,n){function o(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}n.d(t,{Z:function(){return o}})},57094:function(e,t,n){function o(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return o}})},7960:function(e,t,n){function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return o}})},8925:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(67294);function r({controlled:e,default:t,name:n,state:r="value"}){const{current:u}=o.useRef(void 0!==e),[l,i]=o.useState(t);return[u?e:l,o.useCallback((e=>{u||i(e)}),[])]}},30067:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(67294),r=n(7960);function u(e,t){return o.useMemo((()=>null==e&&null==t?null:n=>{(0,r.Z)(e,n),(0,r.Z)(t,n)}),[e,t])}},57579:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(67294);let r=0;function u(e){const[t,n]=o.useState(e),u=e||t;return o.useEffect((()=>{null==t&&(r+=1,n(`mui-${r}`))}),[t]),u}},99962:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(67294);let r,u=!0,l=!1;const i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(u=!0)}function a(){u=!1}function s(){"hidden"===this.visibilityState&&l&&(u=!0)}function d(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return u||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!i[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function f(){const e=o.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",c,!0),t.addEventListener("mousedown",a,!0),t.addEventListener("pointerdown",a,!0),t.addEventListener("touchstart",a,!0),t.addEventListener("visibilitychange",s,!0))}),[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!d(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(l=!0,window.clearTimeout(r),r=window.setTimeout((()=>{l=!1}),100),t.current=!1,!0)},ref:e}}},69921:function(e,t){var n=60103,o=60106,r=60107,u=60108,l=60114,i=60109,c=60110,a=60112,s=60113,d=60120,f=60115,p=60116,v=60121,b=60122,m=60117,Z=60129,h=60131;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;n=y("react.element"),o=y("react.portal"),r=y("react.fragment"),u=y("react.strict_mode"),l=y("react.profiler"),i=y("react.provider"),c=y("react.context"),a=y("react.forward_ref"),s=y("react.suspense"),d=y("react.suspense_list"),f=y("react.memo"),p=y("react.lazy"),v=y("react.block"),b=y("react.server.block"),m=y("react.fundamental"),Z=y("react.debug_trace_mode"),h=y("react.legacy_hidden")}function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case r:case l:case u:case s:case d:return e;default:switch(e=e&&e.$$typeof){case c:case a:case p:case f:case i:return e;default:return t}}case o:return t}}}var w=i,C=n,P=a,x=r,R=p,k=f,T=o,E=l,$=u,F=s;t.ContextConsumer=c,t.ContextProvider=w,t.Element=C,t.ForwardRef=P,t.Fragment=x,t.Lazy=R,t.Memo=k,t.Portal=T,t.Profiler=E,t.StrictMode=$,t.Suspense=F,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return g(e)===c},t.isContextProvider=function(e){return g(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===a},t.isFragment=function(e){return g(e)===r},t.isLazy=function(e){return g(e)===p},t.isMemo=function(e){return g(e)===f},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===l},t.isStrictMode=function(e){return g(e)===u},t.isSuspense=function(e){return g(e)===s},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===l||e===Z||e===u||e===s||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===i||e.$$typeof===c||e.$$typeof===a||e.$$typeof===m||e.$$typeof===v||e[0]===b)},t.typeOf=g},59864:function(e,t,n){e.exports=n(69921)}}]);