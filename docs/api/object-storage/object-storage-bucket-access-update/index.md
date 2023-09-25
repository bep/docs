---
title: "Object Storage Bucket Access Update"
slug: object-storage-bucket-access-update
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /object-storage/buckets/{clusterId}/{bucket}/access
  method: put
  ordinal: 281

---
Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.
Only allows enabling/disabling CORS for all origins, and/or setting canned ACLs.


For more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.

<!--more-->
