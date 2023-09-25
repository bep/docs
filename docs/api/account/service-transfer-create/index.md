---
title: "Service Transfer Create"
slug: service-transfer-create
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /account/service-transfers
  method: post
  ordinal: 42

---
Creates a transfer request for the specified services. A request can contain any of the specified service types
and any number of each service type. At this time, only Linodes can be transferred.

When created successfully, a confirmation email is sent to the account that created this transfer containing a
transfer token and instructions on completing the transfer.

When a transfer is [accepted](/docs/api/account/#service-transfer-accept), the requested services are moved to
the receiving account. Linode services will not experience interruptions due to the transfer process. Backups
for Linodes are transferred as well.

DNS records that are associated with requested services will not be transferred or updated. Please ensure that
associated DNS records have been updated or communicated to the recipient prior to the transfer.

A transfer can take up to three hours to complete once accepted. When a transfer is
completed, billing for transferred services ends for the sending account and begins for the receiving account.

This command can only be accessed by the unrestricted users of an account.

There are several conditions that must be met in order to successfully create a transfer request:

1. The account creating the transfer must not have a past due balance or active Terms of Service violation.

1. The service must be owned by the account that is creating the transfer.

1. The service must not be assigned to another Service Transfer that is pending or that has been accepted and is
incomplete.

1. Linodes must not:

    * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.

    * have any attached Block Storage Volumes.

    * have any shared IP addresses.

    * have any assigned /56, /64, or /116 IPv6 ranges.

<!--more-->
