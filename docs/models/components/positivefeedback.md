# PositiveFeedback

## Example Usage

```typescript
import { PositiveFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: PositiveFeedback = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  createdAt: "1740231403559",
  conversation: {
    id: "<id>",
    type: "support_ticket",
    createdAt: "1736877854733",
    updatedAt: "1741695545994",
    tags: [
      "<value>",
    ],
    messages: [
      {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1719565483070",
        updatedAt: "1741705423003",
        role: "<value>",
      },
    ],
  },
  message: {
    id: "<id>",
    type: "support_ticket",
    conversationId: "<id>",
    createdAt: "1737971981229",
    updatedAt: "1741685333081",
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