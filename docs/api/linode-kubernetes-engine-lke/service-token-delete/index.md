---
title: "Service Token Delete"
slug: service-token-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /lke/clusters/{clusterId}/servicetoken
  method: delete
  ordinal: 191

---
Delete and regenerate the service account token for a Cluster.

**Note**: When regenerating a service account token, the Cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High Availability Clusters should not experience any disruption, while standard Clusters may experience brief control plane downtime while components are restarted.

<!--more-->
