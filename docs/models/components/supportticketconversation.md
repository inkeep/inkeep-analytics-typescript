# SupportTicketConversation

## Example Usage

```typescript
import { SupportTicketConversation } from "@inkeep/inkeep-analytics/models/components";

let value: SupportTicketConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://flashy-tail.net/",
  type: "support_ticket",
  supportTicketConversationId: "<id>",
  createdAt: "1713741347563",
  updatedAt: "1744118725063",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      externalId: "<id>",
      externalUrl: "https://sure-footed-taro.org/",
      conversationId: "<id>",
      createdAt: "1729452999129",
      updatedAt: "1744104035877",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `externalId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `externalUrl`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [components.SupportTicketConversationType](../../models/components/supportticketconversationtype.md)             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `supportTicketConversationId`                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `projectId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `integrationId`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `properties`                                                                                                     | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | A customizable collection of custom properties or attributes.                                                    |
| `userProperties`                                                                                                 | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | A customizable collection of custom properties or attributes.                                                    |
| `tags`                                                                                                           | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `visibility`                                                                                                     | [components.SupportTicketConversationVisibility](../../models/components/supportticketconversationvisibility.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `messages`                                                                                                       | [components.SupportTicketMessage](../../models/components/supportticketmessage.md)[]                             | :heavy_check_mark:                                                                                               | The messages in the conversation. Must be at least one message.                                                  |