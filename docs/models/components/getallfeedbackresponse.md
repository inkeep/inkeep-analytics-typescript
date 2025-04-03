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
      createdAt: "1727529786128",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://sniveling-republican.org",
        type: "support_ticket",
        supportTicketConversationId: "<id>",
        createdAt: "1714769253592",
        updatedAt: "1743635752629",
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
            createdAt: "1712656568536",
            updatedAt: "1743668354158",
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
        createdAt: "1727453195136",
        updatedAt: "1743672498359",
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
      createdAt: "1722802624127",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://weighty-tuxedo.net/",
        type: "support_copilot",
        supportTicketConversationId: "<id>",
        createdAt: "1732020249269",
        updatedAt: "1743663581368",
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
            createdAt: "1716810213806",
            updatedAt: "1743672872842",
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
        createdAt: "1738064747778",
        updatedAt: "1743604446435",
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