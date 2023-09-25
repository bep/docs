---
title: "Managed MySQL Database Backup Restore"
slug: managed-mysql-database-backup-restore
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /databases/mysql/instances/{instanceId}/backups/{backupId}/restore
  method: post
  ordinal: 70

---
Restore a backup to a Managed MySQL Database on your Account.

Requires `read_write` access to the Database.

The Database must have an `active`, `degraded`, or `failed` status to perform this command.

**Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.

**Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.

<!--more-->
