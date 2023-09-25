---
title: "Configs List"
slug: configs-list
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /nodebalancers/{nodeBalancerId}/configs
  method: get
  ordinal: 262

---
Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.

For example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.

<!--more-->
