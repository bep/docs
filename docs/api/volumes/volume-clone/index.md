---
title: "Volume Clone"
slug: volume-clone
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /volumes/{volumeId}/clone
  method: post
  ordinal: 355

---
Creates a Volume on your Account. In order for this request to complete successfully, your User must have the `add_volumes` grant. The new Volume will have the same size and data as the source Volume. Creating a new Volume will incur a charge on your Account.
* Only Volumes with a `status` of "active" can be cloned.

<!--more-->
