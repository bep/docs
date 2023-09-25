---
title: "Personal Access Token Revoke"
slug: personal-access-token-revoke
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /profile/tokens/{tokenId}
  method: delete
  ordinal: 327

---
Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.

<!--more-->
