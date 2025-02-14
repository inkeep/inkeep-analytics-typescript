# SupportCopilotConversation

## Example Usage

```typescript
import { SupportCopilotConversation } from "@inkeep/inkeep-analytics/models/components";

let value: SupportCopilotConversation = {
  id: "<id>",
  type: "support_copilot",
  createdAt: "1714232451370",
  updatedAt: "1739514487695",
  tags: [
    "<value>",
  ],
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      conversationId: "<id>",
      createdAt: "1733923871886",
      updatedAt: "1739491019663",
      role: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `externalId`                                                                                                               | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `externalUrl`                                                                                                              | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `type`                                                                                                                     | [components.SupportCopilotConversationType](../../models/components/supportcopilotconversationtype.md)                     | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `supportTicketConversationId`                                                                                              | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `createdAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `updatedAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `projectId`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `integrationId`                                                                                                            | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `properties`                                                                                                               | [components.SupportCopilotConversationProperties](../../models/components/supportcopilotconversationproperties.md)         | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `userProperties`                                                                                                           | [components.SupportCopilotConversationUserProperties](../../models/components/supportcopilotconversationuserproperties.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `tags`                                                                                                                     | *string*[]                                                                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `visibility`                                                                                                               | [components.SupportCopilotConversationVisibility](../../models/components/supportcopilotconversationvisibility.md)         | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `messages`                                                                                                                 | [components.SupportCopilotMessage](../../models/components/supportcopilotmessage.md)[]                                     | :heavy_check_mark:                                                                                                         | The messages in the conversation. Must be at least one message.                                                            |