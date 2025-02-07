# PositiveFeedback

## Example Usage

```typescript
import { PositiveFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: PositiveFeedback = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  createdAt: "1730537033936",
  conversation: {
    id: "<id>",
    type: "support_ticket",
    createdAt: "1715196634874",
    updatedAt: "1738851335407",
    tags: [
      "<value>",
    ],
    messages: [
      {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1726022589743",
        updatedAt: "1738850997983",
        role: "<value>",
      },
    ],
  },
  message: {
    id: "<id>",
    type: "openai",
    conversationId: "<id>",
    createdAt: "1737397847866",
    updatedAt: "1738840187177",
    role: "assistant",
    content: [
      {
        type: "text",
      },
    ],
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