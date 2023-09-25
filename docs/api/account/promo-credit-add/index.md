---
title: "Promo Credit Add"
slug: promo-credit-add
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/promo-codes
  method: post
  ordinal: 40

---
Adds an expiring Promo Credit to your account.

The following restrictions apply:

* Your account must be less than 90 days old.
* There must not be an existing Promo Credit already on your account.
* The requesting User must be unrestricted. Use the User Update
  ([PUT /account/users/{username}](/docs/api/account/#user-update)) to change a User's restricted status.
* The `promo_code` must be valid and unexpired.

<!--more-->
