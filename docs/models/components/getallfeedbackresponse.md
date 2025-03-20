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
      createdAt: "1711736000824",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://hospitable-information.biz/",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1729431531938",
        updatedAt: "1742450937636",
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
            createdAt: "1728757827303",
            updatedAt: "1742392136572",
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
        createdAt: "1741262326053",
        updatedAt: "1742401542635",
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
      createdAt: "1714089571048",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://reasonable-schnitzel.biz",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1729419731802",
        updatedAt: "1742381827058",
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
            createdAt: "1718233643649",
            updatedAt: "1742458321586",
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
        createdAt: "1741889672050",
        updatedAt: "1742417632110",
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