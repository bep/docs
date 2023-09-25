---
title: "Service Transfer View"
slug: service-transfer-view
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/service-transfers/{token}
  method: get
  ordinal: 44

---
Returns the details of the Service Transfer for the provided token.

While a transfer is pending, any unrestricted user *of any account* can access this command. After a
transfer has been accepted, it can only be viewed by unrestricted users of the accounts that created and
accepted the transfer. If canceled or expired, only unrestricted users of the account that created the
transfer can view it.

<!--more-->
