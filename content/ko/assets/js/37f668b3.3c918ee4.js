"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[49401],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17755:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"pulsar-2.5.2",title:"Apache Pulsar 2.5.2",sidebar_label:"Apache Pulsar 2.5.2"},s=void 0,c={unversionedId:"docs/pulsar-2.5.2",id:"docs/pulsar-2.5.2",title:"Apache Pulsar 2.5.2",description:"admin",source:"@site/release-notes/docs/pulsar-2.5.2.md",sourceDirName:"docs",slug:"/docs/pulsar-2.5.2",permalink:"/ko/release-notes/docs/pulsar-2.5.2",tags:[],version:"current",frontMatter:{id:"pulsar-2.5.2",title:"Apache Pulsar 2.5.2",sidebar_label:"Apache Pulsar 2.5.2"}},p={},u=[{value:"admin",id:"admin",level:2},{value:"sql",id:"sql",level:2},{value:"security",id:"security",level:2},{value:"metrics",id:"metrics",level:2},{value:"broker",id:"broker",level:2},{value:"build",id:"build",level:2},{value:"connect",id:"connect",level:2},{value:"schemaregistry",id:"schemaregistry",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"test",id:"test",level:2},{value:"storage",id:"storage",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"admin"},"admin"),(0,o.kt)("p",null,"Fix pulsar admin thread number explode bug #6940",(0,o.kt)("br",{parentName:"p"}),"\n","[Issue 6887][pulsar-broker]"," ttlDurationDefaultInSeconds not applying #6920",(0,o.kt)("br",{parentName:"p"}),"\n","[function]"," Function endpoint admin/v3/functions/{tenant}/{namespace} always returns 404 #6767",(0,o.kt)("br",{parentName:"p"}),"\n","fix_admin_getIndividualMsgsFromBatch_bug #6715",(0,o.kt)("br",{parentName:"p"}),"\n","Retention policy should be respected when there is no traffic #6676  "),(0,o.kt)("h2",{id:"sql"},"sql"),(0,o.kt)("p",null,"Pulsar SQL Support Avro Schema ",(0,o.kt)("inlineCode",{parentName:"p"},"ByteBuffer")," Type #6925",(0,o.kt)("br",{parentName:"p"}),"\n","Add a note for bookkeeper explicit LAC #6908  "),(0,o.kt)("h2",{id:"security"},"security"),(0,o.kt)("p",null,"add keystore tls config doc #6922",(0,o.kt)("br",{parentName:"p"}),"\n","use originalAuthMethod on originalAuthChecker #6870",(0,o.kt)("br",{parentName:"p"}),"\n","Add Tls with keystore type config support #6853  "),(0,o.kt)("h2",{id:"metrics"},"metrics"),(0,o.kt)("p",null,"Expose pulsar_out_bytes_total and pulsar_out_messages_total for namespace/subscription/consumer. #6918  "),(0,o.kt)("h2",{id:"broker"},"broker"),(0,o.kt)("p",null,"[Broker]"," Handle all exceptions from ",(0,o.kt)("inlineCode",{parentName:"p"},"topic.addProducer")," #6881",(0,o.kt)("br",{parentName:"p"}),"\n","[broker]"," register loadbalance znode should attempt to wait until session expired #6788",(0,o.kt)("br",{parentName:"p"}),"\n","change nondurable cursor to active #6769",(0,o.kt)("br",{parentName:"p"}),"\n","Fix check backlogged cursors without consumer #6766",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," avoid backpressure by skipping dispatching if consumer channel is not writable #6740",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Fix Deadlock by Consumer and Reader #6728",(0,o.kt)("br",{parentName:"p"}),"\n","[ISSUE 6563][Broker]"," Invalidate managed ledgers zookeeper cache instead of reloading on watcher triggered #6659",(0,o.kt)("br",{parentName:"p"}),"\n","[Issue #5395][broker]"," Implement AutoTopicCreation by namespace override #6471  "),(0,o.kt)("h2",{id:"build"},"build"),(0,o.kt)("p",null,"[Dashboard]","Fixed dashboard start failed #6857",(0,o.kt)("br",{parentName:"p"}),"\n","[build]"," Bump netty version to 4.1.48.Final #6746  "),(0,o.kt)("h2",{id:"connect"},"connect"),(0,o.kt)("p",null,"[JDBC Sink]"," JDBC sink does not handle null in schema #6848  "),(0,o.kt)("h2",{id:"schemaregistry"},"schemaregistry"),(0,o.kt)("p",null,"fix Get schema by version can get the deleted schema info #6754 #6764",(0,o.kt)("br",{parentName:"p"}),"\n","[issue 6694][AVRO ENCODE]"," Reset cursor if message encode fails. #6695",(0,o.kt)("br",{parentName:"p"}),"\n","ISSUE-6612 FIX: parse long field in GenricJsonRecord (#6612) #6622",(0,o.kt)("br",{parentName:"p"}),"\n","Make SchemaStorage accessible in Offloader #6567  "),(0,o.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,o.kt)("p",null,"Avoid prefetch too much data when offloading data to HDFS #6717",(0,o.kt)("br",{parentName:"p"}),"\n","[Issue 6283][tiered-storage]"," Offload policies per namespace #6422  "),(0,o.kt)("h2",{id:"test"},"test"),(0,o.kt)("p",null,"[hotfix]","Python function protobuf missing field and broker test failed #6641  "),(0,o.kt)("h2",{id:"storage"},"storage"),(0,o.kt)("p",null,"[2nd Storage]","Extract common method in tiered storage to managed-ledger module #6533"))}m.isMDXComponent=!0}}]);