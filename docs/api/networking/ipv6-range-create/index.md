---
title: "IPv6 Range Create"
slug: ipv6-range-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/ipv6/ranges
  method: post
  ordinal: 252

---
Creates an IPv6 Range and assigns it based on the provided Linode or route target IPv6 SLAAC address. See the `ipv6` property when accessing the Linode View ([GET /linode/instances/{linodeId}](/docs/api/linode-instances/#linode-view)) endpoint to view a Linode's IPv6 SLAAC address.
  * Either `linode_id` or `route_target` is required in a request.
  * `linode_id` and `route_target` are mutually exclusive. Submitting values for both properties in a request results in an error.
  * Upon a successful request, an IPv6 range is created in the [Region](/docs/api/regions/#regions-list) that corresponds to the provided `linode_id` or `route_target`.
  * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.
  * Access the IP Addresses Assign ([POST /networking/ips/assign](/docs/api/networking/#ip-addresses-assign)) endpoint to re-assign IPv6 Ranges to your Linodes.

**Note**: The following restrictions apply:
  * A Linode can only have one IPv6 range targeting its SLAAC address.
  * An account can only have one IPv6 range in each [Region](/docs/api/regions/#regions-list).
  * [Open a Support Ticket](/docs/api/support/#support-ticket-open) to request expansion of these restrictions.

<!--more-->
