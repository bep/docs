---
title: "Volume Resize"
slug: volume-resize
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /volumes/{volumeId}/resize
  method: post
  ordinal: 357

---
Resize an existing Volume on your Account. In order for this request to complete successfully, your User must have the `read_write` permissions to the Volume.
* Volumes can only be resized up.
* Only Volumes with a `status` of "active" can be resized.

<!--more-->
