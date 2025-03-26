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
      createdAt: "1742800773986",
      updatedAt: "1742929988620",
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
          createdAt: "1730492810144",
          updatedAt: "1742924025913",
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