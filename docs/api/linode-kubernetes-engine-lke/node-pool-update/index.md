---
title: "Node Pool Update"
slug: node-pool-update
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /lke/clusters/{clusterId}/pools/{poolId}
  method: put
  ordinal: 187

---
Updates a Node Pool's count and autoscaler configuration.

Linodes will be created or deleted to match changes to the Node Pool's count.

**Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**

<!--more-->
