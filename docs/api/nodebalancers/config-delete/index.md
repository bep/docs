---
title: "Config Delete"
slug: config-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /nodebalancers/{nodeBalancerId}/configs/{configId}
  method: delete
  ordinal: 264

---
Deletes the Config for a port of this NodeBalancer.

**This cannot be undone.**

Once completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.

<!--more-->
