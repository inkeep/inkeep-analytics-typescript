# GetAllFeedbackResponse

## Example Usage

```typescript
import { GetAllFeedbackResponse } from "@inkeep/inkeep-analytics/models/components";

let value: GetAllFeedbackResponse = {
  positiveFeedbackCount: 2539.41,
  negativeFeedbackCount: 2133.12,
  positiveFeedback: [
    {
      id: "<id>",
      type: "negative",
      messageId: "<id>",
      createdAt: "1711736721195",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://hospitable-information.biz/",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1729432252310",
        updatedAt: "1742451658008",
        projectId: "<id>",
        integrationId: "<id>",
        visibility: "private",
        messages: [
          {
            id: "<id>",
            type: "openai",
            externalId: "<id>",
            externalUrl: "https://complete-provision.info",
            conversationId: "<id>",
            createdAt: "1728758547674",
            updatedAt: "1742392856943",
            role: "system",
            content: "<value>",
          },
        ],
        messagesOpenAIFormat: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
              },
            ],
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://bouncy-marketplace.name",
        conversationId: "<id>",
        createdAt: "1741263046424",
        updatedAt: "1742402263006",
        role: "<value>",
        content: "<value>",
      },
    },
  ],
  negativeFeedback: [
    {
      id: "<id>",
      type: "positive",
      messageId: "<id>",
      createdAt: "1714090291419",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://reasonable-schnitzel.biz",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1729420452173",
        updatedAt: "1742382547429",
        projectId: "<id>",
        integrationId: "<id>",
        visibility: "private",
        messages: [
          {
            id: "<id>",
            type: "openai",
            externalId: "<id>",
            externalUrl: "https://ugly-flame.org",
            conversationId: "<id>",
            createdAt: "1718234364020",
            updatedAt: "1742459041958",
            role: "assistant",
            content: [
              {
                type: "image_url",
              },
            ],
          },
        ],
        messagesOpenAIFormat: [
          {
            role: "assistant",
            content: "<value>",
          },
        ],
      },
      message: {
        id: "<id>",
        type: "support_copilot",
        externalId: "<id>",
        externalUrl: "https://afraid-folklore.com",
        conversationId: "<id>",
        createdAt: "1741890392419",
        updatedAt: "1742418352480",
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