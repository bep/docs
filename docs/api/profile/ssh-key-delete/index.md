---
title: "SSH Key Delete"
slug: ssh-key-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /profile/sshkeys/{sshKeyId}
  method: delete
  ordinal: 319

---
Deletes an SSH Key you have access to.

**Note:** deleting an SSH Key will *not* remove it from any Linode or Disk that was deployed with `authorized_keys`. In those cases, the keys must be manually deleted on the Linode or Disk. This endpoint will only delete the key's association from your Profile.

<!--more-->
