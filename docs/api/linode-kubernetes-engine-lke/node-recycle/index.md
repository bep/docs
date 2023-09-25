---
title: "Node Recycle"
slug: node-recycle
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /lke/clusters/{clusterId}/nodes/{nodeId}/recycle
  method: post
  ordinal: 182

---
Recycles an individual Node in the designated Kubernetes Cluster. The Node will be deleted
and replaced with a new Linode, which may take a few minutes. Replacement Nodes are
installed with the latest available patch for the Cluster's Kubernetes Version.

**Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**

<!--more-->
