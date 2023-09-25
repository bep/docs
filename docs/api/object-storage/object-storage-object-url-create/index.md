---
title: "Object Storage Object URL Create"
slug: object-storage-object-url-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /object-storage/buckets/{clusterId}/{bucket}/object-url
  method: post
  ordinal: 285

---
Creates a pre-signed URL to access a single Object in a bucket. This
can be used to share objects, and also to create/delete objects by using
the appropriate HTTP method in your request body's `method` parameter.


This endpoint is available for convenience. It is recommended that instead you
use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/)
directly.

<!--more-->
