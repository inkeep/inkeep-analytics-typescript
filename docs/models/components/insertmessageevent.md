# InsertMessageEvent

## Example Usage

```typescript
import { InsertMessageEvent } from "@inkeep/inkeep-analytics/models/components";

let value: InsertMessageEvent = {
  type: "<value>",
  messageId: "<id>",
  entityType: "message",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `messageId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `properties`                                                                                               | [components.InsertMessageEventProperties](../../models/components/insertmessageeventproperties.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `userProperties`                                                                                           | [components.InsertMessageEventUserProperties](../../models/components/insertmessageeventuserproperties.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `entityType`                                                                                               | [components.EntityType](../../models/components/entitytype.md)                                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |