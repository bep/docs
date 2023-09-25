---
title: "Firewall Update"
slug: firewall-update
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/firewalls/{firewallId}
  method: put
  ordinal: 235

---
Updates information for a Firewall. Some parts of a Firewall's configuration cannot
be manipulated by this endpoint:

- A Firewall's Devices cannot be set with this endpoint. Instead, use the
[Create Firewall Device](/docs/api/networking/#firewall-device-create)
and [Delete Firewall Device](/docs/api/networking/#firewall-device-delete)
endpoints to assign and remove this Firewall from Linode services.

- A Firewall's Rules cannot be changed with this endpoint. Instead, use the
[Update Firewall Rules](/docs/api/networking/#firewall-rules-update)
endpoint to update your Rules.

- A Firewall's status can be set to `enabled` or `disabled` by this endpoint, but it cannot be
set to `deleted`. Instead, use the
[Delete Firewall](/docs/api/networking/#firewall-delete)
endpoint to delete a Firewall.

If a Firewall's status is changed with this endpoint, a corresponding `firewall_enable` or
`firewall_disable` Event will be generated.

<!--more-->
