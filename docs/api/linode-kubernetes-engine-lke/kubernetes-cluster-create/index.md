---
title: "Kubernetes Cluster Create"
slug: kubernetes-cluster-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /lke/clusters
  method: post
  ordinal: 172

---
Creates a Kubernetes cluster. The Kubernetes cluster will be created
asynchronously. You can use the events system to determine when the
Kubernetes cluster is ready to use. Please note that it often takes 2-5 minutes before the
[Kubernetes API server endpoint](/docs/api/linode-kubernetes-engine-lke/#kubernetes-api-endpoints-list) and
the [Kubeconfig file](/docs/api/linode-kubernetes-engine-lke/#kubeconfig-view) for the new cluster
are ready.

<!--more-->
