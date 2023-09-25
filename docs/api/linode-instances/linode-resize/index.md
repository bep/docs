---
title: "Linode Resize"
slug: linode-resize
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/resize
  method: post
  ordinal: 152

---
Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:

  * The Linode must not have a pending migration.
  * Your Account cannot have an outstanding balance.
  * The Linode must not have more disk allocation than the new Type allows.
    * In that situation, you must first delete or resize the disk to be smaller.

You can also resize a Linode when using the [Linode Rebuild](/docs/api/linode-instances/#linode-rebuild) command.

<!--more-->
