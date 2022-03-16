"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21365],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67882:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(87462),l=r(63366),a=(r(67294),r(3905)),o=["components"],u={id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install"},i=void 0,s={unversionedId:"helm-install",id:"helm-install",title:"Install Apache Pulsar using Helm",description:"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/helm-install.md",sourceDirName:".",slug:"/helm-install",permalink:"/fr/docs/next/helm-install",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/helm-install.md",tags:[],version:"current",frontMatter:{id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install"},sidebar:"docsSidebar",previous:{title:"Prepare",permalink:"/fr/docs/next/helm-prepare"},next:{title:"Deployment",permalink:"/fr/docs/next/helm-deploy"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Environment setup",id:"environment-setup",level:2},{value:"Tools",id:"tools",level:3},{value:"Cloud cluster preparation",id:"cloud-cluster-preparation",level:2},{value:"Pulsar deployment",id:"pulsar-deployment",level:2},{value:"Pulsar upgrade",id:"pulsar-upgrade",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To deploy Apache Pulsar on Kubernetes, the followings are required."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubectl 1.14 or higher, compatible with your cluster (",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")"),(0,a.kt)("li",{parentName:"ul"},"Helm v3 (3.0.2 or higher)"),(0,a.kt)("li",{parentName:"ul"},"A Kubernetes cluster, version 1.14 or higher")),(0,a.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,a.kt)("p",null,"Before deploying Pulsar, you need to prepare your environment."),(0,a.kt)("h3",{id:"tools"},"Tools"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/next/helm-tools"},(0,a.kt)("inlineCode",{parentName:"a"},"helm"))," and ",(0,a.kt)("a",{parentName:"p",href:"helm-tools"},(0,a.kt)("inlineCode",{parentName:"a"},"kubectl"))," on your computer."),(0,a.kt)("h2",{id:"cloud-cluster-preparation"},"Cloud cluster preparation"),(0,a.kt)("p",null,"To create and connect to the Kubernetes cluster, follow the instructions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/docs/next/helm-prepare#google-kubernetes-engine"},"Google Kubernetes Engine"))),(0,a.kt)("h2",{id:"pulsar-deployment"},"Pulsar deployment"),(0,a.kt)("p",null,"Once the environment is set up and configuration is generated, you can now proceed to the ",(0,a.kt)("a",{parentName:"p",href:"helm-deploy"},"deployment of Pulsar"),"."),(0,a.kt)("h2",{id:"pulsar-upgrade"},"Pulsar upgrade"),(0,a.kt)("p",null,"To upgrade an existing Kubernetes installation, follow the ",(0,a.kt)("a",{parentName:"p",href:"helm-upgrade"},"upgrade documentation"),"."))}d.isMDXComponent=!0}}]);