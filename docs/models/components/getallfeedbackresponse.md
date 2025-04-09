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
      createdAt: "1726426364190",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://tragic-fundraising.biz/",
        type: "support_ticket",
        supportTicketConversationId: "<id>",
        createdAt: "1743025765438",
        updatedAt: "1744127542213",
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
            createdAt: "1738736883557",
            updatedAt: "1744153971415",
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
        createdAt: "1717837415825",
        updatedAt: "1744175889988",
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
      createdAt: "1734050099428",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://lazy-bowling.name",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1727291204771",
        updatedAt: "1744156474320",
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
            createdAt: "1734478151450",
            updatedAt: "1744119662547",
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
        createdAt: "1738180912463",
        updatedAt: "1744093554938",
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