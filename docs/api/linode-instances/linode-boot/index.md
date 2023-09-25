---
title: "Linode Boot"
slug: linode-boot
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/boot
  method: post
  ordinal: 124

---
Boots a Linode you have permission to modify. If no parameters are given, a Config profile
will be chosen for this boot based on the following criteria:

* If there is only one Config profile for this Linode, it will be used.
* If there is more than one Config profile, the last booted config will be used.
* If there is more than one Config profile and none were the last to be booted (because the
  Linode was never booted or the last booted config was deleted) an error will be returned.

<!--more-->
