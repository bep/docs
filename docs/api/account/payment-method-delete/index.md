---
title: "Payment Method Delete"
slug: payment-method-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/payment-methods/{paymentMethodId}
  method: delete
  ordinal: 32

---
Deactivate the specified Payment Method.

The default Payment Method can not be deleted. To add a new default Payment Method, access the Payment Method
Add ([POST /account/payment-methods](/docs/api/account/#payment-method-add)) endpoint. To designate an existing
Payment Method as the default method, access the Payment Method Make Default
([POST /account/payment-methods/{paymentMethodId}/make-default](/docs/api/account/#payment-method-make-default))
endpoint.

<!--more-->
