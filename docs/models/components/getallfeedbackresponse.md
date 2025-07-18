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
      type: "positive",
      messageId: "<id>",
      createdAt: "1723345333062",
      updatedAt: "1735633533765",
      details: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://linear-orchid.net/",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1718600127591",
        updatedAt: "1735614597742",
        projectId: "<id>",
        integrationId: null,
        visibility: "public",
        messages: [
          {
            id: "<id>",
            type: "openai",
            externalId: null,
            externalUrl: "https://muted-glider.net/",
            conversationId: "<id>",
            createdAt: "1727082986532",
            updatedAt: "1735641575395",
            role: "assistant",
            content: [
              {
                type: "text",
              },
            ],
            userProperties: {
              identificationType: "COOKIED",
            },
          },
        ],
        messagesOpenAIFormat: [],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://perfumed-juggernaut.name",
        conversationId: "<id>",
        createdAt: "1713190979921",
        updatedAt: "1735649045851",
        role: "<value>",
        content: "<value>",
      },
    },
  ],
  negativeFeedback: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `positiveFeedbackCount`                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `negativeFeedbackCount`                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `positiveFeedback`                                                           | [components.PositiveFeedback](../../models/components/positivefeedback.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `negativeFeedback`                                                           | [components.NegativeFeedback](../../models/components/negativefeedback.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |