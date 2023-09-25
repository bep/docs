---
title: "Disk Create"
slug: disk-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/disks
  method: post
  ordinal: 132

---
Adds a new Disk to a Linode.

* You can optionally create a Disk from an Image or an Empty Disk if no Image is provided with a request.

* When creating an Empty Disk, providing a `label` is required.

* If no `label` is provided, an `image` is required instead.

* When creating a Disk from an Image, `root_pass` is required.

* The default filesystem for new Disks is `ext4`. If creating a Disk from an Image, the filesystem
of the Image is used unless otherwise specified.

* When deploying a StackScript on a Disk:
  * See StackScripts List ([GET /linode/stackscripts](/docs/api/stackscripts/#stackscripts-list)) for
    a list of available StackScripts.
  * Requires a compatible Image to be supplied.
    * See StackScript View ([GET /linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view)) for compatible Images.
  * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
  * You may also supply a list of usernames via the `authorized_users` field.
    * These users must have an SSH Key associated with their Profiles first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.

<!--more-->
