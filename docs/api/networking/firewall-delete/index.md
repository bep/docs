---
title: "Firewall Delete"
slug: firewall-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/firewalls/{firewallId}
  method: delete
  ordinal: 233

---
Delete a Firewall resource by its ID. This will remove all of the Firewall's Rules
from any Linode services that the Firewall was assigned to.

A `firewall_delete` Event is generated when this endpoint returns successfully.

<!--more-->
