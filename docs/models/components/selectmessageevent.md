# SelectMessageEvent

## Example Usage

```typescript
import { SelectMessageEvent } from "inkeep-analytics-typescript/models/components";

let value: SelectMessageEvent = {
  id: "<id>",
  type: "<value>",
  messageId: "<id>",
  createdAt: "1738031122849",
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
| `properties`                                                                                               | [components.SelectMessageEventProperties](../../models/components/selectmessageeventproperties.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `userProperties`                                                                                           | [components.SelectMessageEventUserProperties](../../models/components/selectmessageeventuserproperties.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `entityType`                                                                                               | [components.SelectMessageEventEntityType](../../models/components/selectmessageevententitytype.md)         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |