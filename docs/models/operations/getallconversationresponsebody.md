# GetAllConversationResponseBody

Conversations retrieved successfully

## Example Usage

```typescript
import { GetAllConversationResponseBody } from "inkeep-analytics-typescript/models/operations";

let value: GetAllConversationResponseBody = {
  conversations: [
    {
      id: "<id>",
      type: "support_ticket",
      createdAt: "1726629107683",
      updatedAt: "1738762956049",
      tags: [
        "<value>",
      ],
      messages: [
        {
          id: "<id>",
          type: "support_ticket",
          conversationId: "<id>",
          createdAt: "1725870478334",
          updatedAt: "1738779759723",
          role: "<value>",
        },
      ],
    },
  ],
  total: 3119.45,
  pageSize: 3982.21,
  count: 2098.43,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |