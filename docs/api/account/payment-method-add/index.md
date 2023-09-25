---
title: "Payment Method Add"
slug: payment-method-add
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/payment-methods
  method: post
  ordinal: 31

---
Adds a Payment Method to your Account with the option to set it as the default method.

* Adding a default Payment Method removes the default status from any other Payment Method.

* An Account can have up to 6 active Payment Methods.

* Up to 60 Payment Methods can be added each day.

* Prior to adding a Payment Method, ensure that your billing address information is up-to-date
with a valid `zip` by using the Account Update ([PUT /account](/docs/api/account/#account-update)) endpoint.

* A `payment_method_add` event is generated when a payment is successfully submitted.

<!--more-->
