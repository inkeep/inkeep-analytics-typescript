# SupportTicketMessage

## Example Usage

```typescript
import { SupportTicketMessage } from "@inkeep/inkeep-analytics/models/components";

let value: SupportTicketMessage = {
  id: "<id>",
  type: "support_ticket",
  externalId: "<id>",
  externalUrl: "https://frightened-comestible.name/",
  conversationId: "<id>",
  createdAt: "1715708167729",
  updatedAt: "1744113700829",
  role: "<value>",
  content: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [components.SupportTicketMessageType](../../models/components/supportticketmessagetype.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `externalId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `externalUrl`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `conversationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `role`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `content`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `links`                                                                                        | [components.SupportTicketMessageLinks](../../models/components/supportticketmessagelinks.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `properties`                                                                                   | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | A customizable collection of custom properties or attributes.                                  |
| `userProperties`                                                                               | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | A customizable collection of custom properties or attributes.                                  |