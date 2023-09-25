---
title: "Object Storage Bucket Create"
slug: object-storage-bucket-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /object-storage/buckets
  method: post
  ordinal: 276

---
Creates an Object Storage Bucket in the specified cluster.

Accounts with negative balances cannot access this command.

If the bucket already exists and is owned by you, this endpoint returns a `200` response with that bucket as if it had just been created.

This endpoint is available for convenience. It is recommended that instead you use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket) directly.

<!--more-->
