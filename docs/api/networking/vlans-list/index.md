---
title: "VLANs List"
slug: vlans-list
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/vlans
  method: get
  ordinal: 255

---
Returns a list of all Virtual Local Area Networks (VLANs) on your Account. VLANs provide
a mechanism for secure communication between two or more Linodes that are assigned to the
same VLAN and are both within the same Layer 2 broadcast domain.

VLANs are created and attached to Linodes by using the `interfaces` property for the following endpoints:

- Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))
- Configuration Profile Create ([POST /linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profile-create))
- Configuration Profile Update ([PUT /linode/instances/{linodeId}/configs/{configId}](/docs/api/linode-instances/#configuration-profile-update))

There are several ways to detach a VLAN from a Linode:

- [Update](/docs/api/linode-instances/#configuration-profile-update) the active Configuration Profile to remove the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode.
- [Create](/docs/api/linode-instances/#configuration-profile-create) a new Configuration Profile without the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode into the new Configuration Profile.
- [Delete](/docs/api/linode-instances/#linode-delete) the Linode.

**Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.
If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,
the migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,
you will be prompted to select a different data center or contact support.

**Note:** See the [VLANs Overview](/docs/products/networking/vlans/#technical-specifications) to view additional specifications and limitations.

<!--more-->
