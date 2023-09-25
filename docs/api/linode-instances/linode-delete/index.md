---
title: "Linode Delete"
slug: linode-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}
  method: delete
  ordinal: 115

---
Deletes a Linode you have permission to `read_write`.

**Deleting a Linode is a destructive action and cannot be undone.**

Additionally, deleting a Linode:

  * Gives up any IP addresses the Linode was assigned.
  * Deletes all Disks, Backups, Configs, etc.
  * Detaches any Volumes associated with the Linode.
  * Stops billing for the Linode and its associated services. You will be billed for time used
    within the billing period the Linode was active.

Linodes that are in the process of [cloning](/docs/api/linode-instances/#linode-clone) or [backup restoration](/docs/api/linode-instances/#backup-restore) cannot be deleted.

<!--more-->
