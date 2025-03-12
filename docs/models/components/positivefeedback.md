# PositiveFeedback

## Example Usage

```typescript
import { PositiveFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: PositiveFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1711986491363",
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://staid-deck.info/",
    type: "openai",
    supportTicketConversationId: "<id>",
    createdAt: "1739540859362",
    updatedAt: "1741783349319",
    projectId: "<id>",
    integrationId: "<id>",
    tags: [
      "<value>",
    ],
    visibility: "private",
    messages: [
      {
        id: "<id>",
        type: "openai",
        externalId: "<id>",
        externalUrl: "https://poor-minority.biz/",
        conversationId: "<id>",
        createdAt: "1739734260327",
        updatedAt: "1741775534667",
        role: "user",
        content: [
          {
            type: "image_url",
          },
        ],
      },
    ],
    messagesOpenAIFormat: [
      {
        role: "system",
        content: "<value>",
      },
    ],
  },
  message: {
    id: "<id>",
    type: "openai",
    externalId: "<id>",
    externalUrl: "https://wealthy-redesign.info/",
    conversationId: "<id>",
    createdAt: "1717444636105",
    updatedAt: "1741744464770",
    role: "system",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [components.GetAllFeedbackResponseType](../../models/components/getallfeedbackresponsetype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `messageId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `reasons`                                                                                      | [components.Reasons](../../models/components/reasons.md)[]                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userProperties`                                                                               | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | A customizable collection of custom properties or attributes.                                  |
| `conversation`                                                                                 | *components.Conversation*                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `message`                                                                                      | *components.Message*                                                                           | :heavy_check_mark:                                                                             | N/A                                                                                            |