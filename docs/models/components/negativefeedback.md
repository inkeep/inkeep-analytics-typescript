# NegativeFeedback

## Example Usage

```typescript
import { NegativeFeedback } from "@inkeep/inkeep-analytics/models/components";

let value: NegativeFeedback = {
  id: "<id>",
  type: "negative",
  messageId: "<id>",
  createdAt: "1722838735115",
  conversation: {
    id: "<id>",
    externalId: "<id>",
    externalUrl: "https://bitter-platter.info/",
    type: "openai",
    supportTicketConversationId: "<id>",
    createdAt: "1727847514956",
    updatedAt: "1742453024994",
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
        createdAt: "1734842181962",
        updatedAt: "1742403202655",
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
    createdAt: "1740802231491",
    updatedAt: "1742438698707",
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