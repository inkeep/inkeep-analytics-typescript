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
      createdAt: "1729703622445",
      userProperties: {
        identificationType: "COOKIED",
      },
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://tragic-fundraising.biz/",
        type: "support_ticket",
        supportTicketConversationId: "<id>",
        createdAt: "1746303023692",
        updatedAt: "1747404800468",
        projectId: "<id>",
        integrationId: "<id>",
        userProperties: {
          identificationType: "COOKIED",
        },
        visibility: "public",
        messages: [
          {
            id: "<id>",
            type: "support_ticket",
            externalId: "<id>",
            externalUrl: "https://meager-ferret.org",
            conversationId: "<id>",
            createdAt: "1742014141813",
            updatedAt: "1747431229670",
            role: "<value>",
            content: "<value>",
            userProperties: {
              identificationType: "COOKIED",
            },
          },
        ],
      },
      message: {
        id: "<id>",
        type: "openai",
        externalId: "<id>",
        externalUrl: "https://dirty-distinction.name/",
        conversationId: "<id>",
        createdAt: "1721114674083",
        updatedAt: "1747453148245",
        role: "user",
        content: [
          {
            type: "text",
          },
        ],
        userProperties: {
          identificationType: "COOKIED",
        },
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "positive",
      messageId: "<id>",
      createdAt: "1737327357677",
      userProperties: {
        identificationType: "COOKIED",
      },
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://lazy-bowling.name",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1730568463022",
        updatedAt: "1747433732571",
        projectId: "<id>",
        integrationId: "<id>",
        userProperties: {
          identificationType: "COOKIED",
        },
        visibility: "private",
        messages: [
          {
            id: "<id>",
            type: "openai",
            externalId: "<id>",
            externalUrl: "https://harmful-airbus.com",
            conversationId: "<id>",
            createdAt: "1737755409702",
            updatedAt: "1747396920799",
            role: "system",
            content: [
              {
                type: "image_url",
              },
            ],
            userProperties: {
              identificationType: "COOKIED",
            },
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
        createdAt: "1741458170715",
        updatedAt: "1747370813191",
        role: "<value>",
        content: "<value>",
        userProperties: {
          identificationType: "COOKIED",
        },
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