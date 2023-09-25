---
title: "Node Pool Recycle"
slug: node-pool-recycle
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /lke/clusters/{clusterId}/pools/{poolId}/recycle
  method: post
  ordinal: 188

---
Recycles a Node Pool for the designated Kubernetes Cluster. All Linodes within the Node Pool will be deleted
and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are
installed with the latest available patch for the Cluster's Kubernetes Version.

**Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**

<!--more-->
