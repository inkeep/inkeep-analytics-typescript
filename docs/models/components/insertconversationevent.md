# InsertConversationEvent

## Example Usage

```typescript
import { InsertConversationEvent } from "@inkeep/inkeep-analytics/models/components";

let value: InsertConversationEvent = {
  type: "<value>",
  conversationId: "<id>",
  entityType: "conversation",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `conversationId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `properties`                                                                                                         | [components.InsertConversationEventProperties](../../models/components/insertconversationeventproperties.md)         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `userProperties`                                                                                                     | [components.InsertConversationEventUserProperties](../../models/components/insertconversationeventuserproperties.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `entityType`                                                                                                         | [components.InsertConversationEventEntityType](../../models/components/insertconversationevententitytype.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |