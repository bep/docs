---
title: "Disk Resize"
slug: disk-resize
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/disks/{diskId}/resize
  method: post
  ordinal: 138

---
Resizes a Disk you have permission to `read_write`.

The Disk must not be in use. If the Disk is in use, the request will
succeed but the resize will ultimately fail. For a request to succeed,
the Linode must be shut down prior to resizing the Disk, or the Disk
must not be assigned to the Linode's active Configuration Profile.

If you are resizing the Disk to a smaller size, it cannot be made smaller
than what is required by the total size of the files current on the Disk.

<!--more-->
