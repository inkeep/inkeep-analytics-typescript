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
      createdAt: "1727543628949",
      userProperties: {
        identificationType: "COOKIED",
      },
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://tragic-fundraising.biz/",
        type: "support_ticket",
        supportTicketConversationId: "<id>",
        createdAt: "1744143030193",
        updatedAt: "1745244806968",
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
            createdAt: "1739854148308",
            updatedAt: "1745271236165",
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
        createdAt: "1718954680573",
        updatedAt: "1745293154735",
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
      createdAt: "1735167364164",
      userProperties: {
        identificationType: "COOKIED",
      },
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://lazy-bowling.name",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1728408469505",
        updatedAt: "1745273739053",
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
            createdAt: "1735595416180",
            updatedAt: "1745236927277",
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
        createdAt: "1739298177187",
        updatedAt: "1745210819662",
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