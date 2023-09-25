---
title: "Linode Upgrade"
slug: linode-upgrade
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/mutate
  method: post
  ordinal: 146

---
Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running.
If any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.

<!--more-->
