# PositiveFeedback

## Example Usage

```typescript
import { PositiveFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: PositiveFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1712633541036",
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://staid-deck.info/",
    type: "openai",
    supportTicketConversationId: "<id>",
    createdAt: "1740187909036",
    updatedAt: "1742430398993",
    projectId: "<id>",
    integrationId: "<id>",
    visibility: "private",
    messages: [
      {
        id: "<id>",
        type: "openai",
        externalId: "<id>",
        externalUrl: "https://poor-minority.biz/",
        conversationId: "<id>",
        createdAt: "1740381310000",
        updatedAt: "1742422584340",
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
    createdAt: "1718091685778",
    updatedAt: "1742391514443",
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