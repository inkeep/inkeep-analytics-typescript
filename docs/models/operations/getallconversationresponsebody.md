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
      externalUrl: "https://minor-hippodrome.name",
      type: "openai",
      supportTicketConversationId: "<id>",
      createdAt: "1719491254370",
      updatedAt: "1741949445273",
      projectId: "<id>",
      integrationId: "<id>",
      visibility: "private",
      messages: [
        {
          id: "<id>",
          type: "openai",
          externalId: "<id>",
          externalUrl: "https://surprised-traffic.com/",
          conversationId: "<id>",
          createdAt: "1717774922542",
          updatedAt: "1741918509654",
          role: "assistant",
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
          content: "<value>",
        },
      ],
    },
  ],
  total: 9920.12,
  pageSize: 2494.2,
  count: 1059.06,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `conversations`             | *components.Conversation*[] | :heavy_check_mark:          | N/A                         |
| `total`                     | *number*                    | :heavy_check_mark:          | N/A                         |
| `pageSize`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `count`                     | *number*                    | :heavy_check_mark:          | N/A                         |