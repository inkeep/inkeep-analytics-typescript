# GetAllFeedbackResponse

## Example Usage

```typescript
import { GetAllFeedbackResponse } from "@inkeep/inkeep-analytics/models/components";

let value: GetAllFeedbackResponse = {
  positiveFeedbackCount: 2539.41,
  negativeFeedbackCount: 2133.12,
  positiveFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1711729237787",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://hospitable-information.biz/",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1729424768901",
        updatedAt: "1742444174599",
        projectId: "<id>",
        integrationId: "<id>",
        visibility: "private",
        messages: [
          {
            id: "<id>",
            type: "openai",
            externalId: "<id>",
            externalUrl: "https://complete-provision.info",
            conversationId: "<id>",
            createdAt: "1728751064266",
            updatedAt: "1742385373535",
            role: "system",
            content: "<value>",
          },
        ],
        messagesOpenAIFormat: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
              },
            ],
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://bouncy-marketplace.name",
        conversationId: "<id>",
        createdAt: "1741255563016",
        updatedAt: "1742394779598",
        role: "<value>",
        content: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "positive",
      messageId: "<id>",
      createdAt: "1714082808011",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://reasonable-schnitzel.biz",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1729412968765",
        updatedAt: "1742375064021",
        projectId: "<id>",
        integrationId: "<id>",
        visibility: "private",
        messages: [
          {
            id: "<id>",
            type: "openai",
            externalId: "<id>",
            externalUrl: "https://ugly-flame.org",
            conversationId: "<id>",
            createdAt: "1718226880612",
            updatedAt: "1742451558549",
            role: "assistant",
            content: [
              {
                type: "image_url",
              },
            ],
          },
        ],
        messagesOpenAIFormat: [
          {
            role: "assistant",
            content: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://afraid-folklore.com",
        conversationId: "<id>",
        createdAt: "1741882909011",
        updatedAt: "1742410869071",
        role: "<value>",
        content: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `positiveFeedbackCount`                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `negativeFeedbackCount`                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `positiveFeedback`                                                           | [components.PositiveFeedback](../../models/components/positivefeedback.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `negativeFeedback`                                                           | [components.NegativeFeedback](../../models/components/negativefeedback.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |