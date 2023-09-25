---
title: "Linode Create"
slug: linode-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances
  method: post
  ordinal: 114

---
Creates a Linode Instance on your Account. In order for this
request to complete successfully, your User must have the `add_linodes` grant. Creating a
new Linode will incur a charge on your Account.

Linodes can be created using one of the available Types. See
Types List ([GET /linode/types](/docs/api/linode-types/#types-list)) to get more
information about each Type's specs and cost.

Linodes can be created in any one of our available Regions, which are accessible from the
Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint.

In an effort to fight spam, Linode restricts outbound connections on ports 25, 465, and 587
on all Linodes for new accounts created after November 5th, 2019. For more information,
see our guide on [Running a Mail Server](/docs/guides/running-a-mail-server/).

**Important**: You must be an unrestricted User in order to add or modify tags on Linodes.

Linodes can be created in a number of ways:

* Using a Linode Public Image distribution or a Private Image you created based on another Linode.
  * Access the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view
    all available Images.
  * The Linode will be `running` after it completes `provisioning`.
  * A default config with two Disks, one being a 512 swap disk, is created.
    * `swap_size` can be used to customize the swap disk size.
  * Requires a `root_pass` be supplied to use for the root User's Account.
  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
  * You may also supply a list of usernames via the `authorized_users` field.
    * These users must have an SSH Key associated with your Profile first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.

* Using cloud-init with [Metadata](/docs/products/compute/compute-instances/guides/metadata/).
  * Automate system configuration and software installation by providing a base-64 encoded [cloud-config](/docs/products/compute/compute-instances/guides/metadata-cloud-config/) file.
  * Requires a compatible Image. You can determine compatible Images by checking for `cloud-init` under `capabilities` when using Images List ([GET /images](/docs/api/images/#images-list)).
  * Requires a compatible Region.  You can determine compatible Regions by checking for `Metadata` under `capabilities` when using Regions List ([GET /regions](/docs/api/regions/#regions-list)).

* Using a StackScript.
  * See StackScripts List ([GET /linode/stackscripts](/docs/api/stackscripts/#stackscripts-list)) for
    a list of available StackScripts.
  * The Linode will be `running` after it completes `provisioning`.
  * Requires a compatible Image to be supplied.
    * See StackScript View ([GET /linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view)) for compatible Images.
  * Requires a `root_pass` be supplied to use for the root User's Account.
  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
  * You may also supply a list of usernames via the `authorized_users` field.
    * These users must have an SSH Key associated with your Profile first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.

* Using one of your other Linode's backups.
  * You must create a Linode large enough to accommodate the Backup's size.
  * The Disks and Config will match that of the Linode that was backed up.
  * The `root_pass` will match that of the Linode that was backed up.

* Attached to a private VLAN.
  * Review the `interfaces` property of the [Request Body Schema](/docs/api/linode-instances/#linode-create__request-body-schema) for details.
  * For more information, see our guide on [Getting Started with VLANs](/docs/products/networking/vlans/get-started/).

* Create an empty Linode.
  * The Linode will remain `offline` and must be manually started.
    * See Linode Boot ([POST /linode/instances/{linodeId}/boot](/docs/api/linode-instances/#linode-boot)).
  * Disks and Configs must be created manually.
  * This is only recommended for advanced use cases.

<!--more-->
