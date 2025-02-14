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
      createdAt: "1711937817443",
      conversation: {
        id: "<id>",
        type: "support_copilot",
        createdAt: "1733492640464",
        updatedAt: "1739531800324",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_copilot",
            conversationId: "<id>",
            createdAt: "1720873962644",
            updatedAt: "1739488606549",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        conversationId: "<id>",
        createdAt: "1722335952178",
        updatedAt: "1739545015473",
        role: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1738797075802",
      conversation: {
        id: "<id>",
        type: "support_copilot",
        createdAt: "1708402445942",
        updatedAt: "1739513732341",
        tags: [
          "<value>",
        ],
        messages: [
          {
            id: "<id>",
            type: "support_copilot",
            conversationId: "<id>",
            createdAt: "1731054012243",
            updatedAt: "1739497459229",
            role: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_ticket",
        conversationId: "<id>",
        createdAt: "1709746633342",
        updatedAt: "1739499910096",
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