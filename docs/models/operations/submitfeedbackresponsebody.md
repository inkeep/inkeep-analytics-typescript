# SubmitFeedbackResponseBody

Feedback provided successfully

## Example Usage

```typescript
import { SubmitFeedbackResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: SubmitFeedbackResponseBody = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  createdAt: "1712673244783",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.SubmitFeedbackType](../../models/operations/submitfeedbacktype.md)                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `messageId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `reasons`                                                                                          | [operations.SubmitFeedbackReasons](../../models/operations/submitfeedbackreasons.md)[]             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `userProperties`                                                                                   | [operations.SubmitFeedbackUserProperties](../../models/operations/submitfeedbackuserproperties.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |