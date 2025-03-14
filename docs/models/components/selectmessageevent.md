# SelectMessageEvent

## Example Usage

```typescript
import { SelectMessageEvent } from "@inkeep/inkeep-analytics/models/components";

let value: SelectMessageEvent = {
  id: "<id>",
  type: "<value>",
  messageId: "<id>",
  createdAt: "1715072906684",
  projectId: "<id>",
  integrationId: "<id>",
  entityType: "message",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `messageId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `integrationId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `properties`                                                                                       | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | A customizable collection of custom properties or attributes.                                      |
| `userProperties`                                                                                   | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | A customizable collection of custom properties or attributes.                                      |
| `entityType`                                                                                       | [components.SelectMessageEventEntityType](../../models/components/selectmessageevententitytype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |