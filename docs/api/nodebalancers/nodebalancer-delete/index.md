---
title: "NodeBalancer Delete"
slug: nodebalancer-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /nodebalancers/{nodeBalancerId}
  method: delete
  ordinal: 259

---
Deletes a NodeBalancer.

**This is a destructive action and cannot be undone.**

Deleting a NodeBalancer will also delete all associated Configs and Nodes, although the backend servers represented by the Nodes will not be changed or removed. Deleting a NodeBalancer will cause you to lose access to the IP Addresses assigned to this NodeBalancer.

<!--more-->
