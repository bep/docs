---
title: "Firewall Create"
slug: firewall-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/firewalls
  method: post
  ordinal: 232

---
Creates a Firewall to filter network traffic.

* Use the `rules` property to create inbound and outbound access rules.

* Use the `devices` property to assign the Firewall to a service and apply its Rules to the device. Requires `read_write` [User's Grants](/docs/api/account/#users-grants-view) to the device.
Currently, Firewalls can only be assigned to Linode instances.

* A Firewall can be assigned to multiple Linode instances at a time.

* A Linode instance can have one active, assigned Firewall at a time.
Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.

* A `firewall_create` Event is generated when this endpoint returns successfully.

<!--more-->
