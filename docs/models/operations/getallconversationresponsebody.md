# GetAllConversationResponseBody

Conversations retrieved successfully

## Example Usage

```typescript
import { GetAllConversationResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: GetAllConversationResponseBody = {
  conversations: [
    {
      id: "<id>",
      type: "support_copilot",
      createdAt: "1737822332479",
      updatedAt: "1741659680534",
      tags: [
        "<value>",
      ],
      messages: [
        {
          id: "<id>",
          type: "support_copilot",
          conversationId: "<id>",
          createdAt: "1740504939373",
          updatedAt: "1741650482729",
          role: "<value>",
        },
      ],
    },
  ],
  total: 9493.19,
  pageSize: 9413.78,
  count: 7992.03,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |