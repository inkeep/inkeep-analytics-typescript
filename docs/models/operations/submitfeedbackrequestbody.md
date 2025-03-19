# SubmitFeedbackRequestBody

Note: The maximum size of the request body is 2 MB.

## Example Usage

```typescript
import { SubmitFeedbackRequestBody } from "@inkeep/inkeep-analytics/models/operations";

let value: SubmitFeedbackRequestBody = {
  type: "negative",
  messageId: "<id>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `type`                                                                                                    | [operations.Type](../../models/operations/type.md)                                                        | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `messageId`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_minus_sign:                                                                                        | A timestamp in ISO 8601 format with timezone information. If not provided, the current time will be used. |
| `reasons`                                                                                                 | [operations.Reasons](../../models/operations/reasons.md)[]                                                | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `userProperties`                                                                                          | Record<string, *any*>                                                                                     | :heavy_minus_sign:                                                                                        | A customizable collection of custom properties or attributes.                                             |