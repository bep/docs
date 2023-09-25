---
title: "Linode Rebuild"
slug: linode-rebuild
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/rebuild
  method: post
  ordinal: 150

---
Rebuilds a Linode you have the `read_write` permission to modify.

A rebuild will first shut down the Linode, delete all disks and configs
on the Linode, and then deploy a new `image` to the Linode with the given
attributes. Additionally:

  * Requires an `image` be supplied.
  * Requires a `root_pass` be supplied to use for the root User's Account.
  * It is recommended to supply SSH keys for the root User using the
    `authorized_keys` field.
  * Linodes utilizing Metadata (`"has_user_data": true`) should include `metadata.user_data` in the rebuild request to continue using the service.

You also have the option to resize the Linode to a different plan by including the `type` parameter with your request. Note that resizing involves migrating the Linode to a new hardware host, while rebuilding without resizing maintains the same hardware host. Resizing also requires significantly more time for completion of this command. The following additional conditions apply:

  * The Linode must not have a pending migration.
  * Your Account cannot have an outstanding balance.
  * The Linode must not have more disk allocation than the new Type allows.
    * In that situation, you must first delete or resize the disk to be smaller.

<!--more-->
