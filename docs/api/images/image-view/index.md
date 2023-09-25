---
title: "Image View"
slug: image-view
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /images/{imageId}
  method: get
  ordinal: 110

---
Get information about a single Image.

* **Public** Images have IDs that begin with "linode/". These distribution images are generally available to
all users.

* **Private** Images have IDs that begin with "private/". These Images are Account-specific and only
accessible to Users with appropriate [Grants](/docs/api/account/#users-grants-view).

* To view a public Image, call this endpoint with or without authentication. To view a private Image, call this endpoint with authentication.

<!--more-->
