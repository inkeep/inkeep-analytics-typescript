# SubmitFeedbackRequestBody

Note: The maximum size of the request body is 2 MB.

## Example Usage

```typescript
import { SubmitFeedbackRequestBody } from "inkeep-analytics-typescript/models/operations";

let value: SubmitFeedbackRequestBody = {
  type: "negative",
  messageId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [operations.Type](../../models/operations/type.md)                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `messageId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `createdAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `reasons`                                                              | [operations.Reasons](../../models/operations/reasons.md)[]             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `userProperties`                                                       | [operations.UserProperties](../../models/operations/userproperties.md) | :heavy_minus_sign:                                                     | N/A                                                                    |