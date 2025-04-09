# SubmitFeedbackResponseBody

Feedback provided successfully

## Example Usage

```typescript
import { SubmitFeedbackResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: SubmitFeedbackResponseBody = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1734255922418",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.SubmitFeedbackType](../../models/operations/submitfeedbacktype.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `messageId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `reasons`                                                                              | [operations.SubmitFeedbackReasons](../../models/operations/submitfeedbackreasons.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `userProperties`                                                                       | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | A customizable collection of custom properties or attributes.                          |