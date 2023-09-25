---
title: "Firewall Device Delete"
slug: firewall-device-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/firewalls/{firewallId}/devices/{deviceId}
  method: delete
  ordinal: 238

---
Removes a Firewall Device, which removes a Firewall from the Linode service it was
assigned to by the Device. This will remove all of the Firewall's Rules from the Linode
service. If any other Firewalls have been assigned to the Linode service, then those Rules
will remain in effect.

A `firewall_device_remove` Event is generated when the Firewall Device is removed successfully.

<!--more-->
