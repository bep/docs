---
title: "Payment Make"
slug: payment-make
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/payments
  method: post
  ordinal: 36

---
Makes a Payment to your Account.

* The requested amount is charged to the default Payment Method if no `payment_method_id` is specified.

* A `payment_submitted` event is generated when a payment is successfully submitted.

<!--more-->
