---
title: "Service Transfer Cancel"
slug: service-transfer-cancel
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/service-transfers/{token}
  method: delete
  ordinal: 43

---
Cancels the Service Transfer for the provided token. Once canceled, a transfer cannot be accepted or otherwise acted on in any way. If canceled in error, the transfer must be [created](/docs/api/account/#service-transfer-create) again.

When canceled, an email notification for the cancellation is sent to the account that created this transfer. Transfers can not be canceled if they are expired or have been accepted.

This command can only be accessed by the unrestricted users of the account that created this transfer.

<!--more-->
