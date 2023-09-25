---
title: "Two Factor Secret Create"
slug: two-factor-secret-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /profile/tfa-enable
  method: post
  ordinal: 323

---
Generates a Two Factor secret for your User. To enable TFA for your User, enter the secret obtained from this command with the **Two Factor Authentication Confirm/Enable** ([POST /profile/tfa-enable-confirm](/docs/api/profile/#two-factor-authentication-confirmenable)) command.
Once enabled, logins from untrusted computers are required to provide
a TFA code before they are successful.

**Note**: Before you can enable TFA, security questions must be answered for your User by accessing the **Security Questions Answer** ([POST /profile/security-questions](/docs/api/profile/#security-questions-answer)) command.

<!--more-->
