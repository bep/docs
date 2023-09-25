---
title: "Linode Clone"
slug: linode-clone
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/clone
  method: post
  ordinal: 125

---
You can clone your Linode's existing Disks or Configuration profiles to
another Linode on your Account. In order for this request to complete
successfully, your User must have the `add_linodes` grant. Cloning to a
new Linode will incur a charge on your Account.

If cloning to an existing Linode, any actions currently running or
queued must be completed first before you can clone to it.

Up to five clone operations from any given source Linode can be run concurrently.
If more concurrent clones are attempted, an HTTP 400 error will be
returned by this endpoint.

Any [tags](/docs/api/tags/#tags-list) existing on the source Linode will be cloned to the target Linode.

Linodes utilizing Metadata (`"has_user_data": true`) must be cloned to a new Linode with `metadata.user_data` included with the clone request.

<!--more-->
