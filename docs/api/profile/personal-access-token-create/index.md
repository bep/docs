---
title: "Personal Access Token Create"
slug: personal-access-token-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /profile/tokens
  method: post
  ordinal: 326

---
Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked.

<!--more-->
