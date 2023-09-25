---
title: "Managed PostgreSQL Database Credentials Reset"
slug: managed-postgresql-database-credentials-reset
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /databases/postgresql/instances/{instanceId}/credentials/reset
  method: post
  ordinal: 86

---
Reset the root password for a Managed PostgreSQL Database.

Requires `read_write` access to the Database.

A new root password is randomly generated and accessible with the **Managed PostgreSQL Database Credentials View** ([GET /databases/postgresql/instances/{instanceId}/credentials](/docs/api/databases/#managed-postgresql-database-credentials-view)) command.

Only unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.

**Note**: Note that it may take several seconds for credentials to reset.

<!--more-->
