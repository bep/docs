---
title: "Kubernetes Cluster Regenerate"
slug: kubernetes-cluster-regenerate
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /lke/clusters/{clusterId}/regenerate
  method: post
  ordinal: 190

---
Regenerate the Kubeconfig file and/or the service account token for a Cluster.

This is a helper command that allows performing both the [Kubeconfig Delete](#kubeconfig-delete) and the [Service Token Delete](#service-token-delete) actions with a single request.

When using this command, at least one of `kubeconfig` or `servicetoken` is required.

**Note**: When regenerating a service account token, the Cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High Availability Clusters should not experience any disruption, while standard Clusters may experience brief control plane downtime while components are restarted.

<!--more-->
