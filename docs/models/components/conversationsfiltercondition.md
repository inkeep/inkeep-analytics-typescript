# ConversationsFilterCondition

## Example Usage

```typescript
import { ConversationsFilterCondition } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsFilterCondition = {
  condition: {
    field: "userMessageCount",
    operator: "arrayContains",
    value: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `condition`                                                  | [components.Condition](../../models/components/condition.md) | :heavy_check_mark:                                           | N/A                                                          |