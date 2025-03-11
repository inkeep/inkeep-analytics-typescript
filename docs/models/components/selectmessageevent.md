# SelectMessageEvent

## Example Usage

```typescript
import { SelectMessageEvent } from "@inkeep/inkeep-analytics/models/components";

let value: SelectMessageEvent = {
  id: "<id>",
  type: "<value>",
  messageId: "<id>",
  createdAt: "1715598025079",
  entityType: "message",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `messageId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `projectId`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `integrationId`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `properties`                                                                                               | [components.SelectMessageEventProperties](../../models/components/selectmessageeventproperties.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `userProperties`                                                                                           | [components.SelectMessageEventUserProperties](../../models/components/selectmessageeventuserproperties.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `entityType`                                                                                               | [components.SelectMessageEventEntityType](../../models/components/selectmessageevententitytype.md)         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |