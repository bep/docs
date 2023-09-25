---
title: "Managed PostgreSQL Database Backups List"
slug: managed-postgresql-database-backups-list
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /databases/postgresql/instances/{instanceId}/backups
  method: get
  ordinal: 80

---
Display all backups for an accessible Managed PostgreSQL Database.

The Database must not be provisioning to perform this command.

Database `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.

Database `snapshot` type backups are created by accessing the **Managed PostgreSQL Database Backup Snapshot Create** ([POST /databases/postgresql/instances/{instanceId}/backups](/docs/api/databases/#managed-postgresql-database-backup-snapshot-create)) command.

<!--more-->
