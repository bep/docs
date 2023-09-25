---
title: "Managed MySQL Database Backups List"
slug: managed-mysql-database-backups-list
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /databases/mysql/instances/{instanceId}/backups
  method: get
  ordinal: 66

---
Display all backups for an accessible Managed MySQL Database.

The Database must not be provisioning to perform this command.

Database `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.

Database `snapshot` type backups are created by accessing the **Managed MySQL Database Backup Snapshot Create** ([POST /databases/mysql/instances/{instanceId}/backups](/docs/api/databases/#managed-mysql-database-backup-snapshot-create)) command.

<!--more-->
