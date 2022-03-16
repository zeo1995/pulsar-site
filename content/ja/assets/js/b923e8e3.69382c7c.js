"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5380],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,d=h["".concat(u,".").concat(m)]||h[m]||s[m]||r;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],c={id:"security-extending",title:"Extending Authentication and Authorization in Pulsar",sidebar_label:"Extending"},u=void 0,l={unversionedId:"security-extending",id:"security-extending",title:"Extending Authentication and Authorization in Pulsar",description:"Pulsar provides a way to use custom authentication and authorization mechanisms.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/security-extending.md",sourceDirName:".",slug:"/security-extending",permalink:"/ja/docs/next/security-extending",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/security-extending.md",tags:[],version:"current",frontMatter:{id:"security-extending",title:"Extending Authentication and Authorization in Pulsar",sidebar_label:"Extending"},sidebar:"docsSidebar",previous:{title:"End-to-End Encryption",permalink:"/ja/docs/next/security-encryption"},next:{title:"Bouncy Castle Providers",permalink:"/ja/docs/next/security-bouncy-castle"}},p={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Client authentication plugin",id:"client-authentication-plugin",level:3},{value:"Proxy/Broker authentication plugin",id:"proxybroker-authentication-plugin",level:3},{value:"Authorization",id:"authorization",level:2}],h={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar provides a way to use custom authentication and authorization mechanisms."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Pulsar supports mutual TLS and Athenz authentication plugins. For how to use these authentication plugins, you can refer to the description in ",(0,r.kt)("a",{parentName:"p",href:"security-overview"},"Security"),"."),(0,r.kt)("p",null,"You can use a custom authentication mechanism by providing the implementation in the form of two plugins. One plugin is for the Client library and the other plugin is for the Pulsar Proxy and/or Pulsar Broker to validate the credentials."),(0,r.kt)("h3",{id:"client-authentication-plugin"},"Client authentication plugin"),(0,r.kt)("p",null,"For the client library, you need to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.Authentication"),". By entering the command below you can pass this class when you create a Pulsar client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .authentication(new MyAuthentication())\n    .build();\n\n')),(0,r.kt)("p",null,"You can use 2 interfaces to implement on the client side:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Authentication")," -> ",(0,r.kt)("a",{parentName:"li",href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Authentication.html"},"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Authentication.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthenticationDataProvider")," -> ",(0,r.kt)("a",{parentName:"li",href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/AuthenticationDataProvider.html"},"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/AuthenticationDataProvider.html"))),(0,r.kt)("p",null,"This in turn needs to provide the client credentials in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.AuthenticationDataProvider"),". This leaves the chance to return different kinds of authentication token for different types of connection or by passing a certificate chain to use for TLS."),(0,r.kt)("p",null,"You can find examples for client authentication providers at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mutual TLS Auth -- ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/tree/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth"},"https://github.com/apache/pulsar/tree/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth")),(0,r.kt)("li",{parentName:"ul"},"Athenz -- ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth"},"https://github.com/apache/pulsar/tree/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth"))),(0,r.kt)("h3",{id:"proxybroker-authentication-plugin"},"Proxy/Broker authentication plugin"),(0,r.kt)("p",null,"On the proxy/broker side, you need to configure the corresponding plugin to validate the credentials that the client sends. The Proxy and Broker can support multiple authentication providers at the same time."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," you can choose to specify a list of valid providers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Authentication provider name list, which is comma separated list of class names\nauthenticationProviders=\n\n")),(0,r.kt)("p",null,"To implement ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authentication.AuthenticationProvider")," on one single interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n/**\n * Provider of authentication mechanism\n */\npublic interface AuthenticationProvider extends Closeable {\n\n    /**\n     * Perform initialization for the authentication provider\n     *\n     * @param config\n     *            broker config object\n     * @throws IOException\n     *             if the initialization fails\n     */\n    void initialize(ServiceConfiguration config) throws IOException;\n\n    /**\n     * @return the authentication method name supported by this provider\n     */\n    String getAuthMethodName();\n\n    /**\n     * Validate the authentication for the given credentials with the specified authentication data\n     *\n     * @param authData\n     *            provider specific authentication data\n     * @return the "role" string for the authenticated connection, if the authentication was successful\n     * @throws AuthenticationException\n     *             if the credentials are not valid\n     */\n    String authenticate(AuthenticationDataSource authData) throws AuthenticationException;\n\n}\n\n')),(0,r.kt)("p",null,"The following is the example for Broker authentication plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mutual TLS -- ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java"},"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java")),(0,r.kt)("li",{parentName:"ul"},"Athenz -- ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java"},"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java"))),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,'Authorization is the operation that checks whether a particular "role" or "principal" has permission to perform a certain operation.'),(0,r.kt)("p",null,"By default, you can use the embedded authorization provider provided by Pulsar. You can also configure a different authorization provider through a plugin. Note that although the Authentication plugin is designed for use in both the Proxy and Broker, the Authorization plugin is designed only for use on the Broker however the Proxy does perform some simple Authorization checks of Roles if authorization is enabled."),(0,r.kt)("p",null,"To provide a custom provider, you need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authorization.AuthorizationProvider")," interface, put this class in the Pulsar broker classpath and configure the class in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Authorization provider fully qualified class-name\nauthorizationProvider=org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Provider of authorization mechanism\n */\npublic interface AuthorizationProvider extends Closeable {\n\n    /**\n     * Perform initialization for the authorization provider\n     *\n     * @param conf\n     *            broker config object\n     * @param configCache\n     *            pulsar zk configuration cache service\n     * @throws IOException\n     *             if the initialization fails\n     */\n    void initialize(ServiceConfiguration conf, ConfigurationCacheService configCache) throws IOException;\n\n    /**\n     * Check if the specified role has permission to send messages to the specified fully qualified topic name.\n     *\n     * @param topicName\n     *            the fully qualified topic name associated with the topic.\n     * @param role\n     *            the app id used to send messages to the topic.\n     */\n    CompletableFuture<Boolean> canProduceAsync(TopicName topicName, String role,\n            AuthenticationDataSource authenticationData);\n\n    /**\n     * Check if the specified role has permission to receive messages from the specified fully qualified topic name.\n     *\n     * @param topicName\n     *            the fully qualified topic name associated with the topic.\n     * @param role\n     *            the app id used to receive messages from the topic.\n     * @param subscription\n     *            the subscription name defined by the client\n     */\n    CompletableFuture<Boolean> canConsumeAsync(TopicName topicName, String role,\n            AuthenticationDataSource authenticationData, String subscription);\n\n    /**\n     * Check whether the specified role can perform a lookup for the specified topic.\n     *\n     * For that the caller needs to have producer or consumer permission.\n     *\n     * @param topicName\n     * @param role\n     * @return\n     * @throws Exception\n     */\n    CompletableFuture<Boolean> canLookupAsync(TopicName topicName, String role,\n            AuthenticationDataSource authenticationData);\n\n    /**\n     *\n     * Grant authorization-action permission on a namespace to the given client\n     *\n     * @param namespace\n     * @param actions\n     * @param role\n     * @param authDataJson\n     *            additional authdata in json format\n     * @return CompletableFuture\n     * @completesWith <br />\n     *                IllegalArgumentException when namespace not found<br />\n     *                IllegalStateException when failed to grant permission\n     */\n    CompletableFuture<Void> grantPermissionAsync(NamespaceName namespace, Set<AuthAction> actions, String role,\n            String authDataJson);\n\n    /**\n     * Grant authorization-action permission on a topic to the given client\n     *\n     * @param topicName\n     * @param role\n     * @param authDataJson\n     *            additional authdata in json format\n     * @return CompletableFuture\n     * @completesWith <br />\n     *                IllegalArgumentException when namespace not found<br />\n     *                IllegalStateException when failed to grant permission\n     */\n    CompletableFuture<Void> grantPermissionAsync(TopicName topicName, Set<AuthAction> actions, String role,\n            String authDataJson);\n\n}\n\n")))}m.isMDXComponent=!0}}]);