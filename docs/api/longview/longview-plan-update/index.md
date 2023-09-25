---
title: "Longview Plan Update"
slug: longview-plan-update
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /longview/plan
  method: put
  ordinal: 201

---
Update your Longview plan to that of the given subcription ID. This returns a `LongviewSubscription` object for the updated Longview Pro plan, or an empty set `{}` if the updated plan is Longview Free.

You must have `"longview_subscription": true` configured as a `global` [User Grant](/docs/api/account/#users-grants-view) in order to access this endpoint.

You can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details, including `id`'s, of each plan.

<!--more-->
