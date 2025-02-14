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
      createdAt: "1708749360804",
      updatedAt: "1739426502751",
      tags: [
        "<value>",
      ],
      messages: [
        {
          id: "<id>",
          type: "openai",
          conversationId: "<id>",
          createdAt: "1729396422279",
          updatedAt: "1739459891407",
          role: "user",
          content: [
            {
              type: "image_url",
            },
          ],
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
  total: 206.51,
  pageSize: 7583.79,
  count: 3200.17,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |