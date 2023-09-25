---
title: "Object Storage Bucket Contents List"
slug: object-storage-bucket-contents-list
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /object-storage/buckets/{clusterId}/{bucket}/object-list
  method: get
  ordinal: 284

---
Returns the contents of a bucket. The contents are paginated using a `marker`,
which is the name of the last object on the previous page.  Objects may
be filtered by `prefix` and `delimiter` as well; see Query Parameters for more
information.


This endpoint is available for convenience. It is recommended that instead you
use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object) directly.

<!--more-->
