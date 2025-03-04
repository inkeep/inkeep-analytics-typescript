# PositiveFeedback

## Example Usage

```typescript
import { PositiveFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: PositiveFeedback = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  createdAt: "1739556266351",
  conversation: {
    id: "<id>",
    type: "support_ticket",
    createdAt: "1736202717525",
    updatedAt: "1741020408786",
    tags: [
      "<value>",
    ],
    messages: [
      {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1718890345862",
        updatedAt: "1741030285795",
        role: "<value>",
      },
    ],
  },
  message: {
    id: "<id>",
    type: "support_ticket",
    conversationId: "<id>",
    createdAt: "1737296844021",
    updatedAt: "1741010195873",
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