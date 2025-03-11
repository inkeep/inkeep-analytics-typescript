# SelectConversationEvent

## Example Usage

```typescript
import { SelectConversationEvent } from "@inkeep/inkeep-analytics/models/components";

let value: SelectConversationEvent = {
  id: "<id>",
  type: "<value>",
  conversationId: "<id>",
  createdAt: "1726616921652",
  entityType: "conversation",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `conversationId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `projectId`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `integrationId`                                                                                                      | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `properties`                                                                                                         | [components.SelectConversationEventProperties](../../models/components/selectconversationeventproperties.md)         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `userProperties`                                                                                                     | [components.SelectConversationEventUserProperties](../../models/components/selectconversationeventuserproperties.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `entityType`                                                                                                         | [components.SelectConversationEventEntityType](../../models/components/selectconversationevententitytype.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |