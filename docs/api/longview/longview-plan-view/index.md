---
title: "Longview Plan View"
slug: longview-plan-view
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /longview/plan
  method: get
  ordinal: 200

---
Get the details of your current Longview plan. This returns a `LongviewSubscription` object for your current Longview Pro plan, or an empty set `{}` if your current plan is Longview Free.

You must have at least one of the following `global` [User Grants](/docs/api/account/#users-grants-view) in order to access this endpoint:

  - `"account_access": read_write`
  - `"account_access": read_only`
  - `"longview_subscription": true`
  - `"add_longview": true`


To update your subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).

<!--more-->
