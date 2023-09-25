---
title: "User's Grants View"
slug: users-grants-view
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/users/{username}/grants
  method: get
  ordinal: 55

---
Returns the full grants structure for the specified account User
(other than the account owner, see below for details). This includes all entities
on the Account alongside the level of access this User has to each of them.

This command can only be accessed by the unrestricted users of an account.

The current authenticated User, including the account owner, may view their
own grants at the [/profile/grants](/docs/api/profile/#grants-list)
endpoint, but will not see entities that they do not have access to.

<!--more-->
