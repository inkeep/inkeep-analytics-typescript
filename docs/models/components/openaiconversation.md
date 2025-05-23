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
  createdAt: "1719347654086",
  updatedAt: "1745285583757",
  projectId: "<id>",
  integrationId: "<id>",
  userProperties: {
    identificationType: "COOKIED",
  },
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "openai",
      externalId: "<id>",
      externalUrl: "https://mean-nougat.org/",
      conversationId: "<id>",
      createdAt: "1714554033951",
      updatedAt: "1745230813637",
      role: "assistant",
      content: [
        {
          type: "text",
        },
      ],
      userProperties: {
        identificationType: "COOKIED",
      },
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

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `externalId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `externalUrl`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | [components.OpenAIConversationType](../../models/components/openaiconversationtype.md)                                                                                   | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `supportTicketConversationId`                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `createdAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `updatedAt`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `projectId`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `integrationId`                                                                                                                                                          | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `properties`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes.                                                                                                            |
| `userProperties`                                                                                                                                                         | [components.OpenAIConversationUserProperties](../../models/components/openaiconversationuserproperties.md)                                                               | :heavy_minus_sign:                                                                                                                                                       | A customizable collection of custom properties or attributes. Some properties have first class support for the Inkeep Portal or Widget and are noted in the description. |
| `tags`                                                                                                                                                                   | *string*[]                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `visibility`                                                                                                                                                             | [components.OpenAIConversationVisibility](../../models/components/openaiconversationvisibility.md)                                                                       | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `messages`                                                                                                                                                               | [components.OpenAIExtendedMessage](../../models/components/openaiextendedmessage.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                                       | The messages in the conversation. Must be at least one message.                                                                                                          |
| `messagesOpenAIFormat`                                                                                                                                                   | [components.OpenAIChatCompletionMessage](../../models/components/openaichatcompletionmessage.md)[]                                                                       | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |