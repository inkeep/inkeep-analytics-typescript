# GetAllConversationResponseBody

Conversations retrieved successfully

## Example Usage

```typescript
import { GetAllConversationResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: GetAllConversationResponseBody = {
  conversations: [
    {
      id: "<id>",
      externalId: "<id>",
      externalUrl: "https://untimely-hovercraft.info/",
      type: "openai",
      supportTicketConversationId: "<id>",
      createdAt: "1722949833678",
      updatedAt: "1745246945216",
      projectId: "<id>",
      integrationId: "<id>",
      userProperties: {
        identificationType: "COOKIED",
      },
      visibility: "private",
      messages: [
        {
          id: "<id>",
          type: "openai",
          externalId: "<id>",
          externalUrl: "https://respectful-peony.biz",
          conversationId: "<id>",
          createdAt: "1734997050580",
          updatedAt: "1745293832397",
          role: "user",
          content: "<value>",
          userProperties: {
            identificationType: "COOKIED",
          },
        },
      ],
      messagesOpenAIFormat: [
        {
          role: "system",
          content: [
            {
              type: "text",
            },
          ],
        },
      ],
    },
  ],
  total: 2862.73,
  pageSize: 8242.31,
  count: 4475.85,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |