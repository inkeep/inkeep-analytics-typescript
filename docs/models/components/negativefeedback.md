# NegativeFeedback

## Example Usage

```typescript
import { NegativeFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: NegativeFeedback = {
  id: "<id>",
  type: "positive",
  messageId: "<id>",
  createdAt: "1736244584379",
  conversation: {
    id: "<id>",
    type: "support_ticket",
    createdAt: "1721716527675",
    updatedAt: "1739497753114",
    tags: [
      "<value>",
    ],
    messages: [
      {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1733395224662",
        updatedAt: "1739481507099",
        role: "<value>",
      },
    ],
  },
  message: {
    id: "<id>",
    type: "openai",
    conversationId: "<id>",
    createdAt: "1736967894618",
    updatedAt: "1739482401564",
    role: "assistant",
    content: "<value>",
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