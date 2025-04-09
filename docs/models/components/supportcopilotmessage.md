# SupportCopilotMessage

## Example Usage

```typescript
import { SupportCopilotMessage } from "@inkeep/inkeep-analytics/models/components";

let value: SupportCopilotMessage = {
  id: "<id>",
  type: "support_copilot",
  externalId: "<id>",
  externalUrl: "https://essential-countess.net/",
  conversationId: "<id>",
  createdAt: "1722354511133",
  updatedAt: "1744176889003",
  role: "<value>",
  content: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [components.SupportCopilotMessageType](../../models/components/supportcopilotmessagetype.md)     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `externalId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `externalUrl`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `conversationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `role`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `content`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `links`                                                                                          | [components.SupportCopilotMessageLinks](../../models/components/supportcopilotmessagelinks.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `properties`                                                                                     | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | A customizable collection of custom properties or attributes.                                    |
| `userProperties`                                                                                 | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | A customizable collection of custom properties or attributes.                                    |