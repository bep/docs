---
title: "Security Questions Answer"
slug: security-questions-answer
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /profile/security-questions
  method: post
  ordinal: 316

---
Adds security question responses for your User.

Requires exactly three unique questions.

Previous responses are overwritten if answered or reset to `null` if unanswered.

**Note**: Security questions must be answered for your User prior to accessing the **Two Factor Secret Create** ([POST /profile/tfa-enable](/docs/api/profile/#two-factor-secret-create)) command.

<!--more-->
