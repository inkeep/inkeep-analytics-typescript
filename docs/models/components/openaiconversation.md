# OpenAIConversation

## Example Usage

```typescript
import { OpenAIConversation } from "@inkeep/inkeep-analytics/models/components";

let value: OpenAIConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://illiterate-tenant.info",
  type: "openai",
  supportTicketConversationId: "<id>",
  createdAt: "1718212781105",
  updatedAt: "1744150710777",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "openai",
      externalId: "<id>",
      externalUrl: "https://mean-nougat.org/",
      conversationId: "<id>",
      createdAt: "1713419160973",
      updatedAt: "1744095940659",
      role: "assistant",
      content: [
        {
          type: "text",
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `externalId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `externalUrl`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [components.OpenAIConversationType](../../models/components/openaiconversationtype.md)             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `supportTicketConversationId`                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `integrationId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `properties`                                                                                       | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | A customizable collection of custom properties or attributes.                                      |
| `userProperties`                                                                                   | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | A customizable collection of custom properties or attributes.                                      |
| `tags`                                                                                             | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `visibility`                                                                                       | [components.OpenAIConversationVisibility](../../models/components/openaiconversationvisibility.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `messages`                                                                                         | [components.OpenAIExtendedMessage](../../models/components/openaiextendedmessage.md)[]             | :heavy_check_mark:                                                                                 | The messages in the conversation. Must be at least one message.                                    |
| `messagesOpenAIFormat`                                                                             | [components.OpenAIChatCompletionMessage](../../models/components/openaichatcompletionmessage.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |