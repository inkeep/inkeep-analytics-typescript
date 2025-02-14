# GetAllConversationResponseBody

Conversations retrieved successfully

## Example Usage

```typescript
import { GetAllConversationResponseBody } from "@inkeep/inkeep-analytics/models/operations";

let value: GetAllConversationResponseBody = {
  conversations: [
    {
      id: "<id>",
      type: "openai",
      createdAt: "1738080268153",
      updatedAt: "1739542029712",
      tags: [
        "<value>",
      ],
      messages: [
        {
          id: "<id>",
          type: "openai",
          conversationId: "<id>",
          createdAt: "1714829281303",
          updatedAt: "1739564483285",
          role: "assistant",
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
  total: 2074.7,
  pageSize: 4246.85,
  count: 3741.7,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |