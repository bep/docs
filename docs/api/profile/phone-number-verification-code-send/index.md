---
title: "Phone Number Verification Code Send"
slug: phone-number-verification-code-send
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /profile/phone-number
  method: post
  ordinal: 311

---
Send a one-time verification code via SMS message to the submitted phone number. Providing your phone number helps ensure you can securely access your Account in case other ways to connect are lost. Your phone number is only used to verify your identity by sending an SMS message. Standard carrier messaging fees may apply.

* By accessing this command you are opting in to receive SMS messages. You can opt out of SMS messages by using the **Phone Number Delete** ([DELETE /profile/phone-number](/docs/api/profile/#phone-number-delete)) command after your phone number is verified.

* Verification codes are valid for 10 minutes after they are sent.

* Subsequent requests made prior to code expiration result in sending the same code.

Once a verification code is received, verify your phone number with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.

<!--more-->
