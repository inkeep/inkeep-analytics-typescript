# CreateOpenAIConversation

## Example Usage

```typescript
import { CreateOpenAIConversation } from "@inkeep/inkeep-analytics/models/components";

let value: CreateOpenAIConversation = {
  type: "openai",
  messages: [
    {
      role: "system",
      content: [
        {
          type: "text",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `externalId`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `externalUrl`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [components.Type](../../models/components/type.md)                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `supportTicketConversationId`                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `createdAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `updatedAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `integrationId`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `properties`                                                           | [components.Properties](../../models/components/properties.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `userProperties`                                                       | [components.UserProperties](../../models/components/userproperties.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `tags`                                                                 | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `visibility`                                                           | [components.Visibility](../../models/components/visibility.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `messages`                                                             | [components.Messages](../../models/components/messages.md)[]           | :heavy_check_mark:                                                     | The messages in the conversation. Must be at least one message.        |