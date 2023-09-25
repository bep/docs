---
title: "Images List"
slug: images-list
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /images
  method: get
  ordinal: 106

---
Returns a paginated list of Images.

* **Public** Images have IDs that begin with "linode/". These distribution images are generally available to
all users.

* **Private** Images have IDs that begin with "private/". These Images are Account-specific and only
accessible to Users with appropriate [Grants](/docs/api/account/#users-grants-view).

* To view only public Images, call this endpoint with or without authentication. To view private Images as well, call this endpoint with authentication.

<!--more-->
