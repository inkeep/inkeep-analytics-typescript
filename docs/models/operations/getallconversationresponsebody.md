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
      createdAt: "1721832570715",
      updatedAt: "1744129682253",
      projectId: "<id>",
      integrationId: "<id>",
      visibility: "private",
      messages: [
        {
          id: "<id>",
          type: "openai",
          externalId: "<id>",
          externalUrl: "https://respectful-peony.biz",
          conversationId: "<id>",
          createdAt: "1733879787618",
          updatedAt: "1744176569435",
          role: "user",
          content: "<value>",
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