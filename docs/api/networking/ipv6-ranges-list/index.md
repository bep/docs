---
title: "IPv6 Ranges List"
slug: ipv6-ranges-list
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/ipv6/ranges
  method: get
  ordinal: 251

---
Displays the IPv6 ranges on your Account.


  * An IPv6 range is a `/64` or `/54` block of IPv6 addresses routed to a single Linode in a given [Region](/docs/api/regions/#regions-list).

  * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.

  * Access the IPv6 Range Create ([POST /networking/ipv6/ranges](/docs/api/networking/#ipv6-range-create)) endpoint to add a `/64` or `/56` block of IPv6 addresses to your account.

<!--more-->
