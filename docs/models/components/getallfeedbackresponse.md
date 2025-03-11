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
      createdAt: "1728831403448",
      conversation: {
        id: "<id>",
        type: "support_ticket",
        createdAt: "1730796981043",
        updatedAt: "1741703581712",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_ticket",
            conversationId: "<id>",
            createdAt: "1723802851990",
            updatedAt: "1741724701372",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1723943076489",
        updatedAt: "1741724301928",
        role: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1732395470314",
      conversation: {
        id: "<id>",
        type: "openai",
        createdAt: "1739194443435",
        updatedAt: "1741708950381",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "openai",
            conversationId: "<id>",
            createdAt: "1741697278849",
            updatedAt: "1741660152832",
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
        createdAt: "1735657250525",
        updatedAt: "1741696410385",
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