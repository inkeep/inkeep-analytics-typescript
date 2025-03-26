# NegativeFeedback

## Example Usage

```typescript
import { NegativeFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: NegativeFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1723354132672",
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://bitter-platter.info/",
    type: "openai",
    supportTicketConversationId: "<id>",
    createdAt: "1728362912513",
    updatedAt: "1742968422551",
    projectId: "<id>",
    integrationId: "<id>",
    visibility: "public",
    messages: [
      {
        id: "<id>",
        type: "openai",
        externalId: "<id>",
        externalUrl: "https://radiant-dividend.com/",
        conversationId: "<id>",
        createdAt: "1735357579520",
        updatedAt: "1742918600213",
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
        role: "user",
        content: [
          {
            type: "text",
          },
        ],
      },
    ],
  },
  message: {
    id: "<id>",
    type: "support_copilot",
    externalId: "<id>",
    externalUrl: "https://well-groomed-poetry.biz/",
    conversationId: "<id>",
    createdAt: "1741317629049",
    updatedAt: "1742954096265",
    role: "<value>",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [components.GetAllFeedbackResponseNegativeFeedbackType](../../models/components/getallfeedbackresponsenegativefeedbacktype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `messageId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `createdAt`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `reasons`                                                                                                                      | [components.GetAllFeedbackResponseReasons](../../models/components/getallfeedbackresponsereasons.md)[]                         | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `userProperties`                                                                                                               | Record<string, *any*>                                                                                                          | :heavy_minus_sign:                                                                                                             | A customizable collection of custom properties or attributes.                                                                  |
| `conversation`                                                                                                                 | *components.Conversation*                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `message`                                                                                                                      | *components.Message*                                                                                                           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |