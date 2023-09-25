---
title: "Managed MySQL Database Patch"
slug: managed-mysql-database-patch
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /databases/mysql/instances/{instanceId}/patch
  method: post
  ordinal: 73

---
Apply security patches and updates to the underlying operating system of the Managed MySQL Database. This function runs during regular maintenance windows, which are configurable with the **Managed MySQL Database Update** ([PUT /databases/mysql/instances/{instanceId}](/docs/api/databases/#managed-mysql-database-update)) command.

Requires `read_write` access to the Database.

The Database must have an `active` status to perform this command.

**Note**

* If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.

* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.

<!--more-->
