# GetAllFeedbackResponse

## Example Usage

```typescript
import { GetAllFeedbackResponse } from "@inkeep/inkeep-analytics/models/components";

let value: GetAllFeedbackResponse = {
  positiveFeedbackCount: 5654.21,
  negativeFeedbackCount: 1832.8,
  positiveFeedback: [
    {
      id: "<id>",
      type: "positive",
      messageId: "<id>",
      createdAt: "1727525357828",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://sniveling-republican.org",
        type: "support_ticket",
        supportTicketConversationId: "<id>",
        createdAt: "1714764825291",
        updatedAt: "1743631324329",
        projectId: "<id>",
        integrationId: "<id>",
        visibility: "public",
        messages: [
          {
            id: "<id>",
            type: "support_ticket",
            externalId: "<id>",
            externalUrl: "https://frail-designation.com",
            conversationId: "<id>",
            createdAt: "1712652140236",
            updatedAt: "1743663925858",
            role: "<value>",
            content: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://fluffy-morbidity.com",
        conversationId: "<id>",
        createdAt: "1727448766836",
        updatedAt: "1743668070059",
        role: "<value>",
        content: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1722798195827",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://weighty-tuxedo.net/",
        type: "support_copilot",
        supportTicketConversationId: "<id>",
        createdAt: "1732015820969",
        updatedAt: "1743659153068",
        projectId: "<id>",
        integrationId: "<id>",
        visibility: "private",
        messages: [
          {
            id: "<id>",
            type: "support_copilot",
            externalId: "<id>",
            externalUrl: "https://pointless-adult.info",
            conversationId: "<id>",
            createdAt: "1716805785506",
            updatedAt: "1743668444542",
            role: "<value>",
            content: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_ticket",
        externalId: "<id>",
        externalUrl: "https://productive-fundraising.com/",
        conversationId: "<id>",
        createdAt: "1738060319478",
        updatedAt: "1743600018135",
        role: "<value>",
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