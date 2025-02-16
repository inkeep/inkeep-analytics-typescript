# GetAllFeedbackResponse

## Example Usage

```typescript
import { GetAllFeedbackResponse } from "@inkeep/inkeep-analytics/models/components";

let value: GetAllFeedbackResponse = {
  positiveFeedbackCount: 8681.26,
  negativeFeedbackCount: 1624.93,
  positiveFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1712048694151",
      conversation: {
        id: "<id>",
        type: "support_copilot",
        createdAt: "1733603517171",
        updatedAt: "1739642677031",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_copilot",
            conversationId: "<id>",
            createdAt: "1720984839351",
            updatedAt: "1739599483256",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        conversationId: "<id>",
        createdAt: "1722446828885",
        updatedAt: "1739655892180",
        role: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1738907952510",
      conversation: {
        id: "<id>",
        type: "support_copilot",
        createdAt: "1708513322650",
        updatedAt: "1739624609048",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_copilot",
            conversationId: "<id>",
            createdAt: "1731164888951",
            updatedAt: "1739608335936",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1709857510050",
        updatedAt: "1739610786804",
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