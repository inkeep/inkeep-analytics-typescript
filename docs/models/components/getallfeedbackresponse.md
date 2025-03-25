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
      createdAt: "1712217580556",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://hospitable-information.biz/",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1729913111671",
        updatedAt: "1742932517369",
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
            createdAt: "1729239407035",
            updatedAt: "1742873716305",
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
        createdAt: "1741743905785",
        updatedAt: "1742883122368",
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
      createdAt: "1714571150781",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://reasonable-schnitzel.biz",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1729901311534",
        updatedAt: "1742863406790",
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
            createdAt: "1718715223382",
            updatedAt: "1742939901319",
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
        createdAt: "1742371251781",
        updatedAt: "1742899211841",
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