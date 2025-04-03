# OpenAIConversation

## Example Usage

```typescript
import { OpenAIConversation } from "@inkeep/inkeep-analytics/models/components";

let value: OpenAIConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://wobbly-newsstand.net/",
  type: "openai",
  supportTicketConversationId: "<id>",
  createdAt: "1713369841344",
  updatedAt: "1743608049406",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "openai",
      externalId: "<id>",
      externalUrl: "https://close-farm.info/",
      conversationId: "<id>",
      createdAt: "1714156970549",
      updatedAt: "1743643444068",
      role: "user",
      content: "<value>",
    },
  ],
  messagesOpenAIFormat: [
    {
      role: "user",
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