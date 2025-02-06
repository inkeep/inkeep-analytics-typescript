# GetAllFeedbackResponse

## Example Usage

```typescript
import { GetAllFeedbackResponse } from "inkeep-analytics-typescript/models/components";

let value: GetAllFeedbackResponse = {
  positiveFeedbackCount: 6063.93,
  negativeFeedbackCount: 191.93,
  positiveFeedback: [
    {
      id: "<id>",
      type: "positive",
      messageId: "<id>",
      createdAt: "1728086309646",
      conversation: {
        id: "<id>",
        type: "openai",
        createdAt: "1726756811579",
        updatedAt: "1738753722815",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "openai",
            conversationId: "<id>",
            createdAt: "1711539387582",
            updatedAt: "1738742448923",
            role: "user",
            content: [
              {
                type: "image_url",
              },
            ],
          },
        ],
        messagesOpenAIFormat: [
          {
            role: "user",
            content: [
              {
                type: "text",
              },
            ],
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1718858508396",
        updatedAt: "1738754335924",
        role: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1732691210464",
      conversation: {
        id: "<id>",
        type: "support_ticket",
        createdAt: "1710427832650",
        updatedAt: "1738796120011",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_ticket",
            conversationId: "<id>",
            createdAt: "1729791390541",
            updatedAt: "1738802977015",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "openai",
        conversationId: "<id>",
        createdAt: "1734644300110",
        updatedAt: "1738730716860",
        role: "user",
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