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
      createdAt: "1714514928002",
      updatedAt: "1741718271321",
      tags: [
        "<value>",
      ],
      messages: [
        {
          id: "<id>",
          type: "support_ticket",
          conversationId: "<id>",
          createdAt: "1716184684732",
          updatedAt: "1741691418621",
          role: "<value>",
        },
      ],
    },
  ],
  total: 2243.17,
  pageSize: 978.44,
  count: 8621.92,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |