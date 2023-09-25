---
title: "Firewall Device Create"
slug: firewall-device-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/firewalls/{firewallId}/devices
  method: post
  ordinal: 237

---
Creates a Firewall Device, which assigns a Firewall to a service (referred to
as the Device's `entity`) and applies the Firewall's Rules to the device.

* Currently, only Devices with an entity of type `linode` are accepted.

* A Firewall can be assigned to multiple Linode instances at a time.

* A Linode instance can have one active, assigned Firewall at a time.
Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.

* A `firewall_device_add` Event is generated when the Firewall Device is added successfully.

<!--more-->
