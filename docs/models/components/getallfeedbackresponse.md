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
      createdAt: "1711248096834",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://hospitable-information.biz/",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1728943627948",
        updatedAt: "1741963033646",
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
            createdAt: "1728269923313",
            updatedAt: "1741904232582",
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
        createdAt: "1740774422063",
        updatedAt: "1741913638645",
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
      createdAt: "1713601667058",
      conversation: {
        id: "<id>",
        externalId: "<id>",
        externalUrl: "https://reasonable-schnitzel.biz",
        type: "openai",
        supportTicketConversationId: "<id>",
        createdAt: "1728931827812",
        updatedAt: "1741893923068",
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
            createdAt: "1717745739659",
            updatedAt: "1741970417596",
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
        createdAt: "1741401768058",
        updatedAt: "1741929728118",
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