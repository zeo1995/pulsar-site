---
id: client-java-2.8.0
title: Client Java 2.8.0 
sidebar_label: Client Java 2.8.0 
---

- Fix warn log on the producer side when duplicated messages have been dropped [#8729](https://github.com/apache/pulsar/pull/8729)
- Allow setting subscription name for Reader [#8801](https://github.com/apache/pulsar/pull/8801)
- Fix authParams showing in log with secret string(*****) [#8910](https://github.com/apache/pulsar/pull/8910)
- Avoid enabling DLQ on Key_Shared subscription [#9163](https://github.com/apache/pulsar/pull/9163)
- Add support for the JSON format token [#9313](https://github.com/apache/pulsar/pull/9313)
- Expose reached end of topic API for Reader/Consumer [#9381](https://github.com/apache/pulsar/pull/9381)
- Fix returned a completed future when acknowledging a batch message before complete the individual acknowledgments [#9383](https://github.com/apache/pulsar/pull/9383)
- Fix NPE when strip checksum for the producer [#9400](https://github.com/apache/pulsar/pull/9400)
- Fix inconsistent equals and hashCode for MessageIds [#9440](https://github.com/apache/pulsar/pull/9440)
- Allow disabling producer max queue size [#9650](https://github.com/apache/pulsar/pull/9650)
- Include pulsar-client-admin-api in the shaded version of pulsar-client-admin [#9689](https://github.com/apache/pulsar/pull/9689)
- Fix NPE in the ClientCnx [#9761](https://github.com/apache/pulsar/pull/9761)
- Fix DLQ can't work with AUTO_CONSUME schema [#9935](https://github.com/apache/pulsar/issues/9935)
- Fix NPE caused by null value of SchemaInfo's properties [#9985](https://github.com/apache/pulsar/pull/9985)
- Support multi-topic reader [#9995](https://github.com/apache/pulsar/pull/9995)
- Process messages from different partitions on different listener threads [#10017](https://github.com/apache/pulsar/pull/10017)
- Ensure close resource to avoid memory leak [#10028](https://github.com/apache/pulsar/pull/10028)
- Support set start message ID for each topic/partition on Reader [#10033](https://github.com/apache/pulsar/pull/10033)
- Add a JSON RecordBuilder to the GenericJsonSchema [#10052](https://github.com/apache/pulsar/pull/10052)
- Allow GenericRecord to wrap any Java Object [#10057](https://github.com/apache/pulsar/pull/10057)
- Fix NPE while configuring consumer builder [#10063](https://github.com/apache/pulsar/pull/10063)
- Support get native schema [#10076](https://github.com/apache/pulsar/pull/10076)
- Support KeyValue on Message.getValue() when using AutoConsumeSchema [#10107](https://github.com/apache/pulsar/pull/10107)
- Change the default retry topic name and dead letter topic name [#10129](https://github.com/apache/pulsar/pull/10129)
- Fix KeyValue with SEPARATED encoding for the GenericObject [#10186](https://github.com/apache/pulsar/pull/10186)
- Ensure download schema before decoding the payload for the AUTO_CONSUME schema [#10248](https://github.com/apache/pulsar/pull/10248)
- Fix typo of the maxPendingChunkedMessage method [#10223](https://github.com/apache/pulsar/pull/10223)
- Trait NONE schema as BYTE schema for AUTO_CONSUME schema [#10277](https://github.com/apache/pulsar/pull/10277)
- Fix pause consume issue with MultiTopicsConsumerImpl [#10305](https://github.com/apache/pulsar/pull/10305)
- Make message consumption thread safe and lock-free [#10352](https://github.com/apache/pulsar/pull/10352)
- Reset state before recycling OpSendMsg instance [#10405](https://github.com/apache/pulsar/pull/10405)
- Fix hasMessageAvailable return true but can't read message [#10414](https://github.com/apache/pulsar/pull/10414)
- Fix NPE in GenericJsonRecord [#10482](https://github.com/apache/pulsar/pull/10482)
- Fix behaviour of Schema.AUTO_CONSUME() with KeyValueSchema and multi versions [#10492](https://github.com/apache/pulsar/pull/10492)
- Avoid sending flow requests with zero permits [#10507](https://github.com/apache/pulsar/pull/10507)
- Make failPendingMessages called from within the ProducerImpl object mutex [#10528](https://github.com/apache/pulsar/pull/10528)
- Add schemaType field in SchemaHash [#10573](https://github.com/apache/pulsar/pull/10573)
- Fix NPE when ACK grouping tracker checks duplicated message id [#10586](https://github.com/apache/pulsar/pull/10586)
- Support consume multiple schema types messages by AutoConsumeSchema [#10604](https://github.com/apache/pulsar/pull/10604)
- Fixed issues in pulsar-client shading configuration [#10614](https://github.com/apache/pulsar/pull/10614)
- MessageCrypto interface should not expose Netty ByteBuf class in the API [#10616](https://github.com/apache/pulsar/pull/10616)
- Added org.apache.bookkeeper:cpu-affinity to shaded profile [#10681](https://github.com/apache/pulsar/pull/10681)
- Skip the periodic re-check of the partitions count on non-partitioned topic [#10708](https://github.com/apache/pulsar/pull/10708)
- Unlock the write lock of the UnAckedMessageTracker before call redeliverUnacknowledgedMessages [#10768](https://github.com/apache/pulsar/pull/10768)
- Fix AutoConsumeSchema decode data without schema version [#10811](https://github.com/apache/pulsar/pull/10811)
