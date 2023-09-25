---
title: "Object Storage Bucket Remove"
slug: object-storage-bucket-remove
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /object-storage/buckets/{clusterId}/{bucket}
  method: delete
  ordinal: 278

---
Removes a single bucket.

Bucket objects must be removed prior to removing the bucket. While buckets containing objects _may_ be
deleted using the [s3cmd command-line tool](/docs/products/storage/object-storage/guides/s3cmd/#delete-a-bucket), such operations
can fail if the bucket contains too many objects. The recommended
way to empty large buckets is to use the [S3 API to configure lifecycle policies](https://docs.ceph.com/en/latest/radosgw/bucketpolicy/#) that
remove all objects, then delete the bucket.

This endpoint is available for convenience. It is recommended that instead you
use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#delete-bucket) directly.

<!--more-->
