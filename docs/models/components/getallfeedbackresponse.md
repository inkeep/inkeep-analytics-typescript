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
      createdAt: "1728825607638",
      conversation: {
        id: "<id>",
        type: "support_ticket",
        createdAt: "1730791185233",
        updatedAt: "1741697785902",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_ticket",
            conversationId: "<id>",
            createdAt: "1723797056180",
            updatedAt: "1741718905562",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1723937280679",
        updatedAt: "1741718506119",
        role: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1732389674504",
      conversation: {
        id: "<id>",
        type: "openai",
        createdAt: "1739188647625",
        updatedAt: "1741703154571",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "openai",
            conversationId: "<id>",
            createdAt: "1741691483039",
            updatedAt: "1741654357022",
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
        createdAt: "1735651454715",
        updatedAt: "1741690614575",
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