# GetAllFeedbackResponse

## Example Usage

```typescript
import { GetAllFeedbackResponse } from "@inkeep/inkeep-analytics/models/components";

let value: GetAllFeedbackResponse = {
  positiveFeedbackCount: 1354.74,
  negativeFeedbackCount: 2982.82,
  positiveFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1728819274530",
      conversation: {
        id: "<id>",
        type: "support_ticket",
        createdAt: "1730784852124",
        updatedAt: "1741691452793",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_ticket",
            conversationId: "<id>",
            createdAt: "1723790723071",
            updatedAt: "1741712572453",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1723930947571",
        updatedAt: "1741712173010",
        role: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1732383341395",
      conversation: {
        id: "<id>",
        type: "openai",
        createdAt: "1739182314517",
        updatedAt: "1741696821463",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "openai",
            conversationId: "<id>",
            createdAt: "1741685149931",
            updatedAt: "1741648023914",
            role: "assistant",
            content: "<value>",
          },
        ],
        messagesOpenAIFormat: [
          {
            role: "user",
            content: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        conversationId: "<id>",
        createdAt: "1735645121607",
        updatedAt: "1741684281467",
        role: "<value>",
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