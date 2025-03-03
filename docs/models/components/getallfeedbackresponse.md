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
      createdAt: "1728140987631",
      conversation: {
        id: "<id>",
        type: "support_ticket",
        createdAt: "1730106565225",
        updatedAt: "1741013165895",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_ticket",
            conversationId: "<id>",
            createdAt: "1723112436172",
            updatedAt: "1741034285555",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1723252660672",
        updatedAt: "1741033886111",
        role: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1731705054497",
      conversation: {
        id: "<id>",
        type: "openai",
        createdAt: "1738504027618",
        updatedAt: "1741018534564",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "openai",
            conversationId: "<id>",
            createdAt: "1741006863032",
            updatedAt: "1740969737015",
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
        createdAt: "1734966834708",
        updatedAt: "1741005994568",
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