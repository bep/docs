---
title: "Linodes Assign IPv4s"
slug: linodes-assign-ipv4s
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/ipv4/assign
  method: post
  ordinal: 248

---
This command is equivalent to **IP Addresses Assign** ([POST /networking/ips/assign](#ip-addresses-assign)).

Assign multiple IPv4 addresses and/or IPv6 ranges to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPs to your Linodes.

The following restrictions apply:
* All Linodes involved must have at least one public IPv4 address after assignment.
* Linodes may have no more than one assigned private IPv4 address.
* Linodes may have no more than one assigned IPv6 range.

[Open a Support Ticket](/docs/api/support/#support-ticket-open) to request additional IPv4 addresses or IPv6 ranges beyond standard account limits.

**Note**: Removing an IP address that has been set as a Managed Linode's `ssh.ip` causes the Managed Linode's SSH access settings to reset to their default values. To view and configure Managed Linode SSH settings, use the following commands:
* **Linode's Managed Settings View** ([GET /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-view))
* **Linode's Managed Settings Update** ([PUT /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-update))

<!--more-->
