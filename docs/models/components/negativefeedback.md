# NegativeFeedback

## Example Usage

```typescript
import { NegativeFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: NegativeFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1733063463055",
  conversation: {
    id: "<id>",
    type: "support_ticket",
    createdAt: "1740342897362",
    updatedAt: "1741697084922",
    tags: [
      "<value>",
    ],
    messages: [
      {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1723558537201",
        updatedAt: "1741693836581",
        role: "<value>",
      },
    ],
  },
  message: {
    id: "<id>",
    type: "openai",
    conversationId: "<id>",
    createdAt: "1719702307931",
    updatedAt: "1741698483149",
    role: "system",
    content: [
      {
        type: "text",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `type`                                                                                                                                             | [components.GetAllFeedbackResponseNegativeFeedbackType](../../models/components/getallfeedbackresponsenegativefeedbacktype.md)                     | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `messageId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `createdAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `reasons`                                                                                                                                          | [components.GetAllFeedbackResponseReasons](../../models/components/getallfeedbackresponsereasons.md)[]                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `userProperties`                                                                                                                                   | [components.GetAllFeedbackResponseNegativeFeedbackUserProperties](../../models/components/getallfeedbackresponsenegativefeedbackuserproperties.md) | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `conversation`                                                                                                                                     | *components.Conversation*                                                                                                                          | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `message`                                                                                                                                          | *components.Message*                                                                                                                               | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |