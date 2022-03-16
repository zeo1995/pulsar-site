"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85205],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28233:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"pulsar-2.6.3",title:"Apache Pulsar 2.6.3",sidebar_label:"Apache Pulsar 2.6.3"},l=void 0,c={unversionedId:"docs/pulsar-2.6.3",id:"docs/pulsar-2.6.3",title:"Apache Pulsar 2.6.3",description:"security",source:"@site/release-notes/docs/pulsar-2.6.3.md",sourceDirName:"docs",slug:"/docs/pulsar-2.6.3",permalink:"/zh-CN/release-notes/docs/pulsar-2.6.3",tags:[],version:"current",frontMatter:{id:"pulsar-2.6.3",title:"Apache Pulsar 2.6.3",sidebar_label:"Apache Pulsar 2.6.3"}},u={},p=[{value:"security",id:"security",level:2},{value:"proxy",id:"proxy",level:2},{value:"connector",id:"connector",level:2},{value:"storm",id:"storm",level:2},{value:"build",id:"build",level:2},{value:"broker",id:"broker",level:2},{value:"stats",id:"stats",level:2},{value:"go",id:"go",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"admin",id:"admin",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"security"},"security"),(0,a.kt)("p",null,"[Authentication]"," Support chained authentication with same auth method name #9094",(0,a.kt)("br",{parentName:"p"}),"\n","[docs]"," Add config info in security jwt #8482  "),(0,a.kt)("h2",{id:"proxy"},"proxy"),(0,a.kt)("p",null,"Fix Proxy Config bindAddress does not working for servicePort  #9068",(0,a.kt)("br",{parentName:"p"}),"\n","Support enable WebSocket on Pulsar Proxy. #8613",(0,a.kt)("br",{parentName:"p"}),"\n","[Pulsar Proxy]"," Add error log for pulsar proxy starter #8451",(0,a.kt)("br",{parentName:"p"}),"\n","[Pulsar-Proxy]"," Fix request.getContentLength() to return 0 if it is less than 0 #8448  "),(0,a.kt)("h2",{id:"connector"},"connector"),(0,a.kt)("p",null,"[connector]","fix debezium-connector error log #9063",(0,a.kt)("br",{parentName:"p"}),"\n","Pulsar IO: Make Source topic Schema information available to downstream Sinks #8854  "),(0,a.kt)("h2",{id:"storm"},"storm"),(0,a.kt)("p",null,"[ISSUE]"," DOCS-8994 fix the links of examples #9062  "),(0,a.kt)("h2",{id:"build"},"build"),(0,a.kt)("p",null,"[docs]"," Generate the whole doc set for 2.6.3 release #9027  "),(0,a.kt)("h2",{id:"broker"},"broker"),(0,a.kt)("p",null,"Improve error handling when broker doesn't trust client certificates #8998",(0,a.kt)("br",{parentName:"p"}),"\n","Intercept beforeSendMessage calls #8932",(0,a.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," capture stats with precise backlog #8928",(0,a.kt)("br",{parentName:"p"}),"\n","[Issue 8783][pulsar-broker]"," Execute removing non-persistent subscription of topic from different thread to avoid deadlock when removing inactive subscriptions #8820",(0,a.kt)("br",{parentName:"p"}),"\n","[broker]"," Close topics that remain fenced forcefully #8561",(0,a.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Refresh ZooKeeper-data cache in background to avoid d\u2026 #8304",(0,a.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," fix: use correct configuration for zk-cache expire time #8302  "),(0,a.kt)("h2",{id:"stats"},"stats"),(0,a.kt)("p",null,"remove duplicated broker prometheus metrics type #8995",(0,a.kt)("br",{parentName:"p"}),"\n","Monitor if a cursor moves its mark-delete position #8930",(0,a.kt)("br",{parentName:"p"}),"\n","Export Prometheus metric for messageTTL #8871  "),(0,a.kt)("h2",{id:"go"},"go"),(0,a.kt)("p",null,"Fix single-quotes added to user-conf #8780",(0,a.kt)("br",{parentName:"p"}),"\n","[Issue #8268][Pulsar Function]"," k8s runtime with go functions support #8352",(0,a.kt)("br",{parentName:"p"}),"\n","[component/functions|component/go]"," Propagate user-config parameter into instances of Golang pulsar functions #8132  "),(0,a.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,a.kt)("p",null,"[Tiered Storage]"," Offload manager initialization once #8739  "),(0,a.kt)("h2",{id:"admin"},"admin"),(0,a.kt)("p",null,"Issue 8677: Cannot get lastMessageId for an empty topic due to message retention #8725"))}f.isMDXComponent=!0}}]);