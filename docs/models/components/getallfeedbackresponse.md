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
      details: "<value>",
      userProperties: {
        identificationType: "COOKIED",
      },
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://concerned-integer.name/",
        type: "support_copilot",
        supportTicketConversationId: "<id>",
        createdAt: "1718795467397",
        updatedAt: "1735642779071",
        projectId: "<id>",
        integrationId: "<id>",
        visibility: null,
        messages: [],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: null,
        conversationId: "<id>",
        createdAt: "1729106822008",
        updatedAt: "1735613114800",
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