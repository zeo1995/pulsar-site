"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3699],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=l,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24660:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(87462),l=r(63366),o=(r(67294),r(3905)),a=["components"],i={id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install",original_id:"helm-install"},u=void 0,s={unversionedId:"helm-install",id:"version-2.9.1/helm-install",title:"Install Apache Pulsar using Helm",description:"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart.",source:"@site/versioned_docs/version-2.9.1/helm-install.md",sourceDirName:".",slug:"/helm-install",permalink:"/docs/helm-install",editUrl:"https://github.com/apache/pulsar-site/edit/master/site2/website-next/versioned_docs/version-2.9.1/helm-install.md",tags:[],version:"2.9.1",frontMatter:{id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install",original_id:"helm-install"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Prepare",permalink:"/docs/helm-prepare"},next:{title:"Deployment",permalink:"/docs/helm-deploy"}},p=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Environment setup",id:"environment-setup",children:[{value:"Tools",id:"tools",children:[],level:3}],level:2},{value:"Cloud cluster preparation",id:"cloud-cluster-preparation",children:[],level:2},{value:"Pulsar deployment",id:"pulsar-deployment",children:[],level:2},{value:"Pulsar upgrade",id:"pulsar-upgrade",children:[],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To deploy Apache Pulsar on Kubernetes, the followings are required."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"kubectl 1.14 or higher, compatible with your cluster (",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")"),(0,o.kt)("li",{parentName:"ul"},"Helm v3 (3.0.2 or higher)"),(0,o.kt)("li",{parentName:"ul"},"A Kubernetes cluster, version 1.14 or higher")),(0,o.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,o.kt)("p",null,"Before deploying Pulsar, you need to prepare your environment."),(0,o.kt)("h3",{id:"tools"},"Tools"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"/docs/helm-tools"},(0,o.kt)("inlineCode",{parentName:"a"},"helm"))," and ",(0,o.kt)("a",{parentName:"p",href:"helm-tools"},(0,o.kt)("inlineCode",{parentName:"a"},"kubectl"))," on your computer."),(0,o.kt)("h2",{id:"cloud-cluster-preparation"},"Cloud cluster preparation"),(0,o.kt)("p",null,"To create and connect to the Kubernetes cluster, follow the instructions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/helm-prepare#google-kubernetes-engine"},"Google Kubernetes Engine"))),(0,o.kt)("h2",{id:"pulsar-deployment"},"Pulsar deployment"),(0,o.kt)("p",null,"Once the environment is set up and configuration is generated, you can now proceed to the ",(0,o.kt)("a",{parentName:"p",href:"helm-deploy"},"deployment of Pulsar"),"."),(0,o.kt)("h2",{id:"pulsar-upgrade"},"Pulsar upgrade"),(0,o.kt)("p",null,"To upgrade an existing Kubernetes installation, follow the ",(0,o.kt)("a",{parentName:"p",href:"helm-upgrade"},"upgrade documentation"),"."))}d.isMDXComponent=!0}}]);