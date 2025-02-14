# PositiveFeedback

## Example Usage

```typescript
import { PositiveFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: PositiveFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1717118978937",
  conversation: {
    id: "<id>",
    type: "support_ticket",
    createdAt: "1721492741131",
    updatedAt: "1739432396630",
    tags: [
      "<value>",
    ],
    messages: [
      {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1717377722941",
        updatedAt: "1739469936206",
        role: "<value>",
      },
    ],
  },
  message: {
    id: "<id>",
    type: "support_ticket",
    conversationId: "<id>",
    createdAt: "1726083012281",
    updatedAt: "1739477127707",
    role: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [components.GetAllFeedbackResponseType](../../models/components/getallfeedbackresponsetype.md)                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `messageId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `reasons`                                                                                                          | [components.Reasons](../../models/components/reasons.md)[]                                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `userProperties`                                                                                                   | [components.GetAllFeedbackResponseUserProperties](../../models/components/getallfeedbackresponseuserproperties.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `conversation`                                                                                                     | *components.Conversation*                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `message`                                                                                                          | *components.Message*                                                                                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |