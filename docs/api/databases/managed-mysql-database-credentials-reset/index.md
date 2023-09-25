---
title: "Managed MySQL Database Credentials Reset"
slug: managed-mysql-database-credentials-reset
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /databases/mysql/instances/{instanceId}/credentials/reset
  method: post
  ordinal: 72

---
Reset the root password for a Managed MySQL Database.

Requires `read_write` access to the Database.

A new root password is randomly generated and accessible with the **Managed MySQL Database Credentials View** ([GET /databases/mysql/instances/{instanceId}/credentials](/docs/api/databases/#managed-mysql-database-credentials-view)) command.

Only unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.

**Note**: Note that it may take several seconds for credentials to reset.

<!--more-->
