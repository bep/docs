---
title: "Managed PostgreSQL Database Update"
slug: managed-postgresql-database-update
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /databases/postgresql/instances/{instanceId}
  method: put
  ordinal: 79

---
Update a Managed PostgreSQL Database.

Requires `read_write` access to the Database.

The Database must have an `active` status to perform this command.

Updating addresses in the `allow_list` overwrites any existing addresses.

* IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.

* If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.

* Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.

* **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.

All Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.

* If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.

* **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.

<!--more-->
