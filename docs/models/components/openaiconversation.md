# OpenAIConversation

## Example Usage

```typescript
import { OpenAIConversation } from "@inkeep/inkeep-analytics/models/components";

let value: OpenAIConversation = {
  id: "<id>",
  type: "openai",
  createdAt: "1709586112291",
  updatedAt: "1738803047115",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "openai",
      conversationId: "<id>",
      createdAt: "1707983526593",
      updatedAt: "1738867456754",
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
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `externalId`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `externalUrl`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [components.OpenAIConversationType](../../models/components/openaiconversationtype.md)                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `projectId`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `integrationId`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `properties`                                                                                               | [components.OpenAIConversationProperties](../../models/components/openaiconversationproperties.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `userProperties`                                                                                           | [components.OpenAIConversationUserProperties](../../models/components/openaiconversationuserproperties.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `tags`                                                                                                     | *string*[]                                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `messages`                                                                                                 | [components.OpenAIExtendedMessage](../../models/components/openaiextendedmessage.md)[]                     | :heavy_check_mark:                                                                                         | The messages in the conversation. Must be at least one message.                                            |
| `messagesOpenAIFormat`                                                                                     | [components.OpenAIChatCompletionMessage](../../models/components/openaichatcompletionmessage.md)[]         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |