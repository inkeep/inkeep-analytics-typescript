# SupportTicketConversation

## Example Usage

```typescript
import { SupportTicketConversation } from "@inkeep/inkeep-analytics/models/components";

let value: SupportTicketConversation = {
  id: "<id>",
  type: "support_ticket",
  createdAt: "1721802828335",
  updatedAt: "1739506085957",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      conversationId: "<id>",
      createdAt: "1711189176495",
      updatedAt: "1739438738189",
      role: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `externalId`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `externalUrl`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | [components.SupportTicketConversationType](../../models/components/supportticketconversationtype.md)                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `supportTicketConversationId`                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `createdAt`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `updatedAt`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `projectId`                                                                                                              | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `integrationId`                                                                                                          | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `properties`                                                                                                             | [components.SupportTicketConversationProperties](../../models/components/supportticketconversationproperties.md)         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `userProperties`                                                                                                         | [components.SupportTicketConversationUserProperties](../../models/components/supportticketconversationuserproperties.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `tags`                                                                                                                   | *string*[]                                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `visibility`                                                                                                             | [components.SupportTicketConversationVisibility](../../models/components/supportticketconversationvisibility.md)         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `messages`                                                                                                               | [components.SupportTicketMessage](../../models/components/supportticketmessage.md)[]                                     | :heavy_check_mark:                                                                                                       | The messages in the conversation. Must be at least one message.                                                          |