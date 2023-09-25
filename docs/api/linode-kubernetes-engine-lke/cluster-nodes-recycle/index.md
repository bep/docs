---
title: "Cluster Nodes Recycle"
slug: cluster-nodes-recycle
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /lke/clusters/{clusterId}/recycle
  method: post
  ordinal: 189

---
Recycles all nodes in all pools of a designated Kubernetes Cluster. All Linodes within the Cluster will be deleted
and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are
installed with the latest available [patch version](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/release/versioning.md#kubernetes-release-versioning) for the Cluster's current Kubernetes minor release.

**Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**

<!--more-->
