# GetAllFeedbackResponse

## Example Usage

```typescript
import { GetAllFeedbackResponse } from "@inkeep/inkeep-analytics/models/components";

let value: GetAllFeedbackResponse = {
  positiveFeedbackCount: 3680.81,
  negativeFeedbackCount: 7742.28,
  positiveFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1726074846121",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://tragic-fundraising.biz/",
        type: "support_ticket",
        supportTicketConversationId: "<id>",
        createdAt: "1742674247366",
        updatedAt: "1743776024142",
        projectId: "<id>",
        integrationId: "<id>",
        visibility: "public",
        messages: [
          {
            id: "<id>",
            type: "support_ticket",
            externalId: "<id>",
            externalUrl: "https://meager-ferret.org",
            conversationId: "<id>",
            createdAt: "1738385365485",
            updatedAt: "1743802453343",
            role: "<value>",
            content: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "openai",
        externalId: "<id>",
        externalUrl: "https://dirty-distinction.name/",
        conversationId: "<id>",
        createdAt: "1717485897753",
        updatedAt: "1743824371916",
        role: "user",
        content: [
          {
            type: "text",
          },
        ],
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "positive",
      messageId: "<id>",
      createdAt: "1733698581356",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://lazy-bowling.name",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1726939686700",
        updatedAt: "1743804956248",
        projectId: "<id>",
        integrationId: "<id>",
        visibility: "private",
        messages: [
          {
            id: "<id>",
            type: "openai",
            externalId: "<id>",
            externalUrl: "https://harmful-airbus.com",
            conversationId: "<id>",
            createdAt: "1734126633378",
            updatedAt: "1743768144476",
            role: "system",
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
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://cheerful-quit.biz/",
        conversationId: "<id>",
        createdAt: "1737829394392",
        updatedAt: "1743742036867",
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