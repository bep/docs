---
title: "Phone Number Verify"
slug: phone-number-verify
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /profile/phone-number/verify
  method: post
  ordinal: 312

---
Verify a phone number by confirming the one-time code received via SMS message after accessing the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.

* Verification codes are valid for 10 minutes after they are sent.

* Only the same User that made the verification code request can use that code with this command.

Once completed, the verified phone number is assigned to the User making the request. To change the verified phone number for a User, first use the **Phone Number Delete** ([DELETE /profile/phone-number](/docs/api/profile/#phone-number-delete)) command, then begin the verification process again with the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.

<!--more-->
