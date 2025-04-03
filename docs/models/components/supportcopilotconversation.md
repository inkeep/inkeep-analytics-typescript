# SupportCopilotConversation

## Example Usage

```typescript
import { SupportCopilotConversation } from "@inkeep/inkeep-analytics/models/components";

let value: SupportCopilotConversation = {
  id: "<id>",
  externalId: "<id>",
  externalUrl: "https://strict-pressure.com",
  type: "support_copilot",
  supportTicketConversationId: "<id>",
  createdAt: "1741130818071",
  updatedAt: "1743645325017",
  projectId: "<id>",
  integrationId: "<id>",
  visibility: "public",
  messages: [
    {
      id: "<id>",
      type: "support_copilot",
      externalId: "<id>",
      externalUrl: "https://trivial-coil.name/",
      conversationId: "<id>",
      createdAt: "1716038802140",
      updatedAt: "1743656882348",
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