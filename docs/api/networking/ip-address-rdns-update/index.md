---
title: "IP Address RDNS Update"
slug: ip-address-rdns-update
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /networking/ips/{address}
  method: put
  ordinal: 247

---
Sets RDNS on an IP Address. Forward DNS must already be set up for reverse DNS to be applied. If you set the RDNS to `null` for public IPv4 addresses, it will be reset to the default _ip.linodeusercontent.com_ RDNS value.

<!--more-->
