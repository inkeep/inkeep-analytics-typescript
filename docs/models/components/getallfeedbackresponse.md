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
      createdAt: "1726400226013",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://tragic-fundraising.biz/",
        type: "support_ticket",
        supportTicketConversationId: "<id>",
        createdAt: "1742999627256",
        updatedAt: "1744101404031",
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
            createdAt: "1738710745371",
            updatedAt: "1744127833228",
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
        createdAt: "1717811277635",
        updatedAt: "1744149751797",
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
      createdAt: "1734023961233",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://lazy-bowling.name",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1727265066576",
        updatedAt: "1744130336125",
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
            createdAt: "1734452013255",
            updatedAt: "1744093524352",
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
        createdAt: "1738154774267",
        updatedAt: "1744067416743",
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