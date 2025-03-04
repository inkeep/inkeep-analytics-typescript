# GetAllConversationResponseBody

Conversations retrieved successfully

## Example Usage

```typescript
import { GetAllConversationResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: GetAllConversationResponseBody = {
  conversations: [
    {
      id: "<id>",
      type: "support_ticket",
      createdAt: "1720724978027",
      updatedAt: "1741041227462",
      tags: [
        "<value>",
      ],
      messages: [
        {
          id: "<id>",
          type: "support_ticket",
          conversationId: "<id>",
          createdAt: "1733645671522",
          updatedAt: "1741024658871",
          role: "<value>",
        },
      ],
    },
  ],
  total: 9037.2,
  pageSize: 834.22,
  count: 5521.93,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |