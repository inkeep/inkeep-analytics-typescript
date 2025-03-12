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
      externalUrl: "https://minor-hippodrome.name",
      type: "openai",
      supportTicketConversationId: "<id>",
      createdAt: "1719325345646",
      updatedAt: "1741783536549",
      projectId: "<id>",
      integrationId: "<id>",
      tags: [
        "<value>",
      ],
      visibility: "private",
      messages: [
        {
          id: "<id>",
          type: "openai",
          externalId: "<id>",
          externalUrl: "https://surprised-traffic.com/",
          conversationId: "<id>",
          createdAt: "1717609013817",
          updatedAt: "1741752600929",
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
  ],
  total: 9920.12,
  pageSize: 2494.2,
  count: 1059.06,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |