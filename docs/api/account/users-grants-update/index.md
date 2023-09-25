---
title: "User's Grants Update"
slug: users-grants-update
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/users/{username}/grants
  method: put
  ordinal: 56

---
Update the grants a User has. This can be used to give a User access
to new entities or actions, or take access away.  You do not need to
include the grant for every entity on the Account in this request; any
that are not included will remain unchanged.

This command can only be accessed by the unrestricted users of an account.

<!--more-->
