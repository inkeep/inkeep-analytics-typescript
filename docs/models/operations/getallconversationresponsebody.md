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
      createdAt: "1736118149393",
      updatedAt: "1741657848050",
      tags: [
        "<value>",
      ],
      messages: [
        {
          id: "<id>",
          type: "openai",
          conversationId: "<id>",
          createdAt: "1726316800305",
          updatedAt: "1741660826150",
          role: "system",
          content: [
            {
              type: "image_url",
            },
          ],
        },
      ],
      messagesOpenAIFormat: [
        {
          role: "assistant",
          content: [
            {
              type: "image_url",
            },
          ],
        },
      ],
    },
  ],
  total: 3331.45,
  pageSize: 811.01,
  count: 4072.41,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |