---
title: "Node Delete"
slug: node-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}
  method: delete
  ordinal: 269

---
Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.

This does not change or remove the Linode whose address was used in the creation of this Node.

<!--more-->
