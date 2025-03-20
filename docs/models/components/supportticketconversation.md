# SupportTicketConversation

## Example Usage

```typescript
import { SupportTicketConversation } from "@inkeep/inkeep-analytics/models/components";

let value: SupportTicketConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://glass-pigpen.com",
  type: "support_ticket",
  supportTicketConversationId: "<id>",
  createdAt: "1733517515538",
  updatedAt: "1742402025942",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "support_ticket",
      externalId: "<id>",
      externalUrl: "https://ajar-solvency.com",
      conversationId: "<id>",
      createdAt: "1732303043174",
      updatedAt: "1742400349966",
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