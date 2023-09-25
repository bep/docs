---
title: "NodeBalancer Create"
slug: nodebalancer-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /nodebalancers
  method: post
  ordinal: 258

---
Creates a NodeBalancer in the requested Region.

NodeBalancers require a port Config with at least one backend Node to start serving requests.

When using the Linode CLI to create a NodeBalancer, first create a NodeBalancer without any Configs. Then, create Configs and Nodes for that NodeBalancer with the respective [Config Create](/docs/api/nodebalancers/#config-create) and [Node Create](/docs/api/nodebalancers/#node-create) commands.

<!--more-->
