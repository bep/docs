---
title: "IP Addresses Share"
slug: ip-addresses-share
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/ips/share
  method: post
  ordinal: 245

---
Configure shared IPs.

IP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.

IP failover requires configuration of a failover service (such as [Keepalived](/docs/guides/ip-failover-keepalived)) within the internal system of the primary Linode.

<!--more-->
