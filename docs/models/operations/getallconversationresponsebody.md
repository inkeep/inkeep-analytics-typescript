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
      externalUrl: "https://sizzling-premeditation.org",
      type: "support_copilot",
      supportTicketConversationId: "<id>",
      createdAt: "1743368966574",
      updatedAt: "1743498181208",
      projectId: "<id>",
      integrationId: "<id>",
      visibility: "private",
      messages: [
        {
          id: "<id>",
          type: "support_copilot",
          externalId: "<id>",
          externalUrl: "https://crooked-heating.com/",
          conversationId: "<id>",
          createdAt: "1731061002732",
          updatedAt: "1743492218501",
          role: "<value>",
          content: "<value>",
        },
      ],
    },
  ],
  total: 8953.86,
  pageSize: 9677.95,
  count: 5468.85,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |