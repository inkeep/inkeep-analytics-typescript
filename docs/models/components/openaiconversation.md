# OpenAIConversation

## Example Usage

```typescript
import { OpenAIConversation } from "@inkeep/inkeep-analytics/models/components";

let value: OpenAIConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://recent-cuckoo.com",
  type: "openai",
  supportTicketConversationId: "<id>",
  createdAt: "1720867286235",
  updatedAt: "1742400962324",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "openai",
      externalId: "<id>",
      externalUrl: "https://writhing-brochure.biz/",
      conversationId: "<id>",
      createdAt: "1716006994873",
      updatedAt: "1742425965985",
      role: "system",
      content: "<value>",
    },
  ],
  messagesOpenAIFormat: [
    {
      role: "system",
      content: "<value>",
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