---
title: "OAuth Client Delete"
slug: oauth-client-delete
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/oauth-clients/{clientId}
  method: delete
  ordinal: 24

---
Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by <a target="_top" href="https://login.linode.com">https://login.linode.com</a>, and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).

<!--more-->
