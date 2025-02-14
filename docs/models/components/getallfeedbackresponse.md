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
      createdAt: "1711875878700",
      conversation: {
        id: "<id>",
        type: "support_copilot",
        createdAt: "1733430701721",
        updatedAt: "1739469861581",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_copilot",
            conversationId: "<id>",
            createdAt: "1720812023901",
            updatedAt: "1739426667806",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        conversationId: "<id>",
        createdAt: "1722274013434",
        updatedAt: "1739483076730",
        role: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1738735137059",
      conversation: {
        id: "<id>",
        type: "support_copilot",
        createdAt: "1708340507199",
        updatedAt: "1739451793597",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_copilot",
            conversationId: "<id>",
            createdAt: "1730992073500",
            updatedAt: "1739435520485",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1709684694599",
        updatedAt: "1739437971353",
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