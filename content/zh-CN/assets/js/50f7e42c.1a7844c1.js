"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3563],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=a,f=h["".concat(u,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9840:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={author:"Enrico Olivelli",authorURL:"https://twitter.com/eolivelli",title:"Apache Pulsar 2.7.2"},u=void 0,s={permalink:"/zh-CN/blog/2021/05/13/Apache-Pulsar-2-7-2",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2021-05-13-Apache-Pulsar-2-7-2.md",source:"@site/blog/2021-05-13-Apache-Pulsar-2-7-2.md",title:"Apache Pulsar 2.7.2",description:"We are very glad to see the Apache Pulsar community has successfully released the 2.7.2 version.",date:"2021-05-13T00:00:00.000Z",formattedDate:"2021\u5e745\u670813\u65e5",tags:[],readingTime:1.305,truncated:!0,authors:[{name:"Enrico Olivelli",url:"https://twitter.com/eolivelli"}],prevItem:{title:"Apache Pulsar 2.8.0",permalink:"/zh-CN/blog/2021/06/12/Apache-Pulsar-2-8-0"},nextItem:{title:"Apache Pulsar 2.7.0",permalink:"/zh-CN/blog/2020/12/24/Apache-Pulsar-2-7-0"}},c={authorsImageUrls:[void 0]},p=[{value:"News and noteworthy",id:"news-and-noteworthy",children:[],level:3},{value:"Contributors for 2.7.2 release",id:"contributors-for-272-release",children:[],level:3}],h={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are very glad to see the Apache Pulsar community has successfully released the 2.7.2 version.\nThis is a minor release that introduces stability fixes and a few new features without breaking changes."),(0,o.kt)("h3",{id:"news-and-noteworthy"},"News and noteworthy"),(0,o.kt)("p",null,"Here is a selection of the most awesome and major enhancements added to Pulsar 2.7.2."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improvement in stability in the Kinesis connector ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10420"},"#10420"),"."),(0,o.kt)("li",{parentName:"ul"},"Improvement in passing ENV variables to the bookie (PULSAR_EXTRA_OPTS) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10397"},"#10397"),"."),(0,o.kt)("li",{parentName:"ul"},"Allow the C++ client to be built in Windows and add CI for verification ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10387"},"#10387"),"."),(0,o.kt)("li",{parentName:"ul"},"Allow activating every BookKeeper client features in the broker ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9232"},"#9232"),"."),(0,o.kt)("li",{parentName:"ul"},"Improvement in Pulsar proxy."),(0,o.kt)("li",{parentName:"ul"},"Upgrade core networking libraries: Jetty and Netty.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pulls?page=1&q=is%3Apr+label%3Arelease%2F2.7.2%5D"},"Here")," you can find the list of all the improvements and bug fixes."),(0,o.kt)("h3",{id:"contributors-for-272-release"},"Contributors for 2.7.2 release"),(0,o.kt)("p",null,"We would like to thank all the contributors for this release.\nSame to other sustainable open source projects, Apache Pulsar is great because it is supported by a vibrant community."),(0,o.kt)("p",null,"Code contributors (names taken from GitHub API):\nAli Ahmed, Andrey Yegorov, Binbin Guo, David Kjerrumgaard, Deon van der Vyver, Devin Bost, Enrico Olivelli, Guangning E, Kevin Wilson,\nLari Hotari, Marvin Cai, Masahiro Sakamoto, Matteo Merli, Michael Marshall, Rajan Dhabalia, Shen Liu, Ting Yuan, Vincent Royer,\nYong Zhang, Yunze Xu, Zhanpeng Wu, Zike Yang, baomingyu, CongBo, dockerzhang, feynmanlin, hangc0276, li jinquan, limingnihao,\nlinlinnn, mlyahmed, PengHui Li, Ran."),(0,o.kt)("p",null,"Documentation contributors:\nAnonymitaet (Yu Liu), Jennifer Huang"),(0,o.kt)("p",null,"Also, we want to thank everyone who spent his time reporting issues and sharing the story about using Pulsar."),(0,o.kt)("p",null,"Looking forward to your contributions to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Apache Pulsar"),"."))}m.isMDXComponent=!0}}]);