---
title: "Grants List"
slug: grants-list
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /profile/grants
  method: get
  ordinal: 307

---
This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This endpoint is useful when writing third-party OAuth applications to see what options you should present to the acting User.

For example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.

Any client may access this endpoint; no OAuth scopes are required.

<!--more-->
