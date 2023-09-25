---
title: "Kubernetes Cluster Delete"
slug: kubernetes-cluster-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /lke/clusters/{clusterId}
  method: delete
  ordinal: 173

---
Deletes a Cluster you have permission to `read_write`.

**Deleting a Cluster is a destructive action and cannot be undone.**

Deleting a Cluster:
  - Deletes all Linodes in all pools within this Kubernetes cluster
  - Deletes all supporting Kubernetes services for this Kubernetes
    cluster (API server, etcd, etc)
  - Deletes all NodeBalancers created by this Kubernetes cluster
  - Does not delete any of the volumes created by this Kubernetes
    cluster

<!--more-->
