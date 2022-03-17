---
id: pulsar-2.7.1
title: Apache Pulsar 2.7.1 
sidebar_label: Apache Pulsar 2.7.1 
---

## build
Remove gtest file from cpp library #9816  
Remove Spring repo #9280  
remove hbase-server dependency #9278  

## metrics
[docs] Add content for managed cursor ack stats #9801  
[Issue 9535] Add metrics for the cursor ack state #9618  

## topic-policy
Fix topic ownership is not checked #9767  
[Doc] Add doc on how to configure max subscriptions per topic at the topic level  #9748  
[DOCS] - Update the topic-level policies #9530  
[docs]Add topic-level policy config #9108  
Support configure max subscriptions per topic on the topic level policy #8948  
Fix subscription dispatch rate does not work after the topic unload without dispatch rate limit. #8947  

## transaction
[Issue 9725][Transaction] - Fix deleteTransactionMarker memory leak (target branch-2.7) #9752  
[Transaction] Fix transaction log replay not handle right. #8723  

## sql
Duplicate key __pfn_input_topic__ in presto server #9686  
[Branch-2.7] Pulsar sql key-value schema separated model support. #9685  
[Pulsar SQL] Fix OffloadPolicies json serialization error in Pulsar SQL #9300  

## cli
[cli] pulsar-perf uses DefaultCryptoKeyReader for E2E encryption #9668  
[Doc] Update pulsar-client cli doc with newer options. #9524  
Fix setting backlogQuota will always succeed #9382  

## broker
[Compression] Fix ByteBuffer allocate error in the AirliftUtils #9667  
[Broker] Fix race condition in BrokerService topic cache #9565  
[pulsar-broker]Add alerts for expired/expiring soon tokens #9321  
Fix system topic can not auto created #9272  
Handle web application exception to redirect request #9228  
[pulsar-broker] Fix: handle topic loading failure due to broken schema ledger #9212  
Fix issue with topic compaction when compaction ledger is empty #9206  
[feature][pulsar-broker-common]Move additional servlet module to pulsar broker common module #9164  
Fix wrong default value #9149  
fix the closed ledger did not delete after expired #9136  
Issue 9082: Broker expires messages one at a time after topic unload #9083  
add updateRates method for kop to collect publish rate #9049  
Improve error handling when broker doesn't trust client certificates #8998  
Intercept beforeSendMessage calls #8932  
[pulsar-broker] capture stats with precise backlog #8928  
[Issue 8783][pulsar-broker] Execute removing non-persistent subscription of topic from different thread to avoid deadlock when removing inactive subscriptions #8820  
Issue #8533: Change method `getWebServiceUrl` into async #8746  
[Issue #8204][pulsar-broker] Fixes first automatic compaction issue #8209  

## schemaregistry
[Schema] Schema comparison logic change. #9612  
[Pulsar sql] Support keyValue Schema add integration test. #9388  
add properties default value for SchemaInfoBuilder #8952  

## admin
[Admin CLI] Inform user when expire message request is not executed. #9561  
Fix get-message-by-id throwing NPE when message is null #9537  
makes subscription start from MessageId.latest defaultly #9444  
Fix admin-api-brokers list failed #9191  
fix force delete namespace did not delete all topics of the namespace #8806  
Issue 8677: Cannot get lastMessageId for an empty topic due to message retention #8725  

## storage
[Broker] Async read entries with max size bytes #9532  

## tool
[Issue 9496] fix logic in ManagedLedgerWriter when config threadNum >= ledgerNum #9497  

## stats
[go-functions] fix metrics server handler error #9394  
[Stats] Expose offloaded storage size to the topic stats #9335  
Add subscription backlog size info for topicstats. #9302  
[Pulsar Admin] Expose schema ledger in `topic stats-internal` #9284  
remove duplicated broker prometheus metrics type #8995  
consumer support update stats with specified stats #8951  
Monitor if a cursor moves its mark-delete position #8930  
Export Prometheus metric for messageTTL #8871  

## tieredstorage
[tiered-storage] Allow AWS credentials to be refreshed #9387  
Fix fake complete issue in offloading #9306  
[website] Add azure offloader to website #9018  
[Tiered Storage] Offload manager initialization once #8739  
Configurable data source for offloaded messages #8717  

## go
[#9177] add metrics server to go function #9318  
Issue #9123 Go Functions #9124  
Fix single-quotes added to user-conf #8780  

## connector
Fix: don't attempt to clean up packages when Source/Sink is builtin #9289  
[connector]fix debezium-connector error log #9063  
Fix NSQ source META-INF file name and sourceConfigClass #8941  
Pulsar IO: Make Source topic Schema information available to downstream Sinks #8854  

## security
[Authentication]Add authentication metrics #9244  
[Functions-worker] Fix broker and functions-worker authentication compatibility #9190  
Disallow parsing of token with none signature in authenticateToken #9172  
[docs] Update tlsProviderFactoryClass example in bookkeeper.conf #9117  
[Authentication] Support chained authentication with same auth method name #9094  
Add refresh authentication command in broker #9064  
Update maven artifact version #8966  

## test
Fixed race condition in ManagedLedgerTest.testAsyncUpdateProperties() #9152  
[Java shade client] Add encryption integration test #8850  
[C++] Fixed flaky test: AuthPluginTest.testTlsDetectHttpsWithHostNameValidation #8771  
Split pulsar-client-and-admin-shade-test into two parts #8716  

## helm
[docs]add parameter for helm init cluster #9070  

## proxy
Fix Proxy Config bindAddress does not working for servicePort  #9068  
Return correct authz and auth errors from proxy to client #9055  

## storm
[ISSUE] DOCS-8994 fix the links of examples #9062  

## deploy
Fix the metadata setup compatibility issue #8959  
