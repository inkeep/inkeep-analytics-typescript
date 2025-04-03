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
      externalUrl: "https://jealous-tapioca.org",
      type: "support_ticket",
      supportTicketConversationId: "<id>",
      createdAt: "1724230654708",
      updatedAt: "1743656447606",
      projectId: "<id>",
      integrationId: "<id>",
      visibility: "public",
      messages: [
        {
          id: "<id>",
          type: "support_ticket",
          externalId: "<id>",
          externalUrl: "https://valuable-behest.com",
          conversationId: "<id>",
          createdAt: "1712776050717",
          updatedAt: "1743659980878",
          role: "<value>",
          content: "<value>",
        },
      ],
    },
  ],
  total: 7781.57,
  pageSize: 8700.13,
  count: 9786.19,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |