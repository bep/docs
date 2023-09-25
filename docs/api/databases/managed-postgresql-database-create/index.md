---
title: "Managed PostgreSQL Database Create"
slug: managed-postgresql-database-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /databases/postgresql/instances
  method: post
  ordinal: 76

---
Provision a Managed PostgreSQL Database.

Restricted Users must have the `add_databases` grant to use this command.

New instances can take approximately 15 to 30 minutes to provision.

The `allow_list` is used to control access to the Managed Database.

* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.

* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.

* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.

All Managed Databases include automatic, daily backups. Up to seven backups are automatically stored for each Managed Database, providing restore points for each day of the past week.

All Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database during configurable maintenance windows.

* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.

* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.

* To modify update the maintenance window for a Database, use the **Managed PostgreSQL Database Update** ([PUT /databases/postgresql/instances/{instanceId}](/docs/api/databases/#managed-postgresql-database-update)) command.

<!--more-->
