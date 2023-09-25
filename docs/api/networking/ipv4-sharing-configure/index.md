---
title: "IPv4 Sharing Configure"
slug: ipv4-sharing-configure
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/ipv4/share
  method: post
  ordinal: 249

---
This command is equivalent to **IP Addresses Share** ([POST /networking/ips/share](#ip-addresses-share)).

Configure shared IPs.

IP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.

IP failover requires configuration of a failover service (such as [Keepalived](/docs/guides/ip-failover-keepalived)) within the internal system of the primary Linode.

<!--more-->
