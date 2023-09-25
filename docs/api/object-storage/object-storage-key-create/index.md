---
title: "Object Storage Key Create"
slug: object-storage-key-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /object-storage/keys
  method: post
  ordinal: 293

---
Provisions a new Object Storage Key on your account.

Accounts with negative balances cannot access this command.

* To create a Limited Access Key with specific permissions, send a `bucket_access` array.

* To create a Limited Access Key without access to any buckets, send an empty `bucket_access` array.

* To create an Access Key with unlimited access to all clusters and all buckets, omit the `bucket_access` array.

<!--more-->
