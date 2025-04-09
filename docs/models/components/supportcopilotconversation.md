# SupportCopilotConversation

## Example Usage

```typescript
import { SupportCopilotConversation } from "@inkeep/inkeep-analytics/models/components";

let value: SupportCopilotConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://uncommon-worth.net",
  type: "support_copilot",
  supportTicketConversationId: "<id>",
  createdAt: "1743610717788",
  updatedAt: "1744106039421",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "private",
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      externalId: "<id>",
      externalUrl: "https://nice-vanadyl.com",
      conversationId: "<id>",
      createdAt: "1736381587893",
      updatedAt: "1744142146151",
      role: "<value>",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `externalId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `externalUrl`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [components.SupportCopilotConversationType](../../models/components/supportcopilotconversationtype.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `supportTicketConversationId`                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `projectId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `integrationId`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `properties`                                                                                                       | Record<string, *any*>                                                                                              | :heavy_minus_sign:                                                                                                 | A customizable collection of custom properties or attributes.                                                      |
| `userProperties`                                                                                                   | Record<string, *any*>                                                                                              | :heavy_minus_sign:                                                                                                 | A customizable collection of custom properties or attributes.                                                      |
| `tags`                                                                                                             | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `visibility`                                                                                                       | [components.SupportCopilotConversationVisibility](../../models/components/supportcopilotconversationvisibility.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `messages`                                                                                                         | [components.SupportCopilotMessage](../../models/components/supportcopilotmessage.md)[]                             | :heavy_check_mark:                                                                                                 | The messages in the conversation. Must be at least one message.                                                    |