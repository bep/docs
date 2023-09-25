---
title: "Backup Restore"
slug: backup-restore
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/backups/{backupId}/restore
  method: post
  ordinal: 123

---
Restores a Linode's Backup to the specified Linode.

The following conditions apply:
  * Backups may not be restored across Regions.
  * Only successfully completed Backups that are not undergoing maintenance can be restored.
  * The Linode that the Backup is being restored to must not itself be in the process of creating a Backup.

{{< note type="warning" title="Warning: UUID Collisions">}}
When you restore a backup, the restored disk is assigned the same [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) as the original disk. In most cases, this is acceptable and does not cause issues. However, if you attempt to mount both the original disk and the corresponding restore disk at the same time (by assigning them both to devices in your Configuration Profile's **Block Device Assignment**), you will encounter a UUID "collision".

When this happens, the system selects, and mounts, only one of the disks at random. This is due to both disks sharing the same UUID, and your instance *may fail to boot* since it will not be clear which disk is root. If your system does boot, you will not see any immediate indication if you are booted into the restored disk or the original disk, and you will be unable to access both disks at the same time.

To avoid this, we recommend only restoring a backup to the same Compute Instance if you do not intend on mounting them at the same time or are comfortable modifying UUIDs. If you need access to files on both the original disk and the restored disk simultaneously (such as needing to copy files between them), we suggest either restoring the backup to a separate Compute Instance or [creating](/docs/api/linode-instances/#linode-create) a new Compute Instance with the desired `backup_id`.

To learn more about block device assignments and viewing your disks' UUIDs, see our guide on [Configuration Profiles](/docs/products/compute/compute-instances/guides/configuration-profiles/#block-device-assignment).
{{< /note >}}

<!--more-->
