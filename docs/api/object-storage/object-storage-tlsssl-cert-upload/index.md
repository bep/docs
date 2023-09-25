---
title: "Object Storage TLS/SSL Cert Upload"
slug: object-storage-tlsssl-cert-upload
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /object-storage/buckets/{clusterId}/{bucket}/ssl
  method: post
  ordinal: 288

---
Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
Your TLS/SSL certificate and private key are stored encrypted at rest.


To replace an expired certificate, [delete your current certificate](/docs/api/object-storage/#object-storage-tlsssl-cert-delete)
and upload a new one.

<!--more-->
