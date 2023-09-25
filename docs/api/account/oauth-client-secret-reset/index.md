---
title: "OAuth Client Secret Reset"
slug: oauth-client-secret-reset
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/oauth-clients/{clientId}/reset-secret
  method: post
  ordinal: 27

---
Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.

<!--more-->
