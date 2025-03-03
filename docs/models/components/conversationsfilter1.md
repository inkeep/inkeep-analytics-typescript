# ConversationsFilter1

## Example Usage

```typescript
import { ConversationsFilter1 } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsFilter1 = {
  condition: {
    field: "integrationId",
    operator: "lte",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `condition`                                                                                        | [components.ConversationsFilterCondition](../../models/components/conversationsfiltercondition.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |