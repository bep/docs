---
title: "Linode Root Password Reset"
slug: linode-root-password-reset
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/password
  method: post
  ordinal: 148

---
Resets the root password for this Linode.
* Your Linode must be [shut down](/docs/api/linode-instances/#linode-shut-down) for a password reset to complete.
* If your Linode has more than one disk (not counting its swap disk), use the [Reset Disk Root Password](/docs/api/linode-instances/#disk-root-password-reset) endpoint to update a specific disk's root password.
* A `password_reset` event is generated when a root password reset is successful.

<!--more-->
