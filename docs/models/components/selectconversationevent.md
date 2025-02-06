# SelectConversationEvent

## Example Usage

```typescript
import { SelectConversationEvent } from "inkeep-analytics-typescript/models/components";

let value: SelectConversationEvent = {
  id: "<id>",
  type: "<value>",
  conversationId: "<id>",
  createdAt: "1734255690997",
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
| `properties`                                                                                                         | [components.SelectConversationEventProperties](../../models/components/selectconversationeventproperties.md)         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `userProperties`                                                                                                     | [components.SelectConversationEventUserProperties](../../models/components/selectconversationeventuserproperties.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `entityType`                                                                                                         | [components.SelectConversationEventEntityType](../../models/components/selectconversationevententitytype.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |