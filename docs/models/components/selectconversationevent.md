# SelectConversationEvent

## Example Usage

```typescript
import { SelectConversationEvent } from "@inkeep/inkeep-analytics/models/components";

let value: SelectConversationEvent = {
  id: "<id>",
  type: "<value>",
  conversationId: "<id>",
  createdAt: "1742981870107",
  projectId: "<id>",
  integrationId: "<id>",
  entityType: "conversation",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `conversationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `projectId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `integrationId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | A customizable collection of custom properties or attributes.                                                |
| `userProperties`                                                                                             | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | A customizable collection of custom properties or attributes.                                                |
| `entityType`                                                                                                 | [components.SelectConversationEventEntityType](../../models/components/selectconversationevententitytype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |