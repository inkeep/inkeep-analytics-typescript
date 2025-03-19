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
      externalUrl: "https://first-glider.info",
      type: "support_copilot",
      supportTicketConversationId: "<id>",
      createdAt: "1734506184705",
      updatedAt: "1742362545272",
      projectId: "<id>",
      integrationId: "<id>",
      visibility: "private",
      messages: [
        {
          id: "<id>",
          type: "support_copilot",
          externalId: "<id>",
          externalUrl: "https://frugal-sport.biz/",
          conversationId: "<id>",
          createdAt: "1726735752395",
          updatedAt: "1742423437247",
          role: "<value>",
          content: "<value>",
        },
      ],
    },
  ],
  total: 6339.98,
  pageSize: 8672.9,
  count: 9402.1,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |