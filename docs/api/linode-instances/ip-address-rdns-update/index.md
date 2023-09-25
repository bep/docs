---
title: "IP Address RDNS Update"
slug: ip-address-rdns-update
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /linode/instances/{linodeId}/ips/{address}
  method: put
  ordinal: 144

---
Updates the reverse DNS (RDNS) for a Linode's IP Address. This may be done for both IPv4 and IPv6 addresses.

Setting the RDNS to `null` for a public IPv4 address, resets it to the default "ip.linodeusercontent.com" RDNS value.

<!--more-->
