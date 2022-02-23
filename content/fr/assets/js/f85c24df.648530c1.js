"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8033],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16906:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",sidebar_label:"Aliyun OSS offloader",original_id:"tiered-storage-aliyun"},s=void 0,p={unversionedId:"tiered-storage-aliyun",id:"version-2.9.1/tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the Aliyun Object Storage Service (OSS) offloader and using it with Pulsar.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.9.1/tiered-storage-aliyun.md",sourceDirName:".",slug:"/tiered-storage-aliyun",permalink:"/fr/docs/tiered-storage-aliyun",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/tiered-storage-aliyun.md",tags:[],version:"2.9.1",frontMatter:{id:"tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",sidebar_label:"Aliyun OSS offloader",original_id:"tiered-storage-aliyun"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Azure BlobStore offloader",permalink:"/fr/docs/tiered-storage-azure"},next:{title:"Why transactions?",permalink:"/fr/docs/txn-why"}},d=[{value:"Installation",id:"installation",children:[{value:"Prerequisite",id:"prerequisite",children:[],level:3},{value:"Step",id:"step",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Configure Aliyun OSS offloader driver",id:"configure-aliyun-oss-offloader-driver",children:[{value:"Bucket (required)",id:"bucket-required",children:[{value:"Example",id:"example",children:[],level:5}],level:4},{value:"Endpoint (required)",id:"endpoint-required",children:[{value:"Example",id:"example-1",children:[],level:5}],level:4},{value:"Authentication (required)",id:"authentication-required",children:[],level:4},{value:"Size of block read/write",id:"size-of-block-readwrite",children:[],level:4}],level:3},{value:"Run Aliyun OSS offloader automatically",id:"run-aliyun-oss-offloader-automatically",children:[{value:"Example",id:"example-2",children:[],level:4}],level:3},{value:"Run Aliyun OSS offloader manually",id:"run-aliyun-oss-offloader-manually",children:[{value:"Example",id:"example-3",children:[],level:4}],level:3}],level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This chapter guides you through every step of installing and configuring the Aliyun Object Storage Service (OSS) offloader and using it with Pulsar."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Follow the steps below to install the Aliyun OSS offloader."),(0,l.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pulsar: 2.8.0 or later versions")),(0,l.kt)("h3",{id:"step"},"Step"),(0,l.kt)("p",null,"This example uses Pulsar 2.8.0."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the Pulsar tarball, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/standalone/#install-pulsar-using-binary-release"},"here"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package, then copy the Pulsar offloaders as ",(0,l.kt)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/standalone/#install-tiered-storage-offloaders-optional"},"here"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("p",{parentName:"li"},"As shown from the output, Pulsar uses ",(0,l.kt)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3"),", ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"GCS"),", ",(0,l.kt)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Azure"),", and ",(0,l.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/oss"},"Aliyun OSS")," for long-term storage."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.8.0.nar\ntiered-storage-jcloud-2.8.0.nar\n\n")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare-metal cluster, make sure that ",(0,l.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,l.kt)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image. The ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders.")))))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Before offloading data from BookKeeper to Aliyun OSS, you need to configure some properties of the Aliyun OSS offload driver."))),(0,l.kt)("p",null,"Besides, you can also configure the Aliyun OSS offloader to run it automatically or trigger it manually."),(0,l.kt)("h3",{id:"configure-aliyun-oss-offloader-driver"},"Configure Aliyun OSS offloader driver"),(0,l.kt)("p",null,"You can configure the Aliyun OSS offloader driver in the configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Required configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,l.kt)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive."),(0,l.kt)("td",{parentName:"tr",align:null},"aliyun-oss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"Offloader directory"),(0,l.kt)("td",{parentName:"tr",align:null},"offloaders")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadBucket")),(0,l.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-topic-offload")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadServiceEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://oss-cn-hongkong.aliyuncs.com"},"http://oss-cn-hongkong.aliyuncs.com")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,l.kt)("td",{parentName:"tr",align:null},"Size of block read"),(0,l.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,l.kt)("td",{parentName:"tr",align:null},"Size of block write"),(0,l.kt)("td",{parentName:"tr",align:null},"64 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,l.kt)("td",{parentName:"tr",align:null},"5000")))))),(0,l.kt)("h4",{id:"bucket-required"},"Bucket (required)"),(0,l.kt)("p",null,"A bucket is a basic container that holds your data. Everything you store in Aliyun OSS must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you cannot nest a bucket."),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)("p",null,"This example names the bucket as ",(0,l.kt)("em",{parentName:"p"},"pulsar-topic-offload"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,l.kt)("h4",{id:"endpoint-required"},"Endpoint (required)"),(0,l.kt)("p",null,"The endpoint is the region where a bucket is located."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For more information about Aliyun OSS regions and endpoints,  see ",(0,l.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/31837.htm"},"International website")," or ",(0,l.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/31837.html"},"Chinese website"),"."))),(0,l.kt)("h5",{id:"example-1"},"Example"),(0,l.kt)("p",null,"This example sets the endpoint as ",(0,l.kt)("em",{parentName:"p"},"oss-us-west-1-internal"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nmanagedLedgerOffloadServiceEndpoint=http://oss-us-west-1-internal.aliyuncs.com\n\n")),(0,l.kt)("h4",{id:"authentication-required"},"Authentication (required)"),(0,l.kt)("p",null,"To be able to access Aliyun OSS, you need to authenticate with Aliyun OSS."),(0,l.kt)("p",null,"Set the environment variables ",(0,l.kt)("inlineCode",{parentName:"p"},"ALIYUN_OSS_ACCESS_KEY_ID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ALIYUN_OSS_ACCESS_KEY_SECRET")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh"),"."),(0,l.kt)("p",null,'"export" is important so that the variables are made available in the environment of spawned processes.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nexport ALIYUN_OSS_ACCESS_KEY_ID=ABC123456789\nexport ALIYUN_OSS_ACCESS_KEY_SECRET=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n")),(0,l.kt)("h4",{id:"size-of-block-readwrite"},"Size of block read/write"),(0,l.kt)("p",null,"You can configure the size of a request sent to or read from Aliyun OSS in the configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,l.kt)("td",{parentName:"tr",align:null},"Block size for each individual read when reading back data from Aliyun OSS."),(0,l.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,l.kt)("td",{parentName:"tr",align:null},'Maximum size of a "part" sent during a multipart upload to Aliyun OSS. It ',(0,l.kt)("strong",{parentName:"td"},"cannot")," be smaller than 5 MB."),(0,l.kt)("td",{parentName:"tr",align:null},"64 MB")))),(0,l.kt)("h3",{id:"run-aliyun-oss-offloader-automatically"},"Run Aliyun OSS offloader automatically"),(0,l.kt)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Threshold value"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"> 0"),(0,l.kt)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"= 0"),(0,l.kt)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"< 0"),(0,l.kt)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,l.kt)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, the offloader does not work until the current segment is full."),(0,l.kt)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,l.kt)("p",null,"The offload configurations in ",(0,l.kt)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.6.0-SNAPSHOT/#-em-set-offload-policies-em-"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-offload-policies options"))," command."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("p",null,"This example sets the Aliyun OSS offloader threshold size to 10 MB using pulsar-admin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, and default values, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.6.0-SNAPSHOT/#-em-set-offload-threshold-em-"},"here"),"."))),(0,l.kt)("h3",{id:"run-aliyun-oss-offloader-manually"},"Run Aliyun OSS offloader manually"),(0,l.kt)("p",null,"For individual topics, you can trigger the Aliyun OSS offloader manually using one of the following methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use REST endpoint.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin)."),(0,l.kt)("p",{parentName:"li"},"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to Aliyun OSS until the threshold is no longer exceeded. Older segments are moved first."))),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This example triggers the Aliyun OSS offloader to run manually using pulsar-admin."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, and default values, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.6.0-SNAPSHOT/#-em-offload-em-"},"here"),".")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This example checks the Aliyun OSS offloader status using pulsar-admin."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,l.kt)("p",{parentName:"li"},"To wait for the Aliyun OSS offloader to complete the job, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"-w")," flag."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,l.kt)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")))),(0,l.kt)("p",null,"`"),(0,l.kt)("p",null,"  :::tip"),(0,l.kt)("p",null,"  For more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, and default values, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.6.0-SNAPSHOT/#-em-offload-status-em-"},"here"),"."),(0,l.kt)("p",null,"  :::"))}m.isMDXComponent=!0}}]);