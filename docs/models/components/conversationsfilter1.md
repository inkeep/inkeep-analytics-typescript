# ConversationsFilter1

## Example Usage

```typescript
import { ConversationsFilter1 } from "@inkeep/inkeep-analytics/models/components";

let value: ConversationsFilter1 = {
  condition: {
    field: "organizationId",
    operator: "in",
    value: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `condition`                                                  | [components.Condition](../../models/components/condition.md) | :heavy_check_mark:                                           | N/A                                                          |